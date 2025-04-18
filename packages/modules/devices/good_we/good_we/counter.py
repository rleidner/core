#!/usr/bin/env python3
from typing import TypedDict, Any

from modules.common import modbus
from modules.common.abstract_device import AbstractCounter
from modules.common.component_state import CounterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.modbus import ModbusDataType
from modules.common.simcount import SimCounter
from modules.common.store import get_counter_value_store
from modules.devices.good_we.good_we.config import GoodWeCounterSetup
from modules.devices.good_we.good_we.version import GoodWeVersion


class KwargsDict(TypedDict):
    device_id: int
    modbus_id: int
    version: GoodWeVersion
    firmware: int
    client: modbus.ModbusTcpClient_


class GoodWeCounter(AbstractCounter):
    def __init__(self, component_config: GoodWeCounterSetup, **kwargs: Any) -> None:
        self.component_config = component_config
        self.kwargs: KwargsDict = kwargs

    def initialize(self) -> None:
        self.__modbus_id: int = self.kwargs['modbus_id']
        self.version: GoodWeVersion = self.kwargs['version']
        self.firmware: int = self.kwargs['firmware']
        self.__tcp_client: modbus.ModbusTcpClient_ = self.kwargs['client']
        self.sim_counter = SimCounter(self.kwargs['device_id'], self.component_config.id, prefix="bezug")
        self.store = get_counter_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))

    def update(self) -> None:
        with self.__tcp_client:
            if self.firmware < 9:
                power = self.__tcp_client.read_holding_registers(
                    36008, ModbusDataType.INT_16, unit=self.__modbus_id) * -1
                powers = [
                    val * -1 for val in self.__tcp_client.read_holding_registers(
                        36005, [ModbusDataType.INT_16]*3, unit=self.__modbus_id)]
            else:
                power = self.__tcp_client.read_holding_registers(
                    36025, ModbusDataType.INT_32, unit=self.__modbus_id) * -1
                powers = [
                    val * -1 for val in self.__tcp_client.read_holding_registers(
                        36019, [ModbusDataType.INT_32]*3, unit=self.__modbus_id)]

            power_factors = [
                val / 1000 for val in self.__tcp_client.read_holding_registers(
                    36010, [ModbusDataType.INT_16]*3, unit=self.__modbus_id)]
            frequency = self.__tcp_client.read_holding_registers(
                36014, ModbusDataType.UINT_16, unit=self.__modbus_id) / 100

            if self.version == GoodWeVersion.V_1_7:
                exported = self.__tcp_client.read_holding_registers(
                    36015, ModbusDataType.FLOAT_32, unit=self.__modbus_id)
                imported = self.__tcp_client.read_holding_registers(
                    36017, ModbusDataType.FLOAT_32, unit=self.__modbus_id)
            else:
                # v1.0 und v1.1 liefern keine Werte zurueck obwohl Register laut Doku gleich
                # Alternative Register für die BTC Serie liefern statische Werte
                imported, exported = self.sim_counter.sim_count(power)

        counter_state = CounterState(
            powers=powers,
            imported=imported,
            exported=exported,
            power=power,
            power_factors=power_factors,
            frequency=frequency
        )
        self.store.set(counter_state)


component_descriptor = ComponentDescriptor(configuration_factory=GoodWeCounterSetup)

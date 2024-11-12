import{D as a}from"./HardwareInstallation-2c646227.js";import{_ as d,u as t,k as l,l as m,G as i,E as s,y as n,x as c}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./index-0eaa3ed7.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";import"./dynamic-import-helper-be004503.js";const p={name:"DeviceMqtt",mixins:[a]},u={class:"device-mqtt"};function g(_,e,b,f,h,v){const r=t("openwb-base-heading"),o=t("openwb-base-alert");return l(),m("div",u,[i(r,null,{default:s(()=>e[0]||(e[0]=[n("Einstellungen für MQTT")])),_:1}),i(o,{subtype:"info"},{default:s(()=>e[1]||(e[1]=[n(" Das MQTT Modul stellt keine aktive Verbindung her, sondern erwartet, dass die Daten an die angegebenen Topics im Broker gesendet werden. Da die Daten direkt an den Broker gesendet werden, erfolgt keine Verrechnung bei Hybrid-Systemen und auch keine Berechnung fehlender Werte, z.B. von Phasen-Leistung aus Spannung und Strömen. Beim Logging und im Lastmanagement, z.B. bei verschachtelten Zählern, werden die MQTT-Zähler wie gewohnt berücksichtigt."),c("br",null,null,-1),n(" Alle Daten sind als gültiges JSON zu senden! Zahlen mit Nachkommastellen (Float) müssen einen Punkt als Dezimaltrenner verwenden (internationales Format). ")])),_:1})])}const y=d(p,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/mqtt/device.vue"]]);export{y as default};
import{D as a}from"./HardwareInstallation-2c646227.js";import{_ as p,u as t,k as d,l as m,G as n,E as l,y as u}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./index-0eaa3ed7.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSmartfox",mixins:[a]},f={class:"device-smartfox"};function _(o,e,v,x,b,g){const i=t("openwb-base-heading"),s=t("openwb-base-text-input");return d(),m("div",f,[n(i,null,{default:l(()=>e[1]||(e[1]=[u(" Einstellungen für Smartfox ")])),_:1}),n(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>o.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const y=p(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/smartfox/smartfox/device.vue"]]);export{y as default};
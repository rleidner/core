import{D as a}from"./HardwareInstallation-2b28bae8.js";import{_ as d,u as t,k as l,l as u,G as i,E as m,y as _}from"./vendor-809787c9.js";import"./vendor-fortawesome-e760f6db.js";import"./index-b3b3d3af.js";import"./vendor-bootstrap-5ce91dd7.js";import"./vendor-jquery-49acc558.js";import"./vendor-axios-57a82265.js";import"./vendor-sortablejs-d99a4022.js";import"./dynamic-import-helper-be004503.js";const b={name:"DeviceOpenwbFlex",mixins:[a]},c={class:"device-openwb-flex"};function f(o,e,v,w,g,x){const p=t("openwb-base-heading"),s=t("openwb-base-text-input"),r=t("openwb-base-number-input");return l(),u("div",c,[i(p,null,{default:m(()=>e[2]||(e[2]=[_(" Einstellungen für openWB-Flex ")])),_:1}),i(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(r,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"])])}const F=d(b,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_flex/device.vue"]]);export{F as default};
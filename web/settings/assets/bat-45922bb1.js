import{C as a}from"./HardwareInstallation-9c1cfe5a.js";import{_ as r,u as o,k as l,l as u,G as n,E as m,y as c}from"./vendor-88a3d381.js";import"./vendor-fortawesome-2ab93053.js";import"./index-d7731c53.js";import"./vendor-bootstrap-6598ffd1.js";import"./vendor-jquery-536f4487.js";import"./vendor-axios-29ac7e52.js";import"./vendor-sortablejs-f1eda7cf.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceOpenwbEvukitBat",mixins:[a]},_={class:"device-openwb-evukit-bat"};function v(t,e,b,f,w,g){const i=o("openwb-base-heading"),s=o("openwb-base-select-input");return l(),u("div",_,[n(i,null,{default:m(()=>e[1]||(e[1]=[c(" Einstellungen für openWB EVU-Kit Batteriespeicher ")])),_:1}),n(s,{title:"Zählermodell","not-selected":"Bitte auswählen",options:[{value:0,text:"MPM3PM"},{value:1,text:"SDM120"},{value:2,text:"SDM630/SDM72D-M"}],"model-value":t.component.configuration.version,required:"","onUpdate:modelValue":e[0]||(e[0]=p=>t.updateConfiguration(p,"configuration.version"))},null,8,["model-value"])])}const $=r(d,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_evu_kit/bat.vue"]]);export{$ as default};
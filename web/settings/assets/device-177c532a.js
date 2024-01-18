import{_ as m,q as o,k as _,l as b,B as i,M as u,x as a,u as d,y as f}from"./vendor-72da2ec6.js";import"./vendor-sortablejs-bc651bf7.js";const g={name:"DeviceHuawei",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-huawei"},h={class:"small"},w=d("br",null,null,-1);function x(n,e,s,D,I,r){const l=o("openwb-base-heading"),c=o("openwb-base-text-input"),p=o("openwb-base-number-input");return _(),b("div",v,[i(l,null,{default:u(()=>[a(" Einstellungen für Huawei "),d("span",h,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),i(c,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=t=>r.updateConfiguration(t,"configuration.ip_address"))},null,8,["model-value"]),i(p,{title:"Modbus ID","model-value":s.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=t=>r.updateConfiguration(t,"configuration.modbus_id"))},{help:u(()=>[a(' Sind mehrere Huawei Wechselrichter als "Schwarm" verbunden, dann besitzt der Master vermutlich die ID "16". Über diese ID werden dann alle Daten in Summe zur Verfügung gestellt.'),w,a(" Die IDs 1 bis 15 sind für einzelne Wechselrichter reserviert. ")]),_:1},8,["model-value"])])}const C=m(g,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/huawei/device.vue"]]);export{C as default};
import{_ as m,u as a,k as p,l as _,D as n,N as u,y as d,x as f,z as g}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const b={name:"DeviceSolarEdgeCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-solaredge-counter"},h={class:"small"};function w(o,e,r,E,x,i){const l=a("openwb-base-heading"),c=a("openwb-base-alert"),s=a("openwb-base-number-input");return p(),_("div",v,[n(l,null,{default:u(()=>[d(" Einstellungen für SolarEdge Zähler "),f("span",h,"(Modul: "+g(o.$options.name)+")",1)]),_:1}),n(c,{subtype:"info"},{default:u(()=>[d(" Hierfür muss ein EVU-Zähler am SolarEdge Wechselrichter per Modbus angebunden sein. Der Zähler muss an erster Position im Wechselrichter konfiguriert sein. ")]),_:1}),n(s,{title:"SolarEdge-Geräte-ID",required:"","model-value":r.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=t=>i.updateConfiguration(t,"configuration.modbus_id"))},null,8,["model-value"]),n(s,{title:"SolarEdge-Meter-ID","model-value":r.configuration.meter_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=t=>i.updateConfiguration(t,"configuration.meter_id"))},null,8,["model-value"])])}const S=m(b,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/counter.vue"]]);export{S as default};
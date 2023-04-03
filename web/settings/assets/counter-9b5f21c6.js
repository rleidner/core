import{_ as m,p as a,k as p,l as _,A as n,L as u,u as d,q as f,x as b}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const g={name:"DeviceSolarEdgeCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-solaredge-counter"},h={class:"small"};function w(o,e,i,x,C,r){const l=a("openwb-base-heading"),c=a("openwb-base-alert"),s=a("openwb-base-number-input");return p(),_("div",v,[n(l,null,{default:u(()=>[d(" Einstellungen für SolarEdge Zähler "),f("span",h,"(Modul: "+b(o.$options.name)+")",1)]),_:1}),n(c,{subtype:"info"},{default:u(()=>[d(" Hierfür muss ein EVU-Zähler am SolarEdge Wechselrichter per Modbus angebunden sein. Der Zähler muss an erster Position im Wechselrichter konfiguriert sein. ")]),_:1}),n(s,{title:"Modbus ID","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=t=>r.updateConfiguration(t,"configuration.modbus_id"))},null,8,["model-value"]),n(s,{title:"Meter ID","model-value":i.configuration.meter_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=t=>r.updateConfiguration(t,"configuration.meter_id"))},null,8,["model-value"])])}const D=m(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/counter.vue"]]);export{D as default};
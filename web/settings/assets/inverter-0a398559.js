import{_ as c,q as t,k as d,l as u,B as o,M as s,x as r,u as p,y as l}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"DeviceSungrowInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-sungrow-inverter"},m={class:"small"};function g(e,n,v,b,h,w){const a=t("openwb-base-heading"),i=t("openwb-base-alert");return d(),u("div",f,[o(a,null,{default:s(()=>[r(" Einstellungen für Sungrow Wechselrichter "),p("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[r(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/inverter.vue"]]);export{B as default};
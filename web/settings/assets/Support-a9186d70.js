import{l as w,g as y,F as V}from"./vendor-fortawesome-d70ae91e.js";import{C as B}from"./index-167c5223.js";import{_ as v,p as a,k as r,l as c,q as l,y as h,L as s,A as n,a2 as z,z as g,u as t,n as F}from"./vendor-8521f8a3.js";import"./vendor-bootstrap-1e832c7e.js";import"./vendor-jquery-0e339578.js";import"./vendor-axios-e2840f20.js";import"./vendor-sortablejs-5d1612dc.js";w.add(y);const x={name:"OpenwbSupport",mixins:[B],emits:["sendCommand"],components:{FontAwesomeIcon:V},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/dataprotection_acknowledged"],sendDebugData:{email:"",serialNumber:"",installedComponents:"",vehicles:"",message:""},enableSendDebugButton:!0}},methods:{sendDebugMessage(){if(document.forms.supportForm.reportValidity())this.$emit("sendCommand",{command:"sendDebug",data:this.sendDebugData}),this.enableSendDebugButton=!1;else{console.log("form invalid");return}}}},C={class:"support"},q={name:"supportForm"},A={key:1},W={key:0},N=l("li",null,' Vergewissern Sie sich, dass mindestens die aktuelle "Stable" Version installiert ist. ',-1),M=l("li",null," Stellen Sie beim Absenden des Berichtes die Fehlerkonditionen her. Lädt ein Fahrzeug nicht, sollte es angeschlossen und nicht voll geladen sein. Ist PV laden betroffen, sollte die Sonne auch scheinen. Der Systembericht muss dann versendet werden, wenn der Fehler aktuell vorliegt. ",-1),U=l("li",null," Stellen Sie sicher, dass der Lademodus korrekt gewählt ist und im Falle von nicht ladenden Fahrzeugen, dass der Ladepunkt auch entsperrt wurde. ",-1),E=l("li",null," Das Auslesen der Systemkonfiguration erfolgt direkt nach den Klick auf Absenden und kann einige Zeit in Anspruch nehmen. Sie erhalten ca. 15 bis 30 Minuten nach Versand des Systemberichtes von uns automatisch eine E-Mail mit der Ticketnummer unter der die Anfrage bei uns registriert wurde. Wir melden uns bei ihnen. Bitte kontrollieren Sie daher immer auch den Spam Ordner auf eingehende Nachrichten. Erhalten Sie trotzdem keine Ticketnummer, ist das Versenden des Systemberichtes fehlgeschlagen. ",-1),G={class:"row justify-content-center"};function L(d,o,P,T,e,_){const b=a("router-link"),u=a("openwb-base-alert"),f=a("FontAwesomeIcon"),p=a("openwb-base-text-input"),m=a("openwb-base-textarea"),k=a("openwb-base-click-button"),S=a("openwb-base-card"),D=a("font-awesome-icon");return r(),c("div",C,[l("form",q,[d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]!==!0?(r(),h(u,{key:0,subtype:"danger"},{default:s(()=>[t(" Sie müssen der "),n(b,{to:"/System/DataProtection"},{default:s(()=>[t(" Datenschutzerklärung ")]),_:1}),t(" zustimmen, um einen Systembericht senden zu können. ")]),_:1})):(r(),c("div",A,[n(u,{subtype:"success"},{default:s(()=>[t(" Sie haben der "),n(b,{to:"/System/DataProtection"},{default:s(()=>[t(" Datenschutzerklärung ")]),_:1}),t(" zugestimmt und können Systemberichte senden. ")]),_:1}),n(S,{title:"Systembericht"},z({default:s(()=>[d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?(r(),c("div",W,[n(u,{subtype:"info"},{default:s(()=>[l("ul",null,[l("li",null,[t(" Lesen Sie den Hilfetext, der durch Klick auf das "),n(f,{icon:["far","question-circle"]}),t(" angezeigt wird. Nehmen Sie das Wiki zur Hilfe. ")]),N,M,U,E])]),_:1}),n(p,{title:"E-Mail",required:"",subtype:"email",modelValue:e.sendDebugData.email,"onUpdate:modelValue":o[0]||(o[0]=i=>e.sendDebugData.email=i)},null,8,["modelValue"]),n(p,{title:"openWB Seriennummer",required:"",modelValue:e.sendDebugData.serialNumber,"onUpdate:modelValue":o[1]||(o[1]=i=>e.sendDebugData.serialNumber=i)},{help:s(()=>[t(" Die Seriennummer der openWB finden Sie außen am Gehäuse - bei Älteren innen im Gehäuse. Sie können uns aber auch eine Bestellnummer oder Rechnungsnummer übermitteln. Das Gehäuse muss nicht extra geöffnet werden! ")]),_:1},8,["modelValue"]),n(m,{title:"Verwendete Komponenten",required:"",minlength:"3",maxlength:"500",modelValue:e.sendDebugData.installedComponents,"onUpdate:modelValue":o[2]||(o[2]=i=>e.sendDebugData.installedComponents=i)},{help:s(()=>[t(" Geben Sie hier möglichst detailliert an, welche Anlagenkomponenten (EVU, PV, Speicher) angebunden sind. ")]),_:1},8,["modelValue"]),n(m,{title:"Fahrzeuge",required:"",minlength:"3",maxlength:"500",modelValue:e.sendDebugData.vehicles,"onUpdate:modelValue":o[3]||(o[3]=i=>e.sendDebugData.vehicles=i)},{help:s(()=>[t(" Geben Sie hier an, welche Fahrzeuge geladen werden (Hersteller, Modell, Baujahr). ")]),_:1},8,["modelValue"]),n(m,{title:"Problembeschreibung",required:"",minlength:"20",maxlength:"500",modelValue:e.sendDebugData.message,"onUpdate:modelValue":o[4]||(o[4]=i=>e.sendDebugData.message=i)},null,8,["modelValue"])])):g("v-if",!0)]),_:2},[d.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?{name:"footer",fn:s(()=>[l("div",G,[n(k,{class:F(["col-4",e.enableSendDebugButton?"btn-success":"btn-outline-success"]),disabled:!e.enableSendDebugButton,onButtonClicked:_.sendDebugMessage},{default:s(()=>[t(" Absenden ")]),_:1},8,["class","disabled","onButtonClicked"])])]),key:"0"}:void 0]),1024),e.enableSendDebugButton?g("v-if",!0):(r(),h(u,{key:0,subtype:"success"},{default:s(()=>[t(" Die Daten für den Fehlerbericht werden im Hintergrund zusammengestellt. Sie können diese Seite jetzt verlassen. "),n(D,{"fixed-width":"",icon:["fas","check"]})]),_:1}))]))])])}const J=v(x,[["render",L],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Support.vue"]]);export{J as default};
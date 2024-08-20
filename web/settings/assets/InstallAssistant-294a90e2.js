import{C as r,_ as t}from"./index-6111949f.js";import{_}from"./dynamic-import-helper-be004503.js";import{_ as m,a1 as p,q as d,k as i,l as u,B as A,M as v,z as c,a2 as E,x as I}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-81d2adb8.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const P={name:"InstallAssistantView",mixins:[r],emits:["sendCommand","save","reset","defaults"],data(){return{currentPage:0,lastPage:10,showEndAssistantModal:!1}},computed:{myStepComponent(){return console.debug(`loading assistant page: ${this.currentPage}`),p({loader:()=>_(Object.assign({"../components/install_assistant/InstallAssistantStep0.vue":()=>t(()=>import("./InstallAssistantStep0-459481fc.js"),["assets/InstallAssistantStep0-459481fc.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep1.vue":()=>t(()=>import("./InstallAssistantStep1-a50f9ef8.js"),["assets/InstallAssistantStep1-a50f9ef8.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-514ba6d0.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep10.vue":()=>t(()=>import("./InstallAssistantStep10-a8292e49.js"),["assets/InstallAssistantStep10-a8292e49.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep2.vue":()=>t(()=>import("./InstallAssistantStep2-220454ce.js"),["assets/InstallAssistantStep2-220454ce.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/System-7cb4a0a8.js","assets/System-0f1d217b.css"]),"../components/install_assistant/InstallAssistantStep3.vue":()=>t(()=>import("./InstallAssistantStep3-f31c285c.js"),["assets/InstallAssistantStep3-f31c285c.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/GeneralConfig-4c488719.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep4.vue":()=>t(()=>import("./InstallAssistantStep4-a8b7d20a.js"),["assets/InstallAssistantStep4-a8b7d20a.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-4a78005c.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-ed6a5c7e.css"]),"../components/install_assistant/InstallAssistantStep5.vue":()=>t(()=>import("./InstallAssistantStep5-cb9f14a3.js"),["assets/InstallAssistantStep5-cb9f14a3.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/HardwareInstallation-2578fe26.js","assets/dynamic-import-helper-be004503.js","assets/HardwareInstallation-1ee9693f.css"]),"../components/install_assistant/InstallAssistantStep6.vue":()=>t(()=>import("./InstallAssistantStep6-a0071ef9.js"),["assets/InstallAssistantStep6-a0071ef9.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-4a78005c.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-ed6a5c7e.css"]),"../components/install_assistant/InstallAssistantStep7.vue":()=>t(()=>import("./InstallAssistantStep7-80483115.js"),["assets/InstallAssistantStep7-80483115.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/LoadManagementConfig-6ac191a5.js","assets/OpenwbSortableList-63e10d10.js","assets/OpenwbSortableList-7ba533e4.css"]),"../components/install_assistant/InstallAssistantStep8.vue":()=>t(()=>import("./InstallAssistantStep8-573ba9a0.js"),["assets/InstallAssistantStep8-573ba9a0.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/VehicleConfig-b22b9df0.js","assets/dynamic-import-helper-be004503.js","assets/VehicleConfig-4aeda6ca.css"]),"../components/install_assistant/InstallAssistantStep9.vue":()=>t(()=>import("./InstallAssistantStep9-535e16b1.js"),["assets/InstallAssistantStep9-535e16b1.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-514ba6d0.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStepTemplate.vue":()=>t(()=>import("./InstallAssistantStepTemplate-1a7b92e6.js"),["assets/InstallAssistantStepTemplate-1a7b92e6.js","assets/index-6111949f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-81d2adb8.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-ff479f80.css"])}),`../components/install_assistant/InstallAssistantStep${this.currentPage}.vue`)})}},methods:{switchPage(s){s>=0&&s<=this.lastPage?this.currentPage=s:console.error(`invalid assistant page number: ${s}`)},endAssistantModal(){this.currentPage!=this.lastPage?this.showEndAssistantModal=!0:this.endAssistant("confirm")},endAssistant(s){this.showEndAssistantModal=!1,s=="confirm"&&(this.updateState("openWB/system/installAssistantDone",!0),this.$root.doPublish("openWB/set/system/installAssistantDone",!0),this.$router.push("/Status"))}}};function S(s,e,f,g,o,n){const l=d("openwb-base-modal-dialog");return i(),u("div",null,[A(l,{show:o.showEndAssistantModal,title:"Assistent beenden",subtype:"danger",buttons:[{text:"Beenden",event:"confirm",subtype:"danger"}],onModalResult:n.endAssistant},{default:v(()=>[I(" Wollen Sie den Assistenten wirklich vorzeitig beenden? ")]),_:1},8,["show","onModalResult"]),(i(),c(E(n.myStepComponent),{onSendCommand:e[0]||(e[0]=a=>s.$emit("sendCommand",a)),onSave:e[1]||(e[1]=a=>s.$emit("save")),onReset:e[2]||(e[2]=a=>s.$emit("reset")),onDefaults:e[3]||(e[3]=a=>s.$emit("defaults")),onSwitchPage:n.switchPage,onEndAssistant:n.endAssistantModal},null,40,["onSwitchPage","onEndAssistant"]))])}const L=m(P,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstallAssistant.vue"]]);export{L as default};
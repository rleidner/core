import{C as r,_ as t}from"./index-0eaa3ed7.js";import{_}from"./dynamic-import-helper-be004503.js";import{_ as m,a1 as p,u as d,k as i,l as u,G as A,E as v,z as E,a2 as I,y as c}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";const P={name:"InstallAssistantView",mixins:[r],emits:["sendCommand","save","reset","defaults"],data(){return{currentPage:0,lastPage:10,showEndAssistantModal:!1}},computed:{myStepComponent(){return console.debug(`loading assistant page: ${this.currentPage}`),p({loader:()=>_(Object.assign({"../components/install_assistant/InstallAssistantStep0.vue":()=>t(()=>import("./InstallAssistantStep0-6eeda421.js"),["assets/InstallAssistantStep0-6eeda421.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep1.vue":()=>t(()=>import("./InstallAssistantStep1-d6607729.js"),["assets/InstallAssistantStep1-d6607729.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-412e6d1f.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep10.vue":()=>t(()=>import("./InstallAssistantStep10-ae888a7c.js"),["assets/InstallAssistantStep10-ae888a7c.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep2.vue":()=>t(()=>import("./InstallAssistantStep2-17004c15.js"),["assets/InstallAssistantStep2-17004c15.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/System-fcb32498.js","assets/System-0f1d217b.css"]),"../components/install_assistant/InstallAssistantStep3.vue":()=>t(()=>import("./InstallAssistantStep3-56594fd2.js"),["assets/InstallAssistantStep3-56594fd2.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/GeneralConfig-e7366325.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep4.vue":()=>t(()=>import("./InstallAssistantStep4-5bf724d7.js"),["assets/InstallAssistantStep4-5bf724d7.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-711b4750.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-7b9399a8.css"]),"../components/install_assistant/InstallAssistantStep5.vue":()=>t(()=>import("./InstallAssistantStep5-7435fe3c.js"),["assets/InstallAssistantStep5-7435fe3c.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/HardwareInstallation-2c646227.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep6.vue":()=>t(()=>import("./InstallAssistantStep6-a01f2d88.js"),["assets/InstallAssistantStep6-a01f2d88.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-711b4750.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-7b9399a8.css"]),"../components/install_assistant/InstallAssistantStep7.vue":()=>t(()=>import("./InstallAssistantStep7-050a5ce4.js"),["assets/InstallAssistantStep7-050a5ce4.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/LoadManagementConfig-bcc5cb40.js","assets/OpenwbSortableList-84fa8be3.js","assets/OpenwbSortableList-7ba533e4.css"]),"../components/install_assistant/InstallAssistantStep8.vue":()=>t(()=>import("./InstallAssistantStep8-47e44983.js"),["assets/InstallAssistantStep8-47e44983.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/VehicleConfig-94a948fc.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep9.vue":()=>t(()=>import("./InstallAssistantStep9-abade081.js"),["assets/InstallAssistantStep9-abade081.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-3e24c368.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-412e6d1f.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStepTemplate.vue":()=>t(()=>import("./InstallAssistantStepTemplate-3e24c368.js"),["assets/InstallAssistantStepTemplate-3e24c368.js","assets/index-0eaa3ed7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/InstallAssistantStepTemplate-ff479f80.css"])}),`../components/install_assistant/InstallAssistantStep${this.currentPage}.vue`)})}},methods:{switchPage(s){s>=0&&s<=this.lastPage?this.currentPage=s:console.error(`invalid assistant page number: ${s}`)},endAssistantModal(){this.currentPage!=this.lastPage?this.showEndAssistantModal=!0:this.endAssistant("confirm")},endAssistant(s){this.showEndAssistantModal=!1,s=="confirm"&&(this.updateState("openWB/system/installAssistantDone",!0),this.$root.doPublish("openWB/set/system/installAssistantDone",!0),this.$router.push("/Status"))}}};function S(s,e,f,g,o,n){const l=d("openwb-base-modal-dialog");return i(),u("div",null,[A(l,{show:o.showEndAssistantModal,title:"Assistent beenden",subtype:"danger",buttons:[{text:"Beenden",event:"confirm",subtype:"danger"}],onModalResult:n.endAssistant},{default:v(()=>e[4]||(e[4]=[c(" Wollen Sie den Assistenten wirklich vorzeitig beenden? ")])),_:1},8,["show","onModalResult"]),(i(),E(I(n.myStepComponent),{onSendCommand:e[0]||(e[0]=a=>s.$emit("sendCommand",a)),onSave:e[1]||(e[1]=a=>s.$emit("save")),onReset:e[2]||(e[2]=a=>s.$emit("reset")),onDefaults:e[3]||(e[3]=a=>s.$emit("defaults")),onSwitchPage:n.switchPage,onEndAssistant:n.endAssistantModal},null,40,["onSwitchPage","onEndAssistant"]))])}const L=m(P,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstallAssistant.vue"]]);export{L as default};
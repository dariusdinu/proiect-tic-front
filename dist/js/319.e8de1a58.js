"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[319],{7319:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var i=r(3396),s=r(7139);const d=e=>((0,i.dD)("data-v-16037c5d"),e=e(),(0,i.Cn)(),e),t={class:"header"},a=d((()=>(0,i._)("span",{class:"title"},"Reminders",-1))),l=d((()=>(0,i._)("i",{class:"fa-solid fa-plus"},null,-1))),o={class:"reminders-container"},c={class:"reminder-info date-info"},m=d((()=>(0,i._)("strong",null,"From:",-1))),u={class:"container-main-info"},h={class:"reminder-info-card"},_={class:"reminder-info"},f=d((()=>(0,i._)("strong",null,"Name:",-1))),p=d((()=>(0,i._)("br",null,null,-1))),k={class:"reminder-info-card"},w={class:"reminder-info"},g=d((()=>(0,i._)("strong",null,"Type:",-1))),b=d((()=>(0,i._)("br",null,null,-1))),v={class:"reminder-info-card"},U={class:"reminder-info"},R=d((()=>(0,i._)("strong",null,"How often:",-1))),$=d((()=>(0,i._)("br",null,null,-1))),y={class:"btn-container"},C=["onClick"],D=d((()=>(0,i._)("i",{class:"fa-solid fa-trash"},null,-1))),z=[D],A=["onClick"],E=d((()=>(0,i._)("i",{class:"fa-solid fa-pen-to-square"},null,-1)));function H(e,n,r,d,D,H){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",t,[a,(0,i._)("button",{onClick:n[0]||(n[0]=(...e)=>H.addReminder&&H.addReminder(...e)),class:"btn-add-reminder"},[l,(0,i.Uk)(" Add a new reminder ")])]),(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(H.reminders,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"reminder-card"},[(0,i._)("p",c,[m,(0,i.Uk)(" "+(0,s.zw)(e.startDate),1)]),(0,i._)("div",u,[(0,i._)("div",h,[(0,i._)("p",_,[f,(0,i.Uk)(),p,(0,i.Uk)((0,s.zw)(e.name),1)])]),(0,i._)("div",k,[(0,i._)("p",w,[g,(0,i.Uk)(),b,(0,i.Uk)((0,s.zw)(e.type),1)])]),(0,i._)("div",v,[(0,i._)("p",U,[R,(0,i.Uk)(),$,(0,i.Uk)(" every "+(0,s.zw)(e.numberOfTimeUnits)+" "+(0,s.zw)(e.timeUnit),1)])])]),(0,i._)("div",y,[(0,i._)("button",{onClick:n=>H.handleDelete(this.id,e.id),class:"btn-delete-reminder"},z,8,C),(0,i._)("button",{onClick:n=>H.handleEdit(e.id),class:"btn-edit-reminder"},[E,(0,i.Uk)("Edit reminder ")],8,A)])])))),128))])],64)}r(7658);var I={name:"RemindersView",props:{id:{type:String,required:!0}},data(){return{error:null}},created(){this.error=null,this.loadReminders()},computed:{reminders(){return this.$store.getters.getReminders},isAdmin(){return this.$store.getters.isAdmin||"darius@email.com"===localStorage.getItem("email")}},methods:{async handleDelete(e,n){this.error=null;try{await this.$store.dispatch("deleteReminder",{id:e,reminderId:n})}catch(r){this.error=r.message}},async loadReminders(){const e=this.id;await this.$store.dispatch("loadReminders",{id:e})},handleEdit(e){this.$router.push(`/plants/${this.id}/reminders/${e}/edit`)},addReminder(){this.$router.push(`/plants/${this.id}/reminders/add`)}}},q=r(89);const S=(0,q.Z)(I,[["render",H],["__scopeId","data-v-16037c5d"]]);var T=S}}]);
//# sourceMappingURL=319.e8de1a58.js.map
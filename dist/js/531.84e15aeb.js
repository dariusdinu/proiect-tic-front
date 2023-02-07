"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[531],{5531:function(t,e,i){i.r(e),i.d(e,{default:function(){return $}});var r=i(3396),a=i(9242),n=i(7139);const s=t=>((0,r.dD)("data-v-ed5ae248"),t=t(),(0,r.Cn)(),t),o=s((()=>(0,r._)("h1",null,"Edit Reminder",-1))),l={class:"reminder-info-container"},d={class:"div-for-select"},m=(0,r.uE)('<option value="water" data-v-ed5ae248>water</option><option value="fertilize" data-v-ed5ae248>fertilize</option><option value="mist" data-v-ed5ae248>mist</option><option value="repot" data-v-ed5ae248>repot</option><option value="other" data-v-ed5ae248>other</option>',5),p=[m],u=s((()=>(0,r._)("i",{class:"fa-solid fa-angle-down"},null,-1))),h={class:"div-for-select"},c=s((()=>(0,r._)("option",{value:"days"},"days",-1))),y=s((()=>(0,r._)("option",{value:"weeks"},"weeks",-1))),f=s((()=>(0,r._)("option",{value:"months"},"months",-1))),v=s((()=>(0,r._)("option",{value:"years"},"years",-1))),U=[c,y,f,v],b=s((()=>(0,r._)("i",{class:"fa-solid fa-angle-down"},null,-1))),_=s((()=>(0,r._)("div",null,[(0,r._)("button",{type:"submit",class:"btn-save"},"Save")],-1))),w={key:0,class:"error-input-form"};function g(t,e,i,s,m,c){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("form",{onSubmit:e[5]||(e[5]=(0,a.iM)(((...t)=>c.submitForm&&c.submitForm(...t)),["prevent"])),class:"form"},[(0,r._)("div",l,[(0,r.wy)((0,r._)("input",{class:"input",type:"text",placeholder:"name","onUpdate:modelValue":e[0]||(e[0]=t=>m.name=t)},null,512),[[a.nr,m.name,void 0,{trim:!0}]]),(0,r._)("div",d,[(0,r.wy)((0,r._)("select",{class:"select-type",name:"type",id:"type","onUpdate:modelValue":e[1]||(e[1]=t=>m.type=t)},p,512),[[a.bM,m.type,void 0,{trim:!0}]]),u]),(0,r.wy)((0,r._)("input",{class:"input",type:"date",placeholder:"startDate","onUpdate:modelValue":e[2]||(e[2]=t=>m.startDate=t)},null,512),[[a.nr,m.startDate,void 0,{trim:!0}]]),(0,r.wy)((0,r._)("input",{class:"input",type:"number",placeholder:"How often","onUpdate:modelValue":e[3]||(e[3]=t=>m.numberOfTimeUnits=t)},null,512),[[a.nr,m.numberOfTimeUnits,void 0,{trim:!0}]]),(0,r._)("div",h,[(0,r.wy)((0,r._)("select",{class:"select-time-unit",name:"timeUnit",id:"timeUnit","onUpdate:modelValue":e[4]||(e[4]=t=>m.timeUnit=t)},U,512),[[a.bM,m.timeUnit,void 0,{trim:!0}]]),b])]),_],32),m.error?((0,r.wg)(),(0,r.iD)("p",w,(0,n.zw)(m.error),1)):(0,r.kq)("",!0)],64)}i(7658);var D=i(6943),k={name:"ReminderEdit",props:{id:{type:String,required:!0},reminderId:{type:String,required:!0}},data(){return{timeUnit:[],name:"",type:[],startDate:"",numberOfTimeUnits:"",error:""}},created(){this.getReminder()},methods:{async getReminder(){const t=await D.Z.get(`https://tic-project-plantly.herokuapp.com/plants/${this.id}/reminders/${this.reminderId}`),{timeUnit:e,name:i,type:r,startDate:a,numberOfTimeUnits:n}=t.data||{};this.timeUnit=e,this.name=i,this.type=r,this.startDate=a,this.numberOfTimeUnits=n},async submitForm(){this.resetError();const t=this.validateForm();if(!t)return;const e={name:this.name,type:this.type,startDate:this.startDate,numberOfTimeUnits:this.numberOfTimeUnits};await D.Z.put(`https://tic-project-plantly.herokuapp.com/admin/plants/${this.id}/reminders/${this.reminderId}`,e,{headers:{authorization:`Bearer ${localStorage.getItem("token")}`}}),this.$router.push(`/plants/${this.id}/reminders`)},resetError(){this.error=null},validateForm(){let t=!0;return 0===this.name.trim().length&&(this.error="All fields are mandatory.",t=!1),0===this.numberOfTimeUnits&&(this.error="All fields are mandatory.",t=!1),0===this.type.trim().length&&(this.error="All fields are mandatory.",t=!1),0===this.startDate.trim().length&&(this.error="All fields are mandatory.",t=!1),""===this.timeUnit&&(this.error="All fields are mandatory.",t=!1),t}}},O=i(89);const T=(0,O.Z)(k,[["render",g],["__scopeId","data-v-ed5ae248"]]);var $=T}}]);
//# sourceMappingURL=531.84e15aeb.js.map
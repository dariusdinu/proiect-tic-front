"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[53],{8053:function(e,t,o){o.r(t),o.d(t,{default:function(){return w}});var i=o(3396),l=o(9242),r=o(7139);const a=e=>((0,i.dD)("data-v-4ec0234e"),e=e(),(0,i.Cn)(),e),n=a((()=>(0,i._)("h1",null,"Add a new friend",-1))),s={class:"input-fields--container"},p={class:"div-for-select"},d=(0,i.uE)('<option value="" selected data-v-4ec0234e>Select toxicity</option><option value="1" data-v-4ec0234e>1</option><option value="2" data-v-4ec0234e>2</option><option value="3" data-v-4ec0234e>3</option><option value="4" data-v-4ec0234e>4</option><option value="5" data-v-4ec0234e>5</option><option value="6" data-v-4ec0234e>6</option><option value="7" data-v-4ec0234e>7</option><option value="8" data-v-4ec0234e>8</option><option value="9" data-v-4ec0234e>8</option><option value="10" data-v-4ec0234e>10</option>',11),u=[d],c=a((()=>(0,i._)("i",{class:"fa-solid fa-angle-down"},null,-1))),m=a((()=>(0,i._)("div",null,[(0,i._)("button",{type:"submit",class:"btn-add-new-plant"},"Add")],-1))),h={key:0,class:"error-input-form"};function v(e,t,o,a,d,v){const y=(0,i.up)("the-header");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(y),(0,i._)("div",null,[n,(0,i._)("form",{onSubmit:t[8]||(t[8]=(0,l.iM)(((...e)=>v.submitForm&&v.submitForm(...e)),["prevent"])),class:"form"},[(0,i._)("div",s,[(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=e=>d.name=e),class:"input"},null,512),[[l.nr,d.name,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Species","onUpdate:modelValue":t[1]||(t[1]=e=>d.species=e),class:"input"},null,512),[[l.nr,d.species,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Room","onUpdate:modelValue":t[2]||(t[2]=e=>d.room=e),class:"input"},null,512),[[l.nr,d.room,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Soil Type","onUpdate:modelValue":t[3]||(t[3]=e=>d.soilType=e),class:"input"},null,512),[[l.nr,d.soilType,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Sun Exposure","onUpdate:modelValue":t[4]||(t[4]=e=>d.sunExposure=e),class:"input"},null,512),[[l.nr,d.sunExposure,void 0,{trim:!0}]]),(0,i._)("div",p,[(0,i.wy)((0,i._)("select",{name:"toxicityLevel",id:"toxicityLevel","onUpdate:modelValue":t[5]||(t[5]=e=>d.toxicityLevel=e),class:"select-toxicity"},u,512),[[l.bM,d.toxicityLevel]]),c]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Color","onUpdate:modelValue":t[6]||(t[6]=e=>d.color=e),class:"input"},null,512),[[l.nr,d.color,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"number",placeholder:"Max Height","onUpdate:modelValue":t[7]||(t[7]=e=>d.maxHeight=e),class:"input"},null,512),[[l.nr,d.maxHeight]])]),m],32),d.error?((0,i.wg)(),(0,i.iD)("p",h,(0,r.zw)(d.error),1)):(0,i.kq)("",!0)])],64)}o(7658);var y=o(6943),x={name:"AddPlantView",data(){return{name:"",species:"",room:"",sunExposure:"",soilType:"",color:"",maxHeight:"",toxicityLevel:"",error:""}},methods:{async submitForm(){this.resetError();const e=this.validateForm();if(!e)return;const t={name:this.name,species:this.species,room:this.room,sunExposure:this.sunExposure,soilType:this.soilType,toxicityLevel:this.toxicityLevel,color:this.color,maxHeight:this.maxHeight};await y.Z.post("https://tic-project-plantly.herokuapp.com/admin/plants",t,{headers:{authorization:`Bearer ${localStorage.getItem("token")}`}}),this.$router.push("/")},resetError(){this.error=null},validateForm(){let e=!0;return 0===this.name.trim().length&&(this.error="All fields are mandatory.",e=!1),0===this.species.trim().length&&(this.error="All fields are mandatory.",e=!1),0===this.room.trim().length&&(this.error="All fields are mandatory.",e=!1),0===this.sunExposure.trim().length&&(this.error="All fields are mandatory.",e=!1),""===this.toxicityLevel&&(this.error="All fields are mandatory.",e=!1),0===this.soilType.length&&(this.error="All fields are mandatory.",e=!1),0===this.color.length&&(this.error="All fields are mandatory.",e=!1),0===this.maxHeight&&(this.error="All fields are mandatory.",e=!1),e}}},f=o(89);const g=(0,f.Z)(x,[["render",v],["__scopeId","data-v-4ec0234e"]]);var w=g}}]);
//# sourceMappingURL=53.679473b0.js.map
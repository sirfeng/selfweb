let a=document.createElement("style");a.innerHTML=".header-view[data-v-e1c02c6c]{padding:50px 20px 0}.content-view[data-v-e1c02c6c]{padding:20px;max-width:1200px;margin:auto}.card-view[data-v-e1c02c6c]{margin-bottom:20px;padding:10px 20px;height:200px}.card-view .card-content>div[data-v-e1c02c6c]{padding-bottom:10px}.card-view .card-content>div[data-v-e1c02c6c]:last-child{padding-bottom:0}.card-view .card-header[data-v-e1c02c6c]{display:flex}.card-view .card-header .card-image[data-v-e1c02c6c]{width:50px;margin-right:5px}.card-view .card-des[data-v-e1c02c6c]{color:#888;font-size:14px}.card-view .card-des .des-view[data-v-e1c02c6c]{max-height:80px;overflow:auto}.card-view .ml-2[data-v-e1c02c6c]{margin:0 5px 5px 0}",document.head.appendChild(a);import{r as e,E as t,s as l,c as d,a as o,b as s,w as n,F as c,d as r,o as i,e as u,f as m,g as p,h as g,t as v,i as h}from"./index.77845d22.js";var f={setup:()=>({data:e({Search:l,form:{text:"",check:[]},listCard:[{name:"Plugin Name",des:"It is a program written according to a certain standard application program interface. It can only run on the system platform specified by the program (which may support multiple platforms at the same time), and cannot run separately from the specified platform. Because the plugin needs to call the function library or data provided by the original pure system. Many software have plugins, and there are countless types of plugins. For example, in IE, after installing relevant plugins",star:2.6,tag:["Good","Easy to use"]},{name:"Plugin Name",des:"Introduction to plugins",star:2,tag:["Good","Easy to use"]},{name:"Plugin Name",des:"Introduction to plugins",star:2,tag:["Good","Easy to use"]},{name:"Plugin NamePlugin NamePlugin NamePlugin Name",des:"Introduction to plugins",star:2,tag:["Good","Easy to use"]},{name:"Plugin Name",des:"Introduction to plugins",star:2,tag:["Good","Easy to use"]},{name:"Plugin Name",des:"Introduction to plugins",star:2,tag:["Good","Easy to use"]},{name:"Plugin Name",des:"Introduction to plugins",star:2,tag:["Good","Easy to use"]}]}),slack_logo_mark:"/_assets/slack_logo_mark.480ef7c3.svg",handleSearch:()=>{t({showClose:!0,message:"Searching",type:"warning"})}})};const x={class:"header-view"},y={class:"content-view"},w={class:"card-content"},_={class:"card-header"},b=["src"],k={style:{margin:"10px"}},P={class:"text-overfow"},E={style:{margin:"10px"}},I={class:"card-des"},N={class:"des-view"};f.render=function(a,e,t,l,f,V){const S=r("el-button"),G=r("el-input"),C=r("el-form-item"),U=r("el-checkbox"),z=r("el-checkbox-group"),j=r("el-form"),F=r("el-col"),K=r("el-row"),M=r("el-tooltip"),B=r("el-rate"),H=r("el-tag"),L=r("el-card");return i(),d(c,null,[o("div",x,[s(K,{gutter:0,justify:"center"},{default:n((()=>[s(F,{span:12,xs:24},{default:n((()=>[s(j,{ref:"form",onSubmit:e[2]||(e[2]=u((()=>{}),["prevent"]))},{default:n((()=>[s(C,null,{default:n((()=>[s(G,{modelValue:l.data.form.text,"onUpdate:modelValue":e[0]||(e[0]=a=>l.data.form.text=a),placeholder:"Please enter the content you want to search for",onKeyup:m(l.handleSearch,["enter"])},{append:n((()=>[s(S,{onClick:l.handleSearch,icon:l.data.Search},null,8,["onClick","icon"])])),_:1},8,["modelValue","onKeyup"])])),_:1}),s(C,null,{default:n((()=>[s(z,{modelValue:l.data.form.check,"onUpdate:modelValue":e[1]||(e[1]=a=>l.data.form.check=a)},{default:n((()=>[s(U,{label:"Sort by time",value:1}),s(U,{label:"Sort by rating",value:2})])),_:1},8,["modelValue"])])),_:1})])),_:1},512)])),_:1})])),_:1})]),o("div",y,[s(K,{gutter:20},{default:n((()=>[(i(!0),d(c,null,p(l.data.listCard,((a,e)=>(i(),g(F,{xs:24,sm:8,md:6,key:e},{default:n((()=>[s(L,{"body-style":{padding:"0px"},class:"card-view"},{default:n((()=>[o("div",w,[o("div",_,[o("img",{src:l.slack_logo_mark,class:"card-image"},null,8,b),o("div",null,[o("div",k,[s(M,{class:"box-item",effect:"dark",content:a.name,placement:"top-start"},{default:n((()=>[o("span",P,v(a.name),1)])),_:2},1032,["content"])]),o("div",E,[s(B,{modelValue:a.star,"onUpdate:modelValue":e=>a.star=e,size:"small","allow-half":"",disabled:""},null,8,["modelValue","onUpdate:modelValue"])])])]),o("div",I,[o("div",N,v(a.des),1)]),o("div",null,[(i(!0),d(c,null,p(a.tag,((a,e)=>(i(),g(H,{key:e,size:"small",type:"success",class:"ml-2"},{default:n((()=>[h(v(a),1)])),_:2},1024)))),128))])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])],64)},f.__scopeId="data-v-e1c02c6c";export{f as default};

(function(t){function e(e){for(var i,a,l=e[0],r=e[1],c=e[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={app:0},o=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/resume/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"189f":function(t,e,s){},"207d":function(t,e,s){},"265c":function(t,e,s){"use strict";s("5478")},"2b9f":function(t,e,s){"use strict";s("593c")},4496:function(t,e,s){},"49f6":function(t,e,s){"use strict";s("8f23")},5478:function(t,e,s){},"564f":function(t,e,s){"use strict";s("207d")},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t._self._c;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",height:"10"}}),e("v-main",{staticClass:"main-style"},[e("resume",{staticClass:"font"})],1)],1)},o=[],a=function(){var t=this,e=t._self._c;return e("div",[e("locale"),e("introduction",{staticClass:"dark-background-color full-height"}),e("experience",{staticClass:"light-background-color full-height"}),e("works",{staticClass:"dark-background-color full-height"}),e("projects",{staticClass:"light-background-color full-height"}),e("skills",{staticClass:"dark-background-color full-height"}),e("books",{staticClass:"light-background-color full-height"})],1)},l=[],r=function(){var t=this,e=t._self._c;return e("div",[e("v-menu",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e("v-btn",t._g(t._b({staticClass:"button-style",attrs:{icon:"",fab:"",fixed:"",right:"",color:"white"}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-web")])],1)]}}])},[e("v-list",t._l(t.langs,(function(s,i,n){return e("v-list-item",{key:n,on:{click:function(e){return t.changeLocale(i)}}},[e("v-list-item-title",[t._v(t._s(s))])],1)})),1)],1)],1)},c=[],d={name:"locale",data(){return{langs:{en:"English",ko:"Korean"}}},methods:{changeLocale(t){this.$i18n.locale=t}}},u=d,f=(s("88a1"),s("2877")),p=s("6544"),v=s.n(p),h=s("8336"),C=s("132d"),g=s("8860"),m=s("da13"),b=s("5d23"),y=s("e449"),w=Object(f["a"])(u,r,c,!1,null,"7643e4c8",null),_=w.exports;v()(w,{VBtn:h["a"],VIcon:C["a"],VList:g["a"],VListItem:m["a"],VListItemTitle:b["a"],VMenu:y["a"]});var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"center"},[e("v-row",[e("v-col",{attrs:{cols:t.$vuetify.breakpoint.mdAndUp?6:12,"data-aos":"fade-right"}},[e("div",{staticClass:"title-style"},[t._v(" "+t._s(t.$t("message.introduction.title"))+" ")]),e("div",{staticClass:"subtitle-style"},[t._v(" "+t._s(t.$t("message.introduction.subtitle"))+" "),e("span",{staticClass:"dot-style"},[t._v(".")])])]),e("v-col",{staticClass:"description-style description-text-style vertical-center",class:t.$vuetify.breakpoint.mdAndDown?"text-center":"",attrs:{cols:t.$vuetify.breakpoint.mdAndUp?6:12,"data-aos":"fade-left"}},[e("div",[t._v(t._s(t.$t("message.introduction.description")))])])],1)],1)},x=[],L={name:"Introduction"},S=L,j=(s("7b11"),s("62ad")),M=s("0fd9"),O=Object(f["a"])(S,k,x,!1,null,"88423c2a",null),$=O.exports;v()(O,{VCol:j["a"],VRow:M["a"]});var E=function(){var t=this,e=t._self._c;return e("div",{ref:"ref_experience",staticClass:"center"},[e("div",[e("v-row",{ref:"title_experience",staticClass:"experience-title-style"},[e("div",{attrs:{"data-aos":"fade-down"}},[t._v("EXPERIENCE")])]),e("intersection-observer",{on:{"intersection-observed":t.scroll}}),e("v-row",{staticClass:"row-style"},[e("v-col",{staticClass:"title-box-style",attrs:{cols:"4"}},[e("div",{attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"title-style"},[t._v(t._s(t.$t("message.experience.second.title")))]),e("div",{staticClass:"title-style"},[t._v(t._s(t.$t("message.experience.second.title-2")))]),e("div",{staticClass:"subtitle-style"},[t._v(t._s(t.$t("message.experience.second.subtitle")))])])]),e("v-col",{staticClass:"description-text-style description-style",attrs:{cols:"8","data-aos":"fade-left"}},[t._v(" "+t._s(t.$t("message.experience.second.description"))+" ")])],1),e("v-row",{staticClass:"row-style last-row-style"},[e("v-col",{staticClass:"title-box-style",attrs:{cols:"4"}},[e("div",{attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"title-style"},[t._v(t._s(t.$t("message.experience.first.title")))]),e("div",{staticClass:"subtitle-style"},[t._v(t._s(t.$t("message.experience.first.subtitle")))])])]),e("v-col",{staticClass:"description-text-style description-style",attrs:{cols:"8","data-aos":"fade-left"}},[t._v(" "+t._s(t.$t("message.experience.first.description"))+" ")])],1)],1)])},B=[],I=function(){var t=this,e=t._self._c;return e("div",{ref:"triggerDiv"})},R=[],D={name:"IntersectionObserver",data(){return{observer:null,option:{root:null,threshold:1}}},methods:{handleIntersect:function(t){t.isIntersecting&&this.$emit("intersection-observed")}},mounted(){this.observer=new IntersectionObserver(t=>{this.handleIntersect(t[0])},this.option),this.observer.observe(this.$refs.triggerDiv)}},V=D,F=Object(f["a"])(V,I,R,!1,null,"33cbee7e",null),T=F.exports,A={name:"Experience",components:{"intersection-observer":T},data:()=>({scrolled:!1}),methods:{scroll(){this.scrolled||(this.scrolled=!0,window.scrollTo({behavior:"smooth",top:this.$refs.ref_experience.getBoundingClientRect().top+window.scrollY}))}}},z=A,P=(s("97a9"),Object(f["a"])(z,E,B,!1,null,"645ce6c2",null)),U=P.exports;v()(P,{VCol:j["a"],VRow:M["a"]});var N=function(){var t=this,e=t._self._c;return e("div",{ref:"ref_projects",staticClass:"center projects-style"},[e("div",[e("div",{ref:"title_projects",staticClass:"projects-title-style",attrs:{"data-aos":"fade-down"}},[t._v(" PERSONAL PROJECTS ")]),e("intersection-observer",{on:{"intersection-observed":t.scroll}}),e("onu-menu",{staticClass:"project-style"}),e("not-to-do-list",{staticClass:"project-style"})],1)])},Z=[],W=function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{staticClass:"vertical-center horizontal-center",attrs:{cols:t.$vuetify.breakpoint.mdAndUp?4:12,"data-aos-anchor-placement":"top-center","data-aos":"fade-right"}},[e("div",[e("div",{staticClass:"title-style"},[t._v("ONU MENU")]),e("v-img",{attrs:{src:s("a123"),"max-height":"100",contain:""}})],1)]),e("v-col",{staticClass:"description-style description-text-style",attrs:{cols:t.$vuetify.breakpoint.mdAndUp?8:12,"data-aos":"fade-left"}},[e("div",[e("div",[e("div",{staticClass:"subtitle-style"},[t._v(t._s(t.$t("message.projects.onuMenu.title")))]),e("div",[e("div",{staticClass:"function-title-style"},[t._v(t._s(t.$t("message.projects.onuMenu.functions.title")))]),e("ul",t._l(5,(function(s){return e("li",{key:s,attrs:{"data-aos":"fade-left","data-aos-delay":100*s}},[t._v(" "+t._s(t.$t("message.projects.onuMenu.functions.f"+s))+" ")])})),0)])]),e("div",[e("div",{staticClass:"function-title-style"},[t._v(t._s(t.$t("message.projects.onuMenu.skills.title")))]),e("ul",t._l(2,(function(s){return e("li",{key:s,attrs:{"data-aos":"fade-left","data-aos-delay":100*s}},[t._v(" "+t._s(t.$t("message.projects.onuMenu.skills.s"+s))+" ")])})),0)]),e("div",{staticClass:"function-title-style"},[e("div",[e("a",{attrs:{href:"https://onu-menu.web.app/"}},[t._v(t._s(t.$t("message.projects.onuMenu.links.l1")))])]),e("div",[e("a",{attrs:{href:"https://onu-menu-internal.web.app/"}},[t._v(t._s(t.$t("message.projects.onuMenu.links.l2")))])])])])])],1)},H=[],Y={name:"OnuMenu"},K=Y,q=(s("a36d"),s("adda")),J=Object(f["a"])(K,W,H,!1,null,"22cb9070",null),Q=J.exports;v()(J,{VCol:j["a"],VImg:q["a"],VRow:M["a"]});var G=function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{attrs:{cols:t.$vuetify.breakpoint.mdAndUp?4:12,"data-aos-anchor-placement":"top-center","data-aos":"fade-right"}},[e("div",{staticClass:"title-style"},[t._v("NOT TO DO LIST")]),e("v-img",{staticClass:"img-style",attrs:{src:s("9e35"),contain:""}})],1),e("v-col",{staticClass:"description-style description-text-style",attrs:{cols:t.$vuetify.breakpoint.mdAndUp?8:12,"data-aos":"fade-left"}},[e("div",[e("div",{staticClass:"subtitle-style"},[t._v(t._s(t.$t("message.projects.notToDoList.title")))]),e("div",[e("div",{staticClass:"function-title-style"},[t._v(t._s(t.$t("message.projects.notToDoList.functions.title")))]),e("ul",t._l(5,(function(s){return e("li",{key:s,attrs:{"data-aos":"fade-left","data-aos-delay":100*s}},[t._v(" "+t._s(t.$t("message.projects.notToDoList.functions.f"+s))+" ")])})),0),e("div",{staticClass:"function-title-style"},[t._v(t._s(t.$t("message.projects.notToDoList.skills.title")))]),e("ul",t._l(2,(function(s){return e("li",{key:s,attrs:{"data-aos":"fade-left","data-aos-delay":100*s}},[t._v(" "+t._s(t.$t("message.projects.notToDoList.skills.s"+s))+" ")])})),0),e("div",{staticClass:"function-title-style"},[e("a",{attrs:{href:"https://seonwoo960000.github.io/not-to-do-list/"}},[t._v("Links")])])])])])],1)},X=[],tt={name:"NotToDoList"},et=tt,st=(s("265c"),Object(f["a"])(et,G,X,!1,null,"74d5b1ca",null)),it=st.exports;v()(st,{VCol:j["a"],VImg:q["a"],VRow:M["a"]});var nt={name:"Projects",components:{"onu-menu":Q,"not-to-do-list":it,"intersection-observer":T},data:()=>({scrolled:!1}),methods:{scroll(){this.scrolled||(this.scrolled=!0,window.scrollTo({behavior:"smooth",top:this.$refs.ref_projects.getBoundingClientRect().top+window.scrollY}))}}},ot=nt,at=(s("49f6"),Object(f["a"])(ot,N,Z,!1,null,"9462f6a2",null)),lt=at.exports,rt=function(){var t=this,e=t._self._c;return e("div",{ref:"ref_skills",staticClass:"center"},[e("div",[e("div",{staticClass:"title-style",attrs:{"data-aos":"fade-down"}},[t._v(" USED SKILLS ")]),e("intersection-observer",{on:{"intersection-observed":t.scroll}}),e("div",{staticClass:"center"},[e("v-row",{staticClass:"row-style"},t._l(t.svgs,(function({icon:s,name:i,details:n},o){return e("v-col",{key:o,staticStyle:{"text-align":"center"},attrs:{sm:"6",md:"4"}},[e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:n}){return[e("v-icon",t._g(t._b({staticClass:"icon-style",attrs:{"data-aos":"flip-up","data-aos-offset":"120","data-aos-delay":100*(o+1)}},"v-icon",n,!1),i),[t._v(" "+t._s(s)+" ")])]}}],null,!0)},[e("div",{staticClass:"tooltip-text-style"},[e("div",{staticClass:"name-style"},[t._v(t._s(i))]),e("ul",t._l(n,(function(s,i){return e("li",{key:i},[t._v(" "+t._s(s)+" ")])})),0)])])],1)})),1)],1)],1)])},ct=[],dt={name:"Skills",components:{"intersection-observer":T},data:()=>({svgs:[{name:"java",icon:"$vuetify.icons.values.java",details:["java 8","Object Oriented Programming","Functional Programming","Design Patterns"]},{name:"spring",icon:"$vuetify.icons.values.spring",details:["spring boot","spring web","spring batch","spring gateway","spring cloud"]},{name:"javascript",icon:"$vuetify.icons.values.javascript",details:["ES6","Vue","Vuetify","Axios"]},{name:"mysql",icon:"$vuetify.icons.values.mysql",details:["Query optimization","Detecting bottleneck"]},{name:"kafka",icon:"$vuetify.icons.values.kafka",details:["Kafka with Spring"]},{name:"elastic search",icon:"$vuetify.icons.values.elasticSearch",details:["Monitoring with ELK stack and Zipkin"]}],scrolled:!1}),methods:{scroll(){this.scrolled||(this.scrolled=!0,window.scrollTo({behavior:"smooth",top:this.$refs.ref_skills.getBoundingClientRect().top+window.scrollY}))}}},ut=dt,ft=(s("f3fb"),s("3a2f")),pt=Object(f["a"])(ut,rt,ct,!1,null,"45658929",null),vt=pt.exports;v()(pt,{VCol:j["a"],VIcon:C["a"],VRow:M["a"],VTooltip:ft["a"]});var ht=function(){var t=this,e=t._self._c;return e("div",{ref:"ref_books",staticClass:"center"},[e("div",[e("div",{ref:"title_book",staticClass:"title-style",attrs:{"data-aos":"fade-down"}},[t._v(" BOOKS I've read or reading ")]),e("intersection-observer",{on:{"intersection-observed":t.scroll}}),t._m(0)],1)])},Ct=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"iframe-style",attrs:{"data-aos":"zoom-in","data-aos-delay":"100"}},[e("iframe",{staticStyle:{width:"100%",height:"480px"},attrs:{src:"https://drive.google.com/file/d/1aPPQMEB44_MGUINWtYHx7sUHqtlCulTT/preview",allow:"autoplay"}})])}],gt={name:"Books",components:{"intersection-observer":T},data:()=>({scrolled:!1}),methods:{scroll(){this.scrolled||(this.scrolled=!0,window.scrollTo({behavior:"smooth",top:this.$refs.ref_books.getBoundingClientRect().top+window.scrollY}))}}},mt=gt,bt=(s("2b9f"),Object(f["a"])(mt,ht,Ct,!1,null,"107f047e",null)),yt=bt.exports,wt=function(){var t=this,e=t._self._c;return e("div",{ref:"ref_title",staticClass:"center"},[e("div",[e("div",{staticClass:"projects-title-style",attrs:{"data-aos":"fade-down"}},[t._v(" WORKS ")]),e("intersection-observer",{on:{"intersection-observed":t.scroll}})],1)])},_t=[],kt={name:"Works",components:{"intersection-observer":T},data:()=>({scrolled:!1}),methods:{scroll(){this.scrolled||(this.scrolled=!0,window.scrollTo({behavior:"smooth",top:this.$refs.ref_title.getBoundingClientRect().top+window.scrollY}))}}},xt=kt,Lt=(s("8319"),Object(f["a"])(xt,wt,_t,!1,null,"3a22b551",null)),St=Lt.exports,jt={name:"Resume",components:{locale:_,introduction:$,experience:U,works:St,projects:lt,skills:vt,books:yt}},Mt=jt,Ot=(s("564f"),Object(f["a"])(Mt,a,l,!1,null,null,null)),$t=Ot.exports,Et={name:"App",components:{resume:$t}},Bt=Et,It=(s("d2a5"),s("7496")),Rt=s("40dc"),Dt=s("f6c4"),Vt=Object(f["a"])(Bt,n,o,!1,null,null,null),Ft=Vt.exports;v()(Vt,{VApp:It["a"],VAppBar:Rt["a"],VMain:Dt["a"]});var Tt=s("f309"),At=function(){var t=this,e=t._self._c;return e("svg",{staticStyle:{"enable-background":"new 0 0 511.998 511.998"},style:t.iconStyle,attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.998 511.998","xml:space":"preserve"}},[e("g",[e("path",{staticStyle:{fill:"#DB380E"},attrs:{d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699\n\t\tc-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979\n\t\tc1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171\n\t\tc17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41\n\t\tc-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}}),e("path",{staticStyle:{fill:"#DB380E"},attrs:{d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895\n\t\tc-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927\n\t\tc2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021\n\t\tc0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26\n\t\tc-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"}})]),e("g",[e("path",{staticStyle:{fill:"#73A1FB"},attrs:{d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029\n\t\tc0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046\n\t\tc1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58\n\t\tc-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524\n\t\ts-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}}),e("path",{staticStyle:{fill:"#73A1FB"},attrs:{d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72\n\t\tc0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304\n\t\tc-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092\n\t\tc3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}}),e("path",{staticStyle:{fill:"#73A1FB"},attrs:{d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563\n\t\tc-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147\n\t\tc-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036\n\t\tc2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918\n\t\tc1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0\n\t\tc51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}}),e("path",{staticStyle:{fill:"#73A1FB"},attrs:{d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946\n\t\tc-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984\n\t\tc4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571\n\t\ts-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913\n\t\tc-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}}),e("path",{staticStyle:{fill:"#73A1FB"},attrs:{d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867\n\t\tc-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461\n\t\tc0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873\n\t\tc-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776\n\t\tc-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5\n\t\tc-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}}),e("path",{staticStyle:{fill:"#73A1FB"},attrs:{d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344\n\t\tc-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618\n\t\tc-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645\n\t\tc61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"}})]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")])},zt=[],Pt={name:"Java",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},Ut=Pt,Nt=Object(f["a"])(Ut,At,zt,!1,null,"455e6bc9",null),Zt=Nt.exports,Wt=function(){var t=this,e=t._self._c;return e("svg",{style:t.iconStyle,attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("rect",{attrs:{width:"24",height:"24",fill:"#F1DC50"}}),e("path",{attrs:{stroke:"#333","stroke-width":"2",d:"M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"}})])])},Ht=[],Yt={name:"Javascript",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},Kt=Yt,qt=Object(f["a"])(Kt,Wt,Ht,!1,null,"6ade8f66",null),Jt=qt.exports,Qt=function(){var t=this,e=t._self._c;return e("svg",{style:t.iconStyle,attrs:{viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg"}},[e("title",[t._v(" Apache Kafka icon")]),e("path",{attrs:{fill:"#FFFFFF",d:"M16.262,13.293c-0.935,0-1.772,0.414-2.346,1.066l-1.47-1.041c0.156-0.43,0.246-0.891,0.246-1.374 c0-0.475-0.086-0.928-0.237-1.352l1.467-1.03c0.574,0.649,1.409,1.06,2.341,1.06c1.725,0,3.129-1.403,3.129-3.129 s-1.404-3.129-3.129-3.129s-3.129,1.403-3.129,3.129c0,0.309,0.047,0.607,0.13,0.889l-1.468,1.03 C11.183,8.653,10.3,8.121,9.294,7.959V6.19c1.417-0.298,2.485-1.557,2.485-3.061C11.779,1.403,10.375,0,8.65,0 S5.522,1.403,5.522,3.129c0,1.484,1.04,2.728,2.429,3.047v1.792c-1.895,0.333-3.341,1.987-3.341,3.976 c0,1.999,1.46,3.659,3.37,3.981v1.892c-1.403,0.308-2.457,1.56-2.457,3.054C5.522,22.597,6.925,24,8.65,24s3.129-1.403,3.129-3.129 c0-1.495-1.054-2.746-2.457-3.054v-1.892c0.966-0.163,1.84-0.671,2.46-1.431l1.48,1.048c-0.082,0.279-0.128,0.574-0.128,0.88 c0,1.725,1.404,3.129,3.129,3.129s3.129-1.403,3.129-3.129S17.987,13.293,16.262,13.293z M16.262,5.977 c0.837,0,1.517,0.681,1.517,1.517s-0.68,1.517-1.517,1.517c-0.836,0-1.517-0.681-1.517-1.517S15.426,5.977,16.262,5.977z M7.133,3.129c0-0.836,0.68-1.517,1.517-1.517s1.517,0.681,1.517,1.517S9.487,4.646,8.65,4.646S7.133,3.965,7.133,3.129z M10.167,20.871c0,0.836-0.68,1.517-1.517,1.517s-1.517-0.681-1.517-1.517s0.68-1.517,1.517-1.517S10.167,20.035,10.167,20.871z M8.65,14.06c-1.167,0-2.116-0.949-2.116-2.116c0-1.167,0.949-2.116,2.116-2.116c1.167,0,2.116,0.949,2.116,2.116 C10.766,13.111,9.817,14.06,8.65,14.06z M16.262,17.939c-0.837,0-1.517-0.681-1.517-1.517c0-0.836,0.68-1.517,1.517-1.517 s1.517,0.681,1.517,1.517C17.779,17.258,17.099,17.939,16.262,17.939z"}})])},Gt=[],Xt={name:"Kafka",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},te=Xt,ee=Object(f["a"])(te,Qt,Gt,!1,null,"66930c1c",null),se=ee.exports,ie=function(){var t=this,e=t._self._c;return e("svg",{style:t.iconStyle,attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"#00758F","fill-rule":"evenodd",d:"M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z"}})])},ne=[],oe={name:"MySql",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},ae=oe,le=Object(f["a"])(ae,ie,ne,!1,null,"4d73456b",null),re=le.exports,ce=function(){var t=this,e=t._self._c;return e("svg",{style:t.iconStyle,attrs:{viewBox:"0 0 256 256",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"}},[e("g",[e("path",{attrs:{d:"M38.9437824,35.879008 C89.5234256,-13.1200214 170.398168,-11.8028432 219.397197,39.0402357 C224.929346,31.6640377 229.671187,23.4975328 233.095851,15.0675923 C249.165425,64.0666217 258.912543,105.162582 255.224444,137.038295 C253.380395,163.90873 242.842969,189.725423 225.456217,210.273403 C180.145286,264.014274 99.53398,270.863601 45.7931091,225.55267 L45.7931091,225.55267 L44.765,224.638 L44.7103323,224.601984 C44.5420247,224.484832 44.376007,224.362668 44.2124952,224.235492 C43.7219599,223.853965 43.2765312,223.438607 42.8762093,222.995252 L42.732,222.831 L41.0512675,221.3377 C39.4121124,219.93271 37.7729573,218.52772 36.3188215,216.93771 L35.7825547,216.332423 C-13.2164747,165.752779 -11.6358609,84.8780374 38.9437824,35.879008 Z M57.9111486,207.375611 C53.169307,203.687512 46.3199803,204.214383 42.6318814,208.956225 C39.3888978,213.125775 39.4048731,218.924805 42.6798072,222.771269 L42.732,222.831 L44.765,224.638 L44.9644841,224.773953 C49.5691585,227.80174 55.7644273,227.175885 59.2982065,222.896387 L59.4917624,222.654878 C63.1798614,217.913037 62.3895545,211.06371 57.9111486,207.375611 Z M231.778672,28.2393744 C218.60689,55.9001168 185.940871,76.9749681 157.753257,83.5608592 C131.146257,89.8833146 107.963921,84.6146018 83.4644059,94.0982849 C27.6160498,115.436572 28.6697923,181.822354 59.2283268,196.838185 L59.2283268,196.838185 L61.0723763,197.891928 C61.0723763,197.891928 83.1456487,193.50309 104.973663,187.707242 L106.843514,187.207079 C115.561826,184.857554 124.138869,182.296538 131.146257,179.714869 C167.500376,166.279651 207.542593,133.08676 220.714375,94.6251562 C213.865049,134.667374 179.35498,173.392413 144.84491,191.042601 C126.404416,200.526284 112.178891,202.633769 81.883792,213.171195 C78.195693,214.488373 75.297901,215.805551 75.297901,215.805551 C75.6675607,215.754564 76.0372203,215.70481 76.4060145,215.65629 L77.1421925,215.560893 L77.1421925,215.560893 L77.8745239,215.468787 C84.5652297,214.639554 90.5771682,214.224938 90.5771682,214.224938 C133.517178,212.117452 200.956702,226.342977 232.305544,184.45671 C264.444692,141.780136 246.531068,72.7599979 231.778672,28.2393744 Z",fill:"#6DB33F"}}),e("path",{attrs:{d:"M57.9111486,207.375611 C62.3895545,211.06371 63.1798614,217.913037 59.4917624,222.654878 C55.8036635,227.39672 48.9543368,227.923591 44.2124952,224.235492 C39.4706537,220.547393 38.9437824,213.698066 42.6318814,208.956225 C46.3199803,204.214383 53.169307,203.687512 57.9111486,207.375611 Z M231.778672,28.2393744 C246.531068,72.7599979 264.444692,141.780136 232.305544,184.45671 C200.956702,226.342977 133.517178,212.117452 90.5771682,214.224938 C90.5771682,214.224938 84.5652297,214.639554 77.8745239,215.468787 L77.1421925,215.560893 C76.5300999,215.63902 75.9140004,215.720572 75.297901,215.805551 C75.297901,215.805551 78.195693,214.488373 81.883792,213.171195 C112.178891,202.633769 126.404416,200.526284 144.84491,191.042601 C179.35498,173.392413 213.865049,134.667374 220.714375,94.6251562 C207.542593,133.08676 167.500376,166.279651 131.146257,179.714869 C106.119871,188.935116 61.0723763,197.891928 61.0723763,197.891928 L59.2283268,196.838185 C28.6697923,181.822354 27.6160498,115.436572 83.4644059,94.0982849 C107.963921,84.6146018 131.146257,89.8833146 157.753257,83.5608592 C185.940871,76.9749681 218.60689,55.9001168 231.778672,28.2393744 Z",fill:"#FFFFFF"}})])])},de=[],ue={name:"Spring",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},fe=ue,pe=Object(f["a"])(fe,ce,de,!1,null,"3b221090",null),ve=pe.exports,he=function(){var t=this,e=t._self._c;return e("svg",{style:t.iconStyle,attrs:{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[e("title",[t._v(" file_type_vue")]),e("path",{staticStyle:{fill:"#41b883"},attrs:{d:"M24.4,3.925H30L16,28.075,2,3.925H12.71L16,9.525l3.22-5.6Z"}}),e("path",{staticStyle:{fill:"#41b883"},attrs:{d:"M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z"}}),e("path",{staticStyle:{fill:"#35495e"},attrs:{d:"M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z"}})])},Ce=[],ge={name:"Vue",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},me=ge,be=Object(f["a"])(me,he,Ce,!1,null,"406e8778",null),ye=be.exports,we=function(){var t=this,e=t._self._c;return e("svg",{style:t.iconStyle,attrs:{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet"}},[e("path",{attrs:{d:"M255.96 134.393c0-21.521-13.373-40.117-33.223-47.43a75.239 75.239 0 0 0 1.253-13.791c0-39.909-32.386-72.295-72.295-72.295-23.193 0-44.923 11.074-58.505 30.088-6.686-5.224-14.835-7.94-23.402-7.94-21.104 0-38.446 17.133-38.446 38.446 0 4.597.836 9.194 2.298 13.373C13.582 81.739 0 100.962 0 122.274c0 21.522 13.373 40.327 33.431 47.64-.835 4.388-1.253 8.985-1.253 13.79 0 39.7 32.386 72.087 72.086 72.087 23.402 0 44.924-11.283 58.505-30.088 6.686 5.223 15.044 8.149 23.611 8.149 21.104 0 38.446-17.134 38.446-38.446 0-4.597-.836-9.194-2.298-13.373 19.64-7.104 33.431-26.327 33.431-47.64z",fill:"#FFF"}}),e("path",{attrs:{d:"M100.085 110.364l57.043 26.119 57.669-50.565a64.312 64.312 0 0 0 1.253-12.746c0-35.52-28.834-64.355-64.355-64.355-21.313 0-41.162 10.447-53.072 27.998l-9.612 49.73 11.074 23.82z",fill:"#F4BD19"}}),e("path",{attrs:{d:"M40.953 170.75c-.835 4.179-1.253 8.567-1.253 12.955 0 35.52 29.043 64.564 64.564 64.564 21.522 0 41.372-10.656 53.49-28.208l9.403-49.729-12.746-24.238-57.251-26.118-56.207 50.774z",fill:"#3CBEB1"}}),e("path",{attrs:{d:"M40.536 71.918l39.073 9.194 8.775-44.506c-5.432-4.179-11.91-6.268-18.805-6.268-16.925 0-30.924 13.79-30.924 30.924 0 3.552.627 7.313 1.88 10.656z",fill:"#E9478C"}}),e("path",{attrs:{d:"M37.192 81.32c-17.551 5.642-29.67 22.567-29.67 40.954 0 17.97 11.074 34.059 27.79 40.327l54.953-49.73-10.03-21.52-43.043-10.03z",fill:"#2C458F"}}),e("path",{attrs:{d:"M167.784 219.852c5.432 4.18 11.91 6.478 18.596 6.478 16.925 0 30.924-13.79 30.924-30.924 0-3.761-.627-7.314-1.88-10.657l-39.073-9.193-8.567 44.296z",fill:"#95C63D"}}),e("path",{attrs:{d:"M175.724 165.317l43.043 10.03c17.551-5.85 29.67-22.566 29.67-40.954 0-17.97-11.074-33.849-27.79-40.326l-56.415 49.311 11.492 21.94z",fill:"#176655"}})])},_e=[],ke={name:"ElasticSearch",computed:{iconStyle(){return{width:this.$store.state.icons.skills.width+" !important",height:this.$store.state.icons.skills.height+" !important"}}}},xe=ke,Le=Object(f["a"])(xe,we,_e,!1,null,"759c0a7c",null),Se=Le.exports;const je=new Tt["a"]({theme:{dark:!0,themes:{dark:{primary:"#0EBEEE",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}},icons:{values:{java:{component:Zt},javascript:{component:Jt},kafka:{component:se},mysql:{component:re},spring:{component:ve},vue:{component:ye},elasticSearch:{component:Se}}}});i["a"].use(Tt["a"]);var Me=je,Oe=s("a925");i["a"].use(Oe["a"]);const $e={en:{message:{introduction:{title:"HELLO WORLD",subtitle:"SOFTWARE ENGINEER",description:"Hello. I'm a backend engineer who fell in love with developing things that can help people. I develop web applications on both the backend and the frontend. I'm obsessed with clean code and database performance tuning."},experience:{second:{title:"LINE Plus","title-2":"Software Engineer",subtitle:"(2022 ~ Current)",description:"I'm working on a platform to provide billing services for advertisers who use LINE ads. I make apps that provide services such as creating billing accounts, making payments, invoices and settlements."},first:{title:"Pilot",subtitle:"(2015 ~ 2021)",description:"I've experienced 200 hours of professional flight training. I have private, instrumental and commercial pilot license. Even though I'm working as a software engineer, I often reminisce on the days that I flew through the clouds."}},projects:{onuMenu:{title:"Online Menu Platform",functions:{title:"What you can do with this app",f1:"Register business information",f2:"Register stories",f3:"Register menus",f4:"Register recommendations",f5:"Create QR code to easily direct users to their business online pages"},skills:{title:"Used skills",s1:"Vue",s2:"Firebase"},links:{l1:"View registered businesses",l2:"Register a business"}},notToDoList:{title:"Easy to use TO DO app for recording something YOU DON'T WANT TO DO !!",functions:{title:"What can you do with this app",f1:"CRUD boards",f2:"CRUD tasks",f3:"Drag and drop boards",f4:"Save board data in disk",f5:"Upload saved board data on app"},skills:{title:"Used skills",s1:"Vue",s2:"Browser APIs (local storage, drag and drop)"}}}}},ko:{message:{introduction:{title:"HELLO WORLD",subtitle:"SOFTWARE ENGINEER",description:"안녕하세요. 주변의 문제를 해결할 수 있는 어플리케이션 개발과 매료된 백엔드 개발자입니다. 백엔드와 프론트엔드 개발을 즐기며 clean code와 데이터베이스 튜닝에 관심이 있습니다."},experience:{second:{title:"LINE Plus","title-2":"Software Engineer",subtitle:"(2022 ~ Current)",description:"LINE에서 광고주들이 광고 지면 사용하고 사용료 지불을 쉽게 할 수 있도록 platform을 개발하고 있습니다. 결제를 위한 계정 생성, 결제 수행, 영수증 발급 및 정산과 관련된 개발을 담당하고 있습니다."},first:{title:"조종사",subtitle:"(2015 ~ 2021)",description:"200 시간의 항공기 조종 경험이 있으며 사업용 조종사와 자가용 조종사 자격증을 보유하고 있습니다. 현재는 소프트웨어 엔지니어이지만 종종 항공기를 조종하던 시절의 추억을 떠올립니다."}},projects:{onuMenu:{title:"Online Menu Platform",functions:{title:"기능 목록",f1:"매장 정보 등록",f2:"스토리 등록",f3:"메뉴 등록",f4:"추천목록 등록",f5:"매장 페이지로 이동이 가능한 QR 코드 생성기능"},skills:{title:"기술 스택",s1:"Vue",s2:"Firebase"},links:{l1:"매장 정보 확인",l2:"매장 정보 등록"}},notToDoList:{title:"하지 않기로 스스로에게 약속한 것들을 관리하는 앱",functions:{title:"기능 목록",f1:"CRUD boards",f2:"CRUD tasks",f3:"Board drag and drop",f4:"Board data 저장",f5:"저장된 Board data 불러오기"},skills:{title:"기술 스택",s1:"Vue",s2:"Browser APIs (local storage, drag and drop)"}}}}}},Ee=new Oe["a"]({locale:"en",messages:$e});var Be=Ee,Ie=s("7528"),Re=s("2f62");i["a"].use(Re["a"]);var De=new Re["a"].Store({state:{icons:{skills:{width:"100px",height:"100px"}}},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,Ie["a"].init({delay:200,duration:1200,debounceDelay:50,throttleDelay:99,once:!0,mirror:!1,anchorPlacement:"top-bottom"}),new i["a"]({vuetify:Me,render:t=>t(Ft),store:De,i18n:Be}).$mount("#app")},"593c":function(t,e,s){},6871:function(t,e,s){},"77c6":function(t,e,s){},"7b11":function(t,e,s){"use strict";s("4496")},8319:function(t,e,s){"use strict";s("9f31")},"88a1":function(t,e,s){"use strict";s("189f")},"8f23":function(t,e,s){},"97a9":function(t,e,s){"use strict";s("c82e")},"9e35":function(t,e,s){t.exports=s.p+"img/not-to-do-list.be0efd03.png"},"9f31":function(t,e,s){},a123:function(t,e,s){t.exports=s.p+"img/onu-logo.0d4330e9.png"},a36d:function(t,e,s){"use strict";s("b794")},b794:function(t,e,s){},c82e:function(t,e,s){},d2a5:function(t,e,s){"use strict";s("77c6")},f3fb:function(t,e,s){"use strict";s("6871")}});
//# sourceMappingURL=app.577c1143.js.map
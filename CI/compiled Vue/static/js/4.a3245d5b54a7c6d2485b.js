webpackJsonp([4],{DtHx:function(t,a){},ybv5:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("mvHQ"),s=e.n(i),r=e("9CG7"),o=e("mtWM"),l=e.n(o),c={name:"app",beforeMount:function(){this.getView()},data:function(){return{pageinfo:"publish",qrUrl:"",embed:"<iframe%area%></iframe>",viewEmbed:"",getviewerList:{name:"",id:"",path:""}}},components:{PanelHeader:r.a},methods:{LoadModel:function(t){var a=t.target.value,e=this.getviewerList.filter(function(t){return t.id==a});this.$route.query.appid;console.log(e),console.log(appid)},embedGen:function(){var t=this.embed,a=' src="'+this.qrUrl+'" width="680" height="500" scrolling="no"',e=t.replace("%area%",a);this.viewEmbed=e},getView:function(){var t=this;l.a.post("https://api.3drexar.com//Viewer_Api/getviewer",s()({token:$cookies.get("user"),uuid:this.$route.query.appid,id:"0"})).then(function(a){if(200==a.status){var e=a.data;t.getviewerList=e,t.qrUrl="https://api.3drexar.com//quickLook_Api/loadobject?path="+btoa(e[0].path),console.log(t.qrUrl)}})}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("PanelHeader",{attrs:{pageinfo:t.pageinfo}}),t._v(" "),e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-5"},[e("div",{staticClass:"content-section"},[e("div",{staticClass:"row bg-dark m-1"},[e("span",{staticClass:"col border embedArea rounded"},[e("div",{staticClass:" "},[e("div",{staticClass:"row"},[e("div",{staticClass:"col mt-1"},[t._v("\r\n                            Code for iframe\r\n                           ")]),t._v(" "),e("div",{staticClass:"col-md-auto"}),t._v(" "),e("div",{staticClass:"col col-lg-2"},[e("button",{staticClass:"btn btn-dark",attrs:{"data-clipboard-text":"textToCopy"},on:{click:function(a){return t.embedGen()}}},[t._v("Copy")])])]),t._v(" "),e("div",{staticClass:"form-group purple-border"},[e("textarea",{staticClass:"form-control bg-dark text-white",staticStyle:{"font-size":"13px",resize:"none"},attrs:{rows:"4"}},[t._v(t._s(t.viewEmbed))])]),t._v(" "),e("div",{staticClass:"card",staticStyle:{width:"100%"}},[e("div",{staticClass:"card-body bg-dark"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col mt-1"},[e("label",{staticClass:"text-white",attrs:{for:"selector"}},[t._v("Select Model:")]),t._v(" "),e("select",{staticClass:"text-white md-form bg-dark",attrs:{id:"selector"},on:{change:function(a){return t.LoadModel(a)}}},t._l(t.getviewerList,function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v("  \r\n                                        "+t._s(a.name)+"\r\n                                        ")])}),0)]),t._v(" "),e("div",{staticClass:"col-md-auto"}),t._v(" "),t._m(1)])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br")])])])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"keyvisual-image position-fixed",staticStyle:{top:"0px"}},[e("div",{staticClass:"keyvisual-android-container",attrs:{id:"keyvisual_android"}},[e("div",{staticClass:"keyvisual-image-frame keyvisual-image-frame-android",attrs:{id:"keyvisual_frame_img_android"}}),t._v(" "),e("iframe",{staticClass:"keyvisual-image-content-android lazy-hidden",attrs:{id:"keyvisual_frame_content_android",src:t.qrUrl,scrolling:"no"}})])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"title-section"},[a("h5",[this._v("Publish Model")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col col-lg-3"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}}),this._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault1"}},[this._v("\r\n                        Android\r\n                    ")])]),this._v(" "),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",checked:""}}),this._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault2"}},[this._v("\r\n                        IOS\r\n                    ")])])])}]};var d=e("VU/8")(c,n,!1,function(t){e("DtHx")},"data-v-79affafb",null);a.default=d.exports}});
//# sourceMappingURL=4.a3245d5b54a7c6d2485b.js.map
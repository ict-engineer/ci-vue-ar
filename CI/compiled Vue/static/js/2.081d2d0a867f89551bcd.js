webpackJsonp([2],{Quw4:function(t,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=r("mvHQ"),a=r.n(e),i=r("mtWM"),o=r.n(i),n={data:function(){return{warnings:{email:"E-Mail",password:"Password"},userInformation:{email:"",password:""},isError:!1,errorCode:"",errorText:"Change a few things up and try submitting again."}},methods:{validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},loginPost:function(t){var s=this;o.a.post("https://api.3drexar.com/Users_Api/login",a()(t)).then(function(t){var r=JSON.parse(a()(t));r.data.isError?(s.isError=!0,s.errorCode=r.data.error_text):200==t.status&&($cookies.set("user",r.data.response.token,"1d"),window.location.href="projects")})},login:function(){for(var t in console.log(this.isError),this.userInformation){if(""==this.userInformation[t])return this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings[t]+":</b> cannot be null.");this.isError=!1}return this.validEmail(this.userInformation.email)?this.userInformation.password.length<6?(this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.password+":</b> Your password must consist of at least 6 characters.")):void(0==this.isError&&this.loginPost(this.userInformation)):(this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.email+":</b> There is a problem with the email format."))}}},l={render:function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{attrs:{id:"app"}},[r("section",{staticClass:"vh-100 gradient-custom"},[r("div",{staticClass:"container py-5 h-100"},[r("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[r("div",{staticClass:"col-12 col-md-8 col-lg-6 col-xl-5"},[r("div",{staticClass:"card bg-dark text-white",staticStyle:{"border-radius":"1rem"}},[r("div",{staticClass:"card-body text-center"},[r("div",{staticClass:"mb-md-5 mt-md-4 pb-5"},[r("h2",{staticClass:"fw-bold mb-2 text-uppercase"},[t._v("Login")]),t._v(" "),r("p",{staticClass:"text-white-50 mb-5"},[t._v("Please enter your login and password!")]),t._v(" "),r("div",{staticClass:"form-outline form-white mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.email,expression:"userInformation.email"}],staticClass:"form-control form-control-lg bg-dark",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.userInformation.email},on:{input:function(s){s.target.composing||t.$set(t.userInformation,"email",s.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-outline form-white mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.password,expression:"userInformation.password"}],staticClass:"form-control form-control-lg bg-dark",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.userInformation.password},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.login.apply(null,arguments)},input:function(s){s.target.composing||t.$set(t.userInformation,"password",s.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),r("button",{staticClass:"btn btn-outline-light btn-lg px-5",attrs:{type:"submit"},on:{click:t.login}},[t._v("Login")]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"small mb-5 pb-lg-2"},[s("a",{staticClass:"text-white-50",attrs:{href:"#!"}},[this._v("Forgot password?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-center text-center mt-4 pt-1"},[s("a",{staticClass:"text-white",attrs:{href:"#!"}},[s("i",{staticClass:"fa fa-facebook-f fa-lg"})]),this._v(" "),s("a",{staticClass:"text-white",attrs:{href:"#!"}},[s("i",{staticClass:"fa fa-twitter fa-lg mx-4 px-2"})]),this._v(" "),s("a",{staticClass:"text-white",attrs:{href:"#!"}},[s("i",{staticClass:"fa fa-google fa-lg"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",{staticClass:"mb-0"},[this._v("Don't have an account? "),s("a",{staticClass:"text-white-50 fw-bold",attrs:{href:"register"}},[this._v("Sign Up")])])])}]};var c=r("VU/8")(n,l,!1,function(t){r("mhJM")},"data-v-aa43e864",null);s.default=c.exports},mhJM:function(t,s){}});
//# sourceMappingURL=2.081d2d0a867f89551bcd.js.map
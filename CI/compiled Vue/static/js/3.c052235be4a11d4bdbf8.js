webpackJsonp([3],{ALKU:function(t,a){},c2lw:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o("mvHQ"),r=o.n(e),n=o("mtWM"),v=o.n(n),i={data:function(){return{warnings:{firstname:"First Name",lastname:"Last Name",gender:"Gender",email:"E-Mail",password:"Password",confirmPassword:"Confirm Password",phone:"Phone",country:"Country",question:"Question",answer:"Answer"},userInformation:{firstname:"",lastname:"",gender:"-",email:"",password:"",confirmPassword:"",phone:"",phonePrefix:"",country:"",question:"Please select your Sequrity Question",answer:""},isError:!1,errorCode:"",errorText:"Change a few things up and try submitting again."}},methods:{validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},registerPost:function(t){var a=this;delete t.confirmPassword,v.a.post("https://api.3drexar.com/Users_Api/save",r()(t)).then(function(t){var o=JSON.parse(r()(t));o.data.isError?(a.isError=!0,a.errorCode=o.data.error_text):(console.log("create Session"),window.location="/projects")})},handleChange:function(t){t.target.options.selectedIndex>-1&&(this.userInformation.country=t.target.options[t.target.options.selectedIndex].text)},register:function(){if(!this.validEmail(this.userInformation.email))return this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.email+":</b> There is a problem with the email format.");if(this.userInformation.password!=this.userInformation.confirmPassword)return this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.password+":</b> Passwords do not match.");if(this.userInformation.password.length<6)return this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.password+":</b> Your password must consist of at least 6 characters.");if("Please select your Sequrity Question"==this.userInformation.question)return this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.question+":</b> Please select your Sequrity Question!");if(""==this.userInformation.country)return this.isError=!0,void(this.errorCode=this.errorText+" <b>* "+this.warnings.country+":</b> Please select your Country!");for(var t in this.userInformation.country=this.userInformation.phonePrefix.text,this.userInformation){if(""==this.userInformation[t])return this.isError=!0,console.log(this.warnings[t]),void(this.errorCode=this.errorText+" <b>* "+this.warnings[t]+":</b> cannot be null.");this.isError=!1}0==this.isError&&this.registerPost(this.userInformation)}}},s={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container register"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-3 register-left"},[o("img",{attrs:{src:"https://res.cloudinary.com/nonprofit-profile/image/upload/v1635599858/unnamed_zzinh4.png",alt:""}}),t._v(" "),o("h3",[t._v("Welcome")]),t._v(" "),o("p",[t._v("After a short registration, you can start managing your own projects!")]),t._v(" "),o("router-link",{attrs:{to:"/login"}},[o("input",{attrs:{type:"button",value:"Login"}})])],1),t._v(" "),o("div",{staticClass:"col-md-9 register-right"},[o("div",{staticClass:"tab-content"},[o("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[o("h3",{staticClass:"register-heading"},[t._v("Register Here")]),t._v(" "),o("div",{staticClass:"row register-form"},[o("section",{directives:[{name:"show",rawName:"v-show",value:1==t.isError,expression:"isError == true"}]},[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"alert fade alert-simple alert-danger alert-dismissible text-left font__size-16 font__weight-light brk-library-rendered rendered show",attrs:{role:"alert","data-brk-library":"component__alert"}},[o("i",{staticClass:"start-icon fa fa-times-circle faa-pulse animated"}),t._v(" "),o("strong",{staticClass:"font__weight-semibold"},[t._v("Oh snap!")]),t._v(" "),o("span",{domProps:{innerHTML:t._s(t.errorCode)}})])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.firstname,expression:"userInformation.firstname"}],staticClass:"form-control bg-dark",attrs:{type:"text",placeholder:"First Name *",value:""},domProps:{value:t.userInformation.firstname},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"firstname",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.lastname,expression:"userInformation.lastname"}],staticClass:"form-control bg-dark",attrs:{type:"text",placeholder:"Last Name *",value:""},domProps:{value:t.userInformation.lastname},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"lastname",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.password,expression:"userInformation.password"}],staticClass:"form-control bg-dark",attrs:{type:"password",placeholder:"Password *",value:"",maxlength:"16"},domProps:{value:t.userInformation.password},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"password",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.confirmPassword,expression:"userInformation.confirmPassword"}],staticClass:"form-control bg-dark",attrs:{type:"password",placeholder:"Confirm Password *",value:"",maxlength:"16"},domProps:{value:t.userInformation.confirmPassword},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"confirmPassword",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.email,expression:"userInformation.email"}],staticClass:"form-control bg-dark",attrs:{type:"email",placeholder:"Your Email *",value:""},domProps:{value:t.userInformation.email},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"email",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group bg-dark"},[o("div",{staticClass:"input-group mb-3"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.phonePrefix,expression:"userInformation.phonePrefix"}],staticClass:"form-control bg-dark",attrs:{name:"countryCode"},on:{change:[function(a){var o=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userInformation,"phonePrefix",a.target.multiple?o:o[0])},t.handleChange]}},[o("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[t._v("Choose here")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GB",value:"44"}},[t._v("UK (+44)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"US",value:"1"}},[t._v("USA (+1)")]),t._v(" "),t._m(0)]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.phone,expression:"userInformation.phone"}],staticClass:"form-control bg-dark",attrs:{type:"text",minlength:"10",maxlength:"15",name:"txtEmpPhone",placeholder:"Your Phone *",value:""},domProps:{value:t.userInformation.phone},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"phone",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.question,expression:"userInformation.question"}],staticClass:"form-control bg-dark",on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userInformation,"question",a.target.multiple?o:o[0])}}},[o("option",{staticClass:"hidden",attrs:{disabled:""}},[t._v("Please select your Sequrity Question")]),t._v(" "),o("option",[t._v("What is your Birthdate?")]),t._v(" "),o("option",[t._v("What is Your old Phone Number")]),t._v(" "),o("option",[t._v("What is your Pet Name?")])])]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInformation.answer,expression:"userInformation.answer"}],staticClass:"form-control bg-dark",attrs:{type:"text",placeholder:"Enter Your Answer *",value:""},domProps:{value:t.userInformation.answer},on:{input:function(a){a.target.composing||t.$set(t.userInformation,"answer",a.target.value)}}})]),t._v(" "),o("input",{staticClass:"btnRegister bg-dark",attrs:{type:"button",value:"Register"},on:{click:t.register}})])])])])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("optgroup",{staticClass:"text-left text-capitalize",attrs:{label:"Other countries"}},[o("option",{attrs:{"data-countryCode":"DZ",value:"213"}},[t._v("Algeria (+213)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AD",value:"376"}},[t._v("Andorra (+376)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AO",value:"244"}},[t._v("Angola (+244)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AI",value:"1264"}},[t._v("Anguilla (+1264)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AG",value:"1268"}},[t._v("Antigua & Barbuda (+1268)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AR",value:"54"}},[t._v("Argentina (+54)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AM",value:"374"}},[t._v("Armenia (+374)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AW",value:"297"}},[t._v("Aruba (+297)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AU",value:"61"}},[t._v("Australia (+61)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AT",value:"43"}},[t._v("Austria (+43)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AZ",value:"994"}},[t._v("Azerbaijan (+994)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BS",value:"1242"}},[t._v("Bahamas (+1242)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BH",value:"973"}},[t._v("Bahrain (+973)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BD",value:"880"}},[t._v("Bangladesh (+880)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BB",value:"1246"}},[t._v("Barbados (+1246)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BY",value:"375"}},[t._v("Belarus (+375)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BE",value:"32"}},[t._v("Belgium (+32)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BZ",value:"501"}},[t._v("Belize (+501)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BJ",value:"229"}},[t._v("Benin (+229)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BM",value:"1441"}},[t._v("Bermuda (+1441)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BT",value:"975"}},[t._v("Bhutan (+975)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BO",value:"591"}},[t._v("Bolivia (+591)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BA",value:"387"}},[t._v("Bosnia Herzegovina (+387)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BW",value:"267"}},[t._v("Botswana (+267)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BR",value:"55"}},[t._v("Brazil (+55)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BN",value:"673"}},[t._v("Brunei (+673)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BG",value:"359"}},[t._v("Bulgaria (+359)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BF",value:"226"}},[t._v("Burkina Faso (+226)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"BI",value:"257"}},[t._v("Burundi (+257)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KH",value:"855"}},[t._v("Cambodia (+855)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CM",value:"237"}},[t._v("Cameroon (+237)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CA",value:"1"}},[t._v("Canada (+1)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CV",value:"238"}},[t._v("Cape Verde Islands (+238)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KY",value:"1345"}},[t._v("Cayman Islands (+1345)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CF",value:"236"}},[t._v("Central African Republic (+236)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CL",value:"56"}},[t._v("Chile (+56)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CN",value:"86"}},[t._v("China (+86)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CO",value:"57"}},[t._v("Colombia (+57)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KM",value:"269"}},[t._v("Comoros (+269)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CG",value:"242"}},[t._v("Congo (+242)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CK",value:"682"}},[t._v("Cook Islands (+682)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CR",value:"506"}},[t._v("Costa Rica (+506)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"HR",value:"385"}},[t._v("Croatia (+385)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CU",value:"53"}},[t._v("Cuba (+53)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CY",value:"90392"}},[t._v("Cyprus North (+90392)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CY",value:"357"}},[t._v("Cyprus South (+357)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CZ",value:"42"}},[t._v("Czech Republic (+42)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"DK",value:"45"}},[t._v("Denmark (+45)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"DJ",value:"253"}},[t._v("Djibouti (+253)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"DM",value:"1809"}},[t._v("Dominica (+1809)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"DO",value:"1809"}},[t._v("Dominican Republic (+1809)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"EC",value:"593"}},[t._v("Ecuador (+593)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"EG",value:"20"}},[t._v("Egypt (+20)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SV",value:"503"}},[t._v("El Salvador (+503)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GQ",value:"240"}},[t._v("Equatorial Guinea (+240)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ER",value:"291"}},[t._v("Eritrea (+291)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"EE",value:"372"}},[t._v("Estonia (+372)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ET",value:"251"}},[t._v("Ethiopia (+251)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"FK",value:"500"}},[t._v("Falkland Islands (+500)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"FO",value:"298"}},[t._v("Faroe Islands (+298)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"FJ",value:"679"}},[t._v("Fiji (+679)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"FI",value:"358"}},[t._v("Finland (+358)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"FR",value:"33"}},[t._v("France (+33)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GF",value:"594"}},[t._v("French Guiana (+594)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PF",value:"689"}},[t._v("French Polynesia (+689)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GA",value:"241"}},[t._v("Gabon (+241)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GM",value:"220"}},[t._v("Gambia (+220)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GE",value:"7880"}},[t._v("Georgia (+7880)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"DE",value:"49"}},[t._v("Germany (+49)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GH",value:"233"}},[t._v("Ghana (+233)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GI",value:"350"}},[t._v("Gibraltar (+350)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GR",value:"30"}},[t._v("Greece (+30)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GL",value:"299"}},[t._v("Greenland (+299)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GD",value:"1473"}},[t._v("Grenada (+1473)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GP",value:"590"}},[t._v("Guadeloupe (+590)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GU",value:"671"}},[t._v("Guam (+671)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GT",value:"502"}},[t._v("Guatemala (+502)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GN",value:"224"}},[t._v("Guinea (+224)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GW",value:"245"}},[t._v("Guinea - Bissau (+245)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"GY",value:"592"}},[t._v("Guyana (+592)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"HT",value:"509"}},[t._v("Haiti (+509)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"HN",value:"504"}},[t._v("Honduras (+504)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"HK",value:"852"}},[t._v("Hong Kong (+852)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"HU",value:"36"}},[t._v("Hungary (+36)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IS",value:"354"}},[t._v("Iceland (+354)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IN",value:"91"}},[t._v("India (+91)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ID",value:"62"}},[t._v("Indonesia (+62)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IR",value:"98"}},[t._v("Iran (+98)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IQ",value:"964"}},[t._v("Iraq (+964)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IE",value:"353"}},[t._v("Ireland (+353)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IL",value:"972"}},[t._v("Israel (+972)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"IT",value:"39"}},[t._v("Italy (+39)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"JM",value:"1876"}},[t._v("Jamaica (+1876)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"JP",value:"81"}},[t._v("Japan (+81)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"JO",value:"962"}},[t._v("Jordan (+962)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KZ",value:"7"}},[t._v("Kazakhstan (+7)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KE",value:"254"}},[t._v("Kenya (+254)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KI",value:"686"}},[t._v("Kiribati (+686)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KP",value:"850"}},[t._v("Korea North (+850)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KR",value:"82"}},[t._v("Korea South (+82)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KW",value:"965"}},[t._v("Kuwait (+965)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KG",value:"996"}},[t._v("Kyrgyzstan (+996)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LA",value:"856"}},[t._v("Laos (+856)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LV",value:"371"}},[t._v("Latvia (+371)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LB",value:"961"}},[t._v("Lebanon (+961)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LS",value:"266"}},[t._v("Lesotho (+266)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LR",value:"231"}},[t._v("Liberia (+231)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LY",value:"218"}},[t._v("Libya (+218)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LI",value:"417"}},[t._v("Liechtenstein (+417)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LT",value:"370"}},[t._v("Lithuania (+370)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LU",value:"352"}},[t._v("Luxembourg (+352)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MO",value:"853"}},[t._v("Macao (+853)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MK",value:"389"}},[t._v("Macedonia (+389)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MG",value:"261"}},[t._v("Madagascar (+261)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MW",value:"265"}},[t._v("Malawi (+265)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MY",value:"60"}},[t._v("Malaysia (+60)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MV",value:"960"}},[t._v("Maldives (+960)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ML",value:"223"}},[t._v("Mali (+223)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MT",value:"356"}},[t._v("Malta (+356)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MH",value:"692"}},[t._v("Marshall Islands (+692)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MQ",value:"596"}},[t._v("Martinique (+596)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MR",value:"222"}},[t._v("Mauritania (+222)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"YT",value:"269"}},[t._v("Mayotte (+269)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MX",value:"52"}},[t._v("Mexico (+52)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"FM",value:"691"}},[t._v("Micronesia (+691)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MD",value:"373"}},[t._v("Moldova (+373)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MC",value:"377"}},[t._v("Monaco (+377)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MN",value:"976"}},[t._v("Mongolia (+976)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MS",value:"1664"}},[t._v("Montserrat (+1664)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MA",value:"212"}},[t._v("Morocco (+212)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MZ",value:"258"}},[t._v("Mozambique (+258)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"MN",value:"95"}},[t._v("Myanmar (+95)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NA",value:"264"}},[t._v("Namibia (+264)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NR",value:"674"}},[t._v("Nauru (+674)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NP",value:"977"}},[t._v("Nepal (+977)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NL",value:"31"}},[t._v("Netherlands (+31)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NC",value:"687"}},[t._v("New Caledonia (+687)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NZ",value:"64"}},[t._v("New Zealand (+64)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NI",value:"505"}},[t._v("Nicaragua (+505)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NE",value:"227"}},[t._v("Niger (+227)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NG",value:"234"}},[t._v("Nigeria (+234)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NU",value:"683"}},[t._v("Niue (+683)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NF",value:"672"}},[t._v("Norfolk Islands (+672)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NP",value:"670"}},[t._v("Northern Marianas (+670)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"NO",value:"47"}},[t._v("Norway (+47)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"OM",value:"968"}},[t._v("Oman (+968)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PW",value:"680"}},[t._v("Palau (+680)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PA",value:"507"}},[t._v("Panama (+507)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PG",value:"675"}},[t._v("Papua New Guinea (+675)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PY",value:"595"}},[t._v("Paraguay (+595)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PE",value:"51"}},[t._v("Peru (+51)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PH",value:"63"}},[t._v("Philippines (+63)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PL",value:"48"}},[t._v("Poland (+48)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PT",value:"351"}},[t._v("Portugal (+351)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"PR",value:"1787"}},[t._v("Puerto Rico (+1787)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"QA",value:"974"}},[t._v("Qatar (+974)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"RE",value:"262"}},[t._v("Reunion (+262)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"RO",value:"40"}},[t._v("Romania (+40)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"RU",value:"7"}},[t._v("Russia (+7)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"RW",value:"250"}},[t._v("Rwanda (+250)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SM",value:"378"}},[t._v("San Marino (+378)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ST",value:"239"}},[t._v("Sao Tome & Principe (+239)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SA",value:"966"}},[t._v("Saudi Arabia (+966)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SN",value:"221"}},[t._v("Senegal (+221)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CS",value:"381"}},[t._v("Serbia (+381)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SC",value:"248"}},[t._v("Seychelles (+248)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SL",value:"232"}},[t._v("Sierra Leone (+232)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SG",value:"65"}},[t._v("Singapore (+65)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SK",value:"421"}},[t._v("Slovak Republic (+421)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SI",value:"386"}},[t._v("Slovenia (+386)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SB",value:"677"}},[t._v("Solomon Islands (+677)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SO",value:"252"}},[t._v("Somalia (+252)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ZA",value:"27"}},[t._v("South Africa (+27)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ES",value:"34"}},[t._v("Spain (+34)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"LK",value:"94"}},[t._v("Sri Lanka (+94)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SH",value:"290"}},[t._v("St. Helena (+290)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"KN",value:"1869"}},[t._v("St. Kitts (+1869)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SC",value:"1758"}},[t._v("St. Lucia (+1758)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SD",value:"249"}},[t._v("Sudan (+249)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SR",value:"597"}},[t._v("Suriname (+597)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SZ",value:"268"}},[t._v("Swaziland (+268)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SE",value:"46"}},[t._v("Sweden (+46)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"CH",value:"41"}},[t._v("Switzerland (+41)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"SI",value:"963"}},[t._v("Syria (+963)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TW",value:"886"}},[t._v("Taiwan (+886)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TJ",value:"7"}},[t._v("Tajikstan (+7)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TH",value:"66"}},[t._v("Thailand (+66)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TG",value:"228"}},[t._v("Togo (+228)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TO",value:"676"}},[t._v("Tonga (+676)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TT",value:"1868"}},[t._v("Trinidad & Tobago (+1868)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TN",value:"216"}},[t._v("Tunisia (+216)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TR",value:"90"}},[t._v("Turkey (+90)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TM",value:"7"}},[t._v("Turkmenistan (+7)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TM",value:"993"}},[t._v("Turkmenistan (+993)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TC",value:"1649"}},[t._v("Turks & Caicos Islands (+1649)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"TV",value:"688"}},[t._v("Tuvalu (+688)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"UG",value:"256"}},[t._v("Uganda (+256)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"UA",value:"380"}},[t._v("Ukraine (+380)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"AE",value:"971"}},[t._v("United Arab Emirates (+971)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"UY",value:"598"}},[t._v("Uruguay (+598)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"UZ",value:"7"}},[t._v("Uzbekistan (+7)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"VU",value:"678"}},[t._v("Vanuatu (+678)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"VA",value:"379"}},[t._v("Vatican City (+379)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"VE",value:"58"}},[t._v("Venezuela (+58)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"VN",value:"84"}},[t._v("Vietnam (+84)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"VG",value:"84"}},[t._v("Virgin Islands - British (+1284)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"VI",value:"84"}},[t._v("Virgin Islands - US (+1340)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"WF",value:"681"}},[t._v("Wallis & Futuna (+681)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"YE",value:"969"}},[t._v("Yemen (North)(+969)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"YE",value:"967"}},[t._v("Yemen (South)(+967)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ZM",value:"260"}},[t._v("Zambia (+260)")]),t._v(" "),o("option",{attrs:{"data-countryCode":"ZW",value:"263"}},[t._v("Zimbabwe (+263)")])])}]};var u=o("VU/8")(i,s,!1,function(t){o("ALKU")},"data-v-748e7800",null);a.default=u.exports}});
//# sourceMappingURL=3.c052235be4a11d4bdbf8.js.map
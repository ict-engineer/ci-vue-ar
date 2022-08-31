<template>
     <div id="app">
      
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://res.cloudinary.com/nonprofit-profile/image/upload/v1635599858/unnamed_zzinh4.png" 
                          alt=""/>
                        <h3>Welcome</h3>
                        <p>After a short registration, you can start managing your own projects!</p>
                         <router-link to="/login">   <input type="button"  value="Login"/></router-link>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            
                                <h3 class="register-heading">Register Here</h3>
                                 
                                <div class="row register-form">
                                        <section  v-show="isError == true" >
                                            
                                            <div class="col-sm-12">
                                            <div class="alert fade alert-simple alert-danger alert-dismissible text-left font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                                        
                                            <i class="start-icon fa fa-times-circle faa-pulse animated"></i>
                                            <strong class="font__weight-semibold">Oh snap!</strong> <span v-html="errorCode"></span>
                                            </div>
                                            </div>
                                        </section>
                                      

                                    <div class="col-md-6">

                                         

                                        <div class="form-group">
                                            <input type="text" class="form-control bg-dark" placeholder="First Name *" value=""  v-model="userInformation.firstname"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control bg-dark" placeholder="Last Name *" value="" v-model="userInformation.lastname"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control bg-dark" placeholder="Password *" value="" maxlength="16" v-model="userInformation.password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control bg-dark"  placeholder="Confirm Password *" value=""  maxlength="16" v-model="userInformation.confirmPassword"/>
                                        </div>
                                     
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control bg-dark" placeholder="Your Email *" value="" v-model="userInformation.email"/>
                                        </div>
                                        <div class="form-group bg-dark">
                                        <div class="input-group mb-3">
  <select @change="handleChange" class="form-control bg-dark" name="countryCode" v-model="userInformation.phonePrefix">
	<option value="" selected disabled hidden>Choose here</option>
    <option data-countryCode="GB" value="44" >UK (+44)</option>
	<option data-countryCode="US" value="1" >USA (+1)</option>
	<optgroup label="Other countries" class="text-left text-capitalize" >
		<option data-countryCode="DZ" value="213">Algeria (+213)</option>
		<option data-countryCode="AD" value="376">Andorra (+376)</option>
		<option data-countryCode="AO" value="244">Angola (+244)</option>
		<option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
		<option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
		<option data-countryCode="AR" value="54">Argentina (+54)</option>
		<option data-countryCode="AM" value="374">Armenia (+374)</option>
		<option data-countryCode="AW" value="297">Aruba (+297)</option>
		<option data-countryCode="AU" value="61">Australia (+61)</option>
		<option data-countryCode="AT" value="43">Austria (+43)</option>
		<option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
		<option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
		<option data-countryCode="BH" value="973">Bahrain (+973)</option>
		<option data-countryCode="BD" value="880">Bangladesh (+880)</option>
		<option data-countryCode="BB" value="1246">Barbados (+1246)</option>
		<option data-countryCode="BY" value="375">Belarus (+375)</option>
		<option data-countryCode="BE" value="32">Belgium (+32)</option>
		<option data-countryCode="BZ" value="501">Belize (+501)</option>
		<option data-countryCode="BJ" value="229">Benin (+229)</option>
		<option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
		<option data-countryCode="BT" value="975">Bhutan (+975)</option>
		<option data-countryCode="BO" value="591">Bolivia (+591)</option>
		<option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
		<option data-countryCode="BW" value="267">Botswana (+267)</option>
		<option data-countryCode="BR" value="55">Brazil (+55)</option>
		<option data-countryCode="BN" value="673">Brunei (+673)</option>
		<option data-countryCode="BG" value="359">Bulgaria (+359)</option>
		<option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
		<option data-countryCode="BI" value="257">Burundi (+257)</option>
		<option data-countryCode="KH" value="855">Cambodia (+855)</option>
		<option data-countryCode="CM" value="237">Cameroon (+237)</option>
		<option data-countryCode="CA" value="1">Canada (+1)</option>
		<option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
		<option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
		<option data-countryCode="CF" value="236">Central African Republic (+236)</option>
		<option data-countryCode="CL" value="56">Chile (+56)</option>
		<option data-countryCode="CN" value="86">China (+86)</option>
		<option data-countryCode="CO" value="57">Colombia (+57)</option>
		<option data-countryCode="KM" value="269">Comoros (+269)</option>
		<option data-countryCode="CG" value="242">Congo (+242)</option>
		<option data-countryCode="CK" value="682">Cook Islands (+682)</option>
		<option data-countryCode="CR" value="506">Costa Rica (+506)</option>
		<option data-countryCode="HR" value="385">Croatia (+385)</option>
		<option data-countryCode="CU" value="53">Cuba (+53)</option>
		<option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
		<option data-countryCode="CY" value="357">Cyprus South (+357)</option>
		<option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
		<option data-countryCode="DK" value="45">Denmark (+45)</option>
		<option data-countryCode="DJ" value="253">Djibouti (+253)</option>
		<option data-countryCode="DM" value="1809">Dominica (+1809)</option>
		<option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
		<option data-countryCode="EC" value="593">Ecuador (+593)</option>
		<option data-countryCode="EG" value="20">Egypt (+20)</option>
		<option data-countryCode="SV" value="503">El Salvador (+503)</option>
		<option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
		<option data-countryCode="ER" value="291">Eritrea (+291)</option>
		<option data-countryCode="EE" value="372">Estonia (+372)</option>
		<option data-countryCode="ET" value="251">Ethiopia (+251)</option>
		<option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
		<option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
		<option data-countryCode="FJ" value="679">Fiji (+679)</option>
		<option data-countryCode="FI" value="358">Finland (+358)</option>
		<option data-countryCode="FR" value="33">France (+33)</option>
		<option data-countryCode="GF" value="594">French Guiana (+594)</option>
		<option data-countryCode="PF" value="689">French Polynesia (+689)</option>
		<option data-countryCode="GA" value="241">Gabon (+241)</option>
		<option data-countryCode="GM" value="220">Gambia (+220)</option>
		<option data-countryCode="GE" value="7880">Georgia (+7880)</option>
		<option data-countryCode="DE" value="49">Germany (+49)</option>
		<option data-countryCode="GH" value="233">Ghana (+233)</option>
		<option data-countryCode="GI" value="350">Gibraltar (+350)</option>
		<option data-countryCode="GR" value="30">Greece (+30)</option>
		<option data-countryCode="GL" value="299">Greenland (+299)</option>
		<option data-countryCode="GD" value="1473">Grenada (+1473)</option>
		<option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
		<option data-countryCode="GU" value="671">Guam (+671)</option>
		<option data-countryCode="GT" value="502">Guatemala (+502)</option>
		<option data-countryCode="GN" value="224">Guinea (+224)</option>
		<option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
		<option data-countryCode="GY" value="592">Guyana (+592)</option>
		<option data-countryCode="HT" value="509">Haiti (+509)</option>
		<option data-countryCode="HN" value="504">Honduras (+504)</option>
		<option data-countryCode="HK" value="852">Hong Kong (+852)</option>
		<option data-countryCode="HU" value="36">Hungary (+36)</option>
		<option data-countryCode="IS" value="354">Iceland (+354)</option>
		<option data-countryCode="IN" value="91">India (+91)</option>
		<option data-countryCode="ID" value="62">Indonesia (+62)</option>
		<option data-countryCode="IR" value="98">Iran (+98)</option>
		<option data-countryCode="IQ" value="964">Iraq (+964)</option>
		<option data-countryCode="IE" value="353">Ireland (+353)</option>
		<option data-countryCode="IL" value="972">Israel (+972)</option>
		<option data-countryCode="IT" value="39">Italy (+39)</option>
		<option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
		<option data-countryCode="JP" value="81">Japan (+81)</option>
		<option data-countryCode="JO" value="962">Jordan (+962)</option>
		<option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
		<option data-countryCode="KE" value="254">Kenya (+254)</option>
		<option data-countryCode="KI" value="686">Kiribati (+686)</option>
		<option data-countryCode="KP" value="850">Korea North (+850)</option>
		<option data-countryCode="KR" value="82">Korea South (+82)</option>
		<option data-countryCode="KW" value="965">Kuwait (+965)</option>
		<option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
		<option data-countryCode="LA" value="856">Laos (+856)</option>
		<option data-countryCode="LV" value="371">Latvia (+371)</option>
		<option data-countryCode="LB" value="961">Lebanon (+961)</option>
		<option data-countryCode="LS" value="266">Lesotho (+266)</option>
		<option data-countryCode="LR" value="231">Liberia (+231)</option>
		<option data-countryCode="LY" value="218">Libya (+218)</option>
		<option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
		<option data-countryCode="LT" value="370">Lithuania (+370)</option>
		<option data-countryCode="LU" value="352">Luxembourg (+352)</option>
		<option data-countryCode="MO" value="853">Macao (+853)</option>
		<option data-countryCode="MK" value="389">Macedonia (+389)</option>
		<option data-countryCode="MG" value="261">Madagascar (+261)</option>
		<option data-countryCode="MW" value="265">Malawi (+265)</option>
		<option data-countryCode="MY" value="60">Malaysia (+60)</option>
		<option data-countryCode="MV" value="960">Maldives (+960)</option>
		<option data-countryCode="ML" value="223">Mali (+223)</option>
		<option data-countryCode="MT" value="356">Malta (+356)</option>
		<option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
		<option data-countryCode="MQ" value="596">Martinique (+596)</option>
		<option data-countryCode="MR" value="222">Mauritania (+222)</option>
		<option data-countryCode="YT" value="269">Mayotte (+269)</option>
		<option data-countryCode="MX" value="52">Mexico (+52)</option>
		<option data-countryCode="FM" value="691">Micronesia (+691)</option>
		<option data-countryCode="MD" value="373">Moldova (+373)</option>
		<option data-countryCode="MC" value="377">Monaco (+377)</option>
		<option data-countryCode="MN" value="976">Mongolia (+976)</option>
		<option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
		<option data-countryCode="MA" value="212">Morocco (+212)</option>
		<option data-countryCode="MZ" value="258">Mozambique (+258)</option>
		<option data-countryCode="MN" value="95">Myanmar (+95)</option>
		<option data-countryCode="NA" value="264">Namibia (+264)</option>
		<option data-countryCode="NR" value="674">Nauru (+674)</option>
		<option data-countryCode="NP" value="977">Nepal (+977)</option>
		<option data-countryCode="NL" value="31">Netherlands (+31)</option>
		<option data-countryCode="NC" value="687">New Caledonia (+687)</option>
		<option data-countryCode="NZ" value="64">New Zealand (+64)</option>
		<option data-countryCode="NI" value="505">Nicaragua (+505)</option>
		<option data-countryCode="NE" value="227">Niger (+227)</option>
		<option data-countryCode="NG" value="234">Nigeria (+234)</option>
		<option data-countryCode="NU" value="683">Niue (+683)</option>
		<option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
		<option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
		<option data-countryCode="NO" value="47">Norway (+47)</option>
		<option data-countryCode="OM" value="968">Oman (+968)</option>
		<option data-countryCode="PW" value="680">Palau (+680)</option>
		<option data-countryCode="PA" value="507">Panama (+507)</option>
		<option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
		<option data-countryCode="PY" value="595">Paraguay (+595)</option>
		<option data-countryCode="PE" value="51">Peru (+51)</option>
		<option data-countryCode="PH" value="63">Philippines (+63)</option>
		<option data-countryCode="PL" value="48">Poland (+48)</option>
		<option data-countryCode="PT" value="351">Portugal (+351)</option>
		<option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
		<option data-countryCode="QA" value="974">Qatar (+974)</option>
		<option data-countryCode="RE" value="262">Reunion (+262)</option>
		<option data-countryCode="RO" value="40">Romania (+40)</option>
		<option data-countryCode="RU" value="7">Russia (+7)</option>
		<option data-countryCode="RW" value="250">Rwanda (+250)</option>
		<option data-countryCode="SM" value="378">San Marino (+378)</option>
		<option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
		<option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
		<option data-countryCode="SN" value="221">Senegal (+221)</option>
		<option data-countryCode="CS" value="381">Serbia (+381)</option>
		<option data-countryCode="SC" value="248">Seychelles (+248)</option>
		<option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
		<option data-countryCode="SG" value="65">Singapore (+65)</option>
		<option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
		<option data-countryCode="SI" value="386">Slovenia (+386)</option>
		<option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
		<option data-countryCode="SO" value="252">Somalia (+252)</option>
		<option data-countryCode="ZA" value="27">South Africa (+27)</option>
		<option data-countryCode="ES" value="34">Spain (+34)</option>
		<option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
		<option data-countryCode="SH" value="290">St. Helena (+290)</option>
		<option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
		<option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
		<option data-countryCode="SD" value="249">Sudan (+249)</option>
		<option data-countryCode="SR" value="597">Suriname (+597)</option>
		<option data-countryCode="SZ" value="268">Swaziland (+268)</option>
		<option data-countryCode="SE" value="46">Sweden (+46)</option>
		<option data-countryCode="CH" value="41">Switzerland (+41)</option>
		<option data-countryCode="SI" value="963">Syria (+963)</option>
		<option data-countryCode="TW" value="886">Taiwan (+886)</option>
		<option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
		<option data-countryCode="TH" value="66">Thailand (+66)</option>
		<option data-countryCode="TG" value="228">Togo (+228)</option>
		<option data-countryCode="TO" value="676">Tonga (+676)</option>
		<option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
		<option data-countryCode="TN" value="216">Tunisia (+216)</option>
		<option data-countryCode="TR" value="90">Turkey (+90)</option>
		<option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
		<option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
		<option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
		<option data-countryCode="TV" value="688">Tuvalu (+688)</option>
		<option data-countryCode="UG" value="256">Uganda (+256)</option>
		<!-- <option data-countryCode="GB" value="44">UK (+44)</option> -->
		<option data-countryCode="UA" value="380">Ukraine (+380)</option>
		<option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
		<option data-countryCode="UY" value="598">Uruguay (+598)</option>
		<!-- <option data-countryCode="US" value="1">USA (+1)</option> -->
		<option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
		<option data-countryCode="VU" value="678">Vanuatu (+678)</option>
		<option data-countryCode="VA" value="379">Vatican City (+379)</option>
		<option data-countryCode="VE" value="58">Venezuela (+58)</option>
		<option data-countryCode="VN" value="84">Vietnam (+84)</option>
		<option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
		<option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
		<option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
		<option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
		<option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
		<option data-countryCode="ZM" value="260">Zambia (+260)</option>
		<option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
      
	</optgroup>
  
</select>
  <input type="text" minlength="10" maxlength="15" name="txtEmpPhone" class="form-control bg-dark" placeholder="Your Phone *" value=""  v-model="userInformation.phone"/>

                                        </div>
 
                                         

                                          
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control bg-dark" v-model="userInformation.question">
                                                <option class="hidden" disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control bg-dark" placeholder="Enter Your Answer *" value="" v-model="userInformation.answer" />
                                        </div>
                                        
                                        <input type="button" @click="register" class="btnRegister bg-dark"  value="Register"/>

                                        
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
            
     </div>
</template>

<script>
import axios from 'axios';
const registerApi = process.env.API_URL  + "Users_Api/save";

export default ({
 data(){
     return{
         warnings:{
             firstname : "First Name",
             lastname : "Last Name",
             gender : "Gender",
             email : "E-Mail",
             password : "Password",
             confirmPassword : "Confirm Password",
             phone : "Phone",
             country:"Country",
             question : "Question",
             answer : "Answer",
         },
         userInformation:{
             firstname : "",
             lastname : "",
             gender : "-",
             email : "",
             password : "",
             confirmPassword : "",
             phone : "",
             phonePrefix:"",
             country:"",
             question : "Please select your Sequrity Question",
             answer : "",
         },
         isError : false,
         errorCode: "" ,
         errorText: "Change a few things up and try submitting again." 

     }

 },
 methods:{    
      validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
     registerPost(data){
        delete data.confirmPassword;
         axios.post(registerApi,JSON.stringify(data))
         .then(response =>{
                var resDecode = JSON.parse(JSON.stringify(response));
                if (resDecode.data.isError) {
                     this.isError = true;   
                     this.errorCode =  resDecode.data.error_text;
                }else{
                    // buraya bakılacak
                    console.log("create Session");
                    window.location = "/projects";
                }
         });

     },
     handleChange(e) {
        if(e.target.options.selectedIndex > -1) {
           this.userInformation.country = (e.target.options[e.target.options.selectedIndex].text);
        }
    },
     register(){

            if (!this.validEmail(this.userInformation.email)) {
                  this.isError = true;   
                  this.errorCode = this.errorText + " <b>* " +this.warnings.email + ":</b> There is a problem with the email format.";
                  return;
            }
            if (this.userInformation.password != this.userInformation.confirmPassword) {
                this.isError = true;   
                this.errorCode = this.errorText + " <b>* " +this.warnings.password + ":</b> Passwords do not match.";
                return;
            }
            if (this.userInformation.password.length < 6) {
                this.isError = true;   
                this.errorCode = this.errorText + " <b>* " +this.warnings.password + ":</b> Your password must consist of at least 6 characters.";
                return;
            }
            if (this.userInformation.question == "Please select your Sequrity Question") {
                this.isError = true;   
                this.errorCode = this.errorText + " <b>* " +this.warnings.question + ":</b> Please select your Sequrity Question!";
                return;
            }
               
             if (  this.userInformation.country == "") {
                this.isError = true;   
                this.errorCode = this.errorText + " <b>* " +this.warnings.country + ":</b> Please select your Country!";
                 return;
             }
             this.userInformation.country =  this.userInformation.phonePrefix.text;
            for (var key in this.userInformation) {
                var value = this.userInformation[key];
                if (value == "") {
                      this.isError = true;  
                      console.log( this.warnings[key]); 
                      this.errorCode = this.errorText + " <b>* " + this.warnings[key] + ":</b> cannot be null.";
                      return;
                }
                 this.isError = false;  
            }
             
            if (this.isError == false) {
                
              this.registerPost(this.userInformation);
            }

     }
}

})
</script>













<style scoped>

 

.alert>.start-icon {
    margin-right: 0;
    min-width: 20px;
    text-align: center;
}

.alert>.start-icon {
    margin-right: 5px;
}

.greencross
{
  font-size:18px;
      color: #25ff0b;
    text-shadow: none;
}

.alert-simple.alert-success
{
  border: 1px solid rgba(36, 241, 6, 0.46);
    background-color: rgba(7, 149, 66, 0.12156862745098039);
    box-shadow: 0px 0px 2px #259c08;
    color: #0ad406;
  text-shadow: 2px 1px #00040a;
  transition:0.5s;
  cursor:pointer;
}
.alert-success:hover{
  background-color: rgba(7, 149, 66, 0.35);
  transition:0.5s;
}
.alert-simple.alert-info
{
  border: 1px solid rgba(6, 44, 241, 0.46);
    background-color: rgba(7, 73, 149, 0.12156862745098039);
    box-shadow: 0px 0px 2px #0396ff;
    color: #0396ff;
  text-shadow: 2px 1px #00040a;
  transition:0.5s;
  cursor:pointer;
}

.alert-info:hover
{
  background-color: rgba(7, 73, 149, 0.35);
  transition:0.5s;
}

.blue-cross
{
  font-size: 18px;
    color: #0bd2ff;
    text-shadow: none;
}

.alert-simple.alert-warning
{
      border: 1px solid rgba(241, 142, 6, 0.81);
    background-color: rgba(220, 128, 1, 0.16);
    box-shadow: 0px 0px 2px #ffb103;
    color: #ffb103;
    text-shadow: 2px 1px #00040a;
  transition:0.5s;
  cursor:pointer;
}

.alert-warning:hover{
  background-color: rgba(220, 128, 1, 0.33);
  transition:0.5s;
}

.warning
{
      font-size: 18px;
    color: #ffb40b;
    text-shadow: none;
}

.alert-simple.alert-danger
{
  border: 1px solid rgba(241, 6, 6, 0.81);
    background-color: rgba(220, 17, 1, 0.16);
    box-shadow: 0px 0px 2px #ff0303;
    color: #ff0303;
  
  transition:0.5s;
  cursor:pointer;
}

.alert-danger:hover
{
     background-color: rgba(220, 17, 1, 0.33);
  transition:0.5s;
}

.danger
{
      font-size: 18px;
    color: #ff0303;
    text-shadow: none;
}

.alert-simple.alert-primary
{
  border: 1px solid rgba(6, 241, 226, 0.81);
    background-color: rgba(1, 204, 220, 0.16);
    box-shadow: 0px 0px 2px #03fff5;
    color: #03d0ff;
    text-shadow: 2px 1px #00040a;
  transition:0.5s;
  cursor:pointer;
}

.alert-primary:hover{
  background-color: rgba(1, 204, 220, 0.33);
   transition:0.5s;
}

.alertprimary
{
      font-size: 18px;
    color: #03d0ff;
    text-shadow: none;
}

.square_box {
    position: absolute;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-top-left-radius: 45px;
    opacity: 0.302;
}

.square_box.box_three {
    background-image: -moz-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
    background-image: -webkit-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
    background-image: -ms-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
    opacity: 0.059;
    left: -80px;
    top: -60px;
    width: 500px;
    height: 500px;
    border-radius: 45px;
}

.square_box.box_four {
    background-image: -moz-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
    background-image: -webkit-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
    background-image: -ms-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
    opacity: 0.059;
    left: 150px;
    top: -25px;
    width: 550px;
    height: 550px;
    border-radius: 45px;
}

.alert:before {
    content: '';
    position: absolute;
    width: 0;
    height: calc(100% - 44px);
    border-left: 1px solid;
    border-right: 2px solid;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
      height: 20px;
}

.fa-times
{
-webkit-animation: blink-1 2s infinite both;
	        animation: blink-1 2s infinite both;
}


/**
 * ----------------------------------------
 * animation blink-1
 * ----------------------------------------
 */
@-webkit-keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}


#app{
    background: -webkit-linear-gradient(left, #23292F, #616260) !important;
}
.register{
  
    padding: 10%;
    height: 100vh;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #A3A6A9;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 90%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}
</style>
<template>
     <div id="app">

        <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" class="form-control form-control-lg bg-dark" placeholder="Email" v-model="userInformation.email"/>

              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" class="form-control form-control-lg bg-dark" v-on:keyup.enter="login" placeholder="Password"  v-model="userInformation.password"/>

              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5"  @click="login" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fa fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fa fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fa fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="register" class="text-white-50 fw-bold">Sign Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     </div>
</template>

<script>
import axios from 'axios';
const registerApi = process.env.API_URL  + "Users_Api/login";
export default ({
 data(){
     return{
         warnings:{
             email : "E-Mail",
             password : "Password",
         },
         userInformation:{
             email : "",
             password : ""
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
     loginPost(data){
         axios.post(registerApi,JSON.stringify(data))
         .then(response =>{
                var resDecode = JSON.parse(JSON.stringify(response));
                if (resDecode.data.isError) {
                     this.isError = true;
                     this.errorCode =  resDecode.data.error_text;
                }else{
                    if (response.status == 200) {
                        $cookies.set("user",resDecode.data.response.token,"1d");

                        window.location.href = 'projects';
                    }

                }
         });

     },
     login(){
           console.log( this.isError );

            for (var key in this.userInformation) {
                var value = this.userInformation[key];
                if (value == "") {
                      this.isError = true;
                      this.errorCode = this.errorText + " <b>* " + this.warnings[key] + ":</b> cannot be null.";
                      return;
                }
                 this.isError = false;
            }
            if (!this.validEmail(this.userInformation.email)) {
                  this.isError = true;
                  this.errorCode = this.errorText + " <b>* " +this.warnings.email + ":</b> There is a problem with the email format.";
                  return;
            }
            if (this.userInformation.password.length < 6) {
                this.isError = true;
                this.errorCode = this.errorText + " <b>* " +this.warnings.password + ":</b> Your password must consist of at least 6 characters.";
                return;
            }

            if (this.isError == false) {

              this.loginPost(this.userInformation);
            }

     }
}

})
</script>

<style scoped>


#app{
    background: -webkit-linear-gradient(left, #23292F, #616260) !important;
}

</style>








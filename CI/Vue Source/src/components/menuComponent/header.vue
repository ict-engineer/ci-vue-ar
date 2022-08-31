<template>
 <nav class="navbar navbar-expand-lg navbar navbar-dark ">
        <a href="#" class="navbar-brand">Doryx</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse1">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse1">
            <div class="navbar-nav">
                <a href="projects" class="nav-item nav-link" :class="{active :this.$route.name =='projects'}">Projects</a>
                <a :href='"build?appid=" + this.$route.query.appid' class="nav-item nav-link" :class="{active :this.$route.name =='build' || this.$route.name =='viewer' }" v-if="isBuild">Build</a>
                <a :href='"publish?appid=" + this.$route.query.appid' class="nav-item nav-link" :class="{active :this.$route.name =='publish'}" v-if="isBuild">Publish</a>
            </div>
      
        </div>
        <span class="nav-item">
            <a class="nav-link"
              style="cursor:pointer;"  @click="logout">
                <i class="fa fa-sign-out" aria-hidden="true"></i>Logout
            </a>
          </span>

    </nav>
 

 
</template>
<script>

export default ({
    data(){
        return{
            isBuild:false,
        }
    },
    props:["pageInfo"],
    methods:{
            beforeMount(){
                     if (this.$route.query.appid) {
                            this.isBuild = true;
                      }
          
                
              
            },
            logout(){
                $cookies.remove('user');
                window.location = "login";
            }
    },
   created: function(){
        this.beforeMount()
    }
})
</script>
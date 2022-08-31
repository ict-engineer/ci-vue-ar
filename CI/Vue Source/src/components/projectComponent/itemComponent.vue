<template>
   
   
     <div class="col-md-4 mt-4 noselect" >

            <div
              class="
                card
                rounded-bottom
                border border-1 border-grey
                Regular shadow
                shadow bg-dark rounded
              "
>
           
 
            <div class="content" id="projectContent"> 
 
                    <div class="content-overlay"></div> 
                     <div class="projectSettings">
                      <img @click="buttonEnabler()" data-toggle="modal" :data-target="'#projectManagement'+ projecData.id" style="object-fit: cover; width: 25px; height: 25px;"   src="/static/projects/settings.png">
                    </div>     
                 
                    <input @change="checkSelect($event)" type="checkbox" :checked="info.checked ? true:false"  id="selectProject" :class="'selectProject' + info.id">
                     
                    <img style="object-fit: cover; width: 100%; height: 210px;"   :src="callImage()">
                    <div class="content-details fadeIn-bottom">
                       
      
                        <p class="content-text"> <button class="btn btn-outline-secondary  ml-3 rounded-lg viewprojectBtn">
                        <router-link  style="text-decoration: none; color: inherit;" :to="{query:{'appid':info.uuid}, name: 'build', params: {pageInfo:'build',isBuild:true} }">
                         <i class="text-white">View Project</i>
                       </router-link></button></p>
                        <p><small>Last Edit:<br>{{info.date}}</small></p>
                          
                    </div>
              </div>
        
             

              <div class="card-body p-2">
              
                <p class="card-text text-center">{{info.name}}</p>
              </div>
            </div>
            <projectManagement :project="projecData" @projectRemover="getRemoveData" v-show="buttonClick"></projectManagement>


          </div>
</template>
<script>
 
import projectManagement from "./projectManagementModalComponent.vue";
 

export default ({
  data(){
    return {
      randImg: 0,
      infodata: this.info.icon,
      projecData : this.info,
      buttonClick:false
    }
    
  },
  components:{
    projectManagement
  },
  props: ["info"],
  methods:{
      buttonEnabler(){
        this.buttonClick = !this.buttonClick;
      },
      callImage(){
        return "../static/primages/bg" + this.infodata + ".jpg";
      },
       getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },getRemoveData(event){
         this.$emit('deleteProject',event);  
      },checkSelect(event){
        var count = 0;
        if (event.target.checked) {
          count = 1;
        }else{
          count = -1;
        }
        this.$emit("checkProject",{proc:count,id:this.info.id});
      }
  }
})

 
</script>




<style scoped>

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}


.viewprojectBtn
{ 
    color:white !important;
    text-color: white !important;
}
.viewprojectBtn:hover
{
   background-color: #323b44a1 ;
    color:white;
    text-color: white;
}

      .content {
    position: relative;
    
 
    overflow: hidden
}

.content .content-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s
}

.content:hover .content-overlay {
    opacity: 1
}

 

 
.content-details {
    position: absolute;
    text-align: center;
   
    width: 100%;
    top: 70%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s
}

.content:hover .content-details {
    top: 70%;
    left: 50%;
    opacity: 1
}

.content-details h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase
}
 
#selectProject:checked{
  opacity: 1;
  margin: 10px;
  background-color: #17A2B8;
  
}
.content:hover > #selectProject {
    opacity: 1;
    margin: 10px;
   
}
.content:hover > .projectSettings {
    opacity: 1;
}


#selectProject{
  position: absolute;
  opacity: 0;
  margin: 10px;
  width: 1.3em;
  height: 1.3em;
  background-color: transparent;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;


}

.projectSettings{
  position: absolute;
  opacity: 0;
  top: 8px;
  right: 10px;
  cursor: pointer;
}
.projectSettings:hover{
  transform: scale(1.3)
}

</style>
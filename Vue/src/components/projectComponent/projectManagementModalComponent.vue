<template>
       <div
        class="modal fade"
        :id="'projectManagement' +projectData.id"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title">Project Management</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body bg-dark">

                <div class="row">
                    <div class="col">
                      <div class="text-white"><p>Project Name : </p> </div>
                    </div>
                    <div class="col">
                      <label for="basic-url">{{projectData.projectname}}</label>
                    </div>
                    
                </div>
                  <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">New Name</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                  <div class="row">
                        <div class="col"><hr></div>
                      
                  </div>       
                <div class="row">
                
                  <div class="col text-white">Icon</div>
                  <div class="col">
                          <img style="object-fit: cover; width: 100%; height: 210px;"   :src="'/static/primages/bg' + projectData.icon +'.jpg'">
                          </div>
                  </div>

                    <div class="row">
                        <div class="col"><hr></div>
                      
                  </div>   
                  <div class="row">
                      <div class="col">
                          <span class="float-left text-white">Delete Project</span>
                          <button  class="btn btn-danger float-right" @click="removeProject();$emit('getRemoveData')">Delete Project</button>
                      </div>
                  </div>
                  <div class="row">

                  <div class="col" v-if="isActive"
                   
                  >
                    <span><label for="">Processing</label></span>
                     <div class="progress">
                          <div v-bind:class="this.activeType == deleteState.warning ? 'bg-danger' : 'bg-success'"
                           class="progress-bar progress-bar-striped progress-bar-animated"  role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div> 
                  </div>  
            
            </div>

            <div class="modal-footer bg-dark">
              <button
                type="button"
                class="btn btn-secondary"
                
                @click="this.activeType = deleteState.success"
              >
                Close
              </button>
              <button type="button"  data-dismiss="modal" class="btn btn-primary" @click="addNewProject()">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
const deleteState = Object.freeze({ success: 1, warning: 2 ,waiting:3,null:4});
const $ = window.jQuery;

export default  ({
    data() {
     return{
        projectData:this.project,
        isActive:false,
        deleteState,
        activeType : deleteState.null,
        hasError: false,
       
     }
    },
    props:["project"],
 
    methods:{
        removeProject(){   
        
         
          this.isActive = !this.isActive;
          this.activeType = deleteState.warning;
          setTimeout(() =>  this.activeType = deleteState.success  , 1000);
          setTimeout(() =>  $("#projectManagement" + this.projectData.id).modal("toggle")  , 1500);
          setTimeout(() =>  this.$emit('projectRemover',this.projectData.id)    , 2000);


           
        },
        addNewProject(){
            console.log("ok");
        },
 
    }

})
</script>
 
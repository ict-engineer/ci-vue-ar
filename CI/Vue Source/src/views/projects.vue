<template>
<div id="app">

 <PanelHeader :pageInfo="pageInfo"></PanelHeader>

  <div class="">
    <div class="row col-12">
    <div class="col">
        <button
          class="btn btn-secondary bg-dark  mt-3 rounded-lg"
          data-toggle="modal"
          data-target="#createProjectModal"
        >
          Create New Project
        </button>
      </div>
     </div>
   
      
      <!-- Modal -->
      <div
        class="modal fade"
        id="createProjectModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title">Create Project</h5>
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
              <div class="text-white"><p>Let's name our new project.</p></div>
              <label for="basic-url">Project Name</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend"></div>
                <input
                 v-model="projectName"
                  type="text"
                  class="form-control rounded-pill"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>

            <div class="modal-footer bg-dark">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
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



    </div>


 <br class="noselect">
 
<div class="container-fluid">
   <div class="row">
          <div class="col">
            <div class="cntr scaled">
              <div class="cntr-innr">
                  <label class="search" for="inpt_search">
                    <input @blur="inputBlur($event)" @focus="inputFocus($event)" v-on:input="inputChange($event)" id="inpt_search" type="search" />
                  </label>
                </div>
            </div>
          </div>
        <div class="col">
        
        </div>
          <div class="col">
                <small>
     
                <span style="cursor:pointer;" class="float-right noselect text-white" @click="selectAllProject" v-if="selectChecker"><i class="text-muted noselect bg-dark"><b>{{selectCount}}</b>&nbsp;projects selected</i>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Select All Projects&nbsp;&nbsp;
      </span>
                <span @click="unselectAllProject" style="cursor:pointer;" class="float-right noselect text-white"  v-if="!selectChecker"><i class="text-muted noselect bg-dark"><b>{{selectCount}}</b>&nbsp;projects selected</i>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Unselect All Projects&nbsp;&nbsp;
       </span></small>
          </div>
        
          <div class="col">
          <i :data-toggle="selectCount > 0 ? 'modal' : ''"
                    data-target="#deleteProjectModal" style="cursor:pointer;"><i class="fa fa-lg fa-trash text-info" id="trashIcon" aria-hidden="true"></i></i>
         </div>
        
      
    </div>
 
</div>




    
  <div class="col-md">
      <div class="container float-left mt-5">
        <div class="row">
   
      
           <createNewItem @checkProject="checkProject" @deleteProject="deleteProject" v-for="project in projects" :key="project.id" :info="project"></createNewItem>
          <div v-if="projectCounter == true" class="container">
              <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm shadow  bg-dark rounded">

                
                   <div class="col">
                        <div class="text-center">
                          <i class="fa fa-folder-open-o small fa-3x amber-text text-center mt-3" aria-hidden="true"></i>
                        </div>
                      
                    </div>

                    <div class="col">
                          <div class="text-center">
                            <p><small>You Haven't Created a Project Yet.</small></p>
                        </div>
                  </div>
                    <div class="col">
                        <div class="text-center">
                          <p><small>Please from the create new project button. Get started by entering a project name.</small></p>
                        </div>
                     </div>

             
                 
               
                </div>
                <div class="col-sm"></div>
              </div>
            </div>

        </div>
      </div>
    </div>
   
     
 <!-- Modal Delete Project -->
      <div
        class="modal fade"
        id="deleteProjectModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title">Delete Projects</h5>
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
              <div class="text-white"><p>Number of projects you want deleted: <b class="text-warning">{{ selectCount }}</b></p></div>
              <label for="basic-url">Project Names</label>
               
               <ul id="example-1">
                  <li v-for="item in projectList" :key="item.id">
                      {{ removeList(item.id) }}
                  </li>
                </ul>
            </div>

            <div class="modal-footer bg-dark">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button"  data-dismiss="modal" class="btn btn-danger" @click="deleteSelectProject()">
                All Delete
              </button>
            </div>
          </div>
        </div>
      </div>
</div>




  
</template>
 
<script>

import createNewItem from "../components/projectComponent/itemComponent";
import PanelHeader from "../components/menuComponent/header";
import axios from 'axios';
const projectsApi    = process.env.API_URL  + "Projects_Api/get_all_data";
const projectNew     = process.env.API_URL  + "Projects_Api/newAdd";
const projectRemove  = process.env.API_URL  + "Projects_Api/removeProject";

//const $ = window.jQuery;
var counter = 100;
export default {
 name:'app',
  data() {
    return {
      projectCounter: false,
      pageInfo: 'projects',
      selectCount: 0,
      selectChecker:true,
      projectList:[],
      projectName:"",
      projects:[],
    };
  },
  beforeMount(){
    this.getProjects();
 },
  methods:{
    getProjects(){
        var token = {
          "token" : $cookies.get("user")
        };
        axios.post(projectsApi,JSON.stringify(token))
        .then(response => {
          var resDecode = JSON.parse(JSON.stringify(response.data));
          if (resDecode.isError) {
             $cookies.remove("user");
             window.location = "login";
          }
          if (resDecode.length == 0) {
           this.noProject();
          }
          this.parseProject(resDecode);
        });
      
    },
    noProject(){
  if (this.projects.length == 0) {
      console.log("Henüz Proje Yok");
      this.projectCounter = true;
    }else{
     this.projectCounter = false;
   }
    },
    parseProject(data){
     data.forEach(element => {
       this.projects.push(
         {
                      "id" : element.id,
                      "name":  element.projectname,
                      "date": "No edits yet",
                      "uuid" :  element.uuid,
                      "time" :  element.time,
                      "icon": element.icon,
                      "checked" : false,
                    }
      )
     });
   
      this.projectName = "";
      this.unselectAllProject();
    },
    addNewProject(){
      var rnd = this.getRndInteger(1,11);
      var postData = {
          "token"       : $cookies.get("user"),
          "projectname" : this.projectName,
          "icon"        : rnd,
          "uuid"        : "---"
      };
      
      axios.post(projectNew,JSON.stringify(postData))
      .then(response=>{
          var resDecode = JSON.parse(JSON.stringify(response.data));
          this.projects.push({
                            "id" : counter,
                            "name":  this.projectName,
                            "uuid" :  resDecode.response.uuid,
                            "date": "No edits yet",
                            "icon":  resDecode.response.icon,
                            "time" :  resDecode.response.time,
                            "checked" : false
                          }
            );
            counter++;
            this.projectName = "";
            this.unselectAllProject();
            this.noProject();
      });
   this.noProject();
    },removeList(item){
      var obj = this.projects.filter(x => x.id === item);
    if (obj.length > 0) {
        return obj[0].projectname;
    }
      this.noProject();
    },deleteSelectProject(){
       this.projectList.forEach((value) =>{
          this.deleteProject(value.id);
       });
       this.selectChecker = true;
       this.selectCount = 0;
    },
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },
      deleteProject(idToDelete){
        //post send ids ---------------------------------------------->>>>>>>>> go post db
        var uuid = this.projects.filter(item=>item.id == idToDelete );
        uuid[0]['token'] = $cookies.get("user");
        axios.post(projectRemove,JSON.stringify(uuid[0]))
        .then(response =>{
            console.log("Removed!");
            this.noProject();
        });
         this.projects = this.projects.filter(item=>item.id != idToDelete );
         if(this.selectCount > 0){
           this.selectCount--;
         }
       
      },
      inputChange(event){
            if(event.target.value.length > 0){
             event.target.parentElement.classList.add('active');
          }
            var keyword =  event.target.value;
            var search_results = this.projects
                                .filter(prof => {
                                    return prof.projectname.toLowerCase().includes(keyword.toLowerCase());   });

        if (search_results.length > 0) {
        const index = this.indexWhere(this.projects, item => item.id === search_results[0].id);
        console.log(index);
        this.movePosition(this.projects,index,0);
        }
      },
      movePosition(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length;
            while ((k--) + 1) {
                arr.push(undefined);
            }
        }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}
      ,indexWhere(array, conditionFn) {
          const item = array.find(conditionFn)
          return array.indexOf(item)
        }
      ,inputFocus(event){
         if(event.target.value.length > 0){
             event.target.parentElement.classList.add('active');
          }
      },
      inputBlur(event){
           if(event.target.value.length == 0){
            event.target.parentElement.classList.remove('active');
          }
      },checkProject(data){
          if (data.proc == 1 && data.proc == true) {
            this.selectCount += 1;
            this.projectList.push(data);
          }else {
           this.selectCount -= 1;
           this.projectList = this.projectList.filter(item=>item.id != data.id );
         
          }
      
      },
      selectAllProject(){
       this.projectList = [];
       this.selectCount = 0;
       
       this.projects.forEach((value) => {
           value.checked = true;
           this.checkProject({proc:value.checked,id:value.id}); 
        });
        this.selectChecker = false;

       // console.log("value : " + this.selectChecker);
      },unselectAllProject(){
        this.projectList = [];
         this.selectCount = 0;
         this.projects.forEach((value) => {
         value.checked = false;
         this.selectChecker = true;
        });

      }
  },

  components: {
      createNewItem,
      PanelHeader
  },
};
</script>

<style> 
 
.cntr {
    display: table;
    padding-left: 18px;
}
.cntr .cntr-innr {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
/*** STYLES ***/
.search {
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0px 8px 7px 0px;
  padding: 7px 9px 0px 9px;
  border: 3px solid #FFFFFF;
  border-radius: 25px;
  transition: all 200ms ease;
  cursor: text;
  transform: scale(0.7); 
}
.search:after {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  right: -5px;
  top: 21px;
  background: #FFFFFF;
  border-radius: 3px;
  transform: rotate(-45deg);
  transition: all 200ms ease;
  
}
#trashIcon{
transition: all .2s ease-in-out;
}
#trashIcon:hover{
transform: scale(1.5);
}

.search.active,
.search:hover {
  border: 1px solid white;
  width: 200px;
  margin-right: 0px;
  transform: scale(1); 
}
.search.active:after,
.search:hover:after {
  height: 0px;
}
.search input {
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 15px;
  color: inherit;
  background: transparent;
  outline-width: 0px;
}
</style>
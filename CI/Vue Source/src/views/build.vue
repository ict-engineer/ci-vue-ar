<template>
 <div id="app">
  <PanelHeader :pageinfo="pageInfo"></PanelHeader>

  <div class="row container">
    <div class="col mt-3 ml-3">
      <p class="h5">All Models</p>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="row">
          <div class="col md-4 pl-5">
            <button      data-toggle="modal"
          data-target="#uploadModel"  class="btn btn-outline-info">İmport 3D Model</button>
          </div>
          <div class="col">
            <div class="mr-5 d-flex justify-content-end bd-highlight">
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Duplicate"
                @click="btnDuplicate"
                class="p-2 bd-highlight sizes handler"
              >
                <i class="bi-files" style="font-size: 20px"></i>
              </div>
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete"
                @click="btnDelete"
                class="p-2 bd-highlight sizes handler"
              >
                <i class="bi-trash" style="font-size: 20px"></i>
              </div>
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Upload Models"
                class="p-2 bd-highlight sizes handler"
              >
                <i  data-toggle="modal"
          data-target="#uploadModel" class="bi-cloud-upload" style="font-size: 20px"></i>
              </div>
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add/Edit Tags"
                class="p-2 bd-highlight sizes handler"
              >
                <i class="bi-tags" style="font-size: 20px"></i>
              </div>
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Get Embed Codes"
                class="p-2 bd-highlight sizes handler"
              >
                <i class="bi-code-square" style="font-size: 20px"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid row">
    <div class="col d-flex justify-content-end">
      <div class="dropdown p-2">
        <button
          class="btn btn-outline dropdown-toggle text-white"
          type="button"
          id="viewMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        View : {{ getView() }}
        </button>
        <div class="dropdown-menu bg-dark" aria-labelledby="viewMenu">
          <button @click="setView('grid')" class="dropdown-item" type="button">
            Grid View
          </button>
          <button @click="setView('list')" class="dropdown-item" type="button">
            List View
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid" v-if="viewType == 'list' &&  projectCounter == false">
    <div class="row">
      <div class="col-lg-10 col-lg-offset-4 centered">
        <table class="shadow table-borderless table table-hover">
          <thead>
            <tr class="">
              <th scope="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="chk0"
                  
                    @change="checkAll"
                  />
                  <label class="custom-control-label" for="chk0"></label>
                </div>
              </th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Embed</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="make-it-slow"  v-for="object in objectModels" :key="object.id" >
              <td>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input" 
                    :id="object.id" :value="object.modelname" v-model="checkedModels"
                    
                  />
                  <label
                    class="custom-control-label"
                    :for="object.id"
                  ></label>
                </div>
              </td>
              <td>
                <img class="circular make-it-fast" src="/static/builds/picture.png" />
              </td>
              <td>{{object.modelname}}</td>
              <td>{{object.create_at}}</td>
              <td>{{object.updated_at}}</td>
              <td type="button">Copy</td>
              <td>{{object.type}}</td>
              <td>{{object.status}}</td>
              <td>
                <div class="col">
              
                         <router-link class="btn btn-outline-info" style="text-decoration: none; color: inherit;" :to="{query:{'appid':object.uuid,'id':object.id}, name: 'viewer', params: {data:object.id,pageInfo:'build',isBuild:true} }">
                              Preview
                             </router-link>
                </div>
              </td>
              <td>
                <button
                  class="btn btn-outline dropdown text-white"
                  type="button"
                  id="editMenu"
                  data-toggle="dropdown"
                >
                  <i
                    class="bi bi-three-dots-vertical handler"
                    
                  ></i>
                </button>
                <div class="dropdown-menu bg-dark" aria-labelledby="editMenu">
                  <button
                    class="dropdown-item bg-outline-dark hearth"
                    type="button"
                  >
                    <i class="bi bi-pen handler"></i> Edit 
                  </button>
           
                  <button
                    class="dropdown-item bg-outline-dark hearth"
                    type="button"
                   @click="btnDuplicate"
                  >
                    <i class="bi bi-files handler" ></i>
                    Duplicate
                  </button>
                  <button
                    class="dropdown-item bg-outline-dark hearth"
                    type="button"
                  >
                    <i class="bi bi-tags handler" ></i> Add/Edit
                    Tags
                  </button>
                </div>
              </td>
            </tr>
 
          </tbody>
        </table>
      </div>
    </div>
  </div>
<div class="row container-fluid" v-if="viewType=='grid'">
    <div class="col-md-4 mt-4 noselect" v-for="object in objectModels" :key="object.id">
    
      <div
              class="
                card
                rounded-bottom
                border border-1 border-grey
                Regular shadow
                shadow bg-dark rounded
              " >
              
                  <div class="content" id="projectContent"  >   
                    <div class="content-overlay" >
               
                    </div>   
                    <input  type="checkbox" id="selectProject" class="selectProject" :value="'pid' + object.id" v-model="object.checked" >
                    <img style="object-fit: cover; width: 100%; height: 210px;"  :src="object.icon" >
                    <div class="content-details fadeIn-bottom">
                       
                        <p class="content-text">
                         <button class="btn btn-outline-secondary  ml-3 rounded-lg viewprojectBtn">
                          
                             <router-link  style="text-decoration: none; color: inherit;" :to="{query:{'appid':object.uuid,'id':object.id}, name: 'viewer', params: {data:object.id,pageInfo:'build',isBuild:true} }">
                              Preview
                             </router-link>
                     

                        </button><br>
                         <button class="btn btn-outline-secondary  ml-3 mt-1 rounded-lg viewprojectBtn">
                           &nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;
                        </button>
                        </p>
                        <p><small>Last Edit:<br></small></p>
                          
                    </div>
             
          
               </div>
                   <div class="card-body p-2">
                <p class="card-text text-center">{{object.modelname}}</p>
              </div>
            </div>
    </div>
</div>
        <div v-if="projectCounter == true" class="container">
              <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm shadow  bg-dark rounded">

                
                   <div class="col">
                        <div class="text-center">
                          <i class="fa fa-cube small fa-3x amber-text text-center mt-3" aria-hidden="true"></i>
                        </div>
                      
                    </div>

                    <div class="col">
                          <div class="text-center">
                            <p><small>You Haven't Uploaded Any Models Yet.</small></p>
                        </div>
                  </div>
                    <div class="col">
                        <div class="text-center">
                          <p><small>Please from the import model button. Get started by uploading a glb/gltf file.</small></p>
                        </div>
                     </div>

             
                 
               
                </div>
                <div class="col-sm"></div>
              </div>
            </div>


     <!-- Modal -->
      <div
        class="modal fade"
        id="uploadModel"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title">Upload Model</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body bg-dark" >
              <div v-if="!uploadFile">
               <div><p>Files must be in glb or gltf format. </p></div>
               <div class="box has-advanced-upload" @dragover.prevent @drop="onDrop">
                <div class="box__input">
                    <i style="font-size: 100px;" class="fa fa-upload box__icon text-center"  aria-hidden="true"></i>

                     <input @change="onChange" type="file" name="files[]" id="file" class="box__file" data-multiple-caption="{count} files selected" multiple="">
                    <label style="margin-left: 20%;" for="file"><strong class="hoverable">Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                    
                    </div>
               </div>
              </div>
              

             <div v-else>
              <div class="container">
            
                <div class="row">
                
                 <table class="table-dark" style="width:100%;">
                   <table class="table">
                       <thead>
                          <tr>
                            <th>File Name</th>
                            <th>File Size</th>
                            <th>Type</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{{fileInfo.name}}</td>
                             <td>{{fileInfo.size}}</td>
                             <td>{{fileInfo.type}}</td>
                             <td v-if="uploadStatus == '0'">
                                <div  class="spinner-grow text-muted spinner-grow-sm"></div><small>&nbsp; <label class=" text-success" :value="uploadPercentage">%{{this.uploadPercentage.toLocaleString() }}</label> &nbsp;Uploading..</small>
                            </td>
                              <td v-if="uploadStatus == '1'">
                                <div  class="fa fa-check text-success"></div><small>&nbsp;&nbsp;Uploaded</small>
                            </td>

                          </tr>
                        </tbody>
                    </table>
                       
                 </table>

                </div>
              </div>
             

            </div>

            </div>
          
            
            <div class="modal-footer bg-dark">
            <button v-if="uploadFile == true" @click="reUploadBtn" class="btn btn-success"> 
              Re Upload
            </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
           
            </div>
          </div>
        </div>
      </div>



 </div>
 

 
</template>

<script>
  //

// burada yapılacak olan işlem appid ile gelecek olan veriyi post attığımızda (axios)
// kullanıcıya id ait olup olmadığını kontrol et eğer kullanıcıya ait bir veri ise ekranı bas
// yapım aşamasında herhangi bir id var olarak sayılacaktır.
import PanelHeader from "../components/menuComponent/header"; 
import axios from 'axios';
const buildsGet        = process.env.API_URL  + "Builds_Api/getbuilds";
const buildsUpload     = process.env.API_URL  + "Builds_Upload_Api/upload";  
const buildsRemove     = process.env.API_URL  + "Builds_Api/remove";
const buildsDuplicate  = process.env.API_URL  + "Builds_Api/duplicate";
const buildThumbnail   = process.env.API_URL ;
const $ = window.jQuery;

 
export default {
  name:'app',
    beforeMount(){
    this.getbuilds();
 },
  mounted() {
    this.callTooltips();
  },

  data() {
    return {
      fileInfo:[
        name=>"",
        size=>"",
        type=> "",
      ],
      file: '',
      uploadPercentage: 0,
      projectCounter: false,
      iconSource : "static/builds/noimage.jpg",
      uploadingObj : "",
      uploadStatus: "0",
      uploadFile : false,
      viewType: "grid",
      pageInfo: "build",
      checkedModels:[],
      selectAll:false,
      objectModels:[],

    };
  },
  components: {
    PanelHeader,
  },

  methods: {
    handleFileUpload(){
  this.file = this.$refs.file.files[0];
  },
    getView(){
      return $cookies.get("view").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); 
    }
    ,reUploadBtn(){
      this.uploadFile = false;
    },
      onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
        createFile(file) {
         this.uploadingObj = file;
          this.fileInfo.size =  this.bytesToSize(file.size);
          var substrings = [".glb", ".gltf"];
          if (substrings.some(file.name.includes.bind(file.name))) {
                console.log("Match using '" + file.name + "'");
               this.fileInfo.type = "glb/gltf";
            } else {
                alert("file not supported!");
                console.log("No match using '" + file.name + "'");
                return;
            }
        
          this.uploadFile = true;
          if (file.name.length > 16) {
              this.fileInfo.name =  file.name.substring(0, 16) + "...";
          }else{
              this.fileInfo.name =  file.name;
          }
          this.SendFile();
        },
        SendFile(){
            const config = {
              onUploadProgress: function(progressEvent) {
                this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
         
              }.bind(this)
            }
           this.uploadStatus = "0";
           const formData = new FormData();
           formData.append('userfile', this.uploadingObj);
           formData.append('token',  $cookies.get("user"));
           formData.append('uuid', this.$route.query.appid);
           const headers = { 'Content-Type': 'multipart/form-data' };
            axios.post(buildsUpload,formData,config
           ).then(response=>{
              if (response.status == 200) {
                 this.uploadStatus = "1";
                 this.getbuilds();
              }
              
            }
            );
        },
     bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    getbuilds(){
      if (!$cookies.get("view")) {
        $cookies.set("view","grid");
      }else{
        this.viewType =  $cookies.get("view"); 
       
      }
        if (this.$route.query.appid == null) {
             window.location = "projects";
             return;
          }
      axios.post(buildsGet,JSON.stringify(
        {
            "token" : $cookies.get("user"),
            "uuid" : this.$route.query.appid
        }
      )).then(response=>{
        this.objectModels = response.data;
        this.noProject();
         var i = 0;
         var toAdd = {checked:true};
        
         this.objectModels.forEach((index) =>{
           //console.log(index.icon );

            if (index.icon != "") {
                index.icon = buildThumbnail + index.icon;
            }else{
                index.icon = this.iconSource;
            }
               this.objectModels[i].checked = false;
            i++
         });
           console.log(  this.objectModels);
      })

    },
    callTooltips() {
      $('[data-toggle="tooltip"]').tooltip();
    },
    setView(grid) {
      this.viewType = grid;
      $cookies.set("view",grid); 
    },
    checkModel(){
        console.log(this.objectModels);
    },
    checkAll(){
        this.checkedModels = [];
         this.selectAll = !this.selectAll;
          this.objectModels.forEach((item) =>{
            item.checked = this.selectAll;
            if (item.checked) {
               this.checkedModels.push(item.modelname);
            }
          
          })
   this.noProject();
            
      },
     btnDuplicate(){
      this.objectModels.forEach((item) =>{
            if ( item.checked) {
                // item Öğesini sunucuya gönder ve klon oluştur.
                  axios.post(buildsDuplicate,JSON.stringify(
                    {
                        "token" : $cookies.get("user"),
                        "uuid" : this.$route.query.appid,
                        "id" : item.id
                    }
                  )).then(response=>{
                      if (response.status == 200) {
                              var clone = JSON.parse(JSON.stringify(item));
                              var tmp = clone;
                              tmp.id = response.data.id// Math.ceil(Math.random() * 10000); // sunucudan gelen id bilgisini gir
                              tmp.modelname = response.data.name;
                              tmp.checked = false;
                              this.objectModels.push(tmp);
                      }
                  })
          
            
            }
          })
     },
  noProject(){
  if (this.objectModels.length == 0) {
      console.log("Henüz Model Yok");
      this.projectCounter = true;
    }else{
     this.projectCounter = false;
   }
    },
    btnDelete(){
         // item Öğesini sunucuya gönder ve sil. başarılı olursa burada uygula

        this.objectModels.forEach((item) =>{
            if ( item.checked) {

                  axios.post(buildsRemove,JSON.stringify(
                  {
                      "token" : $cookies.get("user"),
                      "uuid" : this.$route.query.appid,
                      "id" : item.id
                  }
            )).then(response=>{
                if (response.status == 200) {
                    console.log(response.data);
                    this.objectModels = this.objectModels.filter(x=>x.id != item.id );
                }
            }) // axios
                  
               } // checked
             }) // forEach
             this.noProject();
    },
    
    ///area ---- ///
    

  } 
}
</script>
<style scoped>
 .hoverable:hover{
  
  color: #17A2B8;
  cursor: pointer;
 }
.box__file{
display: none;
}
.box.has-advanced-upload .box__icon {
    width: 100%;
    height: 80px;
    fill: #92b0b3;
    display: block;
    margin-bottom: 40px;
}

.box.has-advanced-upload {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
}
.box {
    font-size: 1.25rem;
    background-color: #565E64;
    position: relative;
    padding: 50px 20px;
    border-radius: 15px;
}





.handler{
  cursor: pointer;
}
.hearth {
  transition: color 0.3s, background-color 0.3s;
}
.custom-checkbox {
  transform: scale(1.1);
}
.custom-control-label {
  border-color: grey;
}
.custom-control-label::after {
  background-color: gray;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #343a40;
  transform: scale(1.1);
  border-color: #343a40;
}
/* The slow way */
.make-it-slow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
}

/* Transition to a bigger shadow on hover */
.make-it-slow:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* The fast way */
.make-it-fast {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

/* Pre-render the bigger shadow, but hide it */
.make-it-fast::after {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Transition to showing the bigger shadow on hover */
.make-it-fast:hover::after {
  opacity: 1;
}

.circular:hover {
  transition: all 200ms ease;
  transform: scale(1.6);
}
.circular {
  margin: auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  overflow: hidden;
}
.circular img {
  width: 100%;
}
table {
  border: 1px solid #35363a;

  border-left: 0;
  border-radius: 6px;
  border-spacing: 2px;
}
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
th,
td {
  padding: 5px 4px 6px 4px;
  text-align: left;
  vertical-align: top;
  border-left: 1px solid #343a40;
}
td {
  border-top: 1px solid #343a40;
}
thead:first-child tr:first-child th:first-child,
tbody:first-child tr:first-child td:first-child {
  border-radius: 4px 0 0 0;
}
thead:last-child tr:last-child th:first-child,
tbody:last-child tr:last-child td:first-child {
  border-radius: 0 0 0 4px;
}
.centered {
  float: none;
  margin-left: auto;
  margin-right: auto;
}
.sizes:hover i:before {
  transition: all 200ms ease;
  transform: scale(1.3);
}






 






 
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
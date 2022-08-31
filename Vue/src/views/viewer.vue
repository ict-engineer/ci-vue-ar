<template>
<div id="app">
   <PanelHeader :pageinfo="pageinfo"></PanelHeader>
    <div class="container-fluid" >
      <div class="row">
        <div class="col">
          <div class="title-section">
            <h5>Viewer</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div class="content-section"     style="width:100%;height:100%;">
                 
  

                    <div id="viewContainer" style="margin: -16px;height:100vh;width: 75vw;  position: relative;
">
           <model-gltf :backgroundColor="sceneColorValue.color" :backgroundAlpha="sceneColorValue.alpha" :src="dynamicUrl"></model-gltf>
</div>

            
           </div>
        </div>
        <div class="col-3 shadow" style=" background:white;position: fixed;right:0;background-color:#3D424A;width: 23%;height:100%;">
                <div class="row">
                  <div class="col shadow " style="padding-left: 0px;">
                    <div class="icon-bar">
                      <a role="button" v-for="tab in tabPageList" :key="tab.id" :class="['btn btn-default',{'activeBtn': currentTab === tab.id}]" @click="selectTab(tab.id)" >
                       <i :class="[' bi ' + tab.class]" ></i>
                       </a> 
                     
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                <div class="tab-content" id="ex2-content">
                          <div
                            :class="['tab-pane fade',{'show active' : currentTab == tabPageList[0].id }]"
                            role="tabpanel" >
                                <!--   Collapse Panel 1 -->
                              <a data-toggle="collapse" href="#fileManagerCollapse" role="button" aria-expanded="true" aria-controls="fileManagerCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                                <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">File Manager</strong><i class="fa fa-angle-down"></i></p>
                              </a>
                              <div id="fileManagerCollapse" class="collapse shadow-sm show" style="margin: -15px;">
                                <div class="card" style="width: 100%;">
                                  <div class="card-body" style="background: rgb(61, 66, 74);">
                                    <label  for="selector" class="text-white">Select Model:</label>
                                <select v-model="testdata" id="selector" class="text-white md-form bg-dark" @change="LoadModel($event)">
                                <option v-for="item in getviewerList" :value="item.id" :key="item.id">  
                                 {{ item.name }}
                                 </option>
                              </select>
                                   </div>
                                </div>
                              </div>
                             <!--   Collapse Panel 2 -->
                           
                              <a data-toggle="collapse" href="#propertiesCollapse" role="button" aria-expanded="true" aria-controls="propertiesCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                                <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Ground Grid</strong><i class="fa fa-angle-down"></i></p>
                              </a>
                              <div id="propertiesCollapse" class="collapse shadow-sm show" style="margin: -15px;">
                                <div class="card" style="witdh: 100%;">
                                  <div class="card-body container user-select-none" style="background: rgb(61, 66, 74);">
                                 <div class="col">
                                  <small><h5 class="text-white"></h5></small>

                                      <div class="row">
                                        <div class="col-md-12">
                                        
                                        <label  >Grid {{gridActivator ? "Active" : "Disable"}} <input type="checkbox" @change="gridActive" v-bind:checked="{ checked: !gridActivator }"/></label>
                                      
                                        
                                          </div>
                                      </div>


                                      <div class="row">
                                     
                                        <div class="col-md-12">
                                          <label for="">Size:</label>
                                        </div>
                                        <div class="col-md-8" style="padding-top:10px;">
                                          <input v-bind:class="{ disabled: !gridActivator }" type="range" min="5" max="100" step="1" v-model="groundX" value="groundX" @change="initscene"><br>
                                        </div>
                                         <div class="col-md-1">
                                          <label for="" class="bg-dark" style="border-radius:5px;">&nbsp;{{groundX}}&nbsp;</label>
                                        </div>
                                      </div>  
                                         <div class="row">
                                        <div class="col-md-12">
                                          <label for="" >Divisions:</label>
                                        </div>
                                        <div class="col-md-8" style="padding-top:10px;">
                                          <input  v-bind:class="{ disabled: !gridActivator }"  type="range" min="5" max="100" step="1" v-model="groundY" value="groundY" @change="initscene"><br>
                                        </div>
                                         <div class="col-md-1">
                                          <label for="" class="bg-dark" style="border-radius:5px;">&nbsp;{{groundY}}&nbsp;</label>
                                        </div>
                                      </div>
                                  </div>
  
                                  <div class="col">
                                  <label for="">Grid Position</label>
                                  </div>
                                  <div class="col">
                                  <div class="row">
                                    <div class="col">
                                      <span>
                                        <label for="x_grid">X</label>
                                        <input class="groundPosition text-white" id="x_grid" type="number" value="0" min="-1000" max="1000" @change="setgridPos" v-model="gridPosition.x">
                                      </span>
                                    </div>
                                    <div class="col">
                                      <span>
                                        <label for="y_grid">Y</label>
                                        <input class="groundPosition text-white" id="y_grid" type="number" value="0" min="-1000" max="1000" @change="setgridPos" v-model="gridPosition.y">
                                      </span>
                                    </div>
                                       <div class="col">
                                      <span>
                                        <label for="z_grid">Z</label>
                                        <input class="groundPosition text-white" id="z_grid" type="number" value="0" min="-1000" max="1000" @change="setgridPos" v-model="gridPosition.z">
                                      </span>
                                    </div>

                                  </div>
                                  </div>

                            



                                  </div>
                                </div>
                              </div>


                          </div>
                          <div
                            :class="['tab-pane fade',{'show active' : currentTab == tabPageList[1].id }]"
                            role="tabpanel">
                              <a data-toggle="collapse" href="#colorManagerCollapse" role="button" aria-expanded="true" aria-controls="colorManagerCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                                <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Color Manager</strong><i class="fa fa-angle-down"></i></p>
                              </a>
                              <div id="colorManagerCollapse" class="collapse shadow-sm show" style="margin: -15px;">
                                <div class="card" style="width: 100%;">
                                  <div class="card-body" style="background: rgb(61, 66, 74);">

                                      <div>
                                       <label for="">Scene</label>
                                          <input type="color" id="head" name="head"
                                                value="0x323B44" v-model="sceneColorValue.color" @change="setSceneColor">
                                           <label for="alpha"> Alpha </label>
                                          <input  class="groundPosition text-white" type="number" id="alpha" name="alpha" value="1" step="0.1"
                                                v-model.number="sceneColorValue.alpha" @change="setSceneColor">
                                      
                                      </div>
                               
                                   </div>
                                </div>
                              </div>
                             

                              </div>
                               


                        
                          <div
                            :class="['tab-pane fade',{'show active' : currentTab == tabPageList[2].id }]"
                            role="tabpanel" >
                         
                               <a data-toggle="collapse" href="#thumbManagerCollapse" role="button" aria-expanded="true" aria-controls="thumbManagerCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                                <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Thumbnail</strong><i class="fa fa-angle-down"></i></p>
                              </a>
                              <div id="thumbManagerCollapse" class="collapse shadow-sm show" style="margin: -15px;">
                                <div class="card" style="width: 100%;">
                                  <div class="card-body" style="background: rgb(61, 66, 74);">
                                     
                                       <label for="">Get Image from Camera</label>
                                       <div class="thumbArea">
                                        <img  class="img-thumbnail shadow" style="background-color:#fff0 !important;border:none;" :src="defaultImg" alt="">                                       </div>
                                        <div class="row">
                                          <div class="col-md-8 offset-3 mt-2">
                                          <button class="btn btn-outline-secondary text-white" @click="screenshot" ><i v-if="screenshotStatus" class="text-danger spinner-grow-sm" :class="{'spinner-grow ' : screenshotStatus}"></i> Take a picture</button>
                                          </div>
                                        </div>
                                     
                               
                                   </div>
                                </div>
                              </div>




                          </div>
                           <div
                            :class="['tab-pane fade',{'show active' : currentTab == tabPageList[3].id }]"
                            role="tabpanel" >
                          
                          
  
                                 <a data-toggle="collapse" href="#shareManagerCollapse" role="button" aria-expanded="true" aria-controls="shareManagerCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                                <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Share</strong><i class="fa fa-angle-down"></i></p>
                                </a>
                              <div id="shareManagerCollapse" class="collapse shadow-sm show" style="margin: -15px;">
                                <div class="card" style="width: 100%;">
                                  <div class="card-body" style="background: rgb(61, 66, 74);">
                                     <div class="qrclass shadow text-center p-3">
                                      
                                         <div id="qrcode"></div>

                                          </div>


                                     <div class="input-group mt-4">
                                        <input disabled type="text"  class="bg-dark text-white form-control" v-model="qrUrl" value=""/>   
                                        <span class="input-group-btn">
                                          <button @click="qrGenBtn()" class="btn btn-outline-secondary" type="button">Generate!</button>
                                        </span>
                                      </div><!-- /input-group -->


 
                                   </div>
                                </div>
                              </div>


                           <a data-toggle="collapse" href="#shareManagerCollapse2" role="button" aria-expanded="true" aria-controls="shareManagerCollapse2" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                                <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">QR List</strong><i class="fa fa-angle-down"></i></p>
                           </a>
                           
                           
                              <div id="shareManagerCollapse2" class="collapse shadow-sm show  mt-2" style="margin: -15px;">
                                  <div class="row">
                                  <span class="col-10 ml-3">Total QR: <b>{{ qrList.length }}</b></span>
                                </div>
                                      <div class="list-group qrDropDown">
                                         <div class="row justify-content-end">
                                           <span href="#" class="list-group-item d-flex justify-content-between align-items-center  text-white col" style="background: rgb(61, 66, 74);cursor:default;" v-for="qr in qrList" :key="qr.id">&nbsp;<i class="fa fa-external-link" aria-hidden="true"></i>  {{ qr.go }}
                                               
                                                <span class="badge badge-primary badge-pill col-2" style="cursor:pointer;" @click="qrView(qr.id)" ><i class="fa fa-eye"></i> {{qr.view}}</span>
                                                <span class="badge badge-warning badge-pill col-3" style="cursor:pointer;" @click="destroyQR(qr.id)"><i class="fa fa-remove"></i> Destroy</span>
                                                

                                             </span>

                                         </div>
                                        
                                           
                                             
                                        
                                        
                                        </div>
                            </div>



                          </div>
                             <div
                            :class="['tab-pane fade',{'show active' : currentTab == tabPageList[4].id }]"
                            role="tabpanel" >
                            Tab 5 content
                          </div>

                   </div>

                        </div>

                 
                  </div>
                </div>
            
             
              
  
        </div>


        </div>
      </div>
 
 
</template>
<script type="module"> 
import axios from 'axios';
import PanelHeader from "../components/menuComponent/header";
const $ = window.jQuery;
import {demojsCode,changeGrid,LoadGlb,gridController,gridPosition,sceneColor,saveAsImage} from "../threejs/demo"; 
import { ViewerApp } from "../threejs/viewer"; 

const viewerGet  = process.env.API_URL  + "Viewer_Api/getviewer";
const viewerDownload  = process.env.API_URL  + "Viewer_Api/downloadfile";
const viewerIcon  = process.env.API_URL  + "Viewer_Api/updateIcon";
const shortApi  = process.env.API_URL  + "Shorts_Api/create";
const shortApiList  = process.env.API_URL  + "Shorts_Api/getlist";
const shortApiDestroy  = process.env.API_URL  + "Shorts_Api/destroy";

const buildThumbnail   = process.env.API_URL  ;
const serverName = process.env.API_URL  + ""; 
import { ModelGltf } from "vue-3d-model"; 
 
 

export default{
  name:'app',
  beforeMount(){
    this.getviewer();
  },
  mounted(){
       demojsCode({groundX:this.groundX,groundY:this.groundY});
       const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "//cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
      
  },
    data(){
        return{
            qrList:[{
              "id":"",
              "ownerID":"",
              "base":"",
              "go":""
            }],
            dynamicUrl : "",
            qrTmp : "",
            qrUrl : "",
            defaultImg : "/static/builds/noimage.jpg",
            testdata:null,
            screenshotStatus : false,
            sceneColorValue:{color:0x323B44,alpha:1},
            gridPosition: {x:0,y:0,z:0},
            gridActivator : true,
            pageinfo : "viewer",
            currentTab: 1,
            groundX: 15,
            groundY: 15,
            getviewerList:{
              "name":"",
              "id":"",
              "path":""
            },
            tabPageList:[
              {
                id:1,
                name:"edit",
                class:"bi-gear"
              },
              {
                id:2,
                name:"brush",
                class:"bi bi-brush"
              },
              {
                id:3,
                name:"camera",
                class:"bi bi-camera"
              },
              {
                id:4,
                name:"share",
                class:"bi bi-share"
              },
              {
                id:5,
                name:"search",
                class:"bi bi-search"
              }
            ],
        }
    },
   computed: {
      isGrid() {
        // you can  check your form is filled or not here.
      
        return  this.gridActivator
      },
    },
    components:{
        PanelHeader,
        ModelGltf
    },
    methods:{
      qrView(id){
        var tlist =  this.qrList.filter(x=> x.id == id);
        var tmpq = serverName + "Sh/go?s=" + tlist[0].go;
        this.qrUrl = tmpq;
       
        document.getElementById("qrcode").innerHTML = "";    
        var qrcode =  new QRCode(document.getElementById("qrcode"), {
        text: tmpq,
        colorDark : "#3D424A",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

      },
      qrGenBtn(){
            axios.post(shortApi,JSON.stringify(
                         {
                            "token" :  $cookies.get("user"),
                            "url"   : this.qrTmp 
                         }
                        )).then(response=>{
                          if (response.status == 200) {
                            this.qrUrl = serverName + "Sh/go?s=" + response.data.response.go;
                            this.qrGenerate();
                            
                              document.getElementById("qrcode").innerHTML = "";    
                              var qrcode =  new QRCode(document.getElementById("qrcode"), {
                              text:  this.qrUrl,
                              colorDark : "#3D424A",
                              colorLight : "#ffffff",
                              correctLevel : QRCode.CorrectLevel.H
                            });
                          }
                        })
      },
      qrGenerate(){
      this.getQRList();
      var tmpq =  serverName + "Sh/go?s=";
      if (this.qrList.length > 0) {
        tmpq = tmpq + this.qrList[0].go;  
      }else{
        return;
        
      }
      document.getElementById("qrcode").innerHTML = "";    
      var qrcode =  new QRCode(document.getElementById("qrcode"), {
      text: tmpq,
      colorDark : "#3D424A",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
     
      },
     screenshot(){
      var bs4 = saveAsImage();
      var self = this;
      self.screenshotStatus = true;
      setTimeout(function(){  self.screenshotStatus = false; }, 1500);
      this.defaultImg = bs4;
      this.iconUpdate(bs4);
      },
      iconUpdate(data){
             axios.post(viewerIcon,JSON.stringify(
                    {
                        "token" : $cookies.get("user"),
                        "uuid" : this.$route.query.appid,
                        "id" : this.$route.query.id,
                        "icon" : data
                    }
                  )).then(response=>{
                      if (response.status == 200) {
                          //console.log(response.data);
                      }
                      });
      },
      getviewer(){
        axios.post(viewerGet,JSON.stringify(
                    {
                        "token" : $cookies.get("user"),
                        "uuid" : this.$route.query.appid,
                        "id" : this.$route.query.id
                    }
                  )).then(response=>{
                      if (response.status == 200) {
                      //  console.log(response.data);
                        this.getviewerList = response.data;
                        this.testdata = this.$route.query.id;
                        // axios.post(viewerDownload,JSON.stringify({
                        // "path" : response.data[0].path,
                      
                        // })).then(res=>{
                        //   this.LoadModel(res.data[0]);
                        // });
                        var modelPath =  response.data.filter(x=> x.id == this.$route.query.id);
                        //console.log(modelPath );
                        //console.log(viewerDownload + "?path="+  btoa(modelPath[0].path));
                       this.defaultImg = buildThumbnail + modelPath[0].icon;
                       this.qrTmp =  serverName + "quickLook_Api/loadobject?path=" +  btoa(modelPath[0].path);
                      
                       this.LoadModel(viewerDownload + "?path="+  btoa(modelPath[0].path),true);
                      this.getQRList();
                      this.qrGenerate();
                       
                      }
                      
                      })

      },
      destroyQR(id){
          axios.post(shortApiDestroy,JSON.stringify(
                                {
                                    "token" :  $cookies.get("user"),
                                    "id"    :  id
                                }
                                )).then(response=>{
                                  if (response.status == 200) {
                                   console.log(response.data);
                                    this.qrList =  this.qrList.filter(x=> x.id != id);
                                  }
                                })
      },
      getQRList(){
           axios.post(shortApiList,JSON.stringify(
                         {
                            "token" :  $cookies.get("user"),
                         }
                        )).then(response=>{
                          if (response.status == 200) {
                            this.qrList = response.data;
                          }
                        })
      },
      setSceneColor(){
        console.log (this.sceneColorValue);
        sceneColor(this.sceneColorValue);
      },
      setgridPos(){
        gridPosition(this.gridPosition);
       // console.log(this.gridPosition);   
      }
      ,
      gridActive(){
        this.gridActivator = !this.gridActivator;
        gridController(this.gridActivator);
      }
      ,
      selectTab(id){
        this.currentTab = id;
      },
      initscene(events){
        // return demojsCode;
        // return require('../threejs/demo.js');
        console.log(events);
        changeGrid({groundX:this.groundX,groundY:this.groundY});
    },
    LoadModel(event,load = false){

                     
                      
                      


      if (load) {
        this.dynamicUrl = (event);
        return;
      }
     var url =  event.target.value;
     this.testdata = url;
     var find = this.getviewerList.filter(x=> x.id == url);

       console.log("router");
       console.log(find);
       //  var modelPath =  response.data.filter(x=> x.id == this.$route.query.id);
       var appids =  this.$route.query.appid;
       //this.$router.query =  {appid: appids, id: find[0].id};
      this.$router.replace(`${this.$route.path}?appid=${appids}&id=${find[0].id}`);
       this.qrUrl = serverName + "/quickLook_Api/loadobject?path=" +  btoa(find[0].path);
    this.dynamicUrl =(viewerDownload + "?path="+  btoa(find[0].path));
    }
  
}
}
</script>

<style scoped>
 @import url(https://fonts.googleapis.com/css?family=Dosis:700);
.groundPosition{
    font-size: 12px;
    color: #55595c;
    background-color: #3D424A;
    background-image: none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(228, 228, 228, 0.349);
    border-radius: .25rem;
     width: 50px;
 
  
     
 }
 .qrclass{
    
      
     
     
 }
 /* Works on Firefox */
.qrDropDown {
  height:530px;
  overflow:hidden;
  overflow-y:scroll;
  scrollbar-color: blue orange;
}

 
.disabled{
        cursor: not-allowed;
        pointer-events: none;
        background-color: #6c757d !important;
        border-color: #6c757d !important;
}

input[type="range"] {
  display: block;
  -webkit-appearance: none;
  background-color: #bdc3c7;
  width: 115%;
  height: 5px;
  border-radius: 5px;
  margin: 0 auto;
  outline: 0;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #3D424A;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: .3s ease-in-out;
}​
  input[type="range"]::-webkit-slider-thumb:hover {
    background-color: white;
    border: 2px solid #3D424A;
  }
  input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(1.2);
  }

body{
  overflow: hidden !important;
}
 
 .with-chevron[aria-expanded='true'] i {
  display: block;
  transform: rotate(180deg) !important;
}

model-viewer {
    width: 100%;
    top: -15px;
    height: 85vh;
    border: 0px solid #555;
}

 .content-section {
   
    height: 100%;
    padding: 1em;
  }

 .icon-bar {
  width: 23%;
  background-color: #3D424A;
  overflow: hidden;
  position: absolute;
  display: contents;
}

.icon-bar a {
  float: left;
  width: 20%;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.icon-bar a:hover {
  background-color: #3E4B61;
}

.activeBtn {
  background-color: #3E4B61;
}
</style>
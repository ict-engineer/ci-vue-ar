<template>
<div id="app">
   <PanelHeader :pageinfo="pageinfo"></PanelHeader>
    <div class="container-fluid" >
      <div class="row">
        <div class="col">
          <div class="title-section">

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div class="content-section"     style="width:100%;height:100%;">
                    <div id="viewContainer"  :style="{'background-color': sceneColorValue.color}"  style="margin: -16px;height:100vh;width: 75vw;  position: relative;">
                      <model-viewer id="animated-model"

                                    :src="dynamicUrl"
                                    :environment-image="skyboxImage"
                                    :exposure="lightModel.exposure"
                                    :shadow-softness="lightModel.shadowSoftness"
                                    :shadow-intensity="lightModel.shadowIntensity"
                                    :skybox-image="[ lightModel.useEnvironment ? skyboxImage : '']"

                                    v-bind="{
                                      'auto-rotate':autoRotate,
                                      'camera-controls':cameraControls,
                                      'enable-pan':enablePan


                                      }"

                      >

                      </model-viewer>




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
                                          <label>Size:</label>
                                        </div>
                                        <div class="col-md-8" style="padding-top:10px;">
                                          <input v-bind:class="{ disabled: !gridActivator }" type="range" min="5" max="100" step="1" v-model="groundX" value="groundX" @change="initscene"><br>
                                        </div>
                                         <div class="col-md-1">
                                          <label  class="bg-dark" style="border-radius:5px;">&nbsp;{{groundX}}&nbsp;</label>
                                        </div>
                                      </div>
                                         <div class="row">
                                        <div class="col-md-12">
                                          <label  >Divisions:</label>
                                        </div>
                                        <div class="col-md-8" style="padding-top:10px;">
                                          <input  v-bind:class="{ disabled: !gridActivator }"  type="range" min="5" max="100" step="1" v-model="groundY" value="groundY" @change="initscene"><br>
                                        </div>
                                         <div class="col-md-1">
                                          <label  class="bg-dark" style="border-radius:5px;">&nbsp;{{groundY}}&nbsp;</label>
                                        </div>
                                      </div>
                                  </div>

                                  <div class="col">
                                  <label >Grid Position</label>
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





                            <a data-toggle="collapse" href="#skyboxCollapse" role="button" aria-expanded="true" aria-controls="skyboxCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                              <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Environment</strong><i class="fa fa-angle-down"></i></p>
                            </a>



                                <div id="skyboxCollapse" class="collapse shadow-sm show" style="margin: -15px;">

                                  <div class="card" style="width: 100%;">
                                    <div class="card-body" style="background: rgb(61, 66, 74);">
                                      <label  for="selector" class="text-white">Select Model:</label>
                                      <select class="text-white md-form bg-dark" @change="environmentChanger($event)">
                                        <option id="selectSkybox" v-for="item in skyboxList" :value="item.url" :key="item.url">
                                          {{ item.name }}
                                        </option>
                                      </select>


                                      <div class="row">
                                        <label class="col col-md-4">Exposure</label>
                                        <div class="col col-xs-3" style="padding-top:10px;padding-right: 15px;">
                                          <input v-model="lightModel.exposure" type="range" min="0" max="2" step="0.1">
                                        </div>
                                       <div class="col col-xs-2">
                                         <input v-model="lightModel.exposure" class="groundPosition text-white"  type="number" min="0" max="2" step="0.1" >&nbsp;

                                       </div>
                                      </div>


                                      <div class="form-check">
                                        <div class="row">
                                          <label class="toggle col">
                                            <input class="toggle__input" type="checkbox" v-bind="{'checked':lightModel.useEnvironment}" @click="environmentChange">
                                            <span class="toggle__label">
                                              <span class="toggle__text"> Use Environment as Skybox </span>
                                              </span>
                                          </label>
                                        </div>
                                      </div>


                                      <div class="row">
                                        <label class="col col-md-4">Shadow Intensity</label>
                                        <div class="col col-xs-3" style="padding-top:10px;padding-right: 15px;">
                                          <input v-model="lightModel.shadowIntensity"  type="range" min="0" max="2" step="0.1"  >
                                        </div>
                                        <div class="col col-xs-2">
                                          <input v-model="lightModel.shadowIntensity"  class="groundPosition text-white"  type="number" min="0" max="2"  step="0.1" >&nbsp;

                                        </div>
                                      </div>

                                      <div class="row">
                                        <label class="col col-md-4">Shadow Softness</label>
                                        <div class="col col-xs-3" style="padding-top:10px;padding-right: 15px;">
                                          <input v-model="lightModel.shadowSoftness"  type="range" min="0" max="1" step="0.1"  >
                                        </div>
                                        <div class="col col-xs-2">
                                          <input v-model="lightModel.shadowSoftness"   class="groundPosition text-white"  type="number" value="0" min="0" max="1" step="0.1"  >&nbsp;

                                        </div>
                                      </div>


                                    </div>
                                  </div>







                                </div>




                            <a data-toggle="collapse" href="#sceneloaderCollapse" role="button" aria-expanded="true" aria-controls="publishCollapse" class="btn-block py-2 with-chevron noselect" style="text-decoration:none !important;">
                              <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Scene Load Settings</strong><i class="fa fa-angle-down"></i></p>
                            </a>



                            <div id="sceneloaderCollapse" class="collapse shadow-sm show" style="margin: -15px;">
                              <div class="card" style="width: 100%;">
                                <div class="card-body" style="background: rgb(61, 66, 74);">

                                  <div class="form-check">
                                      <div class="row">
                                        <label class="toggle col">
                                          <input class="toggle__input" type="checkbox" v-bind="{'checked':sceneLoaderSettings.progressBar}"  @change="sceneProgressBarChange($event)">
                                          <span class="toggle__label">
                                              <span class="toggle__text"> Progress Bar </span>
                                              </span>
                                        </label>
                                        <label class="toggle col">
                                          <input class="toggle__input" type="checkbox"  v-bind="{'checked':sceneLoaderSettings.arButton}"  @change="sceneArChange($event)">
                                          <span class="toggle__label">
                                              <span class="toggle__text"> AR Button</span>
                                              </span>
                                        </label>
                                        <label class="toggle col">
                                          <input class="toggle__input" type="checkbox"  v-bind="{'checked':sceneLoaderSettings.arPrompt}"  @change="scenePromptChange($event)">
                                          <span class="toggle__label">
                                              <span class="toggle__text"> AR Prompt</span>
                                              </span>
                                        </label>

                                      </div>
                                    <div class="row">

                                       <label class="toggle col">
                                         <input class="toggle__input" type="checkbox"  v-bind="{'checked':autoRotate}" @change="autorotateChange($event)">
                                         <span class="toggle__label">
                                              <span class="toggle__text"> Auto Rotate</span>
                                              </span>
                                       </label>



                                        <label class="toggle col">
                                          <input class="toggle__input" type="checkbox"  v-bind="{'checked':cameraControls}" @change="cameraControlChange($event)">
                                          <span class="toggle__label">
                                              <span class="toggle__text">Camera Controls</span>
                                              </span>
                                        </label>



                                        <label class="toggle col">
                                          <input class="toggle__input" type="checkbox"  v-bind="{'checked':enablePan}" @change="enablePanChange($event)">
                                          <span class="toggle__label">
                                              <span class="toggle__text"> Enable Pan</span>
                                              </span>
                                        </label>



                                    </div>



                                  </div>




                                </div>
                              </div>
                            </div>



                            <div class="row pt-4 m-1">
                              <div class="col">
                                <label class="toggle col">
                                  <input class="toggle__input" type="checkbox"  v-bind="{'checked':autoSave}" @change="autoSavePanChange($event)">
                                  <span class="toggle__label">
                                                <span class="toggle__text"> Auto Save</span>
                                                </span>
                                </label>
                              </div>
                              <div class="col">
                                <button class="btn btn-secondary" @click="saveSceneSettings"  >Save Scene</button>
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

                                      <div class="row">
                                       <label class="col-auto">Scene Background Color</label>
                                          <input class="col-xs-1" type="color" id="head" name="head"
                                                value="0x323B44" v-model="sceneColorValue.color" @change="setSceneColor">
                                           <label style="display: none;"  > Alpha </label>
                                          <input  style="display: none;" class="groundPosition text-white" type="number" id="alpha" name="alpha" value="1" step="0.1"
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

                                       <label>Get Image from Camera</label>
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
//import {demojsCode,changeGrid,LoadGlb,gridController,gridPosition,sceneColor,saveAsImage} from "../threejs/demo";
//import { ViewerApp } from "../threejs/viewer";
import  '@google/model-viewer/dist/model-viewer';


const viewerGet  = process.env.API_URL  + "Viewer_Api/getviewer";
const viewerDownload  = process.env.API_URL  + "Viewer_Api/downloadfile";
const viewerIcon  = process.env.API_URL  + "Viewer_Api/updateIcon";
const shortApi  = process.env.API_URL  + "Shorts_Api/create";
const shortApiList  = process.env.API_URL  + "Shorts_Api/getlist";
const shortApiDestroy  = process.env.API_URL  + "Shorts_Api/destroy";
const sceneSettingSave  = process.env.API_URL  + "Scene_Api/save";
const sceneSettingsGet  = process.env.API_URL  + "Scene_Api/get";

const buildThumbnail   = process.env.API_URL  ;
const serverName = process.env.API_URL  + "";
//import { ModelGltf } from "vue-3d-model";

export default{
  name:'app',
  beforeMount(){
    const plugin = document.createElement('script')
    const modelviewer = document.createElement('script')
    plugin.setAttribute(
      'src',
      '//cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js'
    )
    modelviewer.setAttribute(
      'src',
      '//unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    )
    plugin.async = true
    modelviewer.async = true
    document.head.appendChild(plugin)
  //  document.head.appendChild(modelviewer)

    this.getviewer();


  },
  mounted(){

    //   demojsCode({groundX:this.groundX,groundY:this.groundY});

  },
    data(){
        return{
            qrList:[{
              "id":"",
              "ownerID":"",
              "base":"",
              "go":""
            }],
          autoSave : false,
          enablePan:true,
          cameraControls:true,
          autoRotate:true,
          lightModel:{
            exposure:1,
            useEnvironment:false,
            shadowIntensity:1,
            shadowSoftness:1,

          },
          sceneLoaderSettings:{
            progressBar:false,
            arButton:false,
            arPrompt:false
          },
          skyboxEnabler:false,
          skyboxImage : "",
          skyboxSelected:"",
          skyboxList:[
            {
              "name":"Default",
              "url":""
            },
            {
             "name" :  "Warehouse",
             "url"  : "https://api.3drexar.com/uploads/pub/warehouse_1k.hdr"

            },
            {
              "name" :  "Sky",
              "url"  : "https://api.3drexar.com/uploads/pub/sky_1k.hdr"

            },{
              "name" :  "Studio",
              "url"  : "https://api.3drexar.com/uploads/pub/studio_1k.hdr"

            },{
              "name" :  "Product",
              "url"  : "https://api.3drexar.com/uploads/pub/product_1k.hdr"

            },{
              "name" :  "Home",
              "url"  : "https://api.3drexar.com/uploads/pub/Home_1k.hdr"

            },{
              "name" :  "Hall",
              "url"  : "https://api.3drexar.com/uploads/pub/hall_1k.hdr"

            },{
              "name" :  "Garden",
              "url"  : "https://api.3drexar.com/uploads/pub/garden_1k.hdr"

            },{
              "name" :  "Forest",
              "url"  : "https://api.3drexar.com/uploads/pub/forest_1k.hdr"

            },{
              "name" :  "City",
              "url"  : "https://api.3drexar.com/uploads/pub/city_1k.hdr"

            },
            {
              "name" :  "Cafe",
              "url"  : "https://api.3drexar.com/uploads/pub/cafe_1k.hdr"

            },


          ],

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


    },
    methods:{


    autorotateChange(){
      this.autoRotate = !this.autoRotate;
      if (this.autoSave){this.saveSceneSettings();}
    },
      cameraControlChange(){
        this.cameraControls = !this.cameraControls;
        if (this.autoSave){this.saveSceneSettings();}
      },

      autoSavePanChange(){
        this.autoSave = !this.autoSave;
        if (this.autoSave){this.saveSceneSettings();}
      },
      enablePanChange(){
        this.enablePan = !this.enablePan;
        if (this.autoSave){this.saveSceneSettings();}
      },
      sceneProgressBarChange(){
        this.sceneLoaderSettings.progressBar = !this.sceneLoaderSettings.progressBar;
        if (this.autoSave){this.saveSceneSettings();}
      },
      sceneArChange(){
        this.sceneLoaderSettings.arButton = !this.sceneLoaderSettings.arButton;
        if (this.autoSave){this.saveSceneSettings();}
      },
      scenePromptChange(){
        this.sceneLoaderSettings.arPrompt = !this.sceneLoaderSettings.arPrompt;
        if (this.autoSave){this.saveSceneSettings();}
      },
      environmentChange(){
        this.lightModel.useEnvironment = ! this.lightModel.useEnvironment ;
        if (this.autoSave){this.saveSceneSettings();}
      },
      getSettings(){
        axios.post(sceneSettingsGet,JSON.stringify(
          {
            "token" : $cookies.get("user"),
            "uuid" : this.$route.query.appid,
            "id" : this.$route.query.id,
          }
        )).then(response=>{
          if (response.status == 200) {

            var jsettings = response.data;
            if (jsettings == ""){
              this.saveSceneSettings();
              return;
            }
            this.enablePan =  jsettings.enablePan;
            this.cameraControls = jsettings.cameraControls;
            this.autoRotate = jsettings.autoRotate;
            this.lightModel =  jsettings.lightModel;
            this.sceneLoaderSettings = jsettings.sceneLoaderSettings;
            this.skyboxEnabler = jsettings.skyboxEnabler;
            this.skyboxImage = jsettings.skyboxImage;
            this.sceneColorValue.color = jsettings.environmentColor;
            // this.skyboxList.forEach((item)=>{
            //  if (item.url ==jsettings.skyboxImage){
            //
            //  }
            // });
          }
        });
      },
      saveSceneSettings(){
        var scene = {
          "enablePan": this.enablePan,
          "cameraControls": this.cameraControls,
          "autoRotate": this.autoRotate,
          "lightModel": {
            "exposure" : this.lightModel.exposure,
            "useEnvironment" : this.lightModel.useEnvironment,
            "shadowIntensity" : this.lightModel.shadowIntensity,
            "shadowSoftness" : this.lightModel.shadowSoftness,
          },
          "sceneLoaderSettings":{
            "progressBar" : this.sceneLoaderSettings.progressBar,
            "arButton" : this.sceneLoaderSettings.arButton,
            "arPrompt" : this.sceneLoaderSettings.arPrompt,
          },
          "skyboxEnabler" : this.skyboxEnabler,
          "skyboxImage" : this.skyboxImage,
          "environmentColor": this.sceneColorValue.color
        }
        var tmp = JSON.stringify(
          {
            "token" : $cookies.get("user"),
            "uuid" : this.$route.query.appid,
            "id" : this.$route.query.id,
            "settings" : scene
          }
        );
        console.log(tmp);
        axios.post(sceneSettingSave,JSON.stringify(
          {
            "token" : $cookies.get("user"),
            "uuid" : this.$route.query.appid,
            "id" : this.$route.query.id,
            "settings" : scene
          }
        )).then(response=>{
          if (response.status == 200) {
            console.log(response.data);
          }
        });
      },
   async exportSceneBtn(binary){

      let options = {
        binary: binary,
        trs: true,
        onlyVisible: true,
        maxTextureSize: 256,
        forcePowerOfTwoTextures: true,
        includeCustomExtensions: false,
        embedImages: true
      };


      let modelViewer = document.getElementById("animated-model");
      const glTF = await modelViewer.exportScene(options);
      var file = new File([glTF], binary ? "export.glb" : "export.gltf");
      var link = document.createElement("a");
      link.download =file.name;
      link.href = URL.createObjectURL(file);
      link.click();
     console.log(glTF);
    },
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

      environmentChanger(event){

        if (event.target.value != ""){
          this.skyboxImage =  event.target.value;;
       //   console.log(  event.target.value);
        }else{
          this.skyboxImage = 'null';
          this.skyboxEnabler = false;
        }
        if (this.autoSave){this.saveSceneSettings();}
      },
      qrGenBtn(){
            axios.post(shortApi,JSON.stringify(
                         {
                            "token" :  $cookies.get("user"),
                            "uuid" : this.$route.query.appid,
                            "id" : this.$route.query.id,
                            "url"   : this.qrTmp
                         }
                        )).then(response=>{
                          if (response.status == 200) {
                            this.qrUrl = serverName + "Sh/go?s=" + response.data[0].go;
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

      var bs4 = this.model.domElement.toDataURL('image/png', 1);
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
                          console.log(response.data);
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
                        this.getSettings();

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
        this.sceneColorValue.color = this.sceneColorValue.color;
     //   sceneColor(this.sceneColorValue);
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
     this.getSettings();
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
  height:510px;
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
    height: 100vh;
    border: 0px solid #555;
    position: absolute;
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



 /*
 =====
 CORE STYLES
 =====
 */

 .toggle{
   --uiToggleSize: var(--toggleSize, 1.25rem);
   --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
   --uiToggleColor: var(--toggleColor, #222);
   display: var(--toggleDisplay, inline-flex);
   position: relative;
 }

 .toggle__input{
   /*
   The pattern by Sara Soueidan https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/
   */
   width: var(--uiToggleSize);
   height: var(--uiToggleSize);
   opacity: 0;

   position: absolute;
   top: 0;
   left: 0;
   margin: 0;
 }

 /*
 1. Calculation of the gap for the custom checkbox
 */

 .toggle__label{
   display: inline-flex;
   min-height: var(--uiToggleSize);
   padding-left: calc(var(--uiToggleSize) + var(--toggleIndent, .4em));
 }

 .toggle__input:not(:disabled) ~ .toggle__label{
   cursor: pointer;
 }

 /*
 1. Ems helps to calculate size of the checkbox
 */

 .toggle__label::after{
   content: "";
   box-sizing: border-box;
   width: 1em;
   height: 1em;
   font-size: var(--uiToggleSize); /* 1 */
   background-color: transparent;
   border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);

   position: absolute;
   left: 0;
   top: 0;
   z-index: 2;
 }

 .toggle__input:checked ~ .toggle__label::after{
   background-color: var(--uiToggleColor);
 }

 .toggle__text{
   margin-top: auto;
   margin-bottom: auto;
 }

 /*
 The arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle

 1. Ems helps to calculate size and position of the arrow
 */

 .toggle__label::before{
   content: "";
   width: 0;
   height: 0;
   font-size: var(--uiToggleSize); /* 1 */

   border-left-width: 0;
   border-bottom-width: 0;
   border-left-style: solid;
   border-bottom-style: solid;

   border-color: #31ff00;
   position: absolute;
   top: .5428em;
   left: .25em;
   z-index: 3;

   transform-origin: left top;
   transform: rotate(-40deg) skew(10deg);
 }

 .toggle__input:checked ~ .toggle__label::before{
   --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);

   width: .4em;
   height: .2em;
   border-left-width: var(--uiToggleArrowWidth);
   border-bottom-width: var(--uiToggleArrowWidth);
 }

 /*
 States
 */

 /* focus state */



 /* disabled state */

 .toggle__input:disabled ~ .toggle__label{
   opacity: var(--toggleOpacityDisabled, .24);
   cursor: var(--toggleCursorDisabled, not-allowed);
   user-select: none;
 }

 /*
 =====
 PRESENTATION STYLES
 =====
 */

 /*
 The demo skin
 */

 .toggle__label::after{
   border-radius: var(--toggleBorderRadius, 2px);
 }

 /*
 The animation of switching states
 */

 .toggle__input:not(:disabled) ~ .toggle__label::before{
   will-change: width, height;
   opacity: 0;
 }

 .toggle__input:not(:disabled):checked ~ .toggle__label::before{
   opacity: 1;
   transition: opacity .1s ease-out .25s, width .1s ease-out .5s, height .2s ease-out .3s;
 }

 .toggle__input:not(:disabled) ~ .toggle__label::after{
   will-change: background-color;
   transition: background-color .2s ease-out;
 }

 /*
 =====
 SETTINGS
 =====
 */


</style>

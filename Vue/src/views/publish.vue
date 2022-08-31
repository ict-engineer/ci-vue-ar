<template>
<div id="app">
   <PanelHeader :pageinfo="pageinfo"></PanelHeader>
        <div class="container-fluid" >
      <div class="row">
        <div class="col">
          <div class="title-section">
            <h5>Publish Model</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <div class="content-section"     >
              <div class="row bg-dark m-1">
              <span class="col border embedArea rounded">
                <div class=" ">
                   <div class="row">
                        <div class="col mt-1">
                            Code for iframe
                           </div>
                          <div class="col-md-auto">
                                   
                                    </div>
                          <div class="col col-lg-2">
                                   <button  @click="embedGen()" data-clipboard-text="textToCopy" class="btn btn-dark">Copy</button>
                            </div>
                   </div>
                <div class="form-group purple-border">
                <textarea class="form-control bg-dark text-white" style="font-size:13px;resize:none;"  rows="4">{{ viewEmbed }}</textarea>
                </div>
                <div class="card" style="width: 100%;">
                <div class="card-body bg-dark" >

                <div class="row">
               
               

                  <div class="col mt-1">
                                    <label  for="selector" class="text-white">Select Model:</label>
                                      <select  id="selector" class="text-white md-form bg-dark" @change="LoadModel($event)">
                                        <option v-for="item in getviewerList" :value="item.id" :key="item.id">  
                                        {{ item.name }}
                                        </option>
                                    </select>
                                   
                   
                      </div> 

              
              <div class="col-md-auto">
                          
                </div>
                  <div class="col col-lg-3">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      &nbsp;&nbsp;Android
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                      &nbsp;&nbsp;IOS
                    </label>
                  </div>
                  </div>
                     
                      
                </div>
                      </div>
                      </div> <!-- Card End -->
                  <br>
                  <br>
                  <br>
                  <br>
             </div> 
              </span>
                
              </div>
          </div>
        </div>
        <div class="col-4">
              <div class="keyvisual-image position-fixed" style="top:0px;">
                <div id="keyvisual_android" class="keyvisual-android-container">
                <div id="keyvisual_frame_img_android" class="keyvisual-image-frame keyvisual-image-frame-android"></div>
                    <iframe id="keyvisual_frame_content_android" class="keyvisual-image-content-android lazy-hidden" :src="qrUrl" scrolling="no"></iframe>
                </div>
            </div>
      </div>

       
        </div>
    </div>
</div>
</template>

<script>
 import PanelHeader from "../components/menuComponent/header";
 import axios from 'axios';
 const serverName = process.env.API_URL;
 const viewerGet  = process.env.API_URL  + "/Viewer_Api/getviewer";
export default ({
     name:'app',
    beforeMount(){
    this.getView();
    },
     data(){
         return{
            pageinfo : "publish",
            qrUrl : "",
            embed : '<iframe%area%></iframe>',
            viewEmbed : "",
             getviewerList:{
              "name":"",
              "id":"",
              "path":""
            },
         }
     },
     components:{
         PanelHeader
     },
     methods:{
    LoadModel(event){
     var url =  event.target.value;
     var find = this.getviewerList.filter(x=> x.id == url);
     var appids =  this.$route.query.appid;
     console.log(find);
     console.log(appid);
    },
         embedGen(){
             var str = this.embed;
             var wh = 'width="680"'  + ' height="500"' + ' scrolling="no"';
             var tmp = ' src="'+ this.qrUrl + '" ' + wh;
             var result = str.replace("%area%", tmp);
             this.viewEmbed = result;
         },
         getView(){
                     axios.post(viewerGet,JSON.stringify(
                    {
                        "token" : $cookies.get("user"),
                        "uuid" : this.$route.query.appid,
                        "id" : "0"
                    }
                  )).then(response=>{
                      if (response.status == 200) {
                       var modelPath =  response.data;//.filter(x=> x.id == 0);
                        //console.log(modelPath);
                        this.getviewerList = modelPath;
                        this.qrUrl = serverName + "/quickLook_Api/loadobject?path=" +  btoa(modelPath[0].path);
                        console.log(this.qrUrl);
                      }
                       })
           
         }
     }
})
</script>
<style scoped>

.embedArea{

     border-color: gray !important;

}
.keyvisual-image-frame-ios {
		background: url("/static/iphoneX.png") center no-repeat;
	}
	.keyvisual-image-frame {
    position: absolute;
    pointer-events: none;
    height: 745px;
    width: 372px;
}

.keyvisual-image-content-ios {
    width: 312px;
    height: 698px;
    margin-top: 26px;
    margin-left: 30px;
    border-radius: 30px;
    background: #fff;
}

	.keyvisual-image-frame-android{
	background: url("/static/android.png") center no-repeat;
	}
	.keyvisual-android-container {
    width: 400px;
     
	}
	.keyvisual-image-content-android {
    width: 317px;
    height: 570px;
    margin: 79px 27px 84px;
    background: #fff;
}

.keyvisual-open-prompt {
    width: 372px;
    margin: 0;
    font-size: 85%;
    color: rgba(255,255,255,.8);
    text-align: center;
}

.iframeArea{
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 60px; overflow: hidden;
}
.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

 
.form-control:focus-within {
  color: var(--form-control-color);
}

input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}
</style>
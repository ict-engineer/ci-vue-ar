<?php
//  if (isset($_GET['type'])){

//   $fileType = $_GET['type'];
//   if ($fileType == "usdz") {
//     ob_start();
//     header("Location:usdzviewer/index.php?filename=".$_GET['filename']);
//     return;
//   }
// }

?>
<!DOCTYPE html>
<html lang="tr">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no,
  minimum-scale=1.0, maximum-scale=1.0">

 <script type="module"
    src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js">
</script>

<!-- Loads <model-viewer> for old browsers like IE11: -->
 <script type="module"
    src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js">
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Rubik:400,500);@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:400,500);:root{--color-red:#ff5252;--font-monospace:'Roboto Mono',monospace;--border-style:1px solid rgba(0,0,0,.15);--grouping-title-margin-top:40px;--snippet-offset:20px -20px;--pre-padding:16px 20px;--demo-title-padding:24px 10% 24px 0;--heading-h3-max-width:480px;--heading-h1-margin-top:40px;--browser-support-desc-margin-top:40px;--browser-support-icons-margin-top:16px;--button-size:36px;--icon-size:28px;--header-height:72px;--poster-color:#F5F5F5}body{font-family:Rubik,sans-serif;font-size:16px;line-height:24px;color:rgba(0,0,0,.87);margin:0;padding:0;font-weight:400;-webkit-font-smoothing:antialiased}*{box-sizing:border-box}a{cursor:pointer;text-decoration:none;color:var(--color-red)}b{font-weight:500}#button-github{background-color:#fff;border-radius:100%;position:fixed;right:12px;top:12px;z-index:1000}#sticky-shortcut{padding:0 20px;margin-top:-60px;position:sticky;top:0;display:flex;background:#fff;height:56px;align-items:center;z-index:1000;overflow:hidden;border-bottom:var(--border-style)}#sticky-shortcut>div{margin-right:12px;white-space:nowrap}table{text-align:left;border-spacing:0;display:table;border-collapse:collapse;width:100%}table.browser-support{margin-bottom:32px}table.browser-support td:first-child,table.browser-support th:first-child{display:block;line-height:24px;padding:12px 2px 8px 0;text-align:left;flex:2;min-width:92px}table.browser-support tr{display:flex;border-top:var(--border-style)}table.browser-support tr:first-child{border-top:none}table.browser-support td,table.browser-support th{flex:1;font-weight:400;line-height:0;padding:10px 0 10px 0;text-align:center;display:grid;justify-content:center;align-items:center}table.browser-support th{color:rgba(0,0,0,.54)}table.browser-support td{font-weight:500}table.browser-support img{width:24px;height:24px}.browser-support-desc{max-width:420px;position:relative;margin-bottom:4px;margin-top:var(--browser-support-desc-margin-top)}#browser-support-icon-group{margin-top:var(--browser-support-icons-margin-top)}.zero-interaction{pointer-events:none!important}.icon-desc{padding:8px 0;width:50%;min-width:240px;float:left}.icon-desc>*{margin-right:16px;display:inline-block;vertical-align:middle}.size-24{width:24px;height:24px}.logo-chrome{content:url(https://github.com/alrra/browser-logos/raw/master/src/chrome/chrome_48x48.png)}.logo-canary{content:url(https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome-canary/chrome-canary_48x48.png)}.logo-safari{content:url(https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)}.logo-firefox{content:url(https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)}.logo-edge{content:url(https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)}.logo-ie{content:url(https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png)}.logo-samsung{content:url(https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png)}.icon-check{opacity:.6;content:url(https://www.gstatic.com/images/icons/material/system/2x/done_black_24dp.png)}.icon-warning{opacity:.6;content:url(https://www.gstatic.com/images/icons/material/system/2x/assignment_turned_in_black_24dp.png)}.icon-na{opacity:.6;content:url(https://www.gstatic.com/images/icons/material/system/2x/not_interested_black_24dp.png)}.icon-flag{opacity:.5;content:url(https://www.gstatic.com/images/icons/material/system/2x/flag_black_24dp.png)}h1,h2,h3,h4{font-weight:400}h1{white-space:nowrap;font-size:1.92em;line-height:1.24em;margin-bottom:.12em;margin-top:0}h2{font-size:1.72em;line-height:1.32em;margin-top:.12em;margin-bottom:.12em}h3{font-size:1.4em;line-height:1.34em;margin-top:.12em;margin-bottom:.12em}h4{font-size:1.2em;line-height:1.4em;margin-top:.1em;margin-bottom:.1em}h1 span{display:inline-block;transform:translate3d(0,3px,0)}.content example-snippet{display:block;margin:var(--snippet-offset)}.footer{background:#eee;padding:40px 40px 40px 40px;color:rgba(0,0,0,.54)}.footer ul{margin-top:0;padding-left:0;margin-bottom:0;list-style:none}.font-medium{font-weight:500}p{margin-top:.25em;margin-bottom:.25em;max-width:680px}model-viewer:focus{outline:0}#intro{margin-top:8px;max-width:480px}#intro div{font-weight:500}.sample{display:grid;position:relative;background:#fff;grid-template-columns:50% 50%;grid-template-areas:"content demo"}.sample{border-bottom:var(--border-style)}.demo{grid-area:demo;position:sticky;top:0;flex:1;display:flex;align-items:center;justify-content:center;border:0 solid #555;box-sizing:border-box}.demo-title{padding:var(--demo-title-padding)}.demo-title:before{background:#222;height:2px;width:40px;content:"";display:block;margin-bottom:16px}.demo-title+h4{margin-top:-24px;margin-bottom:40px}.sample pre{font-size:1em;line-height:1.6em;padding:var(--pre-padding);max-width:960px;margin-left:auto;margin-right:auto;overflow-x:auto}.demo pre{position:absolute;bottom:0;left:0;right:0;z-index:1000;margin:16px;background-color:rgba(0,0,0,.5)}.content pre{background-color:rgba(0,0,0,.04)}code,pre{white-space:pre-wrap!important;font-family:var(--font-monospace)}.icon-button{width:var(--button-size);height:var(--button-size);background-repeat:no-repeat;display:inline-block;background-size:var(--icon-size);cursor:pointer;background-position:50% 50%;opacity:.87}.icon-button:hover{opacity:1}.icon-github{background-image:url(../assets/ic_github_black_24dp.svg)}.icon-modelviewer{background-image:url(../assets/ic_modelviewer_red.svg)}.icon-modelviewer-black{background-image:url(../assets/ic_modelviewer.svg)}.lockup{display:flex;align-items:center;margin-bottom:6px;color:rgba(0,0,0,.87)}.lockup h1{margin:0}.lockup .icon-button{margin-left:-4px;margin-right:8px;width:34px;height:34px;background-size:34px}#button-home{font-weight:500;font-size:20px;margin:0 0 12px 0;display:block;display:flex;align-items:center}#button-home .icon-modelviewer{margin-right:6px;margin-left:-6px;margin-top:2px}.demo model-viewer{width:100%;height:100vh}.content{grid-area:content;position:relative;padding-top:20px}.wrapper{margin:0 auto;padding:40px 60px;position:relative;max-width:920px}#header{height:var(--header-height);width:50%;padding:0 8px;display:flex;align-items:center;justify-content:space-between;position:absolute;left:0;right:0;z-index:1000}.center{text-align:center;margin-left:auto;margin-right:auto}.heading{max-width:760px}.heading h3{max-width:var(--heading-h3-max-width)}.modal{margin:0 auto;max-width:520px;background:#fff;padding:28px 32px 24px 32px}.no-show{display:none}paper-button{margin-top:16px;font-weight:500;text-transform:uppercase;padding:7px 11px 6px 0;border-radius:2px;align-items:center;display:flex;width:auto;cursor:pointer}#list-example{padding-left:0;margin-top:16px;margin-left:0;margin-bottom:16px;grid-template-columns:1fr 1fr;display:grid;grid-column-gap:20px;grid-row-gap:8px;list-style:none}#list-example li{padding-right:20px;max-width:480px}#list-example p{margin-top:2px}#list-example a{margin:0}.list-attribute{margin-top:10px;list-style:none;padding-left:0}.list-attribute li{display:flex;border-bottom:var(--border-style);margin-bottom:14px;padding-bottom:10px}.list-attribute li>div{min-width:200px;flex:1;font-weight:500;padding-right:16px}.list-attribute li>p{flex:2;margin:0}.grid{width:100%;height:100%;display:grid;grid-gap:0;grid-template:1fr 1fr/1fr 1fr}.grid model-viewer{width:100%;height:100%}.grouping-title{margin-top:var(--grouping-title-margin-top);position:sticky;top:0;background:#fff;padding:14px 0 12px 0;border-bottom:var(--border-style);z-index:100;text-transform:lowercase}.grouping-title.border-bottom{padding-bottom:10px}.border-bottom{border-bottom:var(--border-style)}.attribute{white-space:nowrap}.copyright{margin-top:4px}.token.keyword,.token.namespace,.token.tag{color:#ff5252}.token.attr-name,.token.property,.token.selector,.token.string{color:#00b0ff}.token.attr-value,.token.function{color:#00bfa5}.language-css,.language-javascript{color:#757575}.content code[class*=language-],.content pre[class*=language-],.token.comment{color:#999}@media only screen and (min-width:1664px){:root{--snippet-offset:40px -40px;--pre-padding:28px 40px}body{font-size:18px;line-height:26px}.demo pre{margin:16px auto}}@media only screen and (max-width:1280px){#list-example{grid-template-columns:1fr}.wrapper{margin:0 20px;padding:20px;min-height:auto;border-bottom:none}}@media only screen and (max-width:800px){:root{--grouping-title-margin-top:20px;--demo-title-padding:8px 12px 24px 0;--snippet-offset:0;--heading-h3-max-width:320px;--heading-h1-margin-top:0;--browser-support-desc-margin-top:20px;--browser-support-icons-margin-top:8px;--header-height:56px}body{font-size:14px;line-height:22px}h1{font-size:1.8em;line-height:1.4em}h2{font-size:1.56em;line-height:1.36em}h3{font-size:1.2em;line-height:1.48em;font-weight:500}h4{font-size:1em;line-height:1.5em}.lockup{margin-bottom:2px}.lockup .icon-button{margin-left:0;margin-right:6px;width:var(--icon-size);height:var(--icon-size);background-size:var(--icon-size)}#button-github{right:10px;bottom:10px;top:auto;box-shadow:0 0 4px rgba(0,0,0,.2)}#button-home{margin:0 0 12px 0}#header{position:relative;width:100%}#intro{margin-bottom:20px}body.single-example .demo-title{transform:translate3d(0,-36px,0)}.demo-title+h4{margin-bottom:20px}.grouping-title{font-weight:500}.wrapper{padding:0 0 20px 0}.demo{position:relative;height:100vh;flex-direction:column-reverse;background-color:#eeee}.index{width:48px;height:48px}.sample{display:block}.content{max-width:unset;padding-top:16px}#list-example{margin-top:12px;font-size:16px}.list-attribute li{flex-direction:column;padding-top:0;margin-bottom:12px}.list-attribute li>h4{padding-top:10px}.footer{padding:20px}}


</style>
<head>
 <!-- use unique asset to ensure preloading -->
<div class="demo">

<?php

// if (!isset($_GET['filename'])){
//   echo 'no file';
//   exit;
// }else{
//   $filename =$_GET['filename'];
// }
?>


  <model-viewer
		  src="../<?php echo $filename; ?>"
		  ar="" ar-placement="wall"
		  ar-modes="webxr scene-viewer quick-look"
		  autoplay camera-controls alt=""
		  data-js-focus-visible=""
		  ar-status="not-presenting"

 </model-viewer>

</div>



</html>

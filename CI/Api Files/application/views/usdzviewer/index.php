<!DOCTYPE html>
<html lang="en">
  <head>
    <title>2Soft-Model Viewer</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="css/viewer.css" />

    <script src="js/webcomponents-loader.js"></script>

    <script src="js/intersection-observer.js"></script>

    <script src="js/ResizeObserver.js"></script>

    <script src="js/prismatic.min.js"></script>

    <script src="js/qrcode.js"></script>

    <script type="module" src="js/model-viewer.js"></script>

    <script nomodule src="js/model-viewer-legacy.js"></script>

    <script>
    //model-viewer variables
    var returnUrl = "";
    var qrUrlIsReturnUrl = false;
    var qrURL = qrUrlIsReturnUrl ? returnUrl : window.location.href;
    var USDZsrc = "https://2softgames.com/workarea/upload/<?php
    if (isset($_GET['filename'])){

      echo $_GET['filename'];

    }
    
    ?>";
    var GLBsrc = "";
    </script>
  </head>
  <body>

    <div id="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <div class="loading" id="ld">
          Loading...
        </div>

      <div id="qrcode" class="hidden"></div>

      <!-- <div class="viewonphone" id="vop">
        <a onclick="showQRCode()" id="qrlink">View in your home</a>
        <a onclick="hideQRCode()" id="qrexplain">Scan this with your phone</a>
      </div> -->
      <!-- Overlay content -->
      <div class="overlay-content" id="oc">
      </div>
    </div>
    <script src="js/viewer.js"></script>
  </body>
</html>
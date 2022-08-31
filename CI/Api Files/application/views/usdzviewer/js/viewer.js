function checkMobile() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return true;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }

  return false;
}
function buildQRCode() {
  new QRCode(document.getElementById("qrcode"), qrURL);
}
function showQRCode() {
  document.getElementById("qrlink").style.display = "none";
  document.getElementById("qrexplain").style.display = "block";

  document.getElementById("qrcode").classList.remove("hidden");
}

function hideQRCode() {
  document.getElementById("qrcode").classList.add("hidden");

  document.getElementById("qrlink").style.display = "block";
  document.getElementById("qrexplain").style.display = "none";
}
/* Open when someone clicks on the span element */
function openViewer() {
  document.getElementById("oc").innerHTML = `
    <model-viewer
      src="${GLBsrc}"
      ios-src="${USDZsrc}"
      background-color="#bbbbbb"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      style="position:absolute; left:0; top:0; margin:0; padding:0; width:100%; height:100%;"
      id="viewer-singleton"
    >
    </model-viewer>        `;

  if (!checkMobile()) {
    buildQRCode();
    document.getElementById("vop").style.display = "block";
    //console.log(checkMobile);
  }

  document.getElementById("myNav").style.width = "100%";
  (() => {
    var checkExist = setInterval(function() {
      if (document.querySelector("#viewer-singleton") != null) {
        modelViewer = document.querySelector("#viewer-singleton");
        modelViewer.activateAR();

        modelViewer.addEventListener("model-visibility", event => {
          if (event.detail.visible) {
            //code to hide loading here.
            document.getElementById("ld").style.display = "none";
          }
        });

        clearInterval(checkExist);
      }
    }, 100);
  })();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeViewer() {
 
  //console.log(checkMobile);
}

openViewer();

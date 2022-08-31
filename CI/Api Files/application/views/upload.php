<?php
if (!isset($_POST)){
  echo 'no file';
  exit;
}
$fileType      = array("glb","glft","usdz");
$uploaddir     = 'upload/';
$filename      = md5(date('Y-m-d H:i:s:u'));
$fileExtension = explode('.', $_FILES['attachment']['name']);
$uploadfile    = $uploaddir . $filename .".". $fileExtension[1];
$isTrueFile    = false; 
foreach ($fileType as $type) {
  if ($type  == $fileExtension[1]) {
    $isTrueFile = true;
  }
}

if ($isTrueFile) {
  if (move_uploaded_file($_FILES['attachment']['tmp_name'], $uploadfile)) {
      echo $filename.".".$fileExtension[1];
    } else {
      echo "0";
    }
}else{
  echo "Bad file type";
}

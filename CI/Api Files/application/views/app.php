<?php
if (!isset($_POST)){
    echo 'no file';
    exit;
}
$fileName = $_POST['filename'];
if (file_exists("upload/". $fileName)) {
    $hostname = getenv('HTTP_HOST');
    $protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0 ? 'https://' : 'http://';

     echo $protocol.$hostname."/workarea/viewer.php?filename=".$fileName;   
}
 
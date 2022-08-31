<?php
class Viewer_Model extends CI_Model{
    public $tableName;
    public $userTable;
    public $apiTable;
    public $ownerID;
    public $ownerMail;
    public function __construct(){
        parent::__construct();
        $this->tableName = "builds";
        $this->userTable = "users";
        $this->apiTable  = "api";

    }
    public function downloadFile($data){
        $filename = $data;
        $this->load->helper('download');
        force_download($filename, NULL);
    }
    public function updateIcon($data){
        $token = $this->checkToken($data['token']);
        $uuid  = $data['uuid'];
        $id    = $data['id'];
        $user  = md5($this->ownerMail);
        $path;
        if ($token) {
            if (is_dir('./uploads/' . $user))
            {

                $datetime = date("Y-m-d h:i:s");
                $timestamp = strtotime($datetime);
                $image = $data['icon'];
                $img = str_replace('data:image/png;base64,', '', $image);
                $img = str_replace(' ', '+', $img);
                $imgdata = base64_decode($img);
                $f = finfo_open();
                $mime_type = finfo_buffer($f, $imgdata, FILEINFO_MIME_TYPE);
                $temp=explode('/',$mime_type);
                $path = './uploads/'.$user."/".$timestamp.".".$temp[1];
                $dbpath = 'uploads/'.$user."/".$timestamp.".".$temp[1];

                file_put_contents($path, $imgdata);
                // $image_no= time();//or Anything You Need
                // $image =  $data['icon'];
                // $status = file_put_contents($path,base64_decode($image));
                // if($status){
                //  echo "Successfully Uploaded";
                // }else{
                //  echo "Upload failed";
                // }
            }
            $buildItem = array("ownerid" => $this->ownerID , "uuid" => $uuid,"id" => $id);
            $query     = $this->db->where( $buildItem)->get($this->tableName)->result();
          //  $path      = $this->db->where("id","1")   ->get($this->apiTable)->result();
            foreach ($query as $value) {

                $owner = $value->ownerid;
                if ($this->ownerID == $owner) {
                    $update = $this->db->where($buildItem)->update($this->tableName,array("icon" => $dbpath));
                    if ($update) {
                        echo 'success update';
                    }
                }
            }

        }
    }

    public function getviewer($data){

        $token = $this->checkToken($data['token']);
        $uuid  = $data['uuid'];
        $id    = $data['id'];
        $user  = md5($this->ownerMail);
        $result = array();
        if ($token) {
            if (is_dir('./uploads/' . $user))
            {
                $buildItem = array("ownerid" => $this->ownerID , "uuid" => $uuid);
                $query     = $this->db->where( $buildItem)->get($this->tableName)->result();
              //  $path      = $this->db->where("id","1")   ->get($this->apiTable)->result();
                foreach ($query as $value) {
                    $push['path']  =  'uploads/' . $user . "/".$value->modelname;  
                    $push['id']    = $value->id;  
                    $push['name']    = $value->modelname;  
                    $push['icon']    = $value->icon;  
                    
                    array_push($result,$push);
                 }


            }
            //  $path  = './uploads/' . $user . "/".$file;  
          
            return $result;
        }

    }
    public function checkToken($token){
        $query = $this->db->where("token",$token)->get($this->userTable);
        $result = $query->result();
         if ($query->num_rows() > 0){
            if ($result) {
                foreach ($result as $value) {
                    $this->ownerID = $value->id;
                    $this->ownerMail = $value->email;
                    return true;
                }
            }
          } else{
            echo 'Token Not Found!';
            $this->ownerMail = "-";
        }
          return false;  
    }
}
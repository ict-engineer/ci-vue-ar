<?php

class Builds_Upload_Model extends CI_Model{
    public $tableName;
    public $userTable;
    public $ownerID;
    public $ownerMail;

    public function __construct(){
        parent::__construct();
        $this->tableName = "builds";
        $this->userTable = "users";

    }
    // token adresini alıp owner id bul
    // project uuid al

    public function uploadFile($data){

        $this->checkToken($data['token']);

        if ($this->ownerMail == "-") {
            return false;
        }
        $file  = 'userfile';
        $build['ownerid'] = $this->ownerID;
        $build['uuid'] = $data['uuid'];
        $user = md5($this->ownerMail);

        $root = $_SERVER["DOCUMENT_ROOT"];
        $dir = $root . '/uploads/'.$user;

        if (!is_dir($dir))
        {
            mkdir($dir, 0755, true);
        }
        $folder                         = $dir;
        $config['upload_path']          = $folder ;
        $config['allowed_types']        = '*';
        $config['max_size']             = 1000000;
        $this->load->library('upload', $config);
        $fileExt =  $_FILES[$file]['name'];
        $checkExt = strpos($fileExt,".glb") || strpos($fileExt,".gltf");
                if (!$checkExt) {
                    $data = array('error' => $this->upload->display_errors());
                    echo json_encode($data);
                    return;
                }

                $data;
                if ( ! $this->upload->do_upload($file))
                {
                    $data = array('error' => $this->upload->display_errors());
                    echo json_encode($data);
                    return;
                }
                else
                {
                $data =  $this->upload->data();
                $build['filesize']  = $data['file_size'];
                $build['modelname'] = $data['file_name'];
                $build['file']      = $data['file_name'];
                $insertFileName = $this->db->insert($this->tableName,$build);
                echo json_encode($data);
                }




    }

    private function checkToken($token){
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

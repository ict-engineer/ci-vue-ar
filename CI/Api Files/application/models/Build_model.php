<?php
class Build_Model extends CI_Model{
    public $tableName;
    public $userTable;
    public $ownerID;
    public $ownerMail;
    public function __construct(){
        parent::__construct();
        $this->tableName = "builds";
        $this->userTable = "users";
    }


    public function getBuilds($data = array()){
        $token = $this->checkToken($data['token']);
        $uuid  = $data['uuid'];
        if ($token) {
            $buildItem = array("ownerid" => $this->ownerID , "uuid" => $uuid);
            return $this->db->where( $buildItem)->get($this->tableName)->result();
        }

    }
    public function getSettings($ownerID, $projectID){
		$where = array("ownerid" => $ownerID , "projectID" => $projectID);
		$va = $this->db->where( $where)->get($this->tableName);
		var_dump($va);
	}
    public function duplicateModel($data = array()){
        $token = $this->checkToken($data['token']);
        if ($token) {
           return $this->FindFileAndDuplicate($data);
        }
    }

    public function removeModel($data = array()){
        $token = $this->checkToken($data['token']);
        if ($token) {
           return $this->FindFileAndDelete($data);
        }
    }
    private function FindFileAndDuplicate($data){
        $uuid  = $data['uuid'];
        $id    = $data['id'];
        $user  = md5($this->ownerMail);
        $where = array("ownerid" => $this->ownerID , "uuid" => $uuid,"id" => $id);
        $query = $this->db->where($where)->get($this->tableName)->result();
        foreach ($query as $value) {
            $file = $value->modelname;
            if (is_dir('./uploads/' . $user))
            {
                $path  = './uploads/' . $user . "/".$file;
                $ext = ".".pathinfo($path, PATHINFO_EXTENSION);
                $oldName = str_replace($ext,"",$file);
                reName:
                $newName = $oldName."_Copy".$ext;
                $dest    = './uploads/' . $user . "/".$newName;
                if (is_file( $dest)) {
                    $oldName += "_Copy";
                    goto reName;
                }
                copy( $path,$dest);
                $buildItem = array(
                "ownerid" => $this->ownerID ,
                 "uuid" => $uuid,
                 "modelname" => $newName,
                 "file" => $newName,
                 "filesize" => $value->filesize
                );
                $insert = $this->db->insert($this->tableName,$buildItem);

                return array( "id" => $insert_id = $this->db->insert_id(),"name" => $newName);
            }else{
                echo "file not found";
            }
            echo "-";
        }


    }

    private function FindFileAndDelete($data){
        $uuid  = $data['uuid'];
        $id    = $data['id'];
        $user  = md5($this->ownerMail);
        $where = array("ownerid" => $this->ownerID , "uuid" => $uuid,"id" => $id);
        $query = $this->db->where($where)->get($this->tableName)->result();
        foreach ($query as $value) {
            $file = $value->modelname;
            $thumbs  =  $value->icon;
            if (is_dir('./uploads/' . $user))
            {
                $folder  = './uploads/' . $user . "/". $file;
                if ($thumbs != "") {
                    unlink($thumbs);
                  //  echo $thumbs;
                }
                unlink($folder);
                $buildItem = array("ownerid" => $this->ownerID , "uuid" => $uuid,"id" => $id);
                return $this->db->where( $buildItem)->delete($this->tableName);
            }else{
                echo "file not found";
            }
            echo "-";
        }


    }

    public function save($data = array()){
        return
        json_encode($this->db->insert($this->tableName,$data));
    }
    public function update($data = array(),$where = array()){
        return
        json_encode($this->db->where($where)->update($this->tableName,$data));
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

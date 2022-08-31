<?php
class Project_Model extends CI_Model{
    public $tableName;
    public $userTable;
    public $ownerID;
    public $error = array(
        "isError"    => false,
        "error_code" => 0,
        "error_text" => "",
        "response"
    );
    public function __construct(){
        parent::__construct();
        $this->tableName = "projects";
        $this->userTable = "users";

    }
    public function get_all_data($_token){
        $token = $this->checkToken($_token);
        if ($token) {
             return json_encode($this->db
             ->where("ownerid" ,$this->ownerID)
             ->get($this->tableName)
             ->result());
         }else{
            $this->error['isError'] = true;
            $this->error['error_code'] = 107;
            $this->error['error_text'] = "Token not found.";
            echo  json_encode($this->error);
         }

    }
    public function removeProject($data = array()){
        $token = $data['token'];
        $uuid  = $data['uuid'];
        $this->checkToken($token);
        $remove = array("ownerid" => $this->ownerID , "uuid" => $uuid);

        $query = $this->db->where($remove)->delete($this->tableName);

        return $query;
    }

    public function newAdd($data = array()){
        $newData     = array();
        $token       = $data['token'];
        $this->checkToken($token);
        $newData['ownerid']     = $this->ownerID;
        $newData['projectname'] = $data['projectname'];
        $newData['uuid']        = md5(base64_encode($data['projectname'].time())).(md5($data['projectname'].time()));
        $newData['icon']        = $data['icon']; // vt den al daha sonra
        $newData['time']        = time();
        $query       = $this->db->insert($this->tableName,$newData);
        return $newData;
    }
    private function checkToken($token){
        $query = $this->db->where("token",$token)->get($this->userTable);
        $result = $query->result();
         if ($query->num_rows() > 0){
            if ($result) {
                foreach ($result as $value) {
                    $this->ownerID = $value->id;
                    return true;
                }
            }
          }
          return false;
    }
    public function save($data = array()){
        return
        json_encode($this->db->insert($this->tableName,$data));
    }
    public function update($data = array(),$where = array()){
        return
        json_encode($this->db->where($where)->update($this->tableName,$data));
    }

}

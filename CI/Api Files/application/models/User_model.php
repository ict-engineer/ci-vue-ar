<?php
class User_Model extends CI_Model{
    public $tableName;

    public function __construct(){
        parent::__construct();
        $this->tableName = "users";
    }

    public function get_all_data(){
       // return json_encode($this->db->get($this->tableName)->result());
    }
    public function checkUser($where = array()){
      $query = $this->db->where($where)->get($this->tableName);
      if ($query->num_rows() > 0){
         return true;
        }else{
         return false;
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

}

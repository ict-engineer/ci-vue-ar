<?php
class Scene_Model extends CI_Model{
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
	public function saveScene($data){
		$token = $data['token'];
		$uuid  = $data['uuid'];
		$this->checkToken($token);
		$findProject = array("ownerid" => $this->ownerID , "uuid" => $uuid,"id" => $data['id']);
		$this->db->where($findProject);
		$query = $this->db->get($this->tableName);
		if ($query->num_rows() > 0)
		{
			foreach ($query->result() as $row)
			{

				$settings = base64_encode(json_encode($data['settings']));
				$setPr    =	$this->db->where($findProject)->update($this->tableName,array(
					'settings' => ($settings)
				));
				if ($setPr){

					 return array(
						"isError"  => false,
						"response" => 'success'
					);
				}
				return array(
					"isError"  => true,
					"response" => 'update failed!'
				);

			}
		}
	}
	public function getScene($data){
		$token = $data['token'];
		$uuid  = $data['uuid'];
		$this->checkToken($token);
		$findProject = array("ownerid" => $this->ownerID , "uuid" => $uuid,"id" => $data['id']);
		$this->db->where($findProject);
		$query = $this->db->get($this->tableName);
		if ($query->num_rows() > 0)
		{
			foreach ($query->result() as $row)
			{

				$settings =  base64_decode($row->settings);
				return $settings;

			}
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

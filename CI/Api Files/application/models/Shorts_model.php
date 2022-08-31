<?php
class Shorts_model extends CI_Model
{
	public $tableName;
	public $userTable;
	public $ownerID;
	public $ownerMail;
	public function __construct()
	{
		parent::__construct();
		$this->tableName = "shorts";
		$this->userTable = "users";
		$this->load->helper('string');
	}

	public function getlist($data)
	{
		$token = $this->checkToken($data['token']);
		if ($token){
			$query = $this->db->where("ownerID",$this->ownerID)->get($this->tableName);
			return json_encode($query->result());
		}

	}
	public function destroy($data)
	{
		$token = $this->checkToken($data['token']);
		if ($token){
			$query = $this->db
				->where("ownerID",$this->ownerID)
				->where("id",$data['id'])
				->delete($this->tableName);
			return json_encode($query);
		}

	}
	public function create($data)
	{
		$token = $this->checkToken($data['token']);
		$projectId = $data['id'];
		$randUrl = random_string('alnum', 11);
		if ($token){
			$query = $this->db->insert($this->tableName,[
				'ownerID' => $this->ownerID,
				'projectID' => $projectId,
				'base' =>$data['url'],
				'go' => $randUrl,
				"view" => 0

			]);
			$queryl = $this->db->where("ownerID",$this->ownerID)->
				where('go',$randUrl)->get($this->tableName);
			return json_encode($queryl->result());
			//return $this->getlist($data);
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

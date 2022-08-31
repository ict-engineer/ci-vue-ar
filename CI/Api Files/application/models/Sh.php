<?php
class Sh_Model extends CI_Model{
	public $tableName;

	public function __construct()
	{
		parent::__construct();
		$this->tableName = "shorts";

	}

	public function  goUrl($url){
		return $this->db->where(['go'=>$url])->result();
	}
}

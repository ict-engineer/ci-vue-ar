<?php


class quicklook_model extends CI_Model{
	public $tableName;

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->tableName = "shorts";
	}

	public function  goshorts($url){

		$data = 	$this->db->query("select * from shorts where go='".$url."'")->result() ;
		if ($data){

			header("Location:".$data[0]->base);
		}
	}
	public function  getSettings($url){

		$data = 	$this->db->query("select * from shorts where go='".$url."'")->result() ;
		if ($data){

			return json_decode($data[0]->projectID);
		}
	}

}

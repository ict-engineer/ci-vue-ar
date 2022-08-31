<?php


class Sh_Model extends CI_Model{
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
			header("Location:".$data[0]->base."&s=".$data[0]->go);
//			$data2 = 	$this->db->query("select * from shorts where go='".$url."'")->result() ;
			$count = $data[0]->view + 1;
		//$this->db->query("UPDATE `shorts` SET `view`='". $count ."' WHERE go='". $url."'") ;

		}
	}
	public function  getSettings($url){

		$data = 	$this->db->query("select * from shorts where go='".$url."'")->result() ;
		if ($data){
			$count = $data[0]->view + 1;
			$this->db->query("UPDATE `shorts` SET `view`='". $count ."' WHERE go='". $url."'") ;
			return ($data[0]);
		}
	}

}

<?php
class Sh extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model("sh_model");
	//	$this->output->set_content_type("application/json; text/html; charset=UTF-8");
		$this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

		//$this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
	}

	public function go(){
		$adress = ($this->input->get('s'));
		 print_r( $this->sh_model->goshorts($adress));
	}

}

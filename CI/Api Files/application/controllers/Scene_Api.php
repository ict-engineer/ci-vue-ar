<?php
class Scene_Api extends CI_Controller
{
	public $JSON_DATA;

	public function __construct()
	{
		parent::__construct();
		$this->load->model("scene_model");
		$this->output->set_content_type("application/json");
		$this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		$this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
	}
	public function save(){
		$data = $this->JSON_DATA;
		echo json_encode($this->scene_model->saveScene($data));
	}
	public function get(){
		$data = $this->JSON_DATA;
		echo ($this->scene_model->getScene($data));
	}

}

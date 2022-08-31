<?php
class Shorts_Api extends CI_Controller
{
	public function __construct(){
		parent::__construct();
		$this->load->model("shorts_model");
		$this->output->set_content_type("application/json; text/html; charset=UTF-8");
		$this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
		$this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
	}


	public function getlist()
	{
		$data = $this->JSON_DATA;
		echo $this->shorts_model->getlist($data);

	}
	public function create()
	{
		$data = $this->JSON_DATA;
		echo $this->shorts_model->create($data);

	}
	public function destroy()
	{
		$data = $this->JSON_DATA;
		echo $this->shorts_model->destroy($data);

	}
}

<?php
header("Access-Control-Allow-Origin: *");

class Viewer_Api extends CI_Controller {
    public $JSON_DATA;
    
    public function __construct(){
        parent::__construct();
        $this->load->model("viewer_model");
        $this->output->set_content_type("application/json,application/octet-stream");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Content-Transfer-Encoding: binary");
        $this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
       
        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
    }

    public function getviewer(){
        $data = $this->JSON_DATA;
        echo json_encode($this->viewer_model->getviewer($data));
    }
    public function downloadfile(){
      //  $data = $this->JSON_DATA;
        $path = base64_decode($this->input->get('path'));
        $this->viewer_model->downloadFile($path);
    }
    public function updateIcon(){
        $data = $this->JSON_DATA;
        $this->viewer_model->updateIcon($data);
    }


}
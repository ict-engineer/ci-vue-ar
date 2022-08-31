<?php

class Builds_Upload_Api extends CI_Controller {
        public $JSON_DATA;
        public function __construct()
        {
                parent::__construct();
                $this->output->set_header("Access-Control-Allow-Origin: *");
                $this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
                $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");        
                $this->load->helper(array('form', 'url'));
                $this->load->model("builds_upload_model");
               
        }

        public function upload()
        {

              //  $this->builds_upload_model->uploadFile($config,'userfile');
                $token = $this->input->post('token');
                $uuid = $this->input->post('uuid');
                $data = array(
                    'token' => $token,
                    'uuid'  => $uuid
                );
                $this->builds_upload_model->uploadFile($data);
             

               
        }
}


?>
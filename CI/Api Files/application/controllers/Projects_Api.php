<?php
class Projects_Api extends CI_Controller {
    public $JSON_DATA;
    public $error = array(
        "isError"    => false,
        "error_code" => 0,
        "error_text" => "",
        "response"
    );
    public function __construct(){
        parent::__construct();
        $this->load->model("project_model");
        $this->output->set_content_type("application/json; text/html; charset=UTF-8");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
    }
    public function get_all_data(){
        $data = $this->JSON_DATA;
        echo $this->project_model->get_all_data($data['token']);
    }
    public function removeProject(){
        $data = $this->JSON_DATA;
        $addProject = $this->project_model->removeProject($data);
    }
    public function newAdd(){
        $data = $this->JSON_DATA;
        $addProject = $this->project_model->newAdd($data);
        if ($addProject["uuid"] != "") {
            $this->error['isError'] = false;
            $this->error['error_code'] = 0;
            $this->error['error_text'] = "A new project has been created.";  
            $this->error['response']    = $addProject;  
            echo  json_encode($this->error);
        }else{
            $this->error['isError'] = true;
            $this->error['error_code'] = 201;
            $this->error['error_text'] = "A new project has not been created.";  
            $this->error['response']    = "";  
            echo  json_encode($this->error);
        }
    }

    public function save(){
      $prefix =
      "tbx".
      $this->input->post("time").
      $this->input->post("ownerid");
      
       
      echo  $this->project_model->save(array( 
            "ownerid"       => $this->input->post("ownerid"),
            "projectname"   => $this->input->post("projectname"),
            "icon"          =>  $this->input->post("icon"),
            "time"          =>  $this->input->post("time"),
            "uuid"          =>  md5(uniqid( $prefix))  
        ));
    }
    public function update(){
        echo  $this->project_model->update(
            array( 
                "projectname"   => $this->input->post("projectname"),
                "icon"          => $this->input->post("icon"),
            ),
          array( 
              "id"          => $this->input->post("id")
          )  
    );
    }
}
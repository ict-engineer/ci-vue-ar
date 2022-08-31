<?php
class Builds_Api extends CI_Controller {
    public $JSON_DATA;
    public function __construct(){
        parent::__construct();
        $this->load->model("build_model");
        $this->output->set_content_type("application/json");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
    }
    public function getbuilds(){
        $data = $this->JSON_DATA;
        echo json_encode($this->build_model->getBuilds($data));
    }

    public function remove(){
        $data = $this->JSON_DATA;
        echo json_encode($this->build_model->removeModel($data));
    }
    public function duplicate(){
        $data = $this->JSON_DATA;
        echo json_encode($this->build_model->duplicateModel($data));
    }
    // public function save(){

    //     $prefix =
    //     "tbx".
    //     $this->input->post("time").
    //     $this->input->post("ownerid").
    //     $this->input->post("projectid");

    //     echo  $this->build_model->save(array(
    //           "projectid"     => $this->input->post("projectid"),
    //           "ownerid"       => $this->input->post("ownerid"),
    //           "modelname"     => $this->input->post("modelname"),
    //           "icon"          => $this->input->post("icon"),
    //           "embed"         => $this->input->post("embed"),
    //           "time"          => $this->input->post("time"),
    //           "uuid"          => md5(uniqid( $prefix))
    //       ));
    // }
    // public function update(){
    //     echo  $this->build_model->update(
    //         array(
    //             "modelname"     => $this->input->post("modelname"),
    //             "icon"          =>  $this->input->post("icon"),
    //             "embed"         =>  $this->input->post("embed"),
    //         ),
    //       array(
    //           "id"              => $this->input->post("id")
    //       )
    // );
    // }
}

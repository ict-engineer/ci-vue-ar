<?php
class Users_Api extends CI_Controller {
    public $JSON_DATA;
    public $error = array(
        "isError"    => false,
        "error_code" => 0,
        "error_text" => "",
        "response"
    );
    public function __construct(){
        parent::__construct();
        $this->load->model("user_model");
        $this->output->set_content_type("application/json; text/html; charset=UTF-8");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
    }

    public function get_all_data(){
       // echo $this->user_model->get_all_data();
    }
    public function save(){
       $data = $this->JSON_DATA;
       $this->isNull($data);
       $mail    = $data['email'];
       $check   = $this->user_model->checkUser(
       array("email" => $mail)) ;
       if ($check) {
            $this->error['isError'] = true;
            $this->error['error_code'] = 100;
            $this->error['error_text'] = "This e-mail has already been registered.";
            echo  json_encode($this->error);
            return;
       }
       $data['password'] =  md5($data['password']);
       echo  $this->user_model->save(
         $data
        );
    }
    public function login(){
        $data = $this->JSON_DATA;
        $this->isNull($data);
        $email     = $data['email'];
        $password =  md5($data['password']);
        $check = $this->user_model->checkUser(array(
            "email" => $email,
            "password" =>$password
        ));

        if ($check) {
            $token = bin2hex(random_bytes(16).time());
            $loginToken =  "tbx".$token.".".base64_encode($email.$password);
            $update = $this->user_model->update(
                array(
                    "token" => $loginToken
                ),
                array(
                "email" => $email,
                "password" => $password
                ));
                if ($update) {
                    $this->error['response'] = array("token" => $loginToken);
                    echo  json_encode($this->error);
                }

        }else{
            $this->error['isError'] = true;
            $this->error['error_code'] = 103;
            $this->error['error_text'] = "User not found or incorrect password.";
            echo  json_encode($this->error);
        }

    }
    private function isNull($data){
            foreach ($data as $key => $value) {
                if (empty($value) || $value == "") {
                    $this->error['isError'] = true;
                    $this->error['error_code'] = 101;
                    $this->error['error_text'] = "The ".$key." value is empty.";
                    echo  json_encode($this->error);
                    die();
                    return false;
                }
            }
    }
    public function update(){
        echo  $this->user_model->update(
            array(
            "username"      => $this->input->post("username"),
            "firstname"     => $this->input->post("firstname"),
            "lastname"      => $this->input->post("lastname"),
            "email"         =>  $this->input->post("email"),
            "password"      => md5($this->input->post("password")),
            "gender" =>  $this->input->post("gender"),
            "phone" =>  $this->input->post("phone"),
            "question" =>  $this->input->post("question"),
            "answer" =>  $this->input->post("answer")
            ),
          array(
              "id"          => $this->input->post("id")
          )
    );
    }
}

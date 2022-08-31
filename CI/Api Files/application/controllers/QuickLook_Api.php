<?php

class QuickLook_Api extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model("sh_model", "sh_model");
		$this->load->model("build_model", "build_model");
		$this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
	}

	public function loadobject()
	{
		$setting = 'default';
		$resdata = array();
		$data['filename'] = base64_decode($this->input->get('path'));
		$short = ($this->input->get('s'));
		if (empty($short)){
			$this->load->helper('url');
			$this->load->view('viewer2', $data);
			return;
		}
		$project = $this->sh_model->getSettings($short);
		$query = $this->db->query("SELECT * FROM builds WHERE ownerid = " . $project->ownerID . " and id=" . $project->projectID);
		if ($query !== FALSE && $query->num_rows() > 0) {
			foreach ($query->result_array() as $row) {
				$resdata[] = $row;
			}
			$setting = base64_decode($resdata[0]['settings']);
		}
		if (!empty($setting)){
			$data['settings'] = (json_decode($setting));


			//  $this->load->view->render('viewer', $path);
			$this->load->helper('url');
			$this->load->view('viewer', $data);
			return;
		}



		//  $this->load->view->render('viewer', $path);
		$this->load->helper('url');
		$this->load->view('viewer2', $data);

	}

	public function getSettings($ownerID, $projectID)
	{

	}
}


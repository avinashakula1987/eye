<?php
	include("../inc/functions.php");
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");
	
	if( $conn ){		
		$query = mysqli_query($conn, "SELECT * FROM `products` ORDER BY id DESC") or die(mysqli_error($conn));
		if ( $query ) {				
			$response = array();				
			header("Content-Type: JSON");
			while( $res = mysqli_fetch_object($query) ){
				$response[] = $res;	
			}						
			echo json_encode($response);			
		}else{
			$response = array();
			header("Content-Type: JSON");
			$response["status"] = false;									
			$response["msg"] = "Sorry for the inconvenience, Server updating for better security. Please try again after sometime.";									
			echo json_encode($response, JSON_PRETTY_PRINT);						
		}			
	}else{
		$response = array();
		header("Content-Type: JSON");
		$response["status"] = false;	
		$response["msg"] = "Sorry for the inconvenience, repairing backend at this moment. Please try again after sometime.";									
		echo json_encode($response, JSON_PRETTY_PRINT);		
	}

?>
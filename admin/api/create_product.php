<?php
	include("../inc/functions.php");
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");
	
	if( $conn ){
		$product = json_decode(stripslashes($_POST['datas']),true);
		$product_type = stripslashes($product[0]['value']);
		$brand = stripslashes($product[1]['value']);
		$computer_glasses = stripslashes($product[2]['value']);
		$contact_lens = stripslashes($product[3]['value']);
		$prescription_lens = stripslashes($product[4]['value']);
		$prescription = stripslashes($product[5]['value']);
		$product_name = stripslashes($product[6]['value']);
		$product_description = stripslashes($product[7]['value']);
		$frame_type = stripslashes($product[8]['value']);
		$frame_shape = stripslashes($product[9]['value']);
		$frame_size = stripslashes($product[10]['value']);
		$frame_width = stripslashes($product[11]['value']);
		$frame_dimensions = stripslashes($product[12]['value']);
		$frame_colour = stripslashes($product[13]['value']);
		$weight = stripslashes($product[14]['value']);
		$weight_group = stripslashes($product[15]['value']);
		$frame_material = stripslashes($product[16]['value']);
		$frame_temple_material = stripslashes($product[17]['value']);
		$frame_temple_colour = stripslashes($product[18]['value']);
		$height = stripslashes($product[19]['value']);
		$condition = stripslashes($product[20]['value']);
		$gender = stripslashes($product[21]['value']);
		$product_warranty = stripslashes($product[22]['value']);
		$product_link = stripslashes($product[23]['value']);
		$model_no = stripslashes($product[24]['value']);
		
		$date = date("Y-m-d");

		if( $product_type == "computer glasses" ){
			$query = mysqli_query($conn, "INSERT INTO `products` VALUES('','$product_name','$product_description','$product_link','','$brand','$product_type','$computer_glasses','$prescription','$prescription_lens','$frame_type','$frame_shape','$model_no','$frame_size','$frame_width','$frame_dimensions','$frame_colour','$weight','$weight_group','$frame_material','$frame_temple_material','$product_warranty','$gender','$height','$condition','$frame_temple_colour','$date','$date','','',0)") or die(mysqli_error($conn));
		}
		$query = mysqli_query($conn, "INSERT INTO `products` VALUES('','$product_name','$product_description','$product_link','','$brand','$product_type','$computer_glasses','$prescription','$prescription_lens','$frame_type','$frame_shape','$model_no','$frame_size','$frame_width','$frame_dimensions','$frame_colour','$weight','$weight_group','$frame_material','$frame_temple_material','$product_warranty','$gender','$height','$condition','$frame_temple_colour','$date','$date','','',0)") or die(mysqli_error($conn));
		// if ( $query ) {				
		// 	$lastinsertid = mysqli_insert_id($conn);		
		// 	$response = array();				
		// 	header("Content-Type: JSON");
		// 	$response["status"] = true;
		// 	$response["userid"] = $predefinedid;
		// 	$response["password"] = $pwd;							
		// 	echo json_encode($response, JSON_PRETTY_PRINT);
			
		// }else{
		// 	$response = array();
		// 	header("Content-Type: JSON");
		// 	$response["status"] = false;									
		// 	$response["msg"] = "Server problem. Try again !";									
		// 	echo json_encode($response, JSON_PRETTY_PRINT);						
		// }			
	}else{
		// $response = array();
		// header("Content-Type: JSON");
		// $response["status"] = false;	
		// $response["msg"] = "Try again later !";									
		// echo json_encode($response, JSON_PRETTY_PRINT);		
	}

?>
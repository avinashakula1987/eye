<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");
	
	$conn = mysqli_connect("localhost", "joinfixitdt", "{@sPVA!am.JM", "joinfixitdt");
	
	if( $conn ){
		$fname = mysqli_real_escape_string($conn, $_POST['fname']);	
		$mobile = mysqli_real_escape_string($conn, $_POST['mobile']);	
		$pwd = mysqli_real_escape_string($conn, $_POST['password1']);	
		$predefinedid = mysqli_real_escape_string($conn, $_POST['predefinedid']);

		$check = mysqli_query($conn, "SELECT * FROM profile WHERE predefinedid='$predefinedid'");
		$count = mysqli_num_rows($check);
		if( $count == 0 ){
			$query = mysqli_query($conn, "INSERT INTO `profile` (`date`,`firstname`, `fmg`,  `dob`, `gender`, `mobile`, `email`, `adr`, `occu`, `caste`, `edc`, `gr`, `pm`, `yearofpass`, `un`, `image`, `ufile`, `oce`, `status`, `course`, `batch`, `location`, `coursefee`, `paid`, `balance`, `applicationreference`, `paiddate`, `paid2`, `paid3`, `paiddate2`, `paiddate3`, `fatheremail`, `fathermobile`, `fatheroccupation`, `term1alert`, `term2alert`, `term3alert`, `term1paymentstatus`, `term2paymentstatus`, `term3paymentstatus`, `facebookid`, `twitterid`, `joiningyear`, `materialgiven`, `password`, `paid4`, `paid5`, `paiddate4`, `paiddate5`, `predefinedid`, `course_category`, `expirydate`) VALUES(now(), '$fname', '', '', '', '$mobile', '', '', '', '', '', '', '', '', '', '', '', '', 1, '', '', '', '', '', '', '', now(), '', '', '', '', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '1', '0', '0', '', '', '', '', '$pwd', '', '', '', '', '$predefinedid', '', '2030-01-01')") or die(mysqli_error());
					
			if ( $query ) {				
				$lastinsertid = mysqli_insert_id($conn);		
				$username="lepakshifixit";
				$password="Social_123";
				$sender ="LFIXIT";		
				$message = "User Id: $predefinedid\nPassword: $pwd\nThank you for registering with Lepakshi Fixit. Contact. 9666777831\nwww.lepakshifixit.com";
				$url="desireit.bulksms5.com/sendmessage.php?user=".urlencode($username)."&password=".urlencode($password)."&mobile=".urlencode($mobile)."&message=".urlencode($message)."&sender=".urlencode($sender)."&type=".urlencode('3'); 						
				$ch = curl_init($url);					
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);							
				$curl_scraped_page = curl_exec($ch);		
				curl_close($ch);
				$msg = "You have Successfully Registered!<br>
				Your login credentials:<br>
				<b>Userid: $predefinedid</b><br>Password: <b>$pwd</b>";
				
				mail("$predefinedid", "Your account successfully created", "Hey Congrats! Your account in Lepakshifixit has successfully created! Userid: $predefinedid, Password: $password1", "From: info@lepakshifixit.com");
				$response = array();
				
				header("Content-Type: JSON");
				$response["status"] = true;
				$response["userid"] = $predefinedid;
				$response["password"] = $pwd;
							
				echo json_encode($response, JSON_PRETTY_PRINT);
				
			}else{
				$response = array();
				header("Content-Type: JSON");
				$response["status"] = false;									
				$response["msg"] = "Server problem. Try again !";									
				echo json_encode($response, JSON_PRETTY_PRINT);						
			}
		}else{
			$response = array();
			header("Content-Type: JSON");
			$response["status"] = false;	
			$response["msg"] = "Email Already Registered !";									
			echo json_encode($response, JSON_PRETTY_PRINT);		
		}		

		
			
	}else{
		$response = array();
		header("Content-Type: JSON");
		$response["status"] = false;	
		$response["msg"] = "Try again later !";									
		echo json_encode($response, JSON_PRETTY_PRINT);		
	}

?>
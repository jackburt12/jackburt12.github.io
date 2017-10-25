<?php

if(isset($_POST['name']) && isset($_POST['email'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$to = 'contact@jackburt.me.uk';
	$subject = $_POST['subject'];
	$body = '<html>
				<body>
					<p>Name:<br>'.$name.'</p>
					<p>Email<br>'.$email.'</p>
				</body>
			</html>'	

	$headers = "From: ".$name" <".$email.">\r\n";
	$headers .= "Reply-To: ".$email."\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8";

	$send = mail($to, $subject, $body, $headers);

	if($send) {
		echo '<br>';
		echo 'Thanks for contacting me. I will be with you shortly';
	} else {
		echo 'error';
	}
}

?>
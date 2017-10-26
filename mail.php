<?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "contact@jackburt.me.uk";

/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$name = $_REQUEST['name'];
$subject = $_REQUEST['subject'];
$email_address = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;

mail( "$webmaster_email", "$subject",
  "$message");
?>
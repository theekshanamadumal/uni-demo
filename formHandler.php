<?php

$name=$_POST['name'];
$visitorEmail=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];





$sendingEmail=$_POST['madusankah03289@gmail.com'];

$emailSubject=$_POST['New Form Submission'];

$emailBody="User Name: $name.\n". 
            "User Email: $visitorEmail.\n". 
            "Subject: $subject.\n". 
            "User Message: $message.\n" ;

$to="theekshana.18@cse.mrt.ac.lk ";

$headers="From: $sendingEmail \r\n";
$headers.="Reply-To: $visitorEmail \r\n";

mail($to,$emailSubject,$emailBody,$headers );
header("Location: contact.html");


?>





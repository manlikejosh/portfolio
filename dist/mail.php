<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$subject = "New message from your portfolio website!";

$mailHeader = "From:" . $name . "<" . $email . ">\r\n";

$recipient = "joshhodg8@gmail.com";

mail($recipient, $subject, $message, $mailHeader)
    or die("Error!");

echo "Message sent! :)";

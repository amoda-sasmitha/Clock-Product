<?php

    require 'mail/Exception.php';
    require 'mail/PHPMailer.php';
    require 'mail/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    header('Content-Type: application/json');

    $name = $_POST["name"];
    $contact = $_POST["contact"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $quantity = $_POST["quantity"];

    $msg = "<h2>Form Data<h2>";
    $msg  = $msg . "<h3>Name : " . $name . "<h3>" . "<h3>Contact : "  . $contact . "<h3>" . "<h3>Address : " . $address . "<h3>";
    $msg  = $msg . "<h3>Email : " . $email . "<h3>" . "<h3>Quantity : " . $quantity . "<h3>";
    
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.mailgun.org';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'postmaster@sandbox32ad18b1364e43aa823269c0560794db.mailgun.org';                     // SMTP username
        $mail->Password   = '3bce24f13dd7623d4559d1c36f1e02b5-a2b91229-2b6db7bb';                               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom('brandcleopatra@gmail.com', 'FORM DATA');
        $mail->addAddress('brandcleopatradefault@gmail.com');     // Add a recipient
     
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Form Data Submit';
        $mail->Body    = $msg;
    
        $mail->send();
      
        echo json_encode(array( "status" => "SUCCESS" , "message" => "Successfully Sent" ));
    } catch (Exception $e) {
    
        echo json_encode(array( "status" => "FAILED" , "message" => $mail->ErrorInfo ));
    }
?>
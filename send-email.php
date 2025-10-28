<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);
    
    try {
        // Zoho Mail SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.zoho.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'infor@smartechn.co.ke';
        $mail->Password = 'Drq3hVeP1fpH'; // Your App Password
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        
        // Sender & Recipient
        $mail->setFrom('infor@smartechn.co.ke', 'SmartTechn Website');
        $mail->addAddress('infor@smartechn.co.ke'); // Where emails will be received
        $mail->addReplyTo($_POST['email'], $_POST['name']);
        
        // Email Content
        $mail->isHTML(true);
        $mail->Subject = "Website Inquiry: " . $_POST['subject'];
        $mail->Body = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> " . htmlspecialchars($_POST['name']) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($_POST['email']) . "</p>
            <p><strong>Service Interest:</strong> " . htmlspecialchars($_POST['service']) . "</p>
            <p><strong>Message:</strong></p>
            <p>" . nl2br(htmlspecialchars($_POST['message'])) . "</p>
            <hr>
            <p><small>Sent from website contact form</small></p>
        ";
        
        if ($mail->send()) {
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Message could not be sent.']);
        }
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
<?php
  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $text = isset($_POST['text']) ? $_POST['text'] : '';
?>
<?php
  require_once 'includes/PHPMailer.php';
  require_once 'includes/SMTP.php';
  require_once 'includes/Exception.php';
  
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;
              
  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = "true";
  $mail->SMTPSecure = "tls";
  $mail->Port = "587";
  $mail->Username = "sartem.work@gmail.com";
  $mail->Password = "Artem13191";
  $mail->setFrom('sartem.work@gmail.com');
  $mail->addAddress("sartem.meshkov@gmail.com");
  if(!empty($name)) {
    $mail->Subject = "Message from portfolio";
    $mail->Body = "My name is: ". "$name". " and my email is: ". "$email". " i wanted to say: ". "$text";
    $mail->send();
  } else {
    $mail->Subject = "New visitor on site!";
    $mail->Body = "We have anew visitior on our site";
    $mail->send();
  }
$mail->smtpClose();
            ?>
  
<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';
require 'exception.php';

// $mail->SMTPDebug = 2;
// Настройки
$mail = new PHPMailer;
$mail->CharSet = "utf-8";
$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  


$mail->SMTPAuth = true;
$mail->Username = 'send.mail-order';
$mail->Password = 'nvkfyhghaqigepxp';
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;

$mail->setFrom('send.mail-order@yandex.ru');
//Куда
$mail->addAddress('cdkiev@yandex.ru');

// Письмо
$mail->isHTML(true);
$mail->Subject = "Сообщение с сайта `___`"; // Заголовок письма


$name = $_POST['name'];
$tel = $_POST['tel'];


if (isset($_POST[tel])) {
	$message = '<html>
	<body>
		<p>Клиент оставил завявку, свяжитесь для уточнения информации:</p>
		<p>Имя: <b>'.$name.'</b></p>
		<p>Телефон: <b>'.$tel.'</b></p>
		</body>
		
	</html>';
		$mail->Body    = 
    "$message
    " 
;}

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
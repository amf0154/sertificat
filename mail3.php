<?php
header("Content-type: text/html; charset=windows-1251");
print_r($_POST);
//if(isset($_POST['send-param']) && isset($_POST['name']) && isset($_POST['phone'])) {
if(1===1) {
	$username = ($_POST['name']);
	$message = ($_POST['message']);
       $phone = ($_POST['phone']);
 if (!empty($username) && !empty ($phone)){
$date = date("l dS of F Y h:I:s A");

if(mail('gleb@sgsrv.ru','333568', "РёРјСЏ: ".$username." ; С‚РµР»РµС„РѕРЅ: ".$phone." ; Р­Р».СЏС‰РёРє: ".$_POST['message'])) {
//	echo "Thank you ". $username . " ! Your message has been send!</br>";
echo "Запрос на получение купона получен! Сейчас Вы будете перенаправлены на главную страницу!";
header( 'Refresh: 2; url=http://stroimvse.pro/' );

	}
else {
	echo "Вы не заполнили необходимые поля.";
}

 	
 } /* konec proverki polei na vvod */
 else { echo "Ne zapolneni polya"; }
}
else {
	echo "купоны недоступны";
	}

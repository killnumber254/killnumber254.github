<?php
 
 if($_POST['nikNameValue']){
   $nik = $_POST['nikNameValue'];
 }
 
 $text = $_POST['text'];
 
 mail("$nik", '$text');
 echo '<p>Сообщение отправлено</p>'
 ?>

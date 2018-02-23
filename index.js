function closeSert() {
document.getElementById('bg_popup').style.display='none';
$("#bg_popup").hide();
$(document).mouseleave(function(){$('#bg_popup').hide();});
}

function sCookie() {
var date = new Date();
date.setTime(date.getTime() + (60 * 1000));
$.cookie("popup", "", {expires: date} );
$(document).mouseleave(function(){$('#bg_popup').hide();});
}


function getSert() {
document.getElementById("modal-content").innerHTML="<html><body><center><b>Для получения сертификата заполните форму</b></center><p></p><p><center><img src='http://stroimvse.pro/sites/all/themes/skeletontheme/images/sert1.png'></p><p><input type= 'text' id='n1' placeholder='имя' style='width: 110px' name= 'name'> <input type= 'text' placeholder='телефон' id='e1' style='width: 110px' name= 'phone'> <input type= 'text' placeholder='сообщение(не обязательно)' id='m1' style='width: 170px' name= 'message'></p><input name='myBtn' type= 'submit' style='width: 120px' value= 'отправить' onclick='send_mail();'></center></body></html>";

}


function send_mail(){
    if(autoValidate()){
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "/mail3.php";
    var fn = document.getElementById("n1").value;
    var ln = document.getElementById("e1").value;
    var m1 = document.getElementById("m1").value;
    var vars = "name="+fn+"&phone="+ln+"&message="+m1;
    hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		document.getElementById("modal-content").innerHTML = 'Запрос на получение сертификата отправлен!';
              sCookie();
              setTimeout(function(){
              document.getElementById('bg_popup').style.display='none';
              }, 2000);
             
 
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("modal-content").innerHTML = "Отправляем запрос...";
    } // end if for validation
}
function autoValidate() {  
    var name = document.getElementById("n1").value;
    var phone = document.getElementById("e1").value;
    if (name.trim() === "") {
        alert("Введите имя!");
        return false;
    }
    if (phone.trim() === "") {
        alert("Введите телефон!");
        return false;
    } 
    return true;
} 
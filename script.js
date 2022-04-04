function Spoiler() {
	var ele = document.getElementById("contentSpoiler");
	var text = document.getElementById("linkSpoiler");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "Подробнее";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}

function showHide(element_id) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) { 
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(element_id); 
        //Если css-свойство display не block, то: 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!"); 
}   


//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Корректно";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Пожалуйста, введите 2-20 символом";
        return false;
    }
}


//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Корректно";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Пожалуйста, введите 2-20 символов";
        return false;
    }
}

//Checking of Destination field E-mail
function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (regex.test(dest)) { // if testing of dest is true
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Корректно";
        return true;
    }
    else {// if it's not
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Некорректно";
        return false;
    }
}

//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    
    

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Корректно";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Некорректно";
        return false;
    }
}

//Checking of Last name field
function checkLast1() {
    var last = document.getElementById("message").value;
    var regex = /^[а-яА-Я\s]{5,200}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("message_Check").style.color = "green";
        document.getElementById("message_Check").innerHTML = "Корректно";
        return true;
    }
    else {// if it's not
        document.getElementById("message_Check").style.color = "red";
        document.getElementById("message_Check").innerHTML = "Пожалуйста, введите 5-200 символов";
        return false;
    }
}


function outputData() {
    

    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("phone").value;
    var phone = document.getElementById("dest").value;
    var message = document.getElementById("message").value;
   

    if (first != "" && last != "" && phone != "" && dest != "" && message!= "" ) {
        document.getElementById("summary").style.fontWeight="bold"; 
        document.getElementById("summary").innerHTML = "Ваше сообщение отправлено";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").style.fontWeight="bold"; 
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля...";
    }
}




function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

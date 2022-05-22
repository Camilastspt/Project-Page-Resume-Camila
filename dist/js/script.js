var accordion = $('#accordion');

accordion.children('h3').css({
	'background': '#E6E6FA',
  'border': '1px solid #DCDCDC'
});

accordion.children('div').css({
'background': '#FFFAF0',
'color': 'black',

});

// function checkCookies()
// {
// if (navigator.cookieEnabled==true)
// 	{
// 	alert("Cookies são permitidos")
// 	}
// else
// 	{
// 	alert("Cookies não são permitidos")
// 	}
// }

function bigImg(x) {
  x.style.height = "210px";
  x.style.width = "210px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

document.getElementById("nomecolor").onmouseover = function() {mouseOver()};
document.getElementById("nomecolor").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("nomecolor").style.color = "#A9A9A9";
}

function mouseOut() {
  document.getElementById("nomecolor").style.color = "#708090";
}

function redirectLinkedin() {
  
  if (confirm ("Você será direcionado para outro site")) { 
     window.location.href = "https://www.linkedin.com/in/srtamila05/";
}
else { 
    return false
}
} 

function redirectGithub() {
  
  if (confirm ("Você será direcionado para outro site")) { 
     window.location.href = "https://github.com/Camilastspt";
     }

else { 
    return false
}
}
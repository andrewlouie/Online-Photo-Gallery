pictures = new Array()
pictures[0] = new Array()
pictures[1] = new Array()
pictures[2] = new Array()
pictures[3] = new Array()
pictures[4] = new Array()
var topalbum = 0
var leftpic = 0
var albumstart = 0
var albumcount = 1
var albumend = 0
var totalalbums = 0
$(function(){

	xmlDoc=loadXMLDoc("Photos/config.xml");
x=xmlDoc.getElementsByTagName('image');
var imageArray = new Array();
var j=0;
var count = 0
for (i=x.length-1;i>0;i--)
{
pictures[0][j] = x[i].getAttribute('imageURL');
pictures[1][j] = x[i].getAttribute('thumbURL');
imageArray[j] = new Image();
imageArray[j].src = x[i].getAttribute('thumbURL');
pictures[2][j] = x[i].parentNode.getAttribute('name');
pictures[3][j] = x[i].getAttribute('cover');
if (pictures[2][j] != pictures[2][j-1]) { count = count + 1 }
pictures[4][j] = count;
j=j+1;
}

totalalbums = pictures[4][pictures[4].length - 1]
topalbum = 0;	
	var count = 1;
	for (i=0;i<pictures[0].length;i++) {
		if (((pictures[4][i] > topalbum) || (count2 > 0)) && ((pictures[3][i] == "yes") && (count < 6))) { 
			document.getElementById('aagroup' + count).src = imageArray[i].src;
			$('#aacaption' + count).html(pictures[2][i]);
			if (count + topalbum == totalalbums) { i = 0; var count2 = 1 }
			count = count + 1;
		 }
	}
setAlbum(1);
function setAlbum(num) {
albumcount = num + topalbum;
if (albumcount > totalalbums) { albumcount = Math.abs(totalalbums - topalbum - num) }
var count = 1;
leftpic = 0;
for (i=0;i<pictures[0].length;i++) {
	if (pictures[4][i] == albumcount) {
		albumstart = i;
		$('#aamaincaption').html(pictures[2][i]);
		$('#mainpiclink').attr("href",pictures[0][i]);
		document.getElementById('aapic' + count).src = imageArray[i].src
		while (pictures[4][i] == albumcount) { 
			if (count < 7) { $('#aapic' + count).attr("src",pictures[1][i]); }
			count = count + 1;
			i = i + 1;
			albumend = count;
		}
		setPic(1);
	}
} }
function setPic(num) {
if (pictures[4][leftpic + num + albumstart - 1] == albumcount)  { piccount = albumstart + num + leftpic - 1 }
else { piccount = albumstart + num + leftpic - albumend }
if ($('#aamainpic').attr("src") != pictures[0][piccount]) {
$('#test').css("display","block");
$('#aamainpic').attr("src",pictures[0][piccount]).load(function() {
$('#test').css("display","none").hide;
}); 
$('#mainpiclink').attr("href",pictures[0][piccount]);
} }
function moveUp() {
	  $('#aagroup1').addClass('moveup');
    $('#aagroup2').addClass('moveup');
   $('#aagroup3').addClass('moveup');
  $('#aagroup4').addClass('moveup');
 $('#aagroup5').addClass('moveup');
$('#group5').css("overflow", "hidden");
setTimeout(function moveUp2() {
	topalbum = topalbum - 1;
	if (topalbum < 0) { topalbum = totalalbums - 1 }
	var count = 1;
	for (i=0;i<pictures[0].length;i++) {
		if (((pictures[4][i] > topalbum) || (count2 > 0)) && ((pictures[3][i] == "yes") && (count < 6))) { 
			document.getElementById('aagroup' + count).src = imageArray[i].src;
			$('#aacaption' + count).html(pictures[2][i]);
			if (count + topalbum == totalalbums) { i = 0; var count2 = 1 }
			count = count + 1;
		 }
	}
	  $('#aagroup1').removeClass('moveup');
    $('#aagroup2').removeClass('moveup');
   $('#aagroup3').removeClass('moveup');
  $('#aagroup4').removeClass('moveup');
 $('#aagroup5').removeClass('moveup');
 $('#group5').css("overflow", "visible");
 }, 150)
}
function moveDown() {
		  $('#aagroup1').addClass('movedown');
    $('#aagroup2').addClass('movedown');
   $('#aagroup3').addClass('movedown');
  $('#aagroup4').addClass('movedown');
 $('#aagroup5').addClass('movedown');
$('#group1').css("overflow", "hidden");
setTimeout(function moveDown2() {
		topalbum = topalbum + 1;
	if (topalbum == totalalbums) { topalbum = 0 }
	var count = 1;
	for (i=0;i<pictures[0].length;i++) {
		if (((pictures[4][i] > topalbum) || (count2 > 0)) && ((pictures[3][i] == "yes") && (count < 6))) { 
			document.getElementById('aagroup' + count).src = imageArray[i].src;
			$('#aacaption' + count).html(pictures[2][i]);
			if (count + topalbum == totalalbums) { i = 0; var count2 = 1 }
			count = count + 1;
		 }
	}
		  $('#aagroup1').removeClass('movedown');
    $('#aagroup2').removeClass('movedown');
   $('#aagroup3').removeClass('movedown');
  $('#aagroup4').removeClass('movedown');
 $('#aagroup5').removeClass('movedown');
 $('#group1').css("overflow", "visible");
 }, 150)
}
function moveLeft() {
  $('#aapic1').addClass('moveleft');
    $('#aapic2').addClass('moveleft');
   $('#aapic3').addClass('moveleft');
  $('#aapic4').addClass('moveleft');
 $('#aapic5').addClass('moveleft');
$('#div5').css("overflow", "hidden");
setTimeout(function moveLeft2() {
	leftpic = leftpic - 1
	var count = 0;
	var count2 = 0;
	if (leftpic < 0) { leftpic = albumend - 2 }
	while (count < 5) {
		if (pictures[4][count + albumstart + leftpic] == albumcount) { 
			document.getElementById('aapic' + (count + 1)).src = imageArray[count + albumstart + leftpic].src;
		}
		else {		
			document.getElementById('aapic' + (count + 1)).src = imageArray[albumstart + count2].src;
			count2 = count2 + 1;
		}
		count = count + 1;
	}
  $('#aapic1').removeClass('moveleft');
    $('#aapic2').removeClass('moveleft');
   $('#aapic3').removeClass('moveleft');
  $('#aapic4').removeClass('moveleft');
 $('#aapic5').removeClass('moveleft');
 $('#div5').css("overflow", "visible");
}, 150)
}
function moveRight() {
	  $('#aapic1').addClass('moveright');
    $('#aapic2').addClass('moveright');
   $('#aapic3').addClass('moveright');
  $('#aapic4').addClass('moveright');
 $('#aapic5').addClass('moveright');
 // $('#aapic6').addClass('noclip');
 $('#div1').css("overflow", "hidden");
//$('#aapic6').css("display", "inline-block");
setTimeout(function moveRight2() {
	leftpic = leftpic + 1
	var count = 0;
	var count2 = 0;
	if (albumend == leftpic) { leftpic = 1 }
	while (count < 5) {
		if (pictures[4][count + albumstart + leftpic] == albumcount) { 
			document.getElementById('aapic' + (count + 1)).src = imageArray[count + albumstart + leftpic].src;
		}
		else {
			document.getElementById('aapic' + (count + 1)).src = imageArray[albumstart + count2].src;
			count2 = count2 + 1;
		}
		count = count + 1;
	}
  $('#aapic1').removeClass('moveright');
    $('#aapic2').removeClass('moveright');
   $('#aapic3').removeClass('moveright');
  $('#aapic4').removeClass('moveright');
 $('#aapic5').removeClass('moveright');
 
 $('#div1').css("overflow", "visible");
// $('#aapic6').css("display", "none");
 //$('#div5').css("overflow", "visible");
}, 150)
}
$( "#aagroupl1" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setAlbum(1); });
$( "#aagroupl2" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setAlbum(2); });
$( "#aagroupl3" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setAlbum(3); });
$( "#aagroupl4" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setAlbum(4); });
$( "#aagroupl5" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setAlbum(5); });
$( "#setpic1" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setPic(1); });
$( "#setpic2" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setPic(2); });
$( "#setpic3" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setPic(3); });
$( "#setpic4" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setPic(4); });
$( "#setpic5" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } setPic(5); });
$( "#aacup" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } moveUp(); });
$( "#aacdown" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } moveDown(); });
$( "#aacleft" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } moveLeft(); });
$( "#aacright" ).click(function(event) { if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } moveRight(); });
});

function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
}
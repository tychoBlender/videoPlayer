/* Author: Danny Castillo for TEAK */
function swapViewer(imgSRC, pName, vName)
{

var viewC = document.getElementById('viewContainer');
var pTitle = document.getElementById('projectTitle');
var vTitle = document.getElementById('videoTitle');
	
viewC.innerHTML = '<img src="assets/'+ imgSRC +'" />';
pTitle.innerHTML = pName;
vTitle.innerHTML = vName;
	
/*if (document.getElementById('staticFPO').style.display == 'block')
{
	console.log(divID, buttonid);
	//document[buttonid].src = "creative/show.gif";
} else{
	return;
}*/
}

function toggleDiv(divid,buttonid)
{	
	var myVideo = document.getElementsByTagName('video')[0];
	
	if (document.getElementById(divid).style.display == 'block')
	{
		document.getElementById(divid).style.display = 'none';
		//document[buttonid].src = "creative/show.gif";
	} else{
		document.getElementById(divid).style.display = 'block';
		//document[buttonid].src = "creative/hide.gif";
	}
}

function playPause() 
{
	var myVideo = document.getElementsByTagName('video')[0];
	if (myVideo.paused)
	   myVideo.play();
	else
	   myVideo.pause();
}

function goFullscreen() 
{
	var myPlayer = document.getElementById('viewContainer');
	//myPlayer.webkitRequestFullScreen();
}

function makeNormal() 
{
	var myVideo = document.getElementsByTagName('video')[0];
	myVideo.height = (myVideo.videoHeight) ;
}


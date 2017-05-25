//Braden Ackles
//Youtube API Script

//create a variable for the elementFromPoint
	var video = document.createElement('script');
	
//point to the source
	video.src = "https://www.youtube.com/iframe_api";

//get the video in the document by tag name
	var firstTag = document.getElementsByTagName('script')[0];
	
//Where to put the video
	firstTag.parentNode.insertBefore(video, firstTag);
	
//Create the player
	var player;
	
//Control the player function
	function onYouTubeIframeAPIReady() {
		player =  new YT.Player('videoDiv',{
				height:	 	'360',
				width:		'480',
				videoId: 	'ANzNCpsXrK4',
		})
	}
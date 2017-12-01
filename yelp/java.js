function searchFn(){
	if(document.getElementById('myInput').value == "dog"){
		window.open("https://www.omfgdogs.com");
	}
	else{
		alert("Sorry, javascript is annoying and won't let you open local files, so the search function is broken. Thank you, Oracle!");
	}
}

function doFirst(){
	barSize=630;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');
	restart-document.getElementById('restartButton')
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	playButton.addEventListener('click', playOrPause, false);
	restart.addEventListener('click', restart, false);
	bar.addEventListener('click', clickedBar, false);
	
	
	barSize1=430;	
	myMovie1=document.getElementById('myMovie1');
	playButton1=document.getElementById('playButton1');
	bar1=document.getElementById('defaultBar1');
	progressBar1=document.getElementById('progressBar1');
	playButton1.addEventListener('click', playOrPause1, false);
	bar1.addEventListener('click', clickedBar1, false);
	
	barSize2=430;	
	myMovie2=document.getElementById('myMovie2');
	playButton2=document.getElementById('playButton2');
	bar2=document.getElementById('defaultBar2');
	progressBar2=document.getElementById('progressBar2');
	playButton2.addEventListener('click', playOrPause2, false);
	bar2.addEventListener('click', clickedBar2, false);
	
	barSize3=430;	
	myMovie3=document.getElementById('myMovie3');
	playButton3=document.getElementById('playButton3');
	bar3=document.getElementById('defaultBar3');
	progressBar3=document.getElementById('progressBar3');
	playButton3.addEventListener('click', playOrPause3, false);
	bar3.addEventListener('click', clickedBar3, false);
	
	barSize4=440;	
	myMovie4=document.getElementById('myMovie4');
	playButton4=document.getElementById('playButton4');
	bar4=document.getElementById('defaultBar4');
	progressBar4=document.getElementById('progressBar4');
	playButton4.addEventListener('click', playOrPause4, false);
	bar4.addEventListener('click', clickedBar4, false);
	
	barSize5=450;	
	myMovie5=document.getElementById('myMovie5');
	playButton5=document.getElementById('playButton5');
	bar5=document.getElementById('defaultBar5');
	progressBar5=document.getElementById('progressBar5');
	playButton5.addEventListener('click', playOrPause5, false);
	bar5.addEventListener('click', clickedBar5, false);
	
	barSize6=460;	
	myMovie6=document.getElementById('myMovie6');
	playButton6=document.getElementById('playButton6');
	bar6=document.getElementById('defaultBar6');
	progressBar6=document.getElementById('progressBar6');
	playButton6.addEventListener('click', playOrPause6, false);
	bar6.addEventListener('click', clickedBar6, false);
	
	barSize7=470;	
	myMovie7=document.getElementById('myMovie7');
	playButton7=document.getElementById('playButton7');
	bar7=document.getElementById('defaultBar7');
	progressBar7=document.getElementById('progressBar7');
	playButton7.addEventListener('click', playOrPause7, false);
	bar7.addEventListener('click', clickedBar7, false);
	
	barSize8=480;	
	myMovie8=document.getElementById('myMovie8');
	playButton8=document.getElementById('playButton8');
	bar8=document.getElementById('defaultBar8');
	progressBar8=document.getElementById('progressBar8');
	playButton8.addEventListener('click', playOrPause8, false);
	bar8.addEventListener('click', clickedBar8, false);
	
	barSize9=490;	
	myMovie9=document.getElementById('myMovie9');
	playButton9=document.getElementById('playButton9');
	bar9=document.getElementById('defaultBar9');
	progressBar9=document.getElementById('progressBar9');
	playButton9.addEventListener('click', playOrPause9, false);
	bar9.addEventListener('click', clickedBar9, false);
	}

	function playOrPause(){
		if(!myMovie.paused && !myMovie.ended){
			myMovie.pause();
			playButton.innerHTML='Play';
			window.clearInterval(updateBar);
		}
		else{
			myMovie.play();
			playButton.innerHTML='Pause';
			updateBar=setInterval(update, 500);
		}	
	}
	
	function update(){
		if(!myMovie.paused && !myMovie.ended){
			var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
			progressBar.style.width=size+'px';
		}
		else{
			progresBar.style.width='0px';
			playButton.innerHTML='Play';
			window.clearInterval(updateBar);
		}
	}

	function clickedBar(e){
		
			var mouseX=e.pageX-bar.offsetLeft;
			var newtime=mouseX*myMovie.duration/barSize;
			myMovie.currentTime=newtime;
			progressBar.style.width=mouseX+'px';
			myMovie.play();
	}
	
	
	//------------------------------------------
	
	function playOrPause1(){
		if(!myMovie1.paused && !myMovie1.ended){
			myMovie1.pause();
			playButton1.innerHTML='Play';
			window.clearInterval(updateBar1);
		}
		else{
			myMovie1.play();
			playButton1.innerHTML='Pause';
			updateBar1=setInterval(update1, 500);
		}	
	}

	function update1(){
		if(!myMovie1.paused && !myMovie1.ended){
			var size1=parseInt(myMovie1.currentTime1*barSize1/myMovie1.duration);
			progressBar1.style.width=size1+'px';
		}
		else{
			progresBar1.style.width='0px';
			playButton1.innerHTML='Play';
			window.clearInterval(updateBar1);
		}
	}

	function clickedBar1(e){
		
			var mouseX1=e.pageX-bar1.offsetLeft;
			var newtime1=mouseX1*myMovie1.duration/barSize1;
			myMovie1.currentTime1=newtime1;
			progressBar1.style.width=mouseX1+'px';
			myMovie1.play();
	}
	
	//------------------------------------------
	
	function playOrPause2(){
		if(!myMovie2.paused && !myMovie2.ended){
			myMovie2.pause();
			playButton2.innerHTML='Play';
			window.clearInterval(updateBar2);
		}
		else{
			myMovie2.play();
			playButton2.innerHTML='Pause';
			updateBar2=setInterval(update2, 500);
		}	
	}

	function update2(){
		if(!myMovie2.paused && !myMovie2.ended){
			var size2=parseInt(myMovie2.currentTime2*barSize2/myMovie2.duration);
			progressBar2.style.width=size2+'px';
		}
		else{
			progresBar2.style.width='0px';
			playButton2.innerHTML='Play';
			window.clearInterval(updateBar2);
		}
	}

	function clickedBar2(e){
		
			var mouseX2=e.pageX-bar2.offsetLeft;
			var newtime2=mouseX2*myMovie2.duration/barSize2;
			myMovie2.currentTime2=newtime2;
			progressBar2.style.width=mouseX2+'px';
			myMovie2.play();
	}
	
	//------------------------------------------
	
	function playOrPause3(){
		if(!myMovie3.paused && !myMovie3.ended){
			myMovie3.pause();
			playButton3.innerHTML='Play';
			window.clearInterval(updateBar3);
		}
		else{
			myMovie3.play();
			playButton3.innerHTML='Pause';
			updateBar3=setInterval(update3, 500);
		}	
	}

	function update3(){
		if(!myMovie3.paused && !myMovie3.ended){
			var size3=parseInt(myMovie3.currentTime3*barSize3/myMovie3.duration);
			progressBar3.style.width=size3+'px';
		}
		else{
			progresBar3.style.width='0px';
			playButton3.innerHTML='Play';
			window.clearInterval(updateBar3);
		}
	}

	function clickedBar3(e){
		
			var mouseX3=e.pageX-bar3.offsetLeft;
			var newtime3=mouseX3*myMovie3.duration/barSize3;
			myMovie3.currentTime3=newtime3;
			progressBar3.style.width=mouseX3+'px';
			myMovie3.play();
	}
	
	//------------------------------------------
	
	function playOrPause4(){
		if(!myMovie4.paused && !myMovie4.ended){
			myMovie4.pause();
			playButton4.innerHTML='Play';
			window.clearInterval(updateBar4);
		}
		else{
			myMovie4.play();
			playButton4.innerHTML='Pause';
			updateBar4=setInterval(update4, 500);
		}	
	}

	function update4(){
		if(!myMovie4.paused && !myMovie4.ended){
			var size4=parseInt(myMovie4.currentTime4*barSize4/myMovie4.duration);
			progressBar4.style.width=size4+'px';
		}
		else{
			progresBar4.style.width='0px';
			playButton4.innerHTML='Play';
			window.clearInterval(updateBar4);
		}
	}

	function clickedBar4(e){
		
			var mouseX4=e.pageX-bar4.offsetLeft;
			var newtime4=mouseX4*myMovie4.duration/barSize4;
			myMovie4.currentTime4=newtime4;
			progressBar4.style.width=mouseX4+'px';
			myMovie4.play();
	}
	
	//------------------------------------------
	
	function playOrPause5(){
		if(!myMovie5.paused && !myMovie5.ended){
			myMovie5.pause();
			playButton5.innerHTML='Play';
			window.clearInterval(updateBar5);
		}
		else{
			myMovie5.play();
			playButton5.innerHTML='Pause';
			updateBar5=setInterval(update5, 500);
		}	
	}

	function update5(){
		if(!myMovie5.paused && !myMovie5.ended){
			var size5=parseInt(myMovie5.currentTime5*barSize5/myMovie5.duration);
			progressBar5.style.width=size5+'px';
		}
		else{
			progresBar5.style.width='0px';
			playButton5.innerHTML='Play';
			window.clearInterval(updateBar5);
		}
	}

	function clickedBar5(e){
		
			var mouseX5=e.pageX-bar5.offsetLeft;
			var newtime5=mouseX5*myMovie5.duration/barSize5;
			myMovie5.currentTime5=newtime5;
			progressBar5.style.width=mouseX5+'px';
			myMovie5.play();
	}
	
	//------------------------------------------
	
	function playOrPause6(){
		if(!myMovie6.paused && !myMovie6.ended){
			myMovie6.pause();
			playButton6.innerHTML='Play';
			window.clearInterval(updateBar6);
		}
		else{
			myMovie6.play();
			playButton6.innerHTML='Pause';
			updateBar6=setInterval(update6, 500);
		}	
	}

	function update6(){
		if(!myMovie6.paused && !myMovie6.ended){
			var size6=parseInt(myMovie6.currentTime6*barSize6/myMovie6.duration);
			progressBar6.style.width=size6+'px';
		}
		else{
			progresBar6.style.width='0px';
			playButton6.innerHTML='Play';
			window.clearInterval(updateBar6);
		}
	}

	function clickedBar6(e){
		
			var mouseX6=e.pageX-bar6.offsetLeft;
			var newtime6=mouseX6*myMovie6.duration/barSize6;
			myMovie6.currentTime6=newtime6;
			progressBar6.style.width=mouseX6+'px';
			myMovie6.play();
	}
	
	//------------------------------------------
	
	function playOrPause7(){
		if(!myMovie7.paused && !myMovie7.ended){
			myMovie7.pause();
			playButton7.innerHTML='Play';
			window.clearInterval(updateBar7);
		}
		else{
			myMovie7.play();
			playButton7.innerHTML='Pause';
			updateBar7=setInterval(update7, 500);
		}	
	}

	function update7(){
		if(!myMovie7.paused && !myMovie7.ended){
			var size7=parseInt(myMovie7.currentTime7*barSize7/myMovie7.duration);
			progressBar7.style.width=size7+'px';
		}
		else{
			progresBar7.style.width='0px';
			playButton7.innerHTML='Play';
			window.clearInterval(updateBar7);
		}
	}

	function clickedBar7(e){
		
			var mouseX7=e.pageX-bar7.offsetLeft;
			var newtime7=mouseX7*myMovie7.duration/barSize7;
			myMovie7.currentTime7=newtime7;
			progressBar7.style.width=mouseX7+'px';
			myMovie7.play();
	}
	
	//------------------------------------------
	
	function playOrPause8(){
		if(!myMovie8.paused && !myMovie8.ended){
			myMovie8.pause();
			playButton8.innerHTML='Play';
			window.clearInterval(updateBar8);
		}
		else{
			myMovie8.play();
			playButton8.innerHTML='Pause';
			updateBar8=setInterval(update8, 500);
		}	
	}

	function update8(){
		if(!myMovie8.paused && !myMovie8.ended){
			var size8=parseInt(myMovie8.currentTime8*barSize8/myMovie8.duration);
			progressBar8.style.width=size8+'px';
		}
		else{
			progresBar8.style.width='0px';
			playButton8.innerHTML='Play';
			window.clearInterval(updateBar8);
		}
	}

	function clickedBar8(e){
		
			var mouseX8=e.pageX-bar8.offsetLeft;
			var newtime8=mouseX8*myMovie8.duration/barSize8;
			myMovie8.currentTime8=newtime8;
			progressBar8.style.width=mouseX8+'px';
			myMovie8.play();
	}
	
	//------------------------------------------
	
	function playOrPause9(){
		if(!myMovie9.paused && !myMovie9.ended){
			myMovie9.pause();
			playButton9.innerHTML='Play';
			window.clearInterval(updateBar9);
		}
		else{
			myMovie9.play();
			playButton9.innerHTML='Pause';
			updateBar9=setInterval(update9, 500);
		}	
	}

	function update9(){
		if(!myMovie9.paused && !myMovie9.ended){
			var size9=parseInt(myMovie9.currentTime9*barSize9/myMovie9.duration);
			progressBar9.style.width=size9+'px';
		}
		else{
			progresBar9.style.width='0px';
			playButton9.innerHTML='Play';
			window.clearInterval(updateBar9);
		}
	}

	function clickedBar9(e){
		
			var mouseX9=e.pageX-bar9.offsetLeft;
			var newtime9=mouseX9*myMovie9.duration/barSize9;
			myMovie9.currentTime9=newtime9;
			progressBar9.style.width=mouseX9+'px';
			myMovie9.play();
	}
	window.addEventListener('load',doFirst,false);
	
var isstop=false;
$("body").keydown(function(e){
	console.log("user clicks key "+e.keyCode);
	var key=keys[e.keyCode];
	if(stage==1){
		if(key=="Enter"){
			stage++;
			clearInterval(interval);
			interval=setInterval(startgame,speed);
		}
	}else if(stage==2){
		var tmp=map[e.keyCode];
		if(tmp!=undefined&&moved==false) snake.setdir(tmp);
		if(key=="C") nowtext=[];
		if(key=="P") score++;
		if(key=="M") apple.move();
		if(key=="B"){
			if(isstop==true){
				isstop=false;
				interval=setInterval(startgame,speed);
			}else{
				isstop=true;
				clearInterval(interval);
			}
		}
	}else if(stage==3){
		if(key=="Enter") aftergame();
		if(key=="Space"){
			stage++;
			thanks();
		}
	}
});

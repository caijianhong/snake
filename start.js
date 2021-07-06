var ctx=$("#canvas")[0].getContext("2d");
var score=0;
var moved=false;
var snake=new Snake();
var apple=new Apple();
var interval=setInterval(function(){
	moved=false;
	if(score>=6) win();
	var img=new Image();
	img.src="img/grade"+(score+1)+".jpg";
	img.onload=function(){
		ctx.clearRect(0,0,height,width);
		ctx.drawImage(img,0,0,width,height);
		drawstar();
		drawtext();
		snake.move();
		apple.draw();
		snake.draw();
	}
},speed);
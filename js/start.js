var ctx=$("#canvas")[0].getContext("2d");
var score=0;
var moved=false;
var snake=new Snake();
var apple=new Apple();
var stage=1;
var interval=null;
var beforegame=function(){
	ctx.font="30px consolas";
	ctx.textBaseline="top";
	ctx.textAlign="left";
	ctx.fillStyle="black";
	ctx.fillText("光阴似箭，日月如梭。",10,10);
	ctx.fillText("眨眼间，六年的小学时光就从我们的欢笑声中恍恍惚惚地走过。",10,60);
	ctx.fillText("我们还没有时间去慢慢地回忆在这六年间发生的大大小小许多事。",10,110);
	ctx.fillText("这次，靠着这个毕业联欢会，我们一起从刚踏入小学那一刻起慢慢回忆。",10,160);
	setTimeout(function(){
		ctx.font="30px consolas";
		ctx.textBaseline="bottom";
		ctx.textAlign="right";
		ctx.fillStyle="black";
		ctx.fillText("Enter>>>",width,height);
	},2000);
}
var startgame=function(){
	moved=false;
	if(score>=6) win();
	var img=new Image();
	img.src="img/grade"+(score+1)+".jpg";
	img.onload=function(){
		ctx.clearRect(0,0,width,height);
		ctx.drawImage(img,0,0,width,height);
		drawstars();
		drawbarrages();
		snake.move();
		apple.draw();
		snake.draw();
	}
}
var aftergame=function(){
	
}
interval=setInterval(beforegame,2000);

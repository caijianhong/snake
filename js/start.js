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
var cnt=1,times=0;
var startgame=function(){
	moved=false;
	if(score>=scorelimits) win();
	var img=new Image();
	img.src="mem/memory"+cnt+".jpg";
	img.onload=function(){
		ctx.clearRect(0,0,width,height);
		times++;
		if(times>=40){
			times=0;
			cnt=(cnt+1)%memorylimits;
			if(cnt==0) cnt=memorylimits;
		}
		ctx.drawImage(img,0,0,width,height);
		drawstars();
		snake.move();
		apple.draw();
		snake.draw();
	}
}
var win=function(){
	stage++;
	clearInterval(interval);
	setTimeout(function(){
		drawendtitle();
	},2000);
}
var aftergame=function(){
	nowbarrages=[];
	var interval=setInterval(function(){
		var img=new Image();
		img.src="mem/memory_last.jpg";
		img.onload=function(){
			ctx.clearRect(0,0,width,height);
			ctx.drawImage(img,0,0,width,height);
			drawbarrages();
		}
	},speed);
	setTimeout(function(){
		clearInterval(interval);
		drawendtitle();
	},20000);
}
var thanks=function(){
	ctx.clearRect(0,0,width,height);
	ctx.font="30px consolas";
	ctx.textBaseline="top";
	ctx.textAlign="left";
	ctx.fillStyle="black";
	ctx.fillText("结束了六年的小学生活，",10,10);
	ctx.fillText("我们即将踏入新的中学生活，",10,60);
	ctx.fillText("祝所有同学们前程似锦，福如东海，",10,110);
	ctx.fillText("考试蒙的全对，做的全会。",10,160);
	ctx.fillText("谢谢！",10,210);
}
interval=setInterval(beforegame,2000);

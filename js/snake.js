//const numbers
const width=500,height=500,bsize=10;
const n=width/bsize,m=height/bsize;
const speed=100;
const start=[[6,1],[5,1],[4,1],[3,1],[2,1],[1,1]];
const alerts=[
	"我是幼苗，你是雨露，滋润我干涸的心田。我是小草，你是太阳，照耀我成长的路。",
	"如果生活里没有老师，就好像万物没有阳光；如果智慧里没有老师，就好像鸟儿没有翅膀。",
	"十年前，我想成为您，因为您照明了我的人生；十年后，我成为了您，所以照亮了别人的人生。",
	"您的工作在今朝，却建设着祖国的明天；您的教学在课堂，成就却是在祖国的四面八方。",
	"三尺讲台站八斗学士，学士含辛育学子；一尺课桌载千秋之梦，千万银丝托伟业。",
	"相处虽短，涌泉终生。授课有限，获益无穷。佳节思亲，感恩激情。老师，您是最可敬的人。",
	"世界上有一种情，超越了亲情、友情，那就是老师对我们无微不至的关怀之情，对我们细心的教导之情。",	
	"教书一分育人，赢得十分尊敬，社会百分爱师，浙江千分重教，师生万分幸福!",
	"高山在欢呼，流水在歌唱；太阳在欢笑，小草在舞蹈：赞美您，为人师表，劳苦功高!",
	"从力的角度分析，您是我们的源动力；我们会用更快更强的加速度，冲击知识的高峰。",
	"您的亲切眼神，如片片云朵，飘在我心灵的晴空上。您的娓娓教导，似潺潺清泉，流在我生命的河床里。",
	"言行上体现老师教导的道理，工作中运用老师传授的知识，人生中永远记住老师的恩情。"
];
//block
var Block=function(x,y){
	this.x=x;
	this.y=y;
}
Block.prototype.draws=function(color){
	ctx.fillStyle=color;
	ctx.fillRect(this.x*bsize,this.y*bsize,bsize,bsize);
}
Block.prototype.drawc=function(color){
	ctx.fillStyle=color;
	ctx.beginPath();
	var x=this.x*bsize+bsize/2,y=this.y*bsize+bsize/2;
	ctx.arc(x,y,bsize/2,Math.PI*2,false);
	ctx.fill();
}
Block.prototype.equ=function(b){
	return this.x==b.x&&this.y==b.y;
}
Block.prototype.check=function(){
	return 0<=this.x&&this.x<n&&0<=this.y&&this.y<m;
}
Block.prototype.rand=function(){
	this.x=Math.floor(Math.random()*(n-2))+1;
	this.y=Math.floor(Math.random()*(m-2))+1;
}
//snake
var Snake=function(){
	this.a=[];
	for(var i=0;i<start.length;i++){
		this.a.push(new Block(start[i][0],start[i][1]));
	}
	this.dir=3;
	this.nxtdir=3;
}
Snake.prototype.draw=function(){
	this.a[0].drawc("red");
	for(var i=1;i<this.a.length;i++){
		this.a[i].drawc("blue");
	}
}
const dx=[0,0,-1,1,0],dy=[0,-1,0,0,1];
Snake.prototype.move=function(){
	var now=this.a[0];
	var nxt=new Block(now.x+dx[this.dir],now.y+dy[this.dir]);
	var checker=!nxt.check();
	for(var i=0;i<this.a.length;i++){
		if(nxt.equ(this.a[i])) checker=true;
	}
	if(checker){
		gameover();
		return ;
	}
	this.a.unshift(nxt);
	if(nxt.equ(apple.pos)){
		score++;
		$("#txt").text(alerts[Math.floor(Math.random()*alerts.length)]);
		$("#imgs").append("<img src='img/star.jpg'/>");
		if(score<6) apple.move();
	}else{
		this.a.pop();
	}
}
Snake.prototype.setdir=function(newdir){
	if(newdir+this.dir==5) return ;
	this.dir=newdir;
	moved=true;
}
//apple
var Apple=function(){
	this.pos=new Block(0,0);
	var flag=true;
	while(flag){
		this.pos.rand();
		flag=false;
		for(var i=0;i<snake.a.length;i++){
			if(this.pos.equ(snake.a[i])) flag=true;
		}
	}
}
Apple.prototype.draw=function(){
	this.pos.drawc("limegreen");
}
Apple.prototype.move=function(){
	var flag=true;
	while(flag){
		this.pos.rand();
		flag=false;
		for(var i=0;i<snake.a.length;i++){
			if(this.pos.equ(snake.a[i])) flag=true;
		}
	}
}
//other functions
const grade="一二三四五六六";
var drawscore=function(){
	ctx.font="30px consolas";
	ctx.textBaseline="top";
	ctx.fillStyle="gray";
	ctx.fillText(grade[score]+"年级",5,5);
}
var gameover=function(){
	clearInterval(interval);
	alert("你失败了！");
}
var win=function(){
	clearInterval(interval);
	var img=new Image();
	img.src="img/end.jpg";
	img.onload=function(){
		$("#txt").text("我们毕业啦！");
		$("#imgs").empty();
		ctx.clearRect(0,0,height,width);
		ctx.drawImage(img,0,0,width,height);
	}
}
//init
//var ctx=document.getElementById("canvas").getContext("2d");
var ctx=$("#canvas")[0].getContext("2d");
var score=0;
var moved=false;
var snake=new Snake();
var apple=new Apple();
var interval=setInterval(function(){
	moved=false;
	var img=new Image();
	img.src="img/grade"+(score+1)+".jpg";
	img.onload=function(){
		ctx.clearRect(0,0,height,width);
		ctx.drawImage(img,0,0,width,height);
		drawscore();
		snake.move();
		apple.draw();
		snake.draw();
		if(score>=6) win();
	}
},speed);
//listener
var map={
	37:2,38:1,39:3,40:4,//左上右下
	87:1,65:2,83:4,68:3 //WASD
};
$("body").keydown(function(e){
	console.log(e.keyCode);
	var tmp=map[e.keyCode];
	if(tmp!=undefined&&moved==false) snake.setdir(tmp);
	if(e.keyCode==81) apple.move();
})

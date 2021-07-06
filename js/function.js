var gameover=function(){
	clearInterval(interval);
	alert("你失败了！");
}
var win=function(){
	console.log("win!");
	clearInterval(interval);
	var img=new Image();
	img.src="img/end.jpg";
	img.onload=function(){
		ctx.clearRect(0,0,height,width);
		ctx.drawImage(img,0,0,width,height);
	}
}
var drawstar=function(){
	var img=new Image();
	img.src="img/star.png";
	img.onload=function(){
		var y=0;
		for(var i=0;i<score+1;i++){
			ctx.drawImage(img,y,0);
			y+=100;
		}
	}
}
var Text=function(x,y,t,c){
	this.x=x;
	this.y=y;
	this.t=t;
	this.c=c;
}
Text.prototype.draw=function(){
	this.x-=20;
	ctx.font="15px consolas";
	ctx.textBaseline="top";
	ctx.textAlign="right";
	ctx.fillStyle=this.c;
	ctx.fillText(this.t,this.x,this.y);
	if(this.x<0) return true;
	return false;
}
var nowtext=[];
var drawtext=function(){
	if(Math.random()<0.03){
		nowtext.push(new Text(
			width+100,
			Math.floor(Math.random()*height),
			texts[Math.floor(Math.random()*texts.length)],
			colors[Math.floor(Math.random()*colors.length)]
		));
	}
	for(var i=0;i<nowtext.length;i++){
		if(nowtext[i].draw()) nowtext.splice(i,1);
	}
}
var gameover=function(){
	clearInterval(interval);
	ctx.font="30px consolas";
	ctx.textBaseline="top";
	ctx.textAlign="left";
	ctx.fillStyle="black";
	ctx.fillText("游戏失败，3 秒后重新开始......",10,height-50);
	setTimeout(function(){
		window.location.reload();
	},3000);
}
var win=function(){
	console.log("win!");
	stage++;
	clearInterval(interval);
	var img=new Image();
	img.src="img/end.jpg";
	img.onload=function(){
		ctx.clearRect(0,0,height,width);
		ctx.drawImage(img,0,0,width,height);
	}
}
var drawstar=function(x,y){
	var R=50,r=20;
	ctx.beginPath();
	for(var i=0;i<5;i++){
	    ctx.lineTo(Math.cos((18+i*72)/180*Math.PI)*R+x,
	               -Math.sin((18+i*72)/180*Math.PI)*R+y);
	    ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*r+x,
	               -Math.sin((54+i*72)/180*Math.PI)*r+y);
	}   
	ctx.closePath();
	ctx.lineWidth="3";
	ctx.fillStyle="#F6F152";
	ctx.strokeStyle="#F5270B";
	ctx.fill(); 
	ctx.stroke();
}
var drawstars=function(){
	var x=60;
	for(var i=0;i<score+1;i++){
		drawstar(x,60);
		x+=100;
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
var nowbarrages=[];
var drawbarrages=function(){
	if(Math.random()<0.03){
		nowbarrages.push(new Text(
			width+100,
			Math.floor(Math.random()*height),
			texts[Math.floor(Math.random()*texts.length)],
			colors[Math.floor(Math.random()*colors.length)]
		));
	}
	for(var i=0;i<nowbarrages.length;i++){
		if(nowbarrages[i].draw()) nowbarrages.splice(i,1);
	}
}

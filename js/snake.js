var Snake=function(){
	this.a=[];
	for(var i=0;i<50;i++){
		this.a.push(new Block(7,7));
	}
	this.dir=3;
	this.nxtdir=3;
}
Snake.prototype.draw=function(){
	this.a[0].drawc("red");
	for(var i=1;i<this.a.length;i++){
		this.a[i].draws("blue");
	}
}
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

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
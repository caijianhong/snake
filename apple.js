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
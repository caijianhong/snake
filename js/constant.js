const width=$(window).get(0).innerWidth;
const height=$(window).get(0).innerHeight;
const bsize=10;
const n=width/bsize,m=height/bsize;
const speed=100;
const scorelimits=12,memorylimits=5;
const colors=["red","orange","green","blue","purple","brown","black"];
const keys={
	65:"A",	74:"J",	83:"S",	49:"1",
	66:"B",	75:"K",	84:"T",	50:"2",
	67:"C",	76:"L",	85:"U",	51:"3",
	68:"D",	77:"M",	86:"V",	52:"4",
	69:"E",	78:"N",	87:"W",	53:"5",
	70:"F",	79:"O",	88:"X",	54:"6",
	71:"G",	80:"P",	89:"Y",	55:"7",
	72:"H",	81:"Q",	90:"Z",	56:"8",
	73:"I",	82:"R",	48:"0",	57:"9",
	13:"Enter",32:"Space"
};
const map={
	37:2,38:1,39:3,40:4,//左上右下
	87:1,65:2,83:4,68:3 //WASD
};
const dx=[0,0,-1,1,0],dy=[0,-1,0,0,1];

$(function(){
	$(window).resize(resizecanvas);
	resizecanvas()
});
var resizecanvas=function(){
	$("#canvas").attr("width",$(window).get(0).innerWidth);
    $("#canvas").attr("height",$(window).get(0).innerHeight);
}
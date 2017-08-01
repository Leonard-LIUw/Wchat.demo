$(function(){

	/*  先让点赞和评论区  都隐藏   */
	$(".dianzan").hide();
	
	/* 点击事件 */
	$(".rightadib").click(function(){
		var control = $(this).find(".dianzan");
		$(control).toggle(100)
	});
	
	

});



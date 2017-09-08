$(function(){

	/*  先让点赞和评论区  都隐藏   */
	$("#liebiao").hide();
	
	/* 点击事件 */
	$("#top2c").click(function(){
		var control = $(this).find("#liebiao");
		$(control).toggle(100)
	});
	
	

});


$(function() {
	var newsLink = $(".news_link li");
	var limit = 5;
	$(".news-content").css('display','none');
	for(var i = 0 ; i < limit ; i++) {
		var limitNews = $(".news-content")[i];
		$(limitNews).fadeIn();
	}
	$(newsLink).click(function(){
		$(newsLink).removeClass("active");
		$(this).addClass("active");
		var btnFilter = $(this).attr('data-filter');
		if (btnFilter == 'catAll') {
			$(".news-content").css('display','none');
			for(i = 0 ; i < limit ; i++) {
				limitNews = $(".news-content")[i];
				$(limitNews).fadeIn();
			}
		} else {
			$(".news-content").css('display','none');
			for(i = 0 ; i < limit ; i++) {
				limitNews = $(".news-content").filter('[data-category = "' + btnFilter + '"]')[i];
				$(limitNews).fadeIn();
			}
		}
	});
});
$(document).ready(function(){
	$(".vip-1").bind("click", function(){
			this.addClass("hidden")
			this.toggleClass("not-hidden")
		$(".quote-text-1").addClass("not-hidden");
		$(".quote-text-1").fadeIn(500).toggleClass("hidden");
	});
	$(".vip-2").bind("click", function(){
		$("p.not-hidden").each(function(){
			this.addClass("hidden")
			this.toggleClass("not-hidden")
		});
		$(".quote-text-2").addClass("not-hidden");
		$(".quote-text-2").fadeIn(500).toggleClass("hidden");
		
	});
	$(".vip-3").bind("click", function(){
		$("p.not-hidden").each(function(){
			this.addClass("hidden")
			this.toggleClass("not-hidden")
		});
		$(".quote-text-3").addClass("not-hidden");
		$(".quote-text-3").fadeIn(500).toggleClass("hidden");
		
	});
});
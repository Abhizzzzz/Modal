$(document).ready(() => {
	$("button").click(() =>{
		$(".modal").show(() =>{
			$(window).click((event) =>{
				if($(event.target).hasClass("modal")){
					$(".modal").hide();
				}
			});
			
		});
	});
	$("span").click(() =>{
		$(".modal").hide();
	});
	
	
	
})
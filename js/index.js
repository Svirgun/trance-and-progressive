// $(document).ready(function() {
// $('a[href^="#"]').click(function(){
// var el = $(this).attr('href');
// $('body').animate({
// scrollTop: $(el).offset().top}, 2000);
// return false;
// });
// });

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
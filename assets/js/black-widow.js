$(function() {
    $('.slides').each(function() {
        let currentSlide = 0;
        const $slides = $(this).find('.slide');
        function nextSlide() {
            $($slides[currentSlide]).removeClass('showing');
            currentSlide = (currentSlide+1)%$slides.length;
            $($slides[currentSlide]).addClass('showing');
        }
        setInterval(nextSlide, 3500);
    });
});

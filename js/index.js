$(function() {
    $('.slider-blog__inner').slick({
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});
function messageAlert(){
    alert("Это старое портфолио, чего вы хотели?)) Мне осталось спать 4 часа)")
}
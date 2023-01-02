let lastScroll = 0;
const start = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('active');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('scroll');
    }
    else if(scrollPosition() < start && containHide()){
        //scroll up
        header.classList.remove('scroll');
    }

    lastScroll = scrollPosition();
})
// header dropdown toggle
$('.js-header-toggle').click(function(){
	$('body').toggleClass('is-show-dropdown lock');
});

$('.tickets-slider').slick({
	slidesToShow: 3,
	adaptiveHeight: true,
	slidesToScroll: 3,
	speed: 700,
	infinite: true,
	responsive: [
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
		},
		{
			breakpoint: 767,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		},
		{
			breakpoint: 420,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});

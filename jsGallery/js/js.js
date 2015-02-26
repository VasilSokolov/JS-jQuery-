$('#prev').on("click", onButtonPrevClick);
$('#next').on("click", onButtonNextClick)

var interval = setInterval(changeSlide, 5000);

function onButtonPrevClick() {
    changeSlide(true);
}

function onButtonNextClick() {
    changeSlide();
}

function changeSlide(previous) {
    // resets the interval
    clearInterval(interval);
    interval = setInterval(changeSlide, 5000);

    var $current = $('img.current');
    var $next = $current.next();
    if (previous) {
        $next = $current.prev();
    }

    if (!$next.is('img')) {
        $next = $('img.hidden').first();
    }

    $current.fadeOut(1000, function () {
        $current.attr('class', 'hidden').removeAttr('style');
        $next.fadeIn(1000, function () {
            $next.attr('class', 'current').removeAttr('style');
        });
    });
}
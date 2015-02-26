(function ($) {

    var nCurrentImg = 0,
        nImagesNum = 0;

    function init()
    {
        // alert('init');
        $('.slider img').not(":first").hide();
        // $('.slider img:first').click(nextPic);
        $('.slider img:first').bind('click', nextPic);
        nImagesNum = $('.slider img').length;
        console.log(nImagesNum);

        $('.next').bind('click', nextPic);
        $('.prev').bind('click', prevPic);
        // nextPic();
        //
        for (i=0; i<nImagesNum; i++)
        {
            $('.circles').append('<a href="'+i+'">o</a>');
        }

        $('.circles a').bind('click', function(e){
            e.preventDefault();
            var nLinkIndex = $(this).attr('href');
            slideImg(nLinkIndex);
        });

    }

    // function nextPic() {
    //     $('.slider img').eq(nCurrentImg).unbind('click', nextPic);

    //     nCurrentImg++;
    //     $('.slider img').eq(nCurrentImg).fadeIn(1000, function  () {
    //         $(".slider img").not(this).hide();
    //         $(this).bind('click', nextPic);
    //     });

    //     if (nCurrentImg >= nImagesNum ) {
    //         $('.slider img:first').css({'display':'block'});
    //         $('.slider img').eq(nCurrentImg-1).fadeOut(1000, function  () {
    //             nCurrentImg = 0;
    //             $('.slider img:first').bind('click', nextPic);
    //         });
    //     }
    // }
    //
    function nextPic() {
        console.log('nextPic');
        // $('.next').on("click", function  () {
        //     $(".slider img").eq(nNextImg);
        // });
        // slideImg(nNextImg+1);
        //
        var nNextImg = nCurrentImg + 1;
        if(nNextImg >= nImagesNum)
        {
            nNextImg = 0;
        }

        slideImg(nNextImg);
    }

    function prevPic() {
        console.log('prevPic');
        // $('.prev').on("click", function  () {
        //     $(".slider img").eq(nNextImg);
        // });
        // slideImg(nNextImg-1);

        var nNextImg = nCurrentImg - 1;
        if(nNextImg < 0)
        {
            nNextImg = nImagesNum - 1;
        }

        slideImg(nNextImg);
    }

    function slideImg(nNextIndex)
    {
        if(nNextIndex != nCurrentImg)
        {
            // console.log('nCurrentImg: ' + nCurrentImg);
            // console.log('nNextIndex: ' + nNextIndex);

            $('.slider img').eq(nCurrentImg).unbind('click', nextPic);

            if(nNextIndex > nCurrentImg)
            {
                $('.slider img').eq(nNextIndex).fadeIn(1000, function  () {
                    $(".slider img").not(this).hide();
                    $(this).bind('click', nextPic);
                });
            }
            else
            {
                $('.slider img').eq(nNextIndex).css({'display':'block'});
                $('.slider img').eq(nCurrentImg).fadeOut(1000, function  () {
                    $('.slider img').eq(nNextIndex).bind('click', nextPic);
                });
            }

            nCurrentImg = nNextIndex;
        }
    }

    function showImg(nIndex) {
        slideImg(nNextImg-1);
    }

    // function slideImg(nDirection) // nDirection 1 next img | -1 prev img
    // {

    //     $('.slider img').eq(nCurrentImg).unbind('click', nextPic);

    //     var nNextImg = nCurrentImg + nDirection;

    //     $('.slider img').eq(nCurrentImg).fadeIn(1000, function  () {
    //         $(".slider img").not(this).hide();
    //         $(this).bind('click', nextPic);
    //     });

    //     if (nCurrentImg >= nImagesNum ) {
    //         $('.slider img:first').css({'display':'block'});
    //         $('.slider img').eq(nCurrentImg-1).fadeOut(1000, function  () {
    //             nCurrentImg = 0;
    //             $('.slider img:first').bind('click', nextPic);
    //         });
    //     }
    // }

    // A $( document ).ready() block.
    $( document ).ready(function() {
        // console.log( "ready!" );
        init();
    });
})(jQuery);
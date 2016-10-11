(function($) {
    //detect the width on page load
    $(document).ready(function(){
        var current_width = $(window).width();
        //do something with the width value here!
        if(current_width < 768){
            accordionise();
        }
        else {
            deaccordionise();
        }
        mega_accordionise();
        showStickers();
    });
    //update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
    $(window).resize(function(){
        var current_width = $(window).width();
        //do something with the width value here!
        if(current_width < 768){
            deaccordionise();
            accordionise();
        }
        else {
            deaccordionise();
        }
        showStickers()
    });
    $(window).scroll(function(){
        showStickers();
    });
})(jQuery);
function accordionise() {
    $('.accordion').each(function(){
        var accordion = $(this);
        $('> .accordion-label, > .container > .accordion-label', this).click(function(){
            var label = $(this);
            /*$('.accordion').each(function(){
                $('.accordion-content', this).slideUp();
                $(this).removeClass('open');
            });*/
            $('> .accordion-content, > .container > .accordion-content', accordion).slideToggle();
            $(accordion).toggleClass('open');
            event.stopPropagation()
            columnConform();
        });
    });
}
function mega_accordionise() {
    $('.mega-accordion').each(function(){
        var accordion = $(this);
        $('.mega-accordion-label', this).click(function(){
            var label = $(this);
            /*$('.accordion').each(function(){
                $('.accordion-content', this).slideUp();
                $(this).removeClass('open');
            });*/
            $('> .mega-accordion-content', accordion).slideToggle();
            event.stopPropagation()
            columnConform();
            $(accordion).toggleClass('open');
        });
    });
}
function deaccordionise() {
    $('.accordion-label').unbind( "click" );
}
function showStickers() {
    $('.accordion').each(function() {
       var accordion = $(this);
       $('.accordion-label', accordion).each(function(){
           var accordion_label = $(this);
           if(accordion_label.hasClass('hidden-desktop')) {

           }
           else {
               // get the height of #wrap
               var top = $(this).offset();
               var middle = $(window).height() / 2;
               var scrollfromtop = $(document).scrollTop();

               //If the scroll from the top equals the top of the document minus half the doc height... add class
               if(scrollfromtop >= (top.top - middle - 200)) {
                   if(accordion_label.hasClass('active')) {
                       //Do nothing
                   }
                   else {
                       accordion_label.css('margin-top','-50px');
                       accordion_label.addClass('active');
                       accordion_label.fadeTo( "slow" , 1);
                   }
               }


               /*var y = $(window).scrollTop();
                if( y > (h*.25) && y < (h*.75) ){
                // if we are show keyboardTips
                $("#tips").fadeIn("slow");
                } else {
                $('#tips').fadeOut('slow');
                }*/
           }
       });
     });
}
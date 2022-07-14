(function(){
    var index = 0;
    var imgs = $("img");

    $(".carousel-ctnr").on("mouseenter", function(){
        $('span').animate({"opacity": ".8"}, 500);
    })
    $(".carousel-ctnr").on("mouseleave", function(){
        $('span').animate({"opacity": "0"}, 500);
    })

    $(".left-arrow, .right-arrow").on("click", function(){
        $(imgs.eq(index).css("display", "none"));	//remove current image
        if($(this).attr("class") === "left-arrow"){
            if(index === 0){
                index = imgs.length;
            }
            imgs.eq(--index).toggle("slide", {"direction": "left"});
        }
        else{
            if(index >= imgs.length-1){
                index = -1;
            }
            imgs.eq(++index).toggle("slide", {"direction": "right"});
        }
    })
})();
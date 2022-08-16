$(".item").slice(0, 9).show();

$(".btn-outline-danger").on("click", function(){
    $(".item:hidden").slice(0, 9).show();
    
    if ($(".item:hidden").length == 0)
    {
        $("button.btn-outline-danger").fadeOut();
    }
})
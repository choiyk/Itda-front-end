$(function(){
    $("[data-url]").click(function(){
        var url = $(this).attr("data-url");
        window.open(url, '_blanck');
    })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
})
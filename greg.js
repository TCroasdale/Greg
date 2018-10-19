window.addEventListener('load', function(){
    console.log("No tengo idea de por qué pensé que esto sería divertido.");
    num = Math.floor(Math.random() * 100)
    if(num == 1){
        $('#greg-head').attr("src","Images/howdy.png");
        $('#greg-hat').detach()
        $('#greg-text').detach()
        $('#greg-marraca').detach()
        $('#greg-marraca-2').detach()
    }
}, false )

jQuery.fn.shake = function (speedmod) {
    this.each(function (i) {
        $(this).css({
            "position": "fixed"
        });
        for (var x = 1; x <= 1; x++) {
            $(this).animate({
                left: '49%'
            }, 50*speedmod).animate({
                left: '50%'
            }, 100*speedmod).animate({
                left: '51%'
            }, 50*speedmod).animate({
                left: '50%'
            }, 100*speedmod);
        }
    });

}

function start() {
    $('#mySubmit').shake();
};

$(window).click(function(){
    console.log('this worked')
    $('#greg-head').shake(1.2);
    $('#greg-hat').shake(1);
    $('#greg-text').shake(1.1);
    $('#greg-marraca').shake(1.3);
    $('#greg-marraca-2').shake(1.5);
});

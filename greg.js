window.addEventListener('load', function(){
    console.log("No tengo idea de por qué pensé que esto sería divertido.");
    num = Math.floor(Math.random() * 100)
    if(num == 1){
        $('#greg-head').attr("src","Images/howdy.png")
        $('#greg-hat').detach()
        $('#greg-text').detach()
        $('#greg-marraca').detach()
        $('#greg-marraca-2').detach()
    }
    d = new Date()
    if(d.getDate() == 25 && d.getMonth() == 11){
        console.log("Have a slightly less depressing tuesday everyone!")
        $('#greg-head').attr("src","Images/el-greg_face.png")
        $('#greg-hat').attr("src","Images/el-greg_hat-xmas.png")
        $('#greg-text').attr("src","Images/el-greg_fiesta-xmas.png")
        $('#greg-marraca').attr("src","Images/el-greg_marraca-xmas.png")
        $('#greg-marraca-2').attr("src","Images/el-greg_marraca_2-xmas.png")
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

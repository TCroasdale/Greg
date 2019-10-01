
(function ($) {
		let canvas = $('#game-canvas')[0]
		console.log(canvas)
		
    let ctx = canvas.getContext('2d')

		let greg = new Image()

		function loadImages () {
			var gregSRC = ''
			
		}

    function draw () {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			var grd = ctx.createLinearGradient(0,0,0,200);
			grd.addColorStop(0,"white");
			grd.addColorStop(1,"lightblue");
			// Fill with gradient
			ctx.fillStyle = grd;
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			window.requestAnimationFrame(draw)
    } 


		window.requestAnimationFrame(draw)
}) (jQuery)
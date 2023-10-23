$(document).ready(
  (function() {
    var PrincipleCount = 1

    function YouWin() {
      $('#canvas_container').show()
      $('.taj').hide()
      $('.container').hide()
      window.requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(a) {
            window.setTimeout(a, 1e3 / 60)
          }
        )
      })()

      var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        canvasWidth = (canvas.width = window.innerWidth),
        canvasHeight = (canvas.height = window.innerHeight - 125),
        globalTick = 0,
        points = [],
        pointCount = 100,
        randomRange = function(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min)
        },
        iPoints

      var Point = function(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
      }

      Point.prototype.update = function() {
        this.x += this.vx
        this.y += this.vy

        if (this.x > canvasWidth || this.x < 0) {
          this.vx = -this.vx
        }

        if (this.y > canvasHeight || this.y < 0) {
          this.vy = -this.vy
        }
      }

      Point.prototype.render = function(i) {
        context.beginPath()
        context.arc(this.x, this.y, randomRange(1, 10), 0, Math.PI * 2, false)
        context.closePath()
        context.fillStyle =
          'hsl(' +
          (globalTick + randomRange(0, 15)) +
          ', ' +
          randomRange(80, 100) +
          '%, ' +
          randomRange(50, 60) +
          '%)'
        context.fill()
      }

      var updatePoints = function() {
        var i = points.length
        while (i--) {
          points[i].update()
        }
      }

      var renderPoints = function() {
        var i = points.length
        while (i--) {
          points[i].render(i)
        }
      }

      for (iPoints = 0; iPoints < pointCount; iPoints++) {
        points.push(
          new Point(
            (iPoints / pointCount) * canvasWidth,
            (iPoints / pointCount) * canvasHeight,
            (randomRange(0, 100) - 50) / 2,
            (randomRange(0, 100) - 50) / 2
          )
        )
      }

      var loop = function() {
        window.requestAnimFrame(loop)
        updatePoints()
        renderPoints()
        globalTick++
      }

      loop()
    }

    $('.principle').click(function() {
      if (PrincipleCount >= 10) {
        return
      }

      if ($(this).data('clicked') === true) {
        $('.description').html(
          "Uh oh. You've already revealed this principle. Try again!"
        )
        return
      } else {
        $(this).attr('data-clicked', 'true')
      }

      // Identify which principle was clicked on
      var Principle = $(this).data('id')
      var PrincipleDataSelct = '[data-principle="' + Principle + '"]'

      // Calculate the X, Y Difference between the selected principle and the active color
      var TopDiff =
        $('[data-id="' + Principle + '"]').offset().top -
        $('.active').offset().top +
        40
      var LeftDiff =
        $('[data-id="' + Principle + '"]').offset().left -
        $('.active').offset().left +
        39

      // Move Robot arm
      $('.arm_container').transition({ rotate: '45deg' }, function() {
        // Return to original position
        $('.arm_container').transition({ rotate: '0deg', delay: 500 })
      })

      // Throw the active color
      var Color = $('.active').data('color')
      $('.active').transition(
        { x: LeftDiff, y: TopDiff, scale: 5 },
        'slow',
        'linear',
        function() {
          // Identify the active color and apply that color to the principle
          var Color = $('.active').data('color')
          $(PrincipleDataSelct).addClass(Color)

          // Update the active color and load a new color
          $('.active').removeClass('active')
          PrincipleCount++
          var ColorQueued = PrincipleCount + 2
          $('[data-order="' + PrincipleCount + '"]').addClass('active')
          $('[data-order="' + ColorQueued + '"]').removeClass('hidden')

          // Rotate Icon & Reveal Text
          $(this).transition({ rotateY: '180deg' }, function() {
            $(PrincipleDataSelct).addClass(Principle)
            $('[data-id="' + Principle + '"] span').show()
            var Link = $('[data-id="' + Principle + '"]').data('url')
            $('.description').html(
              '<strong>' +
                $('[data-id="' + Principle + '"]').data('title') +
                ':</strong> ' +
                $('[data-id="' + Principle + '"]').data('desc') +
                " <a href='http://openelectiondata.net/en/guide/principles/" +
                Link +
                "' target='_blank'>Click here to learn more about this principle!</a>"
            )

            $('[data-color="' + Color + '"]').hide()
          })
          $(PrincipleDataSelct).transition({ opacity: 0.8 })

          if (PrincipleCount == 10) {
            setTimeout(function() {
              YouWin()
            }, 3000)
          }
        }
      )
    })
  })()
)

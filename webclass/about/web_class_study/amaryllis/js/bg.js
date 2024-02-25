(function ($) {
  // animated hex background
    $(document).ready(function() {
      $('.animated-background').each(function( index ) {
        var cnv = $("<canvas></canvas>").attr("id", "can"+index);
  
        var colorToUse = $(this).attr('data-color');
        if (colorToUse === 'red') {
          colorRange = ['rgba(206, 23, 41, 0)', 'rgba(193, 23, 43, 0)'];
          strokeColor = 'rgba(206, 23, 41, 1)';
        } else {
          colorRange = ['rgba(245, 245, 245, alp)', 'rgba(229, 229, 229, alp)'];
          strokeColor = 'rgba(245,245,245, 0.5)';
        }
  
        $(this).prepend(cnv);
  
        var can = document.getElementById("can"+index);
        var w = can.width = $(this).width(),
        h = can.height = $(this).height(),
        sum = w + h,
        ctx = can.getContext('2d'),
  
        opts = {
  
          side: 16,
          picksParTick: 8, //originally 5
          baseTime: 200,
          addedTime: 5,
          colors: colorRange,
          addedAlpha: 1,
          strokeColor: strokeColor,
          hueSpeed: .1,
          repaintAlpha: 1
        },
  
        difX = Math.sqrt(3) * opts.side / 2,
        difY = opts.side * 3 / 2,
        rad = Math.PI / 6,
        cos = Math.cos(rad) * opts.side,
        sin = Math.sin(rad) * opts.side,
  
        hexs = [],
        tick = 0;
  
        function loop() {
  
          window.requestAnimationFrame(loop);
  
          tick += opts.hueSpeed;
  
          ctx.shadowBlur = 0;
  
          var backColor;
          if (colorToUse === 'red') {
            backColor = 'rgba(232, 28, 47, 0.9)';
          }
          else {
            backColor = 'rgba(225, 225, 225, 0.5)';
          }
          ctx.fillStyle = backColor.replace('alp', opts.repaintAlpha);
          ctx.fillRect(0, 0, w, h);
  
          for (var i = 0; i < opts.picksParTick; ++i)
            hexs[(Math.random() * hexs.length) | 0].pick();
  
          hexs.map(function(hex) {
            hex.step();
          });
        }
  
        function Hex(x, y) {
  
          this.x = x;
          this.y = y;
          this.sum = this.x + this.y;
          // change between false and true to animate from left to right, or all at once
          this.picked = false;
          this.time = 0;
          this.targetTime = 0;
  
          this.xs = [this.x + cos, this.x, this.x - cos, this.x - cos, this.x, this.x + cos];
          this.ys = [this.y - sin, this.y - opts.side, this.y - sin, this.y + sin, this.y + opts.side, this.y + sin];
        }
        Hex.prototype.pick = function() {
  
          this.color = opts.colors[(Math.random() * opts.colors.length) | 0];
          this.picked = true;
          this.time = this.time || 0;
          this.targetTime = this.targetTime || (opts.baseTime + opts.addedTime * Math.random()) | 0;
        }
        Hex.prototype.step = function() {
  
          var prop = this.time / this.targetTime;
  
          ctx.beginPath();
          ctx.moveTo(this.xs[0], this.ys[0]);
          for (var i = 1; i < this.xs.length; ++i)
            ctx.lineTo(this.xs[i], this.ys[i]);
          ctx.lineTo(this.xs[0], this.ys[0]);
  
          if (this.picked) {
  
            ++this.time;
  
            if (this.time >= this.targetTime) {
  
              this.time = 0;
              this.targetTime = 0;
              this.picked = false;
            }
  
            ctx.fillStyle = ctx.shadowColor = this.color.replace('alp', Math.sin(prop * Math.PI));
            ctx.fill();
          } else {
  
            ctx.strokeStyle = ctx.shadowColor = opts.strokeColor;
            ctx.stroke();
          }
        }
  
        for (var x = 0; x < w; x += difX * 2) {
          var i = 0;
  
          for (var y = 0; y < h; y += difY) {
            ++i;
            hexs.push(new Hex(x + difX * (i % 2), y));
  
          }
        }
        loop();
  
        window.addEventListener('resize', function() {
  
          w = can.width = window.innerWidth;
          h = can.height = window.innerHeight;
          sum = w + h;
  
          if (can.width < window.innerWidth) {
            can.alpha = 0.5;
            can.opacity = 0.5;
          }
  
          hexs.length = 0;
          for (var x = 0; x < w; x += difX * 2) {
            var i = 0;
  
            for (var y = 0; y < h; y += difY) {
              ++i;
              hexs.push(new Hex(x + difX * (i % 2), y));
  
            }
          }
        });
      });
    });
  })(jQuery);
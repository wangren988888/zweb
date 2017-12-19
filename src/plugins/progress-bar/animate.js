export const animate = function(){

  function easeIn(t,b,c,d){
    return c * (t /= d) * t + b;
  }
  function easeOut(t,b,c,d){
    return -c * (t /=d) * (t - 2) + b;
  }
  function easeNone(t, b, c, d) {
    return c * t / d + b;
  }
  function getMethod(method){
    switch(method) {
      case 'ease-in': return easeIn;
      case 'ease-out': return easeOut;
      default: return easeNone;
    }
  }

  function isTransform(style) {
    switch(style.toLowerCase()) {
      case 'translatex':
      case 'translatey':
      case 'translatez':
      case 'translate':
      case 'scalex':
      case 'scaley':
      case 'scalez':
      case 'scale':
      case 'rotatex':
      case 'rotatey':
      case 'rotatez':
      case 'rotate': return true;
      default: return false;
    }
  }

  function anim(el, style, frame, unit, trans){
    if(style == 'scrollTop'){
      if(el){
        el.scrollTop = frame;
      }else{
        document.body.scrollTop ? document.body.scrollTop = frame : document.documentElement.scrollTop = frame;
      }
    }
    if(el){
      // error(el,style,frame, unit, trans)
      if(trans){
        el.style.transform = style + '('+frame+unit + ')';
        // `${style}(${frame+unit})`;
      }else{
        el.style[style] = frame + unit;
      }
    }
  }

  return function(el, style, options){
    return new Promise(resolve => {
      var start = options.from,
      end = options.to,
      unit = options.unit || 'px',
      trans = isTransform(style);
      if(typeof start == 'undefined'){
        if(style == 'scrollTop'){
          start = el ? el.scrollTop : (document.body.scrollTop || document.documentElement.scrollTop)
        }else {
          // css()???          
          // start = parseFloat(css(el,style))||0;
        }
      }else{
        anim(el, style, start, unit, trans);        
      }
      if(start != end){
        var delay = options.delay,
        method = getMethod(options.method),
        fps = 60,
        currentFrame = 0,
        totalFrames = options.duration * fps,
        run = function(){
          if(currentFrame < totalFrames){
            let frame = method(++currentFrame,start, end - start, totalFrames);
            anim(el, style, frame, unit, trans);
            requestAnimationFrame(run);
          }else{
            anim(el, style, end, unit, trans);
            resolve();
          }
        };
        if(delay){
          setTimeout(run, delay * 1000);
        }else{
          requestAnimationFrame(run)
        }
      }
    });
  }
}();
(function ($) {
  var privateFunc = function(  ) {
  }
  var methods = {
    init : function( options ) { 
      var settings = {
        repeat: 0,
        onFinish: function() {},
        animation: "left",
        time: 400,
        pxmove: "5px",
        replace: false,
        delay: 7
      };
      
      return this.each(function(){
        
        var $this = $(this);
        if ( options ) { 
          $.extend( settings, options );
        }

        var space = {
            width: $this.width(),
            height: $this.height(),
            top: $this.position().top,
            left: $this.position().left
        },
            html = $this.clone().css({top: 0, left: 0}),
            rand = Math.random(0,999)+ new Date().getTime(),
            obj1 = {}, 
            obj2 = {};
      
        var newElm = $('<div class="markers-animate-'+rand+'">').css({width:space.width+"px",height: space.height+"px"});
        var replacer = newElm.clone();
        newElm.css({position:'absolute' ,top: space.top+"px",left:space.left+"px" });



        newElm.append(html).appendTo($this.parent());
        if( settings.replace ) {
          $this.parent().append(replacer);
        }    
        $this.hide();
                
        switch(settings.animation){
          case("left"): 
            obj1 = {left: "-=" + settings.pxmove};
            obj2 = {left: "+=" + settings.pxmove};
            break;
          case("right"):
            obj1 = {left: "+=" + settings.pxmove};
            obj2 = {left: "-=" + settings.pxmove};
            break;
          case("top"): 
            obj1 = {top: "-=" + settings.pxmove};
            obj2 = {top: "+=" + settings.pxmove};
            break;
          case("bottom"): 
            obj1 = {top: "+=" + settings.pxmove};
            obj2 = {top: "-=" + settings.pxmove};
            break;
          default: return 0; break;
        } 
      
        setInterval(function(){ 
                  newElm.animate(obj1,settings.time).animate(obj2,settings.time);
                },(settings.time*2)+settings.delay);
       
        
      })
    },
    reset : function( ) { 
      
      return this.each(function(){
      
        var $this = $(this);

      })
    },
    destroy : function( ) { 
      return this.each(function(){

        var $this = $(this);
      })
    } 
  };       
  $.fn.markers = function( method ) {      
      if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.myPlugin' );
      }
  };
})(jQuery);

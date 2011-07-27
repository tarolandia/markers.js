(function ($) {
	var privateFunc = function(  ) {
	}
	var methods = {
		init : function( options ) { 
			var settings = {
			   
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
				    html = $this.clone(),
				    rand = new Date().getTime();
			
				var newElm = $('<div class="markers-animate-'+rand+'">').css({position:'absolute', width:space.width+"px",height: space.height+"px",top: space.top+"px",left:space.left+"px" }).append(html).appendTo($this.parent());
        $this.hide();

       
      
       setInterval(function(){ 
                newElm.animate({left: "-=5px"},"fast", function(){ 
                    newElm.animate({left: "+=5px"},"fast") 
                  }) 
                },500);
       
				
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

(function(){
	
	/* I want them to be Meiryo */
	var html = document.getElementsByTagName('html')[0];
	if(/windows/i.test(navigator.userAgent)){
		html.className = 'os-win';
	}

	/* from html5bp
	   usage: log('inside coolFunc', this, arguments); */
	window.log = function(){
	  log.history = log.history || [];   // store logs to an array for reference
	  log.history.push(arguments);
	  if(this.console) {
		  arguments.callee = arguments.callee.caller;
		  console.log( Array.prototype.slice.call(arguments) );
	  }
	};
	(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


  $(function(){
    var $timer = $('.mod-timer');
    function start(){
      tick(20000, function(){
        var res = Reveal.navigateDown();
        start();
      });
    }
    function tick(time, done){
      if(time <= 0){
        $timer.text(0);
        done();
        return;
      }
      $timer.text(time/1000);
      setTimeout(function(){
        tick(time - 1000, done);
      }, 1000);
    }
    $timer.click(function(){
      $timer.addClass('state-active');
      start();
    });
  });


})();

'use strict';

var bananastand = {};

// DOMLoaded
window.addEventListener('load',function(){
	bananastand.main.init();
});


bananastand.main = (function(){
	// 'global' vars
	var body, nav, output;

	function init (){
		console.log('there\'s always money in the bananastand..');
		body = document.getElementsByTagName('body')[0];
		nav = document.getElementsByTagName('nav')[0].getElementsByTagName('li');

		/* when you hover over an example the nav updates */
		var experiments = document.getElementsByClassName('test');
		for (var i = 0; i < experiments.length; i++) {
			addListener('mouseover', experiments[i], updateNav);
		};

	}

function updateNav(e) {
	// trim off underscore: _01
	var current = this.id.replace('_','');

	// find the right nav element
	for (var i = 0; i < nav.length; i++) {
		if (nav[i].childNodes[0].innerText === current) nav[i].className+='here';
	};

	// prevent this happening a hella amount of times
	this.removeEventListener('mouseover', updateNav, false);
}



	/* basic utilities */
	/* =================================== */
	/* add event listener */ // credit to roxik, Masayuki Kido. roxik.com/cat
	function addListener( _event_string, _element, _func ) {
		if (_event_string === 'hover') _event_string = 'mouseover'; // because why isn't it just hover?
		// Chrome, FF, O, Safari
		if( _element.addEventListener ) _element.addEventListener( _event_string, _func, false );
		// IE
		else if( _element.attachEvent ) _element.attachEvent( 'on' + _event_string, _func );
	}

	/* clear nodes */
	function clear(_element) {
	  while( _element.hasChildNodes() ) {
	    _element.removeChild( _element.firstChild );
	  }
	}

	/* make custom element */
	function element(_element, _text) {
		var ele = document.createElement(_element);

		// if we have a 2nd parameter
		if (_text !== undefined) {
			if (_element === 'img') ele.setAttribute('src', _text);
			else {
				if (_element === 'a') ele.setAttribute('href', _text);
				var text = document.createTextNode(_text);
				ele.appendChild(text);
			}
		}
		return ele;
	}


	// ===================================
	//Public interface
	return {
		init : init
	};
})();
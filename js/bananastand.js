'use strict';

var bananastand = {};

// DOMLoaded
window.addEventListener('load',function(){
	bananastand.main.init();
});


bananastand.main = (function(){
	// 'global' vars
	var body,
			output; // default location to output stuff

	function init (){
		console.log('there\'s always money in the bananastand..');
		body = document.getElementsByTagName('body')[0];


	}





	/* custom shit */
	/* =================================== */
	// navigator
	function navigator() {
		// 1. reads the ID of the <body>
		// 2. finds the corresponding <nav> <li> to add class 'here' to
		var here = document.getElementsByTagName('body')[0].id;

		// addClass('here') to matching <nav> li
		var nav = document.getElementsByTagName('header')[0].getElementsByTagName('nav')[0].getElementsByTagName('li');
		for (var i = 0; i < nav.length; i++) {
			if (nav[i].firstChild.firstChild.nodeValue === here) addClass('here', nav[i]);
		}

		return here;
	}

	// function gallery() {
	// 	// set up the gallery page

	// 	// 1. addeventlisteners
	// 	// a. categories
	// 	var categories = document.getElementsByClassName('categories')[0].getElementsByTagName('input');
	// 	for (var i = 0; i < categories.length; i++) {
	// 		addListener(categories[i], 'change', category_selection);
	// 		if (categories[i].checked) addClass('selected', categories[i].parentNode);
	// 	}
	// 	// b. imgs
	// 	var imgs = document.getElementsByClassName('gallery')[0].getElementsByTagName('img');
	// 	for (var j = 0; j < imgs.length; j++) {
	// 		addListener(imgs[j], 'click', showcase);
	// 	}
	// 	// hook stuff up
	// }

	// function category_selection(e) {
	// 	// update UI
	// 	document.getElementsByClassName('categories')[0].getElementsByClassName('selected')[0].className = '';
	// 	e.target.parentNode.className += 'selected';

	// 	console.log(e.target.value);
	// }


	// function showcase(e) {
	// 	console.log('showcase\n'+e);
	// }





	/* basic utilities */
	/* =================================== */
	/* add event listener */ // credit to roxik, Masayuki Kido. roxik.com/cat
	function addListener( _event_string, _element, _func ) {
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

/* addClass */
// function addClass(_class, _element) {
// 	// variables
// 	var className = "", // string to hold className to add
// 			classExists = false; // boolean to check if the class already exists
// 	var classes = _element.className.split(" ");


// 	if (classes[0] === "") { /* element has no classes. add class name */ }
// 	else {
// 		/* element has existing classes */
// 		className += " "; // for appropriate spacing
// 		/* check if the class already exists */
// 		for (var i = 0; i < classes.length; i++) {
// 			if (classes[i] === _class) { classExists = true; } // class exists, do nothing
// 		}
// 	}

// 	// if className does not exist, add new className
// 	if (!classExists) {
// 		className += _class;
// 		_element.className += className;
// 	}
// } // end addClass



/* removeClass */
// function removeClass(_element, _class) {
	// variables
	// var classExists = false, // boolean to check if the class already exists
			// classRef; // will hold the array reference if the element exits
	// var classes = _element.className.split(" ");


	// if (classes[0] === "") { /* element has no classes. do nothing */ }
	// else {
		/* element has existing classes, check if the class exists */
		// for (var i = 0; i < classes.length; i++) {
			// if (classes[i] === _class) {
				// classExists = true;
				// classRef = i;
			// }
		// }
	// }

	// if className exists, remove the className
	// if (classExists) {
		// classes.splice(classRef);
		// _element.className = classes;
	// }
// } // end removeClass


/* AJAX */
// load
// function load(_uri) {
//   var currentRequest = null;

//   // not IE
//   if ( window.XMLHttpRequest ) {currentRequest = new XMLHttpRequest(); }
//   // IE only
//   else if ( window.ActiveXObject ) {currentRequest = new ActiveXObject( "Microsoft.XMLHTTP" ); }

//   if ( currentRequest !== null ) {   // able to get a request object
//     currentRequest.onreadystatechange = function() {
//       checkLoadStatus(currentRequest);
//     };
//     currentRequest.open( "GET", _uri, true );  // true means non-blocking/asynchronous I/O
//     currentRequest.send( "" );
//   }
//   else {
//     console.log("error obtaining request object...");
//   }
// }

// check load status
// function checkLoadStatus( _request ) {
//   if ( _request.readyState == 4 ) { // if _request state is "loaded"
//     if ( _request.status == 200 ) {  // if status code is "OK"
// 			// content loaded
// 			// parseData(_request.responseText);
// 			console.log('lol. AJAX');
//     }
//     else {
// 			console.log("something went wrong. checkLoadStatus()");
//     }
//   }
// }


	// ===================================
	//Public interface
	return {
		init : init
	};
})();
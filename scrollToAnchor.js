/* Animate function from: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link/26642959 */

function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
          elem[style] = from+unit;
    } else {
          elem.style[style] = from+unit;
    }
}

var scrollToAnchor=function(e){
	e.preventDefault();
	var id=this.attributes.href.value;
	var scrollTo=false;
	if(id.length>1){
		var scrollTo=document.querySelector(id);
	}	
	if(scrollTo){
		var current_position=document.documentElement.scrollTop;
		animate(document.scrollingElement,"scrollTop", "", current_position, scrollTo.offsetTop, 250, true);
	}	
}	

window.onload = function () {
	var anchorLinks = document.querySelectorAll('a[href^="#"]');

	for (var i = 0; i < anchorLinks.length; i++) {
		anchorLinks[i].addEventListener('click', scrollToAnchor);
	} 
};

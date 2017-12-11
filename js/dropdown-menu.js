$(function() {
    var menuItems = document.querySelectorAll('li.dropdown');

    Array.prototype.forEach.call(menuItems, function(el, i){
    	el.querySelector('a').addEventListener("click",  function(event){
    		if (this.parentNode.className == "dropdown") {
    			this.parentNode.className = "dropdown open";
    			this.setAttribute('aria-expanded', "true");
    		} else {
    			this.parentNode.className = "dropdown";
    			this.setAttribute('aria-expanded', "false");
    		}
    		event.preventDefault();
    		return false;
    	});
    });
});

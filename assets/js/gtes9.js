$(function(){$('a[href*=#navigation]:not([href=#])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+ this.hash.slice(1)+']');if(target.length){$('navigation').animate({scrollTop:target.offset()#navigation},800);return false;}}});});

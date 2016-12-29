 ;
 (function(win) {
     var doc = win.document;
     var docEl = doc.documentElement;
     var metaEl = doc.querySelector('meta[name="viewport"]');
     var scale = 1;
     var tid;
     if (!metaEl) {
         metaEl = doc.createElement('meta');
         metaEl.setAttribute('name', 'viewport');
         metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
         if (docEl.firstElementChild) {
             docEl.firstElementChild.appendChild(metaEl);
         } else {
             var wrap = doc.createElement('div');
             wrap.appendChild(metaEl);
             doc.write(wrap.innerHTML);
         }
     }

     function refreshRem() {
         var width = docEl.clientWidth;
         var rem = width;
         docEl.style.fontSize = rem + 'px';
     }

     win.addEventListener('resize', function() {
         clearTimeout(tid);
         tid = setTimeout(refreshRem, 300);
     }, false);
     win.addEventListener('pageshow', function(e) {
         if (e.persisted) {
             clearTimeout(tid);
             tid = setTimeout(refreshRem, 300);
         }
     }, false);

     if (doc.readyState === 'complete') {
         doc.body.style.fontSize = 12 + 'px';
     } else {
         doc.addEventListener('DOMContentLoaded', function(e) {
             doc.body.style.fontSize = 12 + 'px';
         }, false);
     }

     refreshRem();
 })(window);
/*! pace 0.5.1 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W=[].slice,X={}.hasOwnProperty,Y=function(a,b){function c(){this.constructor=a}for(var d in b)X.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Z=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?W.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?W.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)X.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),T=["ajax","document","eventLag","elements"],P=0,R=T.length;R>P;P++)J=T[P],C[J]===!0&&(C[J]=t[J]);i=function(a){function b(){return U=b.__super__.constructor.apply(this,arguments)}return Y(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),O=window.XMLHttpRequest,N=window.XDomainRequest,M=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},I=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Z.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return I(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new O(b),a(c),c},v(window.XMLHttpRequest,O),null!=N&&(window.XDomainRequest=function(){var b;return b=new N,a(b),b},v(window.XDomainRequest,N)),null!=M&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=null!=b?new M(a,b):new M(a),I("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,M))}return Y(b,a),b}(h),Q=null,x=function(){return null==Q&&(Q=new j),Q},H=function(a){var b,c,d,e;for(e=C.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},x().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,H(g)?void 0:Pace.running||C.restartOnRequestAfter===!1&&"force"!==I(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(J=i[c],J instanceof a){J.watch.apply(J,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,H(e)?void 0:(c="socket"===d?new m(b):new n(b),this.elements.push(c))},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),K=null,G=null,q=null,L=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(S=window.history.pushState,window.history.pushState=function(){return y(),S.apply(window.history,arguments)}),null!=window.history.replaceState&&(V=window.history.replaceState,window.history.replaceState=function(){return y(),V.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=K=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&K.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)J=i[d],K.push(new J(C));return Pace.bar=q=new b,G=[],L=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){var a;return Pace.running=!0,q.render(),a=B(),r=!1,o=F(function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(k=100-q.progress,e=o=0,f=!0,i=p=0,t=K.length;t>p;i=++p)for(J=K[i],n=null!=G[i]?G[i]:G[i]=[],h=null!=(v=J.elements)?v:[J],j=s=0,u=h.length;u>s;j=++s)g=h[j],m=null!=n[j]?n[j]:n[j]=new l(g),f&=m.done,m.done||(e++,o+=m.tick(b));return d=o/e,q.update(L.tick(b,d)),q.done()||f||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(B()-a),0)))):c()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);;
Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n>1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u767c\u751f\u4e00\u500b AJAX HTTP \u932f\u8aa4\u3002","HTTP Result Code: !status":"HTTP \u7d50\u679c\u78bc\uff1a!status","An AJAX HTTP request terminated abnormally.":"\u6709\u500b\u4e0d\u6b63\u5e38\u7d50\u675f\u7684 AJAX HTTP \u8cc7\u6e90\u8acb\u6c42","Debugging information follows.":"\u9644\u4e0a\u5075\u932f\u8cc7\u8a0a\u3002","Path: !uri":"\u8def\u5f91\uff1a!uri","StatusText: !statusText":"\u72c0\u614b\u6587\u5b57\uff1a!statusText","ResponseText: !responseText":"\u56de\u61c9\u6587\u5b57\uff1a!responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u81ea\u8a02\u8a0a\u606f\uff1a!customMessage","@title dialog":"@title \u5c0d\u8a71\u65b9\u584a","Configure":"\u8a2d\u7f6e","Loading":"\u8f09\u5165\u4e2d","(active tab)":"(\u4f5c\u7528\u4e2d\u9801\u7c64)","All":"\u6240\u6709","Re-order rows by numerical weight instead of dragging.":"\u900f\u904e\u6578\u5b57\u6b0a\u91cd\u65b9\u5f0f\u4f86\u9032\u884c\u91cd\u65b0\u6392\u5e8f\u3002","Show row weights":"\u986f\u793a\u5217\u6b04\u6b0a\u91cd","Hide row weights":"\u96b1\u85cf\u5217\u6b04\u6b0a\u91cd","Drag to re-order":"\u6293\u53d6\u9805\u76ee\u9032\u884c\u91cd\u65b0\u6392\u5217","Changes made in this table will not be saved until the form is submitted.":"\u5728\u9001\u51fa\u9019\u500b\u8868\u55ae\u4e4b\u524d\uff0c\u9019\u500b\u8868\u683c\u4e2d\u7684\u8b8a\u66f4\u4e0d\u6703\u88ab\u5132\u5b58\u3002","Hide":"\u96b1\u85cf","Show":"\u986f\u793a","Edit":"\u7de8\u8f2f","Add":"\u65b0\u589e","Shortcuts":"\u6377\u5f91","Enabled":"\u555f\u7528","Status":"\u72c0\u614b","Search":"\u641c\u5c0b","Disabled":"\u505c\u7528","Size":"\u5927\u5c0f","Filename":"\u6a94\u6848\u540d\u7a31","N\/A":"\u7121","Allowed HTML tags":"\u53ef\u4f7f\u7528\u7684 HTML \u6a19\u7c64","Select all rows in this table":"\u9078\u53d6\u8868\u683c\u4e2d\u7684\u6240\u6709\u5217","Deselect all rows in this table":"\u53d6\u6d88\u9078\u53d6\u8868\u683c\u4e2d\u7684\u6240\u6709\u5217","Not published":"\u672a\u767c\u8868","Please wait...":"\u8acb\u7a0d\u7b49...","By @name on @date":"\u7531 @name \u65bc @date \u767c\u8868","By @name":"\u4f9d\u540d\u7a31","Not in menu":"\u4e0d\u5b58\u5728\u9078\u55ae\u4e2d","Alias: @alias":"\u5225\u540d\uff1a@alias","No alias":"\u6c92\u6709\u8def\u5f91\u5225\u540d","New revision":"\u5efa\u7acb\u4fee\u8a02\u7248\u672c","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u9019\u4e9b\u5340\u584a\u7684\u8b8a\u66f4\u4e0d\u6703\u88ab\u5132\u5b58\u8d77\u4f86\uff0c\u9664\u975e\u60a8\u6309\u4e0b\u003Cem\u003E\u5132\u5b58\u5340\u584a\u003C\/em\u003E \u7684\u6309\u9215\u3002","This permission is inherited from the authenticated user role.":"\u6b64\u6b0a\u9650\u7e7c\u627f\u81ea\u8a3b\u518a\u4f7f\u7528\u8005\u89d2\u8272\u3002","No revision":"\u6c92\u6709\u4fee\u8a02\u7248\u672c","@number comments per page":"\u6bcf\u9801\u56de\u61c9\u6578\u91cf @number\u500b","Requires a title":"\u9700\u8981\u586b\u5beb\u6a19\u984c","Not restricted":"\u672a\u53d7\u9650\u5236","Not customizable":"\u7121\u6cd5\u81ea\u8a02","Restricted to certain pages":"\u53d7\u9650\u65bc\u7279\u5b9a\u9801\u9762","The block cannot be placed in this region.":"\u7121\u6cd5\u628a\u5340\u584a\u653e\u5230\u9019\u500b\u5340\u57df\u3002","Hide summary":"\u96b1\u85cf\u6458\u8981","Edit summary":"\u7de8\u8f2f\u6458\u8981","Don\u0027t display post information":"\u4e0d\u8981\u986f\u793a\u6587\u7ae0\u7684\u5f35\u8cbc\u8cc7\u8a0a","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u9078\u64c7\u7684\u6a94\u6848%filename\u7121\u6cd5\u4e0a\u8f09\u3002\u53ea\u6709\u4ee5\u4e0b\u985e\u578b\u7684\u6a94\u6848\u88ab\u5141\u8a31\uff1a%extensions\u3002","Autocomplete popup":"\u81ea\u52d5\u5b8c\u6210\u5feb\u986f","Searching for matches...":"\u6b63\u5728\u67e5\u627e\u5339\u914d\u9805...","The response failed verification so will not be processed.":"\u9a57\u8b49\u5931\u6557\uff0c\u4e2d\u6b62\u7a0b\u5e8f\u3002"}} };;
/**
 * @file better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module
 */
(function ($) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function(context) {
      // Add highlight class to checked checkboxes for better theming
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes
        .change(function() {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight')
      ;
    }
  };

  Drupal.behaviors.betterExposedFiltersSelectAllNone = {
    attach: function(context) {

      /*
       * Add Select all/none links to specified checkboxes
       */
      var selected = $('.form-checkboxes.bef-select-all-none:not(.bef-processed)');
      if (selected.length) {
        var selAll = Drupal.t('Select All');
        var selNone = Drupal.t('Select None');

        // Set up a prototype link and event handlers
        var link = $('<a class="bef-toggle" href="#">'+ selAll +'</a>')
        link.click(function(event) {
          // Don't actually follow the link...
          event.preventDefault();
          event.stopPropagation();

          if (selAll == $(this).text()) {
            // Select all the checkboxes
            $(this)
              .html(selNone)
              .siblings('.bef-checkboxes, .bef-tree')
                .find('.form-item input:checkbox').each(function() {
                  $(this).attr('checked', true);
                  _bef_highlight(this, context);
                })
              .end()

              // attr() doesn't trigger a change event, so we do it ourselves. But just on
              // one checkbox otherwise we have many spinning cursors
              .find('input[type=checkbox]:first').change()
            ;
          }
          else {
            // Unselect all the checkboxes
            $(this)
              .html(selAll)
              .siblings('.bef-checkboxes, .bef-tree')
                .find('.form-item input:checkbox').each(function() {
                  $(this).attr('checked', false);
                  _bef_highlight(this, context);
                })
              .end()

              // attr() doesn't trigger a change event, so we do it ourselves. But just on
              // one checkbox otherwise we have many spinning cursors
              .find('input[type=checkbox]:first').change()
            ;
          }
        });

        // Add link to the page for each set of checkboxes.
        selected
          .addClass('bef-processed')
          .each(function(index) {
            // Clone the link prototype and insert into the DOM
            var newLink = link.clone(true);

            newLink.insertBefore($('.bef-checkboxes, .bef-tree', this));

            // If all checkboxes are already checked by default then switch to Select None
            if ($('input:checkbox:checked', this).length == $('input:checkbox', this).length) {
              newLink.click();
            }
          })
        ;
      }

      // Check for and initialize datepickers
      var befSettings = Drupal.settings.better_exposed_filters;
      if (befSettings && befSettings.datepicker && befSettings.datepicker_options && $.fn.datepicker) {
        var opt = befSettings.datepicker_options.dateformat ? {dateFormat: befSettings.datepicker_options.dateformat} : {};
        $('.bef-datepicker').datepicker(opt);
      }

    }                   // attach: function() {
  };                    // Drupal.behaviors.better_exposed_filters = {

  Drupal.behaviors.betterExposedFiltersAllNoneNested = {
    attach:function (context, settings) {
      $('.form-checkboxes.bef-select-all-none-nested li').has('ul').once('bef-all-none-nested', function () {
        $(this)
          // To respect term depth, check/uncheck child term checkboxes.
          .find('input.form-checkboxes:first')
          .click(function() {
            $(this).parents('li:first').find('ul input.form-checkboxes').attr('checked', $(this).attr('checked'));
          })
          .end()
          // When a child term is checked or unchecked, set the parent term's
          // status.
          .find('ul input.form-checkboxes')
          .click(function() {
            var checked = $(this).attr('checked');
            // Determine the number of unchecked sibling checkboxes.
            var ct = $(this).parents('ul:first').find('input.form-checkboxes:not(:checked)').size();
            // If the child term is unchecked, uncheck the parent.
            // If all sibling terms are checked, check the parent.
            if (!checked || !ct) {
              $(this).parents('li:first').parents('li:first').find('input.form-checkboxes:first').attr('checked', checked);
            }
          });
      });
    }
  }

  Drupal.behaviors.better_exposed_filters_slider = {
    attach: function(context, settings) {
      var befSettings = settings.better_exposed_filters;
      if (befSettings && befSettings.slider && befSettings.slider_options) {
        $.each(befSettings.slider_options, function(i, sliderOptions) {
          // Only make one slider per filter.
          $("#" + sliderOptions.viewId + " #edit-" + sliderOptions.id + "-wrapper").once('slider-filter', function() {
            var $input = $(this).find('input[type=text]');

            // This is a "between" or "not between" filter with two values.
            if ($input.length == 2) {
              var $min = $input.parent().find('input#edit-' + sliderOptions.id + '-min'),
                  $max = $input.parent().find('input#edit-' + sliderOptions.id + '-max'),
                  default_min,
                  default_max;

              if (!$min.length || !$max.length) {
                return;
              }

              // Get the default values.
              // We use slider min & max if there are no defaults.
              default_min = parseFloat(($min.val() == '') ? sliderOptions.min : $min.val(), 10);
              default_max = parseFloat(($max.val() == '') ? sliderOptions.max : $max.val(), 10);
              // Set the element value in case we are using the slider min & max.
              $min.val(default_min);
              $max.val(default_max);

              $min.parents('div.views-widget').after(
                $('<div class="bef-slider"></div>').slider({
                  range: true,
                  min: parseFloat(sliderOptions.min, 10),
                  max: parseFloat(sliderOptions.max, 10),
                  step: parseFloat(sliderOptions.step, 10),
                  animate: sliderOptions.animate ? sliderOptions.animate : false,
                  orientation: sliderOptions.orientation,
                  values: [default_min, default_max],
                  // Update the textfields as the sliders are moved
                  slide: function (event, ui) {
                    $min.val(ui.values[0]);
                    $max.val(ui.values[1]);
                  },
                  // This fires when the value is set programmatically or the
                  // stop event fires.
                  // This takes care of the case that a user enters a value
                  // into the text field that is not a valid step of the slider.
                  // In that case the slider will go to the nearest step and
                  // this change event will update the text area.
                  change: function (event, ui) {
                    $min.val(ui.values[0]);
                    $max.val(ui.values[1]);
                  },
                  // Attach stop listeners.
                  stop: function(event, ui) {
                    // Click the auto submit button.
                    $(this).parents('form').find('.ctools-auto-submit-click').click();
                  }
                })
              );

              // Update the slider when the fields are updated.
              $min.blur(function() {
                befUpdateSlider($(this), 0, sliderOptions);
              });
              $max.blur(function() {
                befUpdateSlider($(this), 1, sliderOptions);
              });
            }
            // This is single value filter.
            else if ($input.length == 1) {
              if ($input.attr('id') != 'edit-' + sliderOptions.id) {
                return;
              }

              // Get the default value. We use slider min if there is no default.
              var default_value = parseFloat(($input.val() == '') ? sliderOptions.min : $input.val(), 10);
              // Set the element value in case we are using the slider min.
              $input.val(default_value);

              $input.parents('div.views-widget').after(
                $('<div class="bef-slider"></div>').slider({
                  min: parseFloat(sliderOptions.min, 10),
                  max: parseFloat(sliderOptions.max, 10),
                  step: parseFloat(sliderOptions.step, 10),
                  animate: sliderOptions.animate ? sliderOptions.animate : false,
                  orientation: sliderOptions.orientation,
                  value: default_value,
                  // Update the textfields as the sliders are moved.
                  slide: function (event, ui) {
                    $input.val(ui.value);
                  },
                  // This fires when the value is set programmatically or the
                  // stop event fires.
                  // This takes care of the case that a user enters a value
                  // into the text field that is not a valid step of the slider.
                  // In that case the slider will go to the nearest step and
                  // this change event will update the text area.
                  change: function (event, ui) {
                    $input.val(ui.value);
                  },
                  // Attach stop listeners.
                  stop: function(event, ui) {
                    // Click the auto submit button.
                    $(this).parents('form').find('.ctools-auto-submit-click').click();
                  }
                })
              );

              // Update the slider when the field is updated.
              $input.blur(function() {
                befUpdateSlider($(this), null, sliderOptions);
              });
            }
            else {
              return;
            }
          })
        });
      }
    }
  };

  // This is only needed to provide ajax functionality
  Drupal.behaviors.better_exposed_filters_select_as_links = {
    attach: function(context, settings) {

      $('.bef-select-as-links', context).once(function() {
        var $element = $(this);

        // Check if ajax submission is enabled. If it's not enabled then we
        // don't need to attach our custom submission handling, because the
        // links are already properly built.

        // First check if any ajax views are contained in the current page.
        if (typeof settings.views == 'undefined' || typeof settings.views.ajaxViews == 'undefined') {
          return;
        }

        // Now check that the view for which the current filter block is used,
        // is part of the configured ajax views.
        var $uses_ajax = false;
        $.each(settings.views.ajaxViews, function(i, item) {
          var $view_name = item.view_name.replace(/_/g, '-');
          var $view_display_id = item.view_display_id.replace(/_/g, '-');
          var $id = 'views-exposed-form-' + $view_name + '-' + $view_display_id;
          var $form_id = $element.parents('form').attr('id');
          if ($form_id == $id) {
            $uses_ajax = true;
            return;
          }
        });

        // If no ajax is used for form submission, we quit here.
        if (!$uses_ajax) {
          return;
        }

        // Attach selection toggle and form submit on click to each link.
        $(this).find('a').click(function(event) {
          var $wrapper = $(this).parents('.bef-select-as-links');
          var $options = $wrapper.find('select option');
          // We have to prevent the page load triggered by the links.
          event.preventDefault();
          event.stopPropagation();
          // Un select old select value.
          $wrapper.find('select option').removeAttr('selected');

          // Set the corresponding option inside the select element as selected.
          var link_text = $(this).text();
          $selected = $options.filter(function() {
            return $(this).text() == link_text;
          });
          $selected.attr('selected', 'selected');
          $wrapper.find('.bef-new-value').val($selected.val());
          $wrapper.find('a').removeClass('active');
          $(this).addClass('active');
          // Submit the form.
          $wrapper.parents('form').find('.views-submit-button *[type=submit]').click();
        });
      });
    }
  };

  Drupal.behaviors.betterExposedFiltersRequiredFilter = {
    attach: function(context, settings) {
      // Required checkboxes should re-check all inputs if a user un-checks
      // them all.
      $('.bef-select-as-checkboxes', context).once('bef-required-filter').ajaxComplete(function (e, xhr, s) {
        var $element = $(this);

        if (typeof settings.views == 'undefined' || typeof settings.views.ajaxViews == 'undefined') {
          return;
        }

        // Now check that the view for which the current filter block is used,
        // is part of the configured ajax views.
        var $view_name;
        var $view_display_id;
        var $uses_ajax = false;
        $.each(settings.views.ajaxViews, function(i, item) {
          $view_name = item.view_name;
          $view_display_id = item.view_display_id;
          var $id = 'views-exposed-form-' + $view_name.replace(/_/g, '-') + '-' + $view_display_id.replace(/_/g, '-');
          var $form_id = $element.parents('form').attr('id');
          if ($form_id == $id) {
            $uses_ajax = true;
            return;
          }
        });

        var $filter_name = $('input', this).attr('name').slice(0, -2);
        if (Drupal.settings.better_exposed_filters.views[$view_name].displays[$view_display_id].filters[$filter_name].required && $('input:checked', this).length == 0) {
          $('input', this).prop('checked', true);
        }
      });
    }
  }

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');
  }

  /**
   * Update a slider when a related input element is changed.
   *
   * We don't need to check whether the new value is valid based on slider min,
   * max, and step because the slider will do that automatically and then we
   * update the textfield on the slider's change event.
   *
   * We still have to make sure that the min & max values of a range slider
   * don't pass each other though, however once this jQuery UI bug is fixed we
   * won't have to. - http://bugs.jqueryui.com/ticket/3762
   *
   * @param $el
   *   A jQuery object of the updated element.
   * @param valIndex
   *   The index of the value for a range slider or null for a non-range slider.
   * @param sliderOptions
   *   The options for the current slider.
   */
  function befUpdateSlider($el, valIndex, sliderOptions) {
    var val = parseFloat($el.val(), 10),
        currentMin = $el.parents('div.views-widget').next('.bef-slider').slider('values', 0),
        currentMax = $el.parents('div.views-widget').next('.bef-slider').slider('values', 1);
    // If we have a range slider.
    if (valIndex != null) {
      // Make sure the min is not more than the current max value.
      if (valIndex == 0 && val > currentMax) {
        val = currentMax;
      }
      // Make sure the max is not more than the current max value.
      if (valIndex == 1 && val < currentMin) {
        val = currentMin;
      }
      // If the number is invalid, go back to the last value.
      if (isNaN(val)) {
        val = $el.parents('div.views-widget').next('.bef-slider').slider('values', valIndex);
      }
    }
    else {
      // If the number is invalid, go back to the last value.
      if (isNaN(val)) {
        val = $el.parents('div.views-widget').next('.bef-slider').slider('value');
      }
    }
    // Make sure we are a number again.
    val = parseFloat(val, 10);
    // Set the slider to the new value.
    // The slider's change event will then update the textfield again so that
    // they both have the same value.
    if (valIndex != null) {
      $el.parents('div.views-widget').next('.bef-slider').slider('values', valIndex, val);
    }
    else {
      $el.parents('div.views-widget').next('.bef-slider').slider('value', val);
    }
  }

}) (jQuery);
;
(function($){
/**
 * To make a form auto submit, all you have to do is 3 things:
 *
 * ctools_add_js('auto-submit');
 *
 * On gadgets you want to auto-submit when changed, add the ctools-auto-submit
 * class. With FAPI, add:
 * @code
 *  '#attributes' => array('class' => array('ctools-auto-submit')),
 * @endcode
 *
 * If you want to have auto-submit for every form element,
 * add the ctools-auto-submit-full-form to the form. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-full-form')),
 * @endcode
 *
 * If you want to exclude a field from the ctool-auto-submit-full-form auto submission,
 * add the class ctools-auto-submit-exclude to the form element. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-exclude')),
 * @endcode
 *
 * Finally, you have to identify which button you want clicked for autosubmit.
 * The behavior of this button will be honored if it's ajaxy or not:
 * @code
 *  '#attributes' => array('class' => array('ctools-use-ajax', 'ctools-auto-submit-click')),
 * @endcode
 *
 * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are supported. We probably
 * could use additional support for HTML5 input types.
 */

Drupal.behaviors.CToolsAutoSubmit = {
  attach: function(context) {
    // 'this' references the form element
    function triggerSubmit (e) {
      var $this = $(this);
      if (!$this.hasClass('ctools-ajaxing')) {
        $this.find('.ctools-auto-submit-click').click();
      }
    }

    // the change event bubbles so we only need to bind it to the outer form
    $('form.ctools-auto-submit-full-form', context)
      .add('.ctools-auto-submit', context)
      .filter('form, select, input:not(:text, :submit)')
      .once('ctools-auto-submit')
      .change(function (e) {
        // don't trigger on text change for full-form
        if ($(e.target).is(':not(:text, :submit, .ctools-auto-submit-exclude)')) {
          triggerSubmit.call(e.target.form);
        }
      });

    // e.keyCode: key
    var discardKeyCode = [
      16, // shift
      17, // ctrl
      18, // alt
      20, // caps lock
      33, // page up
      34, // page down
      35, // end
      36, // home
      37, // left arrow
      38, // up arrow
      39, // right arrow
      40, // down arrow
       9, // tab
      13, // enter
      27  // esc
    ];
    // Don't wait for change event on textfields
    $('.ctools-auto-submit-full-form input:text, input:text.ctools-auto-submit', context)
      .filter(':not(.ctools-auto-submit-exclude)')
      .once('ctools-auto-submit', function () {
        // each textinput element has his own timeout
        var timeoutID = 0;
        $(this)
          .bind('keydown keyup', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID && clearTimeout(timeoutID);
            }
          })
          .keyup(function(e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          })
          .bind('change', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          });
      });
  }
}
})(jQuery);
;
/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = {
  attach: function (context) {
    if ($.viewsUi && $.viewsUi.tabs) {
      $('#views-tabset').once('views-processed').viewsTabs({
        selectedClass: 'active'
      });
    }

    $('a.views-remove-link').once('views-processed').click(function(event) {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      event.preventDefault();
   });
  /**
    * Here is to handle display deletion
    * (checking in the hidden checkbox and hiding out the row)
    */
  $('a.display-remove-link')
    .addClass('display-processed')
    .click(function() {
      var id = $(this).attr('id').replace('display-remove-link-', '');
      $('#display-row-' + id).hide();
      $('#display-removed-' + id).attr('checked', true);
      return false;
  });
  }
};

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    if (typeof(pairs[i]) == 'string') {
      var pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] != 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function ($) {

/**
 * Attaches the AJAX behavior to Views exposed filter forms and key View links.
 */
Drupal.behaviors.ViewsAjaxView = {};
Drupal.behaviors.ViewsAjaxView.attach = function() {
  if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
    $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
      Drupal.views.instances[i] = new Drupal.views.ajaxView(settings);
    });
  }
};

Drupal.views = {};
Drupal.views.instances = {};

/**
 * Javascript object for a certain view.
 */
Drupal.views.ajaxView = function(settings) {
  var selector = '.view-dom-id-' + settings.view_dom_id;
  this.$view = $(selector);

  // Retrieve the path to use for views' ajax.
  var ajax_path = Drupal.settings.views.ajax_path;

  // If there are multiple views this might've ended up showing up multiple times.
  if (ajax_path.constructor.toString().indexOf("Array") != -1) {
    ajax_path = ajax_path[0];
  }

  // Check if there are any GET parameters to send to views.
  var queryString = window.location.search || '';
  if (queryString !== '') {
    // Remove the question mark and Drupal path component if any.
    var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
    if (queryString !== '') {
      // If there is a '?' in ajax_path, clean url are on and & should be used to add parameters.
      queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
    }
  }

  this.element_settings = {
    url: ajax_path + queryString,
    submit: settings,
    setClick: true,
    event: 'click',
    selector: selector,
    progress: { type: 'throbber' }
  };

  this.settings = settings;

  // Add the ajax to exposed forms.
  this.$exposed_form = this.$view.children('.view-filters').children('form');
  this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

  // Add the ajax to pagers.
  this.$view
    // Don't attach to nested views. Doing so would attach multiple behaviors
    // to a given element.
    .filter(jQuery.proxy(this.filterNestedViews, this))
    .once(jQuery.proxy(this.attachPagerAjax, this));

  // Add a trigger to update this view specifically. In order to trigger a
  // refresh use the following code.
  //
  // @code
  // jQuery('.view-name').trigger('RefreshView');
  // @endcode
  // Add a trigger to update this view specifically.
  var self_settings = this.element_settings;
  self_settings.event = 'RefreshView';
  this.refreshViewAjax = new Drupal.ajax(this.selector, this.$view, self_settings);
};

Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
  var button = $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form);
  button = button[0];

  this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
};

Drupal.views.ajaxView.prototype.filterNestedViews= function() {
  // If there is at least one parent with a view class, this view
  // is nested (e.g., an attachment). Bail.
  return !this.$view.parents('.view').size();
};

/**
 * Attach the ajax behavior to each link.
 */
Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
  this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
  .each(jQuery.proxy(this.attachPagerLinkAjax, this));
};

/**
 * Attach the ajax behavior to a singe link.
 */
Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
  var $link = $(link);
  var viewData = {};
  var href = $link.attr('href');
  // Construct an object using the settings defaults and then overriding
  // with data specific to the link.
  $.extend(
    viewData,
    this.settings,
    Drupal.Views.parseQueryString(href),
    // Extract argument data from the URL.
    Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
  );

  // For anchor tags, these will go to the target of the anchor rather
  // than the usual location.
  $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

  this.element_settings.submit = viewData;
  this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings);
};

Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
  // Scroll to the top of the view. This will allow users
  // to browse newly loaded content after e.g. clicking a pager
  // link.
  var offset = $(response.selector).offset();
  // We can't guarantee that the scrollable object should be
  // the body, as the view could be embedded in something
  // more complex such as a modal popup. Recurse up the DOM
  // and scroll the first element that has a non-zero top.
  var scrollTarget = response.selector;
  while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
    scrollTarget = $(scrollTarget).parent();
  }
  // Only scroll upward
  if (offset.top - 10 < $(scrollTarget).scrollTop()) {
    $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
  }
};

})(jQuery);
;
/*!
 * jQuery meanMenu v2.0.6 (Drupal Responsive Menus version)
 * @Copyright (C) 2012-2013 Chris Wharton (https://github.com/weare2ndfloor/meanMenu)
 *
 */
(function(e){"use strict";e.fn.meanmenu=function(t){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanRevealHoverColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:true,meanExpandableChildren:true,meanExpand:"+",meanContract:"-",meanRemoveAttrs:false,onePage:false,removeElements:""};var t=e.extend(n,t);var r=document.documentElement.clientWidth||document.body.clientWidth;return this.each(function(){function x(){if(a=="center"){var e=document.documentElement.clientWidth||document.body.clientWidth;var t=e/2-22+"px";C="left:"+t+";right:auto;";if(!S){jQuery(".meanmenu-reveal").css("left",t)}else{jQuery(".meanmenu-reveal").animate({left:t})}}}function A(){if(jQuery(L).is(".meanmenu-reveal.meanclose")){L.html(s)}else{L.html(u)}}function O(){jQuery(".mean-bar,.mean-push").remove();jQuery(i).removeClass("mean-container");jQuery(e).show();T=false;N=false;jQuery(E).removeClass("mean-remove")}function M(){if(r<=h){jQuery(E).addClass("mean-remove");N=true;jQuery(i).addClass("mean-container");jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+k+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var t=jQuery(n).html();jQuery(".mean-nav").html(t);if(b){jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).removeAttr("class");jQuery(this).removeAttr("id")})}jQuery(e).before('<div class="mean-push" />');jQuery(".mean-push").css("margin-top",p);jQuery(e).hide();jQuery(".meanmenu-reveal").show();jQuery(d).html(u);L=jQuery(d);jQuery(".mean-nav ul").hide();if(v){if(m){jQuery(".mean-nav ul ul").each(function(){if(jQuery(this).children().length){jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+o+'">'+g+"</a>")}});jQuery(".mean-expand").on("click",function(e){e.preventDefault();if(jQuery(this).hasClass("mean-clicked")){jQuery(this).text(g);jQuery(this).prev("ul").slideUp(300,function(){})}else{jQuery(this).text(y);jQuery(this).prev("ul").slideDown(300,function(){})}jQuery(this).toggleClass("mean-clicked")})}else{jQuery(".mean-nav ul ul").show()}}else{jQuery(".mean-nav ul ul").hide()}jQuery(".mean-nav ul li").last().addClass("mean-last");L.removeClass("meanclose");jQuery(L).click(function(e){e.preventDefault();if(T==false){L.css("text-align","center");L.css("text-indent","0");L.css("font-size",o);jQuery(".mean-nav ul:first").slideDown();T=true}else{jQuery(".mean-nav ul:first").slideUp();T=false}L.toggleClass("meanclose");A();jQuery(E).addClass("mean-remove")});if(w){jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp();T=false;jQuery(L).toggleClass("meanclose").html(u)})}}else{O()}}var e=t.meanMenuTarget;var n=t.meanMenuTarget.clone();n.find(".contextual-links-wrapper").remove().find("ul.contextual-links").remove();var i=t.meanMenuContainer;var s=t.meanMenuClose;var o=t.meanMenuCloseSize;var u=t.meanMenuOpen;var a=t.meanRevealPosition;var f=t.meanRevealPositionDistance;var l=t.meanRevealColour;var c=t.meanRevealHoverColour;var h=t.meanScreenWidth;var p=t.meanNavPush;var d=".meanmenu-reveal";var v=t.meanShowChildren;var m=t.meanExpandableChildren;var g=t.meanExpand;var y=t.meanContract;var b=t.meanRemoveAttrs;var w=t.onePage;var E=t.removeElements;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i)){var S=true}if(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i)){jQuery("html").css("overflow-y","scroll")}var T=false;var N=false;if(a=="right"){C="right:"+f+";left:auto;"}if(a=="left"){var C="left:"+f+";right:auto;"}x();var k="background:"+l+";color:"+l+";"+C;var L="";if(!S){jQuery(window).resize(function(){r=document.documentElement.clientWidth||document.body.clientWidth;if(r>h){O()}else{O()}if(r<=h){M();x()}else{O()}})}window.onorientationchange=function(){x();r=document.documentElement.clientWidth||document.body.clientWidth;if(r>=h){O()}if(r<=h){if(N==false){M()}}};M()})}})(jQuery)
;
/**
 * @file
 * Integrate Mean Menu library with Responsive Menus module.
 */
(function ($) {
  Drupal.behaviors.responsive_menus_mean_menu = {
    attach: function (context, settings) {
      settings.responsive_menus = settings.responsive_menus || {};
      $.each(settings.responsive_menus, function(ind, iteration) {
        if (iteration.responsive_menus_style != 'mean_menu') {
          return true;
        }
        if (!iteration.selectors.length) {
          return;
        }
        // Set 1/0 to true/false respectively.
        $.each(iteration, function(key, value) {
          if (value == 0) {
            iteration[key] = false;
          }
          if (value == 1) {
            iteration[key] = true;
          }
        });
        // Call meanmenu() with our custom settings.
        $(iteration.selectors).once('responsive-menus-mean-menu', function() {
          $(this).meanmenu({
            meanMenuClose: iteration.close_txt || "X",
            meanMenuCloseSize: iteration.close_size || "18px",
            meanMenuOpen: iteration.trigger_txt || "<span /><span /><span />",
            meanRevealPosition: iteration.position || "right",
            meanScreenWidth: iteration.media_size || "480",
            meanExpand: iteration.expand_txt || "+",
            meanContract: iteration.contract_txt || "-",
            meanShowChildren: iteration.show_children,
            meanExpandableChildren: iteration.expand_children,
            meanRemoveAttrs: iteration.remove_attrs
          });
        });
      });

    }
  };
}(jQuery));
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 || (Drupal.settings.googleanalytics.trackDomainMode == 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(href) });
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;

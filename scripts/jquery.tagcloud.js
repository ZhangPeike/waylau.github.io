(function(i){i.fn.tagcloud=function(b){var a=i.extend({},i.fn.tagcloud.defaults,b);tagWeights=this.map(function(){return i(this).attr("rel")});tagWeights=jQuery.makeArray(tagWeights).sort(g);lowest=tagWeights[0];highest=tagWeights.pop();range=highest-lowest;if(range===0){range=1}if(a.size){fontIncr=(a.size.end-a.size.start)/range}if(a.color){colorIncr=l(a.color,range)}return this.each(function(){weighting=i(this).attr("rel")-lowest;if(a.size){i(this).css({"font-size":a.size.start+(weighting*fontIncr)+a.size.unit})}if(a.color){i(this).css({color:j(a.color,colorIncr,weighting)})}})};i.fn.tagcloud.defaults={size:{start:14,end:18,unit:"pt"}};function h(a){if(a.length==4){a=jQuery.map(/\w+/.exec(a),function(b){return b+b}).join("")}hex=/(\w{2})(\w{2})(\w{2})/.exec(a);return[parseInt(hex[1],16),parseInt(hex[2],16),parseInt(hex[3],16)]}function k(a){return"#"+jQuery.map(a,function(b){hex=b.toString(16);hex=(hex.length==1)?"0"+hex:hex;return hex}).join("")}function l(a,b){return jQuery.map(h(a.end),function(c,d){return(c-h(a.start)[d])/b})}function j(b,c,a){rgb=jQuery.map(h(b.start),function(d,e){ref=Math.round(d+(c[e]*a));if(ref>255){ref=255}else{if(ref<0){ref=0}}return ref});return k(rgb)}function g(a,b){return a-b}})(jQuery);
module.exports=__NEXT_REGISTER_PAGE("/workshops",function(){var e=webpackJsonp([5],{25:function(e,t,n){"use strict";n.d(t,"a",function(){return x});var r=n(1);var o=n.n(r);var a=n(0);var i=n.n(a);var s=n(26);var l=n(7);var c=n.n(l);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function m(e,t,n){t&&p(e.prototype,t);n&&p(e,n);return e}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return d(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=function(e){b(t,e);function t(e){var n;u(this,t);n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));Object.defineProperty(d(n),"changeStory",{configurable:true,enumerable:true,writable:true,value:function e(t){document.querySelector(".story").classList.add("no-opacity");setTimeout(function(){n.setState({storyIndex:t});document.querySelector(".story").classList.remove("no-opacity")},700)}});Object.defineProperty(d(n),"previousStory",{configurable:true,enumerable:true,writable:true,value:function e(){var t=(n.state.storyIndex+s["a"].STORIES.length-1)%s["a"].STORIES.length;n.changeStory(t)}});Object.defineProperty(d(n),"nextStory",{configurable:true,enumerable:true,writable:true,value:function e(){var t=(n.state.storyIndex+1)%s["a"].STORIES.length;n.changeStory(t)}});n.state={storyIndex:Math.floor(Math.random()*s["a"].STORIES.length)};return n}m(t,[{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-1500296377 success"},i.a.createElement("div",{className:"jsx-1500296377 heading"},"Success Stories"),i.a.createElement("div",{className:"jsx-1500296377 main"},i.a.createElement("div",{onClick:this.previousStory,className:"jsx-1500296377 arrow"},"<"),i.a.createElement("div",{className:"jsx-1500296377 story"},i.a.createElement("div",{className:"jsx-1500296377 quote"},s["a"].STORIES[this.state.storyIndex].quote),i.a.createElement("div",{className:"jsx-1500296377 speaker"},"- ",s["a"].STORIES[this.state.storyIndex].speaker)),i.a.createElement("div",{onClick:this.nextStory,className:"jsx-1500296377 arrow"},">")),i.a.createElement(c.a,{prefetch:true,href:"/testimonials"},i.a.createElement("a",{className:"jsx-1500296377 more"},"More >")),i.a.createElement(o.a,{styleId:"1500296377",css:[".success.jsx-1500296377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:320px;background-color:#3EB1C8;}",".heading.jsx-1500296377{font-size:36px;text-transform:uppercase;color:#EEEEEE;font-weight:bold;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;padding-top:40px;}",".main.jsx-1500296377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:65%;height:100px;padding-top:40px;}",".arrow.jsx-1500296377{font-size:36px;font-weight:bold;color:#833177;cursor:pointer;}",".story.jsx-1500296377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 100px;text-align:center;color:#EEEEEE;font-size:18px;opacity:1;-webkit-transition:opacity 0.7s ease-in;transition:opacity 0.7s ease-in;}",".no-opacity.jsx-1500296377{opacity:0;}",".speaker.jsx-1500296377{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;padding:5px 40px 0;}",".more.jsx-1500296377{text-transform:uppercase;color:#833177;font-size:22px;font-weight:bold;padding-top:20px;}"]}))}}]);return t}(i.a.Component)},307:function(e,t,n){e.exports=n(308)},308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});n.d(t,"default",function(){return k});var r=n(1);var o=n.n(r);var a=n(0);var i=n.n(a);var s=n(43);var l=n(12);var c=n(22);var f=n(7);var u=n.n(f);var p=n(23);var m=n(24);var y=n(25);function b(e){b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return b(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function w(e,t,n){t&&x(e.prototype,t);n&&x(e,n);return e}function h(e,t){if(t&&("object"===b(t)||"function"===typeof t))return t;return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e){v(t,e);function t(){d(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}w(t,[{key:"componentDidMount",value:function e(){Object(l["a"])()}},{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-1926134434"},i.a.createElement(p["a"],{title:"Workshops"}),i.a.createElement(m["a"],{imgSrc:"paradise.jpg",distance:"40%",color:"#833177"},"Workshops"),i.a.createElement("div",{className:"jsx-1926134434 workshops-container"},i.a.createElement("div",{className:"jsx-1926134434 workshops-copy"},"Crystal can conduct workshops for your workplace, group or event. Offering inspiring information sessions customized to your audience.",i.a.createElement("br",{className:"jsx-1926134434"}),"Lunch’n’Learn sessions:",i.a.createElement("br",{className:"jsx-1926134434"}),"Mindfulness",i.a.createElement("br",{className:"jsx-1926134434"}),"Become Your Own Health Expert",i.a.createElement("br",{className:"jsx-1926134434"}),"BollyX"),i.a.createElement(u.a,{href:"/contact"},i.a.createElement("a",{className:"jsx-1926134434 contact"},"Contact Crystal"))),i.a.createElement(s["a"],{word:"vitality"}),i.a.createElement(y["a"],null),i.a.createElement(c["a"],null),i.a.createElement(o.a,{styleId:"4265980487",css:["body{margin:0;font-family:'Open Sans',sans-serif;min-width:1360px;}","a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}"]}),i.a.createElement(o.a,{styleId:"491285068",css:[".workshops-container.jsx-1926134434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:grey;}",".workshops-copy.jsx-1926134434{padding:40px 20% 30px 20%;font-size:18px;line-height:1.8em;}",".contact.jsx-1926134434{border:1px solid #3EB1C8;padding:4px 24px;text-transform:uppercase;font-weight:bold;font-size:20px;margin-bottom:30px;color:#3EB1C8;-webkit-text-decoration:none;text-decoration:none;}"]}))}}]);return t}(i.a.Component)},43:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var r=n(1);var o=n.n(r);var a=n(0);var i=n.n(a);var s=n(56);var l=n.n(s);var c=n(12);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function m(e,t,n){t&&p(e.prototype,t);n&&p(e,n);return e}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x={wellness:{word:"Well•ness",partOfSpeech:"noun",definition:"The state of being in good health, especially as an actively pursued goal."},empower:{word:"Em•pow•er",partOfSpeech:"verb",definition:"Give someone authority or power to do something."},vitality:{word:"Vi•tal•i•ty",partOfSpeech:"noun",definition:"The state of being strong and active; energy."}};var w=function(e){d(t,e);function t(){u(this,t);return y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}m(t,[{key:"componentDidMount",value:function e(){Object(c["a"])()}},{key:"render",value:function e(){var t=x[this.props.word];return i.a.createElement("div",{className:o.a.dynamic([["1568792581",[l.a]]])+" definition"},i.a.createElement("div",{className:o.a.dynamic([["1568792581",[l.a]]])+" def-word"},t.word),i.a.createElement("div",{className:o.a.dynamic([["1568792581",[l.a]]])+" def-part-of-speech"},t.partOfSpeech),i.a.createElement("div",{className:o.a.dynamic([["1568792581",[l.a]]])+" def-definition"},t.definition),i.a.createElement(o.a,{styleId:"1568792581",css:[".definition.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-image:url(".concat(l.a,");height:250px;font-family:'Sorts Mill Goudy',serif;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;}"),".def-word.__jsx-style-dynamic-selector{font-size:32px;}",".def-part-of-speech.__jsx-style-dynamic-selector{font-size:24px;font-style:italic;}",".def-definition.__jsx-style-dynamic-selector{font-size:24px;}"],dynamic:[l.a]}))}}]);return t}(i.a.Component)}},[307]);return{page:e.default}});
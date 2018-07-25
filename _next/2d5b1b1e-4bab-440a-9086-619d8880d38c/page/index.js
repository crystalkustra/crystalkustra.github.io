module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([0],{25:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(1);var r=n.n(a);var o=n(0);var i=n.n(o);var l=n(26);var s=n(7);var c=n.n(s);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function m(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return x(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){b(t,e);function t(e){var n;p(this,t);n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));Object.defineProperty(x(n),"changeStory",{configurable:true,enumerable:true,writable:true,value:function e(t){document.querySelector(".story").classList.add("no-opacity");setTimeout(function(){n.setState({storyIndex:t});document.querySelector(".story").classList.remove("no-opacity")},700)}});Object.defineProperty(x(n),"previousStory",{configurable:true,enumerable:true,writable:true,value:function e(){var t=(n.state.storyIndex+l["a"].STORIES.length-1)%l["a"].STORIES.length;n.changeStory(t)}});Object.defineProperty(x(n),"nextStory",{configurable:true,enumerable:true,writable:true,value:function e(){var t=(n.state.storyIndex+1)%l["a"].STORIES.length;n.changeStory(t)}});n.state={storyIndex:Math.floor(Math.random()*l["a"].STORIES.length)};return n}m(t,[{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-1500296377 success"},i.a.createElement("div",{className:"jsx-1500296377 heading"},"Success Stories"),i.a.createElement("div",{className:"jsx-1500296377 main"},i.a.createElement("div",{onClick:this.previousStory,className:"jsx-1500296377 arrow"},"<"),i.a.createElement("div",{className:"jsx-1500296377 story"},i.a.createElement("div",{className:"jsx-1500296377 quote"},l["a"].STORIES[this.state.storyIndex].quote),i.a.createElement("div",{className:"jsx-1500296377 speaker"},"- ",l["a"].STORIES[this.state.storyIndex].speaker)),i.a.createElement("div",{onClick:this.nextStory,className:"jsx-1500296377 arrow"},">")),i.a.createElement(c.a,{prefetch:true,href:"/testimonials"},i.a.createElement("a",{className:"jsx-1500296377 more"},"More >")),i.a.createElement(r.a,{styleId:"1500296377",css:[".success.jsx-1500296377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:320px;background-color:#3EB1C8;}",".heading.jsx-1500296377{font-size:36px;text-transform:uppercase;color:#EEEEEE;font-weight:bold;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;padding-top:40px;}",".main.jsx-1500296377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:65%;height:100px;padding-top:40px;}",".arrow.jsx-1500296377{font-size:36px;font-weight:bold;color:#833177;cursor:pointer;}",".story.jsx-1500296377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 100px;text-align:center;color:#EEEEEE;font-size:18px;opacity:1;-webkit-transition:opacity 0.7s ease-in;transition:opacity 0.7s ease-in;}",".no-opacity.jsx-1500296377{opacity:0;}",".speaker.jsx-1500296377{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;padding:5px 40px 0;}",".more.jsx-1500296377{text-transform:uppercase;color:#833177;font-size:22px;font-weight:bold;padding-top:20px;}"]}))}}]);return t}(i.a.Component)},313:function(e,t,n){e.exports=n(314)},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(1);var r=n.n(a);var o=n(0);var i=n.n(o);var l=n(85);var s=n(43);var c=n(12);var f=n(22);var p=n(23);var u=n(166);var m=n.n(u);var y=n(84);var b=n(7);var x=n.n(b);function d(e){d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return d(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function h(e,t,n){t&&g(e.prototype,t);n&&g(e,n);return e}function v(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){j(t,e);function t(){w(this,t);return v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}h(t,[{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-930825350 meet"},i.a.createElement("div",{className:"jsx-930825350 div-left"},i.a.createElement("img",{src:m.a,className:"jsx-930825350 img-crystal"})),i.a.createElement("div",{className:"jsx-930825350 div-right"},i.a.createElement(y["a"],null,"Crystal Kustra is a high-level Certified Holistic Lifestyle Coach and Personal Trainer who wants to help you find your optimal level of well-being. Her coaching combines extensive knowledge of nutrition, fitness and stress-management along with her passion for high-quality living and love of helping others feel their best!"),i.a.createElement("div",{className:"jsx-930825350 meet-cta"},i.a.createElement(x.a,{prefetch:true,href:"/about"},i.a.createElement("a",{className:"jsx-930825350"},"Meet Crystal >")))),i.a.createElement(r.a,{styleId:"930825350",css:[".meet.jsx-930825350{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;}",".div-left.jsx-930825350{position:absolute;top:-100px;left:0;height:calc(100% + 100px);width:calc(100% - 70px);padding-left:70px;z-index:1;}",".div-right.jsx-930825350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:44%;padding:0 200px 50px 0;z-index:2;}",".img-crystal.jsx-930825350{display:block;width:auto;height:100%;}",".meet-cta.jsx-930825350{padding-top:30px;font-size:20px;text-transform:uppercase;font-weight:bolder;color:#3EB1C8;}","a.jsx-930825350{-webkit-text-decoration:none;text-decoration:none;}"]}))}}]);return t}(i.a.Component);var S=n(86);var O=n(24);var _=n(25);n.d(t,"default",function(){return M});function N(e){N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return N(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function T(e,t,n){t&&C(e.prototype,t);n&&C(e,n);return e}function z(e,t){if(t&&("object"===N(t)||"function"===typeof t))return t;return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var M=function(e){R(t,e);function t(){P(this,t);return z(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}T(t,[{key:"componentDidMount",value:function e(){Object(c["a"])()}},{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-4265980487"},i.a.createElement(p["a"],{title:"Home"}),i.a.createElement(O["a"],{imgSrc:"forest-with-copy.jpg"}),i.a.createElement(s["a"],{word:"wellness"}),i.a.createElement(E,null),i.a.createElement(l["a"],null),i.a.createElement(O["a"],{imgSrc:"water-with-copy.jpg"}),i.a.createElement(S["a"],null),i.a.createElement(_["a"],null),i.a.createElement(f["a"],null),i.a.createElement(r.a,{styleId:"4265980487",css:["body{margin:0;font-family:'Open Sans',sans-serif;min-width:1360px;}","a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}"]}))}}]);return t}(i.a.Component)},43:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var a=n(1);var r=n.n(a);var o=n(0);var i=n.n(o);var l=n(56);var s=n.n(l);var c=n(12);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function m(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d={wellness:{word:"Well•ness",partOfSpeech:"noun",definition:"The state of being in good health, especially as an actively pursued goal."},empower:{word:"Em•pow•er",partOfSpeech:"verb",definition:"Give someone authority or power to do something."},vitality:{word:"Vi•tal•i•ty",partOfSpeech:"noun",definition:"The state of being strong and active; energy."}};var w=function(e){x(t,e);function t(){p(this,t);return y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}m(t,[{key:"componentDidMount",value:function e(){Object(c["a"])()}},{key:"render",value:function e(){var t=d[this.props.word];return i.a.createElement("div",{className:r.a.dynamic([["1568792581",[s.a]]])+" definition"},i.a.createElement("div",{className:r.a.dynamic([["1568792581",[s.a]]])+" def-word"},t.word),i.a.createElement("div",{className:r.a.dynamic([["1568792581",[s.a]]])+" def-part-of-speech"},t.partOfSpeech),i.a.createElement("div",{className:r.a.dynamic([["1568792581",[s.a]]])+" def-definition"},t.definition),i.a.createElement(r.a,{styleId:"1568792581",css:[".definition.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-image:url(".concat(s.a,");height:250px;font-family:'Sorts Mill Goudy',serif;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;}"),".def-word.__jsx-style-dynamic-selector{font-size:32px;}",".def-part-of-speech.__jsx-style-dynamic-selector{font-size:24px;font-style:italic;}",".def-definition.__jsx-style-dynamic-selector{font-size:24px;}"],dynamic:[s.a]}))}}]);return t}(i.a.Component)},84:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a=n(1);var r=n.n(a);var o=n(0);var i=n.n(o);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function f(e,t,n){t&&c(e.prototype,t);n&&c(e,n);return e}function p(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){m(t,e);function t(){s(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-60377114 bio"},i.a.createElement("div",{className:"jsx-60377114 bio-text"},this.props.children),i.a.createElement("div",{className:"jsx-60377114 achievement"},"B.A Degree in Honours Psychology"),i.a.createElement("div",{className:"jsx-60377114 detail"},"University of Waterloo"),i.a.createElement("div",{className:"jsx-60377114 achievement"},"Diploma in Fitness & Health Promotion"),i.a.createElement("div",{className:"jsx-60377114 detail"},"George Brown College"),i.a.createElement("div",{className:"jsx-60377114 achievement"},"Certified Personal Training Specialist"),i.a.createElement("div",{className:"jsx-60377114 detail"},"Can-Fit-Pro"),i.a.createElement("div",{className:"jsx-60377114 achievement"},"Certified Level 3 Holistic Lifestyle Coach"),i.a.createElement("div",{className:"jsx-60377114 detail"},"C.H.E.K Institute"),i.a.createElement("div",{className:"jsx-60377114 achievement"},"Certified BollyX Instructor"),i.a.createElement(r.a,{styleId:"60377114",css:[".bio.jsx-60377114{color:grey;}",".bio-text.jsx-60377114{font-size:18px;line-height:1.8em;padding:20px 0;}",".achievement.jsx-60377114{font-size:18px;}",".detail.jsx-60377114{font-size:15px;padding-bottom:10px;}"]}))}}]);return t}(i.a.Component)},85:function(e,t,n){"use strict";n.d(t,"a",function(){return x});var a=n(1);var r=n.n(a);var o=n(0);var i=n.n(o);var l=n(7);var s=n.n(l);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function u(e,t,n){t&&p(e.prototype,t);n&&p(e,n);return e}function m(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){b(t,e);function t(){f(this,t);return m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,[{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-2987129803 book"},i.a.createElement("div",{className:"jsx-2987129803 book-1"},"FREE 30 minute information session with Crystal"),i.a.createElement("div",{className:"jsx-2987129803 book-2"},"Let's see how I can help you on YOUR",i.a.createElement("br",{className:"jsx-2987129803"}),"journey to optimal health and well-being"),i.a.createElement(s.a,{prefetch:true,href:"/contact"},i.a.createElement("a",{className:"jsx-2987129803"},"Book Your Session")),i.a.createElement(r.a,{styleId:"2987129803",css:[".book.jsx-2987129803{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:250px;background-color:#833177;color:white;text-align:center;font-size:18px;}",".book-1.jsx-2987129803{padding-bottom:10px;}",".book-2.jsx-2987129803{padding-bottom:40px;}","a.jsx-2987129803{border:1px solid white;padding:4px 24px;text-transform:uppercase;font-weight:bold;font-size:20px;}"]}))}}]);return t}(i.a.Component)},86:function(e,t,n){"use strict";n.d(t,"a",function(){return x});var a=n(1);var r=n.n(a);var o=n(0);var i=n.n(o);var l=n(7);var s=n.n(l);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function u(e,t,n){t&&p(e.prototype,t);n&&p(e,n);return e}function m(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){b(t,e);function t(){f(this,t);return m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,[{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-4150552167 packages"},i.a.createElement("div",{className:"jsx-4150552167 packages-title"},"Coaching Packages"),i.a.createElement("div",{className:"jsx-4150552167 packages-list"},i.a.createElement("div",{className:"jsx-4150552167 package"},i.a.createElement("div",{className:"jsx-4150552167 package-name"},"Habit Kickstarter"),i.a.createElement("div",{className:"jsx-4150552167 package-package"},"Package"),i.a.createElement("div",{className:"jsx-4150552167 package-price"},"5 sessions for $450.00 (10% off)"),i.a.createElement("div",{className:"jsx-4150552167 package-description"},"Get set up in the direction of your dream life."),i.a.createElement("div",{className:"jsx-4150552167 package-more"},i.a.createElement(s.a,{prefetch:true,href:"/packages"},i.a.createElement("a",{className:"jsx-4150552167"},"More >")))),i.a.createElement("div",{className:"jsx-4150552167 package"},i.a.createElement("div",{className:"jsx-4150552167 package-name"},"Lifestyle Renovation"),i.a.createElement("div",{className:"jsx-4150552167 package-package"},"Package"),i.a.createElement("div",{className:"jsx-4150552167 package-price"},"10 sessions for $850.00 (15% off)"),i.a.createElement("div",{className:"jsx-4150552167 package-description"},"Build the habits and the confidence to continue on toward your dream life."),i.a.createElement("div",{className:"jsx-4150552167 package-more"},i.a.createElement(s.a,{prefetch:true,href:"/packages"},i.a.createElement("a",{className:"jsx-4150552167"},"More >")))),i.a.createElement("div",{className:"jsx-4150552167 package"},i.a.createElement("div",{className:"jsx-4150552167 package-name"},"Vitality Transformation"),i.a.createElement("div",{className:"jsx-4150552167 package-package"},"Package"),i.a.createElement("div",{className:"jsx-4150552167 package-price"},"15 sessions for $1200.00 (20% off)"),i.a.createElement("div",{className:"jsx-4150552167 package-description"},"Watch your dreams become a reality as you implement game-changing wellness routines."),i.a.createElement("div",{className:"jsx-4150552167 package-more"},i.a.createElement(s.a,{prefetch:true,href:"/packages"},i.a.createElement("a",{className:"jsx-4150552167"},"More >"))))),i.a.createElement(s.a,{prefetch:true,href:"/contact"},i.a.createElement("a",{className:"jsx-4150552167 book"},"Book Your Session")),i.a.createElement(r.a,{styleId:"4150552167",css:[".packages.jsx-4150552167{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#833177;}",".packages-title.jsx-4150552167{font-size:36px;text-transform:uppercase;font-weight:bold;padding-top:45px;}",".packages-list.jsx-4150552167{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}",".package.jsx-4150552167{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:45px;width:28%;text-align:center;}",".package-name.jsx-4150552167{font-size:26px;text-transform:uppercase;font-weight:bold;}",".package-package.jsx-4150552167{font-size:22px;text-transform:uppercase;font-weight:bold;}",".package-price.jsx-4150552167{padding-top:10px;display:none;}",".package-description.jsx-4150552167{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:10px;height:60px;font-size:16px;}",".package-more.jsx-4150552167{padding-top:10px;font-size:20px;text-transform:uppercase;font-weight:bold;color:#3EB1C8;}",".book.jsx-4150552167{margin:30px 0 45px;border:1px solid #833177;padding:4px 24px;text-transform:uppercase;font-weight:bold;font-size:20px;}"]}))}}]);return t}(i.a.Component)}},[313]);return{page:e.default}});
webpackJsonp([0x72d035fb625b],{180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.ReferencePage=void 0;var u=n(4),c=r(u),i=n(42),f=(r(i),t.ReferencePage=function(e){function t(){var n,r,a;o(this,t);for(var u=arguments.length,i=Array(u),f=0;f<u;f++)i[f]=arguments[f];return n=r=l(this,e.call.apply(e,[this].concat(i))),r.renderPropDocumentation=function(e,t){var n=function(e){return e?c.default.createElement("span",null,e,c.default.createElement("br",null),c.default.createElement("br",null)):null},r=function(e){return e?c.default.createElement("strong",null,"Yes"):c.default.createElement("strong",null,"No")};return c.default.createElement("div",{key:e,style:{marginBottom:"2rem"}},c.default.createElement("code",{className:"prop-reference__title"},e),c.default.createElement("br",null),c.default.createElement("br",null),n(t.description),"Required: ",r(t.required),c.default.createElement("br",null),"Type: ",c.default.createElement("code",null,t.flowType.raw),c.default.createElement("br",null))},r.renderComponentDocumentation=function(e,t){return c.default.createElement("div",{key:e},c.default.createElement("h2",null,e),c.default.createElement("h3",null,"Props"),Object.keys(t.props||{}).map(function(e){return r.renderPropDocumentation(e,t.props[e])}))},a=n,l(r,a)}return a(t,e),t.prototype.render=function(){var e=this.props.title||this.props.pathContext.title,t=this.props.data||this.props.pathContext.data;return this.renderComponentDocumentation(e,t)},t}(u.Component));t.default=f}});
//# sourceMappingURL=component---src-generated-pages-reference-js-b60176f5696db3befb11.js.map
import{_ as e,a as r}from"./_/54052b37.js";import t from"./lib/helpers/buildURL.js";import{_ as n,a as o}from"./_/584e30bd.js";import s from"./lib/core/mergeConfig.js";import{_ as i}from"./_/210901a0.js";import a from"./lib/defaults/index.js";import{a as u}from"./_/94514ad0.js";import"./lib/core/enhanceError.js";import"./lib/adapters/xhr.js";import"./lib/core/settle.js";import"./lib/core/createError.js";import"./lib/helpers/cookies.js";import"./lib/core/buildFullPath.js";import"./lib/helpers/isAbsoluteURL.js";import"./lib/helpers/combineURLs.js";import"./lib/helpers/isURLSameOrigin.js";import"#lib/adapters/http.js";var c={};var l=e;function InterceptorManager$1(){this.handlers=[]}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */InterceptorManager$1.prototype.use=function use(e,r,t){this.handlers.push({fulfilled:e,rejected:r,synchronous:!!t&&t.synchronous,runWhen:t?t.runWhen:null});return this.handlers.length-1};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */InterceptorManager$1.prototype.eject=function eject(e){this.handlers[e]&&(this.handlers[e]=null)};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */InterceptorManager$1.prototype.forEach=function forEach(e){l.forEach(this.handlers,(function forEachHandler(r){null!==r&&e(r)}))};c=InterceptorManager$1;var h=c;var f={};var p=i.version;var v={};["object","boolean","number","function","string","symbol"].forEach((function(e,r){v[e]=function validator(t){return typeof t===e||"a"+(r<1?"n ":" ")+e}}));var d={};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */v.transitional=function transitional(e,r,t){function formatMessage(e,r){return"[Axios v"+p+"] Transitional option '"+e+"'"+r+(t?". "+t:"")}return function(t,n,o){if(false===e)throw new Error(formatMessage(n," has been removed"+(r?" in "+r:"")));if(r&&!d[n]){d[n]=true;console.warn(formatMessage(n," has been deprecated since v"+r+" and will be removed in the near future"))}return!e||e(t,n,o)}};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */function assertOptions(e,r,t){if("object"!==typeof e)throw new TypeError("options must be an object");var n=Object.keys(e);var o=n.length;while(o-- >0){var s=n[o];var i=r[s];if(i){var a=e[s];var u=void 0===a||i(a,s,e);if(true!==u)throw new TypeError("option "+s+" must be "+u)}else if(true!==t)throw Error("Unknown option "+s)}}f={assertOptions:assertOptions,validators:v};var m=f;var b={};var y=e;var j=t;var w=h;var g=n;var E=s;var x=m;var _=x.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */function Axios$1(e){this.defaults=e;this.interceptors={request:new w,response:new w}}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */Axios$1.prototype.request=function request(e,r){if("string"===typeof e){r=r||{};r.url=e}else r=e||{};r=E(this.defaults,r);r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var t=r.transitional;void 0!==t&&x.assertOptions(t,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},false);var n=[];var o=true;this.interceptors.request.forEach((function unshiftRequestInterceptors(e){if("function"!==typeof e.runWhen||false!==e.runWhen(r)){o=o&&e.synchronous;n.unshift(e.fulfilled,e.rejected)}}));var s=[];this.interceptors.response.forEach((function pushResponseInterceptors(e){s.push(e.fulfilled,e.rejected)}));var i;if(!o){var a=[g,void 0];Array.prototype.unshift.apply(a,n);a=a.concat(s);i=Promise.resolve(r);while(a.length)i=i.then(a.shift(),a.shift());return i}var u=r;while(n.length){var c=n.shift();var l=n.shift();try{u=c(u)}catch(e){l(e);break}}try{i=g(u)}catch(e){return Promise.reject(e)}while(s.length)i=i.then(s.shift(),s.shift());return i};Axios$1.prototype.getUri=function getUri(e){e=E(this.defaults,e);return j(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};y.forEach(["delete","get","head","options"],(function forEachMethodNoData(e){Axios$1.prototype[e]=function(r,t){return this.request(E(t||{},{method:e,url:r,data:(t||{}).data}))}}));y.forEach(["post","put","patch"],(function forEachMethodWithData(e){Axios$1.prototype[e]=function(r,t,n){return this.request(E(n||{},{method:e,url:r,data:t}))}}));b=Axios$1;var k=b;var A={};var C=u;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */function CancelToken(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function promiseExecutor(e){r=e}));var t=this;this.promise.then((function(e){if(t._listeners){var r;var n=t._listeners.length;for(r=0;r<n;r++)t._listeners[r](e);t._listeners=null}}));this.promise.then=function(e){var r;var n=new Promise((function(e){t.subscribe(e);r=e})).then(e);n.cancel=function reject(){t.unsubscribe(r)};return n};e((function cancel(e){if(!t.reason){t.reason=new C(e);r(t.reason)}}))}CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason)throw this.reason};CancelToken.prototype.subscribe=function subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]};CancelToken.prototype.unsubscribe=function unsubscribe(e){if(this._listeners){var r=this._listeners.indexOf(e);-1!==r&&this._listeners.splice(r,1)}};CancelToken.source=function source(){var e;var r=new CancelToken((function executor(r){e=r}));return{token:r,cancel:e}};A=CancelToken;var I=A;var T={};
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */T=function spread(e){return function wrap(r){return e.apply(null,r)}};var O=T;var $={};var q=e;
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */$=function isAxiosError(e){return q.isObject(e)&&true===e.isAxiosError};var M=$;var R={};var P=e;var U=r;var L=k;var S=s;var W=a;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */function createInstance(e){var r=new L(e);var t=U(L.prototype.request,r);P.extend(t,L.prototype,r);P.extend(t,r);t.create=function create(r){return createInstance(S(e,r))};return t}var N=createInstance(W);N.Axios=L;N.Cancel=u;N.CancelToken=I;N.isCancel=o;N.VERSION=i.version;N.all=function all(e){return Promise.all(e)};N.spread=O;N.isAxiosError=M;R=N;R.default=N;var D=R;export{D as default};


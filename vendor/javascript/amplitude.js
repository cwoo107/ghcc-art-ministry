import*as e from"axios";import t from"process";var r={};Object.defineProperty(r,"__esModule",{value:true});var s={};var n=s&&s.__awaiter||function(e,t,r,s){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(s.next(e))}catch(e){n(e)}}function rejected(e){try{step(s.throw(e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())}))};Object.defineProperty(s,"__esModule",{value:true});s.axiosErrorCatcher=s.AmplitudeErrorResponse=void 0;class AmplitudeErrorResponse extends Error{constructor(e){super(e.message);this.status=e.response.status;this.data=e.response.data}}s.AmplitudeErrorResponse=AmplitudeErrorResponse;const axiosErrorCatcher=e=>n(void 0,void 0,void 0,(function*(){try{const t=yield e;return t}catch(e){if(e.response)throw new AmplitudeErrorResponse(e);throw e}}));s.axiosErrorCatcher=axiosErrorCatcher;var o={name:"amplitude",version:"6.0.0",description:"A node wrapper for Amplitude analytics http api",author:"Blade Barringer <blade@crookedneighbor.com>",main:"entry.js",types:"dist/index.d.ts",files:["dist","entry.js"],engines:{node:"^12.22.0 || ^14.17.0 || >=16.0.0"},contributors:[{name:"Erki Esken",email:"erki@deekit.net",url:"http://deekit.net/"},{name:"Matthew Keesan",email:"hi@keesan.net",url:"http://keesan.net"},{name:"Geoff Dutton",email:"g.dutton@gmail.com",url:"https://github.com/geoffdutton"},{name:"Matt Pardee",email:"matt.pardee@gmail.com"},{name:"Chase Seibert",email:"chase.seibert@gmail.com",url:"http://chase-seibert.github.io/blog/"},{name:"filip",email:"filipbachul@gmail.com",url:"https://github.com/cymruu"}],scripts:{build:"rm -rf dist && tsc",contributors:"node tasks/generate-contributors-list",coverage:"codecov",lint:"eslint --ext .js,.ts .",prerelease:"npm version prerelease --preid=next && npm publish --tag next",prepare:"npm run build",prepublishOnly:"npm run test",test:"npm run lint && nyc --reporter=lcov --reporter=text mocha",tdd:"mocha --watch"},repository:{type:"git",url:"https://github.com/geoffdutton/amplitude"},bugs:{url:"https://github.com/geoffdutton/amplitude/issues"},keywords:["analytics","amplitude"],dependencies:{axios:"^0.26.0"},devDependencies:{"@types/chai":"^4.3.0","@types/eslint":"^8.4.1","@types/mocha":"^9.1.0","@types/node":"^17.0.18","@types/sinon":"^10.0.11","@types/sinon-chai":"^3.2.8","@typescript-eslint/eslint-plugin":"^5.12.0","@typescript-eslint/parser":"^5.12.0",chai:"^4.3.6",codecov:"^3.8.3",eslint:"^8.9.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0",glob:"^7.2.0",husky:"^7.0.4","lint-staged":"^12.3.4",lodash:"^4.17.21",mocha:"^9.2.0",nock:"^13.2.4",nyc:"^15.1.0",prettier:"^1.19.1",sinon:"^13.0.1","sinon-chai":"^3.7.0","ts-node":"^10.5.0",typescript:"^4.5.5"},license:"ISC",greenkeeper:{ignore:["nock"]},mocha:{colors:true,reporter:"spec",timeout:8e3,"check-leaks":true,recursive:true,require:"ts-node/register",extension:["ts","js"]},husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"*.{js,ts}":"eslint --cache --fix"}};var i="default"in e?e.default:e;var a={};var u=t;var d=a&&a.__awaiter||function(e,t,r,s){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(s.next(e))}catch(e){n(e)}}function rejected(e){try{step(s.throw(e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())}))};var c=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:true});const p=c(i);const l=s;const h="https://api.amplitude.com";const m="https://amplitude.com/api/2";p.default.defaults.headers.common["User-Agent"]=`amplitude/${o.version} node/${u.version} (${u.arch})`;const f={userId:"user_id",deviceId:"device_id",sessionId:"session_id",eventType:"event_type",eventProperties:"event_properties",userProperties:"user_properties",appVersion:"app_version",osName:"os_name",osVersion:"os_version",deviceBrand:"device_brand",deviceManufacturer:"device_manufacturer",deviceModel:"device_model",locationLat:"location_lat",locationLng:"location_lng"};const formatExportDate=e=>{if("string"===typeof e)return e;const[t,r]=e.toISOString().split("T");return`${t.replace(/-/g,"")}T${r.split(":")[0]}`};class Amplitude$1{constructor(e,t={}){if(!e)throw new Error("No token provided");this.token=e;this.tokenEndpoint=t.tokenEndpoint||u.env.AMPLITUDE_TOKEN_ENDPOINT||h;this.secretKey=t.secretKey;this.userId=t.userId||t.user_id;this.deviceId=t.deviceId||t.device_id;this.sessionId=t.sessionId||t.session_id}_generateRequestData(e){Array.isArray(e)||(e=[e]);return e.map((e=>Object.keys(e).reduce(((t,r)=>{const s=f[r]||r;t[s]=e[r];return t}),{event_type:e.event_type||e.eventType,device_id:e.device_id||this.deviceId,session_id:e.session_id||this.sessionId,user_id:e.user_id||this.userId})))}identify(e){const t=this._generateRequestData(e);const r={api_key:this.token,identification:JSON.stringify(t)};const s=Object.keys(r).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(r[e]))).join("&");return(0,l.axiosErrorCatcher)(p.default.post(`${this.tokenEndpoint}/identify`,s,{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((e=>e.data)))}track(e,t){const r=this._generateRequestData(e);const s={api_key:this.token,events:r,options:t};return(0,l.axiosErrorCatcher)(p.default.post(`${this.tokenEndpoint}/2/httpapi`,s).then((e=>e.data)))}export(e){return d(this,void 0,void 0,(function*(){try{if(!this.secretKey)throw new Error("secretKey must be set to use the export method");if(!e.start||!e.end)throw new Error("`start` and `end` are required options");const t=yield p.default.get(`${m}/export`,{auth:{username:this.token,password:this.secretKey},params:{start:formatExportDate(e.start),end:formatExportDate(e.end)},responseType:"stream"});return t}catch(e){if(e.response)throw new l.AmplitudeErrorResponse(e);throw e}}))}userSearch(e){if(!this.secretKey)throw new Error("secretKey must be set to use the userSearch method");if(!e)throw new Error("value to search for must be passed");return(0,l.axiosErrorCatcher)(p.default.get(`${m}/usersearch`,{auth:{username:this.token,password:this.secretKey},params:{user:e}}).then((e=>e.data)))}userActivity(e,t){t?t.user=e:t={user:e};if(!this.secretKey)throw new Error("secretKey must be set to use the userActivity method");if(!e)throw new Error("Amplitude ID must be passed");return(0,l.axiosErrorCatcher)(p.default.get(`${m}/useractivity`,{auth:{username:this.token,password:this.secretKey},params:t}).then((e=>e.data)))}eventSegmentation(e){if(!this.secretKey)throw new Error("secretKey must be set to use the eventSegmentation method");if(!e||!e.e||!e.start||!e.end)throw new Error("`e`, `start` and `end` are required data properties");"object"===typeof e.e&&(e.e=JSON.stringify(e.e));return(0,l.axiosErrorCatcher)(p.default.get(`${m}/events/segmentation`,{auth:{username:this.token,password:this.secretKey},params:e}).then((e=>e.data)))}}a.default=Amplitude$1;var v={};Object.defineProperty(v,"__esModule",{value:true});var y={};Object.defineProperty(y,"__esModule",{value:true});var _={};var g=_&&_.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);Object.defineProperty(e,s,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r);e[s]=t[r]});var w=_&&_.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||g(t,e,r)};var b=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:true});_.AmplitudeErrorResponse=void 0;r;const k=b(a);_.default=k.default;w(v,_);w(y,_);var E=s;Object.defineProperty(_,"AmplitudeErrorResponse",{enumerable:true,get:function(){return E.AmplitudeErrorResponse}});var x={};const j=_.default;x=j;x.default=x;var A=x;export{A as default};


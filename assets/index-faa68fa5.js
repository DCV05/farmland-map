var Jt=Object.defineProperty;var Qt=(n,e,t)=>e in n?Jt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ge=(n,e,t)=>(Qt(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function makeMap(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function normalizeStyle(n){if(isArray$1(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=isString$1(i)?parseStringStyle(i):normalizeStyle(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(isString$1(n))return n;if(isObject$1(n))return n}}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*.*?\*\//gs;function parseStringStyle(n){const e={};return n.replace(styleCommentRE,"").split(listDelimiterRE).forEach(t=>{if(t){const i=t.split(propertyDelimiterRE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function normalizeClass(n){let e="";if(isString$1(n))e=n;else if(isArray$1(n))for(let t=0;t<n.length;t++){const i=normalizeClass(n[t]);i&&(e+=i+" ")}else if(isObject$1(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(n){return!!n||n===""}const toDisplayString$1=n=>isString$1(n)?n:n==null?"":isArray$1(n)||isObject$1(n)&&(n.toString===objectToString$1||!isFunction$1(n.toString))?JSON.stringify(n,replacer,2):String(n),replacer=(n,e)=>e&&e.__v_isRef?replacer(n,e.value):isMap(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:isSet(e)?{[`Set(${e.size})`]:[...e.values()]}:isObject$1(e)&&!isArray$1(e)&&!isPlainObject$1(e)?String(e):e,EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,onRE=/^on[^a-z]/,isOn=n=>onRE.test(n),isModelListener=n=>n.startsWith("onUpdate:"),extend=Object.assign,remove=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},hasOwnProperty$1=Object.prototype.hasOwnProperty,hasOwn$1=(n,e)=>hasOwnProperty$1.call(n,e),isArray$1=Array.isArray,isMap=n=>toTypeString$1(n)==="[object Map]",isSet=n=>toTypeString$1(n)==="[object Set]",isFunction$1=n=>typeof n=="function",isString$1=n=>typeof n=="string",isSymbol=n=>typeof n=="symbol",isObject$1=n=>n!==null&&typeof n=="object",isPromise=n=>isObject$1(n)&&isFunction$1(n.then)&&isFunction$1(n.catch),objectToString$1=Object.prototype.toString,toTypeString$1=n=>objectToString$1.call(n),toRawType=n=>toTypeString$1(n).slice(8,-1),isPlainObject$1=n=>toTypeString$1(n)==="[object Object]",isIntegerKey=n=>isString$1(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(n=>n.replace(camelizeRE,(e,t)=>t?t.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(n=>n.replace(hyphenateRE,"-$1").toLowerCase()),capitalize$1=cacheStringFunction(n=>n.charAt(0).toUpperCase()+n.slice(1)),toHandlerKey=cacheStringFunction(n=>n?`on${capitalize$1(n)}`:""),hasChanged=(n,e)=>!Object.is(n,e),invokeArrayFns=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},def=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},toNumber=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let activeEffectScope;class EffectScope{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=activeEffectScope,!e&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}run(e){if(this.active){const t=activeEffectScope;try{return activeEffectScope=this,e()}finally{activeEffectScope=t}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function effectScope(n){return new EffectScope(n)}function recordEffectScope(n,e=activeEffectScope){e&&e.active&&e.effects.push(n)}const createDep=n=>{const e=new Set(n);return e.w=0,e.n=0,e},wasTracked=n=>(n.w&trackOpBit)>0,newTracked=n=>(n.n&trackOpBit)>0,initDepMarkers=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=trackOpBit},finalizeDepMarkers=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];wasTracked(r)&&!newTracked(r)?r.delete(n):e[t++]=r,r.w&=~trackOpBit,r.n&=~trackOpBit}e.length=t}},targetMap=new WeakMap;let effectTrackDepth=0,trackOpBit=1;const maxMarkerBits=30;let activeEffect;const ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol("");class ReactiveEffect{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,recordEffectScope(this,i)}run(){if(!this.active)return this.fn();let e=activeEffect,t=shouldTrack;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=activeEffect,activeEffect=this,shouldTrack=!0,trackOpBit=1<<++effectTrackDepth,effectTrackDepth<=maxMarkerBits?initDepMarkers(this):cleanupEffect(this),this.fn()}finally{effectTrackDepth<=maxMarkerBits&&finalizeDepMarkers(this),trackOpBit=1<<--effectTrackDepth,activeEffect=this.parent,shouldTrack=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){activeEffect===this?this.deferStop=!0:this.active&&(cleanupEffect(this),this.onStop&&this.onStop(),this.active=!1)}}function cleanupEffect(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const n=trackStack.pop();shouldTrack=n===void 0?!0:n}function track(n,e,t){if(shouldTrack&&activeEffect){let i=targetMap.get(n);i||targetMap.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=createDep()),trackEffects(r)}}function trackEffects(n,e){let t=!1;effectTrackDepth<=maxMarkerBits?newTracked(n)||(n.n|=trackOpBit,t=!wasTracked(n)):t=!n.has(activeEffect),t&&(n.add(activeEffect),activeEffect.deps.push(n))}function trigger(n,e,t,i,r,s){const a=targetMap.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&isArray$1(n)){const l=toNumber(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":isArray$1(n)?isIntegerKey(t)&&o.push(a.get("length")):(o.push(a.get(ITERATE_KEY)),isMap(n)&&o.push(a.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray$1(n)||(o.push(a.get(ITERATE_KEY)),isMap(n)&&o.push(a.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(n)&&o.push(a.get(ITERATE_KEY));break}if(o.length===1)o[0]&&triggerEffects(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);triggerEffects(createDep(l))}}function triggerEffects(n,e){const t=isArray$1(n)?n:[...n];for(const i of t)i.computed&&triggerEffect(i);for(const i of t)i.computed||triggerEffect(i)}function triggerEffect(n,e){(n!==activeEffect||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(isSymbol)),get=createGetter(),shallowGet=createGetter(!1,!0),readonlyGet=createGetter(!0),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=toRaw(this);for(let s=0,a=this.length;s<a;s++)track(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(toRaw)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){pauseTracking();const i=toRaw(this)[e].apply(this,t);return resetTracking(),i}}),n}function createGetter(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?shallowReadonlyMap:readonlyMap:e?shallowReactiveMap:reactiveMap).get(i))return i;const a=isArray$1(i);if(!n&&a&&hasOwn$1(arrayInstrumentations,r))return Reflect.get(arrayInstrumentations,r,s);const o=Reflect.get(i,r,s);return(isSymbol(r)?builtInSymbols.has(r):isNonTrackableKeys(r))||(n||track(i,"get",r),e)?o:isRef(o)?a&&isIntegerKey(r)?o:o.value:isObject$1(o)?n?readonly(o):reactive(o):o}}const set=createSetter(),shallowSet=createSetter(!0);function createSetter(n=!1){return function(t,i,r,s){let a=t[i];if(isReadonly(a)&&isRef(a)&&!isRef(r))return!1;if(!n&&(!isShallow(r)&&!isReadonly(r)&&(a=toRaw(a),r=toRaw(r)),!isArray$1(t)&&isRef(a)&&!isRef(r)))return a.value=r,!0;const o=isArray$1(t)&&isIntegerKey(i)?Number(i)<t.length:hasOwn$1(t,i),l=Reflect.set(t,i,r,s);return t===toRaw(s)&&(o?hasChanged(r,a)&&trigger(t,"set",i,r):trigger(t,"add",i,r)),l}}function deleteProperty(n,e){const t=hasOwn$1(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&trigger(n,"delete",e,void 0),i}function has(n,e){const t=Reflect.has(n,e);return(!isSymbol(e)||!builtInSymbols.has(e))&&track(n,"has",e),t}function ownKeys(n){return track(n,"iterate",isArray$1(n)?"length":ITERATE_KEY),Reflect.ownKeys(n)}const mutableHandlers={get,set,deleteProperty,has,ownKeys},readonlyHandlers={get:readonlyGet,set(n,e){return!0},deleteProperty(n,e){return!0}},shallowReactiveHandlers=extend({},mutableHandlers,{get:shallowGet,set:shallowSet}),toShallow=n=>n,getProto=n=>Reflect.getPrototypeOf(n);function get$1(n,e,t=!1,i=!1){n=n.__v_raw;const r=toRaw(n),s=toRaw(e);t||(e!==s&&track(r,"get",e),track(r,"get",s));const{has:a}=getProto(r),o=i?toShallow:t?toReadonly:toReactive;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function has$1(n,e=!1){const t=this.__v_raw,i=toRaw(t),r=toRaw(n);return e||(n!==r&&track(i,"has",n),track(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function size(n,e=!1){return n=n.__v_raw,!e&&track(toRaw(n),"iterate",ITERATE_KEY),Reflect.get(n,"size",n)}function add(n){n=toRaw(n);const e=toRaw(this);return getProto(e).has.call(e,n)||(e.add(n),trigger(e,"add",n,n)),this}function set$1(n,e){e=toRaw(e);const t=toRaw(this),{has:i,get:r}=getProto(t);let s=i.call(t,n);s||(n=toRaw(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?hasChanged(e,a)&&trigger(t,"set",n,e):trigger(t,"add",n,e),this}function deleteEntry(n){const e=toRaw(this),{has:t,get:i}=getProto(e);let r=t.call(e,n);r||(n=toRaw(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&trigger(e,"delete",n,void 0),s}function clear(){const n=toRaw(this),e=n.size!==0,t=n.clear();return e&&trigger(n,"clear",void 0,void 0),t}function createForEach(n,e){return function(i,r){const s=this,a=s.__v_raw,o=toRaw(a),l=e?toShallow:n?toReadonly:toReactive;return!n&&track(o,"iterate",ITERATE_KEY),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function createIterableMethod(n,e,t){return function(...i){const r=this.__v_raw,s=toRaw(r),a=isMap(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?toShallow:e?toReadonly:toReactive;return!e&&track(s,"iterate",l?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(n){return function(...e){return n==="delete"?!1:this}}function createInstrumentations(){const n={get(s){return get$1(this,s)},get size(){return size(this)},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},e={get(s){return get$1(this,s,!1,!0)},get size(){return size(this)},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},t={get(s){return get$1(this,s,!0)},get size(){return size(this,!0)},has(s){return has$1.call(this,s,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},i={get(s){return get$1(this,s,!0,!0)},get size(){return size(this,!0)},has(s){return has$1.call(this,s,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=createIterableMethod(s,!1,!1),t[s]=createIterableMethod(s,!0,!1),e[s]=createIterableMethod(s,!1,!0),i[s]=createIterableMethod(s,!0,!0)}),[n,t,e,i]}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(n,e){const t=e?n?shallowReadonlyInstrumentations:shallowInstrumentations:n?readonlyInstrumentations:mutableInstrumentations;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(hasOwn$1(t,r)&&r in i?t:i,r,s)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(n){return n.__v_skip||!Object.isExtensible(n)?0:targetTypeMap(toRawType(n))}function reactive(n){return isReadonly(n)?n:createReactiveObject(n,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(n){return createReactiveObject(n,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(n){return createReactiveObject(n,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function createReactiveObject(n,e,t,i,r){if(!isObject$1(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=getTargetType(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function isReactive(n){return isReadonly(n)?isReactive(n.__v_raw):!!(n&&n.__v_isReactive)}function isReadonly(n){return!!(n&&n.__v_isReadonly)}function isShallow(n){return!!(n&&n.__v_isShallow)}function isProxy(n){return isReactive(n)||isReadonly(n)}function toRaw(n){const e=n&&n.__v_raw;return e?toRaw(e):n}function markRaw(n){return def(n,"__v_skip",!0),n}const toReactive=n=>isObject$1(n)?reactive(n):n,toReadonly=n=>isObject$1(n)?readonly(n):n;function trackRefValue(n){shouldTrack&&activeEffect&&(n=toRaw(n),trackEffects(n.dep||(n.dep=createDep())))}function triggerRefValue(n,e){n=toRaw(n),n.dep&&triggerEffects(n.dep)}function isRef(n){return!!(n&&n.__v_isRef===!0)}function ref(n){return createRef(n,!1)}function createRef(n,e){return isRef(n)?n:new RefImpl(n,e)}class RefImpl{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:toRaw(e),this._value=t?e:toReactive(e)}get value(){return trackRefValue(this),this._value}set value(e){const t=this.__v_isShallow||isShallow(e)||isReadonly(e);e=t?e:toRaw(e),hasChanged(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:toReactive(e),triggerRefValue(this))}}function unref(n){return isRef(n)?n.value:n}const shallowUnwrapHandlers={get:(n,e,t)=>unref(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return isRef(r)&&!isRef(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function proxyRefs(n){return isReactive(n)?n:new Proxy(n,shallowUnwrapHandlers)}var _a;class ComputedRefImpl{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[_a]=!1,this._dirty=!0,this.effect=new ReactiveEffect(e,()=>{this._dirty||(this._dirty=!0,triggerRefValue(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=toRaw(this);return trackRefValue(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_a="__v_isReadonly";function computed$1(n,e,t=!1){let i,r;const s=isFunction$1(n);return s?(i=n,r=NOOP):(i=n.get,r=n.set),new ComputedRefImpl(i,r,s||!r,t)}function warn$1(n,...e){}function callWithErrorHandling(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){handleError(s,e,t)}return r}function callWithAsyncErrorHandling(n,e,t,i){if(isFunction$1(n)){const s=callWithErrorHandling(n,e,t,i);return s&&isPromise(s)&&s.catch(a=>{handleError(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(callWithAsyncErrorHandling(n[s],e,t,i));return r}function handleError(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){callWithErrorHandling(l,null,10,[n,a,o]);return}}logError(n,t,r,i)}function logError(n,e,t,i=!0){console.error(n)}let isFlushing=!1,isFlushPending=!1;const queue=[];let flushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(n){const e=currentFlushPromise||resolvedPromise;return n?e.then(this?n.bind(this):n):e}function findInsertionIndex(n){let e=flushIndex+1,t=queue.length;for(;e<t;){const i=e+t>>>1;getId(queue[i])<n?e=i+1:t=i}return e}function queueJob(n){(!queue.length||!queue.includes(n,isFlushing&&n.allowRecurse?flushIndex+1:flushIndex))&&(n.id==null?queue.push(n):queue.splice(findInsertionIndex(n.id),0,n),queueFlush())}function queueFlush(){!isFlushing&&!isFlushPending&&(isFlushPending=!0,currentFlushPromise=resolvedPromise.then(flushJobs))}function invalidateJob(n){const e=queue.indexOf(n);e>flushIndex&&queue.splice(e,1)}function queuePostFlushCb(n){isArray$1(n)?pendingPostFlushCbs.push(...n):(!activePostFlushCbs||!activePostFlushCbs.includes(n,n.allowRecurse?postFlushIndex+1:postFlushIndex))&&pendingPostFlushCbs.push(n),queueFlush()}function flushPreFlushCbs(n,e=isFlushing?flushIndex+1:0){for(;e<queue.length;e++){const t=queue[e];t&&t.pre&&(queue.splice(e,1),e--,t())}}function flushPostFlushCbs(n){if(pendingPostFlushCbs.length){const e=[...new Set(pendingPostFlushCbs)];if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...e);return}for(activePostFlushCbs=e,activePostFlushCbs.sort((t,i)=>getId(t)-getId(i)),postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++)activePostFlushCbs[postFlushIndex]();activePostFlushCbs=null,postFlushIndex=0}}const getId=n=>n.id==null?1/0:n.id,comparator=(n,e)=>{const t=getId(n)-getId(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function flushJobs(n){isFlushPending=!1,isFlushing=!0,queue.sort(comparator);const e=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const t=queue[flushIndex];t&&t.active!==!1&&callWithErrorHandling(t,null,14)}}finally{flushIndex=0,queue.length=0,flushPostFlushCbs(),isFlushing=!1,currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}function emit$1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||EMPTY_OBJ;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:f}=i[u]||EMPTY_OBJ;f&&(r=t.map(g=>isString$1(g)?g.trim():g)),d&&(r=t.map(toNumber))}let o,l=i[o=toHandlerKey(e)]||i[o=toHandlerKey(camelize(e))];!l&&s&&(l=i[o=toHandlerKey(hyphenate(e))]),l&&callWithAsyncErrorHandling(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,callWithAsyncErrorHandling(c,n,6,r)}}function normalizeEmitsOptions(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!isFunction$1(n)){const l=c=>{const u=normalizeEmitsOptions(c,e,!0);u&&(o=!0,extend(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(isObject$1(n)&&i.set(n,null),null):(isArray$1(s)?s.forEach(l=>a[l]=null):extend(a,s),isObject$1(n)&&i.set(n,a),a)}function isEmitListener(n,e){return!n||!isOn(e)?!1:(e=e.slice(2).replace(/Once$/,""),hasOwn$1(n,e[0].toLowerCase()+e.slice(1))||hasOwn$1(n,hyphenate(e))||hasOwn$1(n,e))}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(n){const e=currentRenderingInstance;return currentRenderingInstance=n,currentScopeId=n&&n.type.__scopeId||null,e}function withCtx(n,e=currentRenderingInstance,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&setBlockTracking(-1);const s=setCurrentRenderingInstance(e);let a;try{a=n(...r)}finally{setCurrentRenderingInstance(s),i._d&&setBlockTracking(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function markAttrsAccessed(){}function renderComponentRoot(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:g,ctx:x,inheritAttrs:_}=n;let m,v;const T=setCurrentRenderingInstance(n);try{if(t.shapeFlag&4){const b=r||i;m=normalizeVNode(u.call(b,b,d,s,g,f,x)),v=l}else{const b=e;m=normalizeVNode(b.length>1?b(s,{attrs:l,slots:o,emit:c}):b(s,null)),v=e.props?l:getFunctionalFallthrough(l)}}catch(b){blockStack.length=0,handleError(b,n,1),m=createVNode(Comment)}let M=m;if(v&&_!==!1){const b=Object.keys(v),{shapeFlag:E}=M;b.length&&E&7&&(a&&b.some(isModelListener)&&(v=filterModelListeners(v,a)),M=cloneVNode(M,v))}return t.dirs&&(M=cloneVNode(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),m=M,setCurrentRenderingInstance(T),m}const getFunctionalFallthrough=n=>{let e;for(const t in n)(t==="class"||t==="style"||isOn(t))&&((e||(e={}))[t]=n[t]);return e},filterModelListeners=(n,e)=>{const t={};for(const i in n)(!isModelListener(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function shouldUpdateComponent(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hasPropsChanged(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!isEmitListener(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hasPropsChanged(i,a,c):!0:!!a;return!1}function hasPropsChanged(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!isEmitListener(t,s))return!0}return!1}function updateHOCHostEl({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const isSuspense=n=>n.__isSuspense;function queueEffectWithSuspense(n,e){e&&e.pendingBranch?isArray$1(n)?e.effects.push(...n):e.effects.push(n):queuePostFlushCb(n)}function provide(n,e){if(currentInstance){let t=currentInstance.provides;const i=currentInstance.parent&&currentInstance.parent.provides;i===t&&(t=currentInstance.provides=Object.create(i)),t[n]=e}}function inject(n,e,t=!1){const i=currentInstance||currentRenderingInstance;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&isFunction$1(e)?e.call(i.proxy):e}}const INITIAL_WATCHER_VALUE={};function watch(n,e,t){return doWatch(n,e,t)}function doWatch(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=EMPTY_OBJ){const o=currentInstance;let l,c=!1,u=!1;if(isRef(n)?(l=()=>n.value,c=isShallow(n)):isReactive(n)?(l=()=>n,i=!0):isArray$1(n)?(u=!0,c=n.some(M=>isReactive(M)||isShallow(M)),l=()=>n.map(M=>{if(isRef(M))return M.value;if(isReactive(M))return traverse(M);if(isFunction$1(M))return callWithErrorHandling(M,o,2)})):isFunction$1(n)?e?l=()=>callWithErrorHandling(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),callWithAsyncErrorHandling(n,o,3,[f])}:l=NOOP,e&&i){const M=l;l=()=>traverse(M())}let d,f=M=>{d=v.onStop=()=>{callWithErrorHandling(M,o,4)}},g;if(isInSSRComponentSetup)if(f=NOOP,e?t&&callWithAsyncErrorHandling(e,o,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const M=useSSRContext();g=M.__watcherHandles||(M.__watcherHandles=[])}else return NOOP;let x=u?new Array(n.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const _=()=>{if(v.active)if(e){const M=v.run();(i||c||(u?M.some((b,E)=>hasChanged(b,x[E])):hasChanged(M,x)))&&(d&&d(),callWithAsyncErrorHandling(e,o,3,[M,x===INITIAL_WATCHER_VALUE?void 0:u&&x[0]===INITIAL_WATCHER_VALUE?[]:x,f]),x=M)}else v.run()};_.allowRecurse=!!e;let m;r==="sync"?m=_:r==="post"?m=()=>queuePostRenderEffect(_,o&&o.suspense):(_.pre=!0,o&&(_.id=o.uid),m=()=>queueJob(_));const v=new ReactiveEffect(l,m);e?t?_():x=v.run():r==="post"?queuePostRenderEffect(v.run.bind(v),o&&o.suspense):v.run();const T=()=>{v.stop(),o&&o.scope&&remove(o.scope.effects,v)};return g&&g.push(T),T}function instanceWatch(n,e,t){const i=this.proxy,r=isString$1(n)?n.includes(".")?createPathGetter(i,n):()=>i[n]:n.bind(i,i);let s;isFunction$1(e)?s=e:(s=e.handler,t=e);const a=currentInstance;setCurrentInstance(this);const o=doWatch(r,s.bind(i),t);return a?setCurrentInstance(a):unsetCurrentInstance(),o}function createPathGetter(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function traverse(n,e){if(!isObject$1(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),isRef(n))traverse(n.value,e);else if(isArray$1(n))for(let t=0;t<n.length;t++)traverse(n[t],e);else if(isSet(n)||isMap(n))n.forEach(t=>{traverse(t,e)});else if(isPlainObject$1(n))for(const t in n)traverse(n[t],e);return n}function useTransitionState(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{n.isMounted=!0}),onBeforeUnmount(()=>{n.isUnmounting=!0}),n}const TransitionHookValidator=[Function,Array],BaseTransitionImpl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup(n,{slots:e}){const t=getCurrentInstance(),i=useTransitionState();let r;return()=>{const s=e.default&&getTransitionRawChildren(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const _ of s)if(_.type!==Comment){a=_;break}}const o=toRaw(n),{mode:l}=o;if(i.isLeaving)return emptyPlaceholder(a);const c=getKeepAliveChild(a);if(!c)return emptyPlaceholder(a);const u=resolveTransitionHooks(c,o,i,t);setTransitionHooks(c,u);const d=t.subTree,f=d&&getKeepAliveChild(d);let g=!1;const{getTransitionKey:x}=c.type;if(x){const _=x();r===void 0?r=_:_!==r&&(r=_,g=!0)}if(f&&f.type!==Comment&&(!isSameVNodeType(c,f)||g)){const _=resolveTransitionHooks(f,o,i,t);if(setTransitionHooks(f,_),l==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},emptyPlaceholder(a);l==="in-out"&&c.type!==Comment&&(_.delayLeave=(m,v,T)=>{const M=getLeavingNodesForType(i,f);M[String(f.key)]=f,m._leaveCb=()=>{v(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return a}}},BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function resolveTransitionHooks(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:_,onAppear:m,onAfterAppear:v,onAppearCancelled:T}=e,M=String(n.key),b=getLeavingNodesForType(t,n),E=(A,O)=>{A&&callWithAsyncErrorHandling(A,i,9,O)},N=(A,O)=>{const U=O[1];E(A,O),isArray$1(A)?A.every(q=>q.length<=1)&&U():A.length<=1&&U()},B={mode:s,persisted:a,beforeEnter(A){let O=o;if(!t.isMounted)if(r)O=_||o;else return;A._leaveCb&&A._leaveCb(!0);const U=b[M];U&&isSameVNodeType(n,U)&&U.el._leaveCb&&U.el._leaveCb(),E(O,[A])},enter(A){let O=l,U=c,q=u;if(!t.isMounted)if(r)O=m||l,U=v||c,q=T||u;else return;let ne=!1;const G=A._enterCb=H=>{ne||(ne=!0,H?E(q,[A]):E(U,[A]),B.delayedLeave&&B.delayedLeave(),A._enterCb=void 0)};O?N(O,[A,G]):G()},leave(A,O){const U=String(n.key);if(A._enterCb&&A._enterCb(!0),t.isUnmounting)return O();E(d,[A]);let q=!1;const ne=A._leaveCb=G=>{q||(q=!0,O(),G?E(x,[A]):E(g,[A]),A._leaveCb=void 0,b[U]===n&&delete b[U])};b[U]=n,f?N(f,[A,ne]):ne()},clone(A){return resolveTransitionHooks(A,e,t,i)}};return B}function emptyPlaceholder(n){if(isKeepAlive(n))return n=cloneVNode(n),n.children=null,n}function getKeepAliveChild(n){return isKeepAlive(n)?n.children?n.children[0]:void 0:n}function setTransitionHooks(n,e){n.shapeFlag&6&&n.component?setTransitionHooks(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function getTransitionRawChildren(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Fragment?(a.patchFlag&128&&r++,i=i.concat(getTransitionRawChildren(a.children,e,o))):(e||a.type!==Comment)&&i.push(o!=null?cloneVNode(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const isAsyncWrapper=n=>!!n.type.__asyncLoader,isKeepAlive=n=>n.type.__isKeepAlive;function onActivated(n,e){registerKeepAliveHook(n,"a",e)}function onDeactivated(n,e){registerKeepAliveHook(n,"da",e)}function registerKeepAliveHook(n,e,t=currentInstance){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(injectHook(e,i,t),t){let r=t.parent;for(;r&&r.parent;)isKeepAlive(r.parent.vnode)&&injectToKeepAliveRoot(i,e,t,r),r=r.parent}}function injectToKeepAliveRoot(n,e,t,i){const r=injectHook(e,n,i,!0);onUnmounted(()=>{remove(i[e],r)},t)}function injectHook(n,e,t=currentInstance,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;pauseTracking(),setCurrentInstance(t);const o=callWithAsyncErrorHandling(e,t,n,a);return unsetCurrentInstance(),resetTracking(),o});return i?r.unshift(s):r.push(s),s}}const createHook=n=>(e,t=currentInstance)=>(!isInSSRComponentSetup||n==="sp")&&injectHook(n,(...i)=>e(...i),t),onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(n,e=currentInstance){injectHook("ec",n,e)}function invokeDirectiveHook(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(pauseTracking(),callWithAsyncErrorHandling(l,t,8,[n.el,o,n,e]),resetTracking())}}const COMPONENTS="components";function resolveComponent(n,e){return resolveAsset(COMPONENTS,n,!0,e)||n}const NULL_DYNAMIC_COMPONENT=Symbol();function resolveAsset(n,e,t=!0,i=!1){const r=currentRenderingInstance||currentInstance;if(r){const s=r.type;if(n===COMPONENTS){const o=getComponentName(s,!1);if(o&&(o===e||o===camelize(e)||o===capitalize$1(camelize(e))))return s}const a=resolve(r[n]||s[n],e)||resolve(r.appContext[n],e);return!a&&i?s:a}}function resolve(n,e){return n&&(n[e]||n[camelize(e)]||n[capitalize$1(camelize(e))])}function renderList(n,e,t,i){let r;const s=t&&t[i];if(isArray$1(n)||isString$1(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(isObject$1(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}function renderSlot(n,e,t={},i,r){if(currentRenderingInstance.isCE||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.isCE)return e!=="default"&&(t.name=e),createVNode("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),openBlock();const a=s&&ensureValidVNode(s(t)),o=createBlock(Fragment,{key:t.key||a&&a.key||`_${e}`},a||(i?i():[]),a&&n._===1?64:-2);return!r&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function ensureValidVNode(n){return n.some(e=>isVNode$1(e)?!(e.type===Comment||e.type===Fragment&&!ensureValidVNode(e.children)):!0)?n:null}const getPublicInstance=n=>n?isStatefulComponent(n)?getExposeProxy(n)||n.proxy:getPublicInstance(n.parent):null,publicPropertiesMap=extend(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>getPublicInstance(n.parent),$root:n=>getPublicInstance(n.root),$emit:n=>n.emit,$options:n=>resolveMergedOptions(n),$forceUpdate:n=>n.f||(n.f=()=>queueJob(n.update)),$nextTick:n=>n.n||(n.n=nextTick.bind(n.proxy)),$watch:n=>instanceWatch.bind(n)}),hasSetupBinding=(n,e)=>n!==EMPTY_OBJ&&!n.__isScriptSetup&&hasOwn$1(n,e),PublicInstanceProxyHandlers={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const g=a[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(hasSetupBinding(i,e))return a[e]=1,i[e];if(r!==EMPTY_OBJ&&hasOwn$1(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&hasOwn$1(c,e))return a[e]=3,s[e];if(t!==EMPTY_OBJ&&hasOwn$1(t,e))return a[e]=4,t[e];shouldCacheAccess&&(a[e]=0)}}const u=publicPropertiesMap[e];let d,f;if(u)return e==="$attrs"&&track(n,"get",e),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==EMPTY_OBJ&&hasOwn$1(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,hasOwn$1(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return hasSetupBinding(r,e)?(r[e]=t,!0):i!==EMPTY_OBJ&&hasOwn$1(i,e)?(i[e]=t,!0):hasOwn$1(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==EMPTY_OBJ&&hasOwn$1(n,a)||hasSetupBinding(e,a)||(o=s[0])&&hasOwn$1(o,a)||hasOwn$1(i,a)||hasOwn$1(publicPropertiesMap,a)||hasOwn$1(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:hasOwn$1(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let shouldCacheAccess=!0;function applyOptions(n){const e=resolveMergedOptions(n),t=n.proxy,i=n.ctx;shouldCacheAccess=!1,e.beforeCreate&&callHook$1(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:x,activated:_,deactivated:m,beforeDestroy:v,beforeUnmount:T,destroyed:M,unmounted:b,render:E,renderTracked:N,renderTriggered:B,errorCaptured:A,serverPrefetch:O,expose:U,inheritAttrs:q,components:ne,directives:G,filters:H}=e;if(c&&resolveInjections(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const re in a){const Q=a[re];isFunction$1(Q)&&(i[re]=Q.bind(t))}if(r){const re=r.call(t,t);isObject$1(re)&&(n.data=reactive(re))}if(shouldCacheAccess=!0,s)for(const re in s){const Q=s[re],pe=isFunction$1(Q)?Q.bind(t,t):isFunction$1(Q.get)?Q.get.bind(t,t):NOOP,me=!isFunction$1(Q)&&isFunction$1(Q.set)?Q.set.bind(t):NOOP,ee=computed({get:pe,set:me});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ee.value,set:te=>ee.value=te})}if(o)for(const re in o)createWatcher(o[re],i,t,re);if(l){const re=isFunction$1(l)?l.call(t):l;Reflect.ownKeys(re).forEach(Q=>{provide(Q,re[Q])})}u&&callHook$1(u,n,"c");function ce(re,Q){isArray$1(Q)?Q.forEach(pe=>re(pe.bind(t))):Q&&re(Q.bind(t))}if(ce(onBeforeMount,d),ce(onMounted,f),ce(onBeforeUpdate,g),ce(onUpdated,x),ce(onActivated,_),ce(onDeactivated,m),ce(onErrorCaptured,A),ce(onRenderTracked,N),ce(onRenderTriggered,B),ce(onBeforeUnmount,T),ce(onUnmounted,b),ce(onServerPrefetch,O),isArray$1(U))if(U.length){const re=n.exposed||(n.exposed={});U.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>t[Q],set:pe=>t[Q]=pe})})}else n.exposed||(n.exposed={});E&&n.render===NOOP&&(n.render=E),q!=null&&(n.inheritAttrs=q),ne&&(n.components=ne),G&&(n.directives=G)}function resolveInjections(n,e,t=NOOP,i=!1){isArray$1(n)&&(n=normalizeInject(n));for(const r in n){const s=n[r];let a;isObject$1(s)?"default"in s?a=inject(s.from||r,s.default,!0):a=inject(s.from||r):a=inject(s),isRef(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function callHook$1(n,e,t){callWithAsyncErrorHandling(isArray$1(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function createWatcher(n,e,t,i){const r=i.includes(".")?createPathGetter(t,i):()=>t[i];if(isString$1(n)){const s=e[n];isFunction$1(s)&&watch(r,s)}else if(isFunction$1(n))watch(r,n.bind(t));else if(isObject$1(n))if(isArray$1(n))n.forEach(s=>createWatcher(s,e,t,i));else{const s=isFunction$1(n.handler)?n.handler.bind(t):e[n.handler];isFunction$1(s)&&watch(r,s,n)}}function resolveMergedOptions(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>mergeOptions(l,c,a,!0)),mergeOptions(l,e,a)),isObject$1(e)&&s.set(e,l),l}function mergeOptions(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&mergeOptions(n,s,t,!0),r&&r.forEach(a=>mergeOptions(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=internalOptionMergeStrats[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(n,e){return e?n?function(){return extend(isFunction$1(n)?n.call(this,this):n,isFunction$1(e)?e.call(this,this):e)}:e:n}function mergeInject(n,e){return mergeObjectOptions(normalizeInject(n),normalizeInject(e))}function normalizeInject(n){if(isArray$1(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mergeAsArray(n,e){return n?[...new Set([].concat(n,e))]:e}function mergeObjectOptions(n,e){return n?extend(extend(Object.create(null),n),e):e}function mergeWatchOptions(n,e){if(!n)return e;if(!e)return n;const t=extend(Object.create(null),n);for(const i in e)t[i]=mergeAsArray(n[i],e[i]);return t}function initProps(n,e,t,i=!1){const r={},s={};def(s,InternalObjectKey,1),n.propsDefaults=Object.create(null),setFullProps(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:shallowReactive(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function updateProps(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=toRaw(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(isEmitListener(n.emitsOptions,f))continue;const g=e[f];if(l)if(hasOwn$1(s,f))g!==s[f]&&(s[f]=g,c=!0);else{const x=camelize(f);r[x]=resolvePropValue(l,o,x,g,n,!1)}else g!==s[f]&&(s[f]=g,c=!0)}}}else{setFullProps(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!hasOwn$1(e,d)&&((u=hyphenate(d))===d||!hasOwn$1(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=resolvePropValue(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!hasOwn$1(e,d))&&(delete s[d],c=!0)}c&&trigger(n,"set","$attrs")}function setFullProps(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(isReservedProp(l))continue;const c=e[l];let u;r&&hasOwn$1(r,u=camelize(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:isEmitListener(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=toRaw(t),c=o||EMPTY_OBJ;for(let u=0;u<s.length;u++){const d=s[u];t[d]=resolvePropValue(r,l,d,c[d],n,!hasOwn$1(c,d))}}return a}function resolvePropValue(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=hasOwn$1(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&isFunction$1(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(setCurrentInstance(r),i=c[t]=l.call(null,e),unsetCurrentInstance())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===hyphenate(t))&&(i=!0))}return i}function normalizePropsOptions(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!isFunction$1(n)){const u=d=>{l=!0;const[f,g]=normalizePropsOptions(d,e,!0);extend(a,f),g&&o.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return isObject$1(n)&&i.set(n,EMPTY_ARR),EMPTY_ARR;if(isArray$1(s))for(let u=0;u<s.length;u++){const d=camelize(s[u]);validatePropName(d)&&(a[d]=EMPTY_OBJ)}else if(s)for(const u in s){const d=camelize(u);if(validatePropName(d)){const f=s[u],g=a[d]=isArray$1(f)||isFunction$1(f)?{type:f}:Object.assign({},f);if(g){const x=getTypeIndex(Boolean,g.type),_=getTypeIndex(String,g.type);g[0]=x>-1,g[1]=_<0||x<_,(x>-1||hasOwn$1(g,"default"))&&o.push(d)}}}const c=[a,o];return isObject$1(n)&&i.set(n,c),c}function validatePropName(n){return n[0]!=="$"}function getType(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function isSameType(n,e){return getType(n)===getType(e)}function getTypeIndex(n,e){return isArray$1(e)?e.findIndex(t=>isSameType(t,n)):isFunction$1(e)&&isSameType(e,n)?0:-1}const isInternalKey=n=>n[0]==="_"||n==="$stable",normalizeSlotValue=n=>isArray$1(n)?n.map(normalizeVNode):[normalizeVNode(n)],normalizeSlot=(n,e,t)=>{if(e._n)return e;const i=withCtx((...r)=>normalizeSlotValue(e(...r)),t);return i._c=!1,i},normalizeObjectSlots=(n,e,t)=>{const i=n._ctx;for(const r in n){if(isInternalKey(r))continue;const s=n[r];if(isFunction$1(s))e[r]=normalizeSlot(r,s,i);else if(s!=null){const a=normalizeSlotValue(s);e[r]=()=>a}}},normalizeVNodeSlots=(n,e)=>{const t=normalizeSlotValue(e);n.slots.default=()=>t},initSlots=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=toRaw(e),def(e,"_",t)):normalizeObjectSlots(e,n.slots={})}else n.slots={},e&&normalizeVNodeSlots(n,e);def(n.slots,InternalObjectKey,1)},updateSlots=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=EMPTY_OBJ;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(extend(r,e),!t&&o===1&&delete r._):(s=!e.$stable,normalizeObjectSlots(e,r)),a=e}else e&&(normalizeVNodeSlots(n,e),a={default:1});if(s)for(const o in r)!isInternalKey(o)&&!(o in a)&&delete r[o]};function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid=0;function createAppAPI(n,e){return function(i,r=null){isFunction$1(i)||(i=Object.assign({},i)),r!=null&&!isObject$1(r)&&(r=null);const s=createAppContext(),a=new Set;let o=!1;const l=s.app={_uid:uid++,_component:i,_props:r,_container:null,_context:s,_instance:null,version,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&isFunction$1(c.install)?(a.add(c),c.install(l,...u)):isFunction$1(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const f=createVNode(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,d),o=!0,l._container=c,c.__vue_app__=l,getExposeProxy(f.component)||f.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function setRef(n,e,t,i,r=!1){if(isArray$1(n)){n.forEach((f,g)=>setRef(f,e&&(isArray$1(e)?e[g]:e),t,i,r));return}if(isAsyncWrapper(i)&&!r)return;const s=i.shapeFlag&4?getExposeProxy(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===EMPTY_OBJ?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(isString$1(c)?(u[c]=null,hasOwn$1(d,c)&&(d[c]=null)):isRef(c)&&(c.value=null)),isFunction$1(l))callWithErrorHandling(l,o,12,[a,u]);else{const f=isString$1(l),g=isRef(l);if(f||g){const x=()=>{if(n.f){const _=f?hasOwn$1(d,l)?d[l]:u[l]:l.value;r?isArray$1(_)&&remove(_,s):isArray$1(_)?_.includes(s)||_.push(s):f?(u[l]=[s],hasOwn$1(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=a,hasOwn$1(d,l)&&(d[l]=a)):g&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,queuePostRenderEffect(x,t)):x()}}}const queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(n){return baseCreateRenderer(n)}function baseCreateRenderer(n,e){const t=getGlobalThis();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=NOOP,insertStaticContent:x}=n,_=(P,y,C,I=null,F=null,$=null,X=!1,Z=null,he=!!y.dynamicChildren)=>{if(P===y)return;P&&!isSameVNodeType(P,y)&&(I=Ae(P),te(P,F,$,!0),P=null),y.patchFlag===-2&&(he=!1,y.dynamicChildren=null);const{type:j,ref:w,shapeFlag:S}=y;switch(j){case Text:m(P,y,C,I);break;case Comment:v(P,y,C,I);break;case Static:P==null&&T(y,C,I,X);break;case Fragment:ne(P,y,C,I,F,$,X,Z,he);break;default:S&1?E(P,y,C,I,F,$,X,Z,he):S&6?G(P,y,C,I,F,$,X,Z,he):(S&64||S&128)&&j.process(P,y,C,I,F,$,X,Z,he,we)}w!=null&&F&&setRef(w,P&&P.ref,$,y||P,!y)},m=(P,y,C,I)=>{if(P==null)i(y.el=o(y.children),C,I);else{const F=y.el=P.el;y.children!==P.children&&c(F,y.children)}},v=(P,y,C,I)=>{P==null?i(y.el=l(y.children||""),C,I):y.el=P.el},T=(P,y,C,I)=>{[P.el,P.anchor]=x(P.children,y,C,I,P.el,P.anchor)},M=({el:P,anchor:y},C,I)=>{let F;for(;P&&P!==y;)F=f(P),i(P,C,I),P=F;i(y,C,I)},b=({el:P,anchor:y})=>{let C;for(;P&&P!==y;)C=f(P),r(P),P=C;r(y)},E=(P,y,C,I,F,$,X,Z,he)=>{X=X||y.type==="svg",P==null?N(y,C,I,F,$,X,Z,he):O(P,y,F,$,X,Z,he)},N=(P,y,C,I,F,$,X,Z)=>{let he,j;const{type:w,props:S,shapeFlag:V,transition:Y,dirs:ae}=P;if(he=P.el=a(P.type,$,S&&S.is,S),V&8?u(he,P.children):V&16&&A(P.children,he,null,I,F,$&&w!=="foreignObject",X,Z),ae&&invokeDirectiveHook(P,null,I,"created"),S){for(const be in S)be!=="value"&&!isReservedProp(be)&&s(he,be,null,S[be],$,P.children,I,F,ie);"value"in S&&s(he,"value",null,S.value),(j=S.onVnodeBeforeMount)&&invokeVNodeHook(j,I,P)}B(he,P,P.scopeId,X,I),ae&&invokeDirectiveHook(P,null,I,"beforeMount");const fe=(!F||F&&!F.pendingBranch)&&Y&&!Y.persisted;fe&&Y.beforeEnter(he),i(he,y,C),((j=S&&S.onVnodeMounted)||fe||ae)&&queuePostRenderEffect(()=>{j&&invokeVNodeHook(j,I,P),fe&&Y.enter(he),ae&&invokeDirectiveHook(P,null,I,"mounted")},F)},B=(P,y,C,I,F)=>{if(C&&g(P,C),I)for(let $=0;$<I.length;$++)g(P,I[$]);if(F){let $=F.subTree;if(y===$){const X=F.vnode;B(P,X,X.scopeId,X.slotScopeIds,F.parent)}}},A=(P,y,C,I,F,$,X,Z,he=0)=>{for(let j=he;j<P.length;j++){const w=P[j]=Z?cloneIfMounted(P[j]):normalizeVNode(P[j]);_(null,w,y,C,I,F,$,X,Z)}},O=(P,y,C,I,F,$,X)=>{const Z=y.el=P.el;let{patchFlag:he,dynamicChildren:j,dirs:w}=y;he|=P.patchFlag&16;const S=P.props||EMPTY_OBJ,V=y.props||EMPTY_OBJ;let Y;C&&toggleRecurse(C,!1),(Y=V.onVnodeBeforeUpdate)&&invokeVNodeHook(Y,C,y,P),w&&invokeDirectiveHook(y,P,C,"beforeUpdate"),C&&toggleRecurse(C,!0);const ae=F&&y.type!=="foreignObject";if(j?U(P.dynamicChildren,j,Z,C,I,ae,$):X||Q(P,y,Z,null,C,I,ae,$,!1),he>0){if(he&16)q(Z,y,S,V,C,I,F);else if(he&2&&S.class!==V.class&&s(Z,"class",null,V.class,F),he&4&&s(Z,"style",S.style,V.style,F),he&8){const fe=y.dynamicProps;for(let be=0;be<fe.length;be++){const ye=fe[be],se=S[ye],De=V[ye];(De!==se||ye==="value")&&s(Z,ye,se,De,F,P.children,C,I,ie)}}he&1&&P.children!==y.children&&u(Z,y.children)}else!X&&j==null&&q(Z,y,S,V,C,I,F);((Y=V.onVnodeUpdated)||w)&&queuePostRenderEffect(()=>{Y&&invokeVNodeHook(Y,C,y,P),w&&invokeDirectiveHook(y,P,C,"updated")},I)},U=(P,y,C,I,F,$,X)=>{for(let Z=0;Z<y.length;Z++){const he=P[Z],j=y[Z],w=he.el&&(he.type===Fragment||!isSameVNodeType(he,j)||he.shapeFlag&70)?d(he.el):C;_(he,j,w,null,I,F,$,X,!0)}},q=(P,y,C,I,F,$,X)=>{if(C!==I){if(C!==EMPTY_OBJ)for(const Z in C)!isReservedProp(Z)&&!(Z in I)&&s(P,Z,C[Z],null,X,y.children,F,$,ie);for(const Z in I){if(isReservedProp(Z))continue;const he=I[Z],j=C[Z];he!==j&&Z!=="value"&&s(P,Z,j,he,X,y.children,F,$,ie)}"value"in I&&s(P,"value",C.value,I.value)}},ne=(P,y,C,I,F,$,X,Z,he)=>{const j=y.el=P?P.el:o(""),w=y.anchor=P?P.anchor:o("");let{patchFlag:S,dynamicChildren:V,slotScopeIds:Y}=y;Y&&(Z=Z?Z.concat(Y):Y),P==null?(i(j,C,I),i(w,C,I),A(y.children,C,w,F,$,X,Z,he)):S>0&&S&64&&V&&P.dynamicChildren?(U(P.dynamicChildren,V,C,F,$,X,Z),(y.key!=null||F&&y===F.subTree)&&traverseStaticChildren(P,y,!0)):Q(P,y,C,w,F,$,X,Z,he)},G=(P,y,C,I,F,$,X,Z,he)=>{y.slotScopeIds=Z,P==null?y.shapeFlag&512?F.ctx.activate(y,C,I,X,he):H(y,C,I,F,$,X,he):oe(P,y,he)},H=(P,y,C,I,F,$,X)=>{const Z=P.component=createComponentInstance(P,I,F);if(isKeepAlive(P)&&(Z.ctx.renderer=we),setupComponent(Z),Z.asyncDep){if(F&&F.registerDep(Z,ce),!P.el){const he=Z.subTree=createVNode(Comment);v(null,he,y,C)}return}ce(Z,P,y,C,F,$,X)},oe=(P,y,C)=>{const I=y.component=P.component;if(shouldUpdateComponent(P,y,C))if(I.asyncDep&&!I.asyncResolved){re(I,y,C);return}else I.next=y,invalidateJob(I.update),I.update();else y.el=P.el,I.vnode=y},ce=(P,y,C,I,F,$,X)=>{const Z=()=>{if(P.isMounted){let{next:w,bu:S,u:V,parent:Y,vnode:ae}=P,fe=w,be;toggleRecurse(P,!1),w?(w.el=ae.el,re(P,w,X)):w=ae,S&&invokeArrayFns(S),(be=w.props&&w.props.onVnodeBeforeUpdate)&&invokeVNodeHook(be,Y,w,ae),toggleRecurse(P,!0);const ye=renderComponentRoot(P),se=P.subTree;P.subTree=ye,_(se,ye,d(se.el),Ae(se),P,F,$),w.el=ye.el,fe===null&&updateHOCHostEl(P,ye.el),V&&queuePostRenderEffect(V,F),(be=w.props&&w.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(be,Y,w,ae),F)}else{let w;const{el:S,props:V}=y,{bm:Y,m:ae,parent:fe}=P,be=isAsyncWrapper(y);if(toggleRecurse(P,!1),Y&&invokeArrayFns(Y),!be&&(w=V&&V.onVnodeBeforeMount)&&invokeVNodeHook(w,fe,y),toggleRecurse(P,!0),S&&ke){const ye=()=>{P.subTree=renderComponentRoot(P),ke(S,P.subTree,P,F,null)};be?y.type.__asyncLoader().then(()=>!P.isUnmounted&&ye()):ye()}else{const ye=P.subTree=renderComponentRoot(P);_(null,ye,C,I,P,F,$),y.el=ye.el}if(ae&&queuePostRenderEffect(ae,F),!be&&(w=V&&V.onVnodeMounted)){const ye=y;queuePostRenderEffect(()=>invokeVNodeHook(w,fe,ye),F)}(y.shapeFlag&256||fe&&isAsyncWrapper(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&queuePostRenderEffect(P.a,F),P.isMounted=!0,y=C=I=null}},he=P.effect=new ReactiveEffect(Z,()=>queueJob(j),P.scope),j=P.update=()=>he.run();j.id=P.uid,toggleRecurse(P,!0),j()},re=(P,y,C)=>{y.component=P;const I=P.vnode.props;P.vnode=y,P.next=null,updateProps(P,y.props,I,C),updateSlots(P,y.children,C),pauseTracking(),flushPreFlushCbs(),resetTracking()},Q=(P,y,C,I,F,$,X,Z,he=!1)=>{const j=P&&P.children,w=P?P.shapeFlag:0,S=y.children,{patchFlag:V,shapeFlag:Y}=y;if(V>0){if(V&128){me(j,S,C,I,F,$,X,Z,he);return}else if(V&256){pe(j,S,C,I,F,$,X,Z,he);return}}Y&8?(w&16&&ie(j,F,$),S!==j&&u(C,S)):w&16?Y&16?me(j,S,C,I,F,$,X,Z,he):ie(j,F,$,!0):(w&8&&u(C,""),Y&16&&A(S,C,I,F,$,X,Z,he))},pe=(P,y,C,I,F,$,X,Z,he)=>{P=P||EMPTY_ARR,y=y||EMPTY_ARR;const j=P.length,w=y.length,S=Math.min(j,w);let V;for(V=0;V<S;V++){const Y=y[V]=he?cloneIfMounted(y[V]):normalizeVNode(y[V]);_(P[V],Y,C,null,F,$,X,Z,he)}j>w?ie(P,F,$,!0,!1,S):A(y,C,I,F,$,X,Z,he,S)},me=(P,y,C,I,F,$,X,Z,he)=>{let j=0;const w=y.length;let S=P.length-1,V=w-1;for(;j<=S&&j<=V;){const Y=P[j],ae=y[j]=he?cloneIfMounted(y[j]):normalizeVNode(y[j]);if(isSameVNodeType(Y,ae))_(Y,ae,C,null,F,$,X,Z,he);else break;j++}for(;j<=S&&j<=V;){const Y=P[S],ae=y[V]=he?cloneIfMounted(y[V]):normalizeVNode(y[V]);if(isSameVNodeType(Y,ae))_(Y,ae,C,null,F,$,X,Z,he);else break;S--,V--}if(j>S){if(j<=V){const Y=V+1,ae=Y<w?y[Y].el:I;for(;j<=V;)_(null,y[j]=he?cloneIfMounted(y[j]):normalizeVNode(y[j]),C,ae,F,$,X,Z,he),j++}}else if(j>V)for(;j<=S;)te(P[j],F,$,!0),j++;else{const Y=j,ae=j,fe=new Map;for(j=ae;j<=V;j++){const Le=y[j]=he?cloneIfMounted(y[j]):normalizeVNode(y[j]);Le.key!=null&&fe.set(Le.key,j)}let be,ye=0;const se=V-ae+1;let De=!1,Ne=0;const Re=new Array(se);for(j=0;j<se;j++)Re[j]=0;for(j=Y;j<=S;j++){const Le=P[j];if(ye>=se){te(Le,F,$,!0);continue}let Ve;if(Le.key!=null)Ve=fe.get(Le.key);else for(be=ae;be<=V;be++)if(Re[be-ae]===0&&isSameVNodeType(Le,y[be])){Ve=be;break}Ve===void 0?te(Le,F,$,!0):(Re[Ve-ae]=j+1,Ve>=Ne?Ne=Ve:De=!0,_(Le,y[Ve],C,null,F,$,X,Z,he),ye++)}const Fe=De?getSequence(Re):EMPTY_ARR;for(be=Fe.length-1,j=se-1;j>=0;j--){const Le=ae+j,Ve=y[Le],qe=Le+1<w?y[Le+1].el:I;Re[j]===0?_(null,Ve,C,qe,F,$,X,Z,he):De&&(be<0||j!==Fe[be]?ee(Ve,C,qe,2):be--)}}},ee=(P,y,C,I,F=null)=>{const{el:$,type:X,transition:Z,children:he,shapeFlag:j}=P;if(j&6){ee(P.component.subTree,y,C,I);return}if(j&128){P.suspense.move(y,C,I);return}if(j&64){X.move(P,y,C,we);return}if(X===Fragment){i($,y,C);for(let S=0;S<he.length;S++)ee(he[S],y,C,I);i(P.anchor,y,C);return}if(X===Static){M(P,y,C);return}if(I!==2&&j&1&&Z)if(I===0)Z.beforeEnter($),i($,y,C),queuePostRenderEffect(()=>Z.enter($),F);else{const{leave:S,delayLeave:V,afterLeave:Y}=Z,ae=()=>i($,y,C),fe=()=>{S($,()=>{ae(),Y&&Y()})};V?V($,ae,fe):fe()}else i($,y,C)},te=(P,y,C,I=!1,F=!1)=>{const{type:$,props:X,ref:Z,children:he,dynamicChildren:j,shapeFlag:w,patchFlag:S,dirs:V}=P;if(Z!=null&&setRef(Z,null,C,P,!0),w&256){y.ctx.deactivate(P);return}const Y=w&1&&V,ae=!isAsyncWrapper(P);let fe;if(ae&&(fe=X&&X.onVnodeBeforeUnmount)&&invokeVNodeHook(fe,y,P),w&6)Te(P.component,C,I);else{if(w&128){P.suspense.unmount(C,I);return}Y&&invokeDirectiveHook(P,null,y,"beforeUnmount"),w&64?P.type.remove(P,y,C,F,we,I):j&&($!==Fragment||S>0&&S&64)?ie(j,y,C,!1,!0):($===Fragment&&S&384||!F&&w&16)&&ie(he,y,C),I&&_e(P)}(ae&&(fe=X&&X.onVnodeUnmounted)||Y)&&queuePostRenderEffect(()=>{fe&&invokeVNodeHook(fe,y,P),Y&&invokeDirectiveHook(P,null,y,"unmounted")},C)},_e=P=>{const{type:y,el:C,anchor:I,transition:F}=P;if(y===Fragment){Se(C,I);return}if(y===Static){b(P);return}const $=()=>{r(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(P.shapeFlag&1&&F&&!F.persisted){const{leave:X,delayLeave:Z}=F,he=()=>X(C,$);Z?Z(P.el,$,he):he()}else $()},Se=(P,y)=>{let C;for(;P!==y;)C=f(P),r(P),P=C;r(y)},Te=(P,y,C)=>{const{bum:I,scope:F,update:$,subTree:X,um:Z}=P;I&&invokeArrayFns(I),F.stop(),$&&($.active=!1,te(X,P,y,C)),Z&&queuePostRenderEffect(Z,y),queuePostRenderEffect(()=>{P.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},ie=(P,y,C,I=!1,F=!1,$=0)=>{for(let X=$;X<P.length;X++)te(P[X],y,C,I,F)},Ae=P=>P.shapeFlag&6?Ae(P.component.subTree):P.shapeFlag&128?P.suspense.next():f(P.anchor||P.el),Ee=(P,y,C)=>{P==null?y._vnode&&te(y._vnode,null,null,!0):_(y._vnode||null,P,y,null,null,null,C),flushPreFlushCbs(),flushPostFlushCbs(),y._vnode=P},we={p:_,um:te,m:ee,r:_e,mt:H,mc:A,pc:Q,pbc:U,n:Ae,o:n};let xe,ke;return e&&([xe,ke]=e(we)),{render:Ee,hydrate:xe,createApp:createAppAPI(Ee,xe)}}function toggleRecurse({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function traverseStaticChildren(n,e,t=!1){const i=n.children,r=e.children;if(isArray$1(i)&&isArray$1(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=cloneIfMounted(r[s]),o.el=a.el),t||traverseStaticChildren(a,o)),o.type===Text&&(o.el=a.el)}}function getSequence(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const isTeleport=n=>n.__isTeleport,Fragment=Symbol(void 0),Text=Symbol(void 0),Comment=Symbol(void 0),Static=Symbol(void 0),blockStack=[];let currentBlock=null;function openBlock(n=!1){blockStack.push(currentBlock=n?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(n){isBlockTreeEnabled+=n}function setupBlock(n){return n.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(n),n}function createElementBlock(n,e,t,i,r,s){return setupBlock(createBaseVNode(n,e,t,i,r,s,!0))}function createBlock(n,e,t,i,r){return setupBlock(createVNode(n,e,t,i,r,!0))}function isVNode$1(n){return n?n.__v_isVNode===!0:!1}function isSameVNodeType(n,e){return n.type===e.type&&n.key===e.key}const InternalObjectKey="__vInternal",normalizeKey=({key:n})=>n??null,normalizeRef=({ref:n,ref_key:e,ref_for:t})=>n!=null?isString$1(n)||isRef(n)||isFunction$1(n)?{i:currentRenderingInstance,r:n,k:e,f:!!t}:n:null;function createBaseVNode(n,e=null,t=null,i=0,r=null,s=n===Fragment?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&normalizeKey(e),ref:e&&normalizeRef(e),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return o?(normalizeChildren(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=isString$1(t)?8:16),isBlockTreeEnabled>0&&!a&&currentBlock&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&currentBlock.push(l),l}const createVNode=_createVNode;function _createVNode(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===NULL_DYNAMIC_COMPONENT)&&(n=Comment),isVNode$1(n)){const o=cloneVNode(n,e,!0);return t&&normalizeChildren(o,t),isBlockTreeEnabled>0&&!s&&currentBlock&&(o.shapeFlag&6?currentBlock[currentBlock.indexOf(n)]=o:currentBlock.push(o)),o.patchFlag|=-2,o}if(isClassComponent(n)&&(n=n.__vccOpts),e){e=guardReactiveProps(e);let{class:o,style:l}=e;o&&!isString$1(o)&&(e.class=normalizeClass(o)),isObject$1(l)&&(isProxy(l)&&!isArray$1(l)&&(l=extend({},l)),e.style=normalizeStyle(l))}const a=isString$1(n)?1:isSuspense(n)?128:isTeleport(n)?64:isObject$1(n)?4:isFunction$1(n)?2:0;return createBaseVNode(n,e,t,i,r,a,s,!0)}function guardReactiveProps(n){return n?isProxy(n)||InternalObjectKey in n?extend({},n):n:null}function cloneVNode(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?mergeProps(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&normalizeKey(o),ref:e&&e.ref?t&&r?isArray$1(r)?r.concat(normalizeRef(e)):[r,normalizeRef(e)]:normalizeRef(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fragment?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cloneVNode(n.ssContent),ssFallback:n.ssFallback&&cloneVNode(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function createTextVNode(n=" ",e=0){return createVNode(Text,null,n,e)}function createStaticVNode(n,e){const t=createVNode(Static,null,n);return t.staticCount=e,t}function createCommentVNode(n="",e=!1){return e?(openBlock(),createBlock(Comment,null,n)):createVNode(Comment,null,n)}function normalizeVNode(n){return n==null||typeof n=="boolean"?createVNode(Comment):isArray$1(n)?createVNode(Fragment,null,n.slice()):typeof n=="object"?cloneIfMounted(n):createVNode(Text,null,String(n))}function cloneIfMounted(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cloneVNode(n)}function normalizeChildren(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(isArray$1(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),normalizeChildren(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(InternalObjectKey in e)?e._ctx=currentRenderingInstance:r===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else isFunction$1(e)?(e={default:e,_ctx:currentRenderingInstance},t=32):(e=String(e),i&64?(t=16,e=[createTextVNode(e)]):t=8);n.children=e,n.shapeFlag|=t}function mergeProps(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=normalizeClass([e.class,i.class]));else if(r==="style")e.style=normalizeStyle([e.style,i.style]);else if(isOn(r)){const s=e[r],a=i[r];a&&s!==a&&!(isArray$1(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function invokeVNodeHook(n,e,t,i=null){callWithAsyncErrorHandling(n,e,7,[t,i])}const emptyAppContext=createAppContext();let uid$1=0;function createComponentInstance(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||emptyAppContext,s={uid:uid$1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(i,r),emitsOptions:normalizeEmitsOptions(i,r),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:i.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=emit$1.bind(null,s),n.ce&&n.ce(s),s}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance,setCurrentInstance=n=>{currentInstance=n,n.scope.on()},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),currentInstance=null};function isStatefulComponent(n){return n.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(n,e=!1){isInSSRComponentSetup=e;const{props:t,children:i}=n.vnode,r=isStatefulComponent(n);initProps(n,t,r,e),initSlots(n,i);const s=r?setupStatefulComponent(n,e):void 0;return isInSSRComponentSetup=!1,s}function setupStatefulComponent(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=markRaw(new Proxy(n.ctx,PublicInstanceProxyHandlers));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?createSetupContext(n):null;setCurrentInstance(n),pauseTracking();const s=callWithErrorHandling(i,n,0,[n.props,r]);if(resetTracking(),unsetCurrentInstance(),isPromise(s)){if(s.then(unsetCurrentInstance,unsetCurrentInstance),e)return s.then(a=>{handleSetupResult(n,a,e)}).catch(a=>{handleError(a,n,0)});n.asyncDep=s}else handleSetupResult(n,s,e)}else finishComponentSetup(n,e)}function handleSetupResult(n,e,t){isFunction$1(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:isObject$1(e)&&(n.setupState=proxyRefs(e)),finishComponentSetup(n,t)}let compile;function finishComponentSetup(n,e,t){const i=n.type;if(!n.render){if(!e&&compile&&!i.render){const r=i.template||resolveMergedOptions(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=extend(extend({isCustomElement:s,delimiters:o},a),l);i.render=compile(r,c)}}n.render=i.render||NOOP}setCurrentInstance(n),pauseTracking(),applyOptions(n),resetTracking(),unsetCurrentInstance()}function createAttrsProxy(n){return new Proxy(n.attrs,{get(e,t){return track(n,"get","$attrs"),e[t]}})}function createSetupContext(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=createAttrsProxy(n))},slots:n.slots,emit:n.emit,expose:e}}function getExposeProxy(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(proxyRefs(markRaw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](n)},has(e,t){return t in e||t in publicPropertiesMap}}))}function getComponentName(n,e=!0){return isFunction$1(n)?n.displayName||n.name:n.name||e&&n.__name}function isClassComponent(n){return isFunction$1(n)&&"__vccOpts"in n}const computed=(n,e)=>computed$1(n,e,isInSSRComponentSetup);function h(n,e,t){const i=arguments.length;return i===2?isObject$1(e)&&!isArray$1(e)?isVNode$1(e)?createVNode(n,null,[e]):createVNode(n,e):createVNode(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&isVNode$1(t)&&(t=[t]),createVNode(n,e,t))}const ssrContextKey=Symbol(""),useSSRContext=()=>inject(ssrContextKey),version="3.2.45",svgNS="http://www.w3.org/2000/svg",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?doc.createElementNS(svgNS,n):doc.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>doc.createTextNode(n),createComment:n=>doc.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>doc.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{templateContainer.innerHTML=i?`<svg>${n}</svg>`:n;const o=templateContainer.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function patchClass(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function patchStyle(n,e,t){const i=n.style,r=isString$1(t);if(t&&!r){for(const s in t)setStyle(i,s,t[s]);if(e&&!isString$1(e))for(const s in e)t[s]==null&&setStyle(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const importantRE=/\s*!important$/;function setStyle(n,e,t){if(isArray$1(t))t.forEach(i=>setStyle(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=autoPrefix(n,e);importantRE.test(t)?n.setProperty(hyphenate(i),t.replace(importantRE,""),"important"):n[i]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(n,e){const t=prefixCache[e];if(t)return t;let i=camelize(e);if(i!=="filter"&&i in n)return prefixCache[e]=i;i=capitalize$1(i);for(let r=0;r<prefixes.length;r++){const s=prefixes[r]+i;if(s in n)return prefixCache[e]=s}return e}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(xlinkNS,e.slice(6,e.length)):n.setAttributeNS(xlinkNS,e,t);else{const s=isSpecialBooleanAttr(e);t==null||s&&!includeBooleanAttr(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function patchDOMProp(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=includeBooleanAttr(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function addEventListener(n,e,t,i){n.addEventListener(e,t,i)}function removeEventListener(n,e,t,i){n.removeEventListener(e,t,i)}function patchEvent(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=parseName(e);if(i){const c=s[e]=createInvoker(i,r);addEventListener(n,o,c,l)}else a&&(removeEventListener(n,o,a,l),s[e]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(n){let e;if(optionsModifierRE.test(n)){e={};let i;for(;i=n.match(optionsModifierRE);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hyphenate(n.slice(2)),e]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(i,t.value),e,5,[i])};return t.value=n,t.attached=getNow(),t}function patchStopImmediatePropagation(n,e){if(isArray$1(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nativeOnRE=/^on[a-z]/,patchProp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?patchClass(n,i,r):e==="style"?patchStyle(n,t,i):isOn(e)?isModelListener(e)||patchEvent(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):shouldSetAsProp(n,e,i,r))?patchDOMProp(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),patchAttr(n,e,i,r))};function shouldSetAsProp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&nativeOnRE.test(e)&&isFunction$1(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||nativeOnRE.test(e)&&isString$1(t)?!1:e in n}const TRANSITION="transition",ANIMATION="animation",Transition=(n,{slots:e})=>h(BaseTransition,resolveTransitionProps(n),e);Transition.displayName="Transition";const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Transition.props=extend({},BaseTransition.props,DOMTransitionPropsValidators);const callHook=(n,e=[])=>{isArray$1(n)?n.forEach(t=>t(...e)):n&&n(...e)},hasExplicitCallback=n=>n?isArray$1(n)?n.some(e=>e.length>1):n.length>1:!1;function resolveTransitionProps(n){const e={};for(const ne in n)ne in DOMTransitionPropsValidators||(e[ne]=n[ne]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,x=normalizeDuration(r),_=x&&x[0],m=x&&x[1],{onBeforeEnter:v,onEnter:T,onEnterCancelled:M,onLeave:b,onLeaveCancelled:E,onBeforeAppear:N=v,onAppear:B=T,onAppearCancelled:A=M}=e,O=(ne,G,H)=>{removeTransitionClass(ne,G?u:o),removeTransitionClass(ne,G?c:a),H&&H()},U=(ne,G)=>{ne._isLeaving=!1,removeTransitionClass(ne,d),removeTransitionClass(ne,g),removeTransitionClass(ne,f),G&&G()},q=ne=>(G,H)=>{const oe=ne?B:T,ce=()=>O(G,ne,H);callHook(oe,[G,ce]),nextFrame(()=>{removeTransitionClass(G,ne?l:s),addTransitionClass(G,ne?u:o),hasExplicitCallback(oe)||whenTransitionEnds(G,i,_,ce)})};return extend(e,{onBeforeEnter(ne){callHook(v,[ne]),addTransitionClass(ne,s),addTransitionClass(ne,a)},onBeforeAppear(ne){callHook(N,[ne]),addTransitionClass(ne,l),addTransitionClass(ne,c)},onEnter:q(!1),onAppear:q(!0),onLeave(ne,G){ne._isLeaving=!0;const H=()=>U(ne,G);addTransitionClass(ne,d),forceReflow(),addTransitionClass(ne,f),nextFrame(()=>{ne._isLeaving&&(removeTransitionClass(ne,d),addTransitionClass(ne,g),hasExplicitCallback(b)||whenTransitionEnds(ne,i,m,H))}),callHook(b,[ne,H])},onEnterCancelled(ne){O(ne,!1),callHook(M,[ne])},onAppearCancelled(ne){O(ne,!0),callHook(A,[ne])},onLeaveCancelled(ne){U(ne),callHook(E,[ne])}})}function normalizeDuration(n){if(n==null)return null;if(isObject$1(n))return[NumberOf(n.enter),NumberOf(n.leave)];{const e=NumberOf(n);return[e,e]}}function NumberOf(n){return toNumber(n)}function addTransitionClass(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function removeTransitionClass(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function nextFrame(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let endId=0;function whenTransitionEnds(n,e,t,i){const r=n._endId=++endId,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=getTransitionInfo(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=g=>{g.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function getTransitionInfo(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${TRANSITION}Delay`),s=i(`${TRANSITION}Duration`),a=getTimeout(r,s),o=i(`${ANIMATION}Delay`),l=i(`${ANIMATION}Duration`),c=getTimeout(o,l);let u=null,d=0,f=0;e===TRANSITION?a>0&&(u=TRANSITION,d=a,f=s.length):e===ANIMATION?c>0&&(u=ANIMATION,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?TRANSITION:ANIMATION:null,f=u?u===TRANSITION?s.length:l.length:0);const g=u===TRANSITION&&/\b(transform|all)(,|$)/.test(i(`${TRANSITION}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:g}}function getTimeout(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>toMs(t)+toMs(n[i])))}function toMs(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}const rendererOptions=extend({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=(...n)=>{const e=ensureRenderer().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=normalizeContainer(i);if(!r)return;const s=e._component;!isFunction$1(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function normalizeContainer(n){return isString$1(n)?document.querySelector(n):n}const NumberInput_vue_vue_type_style_index_0_lang="",_export_sfc=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},_sfc_main$o={name:"NumberInput",props:{label:String,value:Number},computed:{format(){return n=>Math.floor(n)}}},_hoisted_1$l={class:"number-input"},_hoisted_2$f={class:"label"},_hoisted_3$e=["value"];function _sfc_render$o(n,e,t,i,r,s){return openBlock(),createElementBlock("div",_hoisted_1$l,[createBaseVNode("label",null,[createBaseVNode("span",_hoisted_2$f,toDisplayString$1(t.label)+":",1),createBaseVNode("input",{type:"number",value:s.format(t.value),onInput:e[0]||(e[0]=a=>n.$emit("input",a)),onKeydown:e[1]||(e[1]=a=>a.stopPropagation())},null,40,_hoisted_3$e)])])}const NumberInput=_export_sfc(_sfc_main$o,[["render",_sfc_render$o]]),PositionInput_vue_vue_type_style_index_0_lang="",_sfc_main$n={name:"PositionInput",components:{NumberInput},data(){return{controls:this.$bluemap.mapViewer.controlsManager.data,appState:this.$bluemap.appState}}},_hoisted_1$k={class:"position-input"};function _sfc_render$n(n,e,t,i,r,s){const a=resolveComponent("NumberInput");return openBlock(),createElementBlock("div",_hoisted_1$k,[createVNode(a,{label:"x",value:r.controls.position.x,onInput:e[0]||(e[0]=o=>{r.controls.position.x=parseFloat(o.target.value)})},null,8,["value"]),r.appState.controls.state==="free"?(openBlock(),createBlock(a,{key:0,label:"y",value:r.controls.position.y,onInput:e[1]||(e[1]=o=>{r.controls.position.y=parseFloat(o.target.value)})},null,8,["value"])):createCommentVNode("",!0),createVNode(a,{label:"z",value:r.controls.position.z,onInput:e[2]||(e[2]=o=>{r.controls.position.z=parseFloat(o.target.value)})},null,8,["value"])])}const PositionInput=_export_sfc(_sfc_main$n,[["render",_sfc_render$n]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="147",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,NearestMipMapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp(n,e,t){return Math.max(e,Math.min(t,n))}function euclideanModulo(n,e){return(n%e+e)%e}function mapLinear(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function inverseLerp(n,e,t){return n!==e?(t-n)/(e-n):0}function lerp(n,e,t){return(1-t)*n+t*e}function damp(n,e,t,i){return lerp(n,e,1-Math.exp(-t*i))}function pingpong(n,e=1){return e-Math.abs(euclideanModulo(n,e*2)-e)}function smoothstep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function smootherstep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function randInt(n,e){return n+Math.floor(Math.random()*(e-n+1))}function randFloat(n,e){return n+Math.random()*(e-n)}function randFloatSpread(n){return n*(.5-Math.random())}function seededRandom(n){n!==void 0&&(_seed=n);let e=_seed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function degToRad(n){return n*DEG2RAD}function radToDeg(n){return n*RAD2DEG}function isPowerOfTwo(n){return(n&n-1)===0&&n!==0}function ceilPowerOfTwo(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function floorPowerOfTwo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function setQuaternionFromProperEuler(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),g=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*g,o*c);break;case"YXY":n.set(l*g,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*g,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function denormalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function normalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var MathUtils=Object.freeze({__proto__:null,DEG2RAD,RAD2DEG,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize});class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],g=i[5],x=i[8],_=r[0],m=r[3],v=r[6],T=r[1],M=r[4],b=r[7],E=r[2],N=r[5],B=r[8];return s[0]=a*_+o*T+l*E,s[3]=a*m+o*M+l*N,s[6]=a*v+o*b+l*B,s[1]=c*_+u*T+d*E,s[4]=c*m+u*M+d*N,s[7]=c*v+u*b+d*B,s[2]=f*_+g*T+x*E,s[5]=f*m+g*M+x*N,s[8]=f*v+g*b+x*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,g=c*s-a*l,x=t*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=g*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const TYPED_ARRAYS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function getTypedArray(n,e){return new TYPED_ARRAYS[n](e)}function createElementNS(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SRGBToLinear(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function LinearToSRGB(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const FN={[SRGBColorSpace]:{[LinearSRGBColorSpace]:SRGBToLinear},[LinearSRGBColorSpace]:{[SRGBColorSpace]:LinearToSRGB}},ColorManagement={legacyMode:!0,get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(FN[e]&&FN[e][t]!==void 0){const i=FN[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},_colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_rgb$1={r:0,g:0,b:0},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function toComponents(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Color{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=i,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),i=clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=hue2rgb(a,s,e+1/3),this.g=hue2rgb(a,s,e),this.b=hue2rgb(a,s,e-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(e,t=SRGBColorSpace){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ColorManagement.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ColorManagement.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=SRGBColorSpace){const i=_colorKeywords[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),e),clamp(_rgb$1.r*255,0,255)<<16^clamp(_rgb$1.g*255,0,255)<<8^clamp(_rgb$1.b*255,0,255)<<0}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),t);const i=_rgb$1.r,r=_rgb$1.g,s=_rgb$1.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),t),e.r=_rgb$1.r,e.g=_rgb$1.g,e.b=_rgb$1.b,e}getStyle(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),e),e!==SRGBColorSpace?`color(${e} ${_rgb$1.r} ${_rgb$1.g} ${_rgb$1.b})`:`rgb(${_rgb$1.r*255|0},${_rgb$1.g*255|0},${_rgb$1.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=t,_hslA.l+=i,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const i=lerp(_hslA.h,_hslB.h,t),r=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Color.NAMES=_colorKeywords;let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const i=_canvas.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=SRGBToLinear(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(SRGBToLinear(t[i]/255)*255):t[i]=SRGBToLinear(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Source{constructor(e=null){this.isSource=!0,this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(serializeImage(r[a].image)):s.push(serializeImage(r[a]))}else s=serializeImage(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function serializeImage(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ImageUtils.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,a=LinearMipmapLinearFilter,o=RGBAFormat,l=UnsignedByteType,c=Texture.DEFAULT_ANISOTROPY,u=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],g=l[5],x=l[9],_=l[2],m=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(g+1)/2,E=(v+1)/2,N=(u+f)/4,B=(d+_)/4,A=(x+m)/4;return M>b&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=N/i,s=B/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=N/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=B/s,r=A/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(d-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Texture(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:LinearFilter,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],g=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==f||c!==g||u!==x){let m=1-o;const v=l*f+c*g+u*x+d*_,T=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const E=Math.sqrt(M),N=Math.atan2(E,v*T);m=Math.sin(m*N)/E,o=Math.sin(o*N)/E}const b=o*T;if(l=l*m+f*b,c=c*m+g*b,u=u*m+x*b,d=d*m+_*b,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+u*d+l*g-c*f,e[t+1]=l*x+u*f+c*d-o*g,e[t+2]=c*x+u*g+o*f-l*d,e[t+3]=u*x-o*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*g*x,this._y=c*g*d-f*u*x,this._z=c*u*x+f*g*d,this._w=c*u*d-f*g*x;break;case"YXZ":this._x=f*u*d+c*g*x,this._y=c*g*d-f*u*x,this._z=c*u*x-f*g*d,this._w=c*u*d+f*g*x;break;case"ZXY":this._x=f*u*d-c*g*x,this._y=c*g*d+f*u*x,this._z=c*u*x+f*g*d,this._w=c*u*d-f*g*x;break;case"ZYX":this._x=f*u*d-c*g*x,this._y=c*g*d+f*u*x,this._z=c*u*x-f*g*d,this._w=c*u*d+f*g*x;break;case"YZX":this._x=f*u*d+c*g*x,this._y=c*g*d+f*u*x,this._z=c*u*x-f*g*d,this._w=c*u*d-f*g*x;break;case"XZY":this._x=f*u*d-c*g*x,this._y=c*g*d-f*u*x,this._z=c*u*x+f*g*d,this._w=c*u*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,f=-s*t-a*i-o*r;return this.x=c*l+f*-s+u*-o-d*-a,this.y=u*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)_vector$b.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b)}else i.boundingBox===null&&i.computeBoundingBox(),_box$3.copy(i.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _vector$b.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_testAxis.fromArray(n,s);const o=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),l=e.dot(_testAxis),c=t.dot(_testAxis),u=i.dot(_testAxis);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_box$2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$6,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_segDir),o=_diff.dot(this.direction),l=-_diff.dot(_segDir),c=_diff.lengthSq(),u=Math.abs(1-a*a);let d,f,g,x;if(u>0)if(d=a*l-o,f=a*o-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const _=1/u;d*=_,f*=_,g=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(_segDir).multiplyScalar(f).add(_segCenter),g}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const i=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,i,r,s){_edge1.subVectors(t,e),_edge2.subVectors(i,e),_normal$1.crossVectors(_edge1,_edge2);let a=this.direction.dot(_normal$1),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_diff.subVectors(this.origin,e);const l=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(l<0)return null;const c=o*this.direction.dot(_edge1.cross(_diff));if(c<0||l+c>a)return null;const u=-o*_diff.dot(_normal$1);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,d,f,g,x,_,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=f,v[3]=g,v[7]=x,v[11]=_,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),a=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,g=a*d,x=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=g+x*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=x+g*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,g=l*d,x=c*u,_=c*d;t[0]=f+_*o,t[4]=x*o-g,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=g*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,g=l*d,x=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,g=a*d,x=o*u,_=o*d;t[0]=l*u,t[4]=x*c-g,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=g*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=x*d+g,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*d+x,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,g=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=g*d-x,t[2]=x*d-g,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,i){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],g=i[13],x=i[2],_=i[6],m=i[10],v=i[14],T=i[3],M=i[7],b=i[11],E=i[15],N=r[0],B=r[4],A=r[8],O=r[12],U=r[1],q=r[5],ne=r[9],G=r[13],H=r[2],oe=r[6],ce=r[10],re=r[14],Q=r[3],pe=r[7],me=r[11],ee=r[15];return s[0]=a*N+o*U+l*H+c*Q,s[4]=a*B+o*q+l*oe+c*pe,s[8]=a*A+o*ne+l*ce+c*me,s[12]=a*O+o*G+l*re+c*ee,s[1]=u*N+d*U+f*H+g*Q,s[5]=u*B+d*q+f*oe+g*pe,s[9]=u*A+d*ne+f*ce+g*me,s[13]=u*O+d*G+f*re+g*ee,s[2]=x*N+_*U+m*H+v*Q,s[6]=x*B+_*q+m*oe+v*pe,s[10]=x*A+_*ne+m*ce+v*me,s[14]=x*O+_*G+m*re+v*ee,s[3]=T*N+M*U+b*H+E*Q,s[7]=T*B+M*q+b*oe+E*pe,s[11]=T*A+M*ne+b*ce+E*me,s[15]=T*O+M*G+b*re+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],g=e[14],x=e[3],_=e[7],m=e[11],v=e[15];return x*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*g-i*l*g)+_*(+t*l*g-t*c*f+s*a*f-r*a*g+r*c*u-s*l*u)+m*(+t*c*d-t*o*g-s*a*d+i*a*g+s*o*u-i*c*u)+v*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],g=e[11],x=e[12],_=e[13],m=e[14],v=e[15],T=d*m*c-_*f*c+_*l*g-o*m*g-d*l*v+o*f*v,M=x*f*c-u*m*c-x*l*g+a*m*g+u*l*v-a*f*v,b=u*_*c-x*d*c+x*o*g-a*_*g-u*o*v+a*d*v,E=x*d*l-u*_*l-x*o*f+a*_*f+u*o*m-a*d*m,N=t*T+i*M+r*b+s*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=T*B,e[1]=(_*f*s-d*m*s-_*r*g+i*m*g+d*r*v-i*f*v)*B,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*v+i*l*v)*B,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*g-i*l*g)*B,e[4]=M*B,e[5]=(u*m*s-x*f*s+x*r*g-t*m*g-u*r*v+t*f*v)*B,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*v-t*l*v)*B,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*g+t*l*g)*B,e[8]=b*B,e[9]=(x*d*s-u*_*s-x*i*g+t*_*g+u*i*v-t*d*v)*B,e[10]=(a*_*s-x*o*s+x*i*c-t*_*c-a*i*v+t*o*v)*B,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*g-t*o*g)*B,e[12]=E*B,e[13]=(u*_*r-x*d*r+x*i*f-t*_*f-u*i*m+t*d*m)*B,e[14]=(x*o*r-a*_*r-x*i*l+t*_*l+a*i*m-t*o*m)*B,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,g=s*u,x=s*d,_=a*u,m=a*d,v=o*d,T=l*c,M=l*u,b=l*d,E=i.x,N=i.y,B=i.z;return r[0]=(1-(_+v))*E,r[1]=(g+b)*E,r[2]=(x-M)*E,r[3]=0,r[4]=(g-b)*N,r[5]=(1-(f+v))*N,r[6]=(m+T)*N,r[7]=0,r[8]=(x+M)*B,r[9]=(m-T)*B,r[10]=(1-(f+_))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_v1$5.set(r[0],r[1],r[2]).length();const a=_v1$5.set(r[4],r[5],r[6]).length(),o=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_m1$2.copy(this);const c=1/s,u=1/a,d=1/o;return _m1$2.elements[0]*=c,_m1$2.elements[1]*=c,_m1$2.elements[2]*=c,_m1$2.elements[4]*=u,_m1$2.elements[5]*=u,_m1$2.elements[6]*=u,_m1$2.elements[8]*=d,_m1$2.elements[9]*=d,_m1$2.elements[10]*=d,t.setFromRotationMatrix(_m1$2),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),f=-(a+s)/(a-s),g=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),d=(t+e)*l,f=(i+r)*c,g=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,i=0,r=Euler.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Euler.DefaultOrder="XYZ";Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DefaultUp.clone();const e=new Vector3,t=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DefaultMatrixWorldAutoUpdate,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_target.copy(e):_target.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),r&&(_m1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Object3D.DefaultUp=new Vector3(0,1,0);Object3D.DefaultMatrixAutoUpdate=!0;Object3D.DefaultMatrixWorldAutoUpdate=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,i=new Vector3){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_v0$1.subVectors(e,t),r.cross(_v0$1);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_v0$1.subVectors(r,t),_v1$3.subVectors(i,t),_v2$2.subVectors(e,t);const a=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),l=_v0$1.dot(_v2$2),c=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,_v3$1),l.set(0,0),l.addScaledVector(s,_v3$1.x),l.addScaledVector(a,_v3$1.y),l.addScaledVector(o,_v3$1.z),l}static isFrontFacing(e,t,i,r){return _v0$1.subVectors(i,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Triangle.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_vab.subVectors(r,i),_vac.subVectors(s,i),_vap.subVectors(e,i);const l=_vab.dot(_vap),c=_vac.dot(_vap);if(l<=0&&c<=0)return t.copy(i);_vbp.subVectors(e,r);const u=_vab.dot(_vbp),d=_vac.dot(_vbp);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_vab,a);_vcp.subVectors(e,s);const g=_vab.dot(_vcp),x=_vac.dot(_vcp);if(x>=0&&g<=x)return t.copy(s);const _=g*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(_vac,o);const m=u*x-g*d;if(m<=0&&d-u>=0&&g-x>=0)return _vbc.subVectors(s,r),o=(d-u)/(d-u+(g-x)),t.copy(r).addScaledVector(_vbc,o);const v=1/(m+_+f);return a=_*v,o=f*v,t.copy(i).addScaledVector(_vab,a).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,i){return _m1.makeTranslation(e,t,i),this.applyMatrix4(_m1),this}scale(e,t,i){return _m1.makeScale(e,t,i),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_box$1$1.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1$1.min),this.boundingBox.expandByPoint(_box$1$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const i=this.boundingSphere.center;if(_box$1$1.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$1$1.min,_boxMorphTargets.min),_box$1$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1$1.max,_boxMorphTargets.max),_box$1$1.expandByPoint(_vector$8)):(_box$1$1.expandByPoint(_boxMorphTargets.min),_box$1$1.expandByPoint(_boxMorphTargets.max))}_box$1$1.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_vector$8.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_vector$8));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_vector$8.fromBufferAttribute(o,c),l&&(_offset.fromBufferAttribute(e,c),_vector$8.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let U=0;U<o;U++)c[U]=new Vector3,u[U]=new Vector3;const d=new Vector3,f=new Vector3,g=new Vector3,x=new Vector2,_=new Vector2,m=new Vector2,v=new Vector3,T=new Vector3;function M(U,q,ne){d.fromArray(r,U*3),f.fromArray(r,q*3),g.fromArray(r,ne*3),x.fromArray(a,U*2),_.fromArray(a,q*2),m.fromArray(a,ne*2),f.sub(d),g.sub(d),_.sub(x),m.sub(x);const G=1/(_.x*m.y-m.x*_.y);isFinite(G)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(g,-_.y).multiplyScalar(G),T.copy(g).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(G),c[U].add(v),c[q].add(v),c[ne].add(v),u[U].add(T),u[q].add(T),u[ne].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let U=0,q=b.length;U<q;++U){const ne=b[U],G=ne.start,H=ne.count;for(let oe=G,ce=G+H;oe<ce;oe+=3)M(i[oe+0],i[oe+1],i[oe+2])}const E=new Vector3,N=new Vector3,B=new Vector3,A=new Vector3;function O(U){B.fromArray(s,U*3),A.copy(B);const q=c[U];E.copy(q),E.sub(B.multiplyScalar(B.dot(q))).normalize(),N.crossVectors(A,q);const G=N.dot(u[U])<0?-1:1;l[U*4]=E.x,l[U*4+1]=E.y,l[U*4+2]=E.z,l[U*4+3]=G}for(let U=0,q=b.length;U<q;++U){const ne=b[U],G=ne.start,H=ne.count;for(let oe=G,ce=G+H;oe<ce;oe+=3)O(i[oe+0]),O(i[oe+1]),O(i[oe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new Vector3,s=new Vector3,a=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,u=new Vector3,d=new Vector3;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let g=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*u;for(let v=0;v<u;v++)f[x++]=c[g++]}return new BufferAttribute(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],g=e(f,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_tempB=new Vector3,_tempC=new Vector3,_morphA=new Vector3,_morphB=new Vector3,_morphC=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$3.copy(i.boundingSphere),_sphere$3.applyMatrix4(s),e.ray.intersectsSphere(_sphere$3)===!1)||(_inverseMatrix$2.copy(s).invert(),_ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),i.boundingBox!==null&&_ray$2.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,x=i.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,m=g.length;_<m;_++){const v=g[_],T=r[v.materialIndex],M=Math.max(v.start,x.start),b=Math.min(o.count,Math.min(v.start+v.count,x.start+x.count));for(let E=M,N=b;E<N;E+=3){const B=o.getX(E),A=o.getX(E+1),O=o.getX(E+2);a=checkBufferGeometryIntersection(this,T,e,_ray$2,l,c,u,d,f,B,A,O),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const _=Math.max(0,x.start),m=Math.min(o.count,x.start+x.count);for(let v=_,T=m;v<T;v+=3){const M=o.getX(v),b=o.getX(v+1),E=o.getX(v+2);a=checkBufferGeometryIntersection(this,r,e,_ray$2,l,c,u,d,f,M,b,E),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,m=g.length;_<m;_++){const v=g[_],T=r[v.materialIndex],M=Math.max(v.start,x.start),b=Math.min(l.count,Math.min(v.start+v.count,x.start+x.count));for(let E=M,N=b;E<N;E+=3){const B=E,A=E+1,O=E+2;a=checkBufferGeometryIntersection(this,T,e,_ray$2,l,c,u,d,f,B,A,O),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const _=Math.max(0,x.start),m=Math.min(l.count,x.start+x.count);for(let v=_,T=m;v<T;v+=3){const M=v,b=v+1,E=v+2;a=checkBufferGeometryIntersection(this,r,e,_ray$2,l,c,u,d,f,M,b,E),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function checkIntersection(n,e,t,i,r,s,a,o){let l;if(e.side===BackSide?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==DoubleSide,o),l===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_intersectionPointWorld);return c<t.near||c>t.far?null:{distance:c,point:_intersectionPointWorld.clone(),object:n}}function checkBufferGeometryIntersection(n,e,t,i,r,s,a,o,l,c,u,d){_vA$1.fromBufferAttribute(r,c),_vB$1.fromBufferAttribute(r,u),_vC$1.fromBufferAttribute(r,d);const f=n.morphTargetInfluences;if(s&&f){_morphA.set(0,0,0),_morphB.set(0,0,0),_morphC.set(0,0,0);for(let x=0,_=s.length;x<_;x++){const m=f[x],v=s[x];m!==0&&(_tempA.fromBufferAttribute(v,c),_tempB.fromBufferAttribute(v,u),_tempC.fromBufferAttribute(v,d),a?(_morphA.addScaledVector(_tempA,m),_morphB.addScaledVector(_tempB,m),_morphC.addScaledVector(_tempC,m)):(_morphA.addScaledVector(_tempA.sub(_vA$1),m),_morphB.addScaledVector(_tempB.sub(_vB$1),m),_morphC.addScaledVector(_tempC.sub(_vC$1),m)))}_vA$1.add(_morphA),_vB$1.add(_morphB),_vC$1.add(_morphC)}n.isSkinnedMesh&&(n.boneTransform(c,_vA$1),n.boneTransform(u,_vB$1),n.boneTransform(d,_vC$1));const g=checkIntersection(n,e,t,i,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(g){o&&(_uvA$1.fromBufferAttribute(o,c),_uvB$1.fromBufferAttribute(o,u),_uvC$1.fromBufferAttribute(o,d),g.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),l&&(_uvA$1.fromBufferAttribute(l,c),_uvB$1.fromBufferAttribute(l,u),_uvC$1.fromBufferAttribute(l,d),g.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const x={a:c,b:u,c:d,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,x.normal),g.face=x}return g}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(d,2));function x(_,m,v,T,M,b,E,N,B,A,O){const U=b/B,q=E/A,ne=b/2,G=E/2,H=N/2,oe=B+1,ce=A+1;let re=0,Q=0;const pe=new Vector3;for(let me=0;me<ce;me++){const ee=me*q-G;for(let te=0;te<oe;te++){const _e=te*U-ne;pe[_]=_e*T,pe[m]=ee*M,pe[v]=H,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[v]=N>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(te/B),d.push(1-me/A),re+=1}}for(let me=0;me<A;me++)for(let ee=0;ee<B;ee++){const te=f+ee+oe*me,_e=f+ee+oe*(me+1),Se=f+(ee+1)+oe*(me+1),Te=f+(ee+1)+oe*me;l.push(te,_e,Te),l.push(_e,Se,Te),Q+=6}o.addGroup(g,Q,O),g+=Q,f+=re}}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mergeUniforms(n){const e={};for(let t=0;t<n.length;t++){const i=cloneUniforms(n[t]);for(const r in i)e[r]=i[r]}return e}function cloneUniformsGroups(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function getUnlitUniformColorSpace(n){return n.getRenderTarget()===null&&n.outputEncoding===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const a=new Mesh(r,s),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_vector1.subVectors(i,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,i=new Plane,r=new Plane,s=new Plane,a=new Plane){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],_=i[11],m=i[12],v=i[13],T=i[14],M=i[15];return t[0].setComponents(o-r,d-l,_-f,M-m).normalize(),t[1].setComponents(o+r,d+l,_+f,M+m).normalize(),t[2].setComponents(o+s,d+c,_+g,M+v).normalize(),t[3].setComponents(o-s,d-c,_-g,M-v).normalize(),t[4].setComponents(o-a,d-u,_-x,M-T).normalize(),t[5].setComponents(o+a,d+u,_+x,M+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(e){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_vector$7.x=r.normal.x>0?e.max.x:e.min.x,_vector$7.y=r.normal.y>0?e.max.y:e.min.y,_vector$7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WebGLAttributes(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,g=u.updateRange;n.bindBuffer(d,c),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,g=[],x=[],_=[],m=[];for(let v=0;v<u;v++){const T=v*f-a;for(let M=0;M<c;M++){const b=M*d-s;x.push(b,-T,0),_.push(0,0,1),m.push(M/o),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let T=0;T<o;T++){const M=T+c*v,b=T+c*(v+1),E=T+1+c*(v+1),N=T+1+c*v;g.push(M,b,N),g.push(b,E,N)}this.setIndex(g),this.setAttribute("position",new Float32BufferAttribute(x,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(n,e,t,i,r,s,a){const o=new Color(0);let l=s===!0?0:1,c,u,d=null,f=0,g=null;function x(m,v){let T=!1,M=v.isScene===!0?v.background:null;M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M));const b=n.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?_(o,l):M&&M.isColor&&(_(M,1),T=!0),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,B,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,(d!==M||f!==M.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,v){m.getRGB(_rgb,getUnlitUniformColorSpace(n)),i.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),l=v,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:x}}function WebGLBindingStates(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(H,oe,ce,re,Q){let pe=!1;if(a){const me=_(re,ce,oe);c!==me&&(c=me,g(c.object)),pe=v(H,re,ce,Q),pe&&T(H,re,ce,Q)}else{const me=oe.wireframe===!0;(c.geometry!==re.id||c.program!==ce.id||c.wireframe!==me)&&(c.geometry=re.id,c.program=ce.id,c.wireframe=me,pe=!0)}Q!==null&&t.update(Q,34963),(pe||u)&&(u=!1,A(H,oe,ce,re),Q!==null&&n.bindBuffer(34963,t.get(Q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function x(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function _(H,oe,ce){const re=ce.wireframe===!0;let Q=o[H.id];Q===void 0&&(Q={},o[H.id]=Q);let pe=Q[oe.id];pe===void 0&&(pe={},Q[oe.id]=pe);let me=pe[re];return me===void 0&&(me=m(f()),pe[re]=me),me}function m(H){const oe=[],ce=[],re=[];for(let Q=0;Q<r;Q++)oe[Q]=0,ce[Q]=0,re[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:ce,attributeDivisors:re,object:H,attributes:{},index:null}}function v(H,oe,ce,re){const Q=c.attributes,pe=oe.attributes;let me=0;const ee=ce.getAttributes();for(const te in ee)if(ee[te].location>=0){const Se=Q[te];let Te=pe[te];if(Te===void 0&&(te==="instanceMatrix"&&H.instanceMatrix&&(Te=H.instanceMatrix),te==="instanceColor"&&H.instanceColor&&(Te=H.instanceColor)),Se===void 0||Se.attribute!==Te||Te&&Se.data!==Te.data)return!0;me++}return c.attributesNum!==me||c.index!==re}function T(H,oe,ce,re){const Q={},pe=oe.attributes;let me=0;const ee=ce.getAttributes();for(const te in ee)if(ee[te].location>=0){let Se=pe[te];Se===void 0&&(te==="instanceMatrix"&&H.instanceMatrix&&(Se=H.instanceMatrix),te==="instanceColor"&&H.instanceColor&&(Se=H.instanceColor));const Te={};Te.attribute=Se,Se&&Se.data&&(Te.data=Se.data),Q[te]=Te,me++}c.attributes=Q,c.attributesNum=me,c.index=re}function M(){const H=c.newAttributes;for(let oe=0,ce=H.length;oe<ce;oe++)H[oe]=0}function b(H){E(H,0)}function E(H,oe){const ce=c.newAttributes,re=c.enabledAttributes,Q=c.attributeDivisors;ce[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),Q[H]!==oe&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,oe),Q[H]=oe)}function N(){const H=c.newAttributes,oe=c.enabledAttributes;for(let ce=0,re=oe.length;ce<re;ce++)oe[ce]!==H[ce]&&(n.disableVertexAttribArray(ce),oe[ce]=0)}function B(H,oe,ce,re,Q,pe){i.isWebGL2===!0&&(ce===5124||ce===5125)?n.vertexAttribIPointer(H,oe,ce,Q,pe):n.vertexAttribPointer(H,oe,ce,re,Q,pe)}function A(H,oe,ce,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Q=re.attributes,pe=ce.getAttributes(),me=oe.defaultAttributeValues;for(const ee in pe){const te=pe[ee];if(te.location>=0){let _e=Q[ee];if(_e===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(_e=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(_e=H.instanceColor)),_e!==void 0){const Se=_e.normalized,Te=_e.itemSize,ie=t.get(_e);if(ie===void 0)continue;const Ae=ie.buffer,Ee=ie.type,we=ie.bytesPerElement;if(_e.isInterleavedBufferAttribute){const xe=_e.data,ke=xe.stride,P=_e.offset;if(xe.isInstancedInterleavedBuffer){for(let y=0;y<te.locationSize;y++)E(te.location+y,xe.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let y=0;y<te.locationSize;y++)b(te.location+y);n.bindBuffer(34962,Ae);for(let y=0;y<te.locationSize;y++)B(te.location+y,Te/te.locationSize,Ee,Se,ke*we,(P+Te/te.locationSize*y)*we)}else{if(_e.isInstancedBufferAttribute){for(let xe=0;xe<te.locationSize;xe++)E(te.location+xe,_e.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let xe=0;xe<te.locationSize;xe++)b(te.location+xe);n.bindBuffer(34962,Ae);for(let xe=0;xe<te.locationSize;xe++)B(te.location+xe,Te/te.locationSize,Ee,Se,Te*we,Te/te.locationSize*xe*we)}}else if(me!==void 0){const Se=me[ee];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(te.location,Se);break;case 3:n.vertexAttrib3fv(te.location,Se);break;case 4:n.vertexAttrib4fv(te.location,Se);break;default:n.vertexAttrib1fv(te.location,Se)}}}}N()}function O(){ne();for(const H in o){const oe=o[H];for(const ce in oe){const re=oe[ce];for(const Q in re)x(re[Q].object),delete re[Q];delete oe[ce]}delete o[H]}}function U(H){if(o[H.id]===void 0)return;const oe=o[H.id];for(const ce in oe){const re=oe[ce];for(const Q in re)x(re[Q].object),delete re[Q];delete oe[ce]}delete o[H.id]}function q(H){for(const oe in o){const ce=o[oe];if(ce[H.id]===void 0)continue;const re=ce[H.id];for(const Q in re)x(re[Q].object),delete re[Q];delete ce[H.id]}}function ne(){G(),u=!0,c!==l&&(c=l,g(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:G,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfProgram:q,initAttributes:M,enableAttribute:b,disableUnusedAttributes:N}}function WebGLBufferRenderer(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function WebGLCapabilities(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(B){if(B==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),g=n.getParameter(3379),x=n.getParameter(34076),_=n.getParameter(34921),m=n.getParameter(36347),v=n.getParameter(36348),T=n.getParameter(36349),M=f>0,b=a||e.has("OES_texture_float"),E=M&&b,N=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:N}}function WebGLClipping(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Plane,o=new Matrix3,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const x=d.length!==0||f||i!==0||r;return r=f,t=u(d,g,0),i=d.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,f,g){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,v=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,M=T*4;let b=v.clippingState||null;l.value=b,b=u(x,f,M,g);for(let E=0;E!==M;++E)b[E]=t[E];v.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,g,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const v=g+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<v)&&(m=new Float32Array(v));for(let M=0,b=g;M!==_;++M,b+=4)a.copy(d[M]).applyMatrix4(T,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function WebGLCubeMaps(n){let e=new WeakMap;function t(a,o){return o===EquirectangularReflectionMapping?a.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(a.mapping=CubeRefractionMapping),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WebGLCubeRenderTarget(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},r=_createRenderTarget(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t)}return r}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,i,r){const o=new PerspectiveCamera(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const g=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),x=new Mesh(new BoxGeometry,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(_clearColor),_=!0);for(let v=0;v<6;v++){const T=v%3;T===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):T===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const M=this._cubeSize;_setViewport(r,T*M,v>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mesh(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_setViewport(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,_flatCamera)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_axisDirections[(r-1)%_axisDirections.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Mesh(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*MAX_SAMPLES-1),_=s/x,m=isFinite(s)?1+Math.floor(u*_):MAX_SAMPLES;m>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`);const v=[];let T=0;for(let B=0;B<MAX_SAMPLES;++B){const A=B/_,O=Math.exp(-A*A/2);v.push(O),B===0?T+=O:B<m&&(T+=2*O)}for(let B=0;B<v.length;B++)v[B]=v[B]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-i;const b=this._sizeLods[r],E=3*b*(r>M-LOD_MIN?r-M+LOD_MIN:0),N=4*(this._cubeSize-b);_setViewport(t,E,N,3*b,2*b),l.setRenderTarget(t),l.render(d,_flatCamera)}}function _createPlanes(n){const e=[],t=[],i=[];let r=n;const s=n-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-LOD_MIN?l=EXTRA_LOD_SIGMA[a-n+LOD_MIN-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,x=6,_=3,m=2,v=1,T=new Float32Array(_*x*g),M=new Float32Array(m*x*g),b=new Float32Array(v*x*g);for(let N=0;N<g;N++){const B=N%3*2/3-1,A=N>2?0:-1,O=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];T.set(O,_*x*N),M.set(f,m*x*N);const U=[N,N,N,N,N,N];b.set(U,v*x*N)}const E=new BufferGeometry;E.setAttribute("position",new BufferAttribute(T,_)),E.setAttribute("uv",new BufferAttribute(M,m)),E.setAttribute("faceIndex",new BufferAttribute(b,v)),e.push(E),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _createRenderTarget(n,e,t){const i=new WebGLRenderTarget(n,e,t);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _getBlurShader(n,e,t){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping,u=l===CubeReflectionMapping||l===CubeRefractionMapping;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new PMREMGenerator(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new PMREMGenerator(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function WebGLExtensions(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const _=g[x];for(let m=0,v=_.length;m<v;m++)e.update(_[m],34962)}}function c(d){const f=[],g=d.index,x=d.attributes.position;let _=0;if(g!==null){const T=g.array;_=g.version;for(let M=0,b=T.length;M<b;M+=3){const E=T[M+0],N=T[M+1],B=T[M+2];f.push(E,N,N,B,B,E)}}else{const T=x.array;_=x.version;for(let M=0,b=T.length/3-1;M<b;M+=3){const E=M+0,N=M+1,B=M+2;f.push(E,N,N,B,B,E)}}const m=new(arrayNeedsUint32(f)?Uint32BufferAttribute:Uint16BufferAttribute)(f,1);m.version=_;const v=s.get(d);v&&e.remove(v),s.set(d,m)}function u(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(s,g,o,f*l),t.update(g,s,1)}function d(f,g,x){if(x===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,g,o,f*l,x),t.update(g,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function WebGLInfo(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function numericalSort(n,e){return n[0]-e[0]}function absNumericalSort(n,e){return Math.abs(e[1])-Math.abs(n[1])}function WebGLMorphtargets(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Vector4,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,f){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let v=s.get(u);if(v===void 0||v.count!==m){let ce=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",ce)};var x=ce;v!==void 0&&v.texture.dispose();const b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,N=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let U=0;b===!0&&(U=1),E===!0&&(U=2),N===!0&&(U=3);let q=u.attributes.position.count*U,ne=1;q>e.maxTextureSize&&(ne=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const G=new Float32Array(q*ne*4*m),H=new DataArrayTexture(G,q,ne,m);H.type=FloatType,H.needsUpdate=!0;const oe=U*4;for(let re=0;re<m;re++){const Q=B[re],pe=A[re],me=O[re],ee=q*ne*4*re;for(let te=0;te<Q.count;te++){const _e=te*oe;b===!0&&(a.fromBufferAttribute(Q,te),G[ee+_e+0]=a.x,G[ee+_e+1]=a.y,G[ee+_e+2]=a.z,G[ee+_e+3]=0),E===!0&&(a.fromBufferAttribute(pe,te),G[ee+_e+4]=a.x,G[ee+_e+5]=a.y,G[ee+_e+6]=a.z,G[ee+_e+7]=0),N===!0&&(a.fromBufferAttribute(me,te),G[ee+_e+8]=a.x,G[ee+_e+9]=a.y,G[ee+_e+10]=a.z,G[ee+_e+11]=me.itemSize===4?a.w:1)}}v={count:m,texture:H,size:new Vector2(q,ne)},s.set(u,v),u.addEventListener("dispose",ce)}let T=0;for(let b=0;b<g.length;b++)T+=g[b];const M=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",g),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const _=g===void 0?0:g.length;let m=i[u.id];if(m===void 0||m.length!==_){m=[];for(let E=0;E<_;E++)m[E]=[E,0];i[u.id]=m}for(let E=0;E<_;E++){const N=m[E];N[0]=E,N[1]=g[E]}m.sort(absNumericalSort);for(let E=0;E<8;E++)E<_&&m[E][1]?(o[E][0]=m[E][0],o[E][1]=m[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(numericalSort);const v=u.morphAttributes.position,T=u.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const N=o[E],B=N[0],A=N[1];B!==Number.MAX_SAFE_INTEGER&&A?(v&&u.getAttribute("morphTarget"+E)!==v[B]&&u.setAttribute("morphTarget"+E,v[B]),T&&u.getAttribute("morphNormal"+E)!==T[B]&&u.setAttribute("morphNormal"+E,T[B]),r[E]=A,M+=A):(v&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),T&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const b=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function WebGLObjects(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function arraysEqual(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function copyArray(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function allocTexUnits(n,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function setValueV1f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;n.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat2array.set(i),n.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,i)}}function setValueM3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat3array.set(i),n.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,i)}}function setValueM4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat4array.set(i),n.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,i)}}function setValueV1i(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||emptyTexture,r)}function setValueT3D1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(n){switch(n){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(n,e){n.uniform1fv(this.addr,e)}function setValueV2fArray(n,e){const t=flatten(e,this.size,2);n.uniform2fv(this.addr,t)}function setValueV3fArray(n,e){const t=flatten(e,this.size,3);n.uniform3fv(this.addr,t)}function setValueV4fArray(n,e){const t=flatten(e,this.size,4);n.uniform4fv(this.addr,t)}function setValueM2Array(n,e){const t=flatten(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(n,e){const t=flatten(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(n,e){const t=flatten(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(n,e){n.uniform1iv(this.addr,e)}function setValueV2iArray(n,e){n.uniform2iv(this.addr,e)}function setValueV3iArray(n,e){n.uniform3iv(this.addr,e)}function setValueV4iArray(n,e){n.uniform4iv(this.addr,e)}function setValueV1uiArray(n,e){n.uniform1uiv(this.addr,e)}function setValueV2uiArray(n,e){n.uniform2uiv(this.addr,e)}function setValueV3uiArray(n,e){n.uniform3uiv(this.addr,e)}function setValueV4uiArray(n,e){n.uniform4uiv(this.addr,e)}function setValueT1Array(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||emptyTexture,s[a])}function setValueT3DArray(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||empty3dTexture,s[a])}function setValueT6Array(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||emptyCubeTexture,s[a])}function setValueT2DArrayArray(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,s[a])}function getPureArraySetter(n){switch(n){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(n,e){n.seq.push(e),n.map[e.id]=e}function parseUniform(n,e,t){const i=n.name,r=i.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(i),a=RePathPart.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){addUniform(t,c===void 0?new SingleUniform(o,n,e):new PureArrayUniform(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new StructuredUniform(o),addUniform(t,d)),t=d}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);parseUniform(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function WebGLShader(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let programIdCount=0;function handleSource(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function getEncodingComponents(n){switch(n){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function getShaderErrors(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+handleSource(n.getShaderSource(e),a)}else return r}function getTexelEncodingFunction(n,e){const t=getEncodingComponents(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function getToneMappingFunction(n,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fetchAttributeLocations(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function filterEmptyLine(n){return n!==""}function replaceLightNums(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(n){return n.replace(includePattern,includeReplacer)}function includeReplacer(n,e){const t=ShaderChunk[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(n){return n.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WebGLProgram(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=generateShadowMapTypeDefine(t),c=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),d=generateEnvMapBlendingDefine(t),f=generateCubeUVSize(t),g=t.isWebGL2?"":generateExtensions(t),x=generateDefines(s),_=r.createProgram();let m,v,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[x].filter(filterEmptyLine).join(`
`),m.length>0&&(m+=`
`),v=[g,x].filter(filterEmptyLine).join(`
`),v.length>0&&(v+=`
`)):(m=[generatePrecision(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),v=[g,generatePrecision(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),a=unrollLoops(a),o=unrollLoops(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=T+m+a,b=T+v+o,E=WebGLShader(r,35633,M),N=WebGLShader(r,35632,b);if(r.attachShader(_,E),r.attachShader(_,N),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(E).trim(),q=r.getShaderInfoLog(N).trim();let ne=!0,G=!0;if(r.getProgramParameter(_,35714)===!1){ne=!1;const H=getShaderErrors(r,E,"vertex"),oe=getShaderErrors(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+O+`
`+H+`
`+oe)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||q==="")&&(G=!1);G&&(this.diagnostics={runnable:ne,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:q,prefix:v}})}r.deleteShader(E),r.deleteShader(N);let B;this.getUniforms=function(){return B===void 0&&(B=new WebGLUniforms(r,_)),B};let A;return this.getAttributes=function(){return A===void 0&&(A=fetchAttributeLocations(r,_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=N,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WebGLShaderStage(e),t.set(e,i)),i}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(n,e,t,i,r,s,a){const o=new Layers,l=new WebGLShaderCache,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A,O,U,q,ne){const G=q.fog,H=ne.geometry,oe=A.isMeshStandardMaterial?q.environment:null,ce=(A.isMeshStandardMaterial?t:e).get(A.envMap||oe),re=ce&&ce.mapping===CubeUVReflectionMapping?ce.image.height:null,Q=x[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=pe!==void 0?pe.length:0;let ee=0;H.morphAttributes.position!==void 0&&(ee=1),H.morphAttributes.normal!==void 0&&(ee=2),H.morphAttributes.color!==void 0&&(ee=3);let te,_e,Se,Te;if(Q){const ke=ShaderLib[Q];te=ke.vertexShader,_e=ke.fragmentShader}else te=A.vertexShader,_e=A.fragmentShader,l.update(A),Se=l.getVertexShaderID(A),Te=l.getFragmentShaderID(A);const ie=n.getRenderTarget(),Ae=A.alphaTest>0,Ee=A.clearcoat>0,we=A.iridescence>0;return{isWebGL2:u,shaderID:Q,shaderName:A.type,vertexShader:te,fragmentShader:_e,defines:A.defines,customVertexShaderID:Se,customFragmentShaderID:Te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ie===null?n.outputEncoding:ie.isXRRenderTarget===!0?ie.texture.encoding:LinearEncoding,map:!!A.map,matcap:!!A.matcap,envMap:!!ce,envMapMode:ce&&ce.mapping,envMapCubeUVHeight:re,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:A.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===sRGBEncoding,clearcoat:Ee,clearcoatMap:Ee&&!!A.clearcoatMap,clearcoatRoughnessMap:Ee&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!A.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!A.iridescenceMap,iridescenceThicknessMap:we&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===NormalBlending,alphaMap:!!A.alphaMap,alphaTest:Ae,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!H.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(A.map||A.bumpMap||A.normalMap||A.specularMap||A.alphaMap||A.emissiveMap||A.roughnessMap||A.metalnessMap||A.clearcoatNormalMap||A.iridescenceMap||A.iridescenceThicknessMap||A.transmission>0||A.transmissionMap||A.thicknessMap||A.specularIntensityMap||A.specularColorMap||A.sheen>0||A.sheenColorMap||A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!G,useFog:A.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ne.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ee,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:A.toneMapped?n.toneMapping:NoToneMapping,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===DoubleSide,flipSided:A.side===BackSide,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function m(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)O.push(U),O.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(v(O,A),T(O,A),O.push(n.outputEncoding)),O.push(A.customProgramCacheKey),O.join()}function v(A,O){A.push(O.precision),A.push(O.outputEncoding),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.combine),A.push(O.vertexUvs),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function T(A,O){o.disableAll(),O.isWebGL2&&o.enable(0),O.supportsVertexTextures&&o.enable(1),O.instancing&&o.enable(2),O.instancingColor&&o.enable(3),O.map&&o.enable(4),O.matcap&&o.enable(5),O.envMap&&o.enable(6),O.lightMap&&o.enable(7),O.aoMap&&o.enable(8),O.emissiveMap&&o.enable(9),O.bumpMap&&o.enable(10),O.normalMap&&o.enable(11),O.objectSpaceNormalMap&&o.enable(12),O.tangentSpaceNormalMap&&o.enable(13),O.clearcoat&&o.enable(14),O.clearcoatMap&&o.enable(15),O.clearcoatRoughnessMap&&o.enable(16),O.clearcoatNormalMap&&o.enable(17),O.iridescence&&o.enable(18),O.iridescenceMap&&o.enable(19),O.iridescenceThicknessMap&&o.enable(20),O.displacementMap&&o.enable(21),O.specularMap&&o.enable(22),O.roughnessMap&&o.enable(23),O.metalnessMap&&o.enable(24),O.gradientMap&&o.enable(25),O.alphaMap&&o.enable(26),O.alphaTest&&o.enable(27),O.vertexColors&&o.enable(28),O.vertexAlphas&&o.enable(29),O.vertexUvs&&o.enable(30),O.vertexTangents&&o.enable(31),O.uvsVertexOnly&&o.enable(32),A.push(o.mask),o.disableAll(),O.fog&&o.enable(0),O.useFog&&o.enable(1),O.flatShading&&o.enable(2),O.logarithmicDepthBuffer&&o.enable(3),O.skinning&&o.enable(4),O.morphTargets&&o.enable(5),O.morphNormals&&o.enable(6),O.morphColors&&o.enable(7),O.premultipliedAlpha&&o.enable(8),O.shadowMapEnabled&&o.enable(9),O.physicallyCorrectLights&&o.enable(10),O.doubleSided&&o.enable(11),O.flipSided&&o.enable(12),O.useDepthPacking&&o.enable(13),O.dithering&&o.enable(14),O.specularIntensityMap&&o.enable(15),O.specularColorMap&&o.enable(16),O.transmission&&o.enable(17),O.transmissionMap&&o.enable(18),O.thicknessMap&&o.enable(19),O.sheen&&o.enable(20),O.sheenColorMap&&o.enable(21),O.sheenRoughnessMap&&o.enable(22),O.decodeVideoTexture&&o.enable(23),O.opaque&&o.enable(24),A.push(o.mask)}function M(A){const O=x[A.type];let U;if(O){const q=ShaderLib[O];U=UniformsUtils.clone(q.uniforms)}else U=A.uniforms;return U}function b(A,O){let U;for(let q=0,ne=c.length;q<ne;q++){const G=c[q];if(G.cacheKey===O){U=G,++U.usedTimes;break}}return U===void 0&&(U=new WebGLProgram(n,O,A,s),c.push(U)),U}function E(A){if(--A.usedTimes===0){const O=c.indexOf(A);c[O]=c[c.length-1],c.pop(),A.destroy()}}function N(A){l.remove(A)}function B(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:N,programs:c,dispose:B}}function WebGLProperties(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function painterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function reversePainterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function WebGLRenderList(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,g,x,_,m){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=_,v.group=m),e++,v}function o(d,f,g,x,_,m){const v=a(d,f,g,x,_,m);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function l(d,f,g,x,_,m){const v=a(d,f,g,x,_,m);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function c(d,f){t.length>1&&t.sort(d||painterSortStable),i.length>1&&i.sort(f||reversePainterSortStable),r.length>1&&r.sort(f||reversePainterSortStable)}function u(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function WebGLRenderLists(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new WebGLRenderList,n.set(i,[a])):r>=s.length?(a=new WebGLRenderList,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return n[e.id]=t,t}}}function ShadowUniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WebGLLights(n,e){const t=new UniformsCache,i=ShadowUniformsCache(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Vector3);const s=new Vector3,a=new Matrix4,o=new Matrix4;function l(u,d){let f=0,g=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,m=0,v=0,T=0,M=0,b=0,E=0,N=0,B=0,A=0;u.sort(shadowCastingAndTexturingLightsFirst);const O=d!==!0?Math.PI:1;for(let q=0,ne=u.length;q<ne;q++){const G=u[q],H=G.color,oe=G.intensity,ce=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=H.r*oe*O,g+=H.g*oe*O,x+=H.b*oe*O;else if(G.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(G.sh.coefficients[Q],oe);else if(G.isDirectionalLight){const Q=t.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity*O),G.castShadow){const pe=G.shadow,me=i.get(G);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,r.directionalShadow[_]=me,r.directionalShadowMap[_]=re,r.directionalShadowMatrix[_]=G.shadow.matrix,b++}r.directional[_]=Q,_++}else if(G.isSpotLight){const Q=t.get(G);Q.position.setFromMatrixPosition(G.matrixWorld),Q.color.copy(H).multiplyScalar(oe*O),Q.distance=ce,Q.coneCos=Math.cos(G.angle),Q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Q.decay=G.decay,r.spot[v]=Q;const pe=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,pe.updateMatrices(G),G.castShadow&&A++),r.spotLightMatrix[v]=pe.matrix,G.castShadow){const me=i.get(G);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,r.spotShadow[v]=me,r.spotShadowMap[v]=re,N++}v++}else if(G.isRectAreaLight){const Q=t.get(G);Q.color.copy(H).multiplyScalar(oe),Q.halfWidth.set(G.width*.5,0,0),Q.halfHeight.set(0,G.height*.5,0),r.rectArea[T]=Q,T++}else if(G.isPointLight){const Q=t.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity*O),Q.distance=G.distance,Q.decay=G.decay,G.castShadow){const pe=G.shadow,me=i.get(G);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,me.shadowCameraNear=pe.camera.near,me.shadowCameraFar=pe.camera.far,r.pointShadow[m]=me,r.pointShadowMap[m]=re,r.pointShadowMatrix[m]=G.shadow.matrix,E++}r.point[m]=Q,m++}else if(G.isHemisphereLight){const Q=t.get(G);Q.skyColor.copy(G.color).multiplyScalar(oe*O),Q.groundColor.copy(G.groundColor).multiplyScalar(oe*O),r.hemi[M]=Q,M++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,r.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_HALF_1,r.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const U=r.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==v||U.rectAreaLength!==T||U.hemiLength!==M||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==N||U.numSpotMaps!==B)&&(r.directional.length=_,r.spot.length=v,r.rectArea.length=T,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=N+B-A,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=A,U.directionalLength=_,U.pointLength=m,U.spotLength=v,U.rectAreaLength=T,U.hemiLength=M,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=N,U.numSpotMaps=B,r.version=nextVersion++)}function c(u,d){let f=0,g=0,x=0,_=0,m=0;const v=d.matrixWorldInverse;for(let T=0,M=u.length;T<M;T++){const b=u[T];if(b.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),f++}else if(b.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),x++}else if(b.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),o.identity(),a.copy(b.matrixWorld),a.premultiply(v),o.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=r.point[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),g++}else if(b.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(v),m++}}}return{setup:l,setupView:c,state:r}}function WebGLRenderState(n,e){const t=new WebGLLights(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function WebGLRenderStates(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new WebGLRenderState(n,e),t.set(s,[l])):a>=o.length?(l=new WebGLRenderState(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(n,e,t){let i=new Frustum;const r=new Vector2,s=new Vector2,a=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),l=new MeshDistanceMaterial,c={},u=t.maxTextureSize,d={0:BackSide,1:FrontSide,2:DoubleSide},f=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new BufferGeometry;x.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mesh(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(b,E,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const B=n.getRenderTarget(),A=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),U=n.state;U.setBlending(NoBlending),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let q=0,ne=b.length;q<ne;q++){const G=b[q],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null){const re=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};H.map=new WebGLRenderTarget(r.x,r.y,re),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ce=H.getViewportCount();for(let re=0;re<ce;re++){const Q=H.getViewport(re);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),U.viewport(a),H.updateMatrices(G,re),i=H.getFrustum(),M(E,N,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===VSMShadowMap&&v(H,N),H.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(B,A,O)};function v(b,E){const N=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new WebGLRenderTarget(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,N,f,_,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,N,g,_,null)}function T(b,E,N,B,A,O){let U=null;const q=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0?U=q:U=N.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const ne=U.uuid,G=E.uuid;let H=c[ne];H===void 0&&(H={},c[ne]=H);let oe=H[G];oe===void 0&&(oe=U.clone(),H[G]=oe),U=oe}return U.visible=E.visible,U.wireframe=E.wireframe,O===VSMShadowMap?U.side=E.shadowSide!==null?E.shadowSide:E.side:U.side=E.shadowSide!==null?E.shadowSide:d[E.side],U.alphaMap=E.alphaMap,U.alphaTest=E.alphaTest,U.map=E.map,U.clipShadows=E.clipShadows,U.clippingPlanes=E.clippingPlanes,U.clipIntersection=E.clipIntersection,U.displacementMap=E.displacementMap,U.displacementScale=E.displacementScale,U.displacementBias=E.displacementBias,U.wireframeLinewidth=E.wireframeLinewidth,U.linewidth=E.linewidth,N.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(N.matrixWorld),U.nearDistance=B,U.farDistance=A),U}function M(b,E,N,B,A){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===VSMShadowMap)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const q=e.update(b),ne=b.material;if(Array.isArray(ne)){const G=q.groups;for(let H=0,oe=G.length;H<oe;H++){const ce=G[H],re=ne[ce.materialIndex];if(re&&re.visible){const Q=T(b,re,B,N.near,N.far,A);n.renderBufferDirect(N,null,q,Q,b,ce)}}}else if(ne.visible){const G=T(b,ne,B,N.near,N.far,A);n.renderBufferDirect(N,null,q,G,b,null)}}const U=b.children;for(let q=0,ne=U.length;q<ne;q++)M(U[q],E,N,B,A)}}function WebGLState(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const ue=new Vector4;let Me=null;const Ce=new Vector4(0,0,0,0);return{setMask:function(Ie){Me!==Ie&&!z&&(n.colorMask(Ie,Ie,Ie,Ie),Me=Ie)},setLocked:function(Ie){z=Ie},setClear:function(Ie,Xe,tt,nt,gt){gt===!0&&(Ie*=nt,Xe*=nt,tt*=nt),ue.set(Ie,Xe,tt,nt),Ce.equals(ue)===!1&&(n.clearColor(Ie,Xe,tt,nt),Ce.copy(ue))},reset:function(){z=!1,Me=null,Ce.set(-1,0,0,0)}}}function s(){let z=!1,ue=null,Me=null,Ce=null;return{setTest:function(Ie){Ie?Ae(2929):Ee(2929)},setMask:function(Ie){ue!==Ie&&!z&&(n.depthMask(Ie),ue=Ie)},setFunc:function(Ie){if(Me!==Ie){switch(Ie){case NeverDepth:n.depthFunc(512);break;case AlwaysDepth:n.depthFunc(519);break;case LessDepth:n.depthFunc(513);break;case LessEqualDepth:n.depthFunc(515);break;case EqualDepth:n.depthFunc(514);break;case GreaterEqualDepth:n.depthFunc(518);break;case GreaterDepth:n.depthFunc(516);break;case NotEqualDepth:n.depthFunc(517);break;default:n.depthFunc(515)}Me=Ie}},setLocked:function(Ie){z=Ie},setClear:function(Ie){Ce!==Ie&&(n.clearDepth(Ie),Ce=Ie)},reset:function(){z=!1,ue=null,Me=null,Ce=null}}}function a(){let z=!1,ue=null,Me=null,Ce=null,Ie=null,Xe=null,tt=null,nt=null,gt=null;return{setTest:function(Ke){z||(Ke?Ae(2960):Ee(2960))},setMask:function(Ke){ue!==Ke&&!z&&(n.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,dt,ut){(Me!==Ke||Ce!==dt||Ie!==ut)&&(n.stencilFunc(Ke,dt,ut),Me=Ke,Ce=dt,Ie=ut)},setOp:function(Ke,dt,ut){(Xe!==Ke||tt!==dt||nt!==ut)&&(n.stencilOp(Ke,dt,ut),Xe=Ke,tt=dt,nt=ut)},setLocked:function(Ke){z=Ke},setClear:function(Ke){gt!==Ke&&(n.clearStencil(Ke),gt=Ke)},reset:function(){z=!1,ue=null,Me=null,Ce=null,Ie=null,Xe=null,tt=null,nt=null,gt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,_=[],m=null,v=!1,T=null,M=null,b=null,E=null,N=null,B=null,A=null,O=!1,U=null,q=null,ne=null,G=null,H=null;const oe=n.getParameter(35661);let ce=!1,re=0;const Q=n.getParameter(7938);Q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ce=re>=1):Q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ce=re>=2);let pe=null,me={};const ee=n.getParameter(3088),te=n.getParameter(2978),_e=new Vector4().fromArray(ee),Se=new Vector4().fromArray(te);function Te(z,ue,Me){const Ce=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(z,Ie),n.texParameteri(z,10241,9728),n.texParameteri(z,10240,9728);for(let Xe=0;Xe<Me;Xe++)n.texImage2D(ue+Xe,0,6408,1,1,0,6408,5121,Ce);return Ie}const ie={};ie[3553]=Te(3553,3553,1),ie[34067]=Te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(LessEqualDepth),F(!1),$(CullFaceBack),Ae(2884),C(NoBlending);function Ae(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Ee(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function we(z,ue){return g[z]!==ue?(n.bindFramebuffer(z,ue),g[z]=ue,i&&(z===36009&&(g[36160]=ue),z===36160&&(g[36009]=ue)),!0):!1}function xe(z,ue){let Me=_,Ce=!1;if(z)if(Me=x.get(ue),Me===void 0&&(Me=[],x.set(ue,Me)),z.isWebGLMultipleRenderTargets){const Ie=z.texture;if(Me.length!==Ie.length||Me[0]!==36064){for(let Xe=0,tt=Ie.length;Xe<tt;Xe++)Me[Xe]=36064+Xe;Me.length=Ie.length,Ce=!0}}else Me[0]!==36064&&(Me[0]=36064,Ce=!0);else Me[0]!==1029&&(Me[0]=1029,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function ke(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const P={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(i)P[MinEquation]=32775,P[MaxEquation]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(P[MinEquation]=z.MIN_EXT,P[MaxEquation]=z.MAX_EXT)}const y={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function C(z,ue,Me,Ce,Ie,Xe,tt,nt){if(z===NoBlending){v===!0&&(Ee(3042),v=!1);return}if(v===!1&&(Ae(3042),v=!0),z!==CustomBlending){if(z!==T||nt!==O){if((M!==AddEquation||N!==AddEquation)&&(n.blendEquation(32774),M=AddEquation,N=AddEquation),nt)switch(z){case NormalBlending:n.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:n.blendFunc(1,1);break;case SubtractiveBlending:n.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case NormalBlending:n.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:n.blendFunc(770,1);break;case SubtractiveBlending:n.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,E=null,B=null,A=null,T=z,O=nt}return}Ie=Ie||ue,Xe=Xe||Me,tt=tt||Ce,(ue!==M||Ie!==N)&&(n.blendEquationSeparate(P[ue],P[Ie]),M=ue,N=Ie),(Me!==b||Ce!==E||Xe!==B||tt!==A)&&(n.blendFuncSeparate(y[Me],y[Ce],y[Xe],y[tt]),b=Me,E=Ce,B=Xe,A=tt),T=z,O=!1}function I(z,ue){z.side===DoubleSide?Ee(2884):Ae(2884);let Me=z.side===BackSide;ue&&(Me=!Me),F(Me),z.blending===NormalBlending&&z.transparent===!1?C(NoBlending):C(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);const Ce=z.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Z(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ae(32926):Ee(32926)}function F(z){U!==z&&(z?n.frontFace(2304):n.frontFace(2305),U=z)}function $(z){z!==CullFaceNone?(Ae(2884),z!==q&&(z===CullFaceBack?n.cullFace(1029):z===CullFaceFront?n.cullFace(1028):n.cullFace(1032))):Ee(2884),q=z}function X(z){z!==ne&&(ce&&n.lineWidth(z),ne=z)}function Z(z,ue,Me){z?(Ae(32823),(G!==ue||H!==Me)&&(n.polygonOffset(ue,Me),G=ue,H=Me)):Ee(32823)}function he(z){z?Ae(3089):Ee(3089)}function j(z){z===void 0&&(z=33984+oe-1),pe!==z&&(n.activeTexture(z),pe=z)}function w(z,ue,Me){Me===void 0&&(pe===null?Me=33984+oe-1:Me=pe);let Ce=me[Me];Ce===void 0&&(Ce={type:void 0,texture:void 0},me[Me]=Ce),(Ce.type!==z||Ce.texture!==ue)&&(pe!==Me&&(n.activeTexture(Me),pe=Me),n.bindTexture(z,ue||ie[z]),Ce.type=z,Ce.texture=ue)}function S(){const z=me[pe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(z){_e.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),_e.copy(z))}function Le(z){Se.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Se.copy(z))}function Ve(z,ue){let Me=d.get(ue);Me===void 0&&(Me=new WeakMap,d.set(ue,Me));let Ce=Me.get(z);Ce===void 0&&(Ce=n.getUniformBlockIndex(ue,z.name),Me.set(z,Ce))}function qe(z,ue){const Ce=d.get(ue).get(z);u.get(z)!==Ce&&(n.uniformBlockBinding(ue,Ce,z.__bindingPointIndex),u.set(z,Ce))}function et(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},pe=null,me={},g={},x=new WeakMap,_=[],m=null,v=!1,T=null,M=null,b=null,E=null,N=null,B=null,A=null,O=!1,U=null,q=null,ne=null,G=null,H=null,_e.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:Ee,bindFramebuffer:we,drawBuffers:xe,useProgram:ke,setBlending:C,setMaterial:I,setFlipSided:F,setCullFace:$,setLineWidth:X,setPolygonOffset:Z,setScissorTest:he,activeTexture:j,bindTexture:w,unbindTexture:S,compressedTexImage2D:V,compressedTexImage3D:Y,texImage2D:Ne,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:qe,texStorage2D:se,texStorage3D:De,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:be,compressedTexSubImage3D:ye,scissor:Fe,viewport:Le,reset:et}}function WebGLTextures(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,S){return v?new OffscreenCanvas(w,S):createElementNS("canvas")}function M(w,S,V,Y){let ae=1;if((w.width>Y||w.height>Y)&&(ae=Y/Math.max(w.width,w.height)),ae<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const fe=S?floorPowerOfTwo:Math.floor,be=fe(ae*w.width),ye=fe(ae*w.height);_===void 0&&(_=T(be,ye));const se=V?T(be,ye):_;return se.width=be,se.height=ye,se.getContext("2d").drawImage(w,0,0,be,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+be+"x"+ye+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return isPowerOfTwo(w.width)&&isPowerOfTwo(w.height)}function E(w){return o?!1:w.wrapS!==ClampToEdgeWrapping||w.wrapT!==ClampToEdgeWrapping||w.minFilter!==NearestFilter&&w.minFilter!==LinearFilter}function N(w,S){return w.generateMipmaps&&S&&w.minFilter!==NearestFilter&&w.minFilter!==LinearFilter}function B(w){n.generateMipmap(w)}function A(w,S,V,Y,ae=!1){if(o===!1)return S;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe=S;return S===6403&&(V===5126&&(fe=33326),V===5131&&(fe=33325),V===5121&&(fe=33321)),S===33319&&(V===5126&&(fe=33328),V===5131&&(fe=33327),V===5121&&(fe=33323)),S===6408&&(V===5126&&(fe=34836),V===5131&&(fe=34842),V===5121&&(fe=Y===sRGBEncoding&&ae===!1?35907:32856),V===32819&&(fe=32854),V===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function O(w,S,V){return N(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==NearestFilter&&w.minFilter!==LinearFilter?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function U(w){return w===NearestFilter||w===NearestMipmapNearestFilter||w===NearestMipmapLinearFilter?9728:9729}function q(w){const S=w.target;S.removeEventListener("dispose",q),G(S),S.isVideoTexture&&x.delete(S)}function ne(w){const S=w.target;S.removeEventListener("dispose",ne),oe(S)}function G(w){const S=i.get(w);if(S.__webglInit===void 0)return;const V=w.source,Y=m.get(V);if(Y){const ae=Y[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&H(w),Object.keys(Y).length===0&&m.delete(V)}i.remove(w)}function H(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const V=w.source,Y=m.get(V);delete Y[S.__cacheKey],a.memory.textures--}function oe(w){const S=w.texture,V=i.get(w),Y=i.get(S);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(V.__webglFramebuffer[ae]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ae=0;ae<V.__webglColorRenderbuffer.length;ae++)V.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ae]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ae=0,fe=S.length;ae<fe;ae++){const be=i.get(S[ae]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(S[ae])}i.remove(S),i.remove(w)}let ce=0;function re(){ce=0}function Q(){const w=ce;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),ce+=1,w}function pe(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function me(w,S){const V=i.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(V,w,S);return}}t.bindTexture(3553,V.__webglTexture,33984+S)}function ee(w,S){const V=i.get(w);if(w.version>0&&V.__version!==w.version){Ee(V,w,S);return}t.bindTexture(35866,V.__webglTexture,33984+S)}function te(w,S){const V=i.get(w);if(w.version>0&&V.__version!==w.version){Ee(V,w,S);return}t.bindTexture(32879,V.__webglTexture,33984+S)}function _e(w,S){const V=i.get(w);if(w.version>0&&V.__version!==w.version){we(V,w,S);return}t.bindTexture(34067,V.__webglTexture,33984+S)}const Se={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},Te={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function ie(w,S,V){if(V?(n.texParameteri(w,10242,Se[S.wrapS]),n.texParameteri(w,10243,Se[S.wrapT]),(w===32879||w===35866)&&n.texParameteri(w,32882,Se[S.wrapR]),n.texParameteri(w,10240,Te[S.magFilter]),n.texParameteri(w,10241,Te[S.minFilter])):(n.texParameteri(w,10242,33071),n.texParameteri(w,10243,33071),(w===32879||w===35866)&&n.texParameteri(w,32882,33071),(S.wrapS!==ClampToEdgeWrapping||S.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,10240,U(S.magFilter)),n.texParameteri(w,10241,U(S.minFilter)),S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(S.type===FloatType&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(w,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(w,S){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",q));const Y=S.source;let ae=m.get(Y);ae===void 0&&(ae={},m.set(Y,ae));const fe=pe(S);if(fe!==w.__cacheKey){ae[fe]===void 0&&(ae[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ae[fe].usedTimes++;const be=ae[w.__cacheKey];be!==void 0&&(ae[w.__cacheKey].usedTimes--,be.usedTimes===0&&H(S)),w.__cacheKey=fe,w.__webglTexture=ae[fe].texture}return V}function Ee(w,S,V){let Y=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=35866),S.isData3DTexture&&(Y=32879);const ae=Ae(w,S),fe=S.source;t.bindTexture(Y,w.__webglTexture,33984+V);const be=i.get(fe);if(fe.version!==be.__version||ae===!0){t.activeTexture(33984+V),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const ye=E(S)&&b(S.image)===!1;let se=M(S.image,ye,!1,u);se=j(S,se);const De=b(se)||o,Ne=s.convert(S.format,S.encoding);let Re=s.convert(S.type),Fe=A(S.internalFormat,Ne,Re,S.encoding,S.isVideoTexture);ie(Y,S,De);let Le;const Ve=S.mipmaps,qe=o&&S.isVideoTexture!==!0,et=be.__version===void 0||ae===!0,z=O(S,se,De);if(S.isDepthTexture)Fe=6402,o?S.type===FloatType?Fe=36012:S.type===UnsignedIntType?Fe=33190:S.type===UnsignedInt248Type?Fe=35056:Fe=33189:S.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===DepthFormat&&Fe===6402&&S.type!==UnsignedShortType&&S.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=UnsignedIntType,Re=s.convert(S.type)),S.format===DepthStencilFormat&&Fe===6402&&(Fe=34041,S.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=UnsignedInt248Type,Re=s.convert(S.type))),et&&(qe?t.texStorage2D(3553,1,Fe,se.width,se.height):t.texImage2D(3553,0,Fe,se.width,se.height,0,Ne,Re,null));else if(S.isDataTexture)if(Ve.length>0&&De){qe&&et&&t.texStorage2D(3553,z,Fe,Ve[0].width,Ve[0].height);for(let ue=0,Me=Ve.length;ue<Me;ue++)Le=Ve[ue],qe?t.texSubImage2D(3553,ue,0,0,Le.width,Le.height,Ne,Re,Le.data):t.texImage2D(3553,ue,Fe,Le.width,Le.height,0,Ne,Re,Le.data);S.generateMipmaps=!1}else qe?(et&&t.texStorage2D(3553,z,Fe,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,Ne,Re,se.data)):t.texImage2D(3553,0,Fe,se.width,se.height,0,Ne,Re,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&et&&t.texStorage3D(35866,z,Fe,Ve[0].width,Ve[0].height,se.depth);for(let ue=0,Me=Ve.length;ue<Me;ue++)Le=Ve[ue],S.format!==RGBAFormat?Ne!==null?qe?t.compressedTexSubImage3D(35866,ue,0,0,0,Le.width,Le.height,se.depth,Ne,Le.data,0,0):t.compressedTexImage3D(35866,ue,Fe,Le.width,Le.height,se.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(35866,ue,0,0,0,Le.width,Le.height,se.depth,Ne,Re,Le.data):t.texImage3D(35866,ue,Fe,Le.width,Le.height,se.depth,0,Ne,Re,Le.data)}else{qe&&et&&t.texStorage2D(3553,z,Fe,Ve[0].width,Ve[0].height);for(let ue=0,Me=Ve.length;ue<Me;ue++)Le=Ve[ue],S.format!==RGBAFormat?Ne!==null?qe?t.compressedTexSubImage2D(3553,ue,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(3553,ue,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(3553,ue,0,0,Le.width,Le.height,Ne,Re,Le.data):t.texImage2D(3553,ue,Fe,Le.width,Le.height,0,Ne,Re,Le.data)}else if(S.isDataArrayTexture)qe?(et&&t.texStorage3D(35866,z,Fe,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,Ne,Re,se.data)):t.texImage3D(35866,0,Fe,se.width,se.height,se.depth,0,Ne,Re,se.data);else if(S.isData3DTexture)qe?(et&&t.texStorage3D(32879,z,Fe,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,Ne,Re,se.data)):t.texImage3D(32879,0,Fe,se.width,se.height,se.depth,0,Ne,Re,se.data);else if(S.isFramebufferTexture){if(et)if(qe)t.texStorage2D(3553,z,Fe,se.width,se.height);else{let ue=se.width,Me=se.height;for(let Ce=0;Ce<z;Ce++)t.texImage2D(3553,Ce,Fe,ue,Me,0,Ne,Re,null),ue>>=1,Me>>=1}}else if(Ve.length>0&&De){qe&&et&&t.texStorage2D(3553,z,Fe,Ve[0].width,Ve[0].height);for(let ue=0,Me=Ve.length;ue<Me;ue++)Le=Ve[ue],qe?t.texSubImage2D(3553,ue,0,0,Ne,Re,Le):t.texImage2D(3553,ue,Fe,Ne,Re,Le);S.generateMipmaps=!1}else qe?(et&&t.texStorage2D(3553,z,Fe,se.width,se.height),t.texSubImage2D(3553,0,0,0,Ne,Re,se)):t.texImage2D(3553,0,Fe,Ne,Re,se);N(S,De)&&B(Y),be.__version=fe.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function we(w,S,V){if(S.image.length!==6)return;const Y=Ae(w,S),ae=S.source;t.bindTexture(34067,w.__webglTexture,33984+V);const fe=i.get(ae);if(ae.version!==fe.__version||Y===!0){t.activeTexture(33984+V),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,se=[];for(let ue=0;ue<6;ue++)!be&&!ye?se[ue]=M(S.image[ue],!1,!0,c):se[ue]=ye?S.image[ue].image:S.image[ue],se[ue]=j(S,se[ue]);const De=se[0],Ne=b(De)||o,Re=s.convert(S.format,S.encoding),Fe=s.convert(S.type),Le=A(S.internalFormat,Re,Fe,S.encoding),Ve=o&&S.isVideoTexture!==!0,qe=fe.__version===void 0||Y===!0;let et=O(S,De,Ne);ie(34067,S,Ne);let z;if(be){Ve&&qe&&t.texStorage2D(34067,et,Le,De.width,De.height);for(let ue=0;ue<6;ue++){z=se[ue].mipmaps;for(let Me=0;Me<z.length;Me++){const Ce=z[Me];S.format!==RGBAFormat?Re!==null?Ve?t.compressedTexSubImage2D(34069+ue,Me,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(34069+ue,Me,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+ue,Me,0,0,Ce.width,Ce.height,Re,Fe,Ce.data):t.texImage2D(34069+ue,Me,Le,Ce.width,Ce.height,0,Re,Fe,Ce.data)}}}else{z=S.mipmaps,Ve&&qe&&(z.length>0&&et++,t.texStorage2D(34067,et,Le,se[0].width,se[0].height));for(let ue=0;ue<6;ue++)if(ye){Ve?t.texSubImage2D(34069+ue,0,0,0,se[ue].width,se[ue].height,Re,Fe,se[ue].data):t.texImage2D(34069+ue,0,Le,se[ue].width,se[ue].height,0,Re,Fe,se[ue].data);for(let Me=0;Me<z.length;Me++){const Ie=z[Me].image[ue].image;Ve?t.texSubImage2D(34069+ue,Me+1,0,0,Ie.width,Ie.height,Re,Fe,Ie.data):t.texImage2D(34069+ue,Me+1,Le,Ie.width,Ie.height,0,Re,Fe,Ie.data)}}else{Ve?t.texSubImage2D(34069+ue,0,0,0,Re,Fe,se[ue]):t.texImage2D(34069+ue,0,Le,Re,Fe,se[ue]);for(let Me=0;Me<z.length;Me++){const Ce=z[Me];Ve?t.texSubImage2D(34069+ue,Me+1,0,0,Re,Fe,Ce.image[ue]):t.texImage2D(34069+ue,Me+1,Le,Re,Fe,Ce.image[ue])}}}N(S,Ne)&&B(34067),fe.__version=ae.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xe(w,S,V,Y,ae){const fe=s.convert(V.format,V.encoding),be=s.convert(V.type),ye=A(V.internalFormat,fe,be,V.encoding);i.get(S).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,ye,S.width,S.height,S.depth,0,fe,be,null):t.texImage2D(ae,0,ye,S.width,S.height,0,fe,be,null)),t.bindFramebuffer(36160,w),Z(S)?f.framebufferTexture2DMultisampleEXT(36160,Y,ae,i.get(V).__webglTexture,0,X(S)):(ae===3553||ae>=34069&&ae<=34074)&&n.framebufferTexture2D(36160,Y,ae,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(w,S,V){if(n.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let Y=33189;if(V||Z(S)){const ae=S.depthTexture;ae&&ae.isDepthTexture&&(ae.type===FloatType?Y=36012:ae.type===UnsignedIntType&&(Y=33190));const fe=X(S);Z(S)?f.renderbufferStorageMultisampleEXT(36161,fe,Y,S.width,S.height):n.renderbufferStorageMultisample(36161,fe,Y,S.width,S.height)}else n.renderbufferStorage(36161,Y,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const Y=X(S);V&&Z(S)===!1?n.renderbufferStorageMultisample(36161,Y,35056,S.width,S.height):Z(S)?f.renderbufferStorageMultisampleEXT(36161,Y,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,w)}else{const Y=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ae=0;ae<Y.length;ae++){const fe=Y[ae],be=s.convert(fe.format,fe.encoding),ye=s.convert(fe.type),se=A(fe.internalFormat,be,ye,fe.encoding),De=X(S);V&&Z(S)===!1?n.renderbufferStorageMultisample(36161,De,se,S.width,S.height):Z(S)?f.renderbufferStorageMultisampleEXT(36161,De,se,S.width,S.height):n.renderbufferStorage(36161,se,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function P(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),me(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,ae=X(S);if(S.depthTexture.format===DepthFormat)Z(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,ae):n.framebufferTexture2D(36160,36096,3553,Y,0);else if(S.depthTexture.format===DepthStencilFormat)Z(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,ae):n.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function y(w){const S=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,w)}else if(V){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=n.createRenderbuffer(),ke(S.__webglDepthbuffer[Y],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ke(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function C(w,S,V){const Y=i.get(w);S!==void 0&&xe(Y.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&y(w)}function I(w){const S=w.texture,V=i.get(w),Y=i.get(S);w.addEventListener("dispose",ne),w.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,a.memory.textures++);const ae=w.isWebGLCubeRenderTarget===!0,fe=w.isWebGLMultipleRenderTargets===!0,be=b(w)||o;if(ae){V.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)V.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),fe)if(r.drawBuffers){const ye=w.texture;for(let se=0,De=ye.length;se<De;se++){const Ne=i.get(ye[se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){const ye=fe?S:[S];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let se=0;se<ye.length;se++){const De=ye[se];V.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[se]);const Ne=s.convert(De.format,De.encoding),Re=s.convert(De.type),Fe=A(De.internalFormat,Ne,Re,De.encoding,w.isXRRenderTarget===!0),Le=X(w);n.renderbufferStorageMultisample(36161,Le,Fe,w.width,w.height),n.framebufferRenderbuffer(36160,36064+se,36161,V.__webglColorRenderbuffer[se])}n.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,Y.__webglTexture),ie(34067,S,be);for(let ye=0;ye<6;ye++)xe(V.__webglFramebuffer[ye],w,S,36064,34069+ye);N(S,be)&&B(34067),t.unbindTexture()}else if(fe){const ye=w.texture;for(let se=0,De=ye.length;se<De;se++){const Ne=ye[se],Re=i.get(Ne);t.bindTexture(3553,Re.__webglTexture),ie(3553,Ne,be),xe(V.__webglFramebuffer,w,Ne,36064+se,3553),N(Ne,be)&&B(3553)}t.unbindTexture()}else{let ye=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ye=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,Y.__webglTexture),ie(ye,S,be),xe(V.__webglFramebuffer,w,S,36064,ye),N(S,be)&&B(ye),t.unbindTexture()}w.depthBuffer&&y(w)}function F(w){const S=b(w)||o,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Y=0,ae=V.length;Y<ae;Y++){const fe=V[Y];if(N(fe,S)){const be=w.isWebGLCubeRenderTarget?34067:3553,ye=i.get(fe).__webglTexture;t.bindTexture(be,ye),B(be),t.unbindTexture()}}}function $(w){if(o&&w.samples>0&&Z(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,Y=w.height;let ae=16384;const fe=[],be=w.stencilBuffer?33306:36096,ye=i.get(w),se=w.isWebGLMultipleRenderTargets===!0;if(se)for(let De=0;De<S.length;De++)t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+De,36161,null),t.bindFramebuffer(36160,ye.__webglFramebuffer),n.framebufferTexture2D(36009,36064+De,3553,null,0);t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer);for(let De=0;De<S.length;De++){fe.push(36064+De),w.depthBuffer&&fe.push(be);const Ne=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ne===!1&&(w.depthBuffer&&(ae|=256),w.stencilBuffer&&(ae|=1024)),se&&n.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[De]),Ne===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),se){const Re=i.get(S[De]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Re,0)}n.blitFramebuffer(0,0,V,Y,0,0,V,Y,ae,9728),g&&n.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),se)for(let De=0;De<S.length;De++){t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+De,36161,ye.__webglColorRenderbuffer[De]);const Ne=i.get(S[De]).__webglTexture;t.bindFramebuffer(36160,ye.__webglFramebuffer),n.framebufferTexture2D(36009,36064+De,3553,Ne,0)}t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function X(w){return Math.min(d,w.samples)}function Z(w){const S=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(w){const S=a.render.frame;x.get(w)!==S&&(x.set(w,S),w.update())}function j(w,S){const V=w.encoding,Y=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===_SRGBAFormat||V!==LinearEncoding&&(V===sRGBEncoding?o===!1?e.has("EXT_sRGB")===!0&&Y===RGBAFormat?(w.format=_SRGBAFormat,w.minFilter=LinearFilter,w.generateMipmaps=!1):S=ImageUtils.sRGBToLinear(S):(Y!==RGBAFormat||ae!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=Q,this.resetTextureUnits=re,this.setTexture2D=me,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=_e,this.rebindTextures=C,this.setupRenderTarget=I,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Z}function WebGLUtils(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===UnsignedByteType)return 5121;if(s===UnsignedShort4444Type)return 32819;if(s===UnsignedShort5551Type)return 32820;if(s===ByteType)return 5120;if(s===ShortType)return 5122;if(s===UnsignedShortType)return 5123;if(s===IntType)return 5124;if(s===UnsignedIntType)return 5125;if(s===FloatType)return 5126;if(s===HalfFloatType)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===AlphaFormat)return 6406;if(s===RGBAFormat)return 6408;if(s===LuminanceFormat)return 6409;if(s===LuminanceAlphaFormat)return 6410;if(s===DepthFormat)return 6402;if(s===DepthStencilFormat)return 34041;if(s===RGBFormat)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===_SRGBAFormat)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===RedFormat)return 6403;if(s===RedIntegerFormat)return 36244;if(s===RGFormat)return 33319;if(s===RGIntegerFormat)return 33320;if(s===RGBAIntegerFormat)return 36249;if(s===RGB_S3TC_DXT1_Format||s===RGBA_S3TC_DXT1_Format||s===RGBA_S3TC_DXT3_Format||s===RGBA_S3TC_DXT5_Format)if(a===sRGBEncoding)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===RGB_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===RGB_S3TC_DXT1_Format)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===RGB_PVRTC_4BPPV1_Format||s===RGB_PVRTC_2BPPV1_Format||s===RGBA_PVRTC_4BPPV1_Format||s===RGBA_PVRTC_2BPPV1_Format)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===RGB_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===RGB_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===RGBA_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===RGBA_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===RGB_ETC1_Format)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===RGB_ETC2_Format||s===RGBA_ETC2_EAC_Format)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===RGB_ETC2_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===RGBA_ETC2_EAC_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===RGBA_ASTC_4x4_Format||s===RGBA_ASTC_5x4_Format||s===RGBA_ASTC_5x5_Format||s===RGBA_ASTC_6x5_Format||s===RGBA_ASTC_6x6_Format||s===RGBA_ASTC_8x5_Format||s===RGBA_ASTC_8x6_Format||s===RGBA_ASTC_8x8_Format||s===RGBA_ASTC_10x5_Format||s===RGBA_ASTC_10x6_Format||s===RGBA_ASTC_10x8_Format||s===RGBA_ASTC_10x10_Format||s===RGBA_ASTC_12x10_Format||s===RGBA_ASTC_12x12_Format)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===RGBA_ASTC_4x4_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===RGBA_ASTC_5x4_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===RGBA_ASTC_5x5_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===RGBA_ASTC_6x5_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===RGBA_ASTC_6x6_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===RGBA_ASTC_8x5_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===RGBA_ASTC_8x6_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===RGBA_ASTC_8x8_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===RGBA_ASTC_10x5_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===RGBA_ASTC_10x6_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===RGBA_ASTC_10x8_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===RGBA_ASTC_10x10_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===RGBA_ASTC_12x10_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===RGBA_ASTC_12x12_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===RGBA_BPTC_Format)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===RGBA_BPTC_Format)return a===sRGBEncoding?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===UnsignedInt248Type?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Group$1=class extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}};const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group$1,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group$1,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group$1,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),v=this._getHandJoint(c,_);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Group$1;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class DepthTexture extends Texture{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:DepthFormat,u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===DepthFormat&&(i=UnsignedIntType),i===void 0&&u===DepthStencilFormat&&(i=UnsignedInt248Type),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=l!==void 0?l:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,d=null,f=null,g=null;const x=t.getContextAttributes();let _=null,m=null;const v=[],T=[],M=new Set,b=new Map,E=new PerspectiveCamera;E.layers.enable(1),E.viewport=new Vector4;const N=new PerspectiveCamera;N.layers.enable(2),N.viewport=new Vector4;const B=[E,N],A=new ArrayCamera;A.layers.enable(1),A.layers.enable(2);let O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=v[ee];return te===void 0&&(te=new WebXRController,v[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=v[ee];return te===void 0&&(te=new WebXRController,v[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=v[ee];return te===void 0&&(te=new WebXRController,v[ee]=te),te.getHandSpace()};function q(ee){const te=T.indexOf(ee.inputSource);if(te===-1)return;const _e=v[te];_e!==void 0&&_e.dispatchEvent({type:ee.type,data:ee.inputSource})}function ne(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",G);for(let ee=0;ee<v.length;ee++){const te=T[ee];te!==null&&(T[ee]=null,v[ee].disconnect(te))}O=null,U=null,e.setRenderTarget(_),f=null,d=null,u=null,r=null,m=null,me.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:f}),m=new WebGLRenderTarget(f.framebufferWidth,f.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let te=null,_e=null,Se=null;x.depth&&(Se=x.stencil?35056:33190,te=x.stencil?DepthStencilFormat:DepthFormat,_e=x.stencil?UnsignedInt248Type:UnsignedIntType);const Te={colorFormat:32856,depthFormat:Se,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),m=new WebGLRenderTarget(d.textureWidth,d.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const ie=e.properties.get(m);ie.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G(ee){for(let te=0;te<ee.removed.length;te++){const _e=ee.removed[te],Se=T.indexOf(_e);Se>=0&&(T[Se]=null,v[Se].disconnect(_e))}for(let te=0;te<ee.added.length;te++){const _e=ee.added[te];let Se=T.indexOf(_e);if(Se===-1){for(let ie=0;ie<v.length;ie++)if(ie>=T.length){T.push(_e),Se=ie;break}else if(T[ie]===null){T[ie]=_e,Se=ie;break}if(Se===-1)break}const Te=v[Se];Te&&Te.connect(_e)}}const H=new Vector3,oe=new Vector3;function ce(ee,te,_e){H.setFromMatrixPosition(te.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);const Se=H.distanceTo(oe),Te=te.projectionMatrix.elements,ie=_e.projectionMatrix.elements,Ae=Te[14]/(Te[10]-1),Ee=Te[14]/(Te[10]+1),we=(Te[9]+1)/Te[5],xe=(Te[9]-1)/Te[5],ke=(Te[8]-1)/Te[0],P=(ie[8]+1)/ie[0],y=Ae*ke,C=Ae*P,I=Se/(-ke+P),F=I*-ke;te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(F),ee.translateZ(I),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const $=Ae+I,X=Ee+I,Z=y-F,he=C+(Se-F),j=we*Ee/X*$,w=xe*Ee/X*$;ee.projectionMatrix.makePerspective(Z,he,j,w,$,X)}function re(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;A.near=N.near=E.near=ee.near,A.far=N.far=E.far=ee.far,(O!==A.near||U!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,U=A.far);const te=ee.parent,_e=A.cameras;re(A,te);for(let Te=0;Te<_e.length;Te++)re(_e[Te],te);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),ee.matrix.copy(A.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);const Se=ee.children;for(let Te=0,ie=Se.length;Te<ie;Te++)Se[Te].updateMatrixWorld(!0);_e.length===2?ce(A,E,N):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(ee){d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.getPlanes=function(){return M};let Q=null;function pe(ee,te){if(c=te.getViewerPose(l||a),g=te,c!==null){const _e=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Se=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,Se=!0);for(let Te=0;Te<_e.length;Te++){const ie=_e[Te];let Ae=null;if(f!==null)Ae=f.getViewport(ie);else{const we=u.getViewSubImage(d,ie);Ae=we.viewport,Te===0&&(e.setRenderTargetTextures(m,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let Ee=B[Te];Ee===void 0&&(Ee=new PerspectiveCamera,Ee.layers.enable(Te),Ee.viewport=new Vector4,B[Te]=Ee),Ee.matrix.fromArray(ie.transform.matrix),Ee.projectionMatrix.fromArray(ie.projectionMatrix),Ee.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Te===0&&A.matrix.copy(Ee.matrix),Se===!0&&A.cameras.push(Ee)}}for(let _e=0;_e<v.length;_e++){const Se=T[_e],Te=v[_e];Se!==null&&Te!==void 0&&Te.update(Se,te,l||a)}if(Q&&Q(ee,te),te.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:te.detectedPlanes});let _e=null;for(const Se of M)te.detectedPlanes.has(Se)||(_e===null&&(_e=[]),_e.push(Se));if(_e!==null)for(const Se of _e)M.delete(Se),b.delete(Se),i.dispatchEvent({type:"planeremoved",data:Se});for(const Se of te.detectedPlanes)if(!M.has(Se))M.add(Se),b.set(Se,te.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Se});else{const Te=b.get(Se);Se.lastChangedTime>Te&&(b.set(Se,Se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Se}))}}g=null}const me=new WebGLAnimation;me.setAnimationLoop(pe),this.setAnimationLoop=function(ee){Q=ee},this.dispose=function(){}}}function WebGLMaterials(n,e){function t(_,m){m.color.getRGB(_.fogColor.value,getUnlitUniformColorSpace(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,v,T,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),c(_,m)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&f(_,m,M)):m.isMeshMatcapMaterial?(r(_,m),g(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),x(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(s(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?o(_,m,v,T):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.bumpMap&&(_.bumpMap.value=m.bumpMap,_.bumpScale.value=m.bumpScale,m.side===BackSide&&(_.bumpScale.value*=-1)),m.displacementMap&&(_.displacementMap.value=m.displacementMap,_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap),m.normalMap&&(_.normalMap.value=m.normalMap,_.normalScale.value.copy(m.normalScale),m.side===BackSide&&_.normalScale.value.negate()),m.specularMap&&(_.specularMap.value=m.specularMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(_.envMap.value=v,_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap?T=m.clearcoatRoughnessMap:m.iridescenceMap?T=m.iridescenceMap:m.iridescenceThicknessMap?T=m.iridescenceThicknessMap:m.specularIntensityMap?T=m.specularIntensityMap:m.specularColorMap?T=m.specularColorMap:m.transmissionMap?T=m.transmissionMap:m.thicknessMap?T=m.thicknessMap:m.sheenColorMap?T=m.sheenColorMap:m.sheenRoughnessMap&&(T=m.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),_.uvTransform.value.copy(T.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),_.uv2Transform.value.copy(M.matrix))}function s(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function o(_,m,v,T){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*v,_.scale.value=T*.5,m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),_.uvTransform.value.copy(M.matrix))}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),_.uvTransform.value.copy(v.matrix))}function c(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.roughness.value=m.roughness,_.metalness.value=m.metalness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function f(_,m,v){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),_.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===BackSide&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap)}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){_.referencePosition.value.copy(m.referencePosition),_.nearDistance.value=m.nearDistance,_.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function WebGLUniformsGroups(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(T,M){const b=M.program;i.uniformBlockBinding(T,b)}function c(T,M){let b=r[T.id];b===void 0&&(x(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",m));const E=M.program;i.updateUBOMapping(T,E);const N=e.render.frame;s[T.id]!==N&&(f(T),s[T.id]=N)}function u(T){const M=d();T.__bindingPointIndex=M;const b=n.createBuffer(),E=T.__size,N=T.usage;return n.bindBuffer(35345,b),n.bufferData(35345,E,N),n.bindBuffer(35345,null),n.bindBufferBase(35345,M,b),b}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=r[T.id],b=T.uniforms,E=T.__cache;n.bindBuffer(35345,M);for(let N=0,B=b.length;N<B;N++){const A=b[N];if(g(A,N,E)===!0){const O=A.value,U=A.__offset;typeof O=="number"?(A.__data[0]=O,n.bufferSubData(35345,U,A.__data)):(A.value.isMatrix3?(A.__data[0]=A.value.elements[0],A.__data[1]=A.value.elements[1],A.__data[2]=A.value.elements[2],A.__data[3]=A.value.elements[0],A.__data[4]=A.value.elements[3],A.__data[5]=A.value.elements[4],A.__data[6]=A.value.elements[5],A.__data[7]=A.value.elements[0],A.__data[8]=A.value.elements[6],A.__data[9]=A.value.elements[7],A.__data[10]=A.value.elements[8],A.__data[11]=A.value.elements[0]):O.toArray(A.__data),n.bufferSubData(35345,U,A.__data))}}n.bindBuffer(35345,null)}function g(T,M,b){const E=T.value;if(b[M]===void 0)return typeof E=="number"?b[M]=E:b[M]=E.clone(),!0;if(typeof E=="number"){if(b[M]!==E)return b[M]=E,!0}else{const N=b[M];if(N.equals(E)===!1)return N.copy(E),!0}return!1}function x(T){const M=T.uniforms;let b=0;const E=16;let N=0;for(let B=0,A=M.length;B<A;B++){const O=M[B],U=_(O);if(O.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,B>0){N=b%E;const q=E-N;N!==0&&q-U.boundary<0&&(b+=E-N,O.__offset=b)}b+=U.storage}return N=b%E,N>0&&(b+=E-N),T.__size=b,T.__cache={},this}function _(T){const M=T.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(T){const M=T.target;M.removeEventListener("dispose",m);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function v(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}function createCanvasElement(){const n=createElementNS("canvas");return n.style.display="block",n}function WebGLRenderer(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:createCanvasElement(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.physicallyCorrectLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const _=this;let m=!1,v=0,T=0,M=null,b=-1,E=null;const N=new Vector4,B=new Vector4;let A=null,O=e.width,U=e.height,q=1,ne=null,G=null;const H=new Vector4(0,0,O,U),oe=new Vector4(0,0,O,U);let ce=!1;const re=new Frustum;let Q=!1,pe=!1,me=null;const ee=new Matrix4,te=new Vector2,_e=new Vector3,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return M===null?q:1}let ie=t;function Ae(D,K){for(let le=0;le<D.length;le++){const W=D[le],de=e.getContext(W,K);if(de!==null)return de}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${REVISION}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),ie===null){const K=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&K.shift(),ie=Ae(K,D),ie===null)throw Ae(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ee,we,xe,ke,P,y,C,I,F,$,X,Z,he,j,w,S,V,Y,ae,fe,be,ye,se,De;function Ne(){Ee=new WebGLExtensions(ie),we=new WebGLCapabilities(ie,Ee,n),Ee.init(we),ye=new WebGLUtils(ie,Ee,we),xe=new WebGLState(ie,Ee,we),ke=new WebGLInfo,P=new WebGLProperties,y=new WebGLTextures(ie,Ee,xe,P,we,ye,ke),C=new WebGLCubeMaps(_),I=new WebGLCubeUVMaps(_),F=new WebGLAttributes(ie,we),se=new WebGLBindingStates(ie,Ee,F,we),$=new WebGLGeometries(ie,F,ke,se),X=new WebGLObjects(ie,$,F,ke),ae=new WebGLMorphtargets(ie,we,y),S=new WebGLClipping(P),Z=new WebGLPrograms(_,C,I,Ee,we,se,S),he=new WebGLMaterials(_,P),j=new WebGLRenderLists,w=new WebGLRenderStates(Ee,we),Y=new WebGLBackground(_,C,I,xe,X,u,a),V=new WebGLShadowMap(_,X,we),De=new WebGLUniformsGroups(ie,ke,we,xe),fe=new WebGLBufferRenderer(ie,Ee,ke,we),be=new WebGLIndexedBufferRenderer(ie,Ee,ke,we),ke.programs=Z.programs,_.capabilities=we,_.extensions=Ee,_.properties=P,_.renderLists=j,_.shadowMap=V,_.state=xe,_.info=ke}Ne();const Re=new WebXRManager(_,ie);this.xr=Re,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){const D=Ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(O,U,!1))},this.getSize=function(D){return D.set(O,U)},this.setSize=function(D,K,le){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,U=K,e.width=Math.floor(D*q),e.height=Math.floor(K*q),le!==!1&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(O*q,U*q).floor()},this.setDrawingBufferSize=function(D,K,le){O=D,U=K,q=le,e.width=Math.floor(D*le),e.height=Math.floor(K*le),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(N)},this.getViewport=function(D){return D.copy(H)},this.setViewport=function(D,K,le,W){D.isVector4?H.set(D.x,D.y,D.z,D.w):H.set(D,K,le,W),xe.viewport(N.copy(H).multiplyScalar(q).floor())},this.getScissor=function(D){return D.copy(oe)},this.setScissor=function(D,K,le,W){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,K,le,W),xe.scissor(B.copy(oe).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(D){xe.setScissorTest(ce=D)},this.setOpaqueSort=function(D){ne=D},this.setTransparentSort=function(D){G=D},this.getClearColor=function(D){return D.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(D=!0,K=!0,le=!0){let W=0;D&&(W|=16384),K&&(W|=256),le&&(W|=1024),ie.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),j.dispose(),w.dispose(),P.dispose(),C.dispose(),I.dispose(),X.dispose(),se.dispose(),De.dispose(),Z.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ce),Re.removeEventListener("sessionend",Ie),me&&(me.dispose(),me=null),Xe.stop()};function Fe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const D=ke.autoReset,K=V.enabled,le=V.autoUpdate,W=V.needsUpdate,de=V.type;Ne(),ke.autoReset=D,V.enabled=K,V.autoUpdate=le,V.needsUpdate=W,V.type=de}function Ve(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qe(D){const K=D.target;K.removeEventListener("dispose",qe),et(K)}function et(D){z(D),P.remove(D)}function z(D){const K=P.get(D).programs;K!==void 0&&(K.forEach(function(le){Z.releaseProgram(le)}),D.isShaderMaterial&&Z.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,le,W,de,Oe){K===null&&(K=Se);const Ue=de.isMesh&&de.matrixWorld.determinant()<0,ze=Vt(D,K,le,W,de);xe.setMaterial(W,Ue);let He=le.index,$e=1;W.wireframe===!0&&(He=$.getWireframeAttribute(le),$e=2);const Ge=le.drawRange,We=le.attributes.position;let Ze=Ge.start*$e,st=(Ge.start+Ge.count)*$e;Oe!==null&&(Ze=Math.max(Ze,Oe.start*$e),st=Math.min(st,(Oe.start+Oe.count)*$e)),He!==null?(Ze=Math.max(Ze,0),st=Math.min(st,He.count)):We!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,We.count));const ft=st-Ze;if(ft<0||ft===1/0)return;se.setup(de,W,ze,le,He);let yt,Je=fe;if(He!==null&&(yt=F.get(He),Je=be,Je.setIndex(yt)),de.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Te()),Je.setMode(1)):Je.setMode(4);else if(de.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),xe.setLineWidth(Be*Te()),de.isLineSegments?Je.setMode(1):de.isLineLoop?Je.setMode(2):Je.setMode(3)}else de.isPoints?Je.setMode(0):de.isSprite&&Je.setMode(4);if(de.isInstancedMesh)Je.renderInstances(Ze,ft,de.count);else if(le.isInstancedBufferGeometry){const Be=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,_t=Math.min(le.instanceCount,Be);Je.renderInstances(Ze,ft,_t)}else Je.render(Ze,ft)},this.compile=function(D,K){function le(W,de,Oe){W.transparent===!0&&W.side===DoubleSide?(W.side=BackSide,W.needsUpdate=!0,ut(W,de,Oe),W.side=FrontSide,W.needsUpdate=!0,ut(W,de,Oe),W.side=DoubleSide):ut(W,de,Oe)}f=w.get(D),f.init(),x.push(f),D.traverseVisible(function(W){W.isLight&&W.layers.test(K.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(_.physicallyCorrectLights),D.traverse(function(W){const de=W.material;if(de)if(Array.isArray(de))for(let Oe=0;Oe<de.length;Oe++){const Ue=de[Oe];le(Ue,D,W)}else le(de,D,W)}),x.pop(),f=null};let ue=null;function Me(D){ue&&ue(D)}function Ce(){Xe.stop()}function Ie(){Xe.start()}const Xe=new WebGLAnimation;Xe.setAnimationLoop(Me),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(D){ue=D,Re.setAnimationLoop(D),D===null?Xe.stop():Xe.start()},Re.addEventListener("sessionstart",Ce),Re.addEventListener("sessionend",Ie),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(K),K=Re.getCamera()),D.isScene===!0&&D.onBeforeRender(_,D,K,M),f=w.get(D,x.length),f.init(),x.push(f),ee.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),re.setFromProjectionMatrix(ee),pe=this.localClippingEnabled,Q=S.init(this.clippingPlanes,pe,K),d=j.get(D,g.length),d.init(),g.push(d),tt(D,K,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(ne,G),Q===!0&&S.beginShadows();const le=f.state.shadowsArray;if(V.render(le,D,K),Q===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(d,D),f.setupLights(_.physicallyCorrectLights),K.isArrayCamera){const W=K.cameras;for(let de=0,Oe=W.length;de<Oe;de++){const Ue=W[de];nt(d,D,Ue,Ue.viewport)}}else nt(d,D,K);M!==null&&(y.updateMultisampleRenderTarget(M),y.updateRenderTargetMipmap(M)),D.isScene===!0&&D.onAfterRender(_,D,K),se.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function tt(D,K,le,W){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)le=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||re.intersectsSprite(D)){W&&_e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ee);const Ue=X.update(D),ze=D.material;ze.visible&&d.push(D,Ue,ze,le,_e.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==ke.render.frame&&(D.skeleton.update(),D.skeleton.frame=ke.render.frame),!D.frustumCulled||re.intersectsObject(D))){W&&_e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ee);const Ue=X.update(D),ze=D.material;if(Array.isArray(ze)){const He=Ue.groups;for(let $e=0,Ge=He.length;$e<Ge;$e++){const We=He[$e],Ze=ze[We.materialIndex];Ze&&Ze.visible&&d.push(D,Ue,Ze,le,_e.z,We)}}else ze.visible&&d.push(D,Ue,ze,le,_e.z,null)}}const Oe=D.children;for(let Ue=0,ze=Oe.length;Ue<ze;Ue++)tt(Oe[Ue],K,le,W)}function nt(D,K,le,W){const de=D.opaque,Oe=D.transmissive,Ue=D.transparent;f.setupLightsView(le),Oe.length>0&&gt(de,K,le),W&&xe.viewport(N.copy(W)),de.length>0&&Ke(de,K,le),Oe.length>0&&Ke(Oe,K,le),Ue.length>0&&Ke(Ue,K,le),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function gt(D,K,le){const W=we.isWebGL2;me===null&&(me=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:W&&s===!0?4:0})),_.getDrawingBufferSize(te),W?me.setSize(te.x,te.y):me.setSize(floorPowerOfTwo(te.x),floorPowerOfTwo(te.y));const de=_.getRenderTarget();_.setRenderTarget(me),_.clear();const Oe=_.toneMapping;_.toneMapping=NoToneMapping,Ke(D,K,le),_.toneMapping=Oe,y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me),_.setRenderTarget(de)}function Ke(D,K,le){const W=K.isScene===!0?K.overrideMaterial:null;for(let de=0,Oe=D.length;de<Oe;de++){const Ue=D[de],ze=Ue.object,He=Ue.geometry,$e=W===null?Ue.material:W,Ge=Ue.group;ze.layers.test(le.layers)&&dt(ze,K,le,He,$e,Ge)}}function dt(D,K,le,W,de,Oe){D.onBeforeRender(_,K,le,W,de,Oe),D.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),de.onBeforeRender(_,K,le,W,D,Oe),de.transparent===!0&&de.side===DoubleSide?(de.side=BackSide,de.needsUpdate=!0,_.renderBufferDirect(le,K,W,de,D,Oe),de.side=FrontSide,de.needsUpdate=!0,_.renderBufferDirect(le,K,W,de,D,Oe),de.side=DoubleSide):_.renderBufferDirect(le,K,W,de,D,Oe),D.onAfterRender(_,K,le,W,de,Oe)}function ut(D,K,le){K.isScene!==!0&&(K=Se);const W=P.get(D),de=f.state.lights,Oe=f.state.shadowsArray,Ue=de.state.version,ze=Z.getParameters(D,de.state,Oe,K,le),He=Z.getProgramCacheKey(ze);let $e=W.programs;W.environment=D.isMeshStandardMaterial?K.environment:null,W.fog=K.fog,W.envMap=(D.isMeshStandardMaterial?I:C).get(D.envMap||W.environment),$e===void 0&&(D.addEventListener("dispose",qe),$e=new Map,W.programs=$e);let Ge=$e.get(He);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ue)return Tt(D,ze),Ge}else ze.uniforms=Z.getUniforms(D),D.onBuild(le,ze,_),D.onBeforeCompile(ze,_),Ge=Z.acquireProgram(ze,He),$e.set(He,Ge),W.uniforms=ze.uniforms;const We=W.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(We.clippingPlanes=S.uniform),Tt(D,ze),W.needsLights=Nt(D),W.lightsStateVersion=Ue,W.needsLights&&(We.ambientLightColor.value=de.state.ambient,We.lightProbe.value=de.state.probe,We.directionalLights.value=de.state.directional,We.directionalLightShadows.value=de.state.directionalShadow,We.spotLights.value=de.state.spot,We.spotLightShadows.value=de.state.spotShadow,We.rectAreaLights.value=de.state.rectArea,We.ltc_1.value=de.state.rectAreaLTC1,We.ltc_2.value=de.state.rectAreaLTC2,We.pointLights.value=de.state.point,We.pointLightShadows.value=de.state.pointShadow,We.hemisphereLights.value=de.state.hemi,We.directionalShadowMap.value=de.state.directionalShadowMap,We.directionalShadowMatrix.value=de.state.directionalShadowMatrix,We.spotShadowMap.value=de.state.spotShadowMap,We.spotLightMatrix.value=de.state.spotLightMatrix,We.spotLightMap.value=de.state.spotLightMap,We.pointShadowMap.value=de.state.pointShadowMap,We.pointShadowMatrix.value=de.state.pointShadowMatrix);const Ze=Ge.getUniforms(),st=WebGLUniforms.seqWithValue(Ze.seq,We);return W.currentProgram=Ge,W.uniformsList=st,Ge}function Tt(D,K){const le=P.get(D);le.outputEncoding=K.outputEncoding,le.instancing=K.instancing,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Vt(D,K,le,W,de){K.isScene!==!0&&(K=Se),y.resetTextureUnits();const Oe=K.fog,Ue=W.isMeshStandardMaterial?K.environment:null,ze=M===null?_.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:LinearEncoding,He=(W.isMeshStandardMaterial?I:C).get(W.envMap||Ue),$e=W.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ge=!!W.normalMap&&!!le.attributes.tangent,We=!!le.morphAttributes.position,Ze=!!le.morphAttributes.normal,st=!!le.morphAttributes.color,ft=W.toneMapped?_.toneMapping:NoToneMapping,yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Je=yt!==void 0?yt.length:0,Be=P.get(W),_t=f.state.lights;if(Q===!0&&(pe===!0||D!==E)){const Qe=D===E&&W.id===b;S.setState(W,D,Qe)}let Ye=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_t.state.version||Be.outputEncoding!==ze||de.isInstancedMesh&&Be.instancing===!1||!de.isInstancedMesh&&Be.instancing===!0||de.isSkinnedMesh&&Be.skinning===!1||!de.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==He||W.fog===!0&&Be.fog!==Oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==S.numPlanes||Be.numIntersection!==S.numIntersection)||Be.vertexAlphas!==$e||Be.vertexTangents!==Ge||Be.morphTargets!==We||Be.morphNormals!==Ze||Be.morphColors!==st||Be.toneMapping!==ft||we.isWebGL2===!0&&Be.morphTargetsCount!==Je)&&(Ye=!0):(Ye=!0,Be.__version=W.version);let at=Be.currentProgram;Ye===!0&&(at=ut(W,K,de));let Mt=!1,lt=!1,ht=!1;const it=at.getUniforms(),vt=Be.uniforms;if(xe.useProgram(at.program)&&(Mt=!0,lt=!0,ht=!0),W.id!==b&&(b=W.id,lt=!0),Mt||E!==D){if(it.setValue(ie,"projectionMatrix",D.projectionMatrix),we.logarithmicDepthBuffer&&it.setValue(ie,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),E!==D&&(E=D,lt=!0,ht=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Qe=it.map.cameraPosition;Qe!==void 0&&Qe.setValue(ie,_e.setFromMatrixPosition(D.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(ie,"isOrthographic",D.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||de.isSkinnedMesh)&&it.setValue(ie,"viewMatrix",D.matrixWorldInverse)}if(de.isSkinnedMesh){it.setOptional(ie,de,"bindMatrix"),it.setOptional(ie,de,"bindMatrixInverse");const Qe=de.skeleton;Qe&&(we.floatVertexTextures?(Qe.boneTexture===null&&Qe.computeBoneTexture(),it.setValue(ie,"boneTexture",Qe.boneTexture,y),it.setValue(ie,"boneTextureSize",Qe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bt=le.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0&&we.isWebGL2===!0)&&ae.update(de,le,W,at),(lt||Be.receiveShadow!==de.receiveShadow)&&(Be.receiveShadow=de.receiveShadow,it.setValue(ie,"receiveShadow",de.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(vt.envMap.value=He,vt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),lt&&(it.setValue(ie,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&zt(vt,ht),Oe&&W.fog===!0&&he.refreshFogUniforms(vt,Oe),he.refreshMaterialUniforms(vt,W,q,U,me),WebGLUniforms.upload(ie,Be.uniformsList,vt,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(ie,Be.uniformsList,vt,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(ie,"center",de.center),it.setValue(ie,"modelViewMatrix",de.modelViewMatrix),it.setValue(ie,"normalMatrix",de.normalMatrix),it.setValue(ie,"modelMatrix",de.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Qe=W.uniformsGroups;for(let wt=0,Dt=Qe.length;wt<Dt;wt++)if(we.isWebGL2){const Ct=Qe[wt];De.update(Ct,at),De.bind(Ct,at)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return at}function zt(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function Nt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(D,K,le){P.get(D.texture).__webglTexture=K,P.get(D.depthTexture).__webglTexture=le;const W=P.get(D);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=le===void 0,W.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const le=P.get(D);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,le=0){M=D,v=K,T=le;let W=!0,de=null,Oe=!1,Ue=!1;if(D){const He=P.get(D);He.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),W=!1):He.__webglFramebuffer===void 0?y.setupRenderTarget(D):He.__hasExternalTextures&&y.rebindTextures(D,P.get(D.texture).__webglTexture,P.get(D.depthTexture).__webglTexture);const $e=D.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const Ge=P.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(de=Ge[K],Oe=!0):we.isWebGL2&&D.samples>0&&y.useMultisampledRTT(D)===!1?de=P.get(D).__webglMultisampledFramebuffer:de=Ge,N.copy(D.viewport),B.copy(D.scissor),A=D.scissorTest}else N.copy(H).multiplyScalar(q).floor(),B.copy(oe).multiplyScalar(q).floor(),A=ce;if(xe.bindFramebuffer(36160,de)&&we.drawBuffers&&W&&xe.drawBuffers(D,de),xe.viewport(N),xe.scissor(B),xe.setScissorTest(A),Oe){const He=P.get(D.texture);ie.framebufferTexture2D(36160,36064,34069+K,He.__webglTexture,le)}else if(Ue){const He=P.get(D.texture),$e=K||0;ie.framebufferTextureLayer(36160,36064,He.__webglTexture,le||0,$e)}b=-1},this.readRenderTargetPixels=function(D,K,le,W,de,Oe,Ue){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){xe.bindFramebuffer(36160,ze);try{const He=D.texture,$e=He.format,Ge=He.type;if($e!==RGBAFormat&&ye.convert($e)!==ie.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===HalfFloatType&&(Ee.has("EXT_color_buffer_half_float")||we.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ge!==UnsignedByteType&&ye.convert(Ge)!==ie.getParameter(35738)&&!(Ge===FloatType&&(we.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-W&&le>=0&&le<=D.height-de&&ie.readPixels(K,le,W,de,ye.convert($e),ye.convert(Ge),Oe)}finally{const He=M!==null?P.get(M).__webglFramebuffer:null;xe.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(D,K,le=0){const W=Math.pow(2,-le),de=Math.floor(K.image.width*W),Oe=Math.floor(K.image.height*W);y.setTexture2D(K,0),ie.copyTexSubImage2D(3553,le,0,0,D.x,D.y,de,Oe),xe.unbindTexture()},this.copyTextureToTexture=function(D,K,le,W=0){const de=K.image.width,Oe=K.image.height,Ue=ye.convert(le.format),ze=ye.convert(le.type);y.setTexture2D(le,0),ie.pixelStorei(37440,le.flipY),ie.pixelStorei(37441,le.premultiplyAlpha),ie.pixelStorei(3317,le.unpackAlignment),K.isDataTexture?ie.texSubImage2D(3553,W,D.x,D.y,de,Oe,Ue,ze,K.image.data):K.isCompressedTexture?ie.compressedTexSubImage2D(3553,W,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,Ue,K.mipmaps[0].data):ie.texSubImage2D(3553,W,D.x,D.y,Ue,ze,K.image),W===0&&le.generateMipmaps&&ie.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(D,K,le,W,de=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=D.max.x-D.min.x+1,Ue=D.max.y-D.min.y+1,ze=D.max.z-D.min.z+1,He=ye.convert(W.format),$e=ye.convert(W.type);let Ge;if(W.isData3DTexture)y.setTexture3D(W,0),Ge=32879;else if(W.isDataArrayTexture)y.setTexture2DArray(W,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ie.pixelStorei(37440,W.flipY),ie.pixelStorei(37441,W.premultiplyAlpha),ie.pixelStorei(3317,W.unpackAlignment);const We=ie.getParameter(3314),Ze=ie.getParameter(32878),st=ie.getParameter(3316),ft=ie.getParameter(3315),yt=ie.getParameter(32877),Je=le.isCompressedTexture?le.mipmaps[0]:le.image;ie.pixelStorei(3314,Je.width),ie.pixelStorei(32878,Je.height),ie.pixelStorei(3316,D.min.x),ie.pixelStorei(3315,D.min.y),ie.pixelStorei(32877,D.min.z),le.isDataTexture||le.isData3DTexture?ie.texSubImage3D(Ge,de,K.x,K.y,K.z,Oe,Ue,ze,He,$e,Je.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(Ge,de,K.x,K.y,K.z,Oe,Ue,ze,He,Je.data)):ie.texSubImage3D(Ge,de,K.x,K.y,K.z,Oe,Ue,ze,He,$e,Je),ie.pixelStorei(3314,We),ie.pixelStorei(32878,Ze),ie.pixelStorei(3316,st),ie.pixelStorei(3315,ft),ie.pixelStorei(32877,yt),de===0&&W.generateMipmaps&&ie.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?y.setTextureCube(D,0):D.isData3DTexture?y.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?y.setTexture2DArray(D,0):y.setTexture2D(D,0),xe.unbindTexture()},this.resetState=function(){v=0,T=0,M=null,xe.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class InterleavedBuffer{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=generateUUID()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _vector$6=new Vector3;class InterleavedBufferAttribute{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.applyMatrix4(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.applyNormalMatrix(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.transformDirection(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=denormalize(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=denormalize(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=denormalize(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=denormalize(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new BufferAttribute(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class InstancedBufferAttribute extends BufferAttribute{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,g=(a-u)/f;return(r+g)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Vector2:new Vector3);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new Vector3,r=[],s=[],a=[],o=new Vector3,l=new Matrix4;for(let g=0;g<=e;g++){const x=g/e;r[g]=this.getTangentAt(x,new Vector3)}s[0]=new Vector3,a[0]=new Vector3;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(clamp(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(r[g],s[g])}if(t===!0){let g=Math.acos(clamp(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],g*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new Vector2,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*u-g*d+this.aX,c=f*d+g*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,g=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,g*=u,r(a,o,f,g)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Vector3){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(tmp.subVectors(r[0],r[1]).add(r[0]),c=tmp);const d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(tmp.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(d),g),_=Math.pow(d.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(u),g);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),px.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,x,_,m),py.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,x,_,m),pz.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,x,_,m)}else this.curveType==="catmullrom"&&(px.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),py.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),pz.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(px.calc(l),py.calc(l),pz.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Vector3().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function CatmullRom(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function QuadraticBezierP0(n,e){const t=1-n;return t*t*e}function QuadraticBezierP1(n,e){return 2*(1-n)*n*e}function QuadraticBezierP2(n,e){return n*n*e}function QuadraticBezier(n,e,t,i){return QuadraticBezierP0(n,e)+QuadraticBezierP1(n,t)+QuadraticBezierP2(n,i)}function CubicBezierP0(n,e){const t=1-n;return t*t*t*e}function CubicBezierP1(n,e){const t=1-n;return 3*t*t*n*e}function CubicBezierP2(n,e){return 3*(1-n)*n*n*e}function CubicBezierP3(n,e){return n*n*n*e}function CubicBezier(n,e,t,i,r){return CubicBezierP0(n,e)+CubicBezierP1(n,t)+CubicBezierP2(n,i)+CubicBezierP3(n,r)}class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,i=new Vector2,r=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Vector2){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(CubicBezier(e,r.x,s.x,a.x,o.x),CubicBezier(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,i=new Vector3,r=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Vector3){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(CubicBezier(e,r.x,s.x,a.x,o.x),CubicBezier(e,r.y,s.y,a.y,o.y),CubicBezier(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new Vector2;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,i=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Vector2){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(QuadraticBezier(e,r.x,s.x,a.x),QuadraticBezier(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,i=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Vector3){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(QuadraticBezier(e,r.x,s.x,a.x),QuadraticBezier(e,r.y,s.y,a.y),QuadraticBezier(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(CatmullRom(o,l.x,c.x,u.x,d.x),CatmullRom(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Vector2().fromArray(r))}return this}}var Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new LineCurve(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Curves[r.type]().fromJSON(r))}return this}}class Path extends CurvePath{constructor(e){super(),this.type="Path",this.currentPoint=new Vector2,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new LineCurve(this.currentPoint.clone(),new Vector2(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(i,r),new Vector2(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new SplineCurve(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new EllipseCurve(e,t,i,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Shape extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Path().fromJSON(r))}return this}}const Earcut={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=linkedList(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,d,f,g;if(i&&(s=eliminateHoles(n,e,s,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let x=t;x<r;x+=t)d=n[x],f=n[x+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);g=Math.max(c-o,u-l),g=g!==0?32767/g:0}return earcutLinked(s,a,t,o,l,g,0),a}};function linkedList(n,e,t,i,r){let s,a;if(r===signedArea(n,e,t,i)>0)for(s=e;s<t;s+=i)a=insertNode(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=insertNode(s,n[s],n[s+1],a);return a&&equals(a,a.next)&&(removeNode(a),a=a.next),a}function filterPoints(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(equals(t,t.next)||area(t.prev,t,t.next)===0)){if(removeNode(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function earcutLinked(n,e,t,i,r,s,a){if(!n)return;!a&&s&&indexCurve(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?isEarHashed(n,i,r,s):isEar(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),removeNode(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=cureLocalIntersections(filterPoints(n),e,t),earcutLinked(n,e,t,i,r,s,2)):a===2&&splitEarcut(n,e,t,i,r,s):earcutLinked(filterPoints(n),e,t,i,r,s,1);break}}}function isEar(n){const e=n.prev,t=n,i=n.next;if(area(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,g=o>l?o>c?o:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=u&&x.x<=f&&x.y>=d&&x.y<=g&&pointInTriangle(r,o,s,l,a,c,x.x,x.y)&&area(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function isEarHashed(n,e,t,i){const r=n.prev,s=n,a=n.next;if(area(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,d=s.y,f=a.y,g=o<l?o<c?o:c:l<c?l:c,x=u<d?u<f?u:f:d<f?d:f,_=o>l?o>c?o:c:l>c?l:c,m=u>d?u>f?u:f:d>f?d:f,v=zOrder(g,x,e,t,i),T=zOrder(_,m,e,t,i);let M=n.prevZ,b=n.nextZ;for(;M&&M.z>=v&&b&&b.z<=T;){if(M.x>=g&&M.x<=_&&M.y>=x&&M.y<=m&&M!==r&&M!==a&&pointInTriangle(o,u,l,d,c,f,M.x,M.y)&&area(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=g&&b.x<=_&&b.y>=x&&b.y<=m&&b!==r&&b!==a&&pointInTriangle(o,u,l,d,c,f,b.x,b.y)&&area(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=v;){if(M.x>=g&&M.x<=_&&M.y>=x&&M.y<=m&&M!==r&&M!==a&&pointInTriangle(o,u,l,d,c,f,M.x,M.y)&&area(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=T;){if(b.x>=g&&b.x<=_&&b.y>=x&&b.y<=m&&b!==r&&b!==a&&pointInTriangle(o,u,l,d,c,f,b.x,b.y)&&area(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function cureLocalIntersections(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!equals(r,s)&&intersects(r,i,i.next,s)&&locallyInside(r,s)&&locallyInside(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),removeNode(i),removeNode(i.next),i=n=s),i=i.next}while(i!==n);return filterPoints(i)}function splitEarcut(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&isValidDiagonal(a,o)){let l=splitPolygon(a,o);a=filterPoints(a,a.next),l=filterPoints(l,l.next),earcutLinked(a,e,t,i,r,s,0),earcutLinked(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function eliminateHoles(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=linkedList(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(getLeftmost(c));for(r.sort(compareX),s=0;s<r.length;s++)t=eliminateHole(r[s],t);return t}function compareX(n,e){return n.x-e.x}function eliminateHole(n,e){const t=findHoleBridge(n,e);if(!t)return e;const i=splitPolygon(t,n);return filterPoints(i,i.next),filterPoints(t,t.next)}function findHoleBridge(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&pointInTriangle(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),locallyInside(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&sectorContainsSector(r,t)))&&(r=t,u=d)),t=t.next;while(t!==o);return r}function sectorContainsSector(n,e){return area(n.prev,n,e.prev)<0&&area(e.next,n,n.next)<0}function indexCurve(n,e,t,i){let r=n;do r.z===0&&(r.z=zOrder(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,sortLinked(r)}function sortLinked(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function zOrder(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function getLeftmost(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pointInTriangle(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function isValidDiagonal(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!intersectsPolygon(n,e)&&(locallyInside(n,e)&&locallyInside(e,n)&&middleInside(n,e)&&(area(n.prev,n,e.prev)||area(n,e.prev,e))||equals(n,e)&&area(n.prev,n,n.next)>0&&area(e.prev,e,e.next)>0)}function area(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function equals(n,e){return n.x===e.x&&n.y===e.y}function intersects(n,e,t,i){const r=sign(area(n,e,t)),s=sign(area(n,e,i)),a=sign(area(t,i,n)),o=sign(area(t,i,e));return!!(r!==s&&a!==o||r===0&&onSegment(n,t,e)||s===0&&onSegment(n,i,e)||a===0&&onSegment(t,n,i)||o===0&&onSegment(t,e,i))}function onSegment(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sign(n){return n>0?1:n<0?-1:0}function intersectsPolygon(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&intersects(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function locallyInside(n,e){return area(n.prev,n,n.next)<0?area(n,e,n.next)>=0&&area(n,n.prev,e)>=0:area(n,e,n.prev)<0||area(n,n.next,e)<0}function middleInside(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function splitPolygon(n,e){const t=new Node(n.i,n.x,n.y),i=new Node(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function insertNode(n,e,t,i){const r=new Node(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function removeNode(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Node(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class ShapeUtils{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];removeDupEndPts(e),addContour(i,e);let a=e.length;t.forEach(removeDupEndPts);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,addContour(i,t[l]);const o=Earcut.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function removeDupEndPts(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function addContour(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ExtrudeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(.5,.5),new Vector2(-.5,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("uv",new Float32BufferAttribute(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:WorldUVGenerator;let M,b=!1,E,N,B,A;v&&(M=v.getSpacedPoints(u),b=!0,f=!1,E=v.computeFrenetFrames(u,!1),N=new Vector3,B=new Vector3,A=new Vector3),f||(m=0,g=0,x=0,_=0);const O=o.extractPoints(c);let U=O.shape;const q=O.holes;if(!ShapeUtils.isClockWise(U)){U=U.reverse();for(let P=0,y=q.length;P<y;P++){const C=q[P];ShapeUtils.isClockWise(C)&&(q[P]=C.reverse())}}const G=ShapeUtils.triangulateShape(U,q),H=U;for(let P=0,y=q.length;P<y;P++){const C=q[P];U=U.concat(C)}function oe(P,y,C){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),y.clone().multiplyScalar(C).add(P)}const ce=U.length,re=G.length;function Q(P,y,C){let I,F,$;const X=P.x-y.x,Z=P.y-y.y,he=C.x-P.x,j=C.y-P.y,w=X*X+Z*Z,S=X*j-Z*he;if(Math.abs(S)>Number.EPSILON){const V=Math.sqrt(w),Y=Math.sqrt(he*he+j*j),ae=y.x-Z/V,fe=y.y+X/V,be=C.x-j/Y,ye=C.y+he/Y,se=((be-ae)*j-(ye-fe)*he)/(X*j-Z*he);I=ae+X*se-P.x,F=fe+Z*se-P.y;const De=I*I+F*F;if(De<=2)return new Vector2(I,F);$=Math.sqrt(De/2)}else{let V=!1;X>Number.EPSILON?he>Number.EPSILON&&(V=!0):X<-Number.EPSILON?he<-Number.EPSILON&&(V=!0):Math.sign(Z)===Math.sign(j)&&(V=!0),V?(I=-Z,F=X,$=Math.sqrt(w)):(I=X,F=Z,$=Math.sqrt(w/2))}return new Vector2(I/$,F/$)}const pe=[];for(let P=0,y=H.length,C=y-1,I=P+1;P<y;P++,C++,I++)C===y&&(C=0),I===y&&(I=0),pe[P]=Q(H[P],H[C],H[I]);const me=[];let ee,te=pe.concat();for(let P=0,y=q.length;P<y;P++){const C=q[P];ee=[];for(let I=0,F=C.length,$=F-1,X=I+1;I<F;I++,$++,X++)$===F&&($=0),X===F&&(X=0),ee[I]=Q(C[I],C[$],C[X]);me.push(ee),te=te.concat(ee)}for(let P=0;P<m;P++){const y=P/m,C=g*Math.cos(y*Math.PI/2),I=x*Math.sin(y*Math.PI/2)+_;for(let F=0,$=H.length;F<$;F++){const X=oe(H[F],pe[F],I);Ae(X.x,X.y,-C)}for(let F=0,$=q.length;F<$;F++){const X=q[F];ee=me[F];for(let Z=0,he=X.length;Z<he;Z++){const j=oe(X[Z],ee[Z],I);Ae(j.x,j.y,-C)}}}const _e=x+_;for(let P=0;P<ce;P++){const y=f?oe(U[P],te[P],_e):U[P];b?(B.copy(E.normals[0]).multiplyScalar(y.x),N.copy(E.binormals[0]).multiplyScalar(y.y),A.copy(M[0]).add(B).add(N),Ae(A.x,A.y,A.z)):Ae(y.x,y.y,0)}for(let P=1;P<=u;P++)for(let y=0;y<ce;y++){const C=f?oe(U[y],te[y],_e):U[y];b?(B.copy(E.normals[P]).multiplyScalar(C.x),N.copy(E.binormals[P]).multiplyScalar(C.y),A.copy(M[P]).add(B).add(N),Ae(A.x,A.y,A.z)):Ae(C.x,C.y,d/u*P)}for(let P=m-1;P>=0;P--){const y=P/m,C=g*Math.cos(y*Math.PI/2),I=x*Math.sin(y*Math.PI/2)+_;for(let F=0,$=H.length;F<$;F++){const X=oe(H[F],pe[F],I);Ae(X.x,X.y,d+C)}for(let F=0,$=q.length;F<$;F++){const X=q[F];ee=me[F];for(let Z=0,he=X.length;Z<he;Z++){const j=oe(X[Z],ee[Z],I);b?Ae(j.x,j.y+M[u-1].y,M[u-1].x+C):Ae(j.x,j.y,d+C)}}}Se(),Te();function Se(){const P=r.length/3;if(f){let y=0,C=ce*y;for(let I=0;I<re;I++){const F=G[I];Ee(F[2]+C,F[1]+C,F[0]+C)}y=u+m*2,C=ce*y;for(let I=0;I<re;I++){const F=G[I];Ee(F[0]+C,F[1]+C,F[2]+C)}}else{for(let y=0;y<re;y++){const C=G[y];Ee(C[2],C[1],C[0])}for(let y=0;y<re;y++){const C=G[y];Ee(C[0]+ce*u,C[1]+ce*u,C[2]+ce*u)}}i.addGroup(P,r.length/3-P,0)}function Te(){const P=r.length/3;let y=0;ie(H,y),y+=H.length;for(let C=0,I=q.length;C<I;C++){const F=q[C];ie(F,y),y+=F.length}i.addGroup(P,r.length/3-P,1)}function ie(P,y){let C=P.length;for(;--C>=0;){const I=C;let F=C-1;F<0&&(F=P.length-1);for(let $=0,X=u+m*2;$<X;$++){const Z=ce*$,he=ce*($+1),j=y+I+Z,w=y+F+Z,S=y+F+he,V=y+I+he;we(j,w,S,V)}}}function Ae(P,y,C){l.push(P),l.push(y),l.push(C)}function Ee(P,y,C){xe(P),xe(y),xe(C);const I=r.length/3,F=T.generateTopUV(i,r,I-3,I-2,I-1);ke(F[0]),ke(F[1]),ke(F[2])}function we(P,y,C,I){xe(P),xe(y),xe(I),xe(y),xe(C),xe(I);const F=r.length/3,$=T.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);ke($[0]),ke($[1]),ke($[3]),ke($[1]),ke($[2]),ke($[3])}function xe(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function ke(P){s.push(P.x),s.push(P.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return toJSON$1(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Curves[r.type]().fromJSON(r)),new ExtrudeGeometry(i,e.options)}}const WorldUVGenerator={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Vector2(s,a),new Vector2(o,l),new Vector2(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],g=e[r*3+1],x=e[r*3+2],_=e[s*3],m=e[s*3+1],v=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Vector2(a,1-l),new Vector2(c,1-d),new Vector2(f,1-x),new Vector2(_,1-v)]:[new Vector2(o,1-l),new Vector2(u,1-d),new Vector2(g,1-x),new Vector2(m,1-v)]}};function toJSON$1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ShapeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(0,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("normal",new Float32BufferAttribute(s,3)),this.setAttribute("uv",new Float32BufferAttribute(a,2));function c(u){const d=r.length/3,f=u.extractPoints(t);let g=f.shape;const x=f.holes;ShapeUtils.isClockWise(g)===!1&&(g=g.reverse());for(let m=0,v=x.length;m<v;m++){const T=x[m];ShapeUtils.isClockWise(T)===!0&&(x[m]=T.reverse())}const _=ShapeUtils.triangulateShape(g,x);for(let m=0,v=x.length;m<v;m++){const T=x[m];g=g.concat(T)}for(let m=0,v=g.length;m<v;m++){const T=g[m];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let m=0,v=_.length;m<v;m++){const T=_[m],M=T[0]+d,b=T[1]+d,E=T[2]+d;i.push(M,b,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return toJSON(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new ShapeGeometry(i,e.curveSegments)}}function toJSON(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new Vector3,f=new Vector3,g=[],x=[],_=[],m=[];for(let v=0;v<=i;v++){const T=[],M=v/i;let b=0;v==0&&a==0?b=.5/t:v==i&&l==Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const N=E/t;d.x=-e*Math.cos(r+N*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(r+N*s)*Math.sin(a+M*o),x.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(N+b,1-M),T.push(c++)}u.push(T)}for(let v=0;v<i;v++)for(let T=0;T<t;T++){const M=u[v][T+1],b=u[v][T],E=u[v+1][T],N=u[v+1][T+1];(v!==0||a>0)&&g.push(M,b,N),(v!==i-1||l<Math.PI)&&g.push(b,E,N)}this.setIndex(g),this.setAttribute("position",new Float32BufferAttribute(x,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class WireframeGeometry extends BufferGeometry{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new Vector3,s=new Vector3;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,g=d.count;for(let x=f,_=f+g;x<_;x+=3)for(let m=0;m<3;m++){const v=o.getX(x+m),T=o.getX(x+(m+1)%3);r.fromBufferAttribute(a,v),s.fromBufferAttribute(a,T),isUniqueEdge(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,d),isUniqueEdge(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Float32BufferAttribute(t,3))}}}function isUniqueEdge(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}const Cache={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const g=c[d],x=c[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cache.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:i,onError:r});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=loading[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=f?parseInt(f):0,x=g!==0;let _=0;const m=new ReadableStream({start(v){T();function T(){d.read().then(({done:M,value:b})=>{if(M)v.close();else{_+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:g});for(let N=0,B=u.length;N<B;N++){const A=u[N];A.onProgress&&A.onProgress(E)}v.enqueue(b),T()}})}}});return new Response(m)}else throw new HttpError(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(x=>g.decode(x))}}}).then(c=>{Cache.add(e,c);const u=loading[e];delete loading[e];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onLoad&&g.onLoad(c)}}).catch(c=>{const u=loading[e];if(u===void 0)throw this.manager.itemError(e),c;delete loading[e];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Cache.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=createElementNS("img");function l(){u(),Cache.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=new Texture,a=new ImageLoader(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class InstancedBufferGeometry extends BufferGeometry{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class BufferGeometryLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new FileLoader(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(g,x){if(t[x]!==void 0)return t[x];const m=g.interleavedBuffers[x],v=s(g,m.buffer),T=getTypedArray(m.type,v),M=new InterleavedBuffer(T,m.stride);return M.uuid=m.uuid,t[x]=M,M}function s(g,x){if(i[x]!==void 0)return i[x];const m=g.arrayBuffers[x],v=new Uint32Array(m).buffer;return i[x]=v,v}const a=e.isInstancedBufferGeometry?new InstancedBufferGeometry:new BufferGeometry,o=e.data.index;if(o!==void 0){const g=getTypedArray(o.type,o.array);a.setIndex(new BufferAttribute(g,1))}const l=e.data.attributes;for(const g in l){const x=l[g];let _;if(x.isInterleavedBufferAttribute){const m=r(e.data,x.data);_=new InterleavedBufferAttribute(m,x.itemSize,x.offset,x.normalized)}else{const m=getTypedArray(x.type,x.array),v=x.isInstancedBufferAttribute?InstancedBufferAttribute:BufferAttribute;_=new v(m,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),x.usage!==void 0&&_.setUsage(x.usage),x.updateRange!==void 0&&(_.updateRange.offset=x.updateRange.offset,_.updateRange.count=x.updateRange.count),a.setAttribute(g,_)}const c=e.data.morphAttributes;if(c)for(const g in c){const x=c[g],_=[];for(let m=0,v=x.length;m<v;m++){const T=x[m];let M;if(T.isInterleavedBufferAttribute){const b=r(e.data,T.data);M=new InterleavedBufferAttribute(b,T.itemSize,T.offset,T.normalized)}else{const b=getTypedArray(T.type,T.array);M=new BufferAttribute(b,T.itemSize,T.normalized)}T.name!==void 0&&(M.name=T.name),_.push(M)}a.morphAttributes[g]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let g=0,x=d.length;g!==x;++g){const _=d[g];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const g=new Vector3;f.center!==void 0&&g.fromArray(f.center),a.boundingSphere=new Sphere(g,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class InstancedInterleavedBuffer extends InterleavedBuffer{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Raycaster{constructor(e,t,i=0,r=1/0){this.ray=new Ray(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return intersectObject(e,this,i,t),i.sort(ascSort),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)intersectObject(e[r],this,i,t);return i.sort(ascSort),i}}function ascSort(n,e){return n.distance-e.distance}function intersectObject(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)intersectObject(r[s],e,t,!0)}}const _startP=new Vector3,_startEnd=new Vector3;class Line3{constructor(e=new Vector3,t=new Vector3){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_startP.subVectors(e,this.start),_startEnd.subVectors(this.end,this.start);const i=_startEnd.dot(_startEnd);let s=_startEnd.dot(_startP)/i;return t&&(s=clamp(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const VEC2_ZERO=new Vector2(0,0);new Vector3(0,0,0);new Vector3(1,0,0);new Vector3(0,1,0);new Vector3(0,0,1);const stringToImage=n=>{let e=document.createElementNS("http://www.w3.org/1999/xhtml","img");return e.src=n,e},pathFromCoords=(n,e)=>{let t="x";return t+=splitNumberToPath(n),t+="z",t+=splitNumberToPath(e),t=t.substring(0,t.length-1),t},splitNumberToPath=n=>{let e="";n<0&&(n=-n,e+="-");let t=n.toString();for(let i=0;i<t.length;i++)e+=t.charAt(i)+"/";return e},hashTile=(n,e)=>`x${n}z${e}`,generateCacheHash=()=>Math.round(Math.random()*1e6),dispatchEvent=(n,e,t={})=>{if(!(!n||!n.dispatchEvent))return n.dispatchEvent(new CustomEvent(e,{detail:t}))},alert=(n,e,t="info")=>{dispatchEvent(n,"bluemapAlert",{message:e,level:t})!==!1&&(t==="info"?console.log(`[BlueMap/${t}]`,e):t==="warning"?console.warn(`[BlueMap/${t}]`,e):t==="error"?console.error(`[BlueMap/${t}]`,e):console.debug(`[BlueMap/${t}]`,e))},htmlToElement=n=>{let e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstChild},animate=function(n,e=1e3,t=null){let i={animationStart:-1,lastFrame:-1,cancelled:!1,frame:function(r){if(this.cancelled)return;this.animationStart===-1&&(this.animationStart=r,this.lastFrame=r);let s=e===0?1:MathUtils.clamp((r-this.animationStart)/e,0,1),a=r-this.lastFrame;n(s,a),s<1?window.requestAnimationFrame(o=>this.frame(o)):t&&t(!0),this.lastFrame=r},cancel:function(){this.cancelled=!0,t&&t(!1)}};return window.requestAnimationFrame(r=>i.frame(r)),i},EasingFunctions={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>n*(2-n),easeInOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,easeInCubic:n=>n*n*n,easeOutCubic:n=>--n*n*n+1,easeInOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,easeInQuart:n=>n*n*n*n,easeOutQuart:n=>1- --n*n*n*n,easeInOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>1+--n*n*n*n*n,easeInOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n},elementOffset=n=>{let e=n.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+i,left:e.left+t}},deepEquals=(n,e)=>{if(Object.is(n,e))return!0;let t=typeof n;if(t!==typeof e||t==="number"||t==="boolean"||t==="string")return!1;if(Array.isArray(n)){let i=n.length;if(i!==e.length)return!1;for(let r=0;r<i;r++)if(!deepEquals(n[r],e[r]))return!1;return!0}for(let i in n)if(n.hasOwnProperty(i)&&!deepEquals(n[i],e[i]))return!1;return!0},softMin=(n,e,t)=>{if(n>=e)return n;let i=e-n;return i<1e-4?e:n+i*t},softMax=(n,e,t)=>{if(n<=e)return n;let i=n-e;return i<1e-4?e:n-i*t},softClamp=(n,e,t,i)=>softMax(softMin(n,e,i),t,i),vecArrToObj=(n,e=!1)=>n&&n.length>=2?e?{x:n[0],z:n[1]}:{x:n[0],y:n[1]}:{},pixel=document.createElement("canvas");pixel.width=1;pixel.height=1;const pixelContext=pixel.getContext("2d",{willReadFrequently:!0}),getPixel=(n,e,t)=>(pixelContext.drawImage(n,Math.floor(e),Math.floor(t),1,1,0,0,1,1),pixelContext.getImageData(0,0,1,1).data),SvgButton_vue_vue_type_style_index_0_lang="",_sfc_main$m={name:"SvgButton",props:{active:Boolean}};function _sfc_render$m(n,e,t,i,r,s){return openBlock(),createElementBlock("div",{class:normalizeClass(["svg-button",{active:t.active}]),onClick:e[0]||(e[0]=a=>n.$emit("action",a))},[renderSlot(n.$slots,"default")],2)}const SvgButton=_export_sfc(_sfc_main$m,[["render",_sfc_render$m]]),Compass_vue_vue_type_style_index_0_lang="";let animation$1;const _sfc_main$l={name:"Compass",components:{SvgButton},data(){return{controls:this.$bluemap.mapViewer.controlsManager.data}},computed:{style(){return{transform:"translate(-50%, -50%) rotate("+-this.controls.rotation+"rad)"}}},methods:{action(n){n.preventDefault(),animation$1&&animation$1.cancel();let e=this.controls.rotation;animation$1=animate(t=>{this.controls.rotation=e*(1-EasingFunctions.easeOutQuad(t))},300)}}},_hoisted_1$j=createBaseVNode("path",{class:"north",d:`M14.792,1.04c0.114-0.354,0.299-0.354,0.412,0l4.089,12.729c0.114,0.353-0.097,0.642-0.468,0.642\r
        l-7.651,0.001c-0.371,0-0.581-0.288-0.468-0.642L14.792,1.04z`},null,-1),_hoisted_2$e=createBaseVNode("path",{class:"south",d:`M10.707,16.23c-0.114-0.353,0.097-0.642,0.468-0.642l7.651-0.001c0.371,0,0.581,0.289,0.468,0.642\r
        l-4.086,12.73c-0.113,0.353-0.299,0.353-0.412,0L10.707,16.23z`},null,-1),_hoisted_3$d=[_hoisted_1$j,_hoisted_2$e];function _sfc_render$l(n,e,t,i,r,s){const a=resolveComponent("SvgButton");return openBlock(),createBlock(a,{class:"compass",onAction:s.action},{default:withCtx(()=>[(openBlock(),createElementBlock("svg",{viewBox:"0 0 30 30",style:normalizeStyle(s.style)},_hoisted_3$d,4))]),_:1},8,["onAction"])}const Compass=_export_sfc(_sfc_main$l,[["render",_sfc_render$l]]),DayNightSwitch_vue_vue_type_style_index_0_lang="";let animation;const _sfc_main$k={name:"DayNightSwitch",components:{SvgButton},data(){return{mapViewer:this.$bluemap.mapViewer.data}},computed:{isDay(){return this.mapViewer.uniforms.sunlightStrength.value>.6}},methods:{action(n){n.preventDefault(),animation&&animation.cancel();let e=this.mapViewer.uniforms.sunlightStrength.value,t=this.isDay?.25:1;animation=animate(i=>{let r=EasingFunctions.easeOutQuad(i);this.mapViewer.uniforms.sunlightStrength.value=e*(1-r)+t*r},300)}}},_hoisted_1$i=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M17.011,19.722c-3.778-1.613-5.533-5.982-3.921-9.76c0.576-1.348,1.505-2.432,2.631-3.204\r
        c-3.418-0.243-6.765,1.664-8.186,4.992c-1.792,4.197,0.159,9.053,4.356,10.844c3.504,1.496,7.462,0.377,9.717-2.476\r
        C20.123,20.465,18.521,20.365,17.011,19.722z`}),createBaseVNode("circle",{cx:"5.123",cy:"7.64",r:"1.196"}),createBaseVNode("circle",{cx:"23.178",cy:"5.249",r:"1.195"}),createBaseVNode("circle",{cx:"20.412",cy:"13.805",r:"1.195"}),createBaseVNode("circle",{cx:"25.878",cy:"23.654",r:"1.195"})],-1);function _sfc_render$k(n,e,t,i,r,s){const a=resolveComponent("SvgButton");return openBlock(),createBlock(a,{class:"day-night-switch",active:!s.isDay,onAction:s.action},{default:withCtx(()=>[_hoisted_1$i]),_:1},8,["active","onAction"])}const DayNightSwitch=_export_sfc(_sfc_main$k,[["render",_sfc_render$k]]),ControlsSwitch_vue_vue_type_style_index_0_lang="",_sfc_main$j={name:"ControlsSwitch",components:{SvgButton},data(){return{controls:this.$bluemap.appState.controls}},computed:{isPerspectiveView(){return this.controls.state==="perspective"},isFlatView(){return this.controls.state==="flat"},isFreeFlight(){return this.controls.state==="free"}},methods:{setPerspectiveView(){this.$bluemap.setPerspectiveView(500,this.isFreeFlight?100:0)},setFlatView(){this.$bluemap.setFlatView(500,this.isFreeFlight?100:0)},setFreeFlight(){this.$bluemap.setFreeFlight(500)}}},_hoisted_1$h={class:"controls-switch"},_hoisted_2$d=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M19.475,10.574c-0.166-0.021-0.337-0.036-0.51-0.045c-0.174-0.009-0.35-0.013-0.525-0.011\r
          c-0.176,0.002-0.353,0.01-0.526,0.024c-0.175,0.015-0.347,0.036-0.515,0.063l-13.39,2.189\r
          c-0.372,0.061-0.7,0.146-0.975,0.247c-0.276,0.102-0.5,0.221-0.66,0.349c-0.161,0.129-0.259,0.268-0.282,0.408\r
          c-0.024,0.141,0.028,0.285,0.165,0.421l5.431,5.511c0.086,0.087,0.191,0.167,0.314,0.241s0.263,0.142,0.417,0.202\r
          c0.155,0.062,0.323,0.115,0.502,0.162c0.18,0.046,0.371,0.085,0.569,0.116s0.405,0.054,0.616,0.068\r
          c0.211,0.015,0.427,0.021,0.645,0.017c0.217-0.003,0.436-0.016,0.652-0.037c0.217-0.022,0.431-0.054,0.641-0.095L27.12,17.43\r
          c0.371-0.073,0.679-0.175,0.917-0.296c0.236-0.12,0.404-0.259,0.497-0.407c0.093-0.147,0.111-0.305,0.052-0.461\r
          c-0.059-0.156-0.195-0.313-0.415-0.46l-7.089-4.742c-0.089-0.06-0.192-0.115-0.308-0.166\r
          c-0.116-0.051-0.243-0.097-0.381-0.138c-0.137-0.041-0.283-0.078-0.438-0.108C19.803,10.621,19.641,10.595,19.475,10.574`})],-1),_hoisted_3$c=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:"M22.371,4.158c1.65,0,3,1.35,3,3v15.684c0,1.65-1.35,3-3,3H7.629c-1.65,0-3-1.35-3-3V7.158c0-1.65,1.35-3,3-3H22.371z"})],-1),_hoisted_4$8=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M21.927,11.253c-0.256-0.487-0.915-0.885-1.465-0.885h-2.004c-0.55,0-0.726-0.356-0.39-0.792c0,0,0.698-0.905,0.698-2.041\r
          c0-2.08-1.687-3.767-3.767-3.767s-3.767,1.687-3.767,3.767c0,1.136,0.698,2.041,0.698,2.041c0.336,0.436,0.161,0.794-0.389,0.797\r
          l-2.005,0.01c-0.55,0.002-1.21,0.403-1.467,0.889l-3.656,6.924c-0.257,0.487-0.088,1.128,0.375,1.425l1.824,1.171\r
          c0.462,0.297,1.116,0.184,1.451-0.253l0.839-1.092c0.335-0.437,0.662-0.346,0.726,0.2l0.637,5.415\r
          c0.064,0.546,0.567,0.993,1.117,0.993h7.234c0.55,0,1.053-0.447,1.117-0.993l0.635-5.401c0.064-0.546,0.392-0.637,0.727-0.2\r
          l0.828,1.078c0.335,0.437,0.988,0.55,1.451,0.253l1.823-1.171c0.463-0.297,0.633-0.938,0.377-1.425L21.927,11.253z`})],-1);function _sfc_render$j(n,e,t,i,r,s){const a=resolveComponent("SvgButton");return openBlock(),createElementBlock("div",_hoisted_1$h,[createVNode(a,{active:s.isPerspectiveView,onAction:s.setPerspectiveView,title:n.$t("controls.perspective.tooltip")},{default:withCtx(()=>[_hoisted_2$d]),_:1},8,["active","onAction","title"]),createVNode(a,{active:s.isFlatView,onAction:s.setFlatView,title:n.$t("controls.flatView.tooltip")},{default:withCtx(()=>[_hoisted_3$c]),_:1},8,["active","onAction","title"]),r.controls.enableFreeFlight?(openBlock(),createBlock(a,{key:0,active:s.isFreeFlight,onAction:s.setFreeFlight,title:n.$t("controls.freeFlight.tooltip")},{default:withCtx(()=>[_hoisted_4$8]),_:1},8,["active","onAction","title"])):createCommentVNode("",!0)])}const ControlsSwitch=_export_sfc(_sfc_main$j,[["render",_sfc_render$j]]),MenuButton_vue_vue_type_style_index_0_lang="",_sfc_main$i={name:"MenuButton",components:{SvgButton},props:{close:Boolean,back:Boolean}},_hoisted_1$g=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("g",null,[createBaseVNode("path",{d:`M25.004,9.294c0,0.806-0.75,1.46-1.676,1.46H6.671c-0.925,0-1.674-0.654-1.674-1.46l0,0\r
    c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,7.833,25.004,8.487,25.004,9.294L25.004,9.294z`}),createBaseVNode("path",{d:`M25.004,15c0,0.807-0.75,1.461-1.676,1.461H6.671c-0.925,0-1.674-0.654-1.674-1.461l0,0\r
    c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,13.539,25.004,14.193,25.004,15L25.004,15z`}),createBaseVNode("path",{d:`M25.004,20.706c0,0.807-0.75,1.461-1.676,1.461H6.671c-0.925,0-1.674-0.654-1.674-1.461l0,0\r
    c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,19.245,25.004,19.899,25.004,20.706L25.004,20.706z`})])],-1);function _sfc_render$i(n,e,t,i,r,s){const a=resolveComponent("SvgButton");return openBlock(),createBlock(a,{class:normalizeClass(["menu-button",{close:t.close,back:t.back}])},{default:withCtx(()=>[_hoisted_1$g]),_:1},8,["class"])}const MenuButton=_export_sfc(_sfc_main$i,[["render",_sfc_render$i]]),ControlBar_vue_vue_type_style_index_0_lang="",_sfc_main$h={name:"ControlBar",components:{SvgButton,MenuButton,ControlsSwitch,DayNightSwitch,PositionInput,Compass},data(){return{appState:this.$bluemap.appState,markers:this.$bluemap.mapViewer.markers.data,mapViewer:this.$bluemap.mapViewer.data}},computed:{playerMarkerSet(){for(let n of this.markers.markerSets)if(n.id==="bm-players")return n;return{id:"bm-players",label:"Players",markerSets:[],markers:[],fake:!0}},showMapMenu(){return this.mapViewer.mapState==="loading"||this.mapViewer.mapState==="loaded"}},methods:{openPlayerList(){let n=this.playerMarkerSet;this.appState.menu.openPage("markers",this.$t("players.title"),{markerSet:n})}}},_hoisted_1$f={class:"control-bar"},_hoisted_2$c=createBaseVNode("div",{class:"space thin-hide"},null,-1),_hoisted_3$b=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("polygon",{points:"26.708,22.841 19.049,25.186 11.311,20.718 3.292,22.841 7.725,5.96 13.475,4.814 19.314,7.409 25.018,6.037 "})],-1),_hoisted_4$7=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M15,3.563c-4.459,0-8.073,3.615-8.073,8.073c0,6.483,8.196,14.802,8.196,14.802s7.951-8.013,7.951-14.802\r
			C23.073,7.177,19.459,3.563,15,3.563z M15,15.734c-2.263,0-4.098-1.835-4.098-4.099c0-2.263,1.835-4.098,4.098-4.098\r
			c2.263,0,4.098,1.835,4.098,4.098C19.098,13.899,17.263,15.734,15,15.734z`})],-1),_hoisted_5$3=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("g",null,[createBaseVNode("path",{d:`M8.95,14.477c0.409-0.77,1.298-1.307,2.164-1.309h0.026c-0.053-0.234-0.087-0.488-0.087-0.755\r
			c0-1.381,0.715-2.595,1.791-3.301c-0.01,0-0.021-0.006-0.03-0.006h-1.427c-0.39,0-0.514-0.251-0.276-0.563\r
			c0,0,0.497-0.645,0.497-1.452c0-1.48-1.2-2.681-2.679-2.681c-1.481,0-2.679,1.2-2.679,2.681c0,0.807,0.496,1.452,0.496,1.452\r
			c0.24,0.311,0.114,0.565-0.275,0.565L5.042,9.118C4.649,9.119,4.182,9.405,3.998,9.75l-2.601,4.927\r
			c-0.184,0.347-0.062,0.802,0.265,1.015l1.297,0.83c0.332,0.213,0.794,0.135,1.034-0.18l0.598-0.775\r
			c0.238-0.31,0.471-0.245,0.516,0.141l0.454,3.854c0.035,0.311,0.272,0.566,0.564,0.66c0.018-0.279,0.087-0.561,0.225-0.82\r
			L8.95,14.477z`}),createBaseVNode("path",{d:`M28.604,14.677l-2.597-4.94c-0.185-0.346-0.65-0.631-1.042-0.631h-1.428c-0.39,0-0.514-0.251-0.274-0.563\r
			c0,0,0.496-0.645,0.496-1.452c0-1.48-1.2-2.681-2.68-2.681c-1.481,0-2.679,1.2-2.679,2.681c0,0.807,0.496,1.452,0.496,1.452\r
			c0.239,0.311,0.114,0.565-0.275,0.565l-1.428,0.009c-0.005,0-0.009,0.002-0.015,0.002c1.067,0.708,1.774,1.917,1.774,3.292\r
			c0,0.263-0.031,0.513-0.084,0.744h0.02c0.868,0,1.758,0.537,2.166,1.305l2.598,4.944c0.137,0.262,0.205,0.539,0.222,0.818\r
			c0.296-0.092,0.538-0.35,0.574-0.664l0.451-3.842c0.044-0.389,0.28-0.452,0.519-0.143l0.588,0.768\r
			c0.239,0.313,0.702,0.391,1.033,0.182l1.297-0.833C28.667,15.479,28.787,15.026,28.604,14.677z`})]),createBaseVNode("path",{d:`M19.932,15.058c-0.184-0.346-0.651-0.63-1.043-0.63h-1.427c-0.39,0-0.515-0.252-0.275-0.564c0,0,0.496-0.645,0.496-1.451\r
		c0-1.479-1.199-2.68-2.679-2.68c-1.482,0-2.679,1.201-2.679,2.68c0,0.806,0.496,1.451,0.496,1.451\r
		c0.24,0.312,0.114,0.566-0.275,0.566l-1.427,0.009c-0.393,0.001-0.861,0.287-1.045,0.632l-2.602,4.925\r
		c-0.185,0.348-0.062,0.803,0.266,1.016l1.297,0.832c0.332,0.213,0.794,0.133,1.034-0.18l0.598-0.775\r
		c0.239-0.311,0.472-0.246,0.517,0.141l0.454,3.854c0.043,0.389,0.403,0.705,0.794,0.705h5.148c0.392,0,0.749-0.316,0.794-0.705\r
		l0.45-3.844c0.045-0.389,0.282-0.451,0.52-0.143l0.587,0.768c0.239,0.313,0.703,0.393,1.033,0.182l1.297-0.832\r
		c0.331-0.213,0.451-0.666,0.269-1.016L19.932,15.058z`})],-1),_hoisted_6$3=createBaseVNode("div",{class:"space thin-hide greedy"},null,-1),_hoisted_7$3=createBaseVNode("div",{class:"space thin-hide"},null,-1),_hoisted_8$3=createBaseVNode("div",{class:"space thin-hide"},null,-1),_hoisted_9$2=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("rect",{x:"7.085",y:"4.341",transform:"matrix(0.9774 0.2116 -0.2116 0.9774 3.2046 -1.394)",width:"2.063",height:"19.875"}),createBaseVNode("path",{d:`M12.528,5.088c0,0,3.416-0.382,4.479-0.031c1.005,0.332,2.375,2.219,3.382,2.545c1.096,0.354,4.607-0.089,4.607-0.089\r
      l-2.738,8.488c0,0-3.285,0.641-4.344,0.381c-1.049-0.257-2.607-2.015-3.642-2.324c-0.881-0.264-3.678-0.052-3.678-0.052\r
      L12.528,5.088z`})],-1);function _sfc_render$h(n,e,t,i,r,s){const a=resolveComponent("MenuButton"),o=resolveComponent("SvgButton"),l=resolveComponent("DayNightSwitch"),c=resolveComponent("ControlsSwitch"),u=resolveComponent("PositionInput"),d=resolveComponent("Compass");return openBlock(),createElementBlock("div",_hoisted_1$f,[createVNode(a,{close:r.appState.menu.isOpen,back:!1,onAction:e[0]||(e[0]=f=>r.appState.menu.reOpenPage()),title:n.$t("menu.tooltip")},null,8,["close","title"]),_hoisted_2$c,r.appState.maps.length>0?(openBlock(),createBlock(o,{key:0,class:"thin-hide",title:n.$t("maps.tooltip"),onAction:e[1]||(e[1]=f=>r.appState.menu.openPage("maps",n.$t("maps.title")))},{default:withCtx(()=>[_hoisted_3$b]),_:1},8,["title"])):createCommentVNode("",!0),s.showMapMenu&&(r.markers.markerSets.length>0||r.markers.markers.length>0)?(openBlock(),createBlock(o,{key:1,class:"thin-hide",title:n.$t("markers.tooltip"),onAction:e[2]||(e[2]=f=>r.appState.menu.openPage("markers",n.$t("markers.title"),{markerSet:r.markers}))},{default:withCtx(()=>[_hoisted_4$7]),_:1},8,["title"])):createCommentVNode("",!0),s.showMapMenu&&!s.playerMarkerSet.fake?(openBlock(),createBlock(o,{key:2,class:"thin-hide",title:n.$t("players.tooltip"),onAction:s.openPlayerList},{default:withCtx(()=>[_hoisted_5$3]),_:1},8,["title","onAction"])):createCommentVNode("",!0),_hoisted_6$3,s.showMapMenu?(openBlock(),createBlock(l,{key:3,class:"thin-hide",title:n.$t("lighting.dayNightSwitch.tooltip")},null,8,["title"])):createCommentVNode("",!0),_hoisted_7$3,s.showMapMenu?(openBlock(),createBlock(c,{key:4,class:"thin-hide"})):createCommentVNode("",!0),_hoisted_8$3,s.showMapMenu?(openBlock(),createBlock(o,{key:5,class:"thin-hide",title:n.$t("resetCamera.tooltip"),onAction:e[3]||(e[3]=f=>n.$bluemap.resetCamera())},{default:withCtx(()=>[_hoisted_9$2]),_:1},8,["title"])):createCommentVNode("",!0),s.showMapMenu?(openBlock(),createBlock(u,{key:6,class:"pos-input"})):createCommentVNode("",!0),s.showMapMenu?(openBlock(),createBlock(d,{key:7,title:n.$t("compass.tooltip")},null,8,["title"])):createCommentVNode("",!0)])}const ControlBar=_export_sfc(_sfc_main$h,[["render",_sfc_render$h]]),SideMenu_vue_vue_type_style_index_0_lang="",_sfc_main$g={name:"SideMenu",components:{MenuButton},props:{title:{type:String,default:"Menu"},open:{type:Boolean,default:!0},back:Boolean},data(){return{rendered:!1}},methods:{async buttonEnterAnimation(){this.rendered=!1,await this.$nextTick(),await this.$nextTick(),this.rendered=!0}}},_hoisted_1$e={key:0,class:"side-menu"},_hoisted_2$b={class:"title"},_hoisted_3$a={class:"content"};function _sfc_render$g(n,e,t,i,r,s){const a=resolveComponent("MenuButton");return openBlock(),createBlock(Transition,{name:"side-menu",onEnter:e[2]||(e[2]=o=>{s.buttonEnterAnimation(),n.$emit("enter",o)})},{default:withCtx(()=>[t.open?(openBlock(),createElementBlock("div",_hoisted_1$e,[createVNode(a,{close:t.open&&r.rendered,back:t.back,onAction:e[0]||(e[0]=o=>n.$emit("back",o))},null,8,["close","back"]),t.open&&t.back?(openBlock(),createBlock(a,{key:0,class:"full-close",close:!0,onAction:e[1]||(e[1]=o=>n.$emit("close",o))})):createCommentVNode("",!0),createBaseVNode("div",_hoisted_2$b,toDisplayString$1(t.title),1),createBaseVNode("div",_hoisted_3$a,[renderSlot(n.$slots,"default")])])):createCommentVNode("",!0)]),_:3})}const SideMenu=_export_sfc(_sfc_main$g,[["render",_sfc_render$g]]),SimpleButton_vue_vue_type_style_index_0_lang="",_sfc_main$f={name:"SimpleButton",props:{submenu:Boolean,active:{type:Boolean,default:!1}}},_hoisted_1$d={class:"label"},_hoisted_2$a={key:0,class:"submenu-icon"},_hoisted_3$9=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M25.004,9.294c0,0.806-0.75,1.46-1.676,1.46H6.671c-0.925,0-1.674-0.654-1.674-1.46l0,0\r
	c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,7.833,25.004,8.487,25.004,9.294L25.004,9.294z`}),createBaseVNode("path",{d:`M25.004,20.706c0,0.807-0.75,1.461-1.676,1.461H6.671c-0.925,0-1.674-0.654-1.674-1.461l0,0\r
	c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,19.245,25.004,19.899,25.004,20.706L25.004,20.706z`})],-1),_hoisted_4$6=[_hoisted_3$9];function _sfc_render$f(n,e,t,i,r,s){return openBlock(),createElementBlock("div",{class:normalizeClass(["simple-button",{active:t.active}]),onClick:e[0]||(e[0]=a=>n.$emit("action"))},[createBaseVNode("div",_hoisted_1$d,[renderSlot(n.$slots,"default")]),t.submenu?(openBlock(),createElementBlock("div",_hoisted_2$a,_hoisted_4$6)):createCommentVNode("",!0)],2)}const SimpleButton=_export_sfc(_sfc_main$f,[["render",_sfc_render$f]]),Group_vue_vue_type_style_index_0_lang="",_sfc_main$e={name:"Group",props:{title:String}},_hoisted_1$c={class:"group"},_hoisted_2$9={class:"title"},_hoisted_3$8={class:"content"};function _sfc_render$e(n,e,t,i,r,s){return openBlock(),createElementBlock("div",_hoisted_1$c,[createBaseVNode("span",_hoisted_2$9,toDisplayString$1(t.title),1),createBaseVNode("div",_hoisted_3$8,[renderSlot(n.$slots,"default")])])}const Group=_export_sfc(_sfc_main$e,[["render",_sfc_render$e]]),Slider_vue_vue_type_style_index_0_lang="";function countDecimals(n){return Math.floor(n)===n?0:n.toString().split(".")[1].length||0}const _sfc_main$d={name:"Slider",props:{value:Number,min:Number,max:Number,step:Number,formatter:{type:Function,default:function(n){return parseFloat(n).toFixed(countDecimals(this.step))}}}},_hoisted_1$b={class:"slider"},_hoisted_2$8={class:"label"},_hoisted_3$7={class:"value"},_hoisted_4$5=["min","max","step","value"];function _sfc_render$d(n,e,t,i,r,s){return openBlock(),createElementBlock("div",_hoisted_1$b,[createBaseVNode("div",_hoisted_2$8,[renderSlot(n.$slots,"default"),createTextVNode(": "),createBaseVNode("span",_hoisted_3$7,toDisplayString$1(t.formatter(t.value)),1)]),createBaseVNode("label",null,[createBaseVNode("input",{type:"range",min:t.min,max:t.max,step:t.step,value:t.value,onInput:e[0]||(e[0]=a=>n.$emit("update",parseFloat(a.target.value))),onChange:e[1]||(e[1]=a=>n.$emit("lazy",parseFloat(a.target.value)))},null,40,_hoisted_4$5)])])}const Slider=_export_sfc(_sfc_main$d,[["render",_sfc_render$d]]),SwitchHandle_vue_vue_type_style_index_0_lang="",_sfc_main$c={name:"SwitchHandle",props:{on:Boolean}};function _sfc_render$c(n,e,t,i,r,s){return openBlock(),createElementBlock("div",{class:normalizeClass(["switch",{on:t.on}])},null,2)}const SwitchHandle=_export_sfc(_sfc_main$c,[["render",_sfc_render$c]]),SwitchButton_vue_vue_type_style_index_0_lang="",_sfc_main$b={name:"SwitchButton",components:{SwitchHandle},props:{on:Boolean}},_hoisted_1$a={class:"label"};function _sfc_render$b(n,e,t,i,r,s){const a=resolveComponent("SwitchHandle");return openBlock(),createElementBlock("div",{class:"switch-button",onClick:e[0]||(e[0]=o=>n.$emit("action"))},[createBaseVNode("div",_hoisted_1$a,[renderSlot(n.$slots,"default")]),createVNode(a,{on:t.on},null,8,["on"])])}const SwitchButton=_export_sfc(_sfc_main$b,[["render",_sfc_render$b]]);/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const inBrowser=typeof window<"u",hasSymbol=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",makeSymbol=n=>hasSymbol?Symbol(n):n,generateFormatCacheKey=(n,e,t)=>friendlyJSONstringify({l:n,k:e,s:t}),friendlyJSONstringify=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),isNumber=n=>typeof n=="number"&&isFinite(n),isDate=n=>toTypeString(n)==="[object Date]",isRegExp=n=>toTypeString(n)==="[object RegExp]",isEmptyObject=n=>isPlainObject(n)&&Object.keys(n).length===0;function warn(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const assign=Object.assign;function escapeHtml(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(n,e){return hasOwnProperty.call(n,e)}const isArray=Array.isArray,isFunction=n=>typeof n=="function",isString=n=>typeof n=="string",isBoolean=n=>typeof n=="boolean",isObject=n=>n!==null&&typeof n=="object",objectToString=Object.prototype.toString,toTypeString=n=>objectToString.call(n),isPlainObject=n=>toTypeString(n)==="[object Object]",toDisplayString=n=>n==null?"":isArray(n)||isPlainObject(n)&&n.toString===objectToString?JSON.stringify(n,null,2):String(n);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const CompileErrorCodes={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function createCompileError(n,e,t={}){const{domain:i,messages:r,args:s}=t,a=n,o=new SyntaxError(String(a));return o.code=n,e&&(o.location=e),o.domain=i,o}function defaultOnError(n){throw n}function createPosition(n,e,t){return{line:n,column:e,offset:t}}function createLocation(n,e,t){const i={start:n,end:e};return t!=null&&(i.source=t),i}const CHAR_SP=" ",CHAR_CR="\r",CHAR_LF=`
`,CHAR_LS=String.fromCharCode(8232),CHAR_PS=String.fromCharCode(8233);function createScanner(n){const e=n;let t=0,i=1,r=1,s=0;const a=B=>e[B]===CHAR_CR&&e[B+1]===CHAR_LF,o=B=>e[B]===CHAR_LF,l=B=>e[B]===CHAR_PS,c=B=>e[B]===CHAR_LS,u=B=>a(B)||o(B)||l(B)||c(B),d=()=>t,f=()=>i,g=()=>r,x=()=>s,_=B=>a(B)||l(B)||c(B)?CHAR_LF:e[B],m=()=>_(t),v=()=>_(t+s);function T(){return s=0,u(t)&&(i++,r=0),a(t)&&t++,t++,r++,e[t]}function M(){return a(t+s)&&s++,s++,e[t+s]}function b(){t=0,i=1,r=1,s=0}function E(B=0){s=B}function N(){const B=t+s;for(;B!==t;)T();s=0}return{index:d,line:f,column:g,peekOffset:x,charAt:_,currentChar:m,currentPeek:v,next:T,peek:M,reset:b,resetPeek:E,skipToPeek:N}}const EOF=void 0,LITERAL_DELIMITER="'",ERROR_DOMAIN$1="tokenizer";function createTokenizer(n,e={}){const t=e.location!==!1,i=createScanner(n),r=()=>i.index(),s=()=>createPosition(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function d(y,C,I,...F){const $=c();if(C.column+=I,C.offset+=I,u){const X=createLocation($.startLoc,C),Z=createCompileError(y,X,{domain:ERROR_DOMAIN$1,args:F});u(Z)}}function f(y,C,I){y.endLoc=s(),y.currentType=C;const F={type:C};return t&&(F.loc=createLocation(y.startLoc,y.endLoc)),I!=null&&(F.value=I),F}const g=y=>f(y,14);function x(y,C){return y.currentChar()===C?(y.next(),C):(d(CompileErrorCodes.EXPECTED_TOKEN,s(),0,C),"")}function _(y){let C="";for(;y.currentPeek()===CHAR_SP||y.currentPeek()===CHAR_LF;)C+=y.currentPeek(),y.peek();return C}function m(y){const C=_(y);return y.skipToPeek(),C}function v(y){if(y===EOF)return!1;const C=y.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function T(y){if(y===EOF)return!1;const C=y.charCodeAt(0);return C>=48&&C<=57}function M(y,C){const{currentType:I}=C;if(I!==2)return!1;_(y);const F=v(y.currentPeek());return y.resetPeek(),F}function b(y,C){const{currentType:I}=C;if(I!==2)return!1;_(y);const F=y.currentPeek()==="-"?y.peek():y.currentPeek(),$=T(F);return y.resetPeek(),$}function E(y,C){const{currentType:I}=C;if(I!==2)return!1;_(y);const F=y.currentPeek()===LITERAL_DELIMITER;return y.resetPeek(),F}function N(y,C){const{currentType:I}=C;if(I!==8)return!1;_(y);const F=y.currentPeek()===".";return y.resetPeek(),F}function B(y,C){const{currentType:I}=C;if(I!==9)return!1;_(y);const F=v(y.currentPeek());return y.resetPeek(),F}function A(y,C){const{currentType:I}=C;if(!(I===8||I===12))return!1;_(y);const F=y.currentPeek()===":";return y.resetPeek(),F}function O(y,C){const{currentType:I}=C;if(I!==10)return!1;const F=()=>{const X=y.currentPeek();return X==="{"?v(y.peek()):X==="@"||X==="%"||X==="|"||X===":"||X==="."||X===CHAR_SP||!X?!1:X===CHAR_LF?(y.peek(),F()):v(X)},$=F();return y.resetPeek(),$}function U(y){_(y);const C=y.currentPeek()==="|";return y.resetPeek(),C}function q(y){const C=_(y),I=y.currentPeek()==="%"&&y.peek()==="{";return y.resetPeek(),{isModulo:I,hasSpace:C.length>0}}function ne(y,C=!0){const I=($=!1,X="",Z=!1)=>{const he=y.currentPeek();return he==="{"?X==="%"?!1:$:he==="@"||!he?X==="%"?!0:$:he==="%"?(y.peek(),I($,"%",!0)):he==="|"?X==="%"||Z?!0:!(X===CHAR_SP||X===CHAR_LF):he===CHAR_SP?(y.peek(),I(!0,CHAR_SP,Z)):he===CHAR_LF?(y.peek(),I(!0,CHAR_LF,Z)):!0},F=I();return C&&y.resetPeek(),F}function G(y,C){const I=y.currentChar();return I===EOF?EOF:C(I)?(y.next(),I):null}function H(y){return G(y,I=>{const F=I.charCodeAt(0);return F>=97&&F<=122||F>=65&&F<=90||F>=48&&F<=57||F===95||F===36})}function oe(y){return G(y,I=>{const F=I.charCodeAt(0);return F>=48&&F<=57})}function ce(y){return G(y,I=>{const F=I.charCodeAt(0);return F>=48&&F<=57||F>=65&&F<=70||F>=97&&F<=102})}function re(y){let C="",I="";for(;C=oe(y);)I+=C;return I}function Q(y){m(y);const C=y.currentChar();return C!=="%"&&d(CompileErrorCodes.EXPECTED_TOKEN,s(),0,C),y.next(),"%"}function pe(y){let C="";for(;;){const I=y.currentChar();if(I==="{"||I==="}"||I==="@"||I==="|"||!I)break;if(I==="%")if(ne(y))C+=I,y.next();else break;else if(I===CHAR_SP||I===CHAR_LF)if(ne(y))C+=I,y.next();else{if(U(y))break;C+=I,y.next()}else C+=I,y.next()}return C}function me(y){m(y);let C="",I="";for(;C=H(y);)I+=C;return y.currentChar()===EOF&&d(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE,s(),0),I}function ee(y){m(y);let C="";return y.currentChar()==="-"?(y.next(),C+=`-${re(y)}`):C+=re(y),y.currentChar()===EOF&&d(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE,s(),0),C}function te(y){m(y),x(y,"'");let C="",I="";const F=X=>X!==LITERAL_DELIMITER&&X!==CHAR_LF;for(;C=G(y,F);)C==="\\"?I+=_e(y):I+=C;const $=y.currentChar();return $===CHAR_LF||$===EOF?(d(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),$===CHAR_LF&&(y.next(),x(y,"'")),I):(x(y,"'"),I)}function _e(y){const C=y.currentChar();switch(C){case"\\":case"'":return y.next(),`\\${C}`;case"u":return Se(y,C,4);case"U":return Se(y,C,6);default:return d(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function Se(y,C,I){x(y,C);let F="";for(let $=0;$<I;$++){const X=ce(y);if(!X){d(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${F}${y.currentChar()}`);break}F+=X}return`\\${C}${F}`}function Te(y){m(y);let C="",I="";const F=$=>$!=="{"&&$!=="}"&&$!==CHAR_SP&&$!==CHAR_LF;for(;C=G(y,F);)I+=C;return I}function ie(y){let C="",I="";for(;C=H(y);)I+=C;return I}function Ae(y){const C=(I=!1,F)=>{const $=y.currentChar();return $==="{"||$==="%"||$==="@"||$==="|"||!$||$===CHAR_SP?F:$===CHAR_LF?(F+=$,y.next(),C(I,F)):(F+=$,y.next(),C(!0,F))};return C(!1,"")}function Ee(y){m(y);const C=x(y,"|");return m(y),C}function we(y,C){let I=null;switch(y.currentChar()){case"{":return C.braceNest>=1&&d(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),y.next(),I=f(C,2,"{"),m(y),C.braceNest++,I;case"}":return C.braceNest>0&&C.currentType===2&&d(CompileErrorCodes.EMPTY_PLACEHOLDER,s(),0),y.next(),I=f(C,3,"}"),C.braceNest--,C.braceNest>0&&m(y),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),I;case"@":return C.braceNest>0&&d(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE,s(),0),I=xe(y,C)||g(C),C.braceNest=0,I;default:let $=!0,X=!0,Z=!0;if(U(y))return C.braceNest>0&&d(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE,s(),0),I=f(C,1,Ee(y)),C.braceNest=0,C.inLinked=!1,I;if(C.braceNest>0&&(C.currentType===5||C.currentType===6||C.currentType===7))return d(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,ke(y,C);if($=M(y,C))return I=f(C,5,me(y)),m(y),I;if(X=b(y,C))return I=f(C,6,ee(y)),m(y),I;if(Z=E(y,C))return I=f(C,7,te(y)),m(y),I;if(!$&&!X&&!Z)return I=f(C,13,Te(y)),d(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,I.value),m(y),I;break}return I}function xe(y,C){const{currentType:I}=C;let F=null;const $=y.currentChar();switch((I===8||I===9||I===12||I===10)&&($===CHAR_LF||$===CHAR_SP)&&d(CompileErrorCodes.INVALID_LINKED_FORMAT,s(),0),$){case"@":return y.next(),F=f(C,8,"@"),C.inLinked=!0,F;case".":return m(y),y.next(),f(C,9,".");case":":return m(y),y.next(),f(C,10,":");default:return U(y)?(F=f(C,1,Ee(y)),C.braceNest=0,C.inLinked=!1,F):N(y,C)||A(y,C)?(m(y),xe(y,C)):B(y,C)?(m(y),f(C,12,ie(y))):O(y,C)?(m(y),$==="{"?we(y,C)||F:f(C,11,Ae(y))):(I===8&&d(CompileErrorCodes.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,ke(y,C))}}function ke(y,C){let I={type:14};if(C.braceNest>0)return we(y,C)||g(C);if(C.inLinked)return xe(y,C)||g(C);switch(y.currentChar()){case"{":return we(y,C)||g(C);case"}":return d(CompileErrorCodes.UNBALANCED_CLOSING_BRACE,s(),0),y.next(),f(C,3,"}");case"@":return xe(y,C)||g(C);default:if(U(y))return I=f(C,1,Ee(y)),C.braceNest=0,C.inLinked=!1,I;const{isModulo:$,hasSpace:X}=q(y);if($)return X?f(C,0,pe(y)):f(C,4,Q(y));if(ne(y))return f(C,0,pe(y));break}return I}function P(){const{currentType:y,offset:C,startLoc:I,endLoc:F}=l;return l.lastType=y,l.lastOffset=C,l.lastStartLoc=I,l.lastEndLoc=F,l.offset=r(),l.startLoc=s(),i.currentChar()===EOF?f(l,14):ke(i,l)}return{nextToken:P,currentOffset:r,currentPosition:s,context:c}}const ERROR_DOMAIN="parser",KNOWN_ESCAPES=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function fromEscapeSequence(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function createParser(n={}){const e=n.location!==!1,{onError:t}=n;function i(v,T,M,b,...E){const N=v.currentPosition();if(N.offset+=b,N.column+=b,t){const B=createLocation(M,N),A=createCompileError(T,B,{domain:ERROR_DOMAIN,args:E});t(A)}}function r(v,T,M){const b={type:v,start:T,end:T};return e&&(b.loc={start:M,end:M}),b}function s(v,T,M,b){v.end=T,b&&(v.type=b),e&&v.loc&&(v.loc.end=M)}function a(v,T){const M=v.context(),b=r(3,M.offset,M.startLoc);return b.value=T,s(b,v.currentOffset(),v.currentPosition()),b}function o(v,T){const M=v.context(),{lastOffset:b,lastStartLoc:E}=M,N=r(5,b,E);return N.index=parseInt(T,10),v.nextToken(),s(N,v.currentOffset(),v.currentPosition()),N}function l(v,T){const M=v.context(),{lastOffset:b,lastStartLoc:E}=M,N=r(4,b,E);return N.key=T,v.nextToken(),s(N,v.currentOffset(),v.currentPosition()),N}function c(v,T){const M=v.context(),{lastOffset:b,lastStartLoc:E}=M,N=r(9,b,E);return N.value=T.replace(KNOWN_ESCAPES,fromEscapeSequence),v.nextToken(),s(N,v.currentOffset(),v.currentPosition()),N}function u(v){const T=v.nextToken(),M=v.context(),{lastOffset:b,lastStartLoc:E}=M,N=r(8,b,E);return T.type!==12?(i(v,CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),N.value="",s(N,b,E),{nextConsumeToken:T,node:N}):(T.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,getTokenCaption(T)),N.value=T.value||"",s(N,v.currentOffset(),v.currentPosition()),{node:N})}function d(v,T){const M=v.context(),b=r(7,M.offset,M.startLoc);return b.value=T,s(b,v.currentOffset(),v.currentPosition()),b}function f(v){const T=v.context(),M=r(6,T.offset,T.startLoc);let b=v.nextToken();if(b.type===9){const E=u(v);M.modifier=E.node,b=E.nextConsumeToken||v.nextToken()}switch(b.type!==10&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(b)),b=v.nextToken(),b.type===2&&(b=v.nextToken()),b.type){case 11:b.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(b)),M.key=d(v,b.value||"");break;case 5:b.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(b)),M.key=l(v,b.value||"");break;case 6:b.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(b)),M.key=o(v,b.value||"");break;case 7:b.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(b)),M.key=c(v,b.value||"");break;default:i(v,CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY,T.lastStartLoc,0);const E=v.context(),N=r(7,E.offset,E.startLoc);return N.value="",s(N,E.offset,E.startLoc),M.key=N,s(M,E.offset,E.startLoc),{nextConsumeToken:b,node:M}}return s(M,v.currentOffset(),v.currentPosition()),{node:M}}function g(v){const T=v.context(),M=T.currentType===1?v.currentOffset():T.offset,b=T.currentType===1?T.endLoc:T.startLoc,E=r(2,M,b);E.items=[];let N=null;do{const O=N||v.nextToken();switch(N=null,O.type){case 0:O.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(O)),E.items.push(a(v,O.value||""));break;case 6:O.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(O)),E.items.push(o(v,O.value||""));break;case 5:O.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(O)),E.items.push(l(v,O.value||""));break;case 7:O.value==null&&i(v,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,getTokenCaption(O)),E.items.push(c(v,O.value||""));break;case 8:const U=f(v);E.items.push(U.node),N=U.nextConsumeToken||null;break}}while(T.currentType!==14&&T.currentType!==1);const B=T.currentType===1?T.lastOffset:v.currentOffset(),A=T.currentType===1?T.lastEndLoc:v.currentPosition();return s(E,B,A),E}function x(v,T,M,b){const E=v.context();let N=b.items.length===0;const B=r(1,T,M);B.cases=[],B.cases.push(b);do{const A=g(v);N||(N=A.items.length===0),B.cases.push(A)}while(E.currentType!==14);return N&&i(v,CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),s(B,v.currentOffset(),v.currentPosition()),B}function _(v){const T=v.context(),{offset:M,startLoc:b}=T,E=g(v);return T.currentType===14?E:x(v,M,b,E)}function m(v){const T=createTokenizer(v,assign({},n)),M=T.context(),b=r(0,M.offset,M.startLoc);return e&&b.loc&&(b.loc.source=v),b.body=_(T),M.currentType!==14&&i(T,CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,v[M.offset]||""),s(b,T.currentOffset(),T.currentPosition()),b}return{parse:m}}function getTokenCaption(n){if(n.type===14)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function createTransformer(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:s=>(t.helpers.add(s),s)}}function traverseNodes(n,e){for(let t=0;t<n.length;t++)traverseNode(n[t],e)}function traverseNode(n,e){switch(n.type){case 1:traverseNodes(n.cases,e),e.helper("plural");break;case 2:traverseNodes(n.items,e);break;case 6:traverseNode(n.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function transform(n,e={}){const t=createTransformer(n);t.helper("normalize"),n.body&&traverseNode(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function createCodeGenerator(n,e){const{sourceMap:t,filename:i,breakLineCode:r,needIndent:s}=e,a={source:n.loc.source,filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0},o=()=>a;function l(_,m){a.code+=_}function c(_,m=!0){const v=m?r:"";l(s?v+"  ".repeat(_):v)}function u(_=!0){const m=++a.indentLevel;_&&c(m)}function d(_=!0){const m=--a.indentLevel;_&&c(m)}function f(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:d,newline:f,helper:_=>`_${_}`,needIndent:()=>a.needIndent}}function generateLinkedNode(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),generateNode(n,e.key),e.modifier?(n.push(", "),generateNode(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function generateMessageNode(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const r=e.items.length;for(let s=0;s<r&&(generateNode(n,e.items[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}function generatePluralNode(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const r=e.cases.length;for(let s=0;s<r&&(generateNode(n,e.cases[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}}function generateResource(n,e){e.body?generateNode(n,e.body):n.push("null")}function generateNode(n,e){const{helper:t}=n;switch(e.type){case 0:generateResource(n,e);break;case 1:generatePluralNode(n,e);break;case 2:generateMessageNode(n,e);break;case 6:generateLinkedNode(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break}}const generate=(n,e={})=>{const t=isString(e.mode)?e.mode:"normal",i=isString(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,a=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],l=createCodeGenerator(n,{mode:t,filename:i,sourceMap:r,breakLineCode:s,needIndent:a});l.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${o.map(d=>`${d}: _${d}`).join(", ")} } = ctx`),l.newline()),l.push("return "),generateNode(l,n),l.deindent(a),l.push("}");const{code:c,map:u}=l.context();return{ast:n,code:c,map:u?u.toJSON():void 0}};function baseCompile(n,e={}){const t=assign({},e),r=createParser(t).parse(n);return transform(r,t),generate(r,t)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const IntlifyDevToolsHooks={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const pathStateMachine=[];pathStateMachine[0]={w:[0],i:[3,0],["["]:[4],o:[7]};pathStateMachine[1]={w:[1],["."]:[2],["["]:[4],o:[7]};pathStateMachine[2]={w:[2],i:[3,0],[0]:[3,0]};pathStateMachine[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};pathStateMachine[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};pathStateMachine[5]={["'"]:[4,0],o:8,l:[5,0]};pathStateMachine[6]={['"']:[4,0],o:8,l:[6,0]};const literalValueRE=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function isLiteral(n){return literalValueRE.test(n)}function stripQuotes(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function getPathCharType(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function formatSubPath(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:isLiteral(e)?stripQuotes(e):"*"+e}function parse(n){const e=[];let t=-1,i=0,r=0,s,a,o,l,c,u,d;const f=[];f[0]=()=>{a===void 0?a=o:a+=o},f[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},f[2]=()=>{f[0](),r++},f[3]=()=>{if(r>0)r--,i=4,f[0]();else{if(r=0,a===void 0||(a=formatSubPath(a),a===!1))return!1;f[1]()}};function g(){const x=n[t+1];if(i===5&&x==="'"||i===6&&x==='"')return t++,o="\\"+x,f[0](),!0}for(;i!==null;)if(t++,s=n[t],!(s==="\\"&&g())){if(l=getPathCharType(s),d=pathStateMachine[i],c=d[l]||d.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const cache=new Map;function resolveWithKeyValue(n,e){return isObject(n)?n[e]:null}function resolveValue(n,e){if(!isObject(n))return null;let t=cache.get(e);if(t||(t=parse(e),t&&cache.set(e,t)),!t)return null;const i=t.length;let r=n,s=0;for(;s<i;){const a=r[t[s]];if(a===void 0)return null;r=a,s++}return r}const DEFAULT_MODIFIER=n=>n,DEFAULT_MESSAGE=n=>"",DEFAULT_MESSAGE_DATA_TYPE="text",DEFAULT_NORMALIZE=n=>n.length===0?"":n.join(""),DEFAULT_INTERPOLATE=toDisplayString;function pluralDefault(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function getPluralIndex(n){const e=isNumber(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(isNumber(n.named.count)||isNumber(n.named.n))?isNumber(n.named.count)?n.named.count:isNumber(n.named.n)?n.named.n:e:e}function normalizeNamed(n,e){e.count||(e.count=n),e.n||(e.n=n)}function createMessageContext(n={}){const e=n.locale,t=getPluralIndex(n),i=isObject(n.pluralRules)&&isString(e)&&isFunction(n.pluralRules[e])?n.pluralRules[e]:pluralDefault,r=isObject(n.pluralRules)&&isString(e)&&isFunction(n.pluralRules[e])?pluralDefault:void 0,s=v=>v[i(t,v.length,r)],a=n.list||[],o=v=>a[v],l=n.named||{};isNumber(n.pluralIndex)&&normalizeNamed(t,l);const c=v=>l[v];function u(v){const T=isFunction(n.messages)?n.messages(v):isObject(n.messages)?n.messages[v]:!1;return T||(n.parent?n.parent.message(v):DEFAULT_MESSAGE)}const d=v=>n.modifiers?n.modifiers[v]:DEFAULT_MODIFIER,f=isPlainObject(n.processor)&&isFunction(n.processor.normalize)?n.processor.normalize:DEFAULT_NORMALIZE,g=isPlainObject(n.processor)&&isFunction(n.processor.interpolate)?n.processor.interpolate:DEFAULT_INTERPOLATE,x=isPlainObject(n.processor)&&isString(n.processor.type)?n.processor.type:DEFAULT_MESSAGE_DATA_TYPE,m={list:o,named:c,plural:s,linked:(v,...T)=>{const[M,b]=T;let E="text",N="";T.length===1?isObject(M)?(N=M.modifier||N,E=M.type||E):isString(M)&&(N=M||N):T.length===2&&(isString(M)&&(N=M||N),isString(b)&&(E=b||E));let B=u(v)(m);return E==="vnode"&&isArray(B)&&N&&(B=B[0]),N?d(N)(B,E):B},message:u,type:x,interpolate:g,normalize:f};return m}let devtools=null;IntlifyDevToolsHooks.FunctionTranslate;function createDevToolsHook(n){return e=>devtools}const CoreWarnCodes={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function fallbackWithSimple(n,e,t){return[...new Set([t,...isArray(e)?e:isObject(e)?Object.keys(e):isString(e)?[e]:[t]])]}function fallbackWithLocaleChain(n,e,t){const i=isString(t)?t:DEFAULT_LOCALE,r=n;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[t];for(;isArray(a);)a=appendBlockToChain(s,a,e);const o=isArray(e)||!isPlainObject(e)?e:e.default?e.default:null;a=isString(o)?[o]:o,isArray(a)&&appendBlockToChain(s,a,!1),r.__localeChainCache.set(i,s)}return s}function appendBlockToChain(n,e,t){let i=!0;for(let r=0;r<e.length&&isBoolean(i);r++){const s=e[r];isString(s)&&(i=appendLocaleToChain(n,e[r],t))}return i}function appendLocaleToChain(n,e,t){let i;const r=e.split("-");do{const s=r.join("-");i=appendItemToChain(n,s,t),r.splice(-1,1)}while(r.length&&i===!0);return i}function appendItemToChain(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");n.push(r),(isArray(t)||isPlainObject(t))&&t[r]&&(i=t[r])}return i}const VERSION$1="9.2.2",NOT_REOSLVED=-1,DEFAULT_LOCALE="en-US",MISSING_RESOLVE_VALUE="",capitalize=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function getDefaultLinkedModifiers(){return{upper:(n,e)=>e==="text"&&isString(n)?n.toUpperCase():e==="vnode"&&isObject(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&isString(n)?n.toLowerCase():e==="vnode"&&isObject(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&isString(n)?capitalize(n):e==="vnode"&&isObject(n)&&"__v_isVNode"in n?capitalize(n.children):n}}let _compiler;function registerMessageCompiler(n){_compiler=n}let _resolver;function registerMessageResolver(n){_resolver=n}let _fallbacker;function registerLocaleFallbacker(n){_fallbacker=n}let _cid=0;function createCoreContext(n={}){const e=isString(n.version)?n.version:VERSION$1,t=isString(n.locale)?n.locale:DEFAULT_LOCALE,i=isArray(n.fallbackLocale)||isPlainObject(n.fallbackLocale)||isString(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:t,r=isPlainObject(n.messages)?n.messages:{[t]:{}},s=isPlainObject(n.datetimeFormats)?n.datetimeFormats:{[t]:{}},a=isPlainObject(n.numberFormats)?n.numberFormats:{[t]:{}},o=assign({},n.modifiers||{},getDefaultLinkedModifiers()),l=n.pluralRules||{},c=isFunction(n.missing)?n.missing:null,u=isBoolean(n.missingWarn)||isRegExp(n.missingWarn)?n.missingWarn:!0,d=isBoolean(n.fallbackWarn)||isRegExp(n.fallbackWarn)?n.fallbackWarn:!0,f=!!n.fallbackFormat,g=!!n.unresolving,x=isFunction(n.postTranslation)?n.postTranslation:null,_=isPlainObject(n.processor)?n.processor:null,m=isBoolean(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter,T=isFunction(n.messageCompiler)?n.messageCompiler:_compiler,M=isFunction(n.messageResolver)?n.messageResolver:_resolver||resolveWithKeyValue,b=isFunction(n.localeFallbacker)?n.localeFallbacker:_fallbacker||fallbackWithSimple,E=isObject(n.fallbackContext)?n.fallbackContext:void 0,N=isFunction(n.onWarn)?n.onWarn:warn,B=n,A=isObject(B.__datetimeFormatters)?B.__datetimeFormatters:new Map,O=isObject(B.__numberFormatters)?B.__numberFormatters:new Map,U=isObject(B.__meta)?B.__meta:{};_cid++;const q={version:e,cid:_cid,locale:t,fallbackLocale:i,messages:r,modifiers:o,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:d,fallbackFormat:f,unresolving:g,postTranslation:x,processor:_,warnHtmlMessage:m,escapeParameter:v,messageCompiler:T,messageResolver:M,localeFallbacker:b,fallbackContext:E,onWarn:N,__meta:U};return q.datetimeFormats=s,q.numberFormats=a,q.__datetimeFormatters=A,q.__numberFormatters=O,q}function handleMissing(n,e,t,i,r){const{missing:s,onWarn:a}=n;if(s!==null){const o=s(n,t,e,r);return isString(o)?o:e}else return e}function updateFallbackLocale(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}const defaultOnCacheKey=n=>n;let compileCache=Object.create(null);function compileToFunction(n,e={}){{const i=(e.onCacheKey||defaultOnCacheKey)(n),r=compileCache[i];if(r)return r;let s=!1;const a=e.onError||defaultOnError;e.onError=c=>{s=!0,a(c)};const{code:o}=baseCompile(n,e),l=new Function(`return ${o}`)();return s?l:compileCache[i]=l}}let code$1=CompileErrorCodes.__EXTEND_POINT__;const inc$1=()=>++code$1,CoreErrorCodes={INVALID_ARGUMENT:code$1,INVALID_DATE_ARGUMENT:inc$1(),INVALID_ISO_DATE_ARGUMENT:inc$1(),__EXTEND_POINT__:inc$1()};function createCoreError(n){return createCompileError(n,null,void 0)}const NOOP_MESSAGE_FUNCTION=()=>"",isMessageFunction=n=>isFunction(n);function translate(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=n,[l,c]=parseTranslateArgs(...e),u=isBoolean(c.missingWarn)?c.missingWarn:n.missingWarn,d=isBoolean(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,f=isBoolean(c.escapeParameter)?c.escapeParameter:n.escapeParameter,g=!!c.resolvedMessage,x=isString(c.default)||isBoolean(c.default)?isBoolean(c.default)?s?l:()=>l:c.default:t?s?l:()=>l:"",_=t||x!=="",m=isString(c.locale)?c.locale:n.locale;f&&escapeParams(c);let[v,T,M]=g?[l,m,o[m]||{}]:resolveMessageFormat(n,l,m,a,d,u),b=v,E=l;if(!g&&!(isString(b)||isMessageFunction(b))&&_&&(b=x,E=b),!g&&(!(isString(b)||isMessageFunction(b))||!isString(T)))return r?NOT_REOSLVED:l;let N=!1;const B=()=>{N=!0},A=isMessageFunction(b)?b:compileMessageFormat(n,l,T,b,E,B);if(N)return b;const O=getMessageContextOptions(n,T,M,c),U=createMessageContext(O),q=evaluateMessage(n,A,U);return i?i(q,l):q}function escapeParams(n){isArray(n.list)?n.list=n.list.map(e=>isString(e)?escapeHtml(e):e):isObject(n.named)&&Object.keys(n.named).forEach(e=>{isString(n.named[e])&&(n.named[e]=escapeHtml(n.named[e]))})}function resolveMessageFormat(n,e,t,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let d={},f,g=null;const x="translate";for(let _=0;_<u.length&&(f=u[_],d=a[f]||{},(g=l(d,e))===null&&(g=d[e]),!(isString(g)||isFunction(g)));_++){const m=handleMissing(n,e,f,s,x);m!==e&&(g=m)}return[g,f,d]}function compileMessageFormat(n,e,t,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=n;if(isMessageFunction(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=t,c.key=e,c}const l=a(i,getCompileOptions(n,t,r,i,o,s));return l.locale=t,l.key=e,l.source=i,l}function evaluateMessage(n,e,t){return e(t)}function parseTranslateArgs(...n){const[e,t,i]=n,r={};if(!isString(e)&&!isNumber(e)&&!isMessageFunction(e))throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);const s=isNumber(e)?String(e):(isMessageFunction(e),e);return isNumber(t)?r.plural=t:isString(t)?r.default=t:isPlainObject(t)&&!isEmptyObject(t)?r.named=t:isArray(t)&&(r.list=t),isNumber(i)?r.plural=i:isString(i)?r.default=i:isPlainObject(i)&&assign(r,i),[s,r]}function getCompileOptions(n,e,t,i,r,s){return{warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>generateFormatCacheKey(e,t,a)}}function getMessageContextOptions(n,e,t,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,f={locale:e,modifiers:r,pluralRules:s,messages:g=>{let x=a(t,g);if(x==null&&u){const[,,_]=resolveMessageFormat(u,g,e,o,l,c);x=a(_,g)}if(isString(x)){let _=!1;const v=compileMessageFormat(n,g,e,x,g,()=>{_=!0});return _?NOOP_MESSAGE_FUNCTION:v}else return isMessageFunction(x)?x:NOOP_MESSAGE_FUNCTION}};return n.processor&&(f.processor=n.processor),i.list&&(f.list=i.list),i.named&&(f.named=i.named),isNumber(i.plural)&&(f.pluralIndex=i.plural),f}function datetime(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=n,{__datetimeFormatters:o}=n,[l,c,u,d]=parseDateTimeArgs(...e),f=isBoolean(u.missingWarn)?u.missingWarn:n.missingWarn;isBoolean(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const g=!!u.part,x=isString(u.locale)?u.locale:n.locale,_=a(n,r,x);if(!isString(l)||l==="")return new Intl.DateTimeFormat(x,d).format(c);let m={},v,T=null;const M="datetime format";for(let N=0;N<_.length&&(v=_[N],m=t[v]||{},T=m[l],!isPlainObject(T));N++)handleMissing(n,l,v,f,M);if(!isPlainObject(T)||!isString(v))return i?NOT_REOSLVED:l;let b=`${v}__${l}`;isEmptyObject(d)||(b=`${b}__${JSON.stringify(d)}`);let E=o.get(b);return E||(E=new Intl.DateTimeFormat(v,assign({},T,d)),o.set(b,E)),g?E.formatToParts(c):E.format(c)}const DATETIME_FORMAT_OPTIONS_KEYS=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function parseDateTimeArgs(...n){const[e,t,i,r]=n,s={};let a={},o;if(isString(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT)}}else if(isDate(e)){if(isNaN(e.getTime()))throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);o=e}else if(isNumber(e))o=e;else throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);return isString(t)?s.key=t:isPlainObject(t)&&Object.keys(t).forEach(l=>{DATETIME_FORMAT_OPTIONS_KEYS.includes(l)?a[l]=t[l]:s[l]=t[l]}),isString(i)?s.locale=i:isPlainObject(i)&&(a=i),isPlainObject(r)&&(a=r),[s.key||"",o,s,a]}function clearDateTimeFormat(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function number(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=n,{__numberFormatters:o}=n,[l,c,u,d]=parseNumberArgs(...e),f=isBoolean(u.missingWarn)?u.missingWarn:n.missingWarn;isBoolean(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const g=!!u.part,x=isString(u.locale)?u.locale:n.locale,_=a(n,r,x);if(!isString(l)||l==="")return new Intl.NumberFormat(x,d).format(c);let m={},v,T=null;const M="number format";for(let N=0;N<_.length&&(v=_[N],m=t[v]||{},T=m[l],!isPlainObject(T));N++)handleMissing(n,l,v,f,M);if(!isPlainObject(T)||!isString(v))return i?NOT_REOSLVED:l;let b=`${v}__${l}`;isEmptyObject(d)||(b=`${b}__${JSON.stringify(d)}`);let E=o.get(b);return E||(E=new Intl.NumberFormat(v,assign({},T,d)),o.set(b,E)),g?E.formatToParts(c):E.format(c)}const NUMBER_FORMAT_OPTIONS_KEYS=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function parseNumberArgs(...n){const[e,t,i,r]=n,s={};let a={};if(!isNumber(e))throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);const o=e;return isString(t)?s.key=t:isPlainObject(t)&&Object.keys(t).forEach(l=>{NUMBER_FORMAT_OPTIONS_KEYS.includes(l)?a[l]=t[l]:s[l]=t[l]}),isString(i)?s.locale=i:isPlainObject(i)&&(a=i),isPlainObject(r)&&(a=r),[s.key||"",o,s,a]}function clearNumberFormat(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const VERSION="9.2.2";CoreWarnCodes.__EXTEND_POINT__;let code=CompileErrorCodes.__EXTEND_POINT__;const inc=()=>++code,I18nErrorCodes={UNEXPECTED_RETURN_TYPE:code,INVALID_ARGUMENT:inc(),MUST_BE_CALL_SETUP_TOP:inc(),NOT_INSLALLED:inc(),NOT_AVAILABLE_IN_LEGACY_MODE:inc(),REQUIRED_VALUE:inc(),INVALID_VALUE:inc(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:inc(),NOT_INSLALLED_WITH_PROVIDE:inc(),UNEXPECTED_ERROR:inc(),NOT_COMPATIBLE_LEGACY_VUE_I18N:inc(),BRIDGE_SUPPORT_VUE_2_ONLY:inc(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:inc(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:inc(),__EXTEND_POINT__:inc()};function createI18nError(n,...e){return createCompileError(n,null,void 0)}const TransrateVNodeSymbol=makeSymbol("__transrateVNode"),DatetimePartsSymbol=makeSymbol("__datetimeParts"),NumberPartsSymbol=makeSymbol("__numberParts"),SetPluralRulesSymbol=makeSymbol("__setPluralRules");makeSymbol("__intlifyMeta");const InejctWithOption=makeSymbol("__injectWithOption");function handleFlatJson(n){if(!isObject(n))return n;for(const e in n)if(hasOwn(n,e))if(!e.includes("."))isObject(n[e])&&handleFlatJson(n[e]);else{const t=e.split("."),i=t.length-1;let r=n;for(let s=0;s<i;s++)t[s]in r||(r[t[s]]={}),r=r[t[s]];r[t[i]]=n[e],delete n[e],isObject(r[t[i]])&&handleFlatJson(r[t[i]])}return n}function getLocaleMessages(n,e){const{messages:t,__i18n:i,messageResolver:r,flatJson:s}=e,a=isPlainObject(t)?t:isArray(i)?{}:{[n]:{}};if(isArray(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},deepCopy(c,a[l])):deepCopy(c,a)}else isString(o)&&deepCopy(JSON.parse(o),a)}),r==null&&s)for(const o in a)hasOwn(a,o)&&handleFlatJson(a[o]);return a}const isNotObjectOrIsArray=n=>!isObject(n)||isArray(n);function deepCopy(n,e){if(isNotObjectOrIsArray(n)||isNotObjectOrIsArray(e))throw createI18nError(I18nErrorCodes.INVALID_VALUE);for(const t in n)hasOwn(n,t)&&(isNotObjectOrIsArray(n[t])||isNotObjectOrIsArray(e[t])?e[t]=n[t]:deepCopy(n[t],e[t]))}function getComponentOptions(n){return n.type}function adjustI18nResources(n,e,t){let i=isObject(e.messages)?e.messages:{};"__i18nGlobal"in t&&(i=getLocaleMessages(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{n.mergeLocaleMessage(s,i[s])});{if(isObject(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{n.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(isObject(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{n.mergeNumberFormat(a,e.numberFormats[a])})}}}function createTextNode(n){return createVNode(Text,null,n,0)}let composerID=0;function defineCoreMissingHandler(n){return(e,t,i,r)=>n(t,i,getCurrentInstance()||void 0,r)}function createComposer(n={},e){const{__root:t}=n,i=t===void 0;let r=isBoolean(n.inheritLocale)?n.inheritLocale:!0;const s=ref(t&&r?t.locale.value:isString(n.locale)?n.locale:DEFAULT_LOCALE),a=ref(t&&r?t.fallbackLocale.value:isString(n.fallbackLocale)||isArray(n.fallbackLocale)||isPlainObject(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:s.value),o=ref(getLocaleMessages(s.value,n)),l=ref(isPlainObject(n.datetimeFormats)?n.datetimeFormats:{[s.value]:{}}),c=ref(isPlainObject(n.numberFormats)?n.numberFormats:{[s.value]:{}});let u=t?t.missingWarn:isBoolean(n.missingWarn)||isRegExp(n.missingWarn)?n.missingWarn:!0,d=t?t.fallbackWarn:isBoolean(n.fallbackWarn)||isRegExp(n.fallbackWarn)?n.fallbackWarn:!0,f=t?t.fallbackRoot:isBoolean(n.fallbackRoot)?n.fallbackRoot:!0,g=!!n.fallbackFormat,x=isFunction(n.missing)?n.missing:null,_=isFunction(n.missing)?defineCoreMissingHandler(n.missing):null,m=isFunction(n.postTranslation)?n.postTranslation:null,v=t?t.warnHtmlMessage:isBoolean(n.warnHtmlMessage)?n.warnHtmlMessage:!0,T=!!n.escapeParameter;const M=t?t.modifiers:isPlainObject(n.modifiers)?n.modifiers:{};let b=n.pluralRules||t&&t.pluralRules,E;E=(()=>{const w={version:VERSION,locale:s.value,fallbackLocale:a.value,messages:o.value,modifiers:M,pluralRules:b,missing:_===null?void 0:_,missingWarn:u,fallbackWarn:d,fallbackFormat:g,unresolving:!0,postTranslation:m===null?void 0:m,warnHtmlMessage:v,escapeParameter:T,messageResolver:n.messageResolver,__meta:{framework:"vue"}};return w.datetimeFormats=l.value,w.numberFormats=c.value,w.__datetimeFormatters=isPlainObject(E)?E.__datetimeFormatters:void 0,w.__numberFormatters=isPlainObject(E)?E.__numberFormatters:void 0,createCoreContext(w)})(),updateFallbackLocale(E,s.value,a.value);function B(){return[s.value,a.value,o.value,l.value,c.value]}const A=computed({get:()=>s.value,set:w=>{s.value=w,E.locale=s.value}}),O=computed({get:()=>a.value,set:w=>{a.value=w,E.fallbackLocale=a.value,updateFallbackLocale(E,s.value,w)}}),U=computed(()=>o.value),q=computed(()=>l.value),ne=computed(()=>c.value);function G(){return isFunction(m)?m:null}function H(w){m=w,E.postTranslation=w}function oe(){return x}function ce(w){w!==null&&(_=defineCoreMissingHandler(w)),x=w,E.missing=_}const re=(w,S,V,Y,ae,fe)=>{B();let be;if(be=w(E),isNumber(be)&&be===NOT_REOSLVED){const[ye,se]=S();return t&&f?Y(t):ae(ye)}else{if(fe(be))return be;throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE)}};function Q(...w){return re(S=>Reflect.apply(translate,null,[S,...w]),()=>parseTranslateArgs(...w),"translate",S=>Reflect.apply(S.t,S,[...w]),S=>S,S=>isString(S))}function pe(...w){const[S,V,Y]=w;if(Y&&!isObject(Y))throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);return Q(S,V,assign({resolvedMessage:!0},Y||{}))}function me(...w){return re(S=>Reflect.apply(datetime,null,[S,...w]),()=>parseDateTimeArgs(...w),"datetime format",S=>Reflect.apply(S.d,S,[...w]),()=>MISSING_RESOLVE_VALUE,S=>isString(S))}function ee(...w){return re(S=>Reflect.apply(number,null,[S,...w]),()=>parseNumberArgs(...w),"number format",S=>Reflect.apply(S.n,S,[...w]),()=>MISSING_RESOLVE_VALUE,S=>isString(S))}function te(w){return w.map(S=>isString(S)||isNumber(S)||isBoolean(S)?createTextNode(String(S)):S)}const Se={normalize:te,interpolate:w=>w,type:"vnode"};function Te(...w){return re(S=>{let V;const Y=S;try{Y.processor=Se,V=Reflect.apply(translate,null,[Y,...w])}finally{Y.processor=null}return V},()=>parseTranslateArgs(...w),"translate",S=>S[TransrateVNodeSymbol](...w),S=>[createTextNode(S)],S=>isArray(S))}function ie(...w){return re(S=>Reflect.apply(number,null,[S,...w]),()=>parseNumberArgs(...w),"number format",S=>S[NumberPartsSymbol](...w),()=>[],S=>isString(S)||isArray(S))}function Ae(...w){return re(S=>Reflect.apply(datetime,null,[S,...w]),()=>parseDateTimeArgs(...w),"datetime format",S=>S[DatetimePartsSymbol](...w),()=>[],S=>isString(S)||isArray(S))}function Ee(w){b=w,E.pluralRules=b}function we(w,S){const V=isString(S)?S:s.value,Y=P(V);return E.messageResolver(Y,w)!==null}function xe(w){let S=null;const V=fallbackWithLocaleChain(E,a.value,s.value);for(let Y=0;Y<V.length;Y++){const ae=o.value[V[Y]]||{},fe=E.messageResolver(ae,w);if(fe!=null){S=fe;break}}return S}function ke(w){const S=xe(w);return S??(t?t.tm(w)||{}:{})}function P(w){return o.value[w]||{}}function y(w,S){o.value[w]=S,E.messages=o.value}function C(w,S){o.value[w]=o.value[w]||{},deepCopy(S,o.value[w]),E.messages=o.value}function I(w){return l.value[w]||{}}function F(w,S){l.value[w]=S,E.datetimeFormats=l.value,clearDateTimeFormat(E,w,S)}function $(w,S){l.value[w]=assign(l.value[w]||{},S),E.datetimeFormats=l.value,clearDateTimeFormat(E,w,S)}function X(w){return c.value[w]||{}}function Z(w,S){c.value[w]=S,E.numberFormats=c.value,clearNumberFormat(E,w,S)}function he(w,S){c.value[w]=assign(c.value[w]||{},S),E.numberFormats=c.value,clearNumberFormat(E,w,S)}composerID++,t&&inBrowser&&(watch(t.locale,w=>{r&&(s.value=w,E.locale=w,updateFallbackLocale(E,s.value,a.value))}),watch(t.fallbackLocale,w=>{r&&(a.value=w,E.fallbackLocale=w,updateFallbackLocale(E,s.value,a.value))}));const j={id:composerID,locale:A,fallbackLocale:O,get inheritLocale(){return r},set inheritLocale(w){r=w,w&&t&&(s.value=t.locale.value,a.value=t.fallbackLocale.value,updateFallbackLocale(E,s.value,a.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:U,get modifiers(){return M},get pluralRules(){return b||{}},get isGlobal(){return i},get missingWarn(){return u},set missingWarn(w){u=w,E.missingWarn=u},get fallbackWarn(){return d},set fallbackWarn(w){d=w,E.fallbackWarn=d},get fallbackRoot(){return f},set fallbackRoot(w){f=w},get fallbackFormat(){return g},set fallbackFormat(w){g=w,E.fallbackFormat=g},get warnHtmlMessage(){return v},set warnHtmlMessage(w){v=w,E.warnHtmlMessage=w},get escapeParameter(){return T},set escapeParameter(w){T=w,E.escapeParameter=w},t:Q,getLocaleMessage:P,setLocaleMessage:y,mergeLocaleMessage:C,getPostTranslationHandler:G,setPostTranslationHandler:H,getMissingHandler:oe,setMissingHandler:ce,[SetPluralRulesSymbol]:Ee};return j.datetimeFormats=q,j.numberFormats=ne,j.rt=pe,j.te=we,j.tm=ke,j.d=me,j.n=ee,j.getDateTimeFormat=I,j.setDateTimeFormat=F,j.mergeDateTimeFormat=$,j.getNumberFormat=X,j.setNumberFormat=Z,j.mergeNumberFormat=he,j[InejctWithOption]=n.__injectWithOption,j[TransrateVNodeSymbol]=Te,j[DatetimePartsSymbol]=Ae,j[NumberPartsSymbol]=ie,j}const baseFormatProps={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function getInterpolateArg({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,r)=>i=[...i,...isArray(r.children)?r.children:[r]],[]):e.reduce((t,i)=>{const r=n[i];return r&&(t[i]=r()),t},{})}function getFragmentableTag(n){return Fragment}const Translation={name:"i18n-t",props:assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>isNumber(n)||!isNaN(n)}},baseFormatProps),setup(n,e){const{slots:t,attrs:i}=e,r=n.i18n||useI18n({useScope:n.scope,__useComponent:!0});return()=>{const s=Object.keys(t).filter(d=>d!=="_"),a={};n.locale&&(a.locale=n.locale),n.plural!==void 0&&(a.plural=isString(n.plural)?+n.plural:n.plural);const o=getInterpolateArg(e,s),l=r[TransrateVNodeSymbol](n.keypath,o,a),c=assign({},i),u=isString(n.tag)||isObject(n.tag)?n.tag:getFragmentableTag();return h(u,c,l)}}};function isVNode(n){return isArray(n)&&!isString(n[0])}function renderFormatter(n,e,t,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o={};n.locale&&(a.locale=n.locale),isString(n.format)?a.key=n.format:isObject(n.format)&&(isString(n.format.key)&&(a.key=n.format.key),o=Object.keys(n.format).reduce((f,g)=>t.includes(g)?assign({},f,{[g]:n.format[g]}):f,{}));const l=i(n.value,a,o);let c=[a.key];isArray(l)?c=l.map((f,g)=>{const x=r[f.type],_=x?x({[f.type]:f.value,index:g,parts:l}):[f.value];return isVNode(_)&&(_[0].key=`${f.type}-${g}`),_}):isString(l)&&(c=[l]);const u=assign({},s),d=isString(n.tag)||isObject(n.tag)?n.tag:getFragmentableTag();return h(d,u,c)}}const NumberFormat={name:"i18n-n",props:assign({value:{type:Number,required:!0},format:{type:[String,Object]}},baseFormatProps),setup(n,e){const t=n.i18n||useI18n({useScope:"parent",__useComponent:!0});return renderFormatter(n,e,NUMBER_FORMAT_OPTIONS_KEYS,(...i)=>t[NumberPartsSymbol](...i))}},DatetimeFormat={name:"i18n-d",props:assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},baseFormatProps),setup(n,e){const t=n.i18n||useI18n({useScope:"parent",__useComponent:!0});return renderFormatter(n,e,DATETIME_FORMAT_OPTIONS_KEYS,(...i)=>t[DatetimePartsSymbol](...i))}};function getComposer$2(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function vTDirective(n){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);const u=getComposer$2(n,o.$),d=parseValue(c);return[Reflect.apply(u.t,u,[...makeParams(d)]),u]};return{created:(a,o)=>{const[l,c]=e(o);inBrowser&&n.global===c&&(a.__i18nWatcher=watch(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{inBrowser&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=parseValue(o);a.textContent=Reflect.apply(l.t,l,[...makeParams(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function parseValue(n){if(isString(n))return{path:n};if(isPlainObject(n)){if(!("path"in n))throw createI18nError(I18nErrorCodes.REQUIRED_VALUE,"path");return n}else throw createI18nError(I18nErrorCodes.INVALID_VALUE)}function makeParams(n){const{path:e,locale:t,args:i,choice:r,plural:s}=n,a={},o=i||{};return isString(t)&&(a.locale=t),isNumber(r)&&(a.plural=r),isNumber(s)&&(a.plural=s),[e,o,a]}function apply(n,e,...t){const i=isPlainObject(t[0])?t[0]:{},r=!!i.useI18nComponentName;(isBoolean(i.globalInstall)?i.globalInstall:!0)&&(n.component(r?"i18n":Translation.name,Translation),n.component(NumberFormat.name,NumberFormat),n.component(DatetimeFormat.name,DatetimeFormat)),n.directive("t",vTDirective(e))}const I18nInjectionKey=makeSymbol("global-vue-i18n");function createI18n(n={},e){const t=isBoolean(n.globalInjection)?n.globalInjection:!0,i=!0,r=new Map,[s,a]=createGlobal(n),o=makeSymbol("");function l(d){return r.get(d)||null}function c(d,f){r.set(d,f)}function u(d){r.delete(d)}{const d={get mode(){return"composition"},get allowComposition(){return i},async install(f,...g){f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,d),t&&injectGlobalFields(f,d.global),apply(f,d,...g);const x=f.unmount;f.unmount=()=>{d.dispose(),x()}},get global(){return a},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return d}}function useI18n(n={}){const e=getCurrentInstance();if(e==null)throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw createI18nError(I18nErrorCodes.NOT_INSLALLED);const t=getI18nInstance(e),i=getGlobalComposer(t),r=getComponentOptions(e),s=getScope(n,r);if(s==="global")return adjustI18nResources(i,n,r),i;if(s==="parent"){let l=getComposer(t,e,n.__useComponent);return l==null&&(l=i),l}const a=t;let o=a.__getInstance(e);if(o==null){const l=assign({},n);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=createComposer(l),setupLifeCycle(a,e),a.__setInstance(e,o)}return o}function createGlobal(n,e,t){const i=effectScope();{const r=i.run(()=>createComposer(n));if(r==null)throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);return[i,r]}}function getI18nInstance(n){{const e=inject(n.isCE?I18nInjectionKey:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw createI18nError(n.isCE?I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE:I18nErrorCodes.UNEXPECTED_ERROR);return e}}function getScope(n,e){return isEmptyObject(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function getGlobalComposer(n){return n.mode==="composition"?n.global:n.global.__composer}function getComposer(n,e,t=!1){let i=null;const r=e.root;let s=e.parent;for(;s!=null;){const a=n;if(n.mode==="composition"&&(i=a.__getInstance(s)),i!=null||r===s)break;s=s.parent}return i}function setupLifeCycle(n,e,t){onMounted(()=>{},e),onUnmounted(()=>{n.__deleteInstance(e)},e)}const globalExportProps=["locale","fallbackLocale","availableLocales"],globalExportMethods=["t","rt","d","n","tm"];function injectGlobalFields(n,e){const t=Object.create(null);globalExportProps.forEach(i=>{const r=Object.getOwnPropertyDescriptor(e,i);if(!r)throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);const s=isRef(r.value)?{get(){return r.value.value},set(a){r.value.value=a}}:{get(){return r.get&&r.get()}};Object.defineProperty(t,i,s)}),n.config.globalProperties.$i18n=t,globalExportMethods.forEach(i=>{const r=Object.getOwnPropertyDescriptor(e,i);if(!r||!r.value)throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${i}`,r)})}registerMessageCompiler(compileToFunction);registerMessageResolver(resolveValue);registerLocaleFallbacker(fallbackWithLocaleChain);var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hoconParser={exports:{}};(function(module){(function(n,e){module.exports?module.exports=e():n.parseHocon=e()})(commonjsGlobal,function(){function parseHocon(text){var index=0,result=readHocon(text);return handleSubtitutions(result);function readHocon(n){for(var e=!1,t="",i=!1,r=!1,s=!1,a=!1,o=!1,l=!1,c=!1,u=!1,d="",f="",g={};index<n.length;){var x=n[index];if(index++,l&&!u){(x==="\r"||x===`
`)&&(l=!1);continue}if(!i&&x==='"'&&index+1<n.length&&n[index]==='"'&&n[index+1]==='"'){if(u){m(),u=!1,e=!1,a=!1,index+=2;continue}u=!0,e=!0,a=!0,index+=2;continue}if(!i&&!u&&(x==="'"||x==='"')){if(e&&t===x){a?m():a=!0,e=!1;continue}e=!0,t=x;continue}if(u&&_(x)){f+=x;continue}if(e&&x==="\\"){i=!0;continue}if(i=!1,!e)switch(x){case" ":{if(d!==""&&!a){d+=x;continue}if(f==="")continue;if(s&&a){f+=x;continue}}case"	":case"\r":case`
`:{if(s&&a){if(f==="")continue;m();continue}if(!d)continue;if(!a){a=!0;continue}if(a&&f){m();continue}continue}case"{":{if(r||s||d){index--,d=d.trim(),f=readHocon(n),m();continue}r=!0;continue}case"}":{if(!r)throw"What";if(f)m();else if(d)return d;return g}case":":case"=":{if(o)throw"Already met seperator";a=!0,o=!0,d=d.trim();continue}case",":{a&&f&&m();continue}case"[":{if(r||s||d){index--,f=readHocon(n),m();continue}a=!0,s=!0,g=[];continue}case"]":{if(!s)throw"not in an array";return f&&(f=f.trim(),m()),g}case"$":{if(!f){f="${"+readHocon(n)+"}",m();continue}break}case"#":{l=!0;continue}case"/":{if(c){l=!0,c=!1;continue}c=!0;continue}}a?f+=x:d+=x}if(r)throw"Expected closing curly bracket";if(s)throw"Expected closing square bracket";return a&&m(),g;function _(v){return['"',"\\"].indexOf(v)!==-1}function m(M,b){var M=M||d,b=b||g,E=M.indexOf(".");if(!s&&E>0){var N=M.substring(0,E);b[N]=b[N]||{},m(M.substring(E+1),b[N]);return}!e&&typeof f=="string"&&(/^\d+$/.test(f)?f=parseInt(f):/^\d+\.\d+$/.test(f)?f=parseFloat(f):f==="true"?f=!0:f==="false"?f=!1:f==="null"&&(f=null)),s?b.push(f):(typeof b[M]=="object"&&typeof f=="object"?extend(b[M],f):b[M]=f,a=!1),o=!1,d="",f=""}}function handleSubtitutions(mainObj,intermidiateObj,loops){if(loops=loops||0,loops>8)return null;if(intermidiateObj=typeof intermidiateObj>"u"?mainObj:intermidiateObj,intermidiateObj==null)return intermidiateObj;if(Array.isArray(intermidiateObj))intermidiateObj.forEach(function(n,e){intermidiateObj[e]=handleSubtitutions(mainObj,n)});else if(typeof intermidiateObj=="string"){var match=/^\$\{(.+?)\}$/.exec(intermidiateObj);if(match&&match.length==2){var val=eval("mainObj."+match[1]);return typeof val>"u"?null:handleSubtitutions(mainObj,val,loops+1)}}else typeof intermidiateObj=="object"&&Object.keys(intermidiateObj).forEach(function(n,e){intermidiateObj[n]=handleSubtitutions(mainObj,intermidiateObj[n])});return intermidiateObj}function extend(){for(var n=1;n<arguments.length;n++)for(var e in arguments[n])arguments[n].hasOwnProperty(e)&&(typeof arguments[0][e]=="object"&&typeof arguments[n][e]=="object"?extend(arguments[0][e],arguments[n][e]):arguments[0][e]=arguments[n][e]);return arguments[0]}}return parseHocon})})(hoconParser);const parseHocon=hoconParser.exports,setLocalStorage=(n,e)=>{localStorage.setItem(n,JSON.stringify(e))},getLocalStorage=n=>{const e=localStorage.getItem(n);if(e!=null)try{return JSON.parse(e)}catch{return e}},round=(n,e)=>{let t=Math.pow(10,e);return Math.round(n*t)/t},fetchHocon=async n=>fetch(n).then(e=>e.text()).then(e=>parseHocon(e)),i18nModule=createI18n({locale:"none",fallbackLocale:"en",silentFallbackWarn:!0,warnHtmlMessage:!1,legacy:!1,messages:{}}),i18n=i18nModule.global;async function setLanguage(n){try{if(!i18n.availableLocales.includes(n)){let e=await fetchHocon(`./lang/${n}.conf`);i18n.setLocaleMessage(n,e)}i18n.locale.value=n,document.querySelector("html").setAttribute("lang",n)}catch(e){console.error(`Failed to load language '${n}'!`,e)}return nextTick()}async function loadLanguageSettings(){let n=await fetchHocon("./lang/settings.conf");i18n.languages=n.languages,await setLanguage(n.default)}const themes=[{get name(){return i18n.t("theme.default")},value:null},{get name(){return i18n.t("theme.dark")},value:"dark"},{get name(){return i18n.t("theme.light")},value:"light"},{get name(){return i18n.t("theme.contrast")},value:"contrast"}],qualityStages=[{get name(){return i18n.t("resolution.high")},value:2},{get name(){return i18n.t("resolution.normal")},value:1},{get name(){return i18n.t("resolution.low")},value:.5}],_sfc_main$a={name:"SettingsMenu",components:{SwitchButton,Slider,SimpleButton,Group},data(){return{appState:this.$bluemap.appState,mapViewer:this.$bluemap.mapViewer.data,settings:{hiresSliderMax:500,hiresSliderMin:50,lowresSliderMax:1e4,lowresSliderMin:500,...this.$bluemap.settings},languages:i18n.languages,qualityStages,themes}},methods:{switchDebug(){this.$bluemap.setDebug(!this.appState.debug)},renderDistanceFormatter(n){let e=parseFloat(n);return e===0?this.$t("renderDistance.off"):e.toFixed(0)},changeLanguage(n){setLanguage(n)}}};function _sfc_render$a(n,e,t,i,r,s){const a=resolveComponent("SimpleButton"),o=resolveComponent("Group"),l=resolveComponent("Slider"),c=resolveComponent("SwitchButton");return openBlock(),createElementBlock("div",null,[createVNode(o,{title:n.$t("controls.title")},{default:withCtx(()=>[createVNode(a,{active:r.appState.controls.state==="perspective",onAction:e[0]||(e[0]=u=>n.$bluemap.setPerspectiveView(500,r.appState.controls.state==="free"?100:0))},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("controls.perspective.button")),1)]),_:1},8,["active"]),createVNode(a,{active:r.appState.controls.state==="flat",onAction:e[1]||(e[1]=u=>n.$bluemap.setFlatView(500,r.appState.controls.state==="free"?100:0))},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("controls.flatView.button")),1)]),_:1},8,["active"]),createVNode(a,{active:r.appState.controls.state==="free",onAction:e[2]||(e[2]=u=>n.$bluemap.setFreeFlight(500))},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("controls.freeFlight.button")),1)]),_:1},8,["active"])]),_:1},8,["title"]),createVNode(o,{title:n.$t("lighting.title")},{default:withCtx(()=>[createVNode(l,{value:r.mapViewer.uniforms.sunlightStrength.value,min:0,max:1,step:.01,onUpdate:e[3]||(e[3]=u=>r.mapViewer.uniforms.sunlightStrength.value=u)},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("lighting.sunlight")),1)]),_:1},8,["value","step"]),createVNode(l,{value:r.mapViewer.uniforms.ambientLight.value,min:0,max:1,step:.01,onUpdate:e[4]||(e[4]=u=>r.mapViewer.uniforms.ambientLight.value=u)},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("lighting.ambientLight")),1)]),_:1},8,["value","step"])]),_:1},8,["title"]),createVNode(o,{title:n.$t("resolution.title")},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.qualityStages,u=>(openBlock(),createBlock(a,{key:u.name,active:r.mapViewer.superSampling===u.value,onAction:d=>{n.$bluemap.mapViewer.superSampling=u.value,n.$bluemap.saveUserSettings()}},{default:withCtx(()=>[createTextVNode(toDisplayString$1(u.name),1)]),_:2},1032,["active","onAction"]))),128))]),_:1},8,["title"]),createVNode(o,{title:n.$t("renderDistance.title")},{default:withCtx(()=>[createVNode(l,{value:r.mapViewer.loadedHiresViewDistance,min:r.settings.hiresSliderMin,max:r.settings.hiresSliderMax,step:10,formatter:s.renderDistanceFormatter,onUpdate:e[5]||(e[5]=u=>{r.mapViewer.loadedHiresViewDistance=u,n.$bluemap.mapViewer.updateLoadedMapArea()}),onLazy:e[6]||(e[6]=u=>n.$bluemap.saveUserSettings())},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("renderDistance.hiresLayer")),1)]),_:1},8,["value","min","max","formatter"]),createVNode(l,{value:r.mapViewer.loadedLowresViewDistance,min:r.settings.lowresSliderMin,max:r.settings.lowresSliderMax,step:100,onUpdate:e[7]||(e[7]=u=>{r.mapViewer.loadedLowresViewDistance=u,n.$bluemap.mapViewer.updateLoadedMapArea()}),onLazy:e[8]||(e[8]=u=>n.$bluemap.saveUserSettings())},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("renderDistance.lowersLayer")),1)]),_:1},8,["value","min","max"]),createVNode(c,{on:!r.appState.controls.pauseTileLoading,onAction:e[9]||(e[9]=u=>{r.appState.controls.pauseTileLoading=!r.appState.controls.pauseTileLoading,n.$bluemap.saveUserSettings()})},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("renderDistance.loadHiresWhileMoving")),1)]),_:1},8,["on"])]),_:1},8,["title"]),createVNode(o,{title:n.$t("mapControls.title")},{default:withCtx(()=>[createVNode(c,{on:r.appState.controls.showZoomButtons,onAction:e[10]||(e[10]=u=>{r.appState.controls.showZoomButtons=!r.appState.controls.showZoomButtons,n.$bluemap.saveUserSettings()})},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("mapControls.showZoomButtons")),1)]),_:1},8,["on"])]),_:1},8,["title"]),createVNode(o,{title:n.$t("freeFlightControls.title")},{default:withCtx(()=>[createVNode(l,{value:r.appState.controls.mouseSensitivity,min:.1,max:5,step:.05,onUpdate:e[11]||(e[11]=u=>{r.appState.controls.mouseSensitivity=u,n.$bluemap.updateControlsSettings()}),onLazy:e[12]||(e[12]=u=>n.$bluemap.saveUserSettings())},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("freeFlightControls.mouseSensitivity")),1)]),_:1},8,["value","min","step"]),createVNode(c,{on:r.appState.controls.invertMouse,onAction:e[13]||(e[13]=u=>{r.appState.controls.invertMouse=!r.appState.controls.invertMouse,n.$bluemap.updateControlsSettings(),n.$bluemap.saveUserSettings()})},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("freeFlightControls.invertMouseY")),1)]),_:1},8,["on"])]),_:1},8,["title"]),createVNode(o,{title:n.$t("theme.title")},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.themes,u=>(openBlock(),createBlock(a,{key:u.name,active:r.appState.theme===u.value,onAction:d=>{n.$bluemap.setTheme(u.value),n.$bluemap.saveUserSettings()}},{default:withCtx(()=>[createTextVNode(toDisplayString$1(u.name),1)]),_:2},1032,["active","onAction"]))),128))]),_:1},8,["title"]),createVNode(o,{title:n.$t("screenshot.title")},{default:withCtx(()=>[createVNode(c,{on:r.appState.screenshot.clipboard,onAction:e[14]||(e[14]=u=>{r.appState.screenshot.clipboard=!r.appState.screenshot.clipboard,n.$bluemap.saveUserSettings()})},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("screenshot.clipboard")),1)]),_:1},8,["on"])]),_:1},8,["title"]),r.languages.length>1?(openBlock(),createBlock(o,{key:0,title:n.$t("language.title")},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.languages,u=>(openBlock(),createBlock(a,{key:u.locale,active:u.locale===n.$i18n.locale,onAction:d=>{s.changeLanguage(u.locale),n.$bluemap.saveUserSettings()}},{default:withCtx(()=>[createTextVNode(toDisplayString$1(u.name),1)]),_:2},1032,["active","onAction"]))),128))]),_:1},8,["title"])):createCommentVNode("",!0),createVNode(c,{on:r.appState.debug,onAction:e[15]||(e[15]=u=>{s.switchDebug(),n.$bluemap.saveUserSettings()})},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("debug.button")),1)]),_:1},8,["on"]),createVNode(a,{onAction:e[16]||(e[16]=u=>n.$bluemap.resetSettings())},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("resetAllSettings.button")),1)]),_:1})])}const SettingsMenu=_export_sfc(_sfc_main$a,[["render",_sfc_render$a]]);var Wt;let MainMenu$1=(Wt=class{constructor(){this.isOpen=!1,this.pageStack=[]}currentPage(){return this.pageStack.length===0?MainMenu$1.NULL_PAGE:this.pageStack[this.pageStack.length-1]}openPage(e="root",t=()=>i18n.t("menu.title"),i={}){this.isOpen||(this.pageStack.splice(0,this.pageStack.length),this.isOpen=!0),typeof t=="function"?this.pageStack.push({id:e,get title(){return t()},...i}):this.pageStack.push({id:e,title:t,...i})}closePage(){this.pageStack.splice(this.pageStack.length-1,1),this.pageStack.length<1&&(this.isOpen=!1)}reOpenPage(){this.pageStack.length===0?this.openPage():this.pageStack[0].id!=="root"?(this.pageStack.splice(0,this.pageStack.length),this.openPage()):this.isOpen=!0}closeAll(){this.isOpen=!1}},ge(Wt,"NULL_PAGE",{id:"-",title:"-"}),Wt);const MarkerItem_vue_vue_type_style_index_0_lang="",_sfc_main$9={name:"MarkerItem",props:{marker:Object},data(){return{appState:this.$bluemap.appState,controls:this.$bluemap.mapViewer.controlsManager.data,mapId:this.$bluemap.mapViewer.data.map.id}},computed:{markerLabel(){switch(this.marker.type){case"player":return this.marker.name}if(this.marker.label){let n=/^(?:<[^>]*>\s*)*([^<>]*\S[^<>]*)(?:<|$)/gi.exec(this.marker.label);if(n&&n.length>1)return n[1]}return this.marker.id},position(){return n=>Math.floor(n)}},methods:{async click(n){let e=this.$bluemap.mapViewer.controlsManager;if(e.controls&&e.controls.stopFollowingPlayerMarker&&e.controls.stopFollowingPlayerMarker(),this.marker.type==="player"){if(this.marker.foreign){let t=await this.$bluemap.findPlayerMap(this.marker.playerUuid);if(!t)return;await this.$bluemap.switchMap(t.data.id)}n&&e.controls&&e.controls.followPlayerMarker&&this.marker.visible&&e.controls.followPlayerMarker(this.marker)}else if(!this.marker.visible)return;e.position.copy(this.marker.position)},steve(n){n.target.src="assets/steve.png"}}},_hoisted_1$9=["title"],_hoisted_2$7={key:0,class:"icon"},_hoisted_3$6=["src"],_hoisted_4$4={class:"info"},_hoisted_5$2={class:"label"},_hoisted_6$2={class:"stats"},_hoisted_7$2={key:0},_hoisted_8$2=["title"],_hoisted_9$1=createStaticVNode('<svg viewBox="0 0 30 30"><circle fill="none" stroke-width="3" stroke-miterlimit="10" cx="15" cy="15" r="10.375"></circle><line fill="none" stroke-width="3" stroke-miterlimit="10" x1="3.25" y1="15" x2="1.063" y2="15"></line><line fill="none" stroke-width="3" stroke-miterlimit="10" x1="15" y1="26.75" x2="15" y2="28.938"></line><line fill="none" stroke-width="3" stroke-miterlimit="10" x1="26.75" y1="15" x2="28.938" y2="15"></line><line fill="none" stroke-width="3" stroke-miterlimit="10" x1="15" y1="3.25" x2="15" y2="1.063"></line><circle stroke="none" cx="15" cy="15" r="6.042"></circle></svg>',1),_hoisted_10$1=[_hoisted_9$1];function _sfc_render$9(n,e,t,i,r,s){return openBlock(),createElementBlock("div",{class:normalizeClass(["marker-item",{"marker-hidden":!t.marker.visible}])},[createBaseVNode("div",{class:"marker-button",title:t.marker.id,onClick:e[1]||(e[1]=a=>s.click(!1))},[t.marker.type==="player"?(openBlock(),createElementBlock("div",_hoisted_2$7,[createBaseVNode("img",{src:"maps/"+r.mapId+"/assets/playerheads/"+t.marker.playerUuid+".png",alt:"playerhead",onError:e[0]||(e[0]=(...a)=>s.steve&&s.steve(...a))},null,40,_hoisted_3$6)])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_4$4,[createBaseVNode("div",_hoisted_5$2,toDisplayString$1(s.markerLabel),1),createBaseVNode("div",_hoisted_6$2,[r.appState.debug?(openBlock(),createElementBlock("div",_hoisted_7$2,toDisplayString$1(t.marker.type)+"-marker ",1)):createCommentVNode("",!0),createBaseVNode("div",null," ("+toDisplayString$1(s.position(t.marker.position.x))+" | "+toDisplayString$1(s.position(t.marker.position.y))+" | "+toDisplayString$1(s.position(t.marker.position.z))+") ",1)])])],8,_hoisted_1$9),t.marker.type==="player"?(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(["follow-player-button",{active:r.controls.controls.followingPlayer&&r.controls.controls.followingPlayer.id===t.marker.id}]),onClick:e[2]||(e[2]=a=>s.click(!0)),title:n.$t("markers.followPlayerTitle")},_hoisted_10$1,10,_hoisted_8$2)):createCommentVNode("",!0)],2)}const MarkerItem=_export_sfc(_sfc_main$9,[["render",_sfc_render$9]]),TextInput_vue_vue_type_style_index_0_lang="",_sfc_main$8={name:"TextInput",props:{value:String}},_hoisted_1$8=["value"];function _sfc_render$8(n,e,t,i,r,s){return openBlock(),createElementBlock("input",{class:"text-input",type:"text",value:t.value,onInput:e[0]||(e[0]=a=>n.$emit("input",a)),onKeydown:e[1]||(e[1]=a=>a.stopPropagation())},null,40,_hoisted_1$8)}const TextInput=_export_sfc(_sfc_main$8,[["render",_sfc_render$8]]),MarkerSet_vue_vue_type_style_index_0_lang="",_sfc_main$7={name:"MarkerSet",components:{SwitchHandle},props:{markerSet:Object},computed:{filteredMarkerSetCount(){let n=0;for(let e of this.markerSet.markerSets)e.listed&&n++;return n},label(){return this.markerSet.id==="bm-players"?this.$t("players.title"):this.markerSet.label},active(){for(let n of this.markerSet.markers)if(n.listed)return!0;for(let n of this.markerSet.markerSets)if(n.listed)return!0;return!1}},methods:{toggle(){this.markerSet.toggleable&&(this.markerSet.visible=!this.markerSet.visible)},more(n){this.active&&this.$emit("more",n)}}},_hoisted_1$7=["title"],_hoisted_2$6={class:"marker-set-switch"},_hoisted_3$5={class:"label"},_hoisted_4$3={class:"stats"},_hoisted_5$1={key:0},_hoisted_6$1={key:1},_hoisted_7$1=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M25.004,9.294c0,0.806-0.75,1.46-1.676,1.46H6.671c-0.925,0-1.674-0.654-1.674-1.46l0,0\r
	c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,7.833,25.004,8.487,25.004,9.294L25.004,9.294z`}),createBaseVNode("path",{d:`M25.004,20.706c0,0.807-0.75,1.461-1.676,1.461H6.671c-0.925,0-1.674-0.654-1.674-1.461l0,0\r
	c0-0.807,0.749-1.461,1.674-1.461h16.657C24.254,19.245,25.004,19.899,25.004,20.706L25.004,20.706z`})],-1),_hoisted_8$1=[_hoisted_7$1];function _sfc_render$7(n,e,t,i,r,s){const a=resolveComponent("SwitchHandle");return openBlock(),createElementBlock("div",{class:"marker-set",title:t.markerSet.id},[createBaseVNode("div",{class:"info",onClick:e[0]||(e[0]=(...o)=>s.toggle&&s.toggle(...o))},[createBaseVNode("div",_hoisted_2$6,[createBaseVNode("div",_hoisted_3$5,toDisplayString$1(s.label),1),t.markerSet.toggleable?(openBlock(),createBlock(a,{key:0,on:t.markerSet.visible},null,8,["on"])):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_4$3,[t.markerSet.markers.length>0?(openBlock(),createElementBlock("div",_hoisted_5$1,toDisplayString$1(t.markerSet.markers.length)+" "+toDisplayString$1(n.$t("markers.marker",t.markerSet.markers.length)),1)):createCommentVNode("",!0),s.filteredMarkerSetCount>0?(openBlock(),createElementBlock("div",_hoisted_6$1,toDisplayString$1(s.filteredMarkerSetCount)+" "+toDisplayString$1(n.$t("markers.markerSet",s.filteredMarkerSetCount)),1)):createCommentVNode("",!0)])]),createBaseVNode("div",{class:normalizeClass(["open-menu-button",{active:s.active}]),onClick:e[1]||(e[1]=o=>s.more(o))},_hoisted_8$1,2)],8,_hoisted_1$7)}const MarkerSet$1=_export_sfc(_sfc_main$7,[["render",_sfc_render$7]]),ChoiceBox_vue_vue_type_style_index_0_lang="",_sfc_main$6={name:"ChoiceBox",props:{title:{type:String,required:!1,default:""},choices:Array,selection:String}},_hoisted_1$6={class:"choice-box"},_hoisted_2$5={key:0,class:"title"},_hoisted_3$4={class:"choices"},_hoisted_4$2=["onClick"];function _sfc_render$6(n,e,t,i,r,s){return openBlock(),createElementBlock("div",_hoisted_1$6,[t.title?(openBlock(),createElementBlock("div",_hoisted_2$5,toDisplayString$1(t.title),1)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_3$4,[(openBlock(!0),createElementBlock(Fragment,null,renderList(t.choices,a=>(openBlock(),createElementBlock("div",{class:normalizeClass(["choice",{selected:t.selection===a.id}]),key:a.id,onClick:o=>n.$emit("choice",a)},toDisplayString$1(a.name),11,_hoisted_4$2))),128))])])}const ChoiceBox=_export_sfc(_sfc_main$6,[["render",_sfc_render$6]]),_sfc_main$5={name:"MarkerSetMenu",components:{ChoiceBox,SimpleButton,MarkerSet:MarkerSet$1,TextInput,MarkerItem,Group},props:{menu:MainMenu$1},data(){return{controls:this.$bluemap.mapViewer.controlsManager.data,filter:{search:"",order:"default"}}},computed:{thisMarkerSet(){return this.menu.currentPage().markerSet},filteredMarkers(){return this.thisMarkerSet.markers.filter(n=>n.listed?!this.filter.search||n.id.includesCI(this.filter.search)||n.label&&n.label.includesCI(this.filter.search)?!0:n.type==="player"&&(n.name.includesCI(this.filter.search)||n.playerUuid.includesCI(this.filter.search)):!1).sort((n,e)=>{if(this.filter.order==="label"){let t=(n.type==="player"?n.name:n.label).toLowerCase(),i=(e.type==="player"?e.name:e.label).toLowerCase();return t<i?-1:t>i?1:0}return this.filter.order==="distance"?n.position.distanceToSquared(this.controls.position)-e.position.distanceToSquared(this.controls.position):(n.sorting||0)-(e.sorting||0)})},filteredMarkerSets(){return this.thisMarkerSet.markerSets.filter(n=>n.listed).sort((n,e)=>(n.sorting||0)-(e.sorting||0))}},methods:{openMore(n){this.menu.openPage(this.menu.currentPage().id,this.menu.currentPage().title+" > "+n.label,{markerSet:n})}}},_hoisted_1$5={class:"marker-sets"},_hoisted_2$4={key:0},_hoisted_3$3={key:1,class:"markers"};function _sfc_render$5(n,e,t,i,r,s){const a=resolveComponent("MarkerSet"),o=resolveComponent("TextInput"),l=resolveComponent("ChoiceBox"),c=resolveComponent("MarkerItem");return openBlock(),createElementBlock("div",null,[createBaseVNode("div",_hoisted_1$5,[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.filteredMarkerSets,u=>(openBlock(),createBlock(a,{key:u.id,"marker-set":u,onMore:d=>s.openMore(u)},null,8,["marker-set","onMore"]))),128))]),s.filteredMarkerSets.length>0&s.thisMarkerSet.markers.length>0?(openBlock(),createElementBlock("hr",_hoisted_2$4)):createCommentVNode("",!0),s.thisMarkerSet.markers.length>0?(openBlock(),createElementBlock("div",_hoisted_3$3,[createVNode(o,{value:r.filter.search,onInput:e[0]||(e[0]=u=>r.filter.search=u.target.value),placeholder:n.$t("markers.searchPlaceholder")},null,8,["value","placeholder"]),createVNode(l,{title:n.$t("markers.sort.title"),choices:[{id:"default",name:n.$t("markers.sort.by.default")},{id:"label",name:n.$t("markers.sort.by.label")},{id:"distance",name:n.$t("markers.sort.by.distance")}],selection:r.filter.order,onChoice:e[1]||(e[1]=u=>r.filter.order=u.id)},null,8,["title","choices","selection"]),(openBlock(!0),createElementBlock(Fragment,null,renderList(s.filteredMarkers,u=>(openBlock(),createBlock(c,{key:u.id,marker:u},null,8,["marker"]))),128))])):createCommentVNode("",!0)])}const MarkerSetMenu=_export_sfc(_sfc_main$5,[["render",_sfc_render$5]]),MapButton_vue_vue_type_style_index_0_lang="",_sfc_main$4={name:"MapButton",props:{map:Object},data(){return{mapViewer:this.$bluemap.mapViewer.data,appState:this.$bluemap.appState}},computed:{selectedMapId(){return this.mapViewer.map?this.mapViewer.map.id:null}},methods:{switchMap(n){this.$bluemap.switchMap(n)}}},_hoisted_1$4=["title"],_hoisted_2$3={class:"name"};function _sfc_render$4(n,e,t,i,r,s){return openBlock(),createElementBlock("div",{class:normalizeClass(["map-button",{selected:t.map.id===s.selectedMapId}]),onClick:e[0]||(e[0]=a=>s.switchMap(t.map.id)),title:t.map.id},[createBaseVNode("span",{class:"sky",style:normalizeStyle({color:"rgb("+t.map.skyColor.r*255+","+t.map.skyColor.g*255+","+t.map.skyColor.b*255+")"})},"•",4),createBaseVNode("span",_hoisted_2$3,toDisplayString$1(t.map.name),1)],10,_hoisted_1$4)}const MapButton=_export_sfc(_sfc_main$4,[["render",_sfc_render$4]]),MainMenu_vue_vue_type_style_index_0_lang="",_sfc_main$3={name:"MainMenu",components:{MapButton,MarkerSetMenu,SettingsMenu,SimpleButton,SideMenu},props:{menu:MainMenu$1},data(){return{appState:this.$bluemap.appState,markers:this.$bluemap.mapViewer.markers.data}},methods:{goFullscreen(){document.body.requestFullscreen()}}},_hoisted_1$3={key:0},_hoisted_2$2=createBaseVNode("hr",null,null,-1),_hoisted_3$2={key:1},_hoisted_4$1=["innerHTML"];function _sfc_render$3(n,e,t,i,r,s){const a=resolveComponent("SimpleButton"),o=resolveComponent("MapButton"),l=resolveComponent("MarkerSetMenu"),c=resolveComponent("SettingsMenu"),u=resolveComponent("SideMenu");return openBlock(),createBlock(u,{open:t.menu.isOpen,title:t.menu.currentPage().title,back:t.menu.pageStack.length>1,onBack:e[7]||(e[7]=d=>t.menu.closePage()),onClose:e[8]||(e[8]=d=>t.menu.closeAll())},{default:withCtx(()=>[t.menu.currentPage().id==="root"?(openBlock(),createElementBlock("div",_hoisted_1$3,[createVNode(a,{onAction:e[0]||(e[0]=d=>t.menu.openPage("maps",()=>n.$t("maps.title"))),submenu:!0},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("maps.button")),1)]),_:1}),createVNode(a,{onAction:e[1]||(e[1]=d=>t.menu.openPage("markers",()=>n.$t("markers.title"),{markerSet:r.markers})),submenu:!0},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("markers.button")),1)]),_:1}),createVNode(a,{onAction:e[2]||(e[2]=d=>t.menu.openPage("settings",()=>n.$t("settings.title"))),submenu:!0},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("settings.button")),1)]),_:1}),createVNode(a,{onAction:e[3]||(e[3]=d=>t.menu.openPage("info",()=>n.$t("info.title"))),submenu:!0},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("info.button")),1)]),_:1}),_hoisted_2$2,createVNode(a,{onAction:s.goFullscreen},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("goFullscreen.button")),1)]),_:1},8,["onAction"]),createVNode(a,{onAction:e[4]||(e[4]=d=>n.$bluemap.resetCamera())},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("resetCamera.button")),1)]),_:1}),createVNode(a,{onAction:e[5]||(e[5]=d=>n.$bluemap.takeScreenshot())},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("screenshot.button")),1)]),_:1}),createVNode(a,{onAction:e[6]||(e[6]=d=>n.$bluemap.updateMap()),title:n.$t("updateMap.tooltip")},{default:withCtx(()=>[createTextVNode(toDisplayString$1(n.$t("updateMap.button")),1)]),_:1},8,["title"])])):createCommentVNode("",!0),t.menu.currentPage().id==="maps"?(openBlock(),createElementBlock("div",_hoisted_3$2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.appState.maps,d=>(openBlock(),createBlock(o,{key:d.id,map:d},null,8,["map"]))),128))])):createCommentVNode("",!0),t.menu.currentPage().id==="markers"?(openBlock(),createBlock(l,{key:2,menu:t.menu},null,8,["menu"])):createCommentVNode("",!0),t.menu.currentPage().id==="settings"?(openBlock(),createBlock(c,{key:3})):createCommentVNode("",!0),t.menu.currentPage().id==="info"?(openBlock(),createElementBlock("div",{key:4,class:"info-content",innerHTML:n.$t("info.content",{version:n.$bluemap.settings.version})},null,8,_hoisted_4$1)):createCommentVNode("",!0)]),_:1},8,["open","title","back"])}const MainMenu=_export_sfc(_sfc_main$3,[["render",_sfc_render$3]]),FreeFlightMobileControls_vue_vue_type_style_index_0_lang="",_sfc_main$2={name:"FreeFlightMobileControls",data(){return{enabled:!1,forward:0,forwardPointer:-1,up:0,upPointer:-1}},methods:{onTouchStop(n){console.log("Stop: ",n),n.changedTouches[0].identifier===this.forwardPointer&&(this.forward=0),n.changedTouches[0].identifier===this.upPointer&&(this.up=0)},onFrame(n){let e=this.$bluemap.mapViewer.controlsManager;e.position.x+=this.forward*Math.sin(e.rotation)*n.detail.delta*.02,e.position.z+=this.forward*-Math.cos(e.rotation)*n.detail.delta*.02,e.position.y+=this.up*n.detail.delta*.01},enable(){this.enabled=!0}},mounted(){window.addEventListener("touchstart",this.enable,{passive:!0}),window.addEventListener("touchend",this.onTouchStop),window.addEventListener("touchcancel",this.onTouchStop),this.$bluemap.events.addEventListener("bluemapRenderFrame",this.onFrame)},beforeUnmount(){window.removeEventListener("touchstart",this.enable),window.removeEventListener("touchend",this.onTouchStop),window.removeEventListener("touchcancel",this.onTouchStop),this.$bluemap.events.removeEventListener("bluemapRenderFrame",this.onFrame)}},_hoisted_1$2={class:"move-fields"},_hoisted_2$1=createBaseVNode("svg",{viewBox:"0 0 100 50"},[createBaseVNode("path",{d:`M6.75,48.375c-2.75,0-3.384-1.565-1.409-3.479L46.41,5.104c1.975-1.914,5.207-1.913,7.182,0l41.067,39.792\r
            c1.975,1.914,1.341,3.479-1.409,3.479H6.75z`})],-1),_hoisted_3$1=[_hoisted_2$1],_hoisted_4=createBaseVNode("svg",{viewBox:"0 0 100 50",class:"down"},[createBaseVNode("path",{d:`M6.75,48.375c-2.75,0-3.384-1.565-1.409-3.479L46.41,5.104c1.975-1.914,5.207-1.913,7.182,0l41.067,39.792\r
            c1.975,1.914,1.341,3.479-1.409,3.479H6.75z`})],-1),_hoisted_5=[_hoisted_4],_hoisted_6={class:"height-fields"},_hoisted_7=createBaseVNode("svg",{viewBox:"0 0 100 50"},[createBaseVNode("path",{d:`M6.75,48.375c-2.75,0-3.384-1.565-1.409-3.479L46.41,5.104c1.975-1.914,5.207-1.913,7.182,0l41.067,39.792\r
            c1.975,1.914,1.341,3.479-1.409,3.479H6.75z`})],-1),_hoisted_8=[_hoisted_7],_hoisted_9=createBaseVNode("svg",{viewBox:"0 0 100 50",class:"down"},[createBaseVNode("path",{d:`M6.75,48.375c-2.75,0-3.384-1.565-1.409-3.479L46.41,5.104c1.975-1.914,5.207-1.913,7.182,0l41.067,39.792\r
            c1.975,1.914,1.341,3.479-1.409,3.479H6.75z`})],-1),_hoisted_10=[_hoisted_9];function _sfc_render$2(n,e,t,i,r,s){return openBlock(),createElementBlock("div",{id:"ff-mobile-controls",class:normalizeClass({disabled:!r.enabled})},[createBaseVNode("div",_hoisted_1$2,[createBaseVNode("div",{class:"button up-button",onTouchstartPassive:e[0]||(e[0]=a=>{r.forward=1,r.forwardPointer=a.changedTouches[0].identifier,a.preventDefault()})},_hoisted_3$1,32),createBaseVNode("div",{class:"button down-button",onTouchstartPassive:e[1]||(e[1]=a=>{r.forward=-1,r.forwardPointer=a.changedTouches[0].identifier,a.preventDefault()})},_hoisted_5,32)]),createBaseVNode("div",_hoisted_6,[createBaseVNode("div",{class:"button up-button",onTouchstartPassive:e[2]||(e[2]=a=>{r.up=1,r.upPointer=a.changedTouches[0].identifier,a.preventDefault()})},_hoisted_8,32),createBaseVNode("div",{class:"button down-button",onTouchstartPassive:e[3]||(e[3]=a=>{r.up=-1,r.upPointer=a.changedTouches[0].identifier,a.preventDefault()})},_hoisted_10,32)])],2)}const FreeFlightMobileControls=_export_sfc(_sfc_main$2,[["render",_sfc_render$2]]),ZoomButtons_vue_vue_type_style_index_0_lang="",_sfc_main$1={name:"ZoomButtons",components:{SvgButton},methods:{zoom(n){var t;let e=(t=this.$bluemap.mapViewer.controlsManager.controls)==null?void 0:t.mouseZoom;e&&(e.deltaZoom+=n)}}},_hoisted_1$1={id:"zoom-buttons"},_hoisted_2=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("path",{d:`M22.471,12.95H17.05V7.527c0-1.297-0.917-2.348-2.05-2.348c-1.132,0-2.05,1.051-2.05,2.348v5.423H7.527\r
	c-1.297,0-2.348,0.917-2.348,2.05c0,1.132,1.051,2.05,2.348,2.05h5.423v5.421c0,1.299,0.918,2.351,2.05,2.351\r
	c1.133,0,2.05-1.052,2.05-2.351V17.05h5.421c1.299,0,2.351-0.918,2.351-2.05C24.821,13.867,23.77,12.95,22.471,12.95z`})],-1),_hoisted_3=createBaseVNode("svg",{viewBox:"0 0 30 30"},[createBaseVNode("g",null,[createBaseVNode("path",{d:`M24.821,15c0,1.132-1.052,2.05-2.351,2.05H7.527c-1.297,0-2.348-0.918-2.348-2.05l0,0c0-1.133,1.051-2.05,2.348-2.05\r
		h14.944C23.77,12.95,24.821,13.867,24.821,15L24.821,15z`})])],-1);function _sfc_render$1(n,e,t,i,r,s){const a=resolveComponent("SvgButton");return openBlock(),createElementBlock("div",_hoisted_1$1,[createVNode(a,{onAction:e[0]||(e[0]=o=>s.zoom(-3))},{default:withCtx(()=>[_hoisted_2]),_:1}),createVNode(a,{onAction:e[1]||(e[1]=o=>s.zoom(3))},{default:withCtx(()=>[_hoisted_3]),_:1})])}const ZoomButtons=_export_sfc(_sfc_main$1,[["render",_sfc_render$1]]),App_vue_vue_type_style_index_0_lang="",_sfc_main={name:"App",components:{FreeFlightMobileControls,MainMenu,ControlBar,ZoomButtons},computed:{showMapMenu(){return this.mapViewer.mapState==="loading"||this.mapViewer.mapState==="loaded"}},data(){return{appState:this.$bluemap.appState,mapViewer:this.$bluemap.mapViewer.data}}},_hoisted_1={key:2,class:"map-state-message"};function _sfc_render(n,e,t,i,r,s){const a=resolveComponent("FreeFlightMobileControls"),o=resolveComponent("ZoomButtons"),l=resolveComponent("ControlBar"),c=resolveComponent("MainMenu");return openBlock(),createElementBlock("div",{id:"app",class:normalizeClass({"theme-light":r.appState.theme==="light","theme-dark":r.appState.theme==="dark","theme-contrast":r.appState.theme==="contrast"})},[r.mapViewer.mapLoaded&&r.appState.controls.state==="free"?(openBlock(),createBlock(a,{key:0})):createCommentVNode("",!0),s.showMapMenu&&r.appState.controls.showZoomButtons&&r.appState.controls.state!=="free"?(openBlock(),createBlock(o,{key:1})):createCommentVNode("",!0),createVNode(l),r.mapViewer.mapState!=="loaded"?(openBlock(),createElementBlock("div",_hoisted_1,toDisplayString$1(n.$t("map."+r.mapViewer.mapState)),1)):createCommentVNode("",!0),createVNode(c,{menu:r.appState.menu},null,8,["menu"])],2)}const App=_export_sfc(_sfc_main,[["render",_sfc_render]]);class Tile{constructor(e,t,i,r){Object.defineProperty(this,"isTile",{value:!0}),this.model=null,this.onLoad=i,this.onUnload=r,this.x=e,this.z=t,this.unloaded=!0,this.loading=!1}load(e){return this.loading?Promise.reject("tile is already loading!"):(this.loading=!0,this.unload(),this.unloaded=!1,e.load(this.x,this.z,()=>this.unloaded).then(t=>{if(this.unloaded){Tile.disposeModel(t);return}this.model=t,this.onLoad(this)}).finally(()=>{this.loading=!1}))}unload(){this.unloaded=!0,this.model&&(this.onUnload(this),Tile.disposeModel(this.model),this.model=null)}static disposeModel(e){var t,i;((t=e.userData)==null?void 0:t.tileType)==="hires"?e.geometry.dispose():((i=e.userData)==null?void 0:i.tileType)==="lowres"&&(e.material.uniforms.textureImage.value.dispose(),e.material.dispose())}get loaded(){return!!this.model}}class TileMap{constructor(e,t){this.canvas=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.canvas.width=e,this.canvas.height=t,this.tileMapContext=this.canvas.getContext("2d",{alpha:!1,willReadFrequently:!0}),this.texture=new Texture(this.canvas),this.texture.generateMipmaps=!1,this.texture.magFilter=LinearFilter,this.texture.minFilter=LinearFilter,this.texture.wrapS=ClampToEdgeWrapping,this.texture.wrapT=ClampToEdgeWrapping,this.texture.flipY=!1,this.texture.needsUpdate=!0}setAll(e){this.tileMapContext.fillStyle=e,this.tileMapContext.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture.needsUpdate=!0}setTile(e,t,i){this.tileMapContext.fillStyle=i,this.tileMapContext.fillRect(e,t,1,1),this.texture.needsUpdate=!0}}ge(TileMap,"EMPTY","#000"),ge(TileMap,"LOADED","#fff");const pt=class{constructor(e,t=null,i=null,r=null){ge(this,"loadCloseTiles",()=>{this.unloaded||this.loadNextTile()&&(this.loadTimeout&&clearTimeout(this.loadTimeout),this.currentlyLoading<8?this.loadTimeout=setTimeout(this.loadCloseTiles,0):this.loadTimeout=setTimeout(this.loadCloseTiles,1e3))});ge(this,"handleLoadedTile",e=>{this.tileMap.setTile(e.x-this.centerTile.x+pt.tileMapHalfSize,e.z-this.centerTile.y+pt.tileMapHalfSize,TileMap.LOADED),this.scene.add(e.model),this.onTileLoad(e)});ge(this,"handleUnloadedTile",e=>{this.tileMap.setTile(e.x-this.centerTile.x+pt.tileMapHalfSize,e.z-this.centerTile.y+pt.tileMapHalfSize,TileMap.EMPTY),this.scene.remove(e.model),this.onTileUnload(e)});Object.defineProperty(this,"isTileManager",{value:!0}),this.sceneParent=new Scene,this.scene=new Group$1,this.sceneParent.add(this.scene),this.events=r,this.tileLoader=e,this.onTileLoad=t||function(){},this.onTileUnload=i||function(){},this.viewDistanceX=1,this.viewDistanceZ=1,this.centerTile=new Vector2(0,0),this.currentlyLoading=0,this.loadTimeout=null,this.tiles=new Map,this.tileMap=new TileMap(pt.tileMapSize,pt.tileMapSize),this.unloaded=!0}loadAroundTile(e,t,i,r){this.unloaded=!1;let s=!1;if((this.viewDistanceX>i||this.viewDistanceZ>r)&&(s=!0),this.viewDistanceX=i,this.viewDistanceZ=r,i<=0||r<=0){this.removeAllTiles();return}(s||this.centerTile.x!==e||this.centerTile.y!==t)&&(this.centerTile.set(e,t),this.removeFarTiles(),this.tileMap.setAll(TileMap.EMPTY),this.tiles.forEach(a=>{!a.loading&&!a.unloaded&&this.tileMap.setTile(a.x-this.centerTile.x+pt.tileMapHalfSize,a.z-this.centerTile.y+pt.tileMapHalfSize,TileMap.LOADED)})),this.loadCloseTiles()}unload(){this.unloaded=!0,this.removeAllTiles()}removeFarTiles(){this.tiles.forEach((e,t,i)=>{(e.x+this.viewDistanceX<this.centerTile.x||e.x-this.viewDistanceX>this.centerTile.x||e.z+this.viewDistanceZ<this.centerTile.y||e.z-this.viewDistanceZ>this.centerTile.y)&&(e.unload(),i.delete(t))})}removeAllTiles(){this.tileMap.setAll(TileMap.EMPTY),this.tiles.forEach(e=>{e.unload()}),this.tiles.clear()}loadNextTile(){if(this.unloaded)return!1;let e=0,t=0,i=1,r=1;for(;r<Math.max(this.viewDistanceX,this.viewDistanceZ)*2+1;){for(;2*e*i<r;){if(this.tryLoadTile(this.centerTile.x+e,this.centerTile.y+t))return!0;e=e+i}for(;2*t*i<r;){if(this.tryLoadTile(this.centerTile.x+e,this.centerTile.y+t))return!0;t=t+i}i=-1*i,r=r+1}return!1}tryLoadTile(e,t){if(this.unloaded||Math.abs(e-this.centerTile.x)>this.viewDistanceX||Math.abs(t-this.centerTile.y)>this.viewDistanceZ)return!1;let i=hashTile(e,t),r=this.tiles.get(i);return r!==void 0?!1:(this.currentlyLoading++,r=new Tile(e,t,this.handleLoadedTile,this.handleUnloadedTile),this.tiles.set(i,r),r.load(this.tileLoader).then(()=>{this.loadTimeout&&clearTimeout(this.loadTimeout),this.loadTimeout=setTimeout(this.loadCloseTiles,0)}).catch(s=>{}).finally(()=>{this.currentlyLoading--}),!0)}};let TileManager=pt;ge(TileManager,"tileMapSize",100),ge(TileManager,"tileMapHalfSize",pt.tileMapSize/2);class TileLoader{constructor(e,t,i,r=()=>Promise.resolve(),s=0){ge(this,"load",(e,t,i=()=>!1)=>{let r=this.tilePath+pathFromCoords(e,t)+".json";return new Promise((s,a)=>{this.fileLoader.load(r+"?"+this.tileCacheHash,async o=>{let l=o.tileGeometry||{};if(!l.type||l.type!=="BufferGeometry"){a({status:"empty"});return}if(await this.loadBlocker(),i()){a({status:"cancelled"});return}let c=this.bufferGeometryLoader.parse(l),u=new Mesh(c,this.material),d=this.tileSettings.tileSize,f=this.tileSettings.translate,g=this.tileSettings.scale;u.position.set(e*d.x+f.x,0,t*d.z+f.z),u.scale.set(g.x,1,g.z),u.userData.tileUrl=r,u.userData.tileType="hires",u.updateMatrixWorld(!0),s(u)},()=>{},a)})});Object.defineProperty(this,"isTileLoader",{value:!0}),this.tilePath=e,this.material=t,this.tileSettings=i,this.tileCacheHash=s,this.loadBlocker=r,this.fileLoader=new FileLoader,this.fileLoader.setResponseType("json"),this.bufferGeometryLoader=new BufferGeometryLoader}}class LowresTileLoader{constructor(e,t,i,r,s,a,o=()=>Promise.resolve(),l=0){ge(this,"load",(e,t,i=()=>!1)=>{let r=this.tilePath+this.lod+"/"+pathFromCoords(e,t)+".png";return new Promise((s,a)=>{this.textureLoader.load(r+"?"+this.tileCacheHash,async o=>{if(o.anisotropy=1,o.generateMipmaps=!1,o.magFilter=NearestFilter,o.minFilter=o.generateMipmaps?NearestMipMapLinearFilter:NearestFilter,o.wrapS=ClampToEdgeWrapping,o.wrapT=ClampToEdgeWrapping,o.flipY=!1,o.flatShading=!0,await this.loadBlocker(),i()){o.dispose(),a({status:"cancelled"});return}const l=Math.pow(this.tileSettings.lodFactor,this.lod-1);let c=new ShaderMaterial({uniforms:{...this.uniforms,tileSize:{value:new Vector2(this.tileSettings.tileSize.x,this.tileSettings.tileSize.z)},textureSize:{value:new Vector2(o.image.width,o.image.height)},textureImage:{type:"t",value:o},lod:{value:this.lod},lodScale:{value:l}},vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,depthWrite:!0,depthTest:!0,vertexColors:!0,side:FrontSide,wireframe:!1}),u=new Mesh(this.geometry,c);u.position.set(e*this.tileSettings.tileSize.x*l,0,t*this.tileSettings.tileSize.z*l),u.scale.set(l,1,l),u.userData.tileUrl=r,u.userData.tileType="lowres",u.updateMatrixWorld(!0),s(u)},void 0,a)})});Object.defineProperty(this,"isLowresTileLoader",{value:!0}),this.tilePath=e,this.tileSettings=t,this.lod=i,this.loadBlocker=o,this.tileCacheHash=l,this.vertexShader=r,this.fragmentShader=s,this.uniforms=a,this.textureLoader=new TextureLoader,this.geometry=new PlaneGeometry(t.tileSize.x+1,t.tileSize.z+1,Math.ceil(100/(i*2)),Math.ceil(100/(i*2))),this.geometry.deleteAttribute("normal"),this.geometry.deleteAttribute("uv"),this.geometry.rotateX(-Math.PI/2),this.geometry.translate(t.tileSize.x/2+1,0,t.tileSize.x/2+1)}}let Map$1=class{constructor(e,t,i,r=null){ge(this,"onTileLoad",e=>t=>{dispatchEvent(this.events,"bluemapMapTileLoaded",{tile:t,layer:e})});ge(this,"onTileUnload",e=>t=>{dispatchEvent(this.events,"bluemapMapTileUnloaded",{tile:t,layer:e})});Object.defineProperty(this,"isMap",{value:!0}),this.loadBlocker=i,this.events=r,this.data=reactive({id:e,sorting:1e6,dataUrl:t,settingsUrl:t+"settings.json",texturesUrl:t+"textures.json",name:e,startPos:{x:0,z:0},skyColor:new Color,ambientLight:0,hires:{tileSize:{x:32,z:32},scale:{x:1,z:1},translate:{x:2,z:2}},lowres:{tileSize:{x:32,z:32},lodFactor:5,lodCount:3}}),this.raycaster=new Raycaster,this.hiresMaterial=null,this.lowresMaterial=null,this.loadedTextures=[],this.hiresTileManager=null,this.lowresTileManager=null}load(e,t,i,r,s,a=0){this.unload();let o=this.loadSettings(),l=this.loadTexturesFile();return this.lowresMaterial=this.createLowresMaterial(i,r,s),Promise.all([o,l]).then(c=>{let u=c[1];if(u===null)throw new Error("Failed to parse textures.json!");this.hiresMaterial=this.createHiresMaterial(e,t,s,u),this.hiresTileManager=new TileManager(new TileLoader(`${this.data.dataUrl}tiles/0/`,this.hiresMaterial,this.data.hires,this.loadBlocker,a),this.onTileLoad("hires"),this.onTileUnload("hires"),this.events),this.hiresTileManager.scene.matrixWorldAutoUpdate=!1,this.lowresTileManager=[];for(let d=0;d<this.data.lowres.lodCount;d++)this.lowresTileManager[d]=new TileManager(new LowresTileLoader(`${this.data.dataUrl}tiles/`,this.data.lowres,d+1,i,r,s,async()=>{},a),this.onTileLoad("lowres"),this.onTileUnload("lowres"),this.events),this.lowresTileManager[d].scene.matrixWorldAutoUpdate=!1;alert(this.events,`Map '${this.data.id}' is loaded.`,"fine")})}loadSettings(){return this.loadSettingsFile().then(e=>{this.data.name=e.name?e.name:this.data.name,this.data.sorting=Number.isInteger(e.sorting)?e.sorting:this.data.sorting,this.data.startPos={...this.data.startPos,...vecArrToObj(e.startPos,!0)},e.skyColor&&e.skyColor.length>=3&&this.data.skyColor.setRGB(e.skyColor[0],e.skyColor[1],e.skyColor[2]),this.data.ambientLight=e.ambientLight?e.ambientLight:this.data.ambientLight,e.hires===void 0&&(e.hires={}),e.lowres===void 0&&(e.lowres={}),this.data.hires={tileSize:{...this.data.hires.tileSize,...vecArrToObj(e.hires.tileSize,!0)},scale:{...this.data.hires.scale,...vecArrToObj(e.hires.scale,!0)},translate:{...this.data.hires.translate,...vecArrToObj(e.hires.translate,!0)}},this.data.lowres={tileSize:{...this.data.lowres.tileSize,...vecArrToObj(e.lowres.tileSize,!0)},lodFactor:e.lowres.lodFactor!==void 0?e.lowres.lodFactor:this.data.lowres.lodFactor,lodCount:e.lowres.lodCount!==void 0?e.lowres.lodCount:this.data.lowres.lodCount},alert(this.events,`Settings for map '${this.data.id}' loaded.`,"fine")})}loadMapArea(e,t,i,r){if(!this.isLoaded)return;for(let c=this.lowresTileManager.length-1;c>=0;c--){const u=c+1,d=Math.pow(this.data.lowres.lodFactor,u-1),f=Math.floor(e/(this.data.lowres.tileSize.x*d)),g=Math.floor(t/(this.data.lowres.tileSize.z*d)),x=Math.floor(r/this.data.lowres.tileSize.x),_=Math.floor(r/this.data.lowres.tileSize.z);this.lowresTileManager[c].loadAroundTile(f,g,x,_)}const s=Math.floor((e-this.data.hires.translate.x)/this.data.hires.tileSize.x),a=Math.floor((t-this.data.hires.translate.z)/this.data.hires.tileSize.z),o=Math.floor(i/this.data.hires.tileSize.x),l=Math.floor(i/this.data.hires.tileSize.z);this.hiresTileManager.loadAroundTile(s,a,o,l)}loadSettingsFile(){return new Promise((e,t)=>{alert(this.events,`Loading settings for map '${this.data.id}'...`,"fine");let i=new FileLoader;i.setResponseType("json"),i.load(this.data.settingsUrl+"?"+generateCacheHash(),e,()=>{},()=>t(`Failed to load the settings.json for map: ${this.data.id}`))})}loadTexturesFile(){return new Promise((e,t)=>{alert(this.events,`Loading textures for map '${this.data.id}'...`,"fine");let i=new FileLoader;i.setResponseType("json"),i.load(this.data.texturesUrl+"?"+generateCacheHash(),e,()=>{},()=>t(`Failed to load the textures.json for map: ${this.data.id}`))})}createHiresMaterial(e,t,i,r){let s=[];if(!Array.isArray(r))throw new Error("Invalid texture.json: 'textures' is not an array!");for(let a=0;a<r.length;a++){let o=r[a],l=o.color;(!Array.isArray(l)||l.length<4)&&(l=[0,0,0,0]);let c=l[3]===1,u=!!o.halfTransparent,d=new Texture;d.image=stringToImage(o.texture),d.anisotropy=1,d.generateMipmaps=c||u,d.magFilter=NearestFilter,d.minFilter=d.generateMipmaps?NearestMipMapLinearFilter:NearestFilter,d.wrapS=ClampToEdgeWrapping,d.wrapT=ClampToEdgeWrapping,d.flipY=!1,d.flatShading=!0,d.image.addEventListener("load",()=>d.needsUpdate=!0),this.loadedTextures.push(d);let f=new ShaderMaterial({uniforms:{...i,textureImage:{type:"t",value:d},transparent:{value:u}},vertexShader:e,fragmentShader:t,transparent:u,depthWrite:!0,depthTest:!0,vertexColors:!0,side:FrontSide,wireframe:!1});f.needsUpdate=!0,s[a]=f}return s}createLowresMaterial(e,t,i){return new ShaderMaterial({uniforms:i,vertexShader:e,fragmentShader:t,transparent:!1,depthWrite:!0,depthTest:!0,vertexColors:!0,side:FrontSide,wireframe:!1})}unload(){if(this.hiresTileManager&&this.hiresTileManager.unload(),this.hiresTileManager=null,this.lowresTileManager){for(let e=0;e<this.lowresTileManager.length;e++)this.lowresTileManager[e].unload();this.lowresTileManager=null}this.hiresMaterial&&this.hiresMaterial.forEach(e=>e.dispose()),this.hiresMaterial=null,this.lowresMaterial&&this.lowresMaterial.dispose(),this.lowresMaterial=null,this.loadedTextures.forEach(e=>e.dispose()),this.loadedTextures=[]}terrainHeightAt(e,t){var s,a,o;if(!this.isLoaded)return!1;this.raycaster.set(new Vector3(e,300,t),new Vector3(0,-1,0)),this.raycaster.near=1,this.raycaster.far=300,this.raycaster.layers.enableAll();let i=hashTile(Math.floor((e-this.data.hires.translate.x)/this.data.hires.tileSize.x),Math.floor((t-this.data.hires.translate.z)/this.data.hires.tileSize.z)),r=this.hiresTileManager.tiles.get(i);if(r!=null&&r.model)try{let l=this.raycaster.intersectObjects([r.model]);if(l.length>0)return l[0].point.y}catch{}for(let l=0;l<this.lowresTileManager.length;l++){const c=l+1,u=Math.pow(this.data.lowres.lodFactor,c-1),d={x:this.data.lowres.tileSize.x*u,z:this.data.lowres.tileSize.z*u},f=Math.floor(e/d.x),g=Math.floor(t/d.z);let x=hashTile(f,g);if(r=this.lowresTileManager[l].tiles.get(x),!r||!r.model)continue;const _=(o=(a=(s=r.model.material.uniforms)==null?void 0:s.textureImage)==null?void 0:a.value)==null?void 0:o.image;if(_==null)continue;const m=getPixel(_,e-f*d.x,t-g*d.z+this.data.lowres.tileSize.z+1);let v=m[1]*256+m[2];return v>=32768?-(65535-v):v}return!1}dispose(){this.unload()}get isLoaded(){return!!(this.hiresMaterial&&this.lowresMaterial)}};const SKY_FRAGMENT_SHADER=`
uniform float sunlightStrength;
uniform float ambientLight;
uniform vec3 skyColor;

varying vec3 vPosition;

void main() {
	float horizonWidth = 0.005;
	float horizonHeight = 0.0;
	
	vec4 color = vec4(skyColor * max(sunlightStrength * sunlightStrength, ambientLight), 1.0);
	float voidMultiplier = (clamp(vPosition.y - horizonHeight, -horizonWidth, horizonWidth) + horizonWidth) / (horizonWidth * 2.0);
	color.rgb *= voidMultiplier;

	gl_FragColor = color;
}
`,SKY_VERTEX_SHADER=`
varying vec3 vPosition;
void main() {
	vPosition = position;
	
	gl_Position = 
		projectionMatrix *
		modelViewMatrix *
		vec4(position, 1);
}
`;class SkyboxScene extends Scene{constructor(e){super(),this.matrixWorldAutoUpdate=!1,Object.defineProperty(this,"isSkyboxScene",{value:!0});let t=new SphereGeometry(1,40,5),i=new ShaderMaterial({uniforms:e,vertexShader:SKY_VERTEX_SHADER,fragmentShader:SKY_FRAGMENT_SHADER,side:BackSide}),r=new Mesh(t,i);this.add(r)}}class ControlsManager{constructor(e,t){Object.defineProperty(this,"isControlsManager",{value:!0}),this.data=reactive({mapViewer:null,camera:null,controls:null,position:new Vector3(0,0,0),rotation:0,angle:0,tilt:0}),this.mapViewer=e,this.camera=t,this.lastPosition=this.position.clone(),this.lastRotation=this.rotation,this.lastAngle=this.angle,this.lastDistance=this.distance,this.lastOrtho=this.ortho,this.lastTilt=this.tilt,this.lastMapUpdatePosition=this.position.clone(),this.lastMapUpdateDistance=this.distance,this.averageDeltaTime=16,this._controls=null,this.distance=300,this.position.set(0,0,0),this.rotation=0,this.angle=0,this.tilt=0,this.ortho=0,this.updateCamera()}update(e,t){e>50&&(e=50),this.averageDeltaTime=this.averageDeltaTime*.9+e*.1,this._controls&&this._controls.update(this.averageDeltaTime,t),this.updateCamera()}updateCamera(){let e=this.isValueChanged();if(e){for(this.resetValueChanged();this.rotation>=Math.PI;)this.rotation-=Math.PI*2;for(;this.rotation<=-Math.PI;)this.rotation+=Math.PI*2;let t=this.angle;Math.abs(t)<=1e-4?t=1e-4:Math.abs(t)-Math.PI<=1e-4&&(t=t-1e-4);let i=this.distance;Math.abs(i)<=1e-4&&(i=1e-4),this.ortho>0&&(i=MathUtils.lerp(i,Math.max(i,300),Math.pow(this.ortho,8)));let r=new Vector3(Math.sin(this.rotation),0,-Math.cos(this.rotation)),s=new Vector3(0,1,0).cross(r);if(r.applyAxisAngle(s,Math.PI/2-t),r.multiplyScalar(i),this.camera.rotation.set(0,0,0),this.camera.position.copy(this.position).sub(r),this.camera.lookAt(this.position),this.camera.rotateZ(this.tilt+t<0?Math.PI:0),this.ortho<=0){let a=MathUtils.clamp(i/1e3,.01,1),o=MathUtils.clamp(i*2,Math.max(a+1,2e3),i+5e3);o-a>1e4&&(a=o-1e4),this.camera.near=a,this.camera.far=o}else this.angle===0?(this.camera.near=1,this.camera.far=i+300):(this.camera.near=1,this.camera.far=1e5);dispatchEvent(this.mapViewer.events,"bluemapCameraMoved",{controlsManager:this,camera:this.camera})}if(this.mapViewer.map){let t=1;e&&(this.distance>300?t=this.mapViewer.data.loadedLowresViewDistance*.5:t=this.mapViewer.data.loadedHiresViewDistance*.5),(Math.abs(this.lastMapUpdatePosition.x-this.position.x)>=t||Math.abs(this.lastMapUpdatePosition.z-this.position.z)>=t||this.distance<1e3&&this.lastMapUpdateDistance>1e3)&&(this.lastMapUpdatePosition=this.position.clone(),this.lastMapUpdateDistance=this.distance,this.mapViewer.loadMapArea(this.position.x,this.position.z))}}handleMapInteraction(e,t={}){this.mapViewer.handleMapInteraction(e,t)}isValueChanged(){return!(this.data.position.equals(this.lastPosition)&&this.data.rotation===this.lastRotation&&this.data.angle===this.lastAngle&&this.distance===this.lastDistance&&this.ortho===this.lastOrtho&&this.data.tilt===this.lastTilt)}resetValueChanged(){this.lastPosition.copy(this.data.position),this.lastRotation=this.data.rotation,this.lastAngle=this.data.angle,this.lastDistance=this.distance,this.lastOrtho=this.ortho,this.lastTilt=this.data.tilt}get ortho(){return this.camera.ortho}set ortho(e){this.camera.ortho=e}get distance(){return this.camera.distance}set distance(e){this.camera.distance=e}set controls(e){this._controls&&this._controls.stop&&this._controls.stop(),this._controls=e,e&&(this.data.controls=e.data||null),this._controls&&this._controls.start&&this._controls.start(this)}get controls(){return this._controls}get mapViewer(){return this._mapViewer}set mapViewer(e){this._mapViewer=e,this.data.mapViewer=e.data}get camera(){return this._camera}set camera(e){this._camera=e,this.data.camera=e.data}get position(){return this.data.position}set position(e){this.data.position=e}get rotation(){return this.data.rotation}set rotation(e){this.data.rotation=e}get angle(){return this.data.angle}set angle(e){this.data.angle=e}get tilt(){return this.data.tilt}set tilt(e){this.data.tilt=e}}let Stats=function(){let n=0,e=document.createElement("div");e.style.cssText="position:absolute;bottom:5px;right:5px;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),i(++n%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function i(g){for(let x=0;x<e.children.length;x++)e.children[x].style.display=x===g?"block":"none";n=g}function r(){i(-1)}let s=(performance||Date).now(),a=s,o=0,l=s,c=t(new Stats.Panel("FPS","#0ff","#002")),u=t(new Stats.Panel("MS (render)","#0f0","#020")),d=t(new Stats.Panel("MS (all)","#f80","#210")),f=null;return self.performance&&self.performance.memory&&(f=t(new Stats.Panel("MB","#f08","#201"))),i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,hide:r,begin:function(){s=(performance||Date).now()},end:function(){o++;let g=(performance||Date).now();if(u.update(g-s,200),d.update(g-l,200),g>=a+1e3&&(c.update(o*1e3/(g-a),100),a=g,o=0,f)){let x=performance.memory;f.update(x.usedJSHeapSize/1048576,x.jsHeapSizeLimit/1048576)}return g},update:function(){s=this.end(),l=s},domElement:e,setMode:i}};Stats.Panel=function(n,e,t){let i=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=160*a,l=96*a,c=3*a,u=3*a,d=3*a,f=15*a,g=154*a,x=77*a,_=document.createElement("canvas");_.width=o,_.height=l,_.style.cssText="width:160px;height:96px";let m=_.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(n,c,u),m.fillRect(d,f,g,x),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d,f,g,x),{dom:_,update:function(v,T){i=Math.min(i,v),r=Math.max(r,v),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,f),m.fillStyle=e,m.fillText(s(v)+" "+n+" ("+s(i)+"-"+s(r)+")",c,u),m.drawImage(_,d+a,f,g-a,x,d,f,g-a,x),m.fillRect(d+g-a,f,a,x),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d+g-a,f,a,s((1-v/T)*x))}}};const HIRES_VERTEX_SHADER=`
#include <common>
${ShaderChunk.logdepthbuf_pars_vertex}

attribute float ao;
attribute float sunlight;
attribute float blocklight;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vColor;
varying float vAo;
varying float vSunlight;
varying float vBlocklight;

void main() {
	vPosition = position;
	vNormal = normal;
	vUv = uv;
	vColor = color;
	vAo = ao;
	vSunlight = sunlight;
	vBlocklight = blocklight;
	
	gl_Position = projectionMatrix * (viewMatrix * modelMatrix * vec4(position, 1));
	
	${ShaderChunk.logdepthbuf_vertex} 
}
`,HIRES_FRAGMENT_SHADER=`
${ShaderChunk.logdepthbuf_pars_fragment}

#ifndef texture
	#define texture texture2D
#endif

uniform sampler2D textureImage;
uniform float sunlightStrength;
uniform float ambientLight;

varying vec3 vPosition;
//varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vColor;
varying float vAo;
varying float vSunlight;
varying float vBlocklight;
//varying float vDistance;

void main() {
	vec4 color = texture(textureImage, vUv);
	if (color.a <= 0.01) discard;
	
	//apply vertex-color
	color.rgb *= vColor.rgb;

	//apply ao
	color.rgb *= vAo;
	
	//apply light
	float light = mix(vBlocklight, max(vSunlight, vBlocklight), sunlightStrength);
	color.rgb *= mix(ambientLight, 1.0, light / 15.0);
	
	gl_FragColor = color;
	
	${ShaderChunk.logdepthbuf_fragment}
}
`,LOWRES_VERTEX_SHADER=`
#include <common>
${ShaderChunk.logdepthbuf_pars_vertex}

uniform sampler2D textureImage;
uniform vec2 tileSize;
uniform vec2 textureSize;

varying vec3 vPosition;
varying vec3 vWorldPosition;
//varying float vDistance;

float metaToHeight(vec4 meta) {
	float heightUnsigned = meta.g * 65280.0 + meta.b * 255.0;
	if (heightUnsigned >= 32768.0) {
		return -(65535.0 - heightUnsigned);
	} else {
		return heightUnsigned;	
	}
}

vec2 posToMetaUV(vec2 pos) {
	return vec2(pos.x / textureSize.x, pos.y / textureSize.y + 0.5);
}

void main() {
	vPosition = position;
	
	vec4 meta = texture(textureImage, posToMetaUV(position.xz));
	vPosition.y = metaToHeight(meta) + 1.0 - position.x * 0.0001 - position.z * 0.0002; //including small offset-tilt to prevent z-fighting
	
	vec4 worldPos = modelMatrix * vec4(vPosition, 1);
	vec4 viewPos = viewMatrix * worldPos;
	
	vWorldPosition = worldPos.xyz;
	//vDistance = -viewPos.z;
	
	gl_Position = projectionMatrix * viewPos;
		
	${ShaderChunk.logdepthbuf_vertex}
}

`,LOWRES_FRAGMENT_SHADER=`
${ShaderChunk.logdepthbuf_pars_fragment}

#define PI 3.1415926535897932

#ifndef texture
	#define texture texture2D
#endif

struct TileMap {
	sampler2D map;
	float size;
	vec2 scale;
	vec2 translate;
	vec2 pos; 
};

uniform float distance;
uniform float sunlightStrength;
uniform float ambientLight;
uniform TileMap hiresTileMap;
uniform sampler2D textureImage;
uniform vec2 tileSize;
uniform vec2 textureSize;
uniform float lod;
uniform float lodScale;

varying vec3 vPosition;
varying vec3 vWorldPosition;
//varying float vDistance;

float metaToHeight(vec4 meta) {
	float heightUnsigned = meta.g * 65280.0 + meta.b * 255.0;
	if (heightUnsigned >= 32768.0) {
		return -(65535.0 - heightUnsigned);
	} else {
		return heightUnsigned;	
	}
}

float metaToLight(vec4 meta) {
	return meta.r * 255.0;
}

vec2 posToColorUV(vec2 pos) {
	return vec2(pos.x / textureSize.x, min(pos.y, tileSize.y) / textureSize.y);
}

vec2 posToMetaUV(vec2 pos) {
	return vec2(pos.x / textureSize.x, pos.y / textureSize.y + 0.5);
}


void main() {
	//discard if hires tile is loaded at that position
	if (distance < 1000.0 && texture(hiresTileMap.map, ((vWorldPosition.xz - hiresTileMap.translate) / hiresTileMap.scale - hiresTileMap.pos) / hiresTileMap.size + 0.5).r > 0.75) discard;
	
	vec4 color = texture(textureImage, posToColorUV(vPosition.xz));
	color.a = 1.0; // don't use alpha channel 
	
	vec4 meta = texture(textureImage, posToMetaUV(vPosition.xz));
	
	float height = metaToHeight(meta);
	
	float heightX = metaToHeight(texture(textureImage, posToMetaUV(vPosition.xz + vec2(1.0, 0.0))));
	float heightZ = metaToHeight(texture(textureImage, posToMetaUV(vPosition.xz + vec2(0.0, 1.0))));
	float heightDiff = ((height - heightX) + (height - heightZ)) / lodScale;
	float shade = clamp(heightDiff * 0.06, -0.2, 0.04);
	
	float ao = 0.0;
	float aoStrength = 0.0;
	if(lod == 1.0) {
		aoStrength = smoothstep(PI - 0.8, PI - 0.2, acos(-clamp(viewMatrix[1][2], 0.0, 1.0)));
		aoStrength *= 1.0 - smoothstep(200.0, 600.0, distance);
		
		if (aoStrength > 0.0) { 
			const float r = 3.0;
			const float step = 0.2;
			const float o = step / r * 0.1;
			for (float vx = -r; vx <= r; vx++) {
				for (float vz = -r; vz <= r; vz++) {
					heightDiff = height - metaToHeight(texture(textureImage, posToMetaUV(vPosition.xz + vec2(vx * step, vz * step))));
					if (heightDiff < 0.0) {
						ao -= o;            
					}
				}
			}
		}
	}
	
	color.rgb += mix(shade, shade * 0.3 + ao, aoStrength);
	
	float blockLight = metaToLight(meta);
	float light = mix(blockLight, 15.0, sunlightStrength);
	color.rgb *= mix(ambientLight, 1.0, light / 15.0);
	
	gl_FragColor = color;
	
	${ShaderChunk.logdepthbuf_fragment}
}

`;class CombinedCamera extends PerspectiveCamera{constructor(e,t,i,r,s){super(e,t,i,r),this.needsUpdate=!0,this.data=reactive({fov:this.fov,aspect:this.aspect,near:this.near,far:this.far,zoom:this.zoom,ortho:s,distance:1}),Object.defineProperty(this,"fov",{get(){return this.data.fov},set(a){a!==this.data.fov&&(this.data.fov=a,this.needsUpdate=!0)}}),Object.defineProperty(this,"aspect",{get(){return this.data.aspect},set(a){a!==this.data.aspect&&(this.data.aspect=a,this.needsUpdate=!0)}}),Object.defineProperty(this,"near",{get(){return this.data.near},set(a){a!==this.data.near&&(this.data.near=a,this.needsUpdate=!0)}}),Object.defineProperty(this,"far",{get(){return this.data.far},set(a){a!==this.data.far&&(this.data.far=a,this.needsUpdate=!0)}}),Object.defineProperty(this,"zoom",{get(){return this.data.zoom},set(a){a!==this.data.zoom&&(this.data.zoom=a,this.needsUpdate=!0)}}),this.updateProjectionMatrix()}updateProjectionMatrix(){if(!this.needsUpdate)return;this.ortographicProjection||(this.ortographicProjection=new Matrix4),this.perspectiveProjection||(this.perspectiveProjection=new Matrix4);const e=this.near;let t=e*Math.tan(MathUtils.DEG2RAD*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const g=a.fullWidth,x=a.fullHeight;s+=a.offsetX*r/g,t-=a.offsetY*i/x,r*=a.width/g,i*=a.height/x}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth());let l=-Math.pow(this.ortho-1,6)+1,c=Math.max(this.distance,1e-4)*Math.tan(MathUtils.DEG2RAD*.5*this.fov)/this.zoom,u=2*c,d=this.aspect*u,f=-.5*d;this.perspectiveProjection.makePerspective(s,s+r,t,t-i,e,this.far),this.ortographicProjection.makeOrthographic(f,f+d,c,c-u,e,this.far);for(let g=0;g<16;g++)this.projectionMatrix.elements[g]=this.perspectiveProjection.elements[g]*(1-l)+this.ortographicProjection.elements[g]*l;this.projectionMatrixInverse.copy(this.projectionMatrix).invert(),this.needsUpdate=!1}get isPerspectiveCamera(){return this.ortho<1}set isPerspectiveCamera(e){}get isOrthographicCamera(){return!this.isPerspectiveCamera}set isOrthographicCamera(e){}get type(){return this.isPerspectiveCamera?"PerspectiveCamera":"OrthographicCamera"}set type(e){}get ortho(){return this.data.ortho}set ortho(e){e!==this.data.ortho&&(this.data.ortho=e,this.needsUpdate=!0)}get distance(){return this.data.distance}set distance(e){e!==this.data.distance&&(this.data.distance=e,this.needsUpdate=!0)}}class CSS2DObject extends Object3D{constructor(e){super(),this.element=document.createElement("div"),e.parentNode.replaceChild(this.element,e),this.element.appendChild(e),this.element.style.position="absolute",this.anchor=new Vector2,this.events=null,this.addEventListener("removed",function(){this.traverse(function(s){s.element instanceof Element&&s.element.parentNode!==null&&s.element.parentNode.removeChild(s.element)})});let i=-1,r=s=>{let a=!1,o=Date.now();o-i<500&&(a=!0),i=o;let l={doubleTap:a};this.onClick({event:s,data:l})?(s.preventDefault(),s.stopPropagation()):dispatchEvent(this.events,"bluemapMapInteraction",{data:l,object:this})};this.element.addEventListener("click",r),this.element.addEventListener("touch",r)}}var CSS2DRenderer=function(n=null){var e=this,t,i,r,s,a=new Vector3,o=new Matrix4,l=new Matrix4,c={objects:new WeakMap},u=document.createElement("div");u.style.overflow="hidden",this.domElement=u,this.events=n,this.getSize=function(){return{width:t,height:i}},this.setSize=function(_,m){t=_,i=m,r=t/2,s=i/2,u.style.width=_+"px",u.style.height=m+"px"};var d=function(_,m,v,T){if(_ instanceof CSS2DObject){_.events=e.events,_.onBeforeRender(e,m,v),a.setFromMatrixPosition(_.matrixWorld),a.applyMatrix4(l);var M=_.element,b="translate("+(a.x*r+r-_.anchor.x)+"px,"+(-a.y*s+s-_.anchor.y)+"px)";M.style.WebkitTransform=b,M.style.MozTransform=b,M.style.oTransform=b,M.style.transform=b,M.style.display=T&&_.visible&&a.z>=-1&&a.z<=1&&M.style.opacity!=="0"?"":"none";var E={distanceToCameraSquared:f(v,_)};c.objects.set(_,E),M.parentNode!==u&&u.appendChild(M),_.onAfterRender(e,m,v)}for(var N=0,B=_.children.length;N<B;N++)d(_.children[N],m,v,T&&_.visible)},f=function(){var _=new Vector3,m=new Vector3;return function(v,T){return _.setFromMatrixPosition(v.matrixWorld),m.setFromMatrixPosition(T.matrixWorld),_.distanceToSquared(m)}}(),g=function(_){var m=[];return _.traverse(function(v){v instanceof CSS2DObject&&m.push(v)}),m},x=function(_){for(var m=g(_).sort(function(b,E){var N=c.objects.get(b).distanceToCameraSquared,B=c.objects.get(E).distanceToCameraSquared;return N-B}),v=m.length,T=0,M=m.length;T<M;T++)m[T].element.style.zIndex=v-T};this.render=function(_,m){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),m.parent===null&&m.updateMatrixWorld(),o.copy(m.matrixWorldInverse),l.multiplyMatrices(m.projectionMatrix,o),d(_,_,m,!0),x(_)}};UniformsLib.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ShaderLib.line={uniforms:UniformsUtils.merge([UniformsLib.common,UniformsLib.fog,UniformsLib.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class LineMaterial extends ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:UniformsUtils.clone(ShaderLib.line.uniforms),vertexShader:ShaderLib.line.vertexShader,fragmentShader:ShaderLib.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const MARKER_FILL_VERTEX_SHADER=`
#include <common>
${ShaderChunk.logdepthbuf_pars_vertex}

varying vec3 vPosition;
//varying vec3 vWorldPosition;
//varying vec3 vNormal;
//varying vec2 vUv;
//varying vec3 vColor;
varying float vDistance;

void main() {
	vec4 worldPos = modelMatrix * vec4(position, 1);
	vec4 viewPos = viewMatrix * worldPos;
	
	vPosition = position;
	//vWorldPosition = worldPos.xyz;
	//vNormal = normal;
	//vUv = uv;
	//vColor = vec3(1.0);
	vDistance = -viewPos.z;
	
	gl_Position = projectionMatrix * viewPos;
	
	${ShaderChunk.logdepthbuf_vertex} 
}
`,MARKER_FILL_FRAGMENT_SHADER=`
${ShaderChunk.logdepthbuf_pars_fragment}

#define FLT_MAX 3.402823466e+38

varying vec3 vPosition;
//varying vec3 vWorldPosition;
//varying vec3 vNormal;
//varying vec2 vUv;
//varying vec3 vColor;
varying float vDistance;

uniform vec3 markerColor;
uniform float markerOpacity;

uniform float fadeDistanceMax;
uniform float fadeDistanceMin;

void main() {
	vec4 color = vec4(markerColor, markerOpacity);
	
	// distance fading
	float fdMax = FLT_MAX;
	if ( fadeDistanceMax > 0.0 ) fdMax = fadeDistanceMax;
	
	float minDelta = (vDistance - fadeDistanceMin) / fadeDistanceMin;
	float maxDelta = (vDistance - fadeDistanceMax) / (fadeDistanceMax * 0.5);
	float distanceOpacity = min(
		clamp(minDelta, 0.0, 1.0),
		1.0 - clamp(maxDelta + 1.0, 0.0, 1.0)
	);
	
	color.a *= distanceOpacity;
	
	// apply vertex-color
	//color.rgb *= vColor.rgb;
	
	gl_FragColor = color;
	
	${ShaderChunk.logdepthbuf_fragment}
}
`,_box$1=new Box3,_vector=new Vector3;class LineSegmentsGeometry extends InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Float32BufferAttribute(e,3)),this.setAttribute("uv",new Float32BufferAttribute(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceEnd",new InterleavedBufferAttribute(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceColorStart",new InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceColorEnd",new InterleavedBufferAttribute(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new WireframeGeometry(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),_box$1.setFromBufferAttribute(t),this.boundingBox.union(_box$1))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_vector.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_vector)),_vector.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(_vector));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const _start=new Vector3,_end=new Vector3,_start4=new Vector4,_end4=new Vector4,_ssOrigin=new Vector4,_ssOrigin3=new Vector3,_mvMatrix=new Matrix4,_line=new Line3,_closestPoint=new Vector3,_box=new Box3,_sphere=new Sphere,_clipToWorldVector=new Vector4;let _ray,_instanceStart,_instanceEnd,_lineWidth;function getWorldSpaceHalfWidth(n,e,t){return _clipToWorldVector.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),_clipToWorldVector.multiplyScalar(1/_clipToWorldVector.w),_clipToWorldVector.x=_lineWidth/t.width,_clipToWorldVector.y=_lineWidth/t.height,_clipToWorldVector.applyMatrix4(n.projectionMatrixInverse),_clipToWorldVector.multiplyScalar(1/_clipToWorldVector.w),Math.abs(Math.max(_clipToWorldVector.x,_clipToWorldVector.y))}function raycastWorldUnits(n,e){const t=n.matrixWorld;for(let i=0,r=_instanceStart.count;i<r;i++){_line.start.fromBufferAttribute(_instanceStart,i),_line.end.fromBufferAttribute(_instanceEnd,i),_line.applyMatrix4(t);const s=new Vector3,a=new Vector3;_ray.distanceSqToSegment(_line.start,_line.end,a,s),a.distanceTo(s)<_lineWidth*.5&&e.push({point:a,pointOnLine:s,distance:_ray.origin.distanceTo(a),object:n,face:null,faceIndex:i,uv:null,uv2:null})}}function raycastScreenSpace(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=-e.near;_ray.at(1,_ssOrigin),_ssOrigin.w=1,_ssOrigin.applyMatrix4(e.matrixWorldInverse),_ssOrigin.applyMatrix4(i),_ssOrigin.multiplyScalar(1/_ssOrigin.w),_ssOrigin.x*=s.x/2,_ssOrigin.y*=s.y/2,_ssOrigin.z=0,_ssOrigin3.copy(_ssOrigin),_mvMatrix.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,f=l.count;d<f;d++){if(_start4.fromBufferAttribute(l,d),_end4.fromBufferAttribute(c,d),_start4.w=1,_end4.w=1,_start4.applyMatrix4(_mvMatrix),_end4.applyMatrix4(_mvMatrix),_start4.z>u&&_end4.z>u)continue;if(_start4.z>u){const T=_start4.z-_end4.z,M=(_start4.z-u)/T;_start4.lerp(_end4,M)}else if(_end4.z>u){const T=_end4.z-_start4.z,M=(_end4.z-u)/T;_end4.lerp(_start4,M)}_start4.applyMatrix4(i),_end4.applyMatrix4(i),_start4.multiplyScalar(1/_start4.w),_end4.multiplyScalar(1/_end4.w),_start4.x*=s.x/2,_start4.y*=s.y/2,_end4.x*=s.x/2,_end4.y*=s.y/2,_line.start.copy(_start4),_line.start.z=0,_line.end.copy(_end4),_line.end.z=0;const x=_line.closestPointToPointParameter(_ssOrigin3,!0);_line.at(x,_closestPoint);const _=MathUtils.lerp(_start4.z,_end4.z,x),m=_>=-1&&_<=1,v=_ssOrigin3.distanceTo(_closestPoint)<_lineWidth*.5;if(m&&v){_line.start.fromBufferAttribute(l,d),_line.end.fromBufferAttribute(c,d),_line.start.applyMatrix4(a),_line.end.applyMatrix4(a);const T=new Vector3,M=new Vector3;_ray.distanceSqToSegment(_line.start,_line.end,M,T),t.push({point:M,pointOnLine:T,distance:_ray.origin.distanceTo(M),object:n,face:null,faceIndex:d,uv:null,uv2:null})}}}class LineSegments2 extends Mesh{constructor(e=new LineSegmentsGeometry,t=new LineMaterial({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)_start.fromBufferAttribute(t,a),_end.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+_start.distanceTo(_end);const s=new InstancedInterleavedBuffer(r,2,1);return e.setAttribute("instanceDistanceStart",new InterleavedBufferAttribute(s,1,0)),e.setAttribute("instanceDistanceEnd",new InterleavedBufferAttribute(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;_ray=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;_lineWidth=l.linewidth+s,_instanceStart=o.attributes.instanceStart,_instanceEnd=o.attributes.instanceEnd,o.boundingSphere===null&&o.computeBoundingSphere(),_sphere.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=_lineWidth*.5;else{const d=Math.max(r.near,_sphere.distanceToPoint(_ray.origin));c=getWorldSpaceHalfWidth(r,d,l.resolution)}if(_sphere.radius+=c,_ray.intersectsSphere(_sphere)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),_box.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=_lineWidth*.5;else{const d=Math.max(r.near,_box.distanceToPoint(_ray.origin));u=getWorldSpaceHalfWidth(r,d,l.resolution)}_box.expandByScalar(u),_ray.intersectsBox(_box)!==!1&&(i?raycastWorldUnits(this,t):raycastScreenSpace(this,r,t))}}class LineGeometry extends LineSegmentsGeometry{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Line2 extends LineSegments2{constructor(e=new LineGeometry,t=new LineMaterial({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Et=class extends Object3D{constructor(e){super(),Object.defineProperty(this,"isMarker",{value:!0}),this.data=reactive({id:e,type:"marker",sorting:0,listed:!0,position:this.position,visible:this.visible}),Object.defineProperty(this,"position",{get(){return this.data.position},set(t){this.data.position=t}}),Object.defineProperty(this,"visible",{get(){return this.data.visible},set(t){this.data.visible=t}})}dispose(){}updateFromData(e){}static calculateDistanceOpacity(e,t,i,r){let s=Et.calculateDistanceToCameraPlane(e,t),a=(s-i)/i,o=(s-r)/(r*.5);return Math.min(MathUtils.clamp(a,0,1),1-MathUtils.clamp(o+1,0,1))}static calculateDistanceToCameraPlane(e,t){return Et._posRelativeToCamera.subVectors(e,t.position),t.getWorldDirection(Et._cameraDirection),Et._posRelativeToCamera.dot(Et._cameraDirection)}};let Marker=Et;ge(Marker,"_posRelativeToCamera",new Vector3),ge(Marker,"_cameraDirection",new Vector3);class ObjectMarker extends Marker{constructor(e){super(e),Object.defineProperty(this,"isObjectMarker",{value:!0}),this.data.type="object",this.data.label=null,this.data.detail=null,this.data.link=null,this.data.newTab=!0,this.lastClick=-1}onClick(e){let t=new Vector3;if(e.intersection&&(t.copy(e.intersection.pointOnLine||e.intersection.point),t.sub(this.position)),e.data.doubleTap)return!1;if(this.data.detail||this.data.label){let i=new LabelPopup(this.data.detail||this.data.label);i.position.copy(t),this.add(i),i.open()}return this.data.link&&window.open(this.data.link,this.data.newTab?"_blank":"_self"),!0}updateFromData(e){let t=e.position||{};this.position.setX(t.x||0),this.position.setY(t.y||0),this.position.setZ(t.z||0),this.data.label=e.label||null,this.data.detail=e.detail||null,this.data.sorting=e.sorting||0,this.data.listed=e.listed===void 0?!0:e.listed,this.data.link=e.link||null,this.data.newTab=!!e.newTab}}class LabelPopup extends CSS2DObject{constructor(e){super(htmlToElement(`<div class="bm-marker-labelpopup">${e}</div>`))}open(e=!0){let t=this.element.style.opacity||1;this.element.style.opacity=0;let i=animate(r=>{this.element.style.opacity=(r*t).toString()},300);if(e){let r=s=>{s.composedPath().includes(this.element)||(i.cancel(),this.close(),window.removeEventListener("mousedown",r),window.removeEventListener("touchstart",r),window.removeEventListener("keydown",r),window.removeEventListener("mousewheel",r))};window.addEventListener("mousedown",r),window.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("keydown",r),window.addEventListener("mousewheel",r)}}close(e=!0){let t=parseFloat(this.element.style.opacity);animate(i=>{this.element.style.opacity=(t-i*t).toString()},300,i=>{e&&i&&this.parent&&this.parent.remove(this)})}}const lineShader={uniforms:UniformsUtils.merge([UniformsLib.common,UniformsLib.fog,UniformsLib.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;
		
		varying float vDistance;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation
			
			vDistance = -mvPosition.z;

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		#define FLT_MAX 3.402823466e+38

		uniform vec3 diffuse;
		uniform float opacity;
		
		uniform float fadeDistanceMax;
		uniform float fadeDistanceMin;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;
		
		varying float vDistance;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			// distance fading
			float fdMax = FLT_MAX;
			if ( fadeDistanceMax > 0.0 ) fdMax = fadeDistanceMax;
			
			float minDelta = (vDistance - fadeDistanceMin) / fadeDistanceMin;
			float maxDelta = (vDistance - fadeDistanceMax) / (fadeDistanceMax * 0.5);
			float distanceOpacity = min(
				clamp(minDelta, 0.0, 1.0),
				1.0 - clamp(maxDelta + 1.0, 0.0, 1.0)
			);

			vec4 diffuseColor = vec4( diffuse, opacity * distanceOpacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ShapeMarker extends ObjectMarker{constructor(e){super(e),Object.defineProperty(this,"isShapeMarker",{value:!0}),this.data.type="shape";let t=new Vector2,i=new Shape([t,t,t]);this.fill=new ShapeMarkerFill(i),this.border=new ShapeMarkerBorder(i),this.border.renderOrder=-1,this.add(this.border,this.fill),this._markerData={}}setShapeY(e){let t=e-this.position.y;this.fill.position.y=t,this.border.position.y=t}setShape(e){this.fill.updateGeometry(e),this.border.updateGeometry(e)}updateFromData(e){super.updateFromData(e),(!this._markerData.shape||!deepEquals(e.shape,this._markerData.shape)||!this._markerData.holes||!deepEquals(e.holes,this._markerData.holes)||!this._markerData.position||!deepEquals(e.position,this._markerData.position))&&this.setShape(this.createShapeWithHolesFromData(e.shape,e.holes)),this.setShapeY((e.shapeY||e.height||0)+.01),this.border.depthTest=!!e.depthTest,this.fill.depthTest=!!e.depthTest,this.border.linewidth=e.lineWidth!==void 0?e.lineWidth:2;let t=e.lineColor||e.borderColor||{};this.border.color.setRGB((t.r||0)/255,(t.g||0)/255,(t.b||0)/255),this.border.opacity=t.a||0;let i=e.fillColor||{};this.fill.color.setRGB((i.r||0)/255,(i.g||0)/255,(i.b||0)/255),this.fill.opacity=i.a||0;let r=e.minDistance||0,s=e.maxDistance!==void 0?e.maxDistance:Number.MAX_VALUE;this.border.fadeDistanceMin=r,this.border.fadeDistanceMax=s,this.fill.fadeDistanceMin=r,this.fill.fadeDistanceMax=s,this._markerData=e}dispose(){super.dispose(),this.fill.dispose(),this.border.dispose()}createShapeFromData(e){let t=[];return Array.isArray(e)?(e.forEach(i=>{let r=(i.x||0)-this.position.x,s=(i.z||0)-this.position.z;t.push(new Vector2(r,s))}),new Shape(t)):!1}createShapeWithHolesFromData(e,t){const i=this.createShapeFromData(e);return i&&Array.isArray(t)&&t.forEach(r=>{const s=this.createShapeFromData(r);s&&i.holes.push(s)}),i}}class ShapeMarkerFill extends Mesh{constructor(e){let t=ShapeMarkerFill.createGeometry(e),i=new ShaderMaterial({vertexShader:MARKER_FILL_VERTEX_SHADER,fragmentShader:MARKER_FILL_FRAGMENT_SHADER,side:DoubleSide,depthTest:!0,transparent:!0,uniforms:{markerColor:{value:new Color},markerOpacity:{value:0},fadeDistanceMin:{value:0},fadeDistanceMax:{value:Number.MAX_VALUE}}});super(t,i)}get color(){return this.material.uniforms.markerColor.value}get opacity(){return this.material.uniforms.markerOpacity.value}set opacity(e){this.material.uniforms.markerOpacity.value=e,this.visible=e>0}get depthTest(){return this.material.depthTest}set depthTest(e){this.material.depthTest=e}get fadeDistanceMin(){return this.material.uniforms.fadeDistanceMin.value}set fadeDistanceMin(e){this.material.uniforms.fadeDistanceMin.value=e}get fadeDistanceMax(){return this.material.uniforms.fadeDistanceMax.value}set fadeDistanceMax(e){this.material.uniforms.fadeDistanceMax.value=e}onClick(e){return e.intersection&&(e.intersection.distance>this.fadeDistanceMax||e.intersection.distance<this.fadeDistanceMin)?!1:super.onClick(e)}updateGeometry(e){this.geometry.dispose(),this.geometry=ShapeMarkerFill.createGeometry(e)}dispose(){this.geometry.dispose(),this.material.dispose()}static createGeometry(e){let t=new ShapeGeometry(e,5);return t.rotateX(Math.PI/2),t}}class ShapeMarkerBorder extends Line2{constructor(e){let t=new LineSegmentsGeometry;t.setPositions(ShapeMarkerBorder.createLinePoints(e));let i=new LineMaterial({color:new Color,opacity:0,transparent:!0,linewidth:1,depthTest:!0,vertexColors:!1,dashed:!1,uniforms:UniformsUtils.clone(lineShader.uniforms),vertexShader:lineShader.vertexShader,fragmentShader:lineShader.fragmentShader});i.uniforms.fadeDistanceMin={value:0},i.uniforms.fadeDistanceMax={value:Number.MAX_VALUE},i.resolution.set(window.innerWidth,window.innerHeight),super(t,i),this.computeLineDistances()}get color(){return this.material.color}get opacity(){return this.material.opacity}set opacity(e){this.material.opacity=e,this.visible=e>0}get linewidth(){return this.material.linewidth}set linewidth(e){this.material.linewidth=e}get depthTest(){return this.material.depthTest}set depthTest(e){this.material.depthTest=e}get fadeDistanceMin(){return this.material.uniforms.fadeDistanceMin.value}set fadeDistanceMin(e){this.material.uniforms.fadeDistanceMin.value=e}get fadeDistanceMax(){return this.material.uniforms.fadeDistanceMax.value}set fadeDistanceMax(e){this.material.uniforms.fadeDistanceMax.value=e}onClick(e){return e.intersection&&(e.intersection.distance>this.fadeDistanceMax||e.intersection.distance<this.fadeDistanceMin)?!1:super.onClick(e)}updateGeometry(e){this.geometry=new LineSegmentsGeometry,this.geometry.setPositions(ShapeMarkerBorder.createLinePoints(e)),this.computeLineDistances()}onBeforeRender(e){e.getSize(this.material.resolution)}dispose(){this.geometry.dispose(),this.material.dispose()}static createLinePoints(e){let t=[];return t.push(...this.convertPoints(e.getPoints(5))),e.getPointsHoles(5).forEach(i=>t.push(...this.convertPoints(i))),t}static convertPoints(e){e.push(e[0]);let t=[],i=null;return e.forEach(r=>{i&&(t.push(i.x,0,i.y),t.push(r.x,0,r.y)),i=r}),t}}class ExtrudeMarker extends ObjectMarker{constructor(e){super(e),Object.defineProperty(this,"isExtrudeMarker",{value:!0}),this.data.type="extrude";let t=new Vector2,i=new Shape([t,t,t]);this.fill=new ExtrudeMarkerFill(i),this.border=new ExtrudeMarkerBorder(i),this.border.renderOrder=-1,this.add(this.border,this.fill),this._markerData={}}setShapeY(e,t){let i=t-this.position.y,r=t-e;this.fill.position.y=i,this.border.position.y=i,this.fill.scale.y=r,this.border.scale.y=r}setShape(e){this.fill.updateGeometry(e),this.border.updateGeometry(e)}updateFromData(e){super.updateFromData(e),(!this._markerData.shape||!deepEquals(e.shape,this._markerData.shape)||!this._markerData.holes||!deepEquals(e.holes,this._markerData.holes)||!this._markerData.position||!deepEquals(e.position,this._markerData.position))&&this.setShape(this.createShapeWithHolesFromData(e.shape,e.holes)),this.setShapeY((e.shapeMinY||0)-.01,(e.shapeMaxY||0)+.01),this.border.depthTest=!!e.depthTest,this.fill.depthTest=!!e.depthTest,this.border.linewidth=e.lineWidth!==void 0?e.lineWidth:2;let t=e.lineColor||{};this.border.color.setRGB((t.r||0)/255,(t.g||0)/255,(t.b||0)/255),this.border.opacity=t.a||0;let i=e.fillColor||{};this.fill.color.setRGB((i.r||0)/255,(i.g||0)/255,(i.b||0)/255),this.fill.opacity=i.a||0;let r=e.minDistance||0,s=e.maxDistance!==void 0?e.maxDistance:Number.MAX_VALUE;this.border.fadeDistanceMin=r,this.border.fadeDistanceMax=s,this.fill.fadeDistanceMin=r,this.fill.fadeDistanceMax=s,this._markerData=e}dispose(){super.dispose(),this.fill.dispose(),this.border.dispose()}createShapeFromData(e){let t=[];return Array.isArray(e)?(e.forEach(i=>{let r=(i.x||0)-this.position.x+.01,s=(i.z||0)-this.position.z+.01;t.push(new Vector2(r,s))}),new Shape(t)):!1}createShapeWithHolesFromData(e,t){const i=this.createShapeFromData(e);return i&&Array.isArray(t)&&t.forEach(r=>{const s=this.createShapeFromData(r);s&&i.holes.push(s)}),i}}class ExtrudeMarkerFill extends Mesh{constructor(e){let t=ExtrudeMarkerFill.createGeometry(e),i=new ShaderMaterial({vertexShader:MARKER_FILL_VERTEX_SHADER,fragmentShader:MARKER_FILL_FRAGMENT_SHADER,side:DoubleSide,depthTest:!0,transparent:!0,uniforms:{markerColor:{value:new Color},markerOpacity:{value:0},fadeDistanceMin:{value:0},fadeDistanceMax:{value:Number.MAX_VALUE}}});super(t,i)}get color(){return this.material.uniforms.markerColor.value}get opacity(){return this.material.uniforms.markerOpacity.value}set opacity(e){this.material.uniforms.markerOpacity.value=e,this.visible=e>0}get depthTest(){return this.material.depthTest}set depthTest(e){this.material.depthTest=e}get fadeDistanceMin(){return this.material.uniforms.fadeDistanceMin.value}set fadeDistanceMin(e){this.material.uniforms.fadeDistanceMin.value=e}get fadeDistanceMax(){return this.material.uniforms.fadeDistanceMax.value}set fadeDistanceMax(e){this.material.uniforms.fadeDistanceMax.value=e}onClick(e){return e.intersection&&(e.intersection.distance>this.fadeDistanceMax||e.intersection.distance<this.fadeDistanceMin)?!1:super.onClick(e)}updateGeometry(e){this.geometry.dispose(),this.geometry=ExtrudeMarkerFill.createGeometry(e)}dispose(){this.geometry.dispose(),this.material.dispose()}static createGeometry(e){let t=new ExtrudeGeometry(e,{depth:1,steps:5,bevelEnabled:!1});return t.rotateX(Math.PI/2),t}}class ExtrudeMarkerBorder extends Line2{constructor(e){let t=new LineSegmentsGeometry;t.setPositions(ExtrudeMarkerBorder.createLinePoints(e));let i=new LineMaterial({color:new Color,opacity:0,transparent:!0,linewidth:1,depthTest:!0,vertexColors:!1,dashed:!1,uniforms:UniformsUtils.clone(lineShader.uniforms),vertexShader:lineShader.vertexShader,fragmentShader:lineShader.fragmentShader});i.uniforms.fadeDistanceMin={value:0},i.uniforms.fadeDistanceMax={value:Number.MAX_VALUE},i.resolution.set(window.innerWidth,window.innerHeight),super(t,i),this.computeLineDistances()}get color(){return this.material.color}get opacity(){return this.material.opacity}set opacity(e){this.material.opacity=e,this.visible=e>0}get linewidth(){return this.material.linewidth}set linewidth(e){this.material.linewidth=e}get depthTest(){return this.material.depthTest}set depthTest(e){this.material.depthTest=e}get fadeDistanceMin(){return this.material.uniforms.fadeDistanceMin.value}set fadeDistanceMin(e){this.material.uniforms.fadeDistanceMin.value=e}get fadeDistanceMax(){return this.material.uniforms.fadeDistanceMax.value}set fadeDistanceMax(e){this.material.uniforms.fadeDistanceMax.value=e}onClick(e){return e.intersection&&(e.intersection.distance>this.fadeDistanceMax||e.intersection.distance<this.fadeDistanceMin)?!1:super.onClick(e)}updateGeometry(e){this.geometry=new LineSegmentsGeometry,this.geometry.setPositions(ExtrudeMarkerBorder.createLinePoints(e)),this.computeLineDistances()}onBeforeRender(e){e.getSize(this.material.resolution)}dispose(){this.geometry.dispose(),this.material.dispose()}static createLinePoints(e){let t=[];return t.push(...this.convertPoints(e.getPoints(5))),e.getPointsHoles(5).forEach(i=>t.push(...this.convertPoints(i))),t}static convertPoints(e){let t=[];e.push(e[0]);let i=null;return e.forEach(r=>{t.push(r.x,0,r.y),t.push(r.x,-1,r.y),i&&(t.push(i.x,0,i.y),t.push(r.x,0,r.y),t.push(i.x,-1,i.y),t.push(r.x,-1,r.y)),i=r}),t}}class LineMarker extends ObjectMarker{constructor(e){super(e),Object.defineProperty(this,"isLineMarker",{value:!0}),this.data.type="line",this.line=new LineMarkerLine([0,0,0]),this.add(this.line),this._markerData={}}setLine(e){let t;if((e.type==="Curve"||e.type==="CurvePath")&&(e=e.getPoints(5)),Array.isArray(e))e.length===0?t=[]:e[0].isVector3?(t=[],e.forEach(i=>{t.push(i.x,i.y,i.z)})):t=e;else throw new Error("Invalid argument type!");this.line.updateGeometry(t)}updateFromData(e){super.updateFromData(e),(!this._markerData.line||!deepEquals(e.line,this._markerData.line)||!this._markerData.position||!deepEquals(e.position,this._markerData.position))&&this.setLine(this.createPointsFromData(e.line)),this.line.depthTest=!!e.depthTest,this.line.linewidth=e.lineWidth!==void 0?e.lineWidth:2;let t=e.lineColor||{};this.line.color.setRGB((t.r||0)/255,(t.g||0)/255,(t.b||0)/255),this.line.opacity=t.a||0;let i=e.minDistance||0,r=e.maxDistance!==void 0?e.maxDistance:Number.MAX_VALUE;this.line.fadeDistanceMin=i,this.line.fadeDistanceMax=r,this._markerData=e}dispose(){super.dispose(),this.line.dispose()}createPointsFromData(e){let t=[];return Array.isArray(e)&&e.forEach(i=>{let r=(i.x||0)-this.position.x,s=(i.y||0)-this.position.y,a=(i.z||0)-this.position.z;t.push(r,s,a)}),t}}class LineMarkerLine extends Line2{constructor(e){let t=new LineGeometry;t.setPositions(e);let i=new LineMaterial({color:new Color,opacity:0,transparent:!0,linewidth:1,depthTest:!0,vertexColors:!1,dashed:!1,uniforms:UniformsUtils.clone(lineShader.uniforms),vertexShader:lineShader.vertexShader,fragmentShader:lineShader.fragmentShader});i.uniforms.fadeDistanceMin={value:0},i.uniforms.fadeDistanceMax={value:Number.MAX_VALUE},i.resolution.set(window.innerWidth,window.innerHeight),super(t,i),this.computeLineDistances()}get color(){return this.material.color}get opacity(){return this.material.opacity}set opacity(e){this.material.opacity=e,this.visible=e>0}get linewidth(){return this.material.linewidth}set linewidth(e){this.material.linewidth=e}get depthTest(){return this.material.depthTest}set depthTest(e){this.material.depthTest=e}get fadeDistanceMin(){return this.material.uniforms.fadeDistanceMin.value}set fadeDistanceMin(e){this.material.uniforms.fadeDistanceMin.value=e}get fadeDistanceMax(){return this.material.uniforms.fadeDistanceMax.value}set fadeDistanceMax(e){this.material.uniforms.fadeDistanceMax.value=e}onClick(e){return e.intersection&&(e.intersection.distance>this.fadeDistanceMax||e.intersection.distance<this.fadeDistanceMin)?!1:super.onClick(e)}updateGeometry(e){this.geometry=new LineGeometry,this.geometry.setPositions(e),this.computeLineDistances()}onBeforeRender(e){e.getSize(this.material.resolution)}dispose(){this.geometry.dispose(),this.material.dispose()}}class HtmlMarker extends Marker{constructor(e){super(e),Object.defineProperty(this,"isHtmlMarker",{value:!0}),this.data.type="html",this.data.label=null,this.data.classes=[],this.elementObject=new CSS2DObject(htmlToElement(`<div id="bm-marker-${this.data.id}" class="bm-marker-${this.data.type}"></div>`)),this.elementObject.onBeforeRender=(t,i,r)=>this.onBeforeRender(t,i,r),this.fadeDistanceMin=0,this.fadeDistanceMax=Number.MAX_VALUE,this.addEventListener("removed",()=>{var t;(t=this.element)!=null&&t.parentNode&&this.element.parentNode.removeChild(this.element)}),this.add(this.elementObject)}onBeforeRender(e,t,i){this.fadeDistanceMax===Number.MAX_VALUE&&this.fadeDistanceMin<=0?this.element.parentNode.style.opacity=void 0:this.element.parentNode.style.opacity=Marker.calculateDistanceOpacity(this.position,i,this.fadeDistanceMin,this.fadeDistanceMax).toString()}get html(){return this.element.innerHTML}set html(e){this.element.innerHTML=e}get anchor(){return this.elementObject.anchor}get element(){return this.elementObject.element.getElementsByTagName("div")[0]}updateFromData(e){let t=e.position||{};this.position.setX(t.x||0),this.position.setY(t.y||0),this.position.setZ(t.z||0),this.data.label!==e.label&&(this.data.label=e.label||null),this.data.sorting!==e.sorting&&(this.data.sorting=e.sorting||0),this.data.listed!==e.listed&&(this.data.listed=e.listed===void 0?!0:e.listed);let i=e.anchor||{};this.anchor.setX(i.x||0),this.anchor.setY(i.y||0),this.element.innerHTML!==e.html&&(this.element.innerHTML=e.html),this.data.classes!==e.classes&&(this.data.classes=e.classes,this.element.classList.value=`bm-marker-${this.data.type}`,this.element.classList.add(...e.classes)),this.fadeDistanceMin=e.minDistance||0,this.fadeDistanceMax=e.maxDistance!==void 0?e.maxDistance:Number.MAX_VALUE}dispose(){super.dispose(),this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}class PoiMarker extends HtmlMarker{constructor(e){super(e),Object.defineProperty(this,"isPoiMarker",{value:!0}),this.data.type="poi",this.data.detail=null,this.html=`<img src="" alt="POI Icon (${this.data.id})" class="bm-marker-poi-icon" draggable="false" style="pointer-events: auto"><div class="bm-marker-poi-label"></div>`,this.iconElement=this.element.getElementsByTagName("img").item(0),this.labelElement=this.element.getElementsByTagName("div").item(0),this._lastIcon=null}onClick(e){if(e.data.doubleTap)return!1;if(this.highlight||!this.data.label)return!0;this.highlight=!0;let t=i=>{i.composedPath().includes(this.element)||(this.highlight=!1,window.removeEventListener("mousedown",t),window.removeEventListener("touchstart",t),window.removeEventListener("keydown",t),window.removeEventListener("mousewheel",t))};return setTimeout(function(){window.addEventListener("mousedown",t),window.addEventListener("touchstart",t,{passive:!0}),window.addEventListener("keydown",t),window.addEventListener("mousewheel",t)},0),!0}set highlight(e){e?this.element.classList.add("bm-marker-highlight"):this.element.classList.remove("bm-marker-highlight")}get highlight(){return this.element.classList.contains("bm-marker-highlight")}updateFromData(e){let t=e.position||{};this.position.setX(t.x||0),this.position.setY(t.y||0),this.position.setZ(t.z||0);let i=e.anchor||e.iconAnchor||{};if(this.iconElement.style.transform=`translate(${-i.x}px, ${-i.y}px)`,this.data.label!==e.label&&(this.data.label=e.label||""),this.data.sorting!==e.sorting&&(this.data.sorting=e.sorting||0),this.data.listed!==e.listed&&(this.data.listed=e.listed===void 0?!0:e.listed),this.data.detail!==e.detail&&(this.data.detail=e.detail||this.data.label,this.labelElement.innerHTML=this.data.detail||""),this._lastIcon!==e.icon&&(this.iconElement.src=e.icon||"assets/poi.svg",this._lastIcon=e.icon),this.data.classes!==e.classes){this.data.classes=e.classes;let r=this.element.classList.contains("bm-marker-highlight");this.element.classList.value="bm-marker-html",r&&this.element.classList.add("bm-marker-highlight"),this.element.classList.add(...e.classes)}this.fadeDistanceMin=e.minDistance||0,this.fadeDistanceMax=e.maxDistance!==void 0?e.maxDistance:Number.MAX_VALUE}}class MarkerSet extends Scene{constructor(e){super(),Object.defineProperty(this,"isMarkerSet",{value:!0}),this.markerSets=new Map,this.markers=new Map,this.data=reactive({id:e,label:e,toggleable:!0,defaultHide:!1,sorting:0,markerSets:[],markers:[],visible:this.visible,get listed(){return this.toggleable||this.markers.filter(t=>t.listed).length>0||this.markerSets.filter(t=>t.listed).length>0}}),Object.defineProperty(this,"visible",{get(){return this.data.visible},set(t){this.data.visible=t}})}updateFromData(e){this.data.label=e.label||this.data.id,this.data.toggleable=!!e.toggleable,this.data.defaultHide=!!e.defaultHidden,this.data.sorting=e.sorting||this.data.sorting,this.updateMarkerSetsFromData(e.markerSets),this.updateMarkersFromData(e.markers)}updateMarkerSetsFromData(e={},t=[]){let i=new Set(t);Object.keys(e).forEach(r=>{if(i.has(r))return;i.add(r);let s=e[r];try{this.updateMarkerSetFromData(r,s)}catch(a){alert(this.events,a,"fine")}}),this.markerSets.forEach((r,s)=>{i.has(s)||this.remove(r)})}updateMarkerSetFromData(e,t){let i=this.markerSets.get(e);i||(i=new MarkerSet(e),this.add(i),t.defaultHidden&&(i.visible=!1)),i.updateFromData(t)}updateMarkersFromData(e={},t=[]){let i=new Set(t);Object.keys(e).forEach(r=>{if(i.has(r))return;let s=e[r];try{this.updateMarkerFromData(r,s),i.add(r)}catch(a){alert(this.events,a,"fine"),console.debug(a)}}),this.markers.forEach((r,s)=>{i.has(s)||this.remove(r)})}updateMarkerFromData(e,t){if(!t.type)throw new Error("marker-data has no type!");let i=this.markers.get(e);if(!i||i.data.type!==t.type){switch(i&&this.remove(i),t.type){case"shape":i=new ShapeMarker(e);break;case"extrude":i=new ExtrudeMarker(e);break;case"line":i=new LineMarker(e);break;case"html":i=new HtmlMarker(e);break;case"poi":i=new PoiMarker(e);break;default:throw new Error(`Unknown marker-type: '${t.type}'`)}this.add(i)}i.updateFromData(t)}clear(){[...this.data.markerSets].forEach(e=>this.remove(e)),[...this.data.markers].forEach(e=>this.remove(e))}add(...e){if(e.length===1){let t=e[0];t.isMarkerSet&&!this.markerSets.has(t.data.id)&&(this.markerSets.set(t.data.id,t),this.data.markerSets.push(t.data)),t.isMarker&&!this.markers.has(t.data.id)&&(this.markers.set(t.data.id,t),this.data.markers.push(t.data))}return super.add(...e)}remove(...e){if(e.length===1){let t=e[0];if(t.isMarkerSet){let i=this.data.markerSets.indexOf(t.data);i>-1&&this.data.markerSets.splice(i,1),this.markerSets.delete(t.data.id),t.dispose()}if(t.isMarker){let i=this.data.markers.indexOf(t.data);i>-1&&this.data.markers.splice(i,1),this.markers.delete(t.data.id),t.dispose()}}return super.remove(...e)}dispose(){this.children.forEach(e=>{e.dispose&&e.dispose()})}}class MapViewer{constructor(e,t=e){ge(this,"handleContainerResize",()=>{this.renderer.setSize(this.rootElement.clientWidth,this.rootElement.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio*this.superSampling),this.css2dRenderer.setSize(this.rootElement.clientWidth,this.rootElement.clientHeight),this.camera.aspect=this.rootElement.clientWidth/this.rootElement.clientHeight,this.camera.updateProjectionMatrix()});ge(this,"renderLoop",e=>{requestAnimationFrame(this.renderLoop),this.lastFrame<=0&&(this.lastFrame=e);let t=e-this.lastFrame;this.lastFrame=e,this.stats.begin(),this.map!=null&&this.controlsManager.update(t,this.map),this.render(t),this.stats.update()});ge(this,"updateLoadedMapArea",()=>{this.map&&(this.controlsManager.distance<1e3?this.map.loadMapArea(this.data.loadedCenter.x,this.data.loadedCenter.y,this.data.loadedHiresViewDistance,this.data.loadedLowresViewDistance):this.map.loadMapArea(this.data.loadedCenter.x,this.data.loadedCenter.y,0,this.data.loadedLowresViewDistance))});Object.defineProperty(this,"isMapViewer",{value:!0}),this.rootElement=e,this.events=t,this.data=reactive({map:null,mapState:"unloaded",camera:null,controlsManager:null,uniforms:{distance:{value:0},sunlightStrength:{value:1},ambientLight:{value:0},skyColor:{value:new Color(.5,.5,1)},hiresTileMap:{value:{map:null,size:TileManager.tileMapSize,scale:new Vector2(1,1),translate:new Vector2,pos:new Vector2}}},superSampling:1,loadedCenter:new Vector2(0,0),loadedHiresViewDistance:200,loadedLowresViewDistance:2e3}),this.tileCacheHash=generateCacheHash(),this.stats=new Stats,this.stats.hide(),this.renderer=new WebGLRenderer({antialias:!0,sortObjects:!0,preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0}),this.renderer.autoClear=!1,this.renderer.uniforms=this.data.uniforms,this.css2dRenderer=new CSS2DRenderer(this.events),this.skyboxScene=new SkyboxScene(this.data.uniforms),this.camera=new CombinedCamera(75,1,.1,1e4,0),this.skyboxCamera=new PerspectiveCamera(75,1,.1,1e4),this.skyboxCamera.updateProjectionMatrix(),this.controlsManager=new ControlsManager(this,this.camera),this.raycaster=new Raycaster,this.raycaster.layers.enableAll(),this.raycaster.params.Line2={threshold:20},this.map=null,this.markers=new MarkerSet("bm-root"),this.lastFrame=0,this.initializeRootElement(),window.addEventListener("resize",this.handleContainerResize),requestAnimationFrame(this.renderLoop)}initializeRootElement(){this.rootElement.innerHTML="";let e=htmlToElement('<div style="position: relative; width: 100%; height: 100%; overflow: hidden;"></div>');this.rootElement.appendChild(e),e.appendChild(this.renderer.domElement),this.css2dRenderer.domElement.style.position="absolute",this.css2dRenderer.domElement.style.top="0",this.css2dRenderer.domElement.style.left="0",this.css2dRenderer.domElement.style.pointerEvents="none",e.appendChild(this.css2dRenderer.domElement),e.appendChild(this.stats.dom),this.handleContainerResize()}handleMapInteraction(e,t={}){let i=elementOffset(this.rootElement),r=new Vector2((e.x-i.top)/this.rootElement.clientWidth*2-1,-((e.y-i.left)/this.rootElement.clientHeight)*2+1);if(this.map&&this.map.isLoaded){this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(r,this.camera);let s=this.map.hiresTileManager.scene.position;s.x=0,s.z=0,this.map.hiresTileManager.scene.updateMatrixWorld();const a=[this.map.hiresTileManager.scene,this.markers];for(let f=0;f<this.map.lowresTileManager.length;f++){let g=this.map.lowresTileManager[f].scene.position;g.x=0,g.z=0,this.map.lowresTileManager[f].scene.updateMatrixWorld(),a.push(this.map.lowresTileManager[f].scene)}let o=this.raycaster.intersectObjects(a,!0),l=null,c=[],u=null,d=!1;for(let f=0;f<o.length;f++)if(o[f].object){let g=o[f].object,x=g,_=x.visible;for(;_&&x.parent;)x=x.parent,_=x.visible;if(_){l||(l=o[f]);let m=g;for(;m.parent;)m=m.parent;for(let v=0;v<this.map.lowresTileManager.length;v++)m===this.map.lowresTileManager[v].sceneParent&&(c[v]||(c[v]=o[f]));if(m===this.map.hiresTileManager.sceneParent&&(u||(u=o[f])),(!d||g.material&&!g.material.depthTest)&&g.onClick&&g.onClick({data:t,intersection:o[f]}))return;m!==this.map.lowresTileManager[0].sceneParent&&(d=!0)}}dispatchEvent(this.events,"bluemapMapInteraction",{data:t,hit:l,hiresHit:u,lowresHits:c,intersections:o,ray:this.raycaster.ray})}}render(e){if(dispatchEvent(this.events,"bluemapRenderFrame",{delta:e}),this.renderer.clear(),this.skyboxCamera.rotation.copy(this.camera.rotation),this.renderer.render(this.skyboxScene,this.skyboxCamera),this.renderer.clearDepth(),this.map&&this.map.isLoaded){const i=Math.round(this.camera.position.x/1e4)*1e4,r=Math.round(this.camera.position.z/1e4)*1e4;this.camera.position.x-=i,this.camera.position.z-=r,this.data.uniforms.distance.value=this.controlsManager.distance,this.data.uniforms.hiresTileMap.value.pos.copy(this.map.hiresTileManager.centerTile),this.data.uniforms.hiresTileMap.value.translate.set(this.map.data.hires.translate.x-i,this.map.data.hires.translate.z-r);const s=this.camera.far;this.controlsManager.distance<1e3&&(this.camera.far=1e6),this.camera.updateProjectionMatrix();const a=this.map.lowresTileManager.length-1;for(let o=this.map.lowresTileManager.length-1;o>=0;o--)if(o===a||this.controlsManager.distance<1e3*Math.pow(this.map.data.lowres.lodFactor,o+1)){let l=this.map.lowresTileManager[o].scene.position;l.x=-i,l.z=-r,o===0&&(this.camera.far=s,this.camera.updateProjectionMatrix()),this.renderer.render(this.map.lowresTileManager[o].sceneParent,this.camera),o!==0&&this.renderer.clearDepth()}if(this.camera.far=s,this.controlsManager.distance<1e3){this.camera.updateProjectionMatrix();let o=this.map.hiresTileManager.scene.position;o.x=-i,o.z=-r,this.renderer.render(this.map.hiresTileManager.sceneParent,this.camera)}this.camera.position.x+=i,this.camera.position.z+=r}this.renderer.render(this.markers,this.camera),this.css2dRenderer.render(this.markers,this.camera)}switchMap(e=null){return this.map&&this.map.isMap&&this.map.unload(),this.data.mapState="loading",this.map=e,this.map&&this.map.isMap?e.load(HIRES_VERTEX_SHADER,HIRES_FRAGMENT_SHADER,LOWRES_VERTEX_SHADER,LOWRES_FRAGMENT_SHADER,this.data.uniforms,this.tileCacheHash).then(()=>{for(let t of this.map.loadedTextures)this.renderer.initTexture(t);this.data.uniforms.distance.value=this.controlsManager.distance,this.data.uniforms.skyColor.value=e.data.skyColor,this.data.uniforms.ambientLight.value=e.data.ambientLight,this.data.uniforms.hiresTileMap.value.map=e.hiresTileManager.tileMap.texture,this.data.uniforms.hiresTileMap.value.scale.set(e.data.hires.tileSize.x,e.data.hires.tileSize.z),this.data.uniforms.hiresTileMap.value.translate.set(e.data.hires.translate.x,e.data.hires.translate.z),setTimeout(this.updateLoadedMapArea),this.data.mapState="loaded",dispatchEvent(this.events,"bluemapMapChanged",{map:e})}).catch(t=>{throw this.data.mapState="errored",this.map=null,t}):Promise.resolve()}loadMapArea(e,t,i=-1,r=-1){this.data.loadedCenter.set(e,t),i>=0&&(this.data.loadedHiresViewDistance=i),r>=0&&(this.data.loadedLowresViewDistance=r),this.updateLoadedMapArea()}clearTileCache(e){if(e||(e=generateCacheHash()),this.tileCacheHash=e,this.map){for(let t=0;t<this.map.lowresTileManager.length;t++)this.map.lowresTileManager[t].tileLoader.tileCacheHash=this.tileCacheHash;this.map.hiresTileManager.tileLoader.tileCacheHash=this.tileCacheHash}}get superSampling(){return this.data.superSampling}set superSampling(e){this.data.superSampling=e,this.handleContainerResize()}get camera(){return this._camera}set camera(e){this._camera=e,this.data.camera=e.data}get controlsManager(){return this._controlsManager}set controlsManager(e){this._controlsManager=e,this.data.controlsManager=e.data}get map(){return this._map}set map(e){this._map=e,e&&(this.data.map=e.data)}}class MarkerManager{constructor(e,t,i=null){Object.defineProperty(this,"isMarkerManager",{value:!0}),this.root=e,this.fileUrl=t,this.events=i,this.disposed=!1,this._updateInterval=null}setAutoUpdateInterval(e){if(this._updateInterval&&clearTimeout(this._updateInterval),e>0){let t=()=>{this.disposed||this.update().then(i=>{i?this._updateInterval=setTimeout(t,e):this._updateInterval=setTimeout(t,Math.max(e,15e3))}).catch(i=>{alert(this.events,i,"warning"),this._updateInterval=setTimeout(t,Math.max(e,15e3))})};this._updateInterval=setTimeout(t,e)}}update(){return this.loadMarkerFile().then(e=>this.updateFromData(e))}updateFromData(e){}dispose(){this.disposed=!0,this.setAutoUpdateInterval(0),this.clear()}clear(){this.root.clear()}loadMarkerFile(){return new Promise((e,t)=>{let i=new FileLoader;i.setResponseType("json"),i.load(this.fileUrl+"?"+generateCacheHash(),r=>{r?e(r):t(`Failed to parse '${this.fileUrl}'!`)},()=>{},()=>t(`Failed to load '${this.fileUrl}'!`))})}}class PlayerMarker extends Marker{constructor(e,t,i="assets/steve.png"){super(e),Object.defineProperty(this,"isPlayerMarker",{value:!0}),this.data.type="player",this.data.playerUuid=t,this.data.name=t,this.data.playerHead=i,this.elementObject=new CSS2DObject(htmlToElement(`
<div id="bm-marker-${this.data.id}" class="bm-marker-${this.data.type}">
    <img src="${this.data.playerHead}" alt="playerhead" draggable="false">
    <div class="bm-player-name"></div>
</div>
        `)),this.elementObject.onBeforeRender=(r,s,a)=>this.onBeforeRender(r,s,a),this.playerHeadElement=this.element.getElementsByTagName("img")[0],this.playerNameElement=this.element.getElementsByTagName("div")[0],this.addEventListener("removed",()=>{this.element.parentNode&&this.element.parentNode.removeChild(this.element)}),this.playerHeadElement.addEventListener("error",()=>{this.playerHeadElement.src="assets/steve.png"},{once:!0}),this.add(this.elementObject)}get element(){return this.elementObject.element.getElementsByTagName("div")[0]}onBeforeRender(e,t,i){let r=Marker.calculateDistanceToCameraPlane(this.position,i),s="near";r>1e3&&(s="med"),r>5e3&&(s="far"),this.element.setAttribute("distance-data",s)}updateFromData(e){let t=e.position||{};if(!this.position.x&&!this.position.y&&!this.position.z)this.position.set(t.x||0,(t.y||0)+1.8,t.z||0);else{let r={x:this.position.x,y:this.position.y,z:this.position.z},s={x:(t.x||0)-r.x,y:(t.y||0)+1.8-r.y,z:(t.z||0)-r.z};(s.x||s.y||s.z)&&animate(a=>{let o=EasingFunctions.easeInOutCubic(a);this.position.set(r.x+s.x*o||0,r.y+s.y*o||0,r.z+s.z*o||0)},500)}let i=e.name||this.data.playerUuid;this.data.name=i,this.playerNameElement.innerHTML!==i&&(this.playerNameElement.innerHTML=i),this.data.foreign=e.foreign}dispose(){super.dispose();let e=this.elementObject.element;e.parentNode&&e.parentNode.removeChild(e)}}class PlayerMarkerSet extends MarkerSet{constructor(e,t){super(e),this.data.label="Player",this.data.toggleable=!0,this.data.defaultHide=!1,this.data.playerheadsUrl=t}updateFromPlayerData(e){if(!Array.isArray(e.players))return this.clear(),!1;let t=new Set;return e.players.forEach(i=>{try{let r=this.updatePlayerMarkerFromData(i);t.add(r)}catch(r){alert(this.events,r,"fine")}}),this.markers.forEach(i=>{t.has(i)||this.remove(i)}),!0}updatePlayerMarkerFromData(e){let t=e.uuid;if(!t)throw new Error("player-data has no uuid!");let i=this.getPlayerMarkerId(t),r=this.markers.get(i);return(!r||!r.isPlayerMarker)&&(r&&this.remove(r),r=new PlayerMarker(i,t,`${this.data.playerheadsUrl}${t}.png`),this.add(r)),r.updateFromData(e),r.visible=!e.foreign,r}getPlayerMarker(e){return this.markers.get(this.getPlayerMarkerId(e))}getPlayerMarkerId(e){return"bm-player-"+e}}const kt=class{constructor(e,t,i){ge(this,"onMouseDown",e=>{(e.buttons!==void 0?e.buttons===1:e.button===0)&&!e.altKey&&(this.moving=!0,this.deltaPosition.set(0,0),this.lastPosition.set(e.x,e.y))});ge(this,"onMouseMove",e=>{let t=kt.tempVec2_1.set(e.x,e.y);this.moving&&this.deltaPosition.sub(t).add(this.lastPosition),this.lastPosition.copy(t)});ge(this,"onMouseUp",e=>{e.button===0&&(this.moving=!1)});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplierX=1/this.target.clientWidth*(this.target.clientWidth/this.target.clientHeight),this.pixelToSpeedMultiplierY=1/this.target.clientHeight});this.target=e,this.manager=null,this.moving=!1,this.lastPosition=new Vector2,this.deltaPosition=new Vector2,this.speed=t,this.stiffness=i,this.pixelToSpeedMultiplierX=0,this.pixelToSpeedMultiplierY=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.target.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.target.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaPosition.x===0&&this.deltaPosition.y===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1);let r=kt.tempVec2_1.copy(this.deltaPosition);r.rotateAround(VEC2_ZERO,this.manager.rotation),this.manager.position.x+=r.x*i*this.manager.distance*this.speed*this.pixelToSpeedMultiplierX,this.manager.position.z+=r.y*i*this.manager.distance*this.speed*this.pixelToSpeedMultiplierY,this.deltaPosition.multiplyScalar(1-i),this.deltaPosition.lengthSq()<1e-4&&this.deltaPosition.set(0,0)}reset(){this.deltaPosition.set(0,0)}};let MouseMoveControls=kt;ge(MouseMoveControls,"tempVec2_1",new Vector2);class MouseZoomControls{constructor(e,t,i){ge(this,"onMouseWheel",e=>{e.preventDefault();let t=e.deltaY;e.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(t*=.01),e.deltaMode===WheelEvent.DOM_DELTA_LINE&&(t*=.33),this.deltaZoom+=t});this.target=e,this.manager=null,this.stiffness=i,this.speed=t,this.deltaZoom=0}start(e){this.manager=e,this.target.addEventListener("wheel",this.onMouseWheel,{passive:!1})}stop(){this.target.removeEventListener("wheel",this.onMouseWheel)}update(e,t){if(this.deltaZoom===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.distance*=Math.pow(1.5,this.deltaZoom*i*this.speed),this.deltaZoom*=1-i,Math.abs(this.deltaZoom)<1e-4&&(this.deltaZoom=0)}reset(){this.deltaZoom=0}}let MouseRotateControls$1=class{constructor(e,t,i){ge(this,"onMouseDown",e=>{((e.buttons!==void 0?e.buttons===2:e.button===2)||(e.altKey||e.ctrlKey)&&(e.buttons!==void 0?e.buttons===1:e.button===0))&&(this.moving=!0,this.deltaRotation=0,this.lastX=e.x)});ge(this,"onMouseMove",e=>{this.moving&&(this.deltaRotation+=e.x-this.lastX),this.lastX=e.x});ge(this,"onMouseUp",e=>{this.moving=!1});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplierX=1/this.target.clientWidth});this.target=e,this.manager=null,this.moving=!1,this.lastX=0,this.deltaRotation=0,this.speed=t,this.stiffness=i,this.pixelToSpeedMultiplierX=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.target.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.target.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaRotation===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.rotation+=this.deltaRotation*i*this.speed*this.pixelToSpeedMultiplierX,this.deltaRotation*=1-i,Math.abs(this.deltaRotation)<1e-4&&(this.deltaRotation=0)}reset(){this.deltaRotation=0}},MouseAngleControls$1=class{constructor(e,t,i){ge(this,"onMouseDown",e=>{((e.buttons!==void 0?e.buttons===2:e.button===2)||(e.altKey||e.ctrlKey)&&(e.buttons!==void 0?e.buttons===1:e.button===0))&&(this.moving=!0,this.deltaAngle=0,this.lastY=e.y)});ge(this,"onMouseMove",e=>{this.moving&&(this.deltaAngle-=e.y-this.lastY),this.lastY=e.y});ge(this,"onMouseUp",e=>{this.moving=!1});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplierY=1/this.target.clientHeight});this.target=e,this.manager=null,this.moving=!1,this.lastY=0,this.deltaAngle=0,this.speed=t,this.stiffness=i,this.pixelToSpeedMultiplierY=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.target.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.target.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaAngle===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.angle+=this.deltaAngle*i*this.speed*this.pixelToSpeedMultiplierY,this.deltaAngle*=1-i,Math.abs(this.deltaAngle)<1e-4&&(this.deltaAngle=0)}reset(){this.deltaAngle=0}};var hammer={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(n){(function(e,t,i,r){var s=["","webkit","Moz","MS","ms","o"],a=t.createElement("div"),o="function",l=Math.round,c=Math.abs,u=Date.now;function d(L,R,k){return setTimeout(M(L,k),R)}function f(L,R,k){return Array.isArray(L)?(g(L,k[R],k),!0):!1}function g(L,R,k){var J;if(L)if(L.forEach)L.forEach(R,k);else if(L.length!==r)for(J=0;J<L.length;)R.call(k,L[J],J,L),J++;else for(J in L)L.hasOwnProperty(J)&&R.call(k,L[J],J,L)}function x(L,R,k){var J="DEPRECATED METHOD: "+R+`
`+k+` AT 
`;return function(){var ve=new Error("get-stack-trace"),Pe=ve&&ve.stack?ve.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",je=e.console&&(e.console.warn||e.console.log);return je&&je.call(e.console,J,Pe),L.apply(this,arguments)}}var _;typeof Object.assign!="function"?_=function(R){if(R===r||R===null)throw new TypeError("Cannot convert undefined or null to object");for(var k=Object(R),J=1;J<arguments.length;J++){var ve=arguments[J];if(ve!==r&&ve!==null)for(var Pe in ve)ve.hasOwnProperty(Pe)&&(k[Pe]=ve[Pe])}return k}:_=Object.assign;var m=x(function(R,k,J){for(var ve=Object.keys(k),Pe=0;Pe<ve.length;)(!J||J&&R[ve[Pe]]===r)&&(R[ve[Pe]]=k[ve[Pe]]),Pe++;return R},"extend","Use `assign`."),v=x(function(R,k){return m(R,k,!0)},"merge","Use `assign`.");function T(L,R,k){var J=R.prototype,ve;ve=L.prototype=Object.create(J),ve.constructor=L,ve._super=J,k&&_(ve,k)}function M(L,R){return function(){return L.apply(R,arguments)}}function b(L,R){return typeof L==o?L.apply(R&&R[0]||r,R):L}function E(L,R){return L===r?R:L}function N(L,R,k){g(U(R),function(J){L.addEventListener(J,k,!1)})}function B(L,R,k){g(U(R),function(J){L.removeEventListener(J,k,!1)})}function A(L,R){for(;L;){if(L==R)return!0;L=L.parentNode}return!1}function O(L,R){return L.indexOf(R)>-1}function U(L){return L.trim().split(/\s+/g)}function q(L,R,k){if(L.indexOf&&!k)return L.indexOf(R);for(var J=0;J<L.length;){if(k&&L[J][k]==R||!k&&L[J]===R)return J;J++}return-1}function ne(L){return Array.prototype.slice.call(L,0)}function G(L,R,k){for(var J=[],ve=[],Pe=0;Pe<L.length;){var je=R?L[Pe][R]:L[Pe];q(ve,je)<0&&J.push(L[Pe]),ve[Pe]=je,Pe++}return k&&(R?J=J.sort(function(ot,ct){return ot[R]>ct[R]}):J=J.sort()),J}function H(L,R){for(var k,J,ve=R[0].toUpperCase()+R.slice(1),Pe=0;Pe<s.length;){if(k=s[Pe],J=k?k+ve:R,J in L)return J;Pe++}return r}var oe=1;function ce(){return oe++}function re(L){var R=L.ownerDocument||L;return R.defaultView||R.parentWindow||e}var Q=/mobile|tablet|ip(ad|hone|od)|android/i,pe="ontouchstart"in e,me=H(e,"PointerEvent")!==r,ee=pe&&Q.test(navigator.userAgent),te="touch",_e="pen",Se="mouse",Te="kinect",ie=25,Ae=1,Ee=2,we=4,xe=8,ke=1,P=2,y=4,C=8,I=16,F=P|y,$=C|I,X=F|$,Z=["x","y"],he=["clientX","clientY"];function j(L,R){var k=this;this.manager=L,this.callback=R,this.element=L.element,this.target=L.options.inputTarget,this.domHandler=function(J){b(L.options.enable,[L])&&k.handler(J)},this.init()}j.prototype={handler:function(){},init:function(){this.evEl&&N(this.element,this.evEl,this.domHandler),this.evTarget&&N(this.target,this.evTarget,this.domHandler),this.evWin&&N(re(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&B(this.element,this.evEl,this.domHandler),this.evTarget&&B(this.target,this.evTarget,this.domHandler),this.evWin&&B(re(this.element),this.evWin,this.domHandler)}};function w(L){var R,k=L.options.inputClass;return k?R=k:me?R=Ie:ee?R=Tt:pe?R=D:R=et,new R(L,S)}function S(L,R,k){var J=k.pointers.length,ve=k.changedPointers.length,Pe=R&Ae&&J-ve===0,je=R&(we|xe)&&J-ve===0;k.isFirst=!!Pe,k.isFinal=!!je,Pe&&(L.session={}),k.eventType=R,V(L,k),L.emit("hammer.input",k),L.recognize(k),L.session.prevInput=k}function V(L,R){var k=L.session,J=R.pointers,ve=J.length;k.firstInput||(k.firstInput=fe(R)),ve>1&&!k.firstMultiple?k.firstMultiple=fe(R):ve===1&&(k.firstMultiple=!1);var Pe=k.firstInput,je=k.firstMultiple,rt=je?je.center:Pe.center,ot=R.center=be(J);R.timeStamp=u(),R.deltaTime=R.timeStamp-Pe.timeStamp,R.angle=Ne(rt,ot),R.distance=De(rt,ot),Y(k,R),R.offsetDirection=se(R.deltaX,R.deltaY);var ct=ye(R.deltaTime,R.deltaX,R.deltaY);R.overallVelocityX=ct.x,R.overallVelocityY=ct.y,R.overallVelocity=c(ct.x)>c(ct.y)?ct.x:ct.y,R.scale=je?Fe(je.pointers,J):1,R.rotation=je?Re(je.pointers,J):0,R.maxPointers=k.prevInput?R.pointers.length>k.prevInput.maxPointers?R.pointers.length:k.prevInput.maxPointers:R.pointers.length,ae(k,R);var xt=L.element;A(R.srcEvent.target,xt)&&(xt=R.srcEvent.target),R.target=xt}function Y(L,R){var k=R.center,J=L.offsetDelta||{},ve=L.prevDelta||{},Pe=L.prevInput||{};(R.eventType===Ae||Pe.eventType===we)&&(ve=L.prevDelta={x:Pe.deltaX||0,y:Pe.deltaY||0},J=L.offsetDelta={x:k.x,y:k.y}),R.deltaX=ve.x+(k.x-J.x),R.deltaY=ve.y+(k.y-J.y)}function ae(L,R){var k=L.lastInterval||R,J=R.timeStamp-k.timeStamp,ve,Pe,je,rt;if(R.eventType!=xe&&(J>ie||k.velocity===r)){var ot=R.deltaX-k.deltaX,ct=R.deltaY-k.deltaY,xt=ye(J,ot,ct);Pe=xt.x,je=xt.y,ve=c(xt.x)>c(xt.y)?xt.x:xt.y,rt=se(ot,ct),L.lastInterval=R}else ve=k.velocity,Pe=k.velocityX,je=k.velocityY,rt=k.direction;R.velocity=ve,R.velocityX=Pe,R.velocityY=je,R.direction=rt}function fe(L){for(var R=[],k=0;k<L.pointers.length;)R[k]={clientX:l(L.pointers[k].clientX),clientY:l(L.pointers[k].clientY)},k++;return{timeStamp:u(),pointers:R,center:be(R),deltaX:L.deltaX,deltaY:L.deltaY}}function be(L){var R=L.length;if(R===1)return{x:l(L[0].clientX),y:l(L[0].clientY)};for(var k=0,J=0,ve=0;ve<R;)k+=L[ve].clientX,J+=L[ve].clientY,ve++;return{x:l(k/R),y:l(J/R)}}function ye(L,R,k){return{x:R/L||0,y:k/L||0}}function se(L,R){return L===R?ke:c(L)>=c(R)?L<0?P:y:R<0?C:I}function De(L,R,k){k||(k=Z);var J=R[k[0]]-L[k[0]],ve=R[k[1]]-L[k[1]];return Math.sqrt(J*J+ve*ve)}function Ne(L,R,k){k||(k=Z);var J=R[k[0]]-L[k[0]],ve=R[k[1]]-L[k[1]];return Math.atan2(ve,J)*180/Math.PI}function Re(L,R){return Ne(R[1],R[0],he)+Ne(L[1],L[0],he)}function Fe(L,R){return De(R[0],R[1],he)/De(L[0],L[1],he)}var Le={mousedown:Ae,mousemove:Ee,mouseup:we},Ve="mousedown",qe="mousemove mouseup";function et(){this.evEl=Ve,this.evWin=qe,this.pressed=!1,j.apply(this,arguments)}T(et,j,{handler:function(R){var k=Le[R.type];k&Ae&&R.button===0&&(this.pressed=!0),k&Ee&&R.which!==1&&(k=we),this.pressed&&(k&we&&(this.pressed=!1),this.callback(this.manager,k,{pointers:[R],changedPointers:[R],pointerType:Se,srcEvent:R}))}});var z={pointerdown:Ae,pointermove:Ee,pointerup:we,pointercancel:xe,pointerout:xe},ue={2:te,3:_e,4:Se,5:Te},Me="pointerdown",Ce="pointermove pointerup pointercancel";e.MSPointerEvent&&!e.PointerEvent&&(Me="MSPointerDown",Ce="MSPointerMove MSPointerUp MSPointerCancel");function Ie(){this.evEl=Me,this.evWin=Ce,j.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}T(Ie,j,{handler:function(R){var k=this.store,J=!1,ve=R.type.toLowerCase().replace("ms",""),Pe=z[ve],je=ue[R.pointerType]||R.pointerType,rt=je==te,ot=q(k,R.pointerId,"pointerId");Pe&Ae&&(R.button===0||rt)?ot<0&&(k.push(R),ot=k.length-1):Pe&(we|xe)&&(J=!0),!(ot<0)&&(k[ot]=R,this.callback(this.manager,Pe,{pointers:k,changedPointers:[R],pointerType:je,srcEvent:R}),J&&k.splice(ot,1))}});var Xe={touchstart:Ae,touchmove:Ee,touchend:we,touchcancel:xe},tt="touchstart",nt="touchstart touchmove touchend touchcancel";function gt(){this.evTarget=tt,this.evWin=nt,this.started=!1,j.apply(this,arguments)}T(gt,j,{handler:function(R){var k=Xe[R.type];if(k===Ae&&(this.started=!0),!!this.started){var J=Ke.call(this,R,k);k&(we|xe)&&J[0].length-J[1].length===0&&(this.started=!1),this.callback(this.manager,k,{pointers:J[0],changedPointers:J[1],pointerType:te,srcEvent:R})}}});function Ke(L,R){var k=ne(L.touches),J=ne(L.changedTouches);return R&(we|xe)&&(k=G(k.concat(J),"identifier",!0)),[k,J]}var dt={touchstart:Ae,touchmove:Ee,touchend:we,touchcancel:xe},ut="touchstart touchmove touchend touchcancel";function Tt(){this.evTarget=ut,this.targetIds={},j.apply(this,arguments)}T(Tt,j,{handler:function(R){var k=dt[R.type],J=Vt.call(this,R,k);J&&this.callback(this.manager,k,{pointers:J[0],changedPointers:J[1],pointerType:te,srcEvent:R})}});function Vt(L,R){var k=ne(L.touches),J=this.targetIds;if(R&(Ae|Ee)&&k.length===1)return J[k[0].identifier]=!0,[k,k];var ve,Pe,je=ne(L.changedTouches),rt=[],ot=this.target;if(Pe=k.filter(function(ct){return A(ct.target,ot)}),R===Ae)for(ve=0;ve<Pe.length;)J[Pe[ve].identifier]=!0,ve++;for(ve=0;ve<je.length;)J[je[ve].identifier]&&rt.push(je[ve]),R&(we|xe)&&delete J[je[ve].identifier],ve++;if(rt.length)return[G(Pe.concat(rt),"identifier",!0),rt]}var zt=2500,Nt=25;function D(){j.apply(this,arguments);var L=M(this.handler,this);this.touch=new Tt(this.manager,L),this.mouse=new et(this.manager,L),this.primaryTouch=null,this.lastTouches=[]}T(D,j,{handler:function(R,k,J){var ve=J.pointerType==te,Pe=J.pointerType==Se;if(!(Pe&&J.sourceCapabilities&&J.sourceCapabilities.firesTouchEvents)){if(ve)K.call(this,k,J);else if(Pe&&W.call(this,J))return;this.callback(R,k,J)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function K(L,R){L&Ae?(this.primaryTouch=R.changedPointers[0].identifier,le.call(this,R)):L&(we|xe)&&le.call(this,R)}function le(L){var R=L.changedPointers[0];if(R.identifier===this.primaryTouch){var k={x:R.clientX,y:R.clientY};this.lastTouches.push(k);var J=this.lastTouches,ve=function(){var Pe=J.indexOf(k);Pe>-1&&J.splice(Pe,1)};setTimeout(ve,zt)}}function W(L){for(var R=L.srcEvent.clientX,k=L.srcEvent.clientY,J=0;J<this.lastTouches.length;J++){var ve=this.lastTouches[J],Pe=Math.abs(R-ve.x),je=Math.abs(k-ve.y);if(Pe<=Nt&&je<=Nt)return!0}return!1}var de=H(a.style,"touchAction"),Oe=de!==r,Ue="compute",ze="auto",He="manipulation",$e="none",Ge="pan-x",We="pan-y",Ze=yt();function st(L,R){this.manager=L,this.set(R)}st.prototype={set:function(L){L==Ue&&(L=this.compute()),Oe&&this.manager.element.style&&Ze[L]&&(this.manager.element.style[de]=L),this.actions=L.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var L=[];return g(this.manager.recognizers,function(R){b(R.options.enable,[R])&&(L=L.concat(R.getTouchAction()))}),ft(L.join(" "))},preventDefaults:function(L){var R=L.srcEvent,k=L.offsetDirection;if(this.manager.session.prevented){R.preventDefault();return}var J=this.actions,ve=O(J,$e)&&!Ze[$e],Pe=O(J,We)&&!Ze[We],je=O(J,Ge)&&!Ze[Ge];if(ve){var rt=L.pointers.length===1,ot=L.distance<2,ct=L.deltaTime<250;if(rt&&ot&&ct)return}if(!(je&&Pe)&&(ve||Pe&&k&F||je&&k&$))return this.preventSrc(R)},preventSrc:function(L){this.manager.session.prevented=!0,L.preventDefault()}};function ft(L){if(O(L,$e))return $e;var R=O(L,Ge),k=O(L,We);return R&&k?$e:R||k?R?Ge:We:O(L,He)?He:ze}function yt(){if(!Oe)return!1;var L={},R=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(k){L[k]=R?e.CSS.supports("touch-action",k):!0}),L}var Je=1,Be=2,_t=4,Ye=8,at=Ye,Mt=16,lt=32;function ht(L){this.options=_({},this.defaults,L||{}),this.id=ce(),this.manager=null,this.options.enable=E(this.options.enable,!0),this.state=Je,this.simultaneous={},this.requireFail=[]}ht.prototype={defaults:{},set:function(L){return _(this.options,L),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(L){if(f(L,"recognizeWith",this))return this;var R=this.simultaneous;return L=bt(L,this),R[L.id]||(R[L.id]=L,L.recognizeWith(this)),this},dropRecognizeWith:function(L){return f(L,"dropRecognizeWith",this)?this:(L=bt(L,this),delete this.simultaneous[L.id],this)},requireFailure:function(L){if(f(L,"requireFailure",this))return this;var R=this.requireFail;return L=bt(L,this),q(R,L)===-1&&(R.push(L),L.requireFailure(this)),this},dropRequireFailure:function(L){if(f(L,"dropRequireFailure",this))return this;L=bt(L,this);var R=q(this.requireFail,L);return R>-1&&this.requireFail.splice(R,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(L){return!!this.simultaneous[L.id]},emit:function(L){var R=this,k=this.state;function J(ve){R.manager.emit(ve,L)}k<Ye&&J(R.options.event+it(k)),J(R.options.event),L.additionalEvent&&J(L.additionalEvent),k>=Ye&&J(R.options.event+it(k))},tryEmit:function(L){if(this.canEmit())return this.emit(L);this.state=lt},canEmit:function(){for(var L=0;L<this.requireFail.length;){if(!(this.requireFail[L].state&(lt|Je)))return!1;L++}return!0},recognize:function(L){var R=_({},L);if(!b(this.options.enable,[this,R])){this.reset(),this.state=lt;return}this.state&(at|Mt|lt)&&(this.state=Je),this.state=this.process(R),this.state&(Be|_t|Ye|Mt)&&this.tryEmit(R)},process:function(L){},getTouchAction:function(){},reset:function(){}};function it(L){return L&Mt?"cancel":L&Ye?"end":L&_t?"move":L&Be?"start":""}function vt(L){return L==I?"down":L==C?"up":L==P?"left":L==y?"right":""}function bt(L,R){var k=R.manager;return k?k.get(L):L}function Qe(){ht.apply(this,arguments)}T(Qe,ht,{defaults:{pointers:1},attrTest:function(L){var R=this.options.pointers;return R===0||L.pointers.length===R},process:function(L){var R=this.state,k=L.eventType,J=R&(Be|_t),ve=this.attrTest(L);return J&&(k&xe||!ve)?R|Mt:J||ve?k&we?R|Ye:R&Be?R|_t:Be:lt}});function wt(){Qe.apply(this,arguments),this.pX=null,this.pY=null}T(wt,Qe,{defaults:{event:"pan",threshold:10,pointers:1,direction:X},getTouchAction:function(){var L=this.options.direction,R=[];return L&F&&R.push(We),L&$&&R.push(Ge),R},directionTest:function(L){var R=this.options,k=!0,J=L.distance,ve=L.direction,Pe=L.deltaX,je=L.deltaY;return ve&R.direction||(R.direction&F?(ve=Pe===0?ke:Pe<0?P:y,k=Pe!=this.pX,J=Math.abs(L.deltaX)):(ve=je===0?ke:je<0?C:I,k=je!=this.pY,J=Math.abs(L.deltaY))),L.direction=ve,k&&J>R.threshold&&ve&R.direction},attrTest:function(L){return Qe.prototype.attrTest.call(this,L)&&(this.state&Be||!(this.state&Be)&&this.directionTest(L))},emit:function(L){this.pX=L.deltaX,this.pY=L.deltaY;var R=vt(L.direction);R&&(L.additionalEvent=this.options.event+R),this._super.emit.call(this,L)}});function Dt(){Qe.apply(this,arguments)}T(Dt,Qe,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[$e]},attrTest:function(L){return this._super.attrTest.call(this,L)&&(Math.abs(L.scale-1)>this.options.threshold||this.state&Be)},emit:function(L){if(L.scale!==1){var R=L.scale<1?"in":"out";L.additionalEvent=this.options.event+R}this._super.emit.call(this,L)}});function Ct(){ht.apply(this,arguments),this._timer=null,this._input=null}T(Ct,ht,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ze]},process:function(L){var R=this.options,k=L.pointers.length===R.pointers,J=L.distance<R.threshold,ve=L.deltaTime>R.time;if(this._input=L,!J||!k||L.eventType&(we|xe)&&!ve)this.reset();else if(L.eventType&Ae)this.reset(),this._timer=d(function(){this.state=at,this.tryEmit()},R.time,this);else if(L.eventType&we)return at;return lt},reset:function(){clearTimeout(this._timer)},emit:function(L){this.state===at&&(L&&L.eventType&we?this.manager.emit(this.options.event+"up",L):(this._input.timeStamp=u(),this.manager.emit(this.options.event,this._input)))}});function Ht(){Qe.apply(this,arguments)}T(Ht,Qe,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[$e]},attrTest:function(L){return this._super.attrTest.call(this,L)&&(Math.abs(L.rotation)>this.options.threshold||this.state&Be)}});function $t(){Qe.apply(this,arguments)}T($t,Qe,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:F|$,pointers:1},getTouchAction:function(){return wt.prototype.getTouchAction.call(this)},attrTest:function(L){var R=this.options.direction,k;return R&(F|$)?k=L.overallVelocity:R&F?k=L.overallVelocityX:R&$&&(k=L.overallVelocityY),this._super.attrTest.call(this,L)&&R&L.offsetDirection&&L.distance>this.options.threshold&&L.maxPointers==this.options.pointers&&c(k)>this.options.velocity&&L.eventType&we},emit:function(L){var R=vt(L.offsetDirection);R&&this.manager.emit(this.options.event+R,L),this.manager.emit(this.options.event,L)}});function Ft(){ht.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}T(Ft,ht,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[He]},process:function(L){var R=this.options,k=L.pointers.length===R.pointers,J=L.distance<R.threshold,ve=L.deltaTime<R.time;if(this.reset(),L.eventType&Ae&&this.count===0)return this.failTimeout();if(J&&ve&&k){if(L.eventType!=we)return this.failTimeout();var Pe=this.pTime?L.timeStamp-this.pTime<R.interval:!0,je=!this.pCenter||De(this.pCenter,L.center)<R.posThreshold;this.pTime=L.timeStamp,this.pCenter=L.center,!je||!Pe?this.count=1:this.count+=1,this._input=L;var rt=this.count%R.taps;if(rt===0)return this.hasRequireFailures()?(this._timer=d(function(){this.state=at,this.tryEmit()},R.interval,this),Be):at}return lt},failTimeout:function(){return this._timer=d(function(){this.state=lt},this.options.interval,this),lt},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==at&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function St(L,R){return R=R||{},R.recognizers=E(R.recognizers,St.defaults.preset),new Gt(L,R)}St.VERSION="2.0.7",St.defaults={domEvents:!1,touchAction:Ue,enable:!0,inputTarget:null,inputClass:null,preset:[[Ht,{enable:!1}],[Dt,{enable:!1},["rotate"]],[$t,{direction:F}],[wt,{direction:F},["swipe"]],[Ft],[Ft,{event:"doubletap",taps:2},["tap"]],[Ct]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Yt=1,Xt=2;function Gt(L,R){this.options=_({},St.defaults,R||{}),this.options.inputTarget=this.options.inputTarget||L,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=L,this.input=w(this),this.touchAction=new st(this,this.options.touchAction),qt(this,!0),g(this.options.recognizers,function(k){var J=this.add(new k[0](k[1]));k[2]&&J.recognizeWith(k[2]),k[3]&&J.requireFailure(k[3])},this)}Gt.prototype={set:function(L){return _(this.options,L),L.touchAction&&this.touchAction.update(),L.inputTarget&&(this.input.destroy(),this.input.target=L.inputTarget,this.input.init()),this},stop:function(L){this.session.stopped=L?Xt:Yt},recognize:function(L){var R=this.session;if(!R.stopped){this.touchAction.preventDefaults(L);var k,J=this.recognizers,ve=R.curRecognizer;(!ve||ve&&ve.state&at)&&(ve=R.curRecognizer=null);for(var Pe=0;Pe<J.length;)k=J[Pe],R.stopped!==Xt&&(!ve||k==ve||k.canRecognizeWith(ve))?k.recognize(L):k.reset(),!ve&&k.state&(Be|_t|Ye)&&(ve=R.curRecognizer=k),Pe++}},get:function(L){if(L instanceof ht)return L;for(var R=this.recognizers,k=0;k<R.length;k++)if(R[k].options.event==L)return R[k];return null},add:function(L){if(f(L,"add",this))return this;var R=this.get(L.options.event);return R&&this.remove(R),this.recognizers.push(L),L.manager=this,this.touchAction.update(),L},remove:function(L){if(f(L,"remove",this))return this;if(L=this.get(L),L){var R=this.recognizers,k=q(R,L);k!==-1&&(R.splice(k,1),this.touchAction.update())}return this},on:function(L,R){if(L!==r&&R!==r){var k=this.handlers;return g(U(L),function(J){k[J]=k[J]||[],k[J].push(R)}),this}},off:function(L,R){if(L!==r){var k=this.handlers;return g(U(L),function(J){R?k[J]&&k[J].splice(q(k[J],R),1):delete k[J]}),this}},emit:function(L,R){this.options.domEvents&&Kt(L,R);var k=this.handlers[L]&&this.handlers[L].slice();if(!(!k||!k.length)){R.type=L,R.preventDefault=function(){R.srcEvent.preventDefault()};for(var J=0;J<k.length;)k[J](R),J++}},destroy:function(){this.element&&qt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function qt(L,R){var k=L.element;if(k.style){var J;g(L.options.cssProps,function(ve,Pe){J=H(k.style,Pe),R?(L.oldCssProps[J]=k.style[J],k.style[J]=ve):k.style[J]=L.oldCssProps[J]||""}),R||(L.oldCssProps={})}}function Kt(L,R){var k=t.createEvent("Event");k.initEvent(L,!0,!0),k.gesture=R,R.target.dispatchEvent(k)}_(St,{INPUT_START:Ae,INPUT_MOVE:Ee,INPUT_END:we,INPUT_CANCEL:xe,STATE_POSSIBLE:Je,STATE_BEGAN:Be,STATE_CHANGED:_t,STATE_ENDED:Ye,STATE_RECOGNIZED:at,STATE_CANCELLED:Mt,STATE_FAILED:lt,DIRECTION_NONE:ke,DIRECTION_LEFT:P,DIRECTION_RIGHT:y,DIRECTION_UP:C,DIRECTION_DOWN:I,DIRECTION_HORIZONTAL:F,DIRECTION_VERTICAL:$,DIRECTION_ALL:X,Manager:Gt,Input:j,TouchAction:st,TouchInput:Tt,MouseInput:et,PointerEventInput:Ie,TouchMouseInput:D,SingleTouchInput:gt,Recognizer:ht,AttrRecognizer:Qe,Tap:Ft,Pan:wt,Swipe:$t,Pinch:Dt,Rotate:Ht,Press:Ct,on:N,off:B,each:g,merge:v,extend:m,assign:_,inherit:T,bindFn:M,prefixed:H});var Zt=typeof e<"u"?e:typeof self<"u"?self:{};Zt.Hammer=St,typeof r=="function"&&r.amd?r(function(){return St}):n.exports?n.exports=St:e[i]=St})(window,document,"Hammer")})(hammer);class MapHeightControls{constructor(e,t){this.manager=null,this.cameraHeightStiffness=e,this.targetHeightStiffness=t,this.maxAngle=Math.PI/2,this.targetHeight=0,this.cameraHeight=0,this.minCameraHeight=0,this.distanceTagretHeight=0}start(e){this.manager=e}stop(){}update(e,t){this.updateHeights(e,t),this.manager.position.y=Math.max(this.manager.position.y,this.getSuggestedHeight())}updateHeights(e,t){let i=this.targetHeightStiffness/(16.666/e);i=MathUtils.clamp(i,0,1);let r=t.terrainHeightAt(this.manager.position.x,this.manager.position.z)+3||0,s=r-this.targetHeight;if(this.targetHeight+=s*i,Math.abs(s)<.001&&(this.targetHeight=r),this.minCameraHeight=0,this.maxAngle>=.1){let a=this.cameraHeightStiffness/(16.666/e);a=MathUtils.clamp(a,0,1);let o=t.terrainHeightAt(this.manager.camera.position.x,this.manager.camera.position.z)||0,l=o-this.cameraHeight;this.cameraHeight+=l*a,Math.abs(l)<.001&&(this.cameraHeight=o);let c=Math.cos(this.maxAngle)*this.manager.distance;this.minCameraHeight=this.cameraHeight-c+1}this.distanceTagretHeight=MathUtils.lerp(this.targetHeight,0,Math.min(this.manager.distance/500,1))}getSuggestedHeight(){return Math.max(this.distanceTagretHeight,this.minCameraHeight)}}const It=class{constructor(e,...t){this.code=e,this.ctrl=t.includes(It.CTRL)||this.code==="CtrlLeft"||this.code==="CtrlRight",this.shift=t.includes(It.SHIFT)||this.code==="ShiftLeft"||this.code==="ShiftRight",this.alt=t.includes(It.ALT)||this.code==="AltLeft"||this.code==="AltRight"}testDown(e){return this.code===e.code&&this.ctrl===e.ctrlKey&&this.shift===e.shiftKey&&this.alt===e.altKey}testUp(e){return this.code===e.code}static oneDown(e,...t){for(let i of t)if(i.testDown(e))return!0;return!1}static oneUp(e,...t){for(let i of t)if(i.testUp(e))return!0;return!1}};let KeyCombination=It;ge(KeyCombination,"CTRL",0),ge(KeyCombination,"SHIFT",1),ge(KeyCombination,"ALT",2);var Ot;let KeyMoveControls$1=(Ot=class{constructor(e,t,i){ge(this,"onKeyDown",e=>{KeyCombination.oneDown(e,...KeyMoveControls$1.KEYS.UP)&&(this.up=!0,e.preventDefault()),KeyCombination.oneDown(e,...KeyMoveControls$1.KEYS.DOWN)&&(this.down=!0,e.preventDefault()),KeyCombination.oneDown(e,...KeyMoveControls$1.KEYS.LEFT)&&(this.left=!0,e.preventDefault()),KeyCombination.oneDown(e,...KeyMoveControls$1.KEYS.RIGHT)&&(this.right=!0,e.preventDefault())});ge(this,"onKeyUp",e=>{KeyCombination.oneUp(e,...KeyMoveControls$1.KEYS.UP)&&(this.up=!1),KeyCombination.oneUp(e,...KeyMoveControls$1.KEYS.DOWN)&&(this.down=!1),KeyCombination.oneUp(e,...KeyMoveControls$1.KEYS.LEFT)&&(this.left=!1),KeyCombination.oneUp(e,...KeyMoveControls$1.KEYS.RIGHT)&&(this.right=!1)});this.target=e,this.manager=null,this.deltaPosition=new Vector2,this.up=!1,this.down=!1,this.left=!1,this.right=!1,this.speed=t,this.stiffness=i}start(e){this.manager=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}stop(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(e,t){if(this.up&&(this.deltaPosition.y-=1),this.down&&(this.deltaPosition.y+=1),this.left&&(this.deltaPosition.x-=1),this.right&&(this.deltaPosition.x+=1),this.deltaPosition.x===0&&this.deltaPosition.y===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1);let r=KeyMoveControls$1.temp_v2.copy(this.deltaPosition);r.rotateAround(VEC2_ZERO,this.manager.rotation),this.manager.position.x+=r.x*i*this.manager.distance*this.speed*e*.06,this.manager.position.z+=r.y*i*this.manager.distance*this.speed*e*.06,this.deltaPosition.multiplyScalar(1-i),this.deltaPosition.lengthSq()<1e-4&&this.deltaPosition.set(0,0)}},ge(Ot,"KEYS",{LEFT:[new KeyCombination("ArrowLeft"),new KeyCombination("KeyA")],UP:[new KeyCombination("ArrowUp"),new KeyCombination("KeyW")],RIGHT:[new KeyCombination("ArrowRight"),new KeyCombination("KeyD")],DOWN:[new KeyCombination("ArrowDown"),new KeyCombination("KeyS")]}),ge(Ot,"temp_v2",new Vector2),Ot);const At=class{constructor(e,t,i){ge(this,"onKeyDown",e=>{KeyCombination.oneDown(e,...At.KEYS.UP)&&(this.up=!0,e.preventDefault()),KeyCombination.oneDown(e,...At.KEYS.DOWN)&&(this.down=!0,e.preventDefault())});ge(this,"onKeyUp",e=>{KeyCombination.oneUp(e,...At.KEYS.UP)&&(this.up=!1),KeyCombination.oneUp(e,...At.KEYS.DOWN)&&(this.down=!1)});this.target=e,this.manager=null,this.deltaAngle=0,this.up=!1,this.down=!1,this.speed=t,this.stiffness=i}start(e){this.manager=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}stop(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(e,t){if(this.up&&(this.deltaAngle-=1),this.down&&(this.deltaAngle+=1),this.deltaAngle===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.angle+=this.deltaAngle*i*this.speed*e*.06,this.deltaAngle*=1-i,Math.abs(this.deltaAngle)<1e-4&&(this.deltaAngle=0)}};let KeyAngleControls=At;ge(KeyAngleControls,"KEYS",{UP:[new KeyCombination("ArrowUp",KeyCombination.ALT),new KeyCombination("KeyW",KeyCombination.ALT),new KeyCombination("PageUp")],DOWN:[new KeyCombination("ArrowDown",KeyCombination.ALT),new KeyCombination("KeyS",KeyCombination.ALT),new KeyCombination("PageDown")]});const Lt=class{constructor(e,t,i){ge(this,"onKeyDown",e=>{KeyCombination.oneDown(e,...Lt.KEYS.LEFT)&&(this.left=!0,e.preventDefault()),KeyCombination.oneDown(e,...Lt.KEYS.RIGHT)&&(this.right=!0,e.preventDefault())});ge(this,"onKeyUp",e=>{KeyCombination.oneUp(e,...Lt.KEYS.LEFT)&&(this.left=!1),KeyCombination.oneUp(e,...Lt.KEYS.RIGHT)&&(this.right=!1)});this.target=e,this.manager=null,this.deltaRotation=0,this.left=!1,this.right=!1,this.speed=t,this.stiffness=i}start(e){this.manager=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}stop(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(e,t){if(this.left&&(this.deltaRotation+=1),this.right&&(this.deltaRotation-=1),this.deltaRotation===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.rotation+=this.deltaRotation*i*this.speed*e*.06,this.deltaRotation*=1-i,Math.abs(this.deltaRotation)<1e-4&&(this.deltaRotation=0)}};let KeyRotateControls=Lt;ge(KeyRotateControls,"KEYS",{LEFT:[new KeyCombination("ArrowLeft",KeyCombination.ALT),new KeyCombination("KeyA",KeyCombination.ALT),new KeyCombination("Delete")],RIGHT:[new KeyCombination("ArrowRight",KeyCombination.ALT),new KeyCombination("KeyD",KeyCombination.ALT),new KeyCombination("End")]});const Pt=class{constructor(e,t,i){ge(this,"onKeyDown",e=>{KeyCombination.oneDown(e,...Pt.KEYS.IN)&&(this.in=!0,e.preventDefault()),KeyCombination.oneDown(e,...Pt.KEYS.OUT)&&(this.out=!0,e.preventDefault())});ge(this,"onKeyUp",e=>{KeyCombination.oneUp(e,...Pt.KEYS.IN)&&(this.in=!1),KeyCombination.oneUp(e,...Pt.KEYS.OUT)&&(this.out=!1)});this.target=e,this.manager=null,this.deltaZoom=0,this.in=!1,this.out=!1,this.speed=t,this.stiffness=i}start(e){this.manager=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}stop(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(e,t){if(this.in&&(this.deltaZoom-=1),this.out&&(this.deltaZoom+=1),this.deltaZoom===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.distance*=Math.pow(1.5,this.deltaZoom*i*this.speed*e*.06),this.deltaZoom*=1-i,Math.abs(this.deltaZoom)<1e-4&&(this.deltaZoom=0)}};let KeyZoomControls=Pt;ge(KeyZoomControls,"KEYS",{IN:[new KeyCombination("NumpadAdd"),new KeyCombination("Insert")],OUT:[new KeyCombination("NumpadSubtract"),new KeyCombination("Home")]});const Bt=class{constructor(e,t,i,r){ge(this,"onTouchDown",e=>{e.pointerType!=="mouse"&&(this.moving=!0,this.deltaPosition.set(0,0),this.lastPosition.set(e.center.x,e.center.y))});ge(this,"onTouchMove",e=>{if(e.pointerType==="mouse")return;let t=Bt.tempVec2_1.set(e.center.x,e.center.y);this.moving&&this.deltaPosition.sub(t).add(this.lastPosition),this.lastPosition.copy(t)});ge(this,"onTouchUp",e=>{e.pointerType!=="mouse"&&(this.moving=!1)});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplierX=1/this.target.clientWidth*(this.target.clientWidth/this.target.clientHeight),this.pixelToSpeedMultiplierY=1/this.target.clientHeight});this.target=e,this.hammer=t,this.manager=null,this.moving=!1,this.lastPosition=new Vector2,this.deltaPosition=new Vector2,this.speed=i,this.stiffness=r,this.pixelToSpeedMultiplierX=0,this.pixelToSpeedMultiplierY=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.hammer.on("movestart",this.onTouchDown),this.hammer.on("movemove",this.onTouchMove),this.hammer.on("moveend",this.onTouchUp),this.hammer.on("movecancel",this.onTouchUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.hammer.off("movestart",this.onTouchDown),this.hammer.off("movemove",this.onTouchMove),this.hammer.off("moveend",this.onTouchUp),this.hammer.off("movecancel",this.onTouchUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaPosition.x===0&&this.deltaPosition.y===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1);let r=Bt.tempVec2_1.copy(this.deltaPosition);r.rotateAround(VEC2_ZERO,this.manager.rotation),this.manager.position.x+=r.x*i*this.manager.distance*this.speed*this.pixelToSpeedMultiplierX,this.manager.position.z+=r.y*i*this.manager.distance*this.speed*this.pixelToSpeedMultiplierY,this.deltaPosition.multiplyScalar(1-i),this.deltaPosition.lengthSq()<1e-4&&this.deltaPosition.set(0,0)}reset(){this.deltaPosition.set(0,0)}};let TouchMoveControls=Bt;ge(TouchMoveControls,"tempVec2_1",new Vector2);class TouchRotateControls{constructor(e,t,i){ge(this,"onTouchDown",e=>{this.moving=!0,this.deltaRotation=0,this.lastRotation=e.rotation});ge(this,"onTouchMove",e=>{if(this.moving){let t=e.rotation-this.lastRotation;t>180&&(t-=360),t<-180&&(t+=360),this.deltaRotation-=t}this.lastRotation=e.rotation});ge(this,"onTouchUp",e=>{this.moving=!1});this.hammer=e,this.manager=null,this.moving=!1,this.lastRotation=0,this.deltaRotation=0,this.speed=t,this.stiffness=i}start(e){this.manager=e,this.hammer.on("rotatestart",this.onTouchDown),this.hammer.on("rotatemove",this.onTouchMove),this.hammer.on("rotateend",this.onTouchUp),this.hammer.on("rotatecancel",this.onTouchUp)}stop(){this.hammer.off("rotatestart",this.onTouchDown),this.hammer.off("rotatemove",this.onTouchMove),this.hammer.off("rotateend",this.onTouchUp),this.hammer.off("rotatecancel",this.onTouchUp)}update(e,t){if(this.deltaRotation===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.rotation+=this.deltaRotation*i*this.speed,this.deltaRotation*=1-i,Math.abs(this.deltaRotation)<1e-4&&(this.deltaRotation=0)}reset(){this.deltaRotation=0}}class TouchAngleControls{constructor(e,t,i,r){ge(this,"onTouchDown",e=>{this.moving=!0,this.deltaAngle=0,this.lastY=e.center.y});ge(this,"onTouchMove",e=>{this.moving&&(this.deltaAngle-=e.center.y-this.lastY),this.lastY=e.center.y});ge(this,"onTouchUp",e=>{this.moving=!1});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplierY=1/this.target.clientHeight});this.target=e,this.hammer=t,this.manager=null,this.moving=!1,this.lastY=0,this.deltaAngle=0,this.speed=i,this.stiffness=r,this.pixelToSpeedMultiplierY=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.hammer.on("tiltstart",this.onTouchDown),this.hammer.on("tiltmove",this.onTouchMove),this.hammer.on("tiltend",this.onTouchUp),this.hammer.on("tiltcancel",this.onTouchUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.hammer.off("tiltstart",this.onTouchDown),this.hammer.off("tiltmove",this.onTouchMove),this.hammer.off("tiltend",this.onTouchUp),this.hammer.off("tiltcancel",this.onTouchUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaAngle===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.angle+=this.deltaAngle*i*this.speed*this.pixelToSpeedMultiplierY,this.deltaAngle*=1-i,Math.abs(this.deltaAngle)<1e-4&&(this.deltaAngle=0)}reset(){this.deltaAngle=0}}class TouchZoomControls{constructor(e){ge(this,"onTouchDown",e=>{this.moving=!0,this.lastZoom=1});ge(this,"onTouchMove",e=>{this.moving&&(this.deltaZoom*=e.scale/this.lastZoom),this.lastZoom=e.scale});ge(this,"onTouchUp",e=>{this.moving=!1});this.hammer=e,this.manager=null,this.moving=!1,this.deltaZoom=1,this.lastZoom=1}start(e){this.manager=e,this.hammer.on("zoomstart",this.onTouchDown),this.hammer.on("zoommove",this.onTouchMove),this.hammer.on("zoomend",this.onTouchUp),this.hammer.on("zoomcancel",this.onTouchUp)}stop(){this.hammer.off("zoomstart",this.onTouchDown),this.hammer.off("zoommove",this.onTouchMove),this.hammer.off("zoomend",this.onTouchUp),this.hammer.off("zoomcancel",this.onTouchUp)}update(e,t){this.deltaZoom!==1&&(this.manager.distance/=this.deltaZoom,this.deltaZoom=1)}reset(){this.deltaZoom=1}}const HALF_PI=Math.PI*.5,Ut=class{constructor(e){ge(this,"onContextMenu",e=>{e.preventDefault()});ge(this,"onTap",e=>{let t=!1,i=new Vector2(e.center.x,e.center.y),r=Date.now();this.lastTap>0&&this.lastTapCenter&&r-this.lastTap<500&&this.lastTapCenter.distanceTo(i)<5?(t=!0,this.lastTap=-1):(this.lastTap=r,this.lastTapCenter=i),this.manager.handleMapInteraction(new Vector2(e.center.x,e.center.y),{doubleTap:t})});this.rootElement=e,this.data=reactive({followingPlayer:null}),this.manager=null,this.hammer=new hammer.exports.Manager(this.rootElement),this.initializeHammer(),this.mouseMove=new MouseMoveControls(this.rootElement,1.5,.3),this.mouseRotate=new MouseRotateControls$1(this.rootElement,6,.3),this.mouseAngle=new MouseAngleControls$1(this.rootElement,3,.3),this.mouseZoom=new MouseZoomControls(this.rootElement,1,.2),this.keyMove=new KeyMoveControls$1(this.rootElement,.025,.2),this.keyRotate=new KeyRotateControls(this.rootElement,.06,.15),this.keyAngle=new KeyAngleControls(this.rootElement,.04,.15),this.keyZoom=new KeyZoomControls(this.rootElement,.2,.15),this.touchMove=new TouchMoveControls(this.rootElement,this.hammer,1.5,.3),this.touchRotate=new TouchRotateControls(this.hammer,.0174533,.3),this.touchAngle=new TouchAngleControls(this.rootElement,this.hammer,3,.3),this.touchZoom=new TouchZoomControls(this.hammer),this.mapHeight=new MapHeightControls(.2,.1),this.lastTap=-1,this.lastTapCenter=null,this.minDistance=5,this.maxDistance=1e5}start(e){this.manager=e,this.rootElement.addEventListener("contextmenu",this.onContextMenu),this.hammer.on("tap",this.onTap),this.mouseMove.start(e),this.mouseRotate.start(e),this.mouseAngle.start(e),this.mouseZoom.start(e),this.keyMove.start(e),this.keyRotate.start(e),this.keyAngle.start(e),this.keyZoom.start(e),this.touchMove.start(e),this.touchRotate.start(e),this.touchAngle.start(e),this.touchZoom.start(e),this.mapHeight.start(e)}stop(){this.stopFollowingPlayerMarker(),this.rootElement.removeEventListener("contextmenu",this.onContextMenu),this.hammer.off("tap",this.onTap),this.mouseMove.stop(),this.mouseRotate.stop(),this.mouseAngle.stop(),this.mouseZoom.stop(),this.keyMove.stop(),this.keyRotate.stop(),this.keyAngle.stop(),this.keyZoom.stop(),this.touchMove.stop(),this.touchRotate.stop(),this.touchAngle.stop(),this.touchZoom.stop(),this.mapHeight.stop()}update(e,t){this.manager.position.y=-1e4,Ut._beforeMoveTemp.copy(this.manager.position),this.mouseMove.update(e,t),this.keyMove.update(e,t),this.touchMove.update(e,t),this.data.followingPlayer&&!Ut._beforeMoveTemp.equals(this.manager.position)&&this.stopFollowingPlayerMarker(),this.data.followingPlayer&&this.manager.position.copy(this.data.followingPlayer.position),this.mouseZoom.update(e,t),this.keyZoom.update(e,t),this.touchZoom.update(e,t),this.manager.distance=softClamp(this.manager.distance,this.minDistance,this.maxDistance,.8);let i=this.getMaxPerspectiveAngleForDistance(this.manager.distance);this.mouseRotate.update(e,t),this.keyRotate.update(e,t),this.touchRotate.update(e,t);const r=this.mouseRotate.moving||this.touchRotate.moving||this.keyRotate.left||this.keyRotate.right;this.manager.ortho!==0&&Math.abs(this.manager.rotation)<(r?.05:.3)&&(this.manager.rotation=softClamp(this.manager.rotation,0,0,.1)),this.manager.ortho===0&&(this.mouseAngle.update(e,t),this.keyAngle.update(e,t),this.touchAngle.update(e,t),this.manager.angle=softClamp(this.manager.angle,0,i,.8)),(this.manager.ortho===0||this.manager.angle===0)&&(this.mapHeight.maxAngle=i,this.mapHeight.update(e,t))}reset(){this.mouseMove.reset(),this.mouseRotate.reset(),this.mouseAngle.reset(),this.mouseZoom.reset(),this.touchMove.reset(),this.touchRotate.reset(),this.touchAngle.reset(),this.touchZoom.reset()}getMaxPerspectiveAngleForDistance(e){return MathUtils.clamp((1-Math.pow(Math.max(e-5,.001)*5e-4,.5))*HALF_PI,0,HALF_PI)}initializeHammer(){let e=new hammer.exports.Tap({event:"tap",pointers:1,taps:1,threshold:5}),t=new hammer.exports.Pan({event:"move",pointers:1,direction:hammer.exports.DIRECTION_ALL,threshold:0}),i=new hammer.exports.Pan({event:"tilt",pointers:2,direction:hammer.exports.DIRECTION_VERTICAL,threshold:0}),r=new hammer.exports.Rotate({event:"rotate",pointers:2,threshold:0}),s=new hammer.exports.Pinch({event:"zoom",pointers:2,threshold:0});t.recognizeWith(r),t.recognizeWith(i),t.recognizeWith(s),i.recognizeWith(r),i.recognizeWith(s),r.recognizeWith(s),this.hammer.add(e),this.hammer.add(i),this.hammer.add(t),this.hammer.add(r),this.hammer.add(s)}followPlayerMarker(e){e.isPlayerMarker&&(e=e.data),this.data.followingPlayer=e}stopFollowingPlayerMarker(){this.data.followingPlayer=null}};let MapControls=Ut;ge(MapControls,"_beforeMoveTemp",new Vector3);const mt=class{constructor(e,t,i){ge(this,"onKeyDown",e=>{KeyCombination.oneUp(e,...mt.KEYS.UP)&&(this.up=!0,e.preventDefault()),KeyCombination.oneUp(e,...mt.KEYS.DOWN)&&(this.down=!0,e.preventDefault()),KeyCombination.oneUp(e,...mt.KEYS.LEFT)&&(this.left=!0,e.preventDefault()),KeyCombination.oneUp(e,...mt.KEYS.RIGHT)&&(this.right=!0,e.preventDefault())});ge(this,"onKeyUp",e=>{KeyCombination.oneUp(e,...mt.KEYS.UP)&&(this.up=!1),KeyCombination.oneUp(e,...mt.KEYS.DOWN)&&(this.down=!1),KeyCombination.oneUp(e,...mt.KEYS.LEFT)&&(this.left=!1),KeyCombination.oneUp(e,...mt.KEYS.RIGHT)&&(this.right=!1)});this.target=e,this.manager=null,this.deltaPosition=new Vector2,this.up=!1,this.down=!1,this.left=!1,this.right=!1,this.speed=t,this.stiffness=i}start(e){this.manager=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}stop(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(e,t){if(this.up&&(this.deltaPosition.y-=1),this.down&&(this.deltaPosition.y+=1),this.left&&(this.deltaPosition.x-=1),this.right&&(this.deltaPosition.x+=1),this.deltaPosition.x===0&&this.deltaPosition.y===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1);let r=mt.temp_v2.copy(this.deltaPosition);r.rotateAround(VEC2_ZERO,this.manager.rotation),this.manager.position.x+=r.x*i*this.speed*e*.06,this.manager.position.z+=r.y*i*this.speed*e*.06,this.deltaPosition.multiplyScalar(1-i),this.deltaPosition.lengthSq()<1e-4&&this.deltaPosition.set(0,0)}};let KeyMoveControls=mt;ge(KeyMoveControls,"KEYS",{LEFT:[new KeyCombination("ArrowLeft"),new KeyCombination("KeyA")],UP:[new KeyCombination("ArrowUp"),new KeyCombination("KeyW")],RIGHT:[new KeyCombination("ArrowRight"),new KeyCombination("KeyD")],DOWN:[new KeyCombination("ArrowDown"),new KeyCombination("KeyS")]}),ge(KeyMoveControls,"temp_v2",new Vector2);class MouseRotateControls{constructor(e,t,i,r,s){ge(this,"onMouseDown",e=>{this.moving=!0,this.deltaRotation=0,this.lastX=e.x});ge(this,"onMouseMove",e=>{document.pointerLockElement?this.deltaRotation-=e.movementX*this.speedCapture*this.pixelToSpeedMultiplier:this.moving&&(e.buttons===1?this.deltaRotation-=(e.x-this.lastX)*this.speedLeft*this.pixelToSpeedMultiplier:this.deltaRotation-=(e.x-this.lastX)*this.speedRight*this.pixelToSpeedMultiplier),this.lastX=e.x});ge(this,"onMouseUp",e=>{this.moving=!1});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplier=1/this.target.clientWidth*(this.target.clientWidth/this.target.clientHeight)});this.target=e,this.manager=null,this.moving=!1,this.lastX=0,this.deltaRotation=0,this.speedLeft=t,this.speedRight=i,this.speedCapture=r,this.stiffness=s,this.pixelToSpeedMultiplier=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.target.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.target.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaRotation===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.rotation+=this.deltaRotation*i,this.deltaRotation*=1-i,Math.abs(this.deltaRotation)<1e-4&&(this.deltaRotation=0)}reset(){this.deltaRotation=0}}class MouseAngleControls{constructor(e,t,i,r,s){ge(this,"onMouseDown",e=>{this.moving=!0,this.deltaAngle=0,this.lastY=e.y});ge(this,"onMouseMove",e=>{document.pointerLockElement?this.deltaAngle+=e.movementY*this.speedCapture*this.pixelToSpeedMultiplier:this.moving&&(e.buttons===1?this.deltaAngle+=(e.y-this.lastY)*this.speedLeft*this.pixelToSpeedMultiplier:this.deltaAngle+=(e.y-this.lastY)*this.speedRight*this.pixelToSpeedMultiplier),this.lastY=e.y});ge(this,"onMouseUp",e=>{this.moving=!1});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplier=1/this.target.clientHeight});this.target=e,this.manager=null,this.moving=!1,this.lastY=0,this.deltaAngle=0,this.speedLeft=t,this.speedRight=i,this.speedCapture=r,this.stiffness=s,this.pixelToSpeedMultiplier=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.target.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.target.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaAngle===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.angle+=this.deltaAngle*i,this.deltaAngle*=1-i,Math.abs(this.deltaAngle)<1e-4&&(this.deltaAngle=0)}reset(){this.deltaAngle=0}}const Rt=class{constructor(e,t,i){ge(this,"onKeyDown",e=>{KeyCombination.oneUp(e,...Rt.KEYS.UP)?(this.up=!0,e.preventDefault()):KeyCombination.oneUp(e,...Rt.KEYS.DOWN)&&(this.down=!0,e.preventDefault())});ge(this,"onKeyUp",e=>{KeyCombination.oneUp(e,...Rt.KEYS.UP)&&(this.up=!1),KeyCombination.oneUp(e,...Rt.KEYS.DOWN)&&(this.down=!1)});this.target=e,this.manager=null,this.deltaY=0,this.up=!1,this.down=!1,this.speed=t,this.stiffness=i}start(e){this.manager=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}stop(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(e,t){if(this.up&&(this.deltaY+=1),this.down&&(this.deltaY-=1),this.deltaY===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.position.y+=this.deltaY*i*this.speed*e*.06,this.deltaY*=1-i,Math.abs(this.deltaY)<1e-4&&(this.deltaY=0)}};let KeyHeightControls=Rt;ge(KeyHeightControls,"KEYS",{UP:[new KeyCombination("Space"),new KeyCombination("PageUp")],DOWN:[new KeyCombination("ShiftLeft"),new KeyCombination("ShiftRight"),new KeyCombination("PageDown")]});const jt=class{constructor(e,t,i,r){ge(this,"onTouchDown",e=>{e.pointerType!=="mouse"&&(this.moving=!0,this.deltaPosition.set(0,0),this.lastPosition.set(e.center.x,e.center.y))});ge(this,"onTouchMove",e=>{if(e.pointerType==="mouse")return;let t=jt.tempVec2_1.set(e.center.x,e.center.y);this.moving&&this.deltaPosition.sub(t).add(this.lastPosition),this.lastPosition.copy(t)});ge(this,"onTouchUp",e=>{e.pointerType!=="mouse"&&(this.moving=!1)});ge(this,"updatePixelToSpeedMultiplier",()=>{this.pixelToSpeedMultiplierX=1/this.target.clientWidth*(this.target.clientWidth/this.target.clientHeight),this.pixelToSpeedMultiplierY=1/this.target.clientHeight});this.target=e,this.hammer=t,this.manager=null,this.moving=!1,this.lastPosition=new Vector2,this.deltaPosition=new Vector2,this.speed=i,this.stiffness=r,this.pixelToSpeedMultiplierX=0,this.pixelToSpeedMultiplierY=0,this.updatePixelToSpeedMultiplier()}start(e){this.manager=e,this.hammer.on("movestart",this.onTouchDown),this.hammer.on("movemove",this.onTouchMove),this.hammer.on("moveend",this.onTouchUp),this.hammer.on("movecancel",this.onTouchUp),window.addEventListener("resize",this.updatePixelToSpeedMultiplier)}stop(){this.hammer.off("movestart",this.onTouchDown),this.hammer.off("movemove",this.onTouchMove),this.hammer.off("moveend",this.onTouchUp),this.hammer.off("movecancel",this.onTouchUp),window.removeEventListener("resize",this.updatePixelToSpeedMultiplier)}update(e,t){if(this.deltaPosition.x===0&&this.deltaPosition.y===0)return;let i=this.stiffness/(16.666/e);i=MathUtils.clamp(i,0,1),this.manager.rotation+=this.deltaPosition.x*this.speed*this.pixelToSpeedMultiplierX*this.stiffness,this.manager.angle-=this.deltaPosition.y*this.speed*this.pixelToSpeedMultiplierY*this.stiffness,this.deltaPosition.multiplyScalar(1-i),this.deltaPosition.lengthSq()<1e-4&&this.deltaPosition.set(0,0)}reset(){this.deltaPosition.set(0,0)}};let TouchPanControls=jt;ge(TouchPanControls,"tempVec2_1",new Vector2);class FreeFlightControls{constructor(e){ge(this,"onContextMenu",e=>{e.preventDefault()});ge(this,"onMouseDown",e=>{this.clickStart.set(e.x,e.y)});ge(this,"onMouseUp",e=>{Math.abs(this.clickStart.x-e.x)>5||Math.abs(this.clickStart.y-e.y)>5||document.body.requestFullscreen().finally(()=>{this.target.requestPointerLock()})});ge(this,"onWheel",e=>{e.preventDefault();let t=e.deltaY;e.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(t*=.01),e.deltaMode===WheelEvent.DOM_DELTA_LINE&&(t*=.33),this.moveSpeed*=Math.pow(1.5,-t*.25),this.moveSpeed=MathUtils.clamp(this.moveSpeed,.05,5),this.keyMove.speed=this.moveSpeed,this.keyHeight.speed=this.moveSpeed});this.target=e,this.manager=null,this.data=reactive({}),this.hammer=new hammer.exports.Manager(this.target),this.initializeHammer(),this.keyMove=new KeyMoveControls(this.target,.5,.1),this.keyHeight=new KeyHeightControls(this.target,.5,.2),this.mouseRotate=new MouseRotateControls(this.target,1.5,-2,-1.5,.5),this.mouseAngle=new MouseAngleControls(this.target,1.5,-2,-1.5,.5),this.touchPan=new TouchPanControls(this.target,this.hammer,5,.15),this.started=!1,this.clickStart=new Vector2,this.moveSpeed=.5,this.animationTargetHeight=0}start(e){this.manager=e,this.keyMove.start(e),this.keyHeight.start(e),this.mouseRotate.start(e),this.mouseAngle.start(e),this.touchPan.start(e),this.target.addEventListener("contextmenu",this.onContextMenu),this.target.addEventListener("mousedown",this.onMouseDown),this.target.addEventListener("mouseup",this.onMouseUp),this.target.addEventListener("wheel",this.onWheel,{passive:!1})}stop(){this.keyMove.stop(),this.keyHeight.stop(),this.mouseRotate.stop(),this.mouseAngle.stop(),this.touchPan.stop(),this.target.removeEventListener("contextmenu",this.onContextMenu),this.target.removeEventListener("mousedown",this.onMouseDown),this.target.removeEventListener("mouseup",this.onMouseUp),this.target.removeEventListener("wheel",this.onWheel)}update(e,t){this.keyMove.update(e,t),this.keyHeight.update(e,t),this.mouseRotate.update(e,t),this.mouseAngle.update(e,t),this.touchPan.update(e,t),this.manager.angle=MathUtils.clamp(this.manager.angle,0,Math.PI),this.manager.distance=0,this.manager.ortho=0}initializeHammer(){let e=new hammer.exports.Pan({event:"move",pointers:1,direction:hammer.exports.DIRECTION_ALL,threshold:0});this.hammer.add(e)}}Object3D.prototype.onClick=function(n){return this.parent?(Array.isArray(n.eventStack)||(n.eventStack=[]),n.eventStack.push(this),this.parent.onClick(n)):!1};class PopupMarker extends Marker{constructor(t,i,r){super(t);ge(this,"onMapInteraction",t=>{var s,a,o,l,c,u;let i=!0,r=t.detail.hiresHit;if(t.detail.lowresHits)for(let d=0;d<t.detail.lowresHits.length&&!r;d++)i=!1,r=t.detail.lowresHits[d];if(r){if(this.position.copy(r.pointOnLine||r.point).add(t.detail.ray.direction.clone().multiplyScalar(.05)).floor(),i?this.element.innerHTML=`
                <div class="group">
                    <div class="label">${i18n.t("blockTooltip.block")}:</div>
                    <div class="content">
                        <div class="entry"><span class="label">x: </span><span class="value">${this.position.x}</span></div>
                        <div class="entry"><span class="label">y: </span><span class="value">${this.position.y}</span></div>
                        <div class="entry"><span class="label">z: </span><span class="value">${this.position.z}</span></div>
                    </div>
                </div>
            `:this.element.innerHTML=`
                <div class="group">
                    <div class="label">${i18n.t("blockTooltip.position")}:</div>
                    <div class="content">
                        <div class="entry"><span class="label">x: </span><span class="value">${this.position.x}</span></div>
                        <div class="entry"><span class="label">z: </span><span class="value">${this.position.z}</span></div>
                    </div>
                </div>
            `,this.appState.debug){let d=this.position.clone().divideScalar(16).floor(),f=new Vector2(this.position.x,this.position.z).divideScalar(512).floor(),g=`r.${f.x}.${f.y}.mca`;this.element.innerHTML+=`
                <hr>
                <div class="group">
                    <div class="label">${i18n.t("blockTooltip.chunk")}:</div>
                    <div class="content">
                        <div class="entry"><span class="label">x: </span><span class="value">${d.x}</span></div>
                        <div class="entry"><span class="label">y: </span><span class="value">${d.y}</span></div>
                        <div class="entry"><span class="label">z: </span><span class="value">${d.z}</span></div>
                    </div>
                </div>
                <hr>
                <div class="group">
                    <div class="label">${i18n.t("blockTooltip.region.region")}:</div>
                    <div class="content">
                        <div class="entry"><span class="label">x: </span><span class="value">${f.x}</span></div>
                        <div class="entry"><span class="label">z: </span><span class="value">${f.y}</span></div>
                    </div>
                    <div class="content">
                        <div class="entry"><span class="label">${i18n.t("blockTooltip.region.file")}: </span><span class="value">${g}</span></div>
                    </div>
                </div>
            `}if(this.appState.debug){let d=r.faceIndex,f=r.object.geometry.attributes;if(f.sunlight&&f.blocklight){let g=f.sunlight.array[d*3],x=f.blocklight.array[d*3];this.element.innerHTML+=`
                    <hr>
                    <div class="group">
                        <div class="label">${i18n.t("blockTooltip.light.light")}:</div>
                        <div class="content">
                            <div class="entry"><span class="label">${i18n.t("blockTooltip.light.sun")}: </span><span class="value">${g}</span></div>
                            <div class="entry"><span class="label">${i18n.t("blockTooltip.light.block")}: </span><span class="value">${x}</span></div>
                        </div>
                    </div>
                `}}if(this.appState.debug){let d="";if(i){let f=(o=(a=(s=t.detail.hiresHit)==null?void 0:s.object)==null?void 0:a.userData)==null?void 0:o.tileUrl;d+=`<div>${f}</div>`}if(t.detail.lowresHits)for(let f=0;f<t.detail.lowresHits.length;f++){let g=(u=(c=(l=t.detail.lowresHits[f])==null?void 0:l.object)==null?void 0:c.userData)==null?void 0:u.tileUrl;g&&(d+=`<div>${g}</div>`)}this.element.innerHTML+=`
                <hr>
                <div class="files">
                    ${d}
                </div>
            `}this.appState.debug&&console.debug("Clicked Position Data:",t.detail),this.open()}});ge(this,"removeHandler",t=>{t.composedPath().includes(this.element)||this.close()});this.data.type="popup",this.data.label="Last Map Interaction",this.data.listed=!1,this.appState=i,this.events=r,this.visible=!1,this.elementObject=new CSS2DObject(htmlToElement(`<div id="bm-marker-${this.data.id}" class="bm-marker-${this.data.type}">Test</div>`)),this.elementObject.position.set(.5,1,.5),this.addEventListener("removed",()=>{this.element.parentNode&&this.element.parentNode.removeChild(this.element)});let s=new BoxGeometry(1.01,1.01,1.01).translate(.5,.5,.5),a=new MeshBasicMaterial({color:16777215,opacity:.5,transparent:!0});this.cube=new Mesh(s,a),this.cube.onClick=o=>this.onClick(o),this.add(this.elementObject),this.add(this.cube),this.animation=null,this.events.addEventListener("bluemapMapInteraction",this.onMapInteraction),window.addEventListener("mousedown",this.removeHandler),window.addEventListener("touchstart",this.removeHandler,{passive:!0}),window.addEventListener("keydown",this.removeHandler),window.addEventListener("mousewheel",this.removeHandler)}onClick(t){return!0}open(){this.animation&&this.animation.cancel(),this.visible=!0,this.cube.visible=!0;let t=1;this.element.style.opacity="0",this.animation=animate(i=>{this.element.style.opacity=(i*t).toString()},300)}close(){this.animation&&this.animation.cancel(),this.cube.visible=!1;let t=parseFloat(this.element.style.opacity);this.animation=animate(i=>{this.element.style.opacity=(t-i*t).toString()},300,i=>{i&&(this.visible=!1)})}get element(){return this.elementObject.element.getElementsByTagName("div")[0]}dispose(){super.dispose(),this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}const PLAYER_MARKER_SET_ID="bm-players";class PlayerMarkerManager extends MarkerManager{constructor(e,t,i,r=null){super(e,t,r),this.playerheadsUrl=i}updateFromData(e){let t=this.getPlayerMarkerSet(Array.isArray(e.players));return t?t.updateFromPlayerData(e):!1}getPlayerMarkerSet(e=!0){let t=this.root.markerSets.get(PLAYER_MARKER_SET_ID);return!t&&e&&(t=new PlayerMarkerSet(PLAYER_MARKER_SET_ID,this.playerheadsUrl),this.root.add(t)),t}getPlayerMarker(e){return this.getPlayerMarkerSet().getPlayerMarker(e)}}class NormalMarkerManager extends MarkerManager{constructor(e,t,i=null){super(e,t,i)}updateFromData(e){return this.root.updateMarkerSetsFromData(e,[PLAYER_MARKER_SET_ID,"bm-popup-set"]),!0}}class BlueMapApp{constructor(e){ge(this,"update",async()=>{await this.followPlayerMarkerWorld(),this.updateLoop=setTimeout(this.update,1e3)});ge(this,"cameraMoved",()=>{this.hashUpdateTimeout&&clearTimeout(this.hashUpdateTimeout),this.hashUpdateTimeout=setTimeout(this.updatePageAddress,1500),this.lastCameraMove=Date.now()});ge(this,"loadBlocker",async()=>{if(!this.appState.controls.pauseTileLoading)return;let e;do e=250-(Date.now()-this.lastCameraMove),e>0&&await this.sleep(e);while(e>0)});ge(this,"updatePageAddress",()=>{let e="#";if(this.mapViewer.map){e+=this.mapViewer.map.data.id;let t=this.mapViewer.controlsManager;e+=":"+round(t.position.x,0),e+=":"+round(t.position.y,0),e+=":"+round(t.position.z,0),e+=":"+round(t.distance,0),e+=":"+round(t.rotation,2),e+=":"+round(t.angle,2),e+=":"+round(t.tilt,2),e+=":"+round(t.ortho,0),e+=":"+this.appState.controls.state}history.replaceState(void 0,void 0,e),document.title=i18n.t("pageTitle",{map:this.mapViewer.map?this.mapViewer.map.data.name:"?",version:this.settings.version})});ge(this,"loadPageAddress",async()=>{var r;let t=(((r=window.location.hash)==null?void 0:r.substring(1))||this.settings.startLocation||"").split(":");if(t.length!==10)return!1;let i=this.mapViewer.controlsManager;if(i.controls=null,!this.mapViewer.map||this.mapViewer.map.data.id!==t[0])try{await this.switchMap(t[0])}catch{return!1}switch(i.position.x=parseFloat(t[1]),i.position.y=parseFloat(t[2]),i.position.z=parseFloat(t[3]),i.distance=parseFloat(t[4]),i.rotation=parseFloat(t[5]),i.angle=parseFloat(t[6]),i.tilt=parseFloat(t[7]),i.ortho=parseFloat(t[8]),t[9]){case"flat":this.setFlatView(0);break;case"free":this.setFreeFlight(0,i.position.y);break;default:this.setPerspectiveView(0);break}return!0});ge(this,"mapInteraction",e=>{var t,i;if(e.detail.data.doubleTap){let r=this.mapViewer.controlsManager,s=((t=e.detail.hit)==null?void 0:t.point)||((i=e.detail.object)==null?void 0:i.getWorldPosition(new Vector3));if(!s)return;let a=r.distance,o=Math.max(a*.25,5),l=r.position.x,c=s.x,u=r.position.z,d=s.z;this.viewAnimation=animate(f=>{let g=EasingFunctions.easeInOutQuad(f);r.distance=MathUtils.lerp(a,o,g),r.position.x=MathUtils.lerp(l,c,g),r.position.z=MathUtils.lerp(u,d,g)},500)}});ge(this,"takeScreenshot",()=>{let e=document.createElement("a");e.download="bluemap-screenshot.png",e.href=this.mapViewer.renderer.domElement.toDataURL("image/png"),e.click(),this.appState.screenshot.clipboard&&this.mapViewer.renderer.domElement.toBlob(t=>{navigator.clipboard.write([new ClipboardItem({["image/png"]:t})]).catch(i=>{alert(this.events,"Failed to copy screenshot to clipboard: "+i,"error")})})});this.events=e,this.mapViewer=new MapViewer(e,this.events),this.mapControls=new MapControls(this.mapViewer.renderer.domElement),this.freeFlightControls=new FreeFlightControls(this.mapViewer.renderer.domElement),this.playerMarkerManager=null,this.markerFileManager=null,this.settings=null,this.savedUserSettings=new Map,this.maps=[],this.mapsMap=new Map,this.lastCameraMove=0,this.dataUrl="maps/",this.mainMenu=reactive(new MainMenu$1),this.appState=reactive({controls:{state:"perspective",mouseSensitivity:1,showZoomButtons:!0,invertMouse:!1,enableFreeFlight:!1,pauseTileLoading:!1},menu:this.mainMenu,maps:[],theme:null,screenshot:{clipboard:!0},debug:!1}),this.updateControlsSettings(),this.initGeneralEvents(),this.popupMarkerSet=new MarkerSet("bm-popup-set"),this.popupMarkerSet.data.toggleable=!1,this.popupMarker=new PopupMarker("bm-popup",this.appState,this.events),this.popupMarkerSet.add(this.popupMarker),this.mapViewer.markers.add(this.popupMarkerSet),this.updateLoop=null,this.hashUpdateTimeout=null,this.viewAnimation=null}async load(){let e=this.maps;if(this.maps=[],this.appState.maps.splice(0,this.appState.maps.length),this.mapsMap.clear(),await this.getSettings(),this.mapControls.minDistance=this.settings.minZoomDistance,this.mapControls.maxDistance=this.settings.maxZoomDistance,this.appState.controls.enableFreeFlight=this.settings.enableFreeFlight,this.settings.styles)for(let t of this.settings.styles){let i=document.createElement("link");i.rel="stylesheet",i.href=t,document.head.appendChild(i)}await this.mapViewer.switchMap(null),e.forEach(t=>t.dispose()),this.maps=await this.loadMaps();for(let t of this.maps)this.mapsMap.set(t.data.id,t),this.appState.maps.push(t.data);try{await this.loadPageAddress()||(this.maps.length>0&&await this.switchMap(this.maps[0].data.id),this.resetCamera())}catch(t){console.error("Failed to load map!",t)}if(window.addEventListener("hashchange",this.loadPageAddress),this.events.addEventListener("bluemapCameraMoved",this.cameraMoved),this.events.addEventListener("bluemapMapInteraction",this.mapInteraction),this.updateLoop&&clearTimeout(this.updateLoop),this.updateLoop=setTimeout(this.update,1e3),await this.loadUserSettings(),this.saveUserSettings(),this.settings.scripts)for(let t of this.settings.scripts){let i=document.createElement("script");i.src=t,document.body.appendChild(i)}}async followPlayerMarkerWorld(){var t;let e=(t=this.mapViewer.controlsManager.controls)==null?void 0:t.data.followingPlayer;if(this.mapViewer.map&&e&&e.foreign){let i=await this.findPlayerMap(e.playerUuid);if(i){this.mainMenu.closeAll(),await this.switchMap(i.data.id,!1);let r=this.playerMarkerManager.getPlayerMarker(e.playerUuid);r&&this.mapViewer.controlsManager.controls.followPlayerMarker&&this.mapViewer.controlsManager.controls.followPlayerMarker(r)}else this.mapViewer.controlsManager.controls.stopFollowingPlayerMarker&&this.mapViewer.controlsManager.controls.stopFollowingPlayerMarker()}}async findPlayerMap(e){let t=null;if(this.maps.length<20)for(let i of this.maps){let r=await this.loadPlayerData(i);if(Array.isArray(r.players)){for(let s of r.players)if(s.uuid===e&&!s.foreign){t=i;break}if(t)break}}return t}async switchMap(e,t=!0){let i=this.mapsMap.get(e);if(!i)return Promise.reject(`There is no map with the id "${e}" loaded!`);await this.mapViewer.switchMap(i),t&&this.resetCamera(),this.updatePageAddress(),await Promise.all([this.initPlayerMarkerManager(),this.initMarkerFileManager()])}resetCamera(){let e=this.mapViewer.map,t=this.mapViewer.controlsManager;e&&(t.position.set(e.data.startPos.x,0,e.data.startPos.z),t.distance=1500,t.angle=0,t.rotation=0,t.tilt=0,t.ortho=0),t.controls=this.mapControls,this.appState.controls.state="perspective",this.updatePageAddress()}async loadMaps(){let e=this.settings,t=[];if(e.maps!==void 0)for(let i of e.maps){let r=new Map$1(i,this.dataUrl+i+"/",this.loadBlocker,this.mapViewer.events);t.push(r),await r.loadSettings().catch(s=>{alert(this.events,`Failed to load settings for map '${r.data.id}':`+s,"warning")})}return t.sort((i,r)=>{let s=i.data.sorting-r.data.sorting;return isNaN(s)?0:s}),t}async getSettings(){return this.settings||(this.settings=await this.loadSettings()),this.settings}loadSettings(){return new Promise((e,t)=>{let i=new FileLoader;i.setResponseType("json"),i.load("settings.json?"+generateCacheHash(),e,()=>{},()=>t("Failed to load the settings.json!"))})}loadPlayerData(e){return new Promise((t,i)=>{let r=new FileLoader;r.setResponseType("json"),r.load(e.data.dataUrl+"live/players?"+generateCacheHash(),s=>{s?t(s):i(`Failed to parse '${this.fileUrl}'!`)},()=>{},()=>i(`Failed to load '${this.fileUrl}'!`))})}initPlayerMarkerManager(){this.playerMarkerManager&&(this.playerMarkerManager.clear(),this.playerMarkerManager.dispose());const e=this.mapViewer.map;if(e)return this.playerMarkerManager=new PlayerMarkerManager(this.mapViewer.markers,e.data.dataUrl+"live/players.json",e.data.dataUrl+"assets/playerheads/",this.events),this.playerMarkerManager.setAutoUpdateInterval(0),this.playerMarkerManager.update().then(()=>{this.playerMarkerManager.setAutoUpdateInterval(1e3)}).catch(t=>{alert(this.events,t,"warning"),this.playerMarkerManager.clear(),this.playerMarkerManager.dispose()})}initMarkerFileManager(){this.markerFileManager&&(this.markerFileManager.clear(),this.markerFileManager.dispose());const e=this.mapViewer.map;if(e)return this.markerFileManager=new NormalMarkerManager(this.mapViewer.markers,e.data.dataUrl+"live/markers.json",this.events),this.markerFileManager.update().then(()=>{this.markerFileManager.setAutoUpdateInterval(1e3*10)}).catch(t=>{alert(this.events,t,"warning"),this.markerFileManager.clear(),this.markerFileManager.dispose()})}updateControlsSettings(){let e=this.appState.controls.invertMouse?-1:1;this.freeFlightControls.mouseRotate.speedCapture=-1.5*this.appState.controls.mouseSensitivity,this.freeFlightControls.mouseAngle.speedCapture=-1.5*this.appState.controls.mouseSensitivity*e,this.freeFlightControls.mouseRotate.speedRight=-2*this.appState.controls.mouseSensitivity,this.freeFlightControls.mouseAngle.speedRight=-2*this.appState.controls.mouseSensitivity*e}initGeneralEvents(){document.addEventListener("fullscreenchange",e=>{document.fullscreenElement&&this.mainMenu.closeAll()})}setPerspectiveView(e=0,t=5){if(!this.mapViewer.map)return;this.viewAnimation&&this.viewAnimation.cancel();let i=this.mapViewer.controlsManager;i.controls=null;let r=i.distance,s=Math.max(5,t,r),a=i.position.y,o=MathUtils.lerp(this.mapViewer.map.terrainHeightAt(i.position.x,i.position.z)+3,0,s/500),l=i.angle,c=Math.min(Math.PI/2,l,this.mapControls.getMaxPerspectiveAngleForDistance(s)),u=i.ortho,d=i.tilt;this.viewAnimation=animate(f=>{let g=EasingFunctions.easeInOutQuad(f);i.position.y=MathUtils.lerp(a,o,g),i.distance=MathUtils.lerp(r,s,g),i.angle=MathUtils.lerp(l,c,g),i.ortho=MathUtils.lerp(u,0,f),i.tilt=MathUtils.lerp(d,0,g)},e,f=>{this.mapControls.reset(),f&&(i.controls=this.mapControls,this.updatePageAddress())}),this.appState.controls.state="perspective"}setFlatView(e=0,t=5){if(!this.mapViewer.map)return;this.viewAnimation&&this.viewAnimation.cancel();let i=this.mapViewer.controlsManager;i.controls=null;let r=i.distance,s=Math.max(5,t,r),a=i.rotation,o=i.angle,l=i.ortho,c=i.tilt;this.viewAnimation=animate(u=>{let d=EasingFunctions.easeInOutQuad(u);i.distance=MathUtils.lerp(r,s,d),i.rotation=MathUtils.lerp(a,0,d),i.angle=MathUtils.lerp(o,0,d),i.ortho=MathUtils.lerp(l,1,u),i.tilt=MathUtils.lerp(c,0,d)},e,u=>{this.mapControls.reset(),u&&(i.controls=this.mapControls,this.updatePageAddress())}),this.appState.controls.state="flat"}setFreeFlight(e=0,t=void 0){if(!this.mapViewer.map)return;if(!this.settings.enableFreeFlight)return this.setPerspectiveView(e);this.viewAnimation&&this.viewAnimation.cancel();let i=this.mapViewer.controlsManager;i.controls=null;let r=i.distance,s=i.position.y;t||(t=this.mapViewer.map.terrainHeightAt(i.position.x,i.position.z)+3||s);let a=i.angle,o=Math.PI/2,l=i.ortho,c=i.tilt;this.viewAnimation=animate(u=>{let d=EasingFunctions.easeInOutQuad(u);i.position.y=MathUtils.lerp(s,t,d),i.distance=MathUtils.lerp(r,0,d),i.angle=MathUtils.lerp(a,o,d),i.ortho=MathUtils.lerp(l,0,Math.min(u*2,1)),i.tilt=MathUtils.lerp(c,0,d)},e,u=>{u&&(i.controls=this.freeFlightControls,this.updatePageAddress())}),this.appState.controls.state="free"}setDebug(e){this.appState.debug=e,e?this.mapViewer.stats.showPanel(0):this.mapViewer.stats.showPanel(-1)}setTheme(e){this.appState.theme=e,e==="light"?(this.mapViewer.rootElement.classList.remove("theme-dark"),this.mapViewer.rootElement.classList.remove("theme-contrast"),this.mapViewer.rootElement.classList.add("theme-light")):e==="dark"?(this.mapViewer.rootElement.classList.remove("theme-light"),this.mapViewer.rootElement.classList.remove("theme-contrast"),this.mapViewer.rootElement.classList.add("theme-dark")):e==="contrast"?(this.mapViewer.rootElement.classList.remove("theme-light"),this.mapViewer.rootElement.classList.remove("theme-dark"),this.mapViewer.rootElement.classList.add("theme-contrast")):(this.mapViewer.rootElement.classList.remove("theme-light"),this.mapViewer.rootElement.classList.remove("theme-dark"),this.mapViewer.rootElement.classList.remove("theme-contrast"))}setScreenshotClipboard(e){this.appState.screenshot.clipboard=e}async updateMap(){try{this.mapViewer.clearTileCache(),this.mapViewer.map&&await this.switchMap(this.mapViewer.map.data.id),this.saveUserSettings()}catch(e){alert(this.events,e,"error")}}resetSettings(){this.saveUserSetting("resetSettings",!0),location.reload()}async loadUserSettings(){if(isNaN(this.settings.resolutionDefault)||(this.mapViewer.data.superSampling=this.settings.resolutionDefault),isNaN(this.settings.hiresSliderDefault)||(this.mapViewer.data.loadedHiresViewDistance=this.settings.hiresSliderDefault),isNaN(this.settings.lowresSliderDefault)||(this.mapViewer.data.loadedLowresViewDistance=this.settings.lowresSliderDefault),!!this.settings.useCookies){if(this.loadUserSetting("resetSettings",!1)){alert(this.events,"Settings reset!","info"),this.saveUserSettings();return}this.mapViewer.clearTileCache(this.loadUserSetting("tileCacheHash",this.mapViewer.tileCacheHash)),this.mapViewer.superSampling=this.loadUserSetting("superSampling",this.mapViewer.data.superSampling),this.mapViewer.data.loadedHiresViewDistance=this.loadUserSetting("hiresViewDistance",this.mapViewer.data.loadedHiresViewDistance),this.mapViewer.data.loadedLowresViewDistance=this.loadUserSetting("lowresViewDistance",this.mapViewer.data.loadedLowresViewDistance),this.mapViewer.updateLoadedMapArea(),this.appState.controls.mouseSensitivity=this.loadUserSetting("mouseSensitivity",this.appState.controls.mouseSensitivity),this.appState.controls.invertMouse=this.loadUserSetting("invertMouse",this.appState.controls.invertMouse),this.appState.controls.pauseTileLoading=this.loadUserSetting("pauseTileLoading",this.appState.controls.pauseTileLoading),this.appState.controls.showZoomButtons=this.loadUserSetting("showZoomButtons",this.appState.controls.showZoomButtons),this.updateControlsSettings(),this.setTheme(this.loadUserSetting("theme",this.appState.theme)),this.setScreenshotClipboard(this.loadUserSetting("screenshotClipboard",this.appState.screenshot.clipboard)),await setLanguage(this.loadUserSetting("lang",i18n.locale.value)),this.setDebug(this.loadUserSetting("debug",this.appState.debug)),alert(this.events,"Settings loaded!","info")}}saveUserSettings(){this.settings.useCookies&&(this.saveUserSetting("resetSettings",!1),this.saveUserSetting("tileCacheHash",this.mapViewer.tileCacheHash),this.saveUserSetting("superSampling",this.mapViewer.data.superSampling),this.saveUserSetting("hiresViewDistance",this.mapViewer.data.loadedHiresViewDistance),this.saveUserSetting("lowresViewDistance",this.mapViewer.data.loadedLowresViewDistance),this.saveUserSetting("mouseSensitivity",this.appState.controls.mouseSensitivity),this.saveUserSetting("invertMouse",this.appState.controls.invertMouse),this.saveUserSetting("pauseTileLoading",this.appState.controls.pauseTileLoading),this.saveUserSetting("showZoomButtons",this.appState.controls.showZoomButtons),this.saveUserSetting("theme",this.appState.theme),this.saveUserSetting("screenshotClipboard",this.appState.screenshot.clipboard),this.saveUserSetting("lang",i18n.locale.value),this.saveUserSetting("debug",this.appState.debug),alert(this.events,"Settings saved!","info"))}loadUserSetting(e,t){let i=getLocalStorage("bluemap-"+e);return i===void 0?t:i}saveUserSetting(e,t){this.savedUserSettings.get(e)!==t&&(this.savedUserSettings.set(e,t),setLocalStorage("bluemap-"+e,t))}sleep(e){return new Promise(t=>setTimeout(t,e))}}String.prototype.includesCI=function(n){return this.toLowerCase().includes(n.toLowerCase())};async function load(){try{const n=new BlueMapApp(document.getElementById("map-container"));window.bluemap=n;const e=createApp(App,{i18nModule,render:i=>i(App)});e.config.globalProperties.$bluemap=n,e.use(i18nModule),await loadLanguageSettings(),await e.mount("#app").$nextTick(),await n.load()}catch(n){console.error("Failed to load BlueMap webapp!",n),document.body.innerHTML=`
    <div id="bm-app-err">
      <div>
        <img src="assets/logo.png" alt="bluemap logo">
        <div class="bm-app-err-main">Failed to load BlueMap webapp!</div>
        <div class="bm-app-err-hint">Make sure you have <a href="https://get.webgl.org/">WebGL</a> enabled on your browser.</div>
      </div>
    </div>
  `}}load().catch(n=>console.error(n));

(function(e){e.ng??={},e.ng.common??={},e.ng.common.locales??={};let n=void 0;function a(t){let c=t,l=Math.floor(Math.abs(t)),_=t.toString().replace(/^[^.]*\.?/,"").length;return _===0&&l%10===1&&l%100!==11?1:_===0&&l%10===Math.floor(l%10)&&l%10>=2&&l%10<=4&&!(l%100>=12&&l%100<=14)?3:_===0&&l%10===0||_===0&&l%10===Math.floor(l%10)&&l%10>=5&&l%10<=9||_===0&&l%100===Math.floor(l%100)&&l%100>=11&&l%100<=14?4:5}e.ng.common.locales.ru=["ru",[["AM","PM"],n,n],n,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],n,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y '\u0433'.","d MMMM y '\u0433'.","EEEE, d MMMM y '\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",n,n,n],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[n,"\u0440."],GEL:[n,"\u10DA"],PHP:[n,"\u20B1"],RON:[n,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",a,[[["\u043F\u043E\u043B\u043D.","\u043F\u043E\u043B\u0434.","\u0443\u0442\u0440\u0430","\u0434\u043D\u044F","\u0432\u0435\u0447.","\u043D\u043E\u0447\u0438"],["\u043F\u043E\u043B\u043D.","\u043F\u043E\u043B\u0434.","\u0443\u0442\u0440\u0430","\u0434\u043D\u044F","\u0432\u0435\u0447\u0435\u0440\u0430","\u043D\u043E\u0447\u0438"],["\u043F\u043E\u043B\u043D\u043E\u0447\u044C","\u043F\u043E\u043B\u0434\u0435\u043D\u044C","\u0443\u0442\u0440\u0430","\u0434\u043D\u044F","\u0432\u0435\u0447\u0435\u0440\u0430","\u043D\u043E\u0447\u0438"]],[["\u043F\u043E\u043B\u043D.","\u043F\u043E\u043B\u0434.","\u0443\u0442\u0440\u043E","\u0434\u0435\u043D\u044C","\u0432\u0435\u0447.","\u043D\u043E\u0447\u044C"],n,["\u043F\u043E\u043B\u043D\u043E\u0447\u044C","\u043F\u043E\u043B\u0434\u0435\u043D\u044C","\u0443\u0442\u0440\u043E","\u0434\u0435\u043D\u044C","\u0432\u0435\u0447\u0435\u0440","\u043D\u043E\u0447\u044C"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","22:00"],["22:00","04:00"]]]]})(globalThis);var se=globalThis;function ee(e){return(se.__Zone_symbol_prefix||"__zone_symbol__")+e}function ut(){let e=se.performance;function n(A){e&&e.mark&&e.mark(A)}function a(A,r){e&&e.measure&&e.measure(A,r)}n("Zone");let Y=class Y{static assertZonePatched(){if(se.Promise!==N.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let r=Y.current;for(;r.parent;)r=r.parent;return r}static get current(){return p.zone}static get currentTask(){return O}static __load_patch(r,i,s=!1){if(N.hasOwnProperty(r)){let v=se[ee("forceDuplicateZoneCheck")]===!0;if(!s&&v)throw Error("Already loaded patch: "+r)}else if(!se["__Zone_disable_"+r]){let v="Zone:"+r;n(v),N[r]=i(se,Y,R),a(v,v)}}get parent(){return this._parent}get name(){return this._name}constructor(r,i){this._parent=r,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,i)}get(r){let i=this.getZoneWith(r);if(i)return i._properties[r]}getZoneWith(r){let i=this;for(;i;){if(i._properties.hasOwnProperty(r))return i;i=i._parent}return null}fork(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)}wrap(r,i){if(typeof r!="function")throw new Error("Expecting function got: "+r);let s=this._zoneDelegate.intercept(this,r,i),v=this;return function(){return v.runGuarded(s,this,arguments,i)}}run(r,i,s,v){p={parent:p,zone:this};try{return this._zoneDelegate.invoke(this,r,i,s,v)}finally{p=p.parent}}runGuarded(r,i=null,s,v){p={parent:p,zone:this};try{try{return this._zoneDelegate.invoke(this,r,i,s,v)}catch(x){if(this._zoneDelegate.handleError(this,x))throw x}}finally{p=p.parent}}runTask(r,i,s){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||ne).name+"; Execution: "+this.name+")");if(r.state===W&&(r.type===B||r.type===g))return;let v=r.state!=G;v&&r._transitionTo(G,d),r.runCount++;let x=O;O=r,p={parent:p,zone:this};try{r.type==g&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,i,s)}catch(I){if(this._zoneDelegate.handleError(this,I))throw I}}finally{r.state!==W&&r.state!==q&&(r.type==B||r.data&&r.data.isPeriodic?v&&r._transitionTo(d,G):(r.runCount=0,this._updateTaskCount(r,-1),v&&r._transitionTo(W,G,W))),p=p.parent,O=x}}scheduleTask(r){if(r.zone&&r.zone!==this){let s=this;for(;s;){if(s===r.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${r.zone.name}`);s=s.parent}}r._transitionTo(k,W);let i=[];r._zoneDelegates=i,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(s){throw r._transitionTo(q,k,W),this._zoneDelegate.handleError(this,s),s}return r._zoneDelegates===i&&this._updateTaskCount(r,1),r.state==k&&r._transitionTo(d,k),r}scheduleMicroTask(r,i,s,v){return this.scheduleTask(new _(V,r,i,s,v,void 0))}scheduleMacroTask(r,i,s,v,x){return this.scheduleTask(new _(g,r,i,s,v,x))}scheduleEventTask(r,i,s,v,x){return this.scheduleTask(new _(B,r,i,s,v,x))}cancelTask(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||ne).name+"; Execution: "+this.name+")");if(!(r.state!==d&&r.state!==G)){r._transitionTo(z,d,G);try{this._zoneDelegate.cancelTask(this,r)}catch(i){throw r._transitionTo(q,z),this._zoneDelegate.handleError(this,i),i}return this._updateTaskCount(r,-1),r._transitionTo(W,z),r.runCount=0,r}}_updateTaskCount(r,i){let s=r._zoneDelegates;i==-1&&(r._zoneDelegates=null);for(let v=0;v<s.length;v++)s[v]._updateTaskCount(r.type,i)}};Y.__symbol__=ee;let t=Y,c={name:"",onHasTask:(A,r,i,s)=>A.hasTask(i,s),onScheduleTask:(A,r,i,s)=>A.scheduleTask(i,s),onInvokeTask:(A,r,i,s,v,x)=>A.invokeTask(i,s,v,x),onCancelTask:(A,r,i,s)=>A.cancelTask(i,s)};class l{get zone(){return this._zone}constructor(r,i,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=r,this._parentDelegate=i,this._forkZS=s&&(s&&s.onFork?s:i._forkZS),this._forkDlgt=s&&(s.onFork?i:i._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:i._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:i._interceptZS),this._interceptDlgt=s&&(s.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:i._invokeZS),this._invokeDlgt=s&&(s.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:i._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:i._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:i._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:i._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let v=s&&s.onHasTask,x=i&&i._hasTaskZS;(v||x)&&(this._hasTaskZS=v?s:c,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=c,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=c,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=c,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone))}fork(r,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,i):new t(r,i)}intercept(r,i,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,i,s):i}invoke(r,i,s,v,x){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,i,s,v,x):i.apply(s,v)}handleError(r,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,i):!0}scheduleTask(r,i){let s=i;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,i),s||(s=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==V)F(i);else throw new Error("Task is missing scheduleFn.");return s}invokeTask(r,i,s,v){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,i,s,v):i.callback.apply(s,v)}cancelTask(r,i){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");s=i.cancelFn(i)}return s}hasTask(r,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,i)}catch(s){this.handleError(r,s)}}_updateTaskCount(r,i){let s=this._taskCounts,v=s[r],x=s[r]=v+i;if(x<0)throw new Error("More tasks executed then were scheduled.");if(v==0||x==0){let I={microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:r};this.hasTask(this._zone,I)}}}class _{constructor(r,i,s,v,x,I){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=i,this.data=v,this.scheduleFn=x,this.cancelFn=I,!s)throw new Error("callback is not defined");this.callback=s;let he=this;r===B&&v&&v.useG?this.invoke=_.invokeTask:this.invoke=function(){return _.invokeTask.call(se,he,this,arguments)}}static invokeTask(r,i,s){r||(r=this),K++;try{return r.runCount++,r.zone.runTask(r,i,s)}finally{K==1&&H(),K--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(W,k)}_transitionTo(r,i,s){if(this._state===i||this._state===s)this._state=r,r==W&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${r}', expecting state '${i}'${s?" or '"+s+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let E=ee("setTimeout"),y=ee("Promise"),C=ee("then"),T=[],M=!1,w;function Z(A){if(w||se[y]&&(w=se[y].resolve(0)),w){let r=w[C];r||(r=w.then),r.call(w,A)}else se[E](A,0)}function F(A){K===0&&T.length===0&&Z(H),A&&T.push(A)}function H(){if(!M){for(M=!0;T.length;){let A=T;T=[];for(let r=0;r<A.length;r++){let i=A[r];try{i.zone.runTask(i,null,null)}catch(s){R.onUnhandledError(s)}}}R.microtaskDrainDone(),M=!1}}let ne={name:"NO ZONE"},W="notScheduled",k="scheduling",d="scheduled",G="running",z="canceling",q="unknown",V="microTask",g="macroTask",B="eventTask",N={},R={symbol:ee,currentZoneFrame:()=>p,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:F,showUncaughtError:()=>!t[ee("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:Z},p={parent:null,zone:new t(null,null)},O=null,K=0;function X(){}return a("Zone","Zone"),t}function ft(){let e=globalThis,n=e[ee("forceDuplicateZoneCheck")]===!0;if(e.Zone&&(n||typeof e.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return e.Zone??=ut(),e.Zone}var ke=Object.getOwnPropertyDescriptor,Ze=Object.defineProperty,He=Object.getPrototypeOf,ht=Object.create,dt=Array.prototype.slice,Ae="addEventListener",je="removeEventListener",Ne=ee(Ae),Me=ee(je),ie="true",ce="false",ve=ee("");function xe(e,n){return Zone.current.wrap(e,n)}function Ge(e,n,a,t,c){return Zone.current.scheduleMacroTask(e,n,a,t,c)}var j=ee,Ce=typeof window<"u",Te=Ce?window:void 0,$=Ce&&Te||globalThis,_t="removeAttribute";function Ve(e,n){for(let a=e.length-1;a>=0;a--)typeof e[a]=="function"&&(e[a]=xe(e[a],n+"_"+a));return e}function Et(e,n){let a=e.constructor.name;for(let t=0;t<n.length;t++){let c=n[t],l=e[c];if(l){let _=ke(e,c);if(!Ke(_))continue;e[c]=(E=>{let y=function(){return E.apply(this,Ve(arguments,a+"."+c))};return le(y,E),y})(l)}}}function Ke(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var Qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Se=!("nw"in $)&&typeof $.process<"u"&&{}.toString.call($.process)==="[object process]",Be=!Se&&!Qe&&!!(Ce&&Te.HTMLElement),et=typeof $.process<"u"&&{}.toString.call($.process)==="[object process]"&&!Qe&&!!(Ce&&Te.HTMLElement),Re={},qe=function(e){if(e=e||$.event,!e)return;let n=Re[e.type];n||(n=Re[e.type]=j("ON_PROPERTY"+e.type));let a=this||e.target||$,t=a[n],c;if(Be&&a===Te&&e.type==="error"){let l=e;c=t&&t.call(this,l.message,l.filename,l.lineno,l.colno,l.error),c===!0&&e.preventDefault()}else c=t&&t.apply(this,arguments),c!=null&&!c&&e.preventDefault();return c};function Ye(e,n,a){let t=ke(e,n);if(!t&&a&&ke(a,n)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;let c=j("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete t.writable,delete t.value;let l=t.get,_=t.set,E=n.slice(2),y=Re[E];y||(y=Re[E]=j("ON_PROPERTY"+E)),t.set=function(C){let T=this;if(!T&&e===$&&(T=$),!T)return;typeof T[y]=="function"&&T.removeEventListener(E,qe),_&&_.call(T,null),T[y]=C,typeof C=="function"&&T.addEventListener(E,qe,!1)},t.get=function(){let C=this;if(!C&&e===$&&(C=$),!C)return null;let T=C[y];if(T)return T;if(l){let M=l.call(this);if(M)return t.set.call(this,M),typeof C[_t]=="function"&&C.removeAttribute(n),M}return null},Ze(e,n,t),e[c]=!0}function tt(e,n,a){if(n)for(let t=0;t<n.length;t++)Ye(e,"on"+n[t],a);else{let t=[];for(let c in e)c.slice(0,2)=="on"&&t.push(c);for(let c=0;c<t.length;c++)Ye(e,t[c],a)}}var re=j("originalInstance");function pe(e){let n=$[e];if(!n)return;$[j(e)]=n,$[e]=function(){let c=Ve(arguments,e);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},le($[e],n);let a=new n(function(){}),t;for(t in a)e==="XMLHttpRequest"&&t==="responseBlob"||function(c){typeof a[c]=="function"?$[e].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:Ze($[e].prototype,c,{set:function(l){typeof l=="function"?(this[re][c]=xe(l,e+"."+c),le(this[re][c],l)):this[re][c]=l},get:function(){return this[re][c]}})}(t);for(t in n)t!=="prototype"&&n.hasOwnProperty(t)&&($[e][t]=n[t])}function ae(e,n,a){let t=e;for(;t&&!t.hasOwnProperty(n);)t=He(t);!t&&e[n]&&(t=e);let c=j(n),l=null;if(t&&(!(l=t[c])||!t.hasOwnProperty(c))){l=t[c]=t[n];let _=t&&ke(t,n);if(Ke(_)){let E=a(l,c,n);t[n]=function(){return E(this,arguments)},le(t[n],l)}}return l}function Tt(e,n,a){let t=null;function c(l){let _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments)},t.apply(_.target,_.args),l}t=ae(e,n,l=>function(_,E){let y=a(_,E);return y.cbIdx>=0&&typeof E[y.cbIdx]=="function"?Ge(y.name,E[y.cbIdx],y,c):l.apply(_,E)})}function le(e,n){e[j("OriginalDelegate")]=n}var $e=!1,Ie=!1;function gt(){try{let e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function yt(){if($e)return Ie;$e=!0;try{let e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ie=!0)}catch{}return Ie}var Ee=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){Ee=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Ee=!1}var mt={useG:!0},te={},nt={},rt=new RegExp("^"+ve+"(\\w+)(true|false)$"),ot=j("propagationStopped");function st(e,n){let a=(n?n(e):e)+ce,t=(n?n(e):e)+ie,c=ve+a,l=ve+t;te[e]={},te[e][ce]=c,te[e][ie]=l}function pt(e,n,a,t){let c=t&&t.add||Ae,l=t&&t.rm||je,_=t&&t.listeners||"eventListeners",E=t&&t.rmAll||"removeAllListeners",y=j(c),C="."+c+":",T="prependListener",M="."+T+":",w=function(k,d,G){if(k.isRemoved)return;let z=k.callback;typeof z=="object"&&z.handleEvent&&(k.callback=g=>z.handleEvent(g),k.originalDelegate=z);let q;try{k.invoke(k,d,[G])}catch(g){q=g}let V=k.options;if(V&&typeof V=="object"&&V.once){let g=k.originalDelegate?k.originalDelegate:k.callback;d[l].call(d,G.type,g,V)}return q};function Z(k,d,G){if(d=d||e.event,!d)return;let z=k||d.target||e,q=z[te[d.type][G?ie:ce]];if(q){let V=[];if(q.length===1){let g=w(q[0],z,d);g&&V.push(g)}else{let g=q.slice();for(let B=0;B<g.length&&!(d&&d[ot]===!0);B++){let N=w(g[B],z,d);N&&V.push(N)}}if(V.length===1)throw V[0];for(let g=0;g<V.length;g++){let B=V[g];n.nativeScheduleMicroTask(()=>{throw B})}}}let F=function(k){return Z(this,k,!1)},H=function(k){return Z(this,k,!0)};function ne(k,d){if(!k)return!1;let G=!0;d&&d.useG!==void 0&&(G=d.useG);let z=d&&d.vh,q=!0;d&&d.chkDup!==void 0&&(q=d.chkDup);let V=!1;d&&d.rt!==void 0&&(V=d.rt);let g=k;for(;g&&!g.hasOwnProperty(c);)g=He(g);if(!g&&k[c]&&(g=k),!g||g[y])return!1;let B=d&&d.eventNameToString,N={},R=g[y]=g[c],p=g[j(l)]=g[l],O=g[j(_)]=g[_],K=g[j(E)]=g[E],X;d&&d.prepend&&(X=g[j(d.prepend)]=g[d.prepend]);function Y(o,u){return!Ee&&typeof o=="object"&&o?!!o.capture:!Ee||!u?o:typeof o=="boolean"?{capture:o,passive:!0}:o?typeof o=="object"&&o.passive!==!1?{...o,passive:!0}:o:{passive:!0}}let A=function(o){if(!N.isExisting)return R.call(N.target,N.eventName,N.capture?H:F,N.options)},r=function(o){if(!o.isRemoved){let u=te[o.eventName],h;u&&(h=u[o.capture?ie:ce]);let b=h&&o.target[h];if(b){for(let S=0;S<b.length;S++)if(b[S]===o){b.splice(S,1),o.isRemoved=!0,b.length===0&&(o.allRemoved=!0,o.target[h]=null);break}}}if(o.allRemoved)return p.call(o.target,o.eventName,o.capture?H:F,o.options)},i=function(o){return R.call(N.target,N.eventName,o.invoke,N.options)},s=function(o){return X.call(N.target,N.eventName,o.invoke,N.options)},v=function(o){return p.call(o.target,o.eventName,o.invoke,o.options)},x=G?A:i,I=G?r:v,he=function(o,u){let h=typeof u;return h==="function"&&o.callback===u||h==="object"&&o.originalDelegate===u},ge=d&&d.diff?d.diff:he,ue=Zone[j("UNPATCHED_EVENTS")],be=e[j("PASSIVE_EVENTS")],f=function(o,u,h,b,S=!1,m=!1){return function(){let P=this||e,D=arguments[0];d&&d.transferEventName&&(D=d.transferEventName(D));let L=arguments[1];if(!L)return o.apply(this,arguments);if(Se&&D==="uncaughtException")return o.apply(this,arguments);let U=!1;if(typeof L!="function"){if(!L.handleEvent)return o.apply(this,arguments);U=!0}if(z&&!z(o,L,P,arguments))return;let J=Ee&&!!be&&be.indexOf(D)!==-1,Q=Y(arguments[2],J),ye=Q&&typeof Q=="object"&&Q.signal&&typeof Q.signal=="object"?Q.signal:void 0;if(ye?.aborted)return;if(ue){for(let fe=0;fe<ue.length;fe++)if(D===ue[fe])return J?o.call(P,D,L,Q):o.apply(this,arguments)}let De=Q?typeof Q=="boolean"?!0:Q.capture:!1,Ue=Q&&typeof Q=="object"?Q.once:!1,lt=Zone.current,Oe=te[D];Oe||(st(D,B),Oe=te[D]);let Fe=Oe[De?ie:ce],de=P[Fe],ze=!1;if(de){if(ze=!0,q){for(let fe=0;fe<de.length;fe++)if(ge(de[fe],L))return}}else de=P[Fe]=[];let Pe,Xe=P.constructor.name,We=nt[Xe];We&&(Pe=We[D]),Pe||(Pe=Xe+u+(B?B(D):D)),N.options=Q,Ue&&(N.options.once=!1),N.target=P,N.capture=De,N.eventName=D,N.isExisting=ze;let me=G?mt:void 0;me&&(me.taskData=N),ye&&(N.options.signal=void 0);let oe=lt.scheduleEventTask(Pe,L,me,h,b);if(ye&&(N.options.signal=ye,o.call(ye,"abort",()=>{oe.zone.cancelTask(oe)},{once:!0})),N.target=null,me&&(me.taskData=null),Ue&&(Q.once=!0),!Ee&&typeof oe.options=="boolean"||(oe.options=Q),oe.target=P,oe.capture=De,oe.eventName=D,U&&(oe.originalDelegate=L),m?de.unshift(oe):de.push(oe),S)return P}};return g[c]=f(R,C,x,I,V),X&&(g[T]=f(X,M,s,I,V,!0)),g[l]=function(){let o=this||e,u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));let h=arguments[2],b=h?typeof h=="boolean"?!0:h.capture:!1,S=arguments[1];if(!S)return p.apply(this,arguments);if(z&&!z(p,S,o,arguments))return;let m=te[u],P;m&&(P=m[b?ie:ce]);let D=P&&o[P];if(D)for(let L=0;L<D.length;L++){let U=D[L];if(ge(U,S)){if(D.splice(L,1),U.isRemoved=!0,D.length===0&&(U.allRemoved=!0,o[P]=null,!b&&typeof u=="string")){let J=ve+"ON_PROPERTY"+u;o[J]=null}return U.zone.cancelTask(U),V?o:void 0}}return p.apply(this,arguments)},g[_]=function(){let o=this||e,u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));let h=[],b=it(o,B?B(u):u);for(let S=0;S<b.length;S++){let m=b[S],P=m.originalDelegate?m.originalDelegate:m.callback;h.push(P)}return h},g[E]=function(){let o=this||e,u=arguments[0];if(u){d&&d.transferEventName&&(u=d.transferEventName(u));let h=te[u];if(h){let b=h[ce],S=h[ie],m=o[b],P=o[S];if(m){let D=m.slice();for(let L=0;L<D.length;L++){let U=D[L],J=U.originalDelegate?U.originalDelegate:U.callback;this[l].call(this,u,J,U.options)}}if(P){let D=P.slice();for(let L=0;L<D.length;L++){let U=D[L],J=U.originalDelegate?U.originalDelegate:U.callback;this[l].call(this,u,J,U.options)}}}}else{let h=Object.keys(o);for(let b=0;b<h.length;b++){let S=h[b],m=rt.exec(S),P=m&&m[1];P&&P!=="removeListener"&&this[E].call(this,P)}this[E].call(this,"removeListener")}if(V)return this},le(g[c],R),le(g[l],p),K&&le(g[E],K),O&&le(g[_],O),!0}let W=[];for(let k=0;k<a.length;k++)W[k]=ne(a[k],t);return W}function it(e,n){if(!n){let l=[];for(let _ in e){let E=rt.exec(_),y=E&&E[1];if(y&&(!n||y===n)){let C=e[_];if(C)for(let T=0;T<C.length;T++)l.push(C[T])}}return l}let a=te[n];a||(st(n),a=te[n]);let t=e[a[ce]],c=e[a[ie]];return t?c?t.concat(c):t.slice():c?c.slice():[]}function kt(e,n){let a=e.Event;a&&a.prototype&&n.patchMethod(a.prototype,"stopImmediatePropagation",t=>function(c,l){c[ot]=!0,t&&t.apply(c,l)})}function vt(e,n){n.patchMethod(e,"queueMicrotask",a=>function(t,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0])})}var we=j("zoneTask");function _e(e,n,a,t){let c=null,l=null;n+=t,a+=t;let _={};function E(C){let T=C.data;return T.args[0]=function(){return C.invoke.apply(this,arguments)},T.handleId=c.apply(e,T.args),C}function y(C){return l.call(e,C.data.handleId)}c=ae(e,n,C=>function(T,M){if(typeof M[0]=="function"){let w={isPeriodic:t==="Interval",delay:t==="Timeout"||t==="Interval"?M[1]||0:void 0,args:M},Z=M[0];M[0]=function(){try{return Z.apply(this,arguments)}finally{w.isPeriodic||(typeof w.handleId=="number"?delete _[w.handleId]:w.handleId&&(w.handleId[we]=null))}};let F=Ge(n,M[0],w,E,y);if(!F)return F;let H=F.data.handleId;return typeof H=="number"?_[H]=F:H&&(H[we]=F),H&&H.ref&&H.unref&&typeof H.ref=="function"&&typeof H.unref=="function"&&(F.ref=H.ref.bind(H),F.unref=H.unref.bind(H)),typeof H=="number"||H?H:F}else return C.apply(e,M)}),l=ae(e,a,C=>function(T,M){let w=M[0],Z;typeof w=="number"?Z=_[w]:(Z=w&&w[we],Z||(Z=w)),Z&&typeof Z.type=="string"?Z.state!=="notScheduled"&&(Z.cancelFn&&Z.data.isPeriodic||Z.runCount===0)&&(typeof w=="number"?delete _[w]:w&&(w[we]=null),Z.zone.cancelTask(Z)):C.apply(e,M)})}function bt(e,n){let{isBrowser:a,isMix:t}=n.getGlobalObjects();if(!a&&!t||!e.customElements||!("customElements"in e))return;let c=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];n.patchCallbacks(n,e.customElements,"customElements","define",c)}function Pt(e,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:a,zoneSymbolEventNames:t,TRUE_STR:c,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=n.getGlobalObjects();for(let y=0;y<a.length;y++){let C=a[y],T=C+l,M=C+c,w=_+T,Z=_+M;t[C]={},t[C][l]=w,t[C][c]=Z}let E=e.EventTarget;if(!(!E||!E.prototype))return n.patchEventTarget(e,n,[E&&E.prototype]),!0}function wt(e,n){n.patchEventPrototype(e,n)}function ct(e,n,a){if(!a||a.length===0)return n;let t=a.filter(l=>l.target===e);if(!t||t.length===0)return n;let c=t[0].ignoreProperties;return n.filter(l=>c.indexOf(l)===-1)}function Je(e,n,a,t){if(!e)return;let c=ct(e,n,a);tt(e,c,t)}function Le(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function Rt(e,n){if(Se&&!et||Zone[e.symbol("patchEvents")])return;let a=n.__Zone_ignore_on_properties,t=[];if(Be){let c=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=gt()?[{target:c,ignoreProperties:["error"]}]:[];Je(c,Le(c),a&&a.concat(l),He(c))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<t.length;c++){let l=n[t[c]];l&&l.prototype&&Je(l.prototype,Le(l.prototype),a)}}function Ct(e){e.__load_patch("legacy",n=>{let a=n[e.__symbol__("legacyPatch")];a&&a()}),e.__load_patch("timers",n=>{let a="set",t="clear";_e(n,a,t,"Timeout"),_e(n,a,t,"Interval"),_e(n,a,t,"Immediate")}),e.__load_patch("requestAnimationFrame",n=>{_e(n,"request","cancel","AnimationFrame"),_e(n,"mozRequest","mozCancel","AnimationFrame"),_e(n,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(n,a)=>{let t=["alert","prompt","confirm"];for(let c=0;c<t.length;c++){let l=t[c];ae(n,l,(_,E,y)=>function(C,T){return a.current.run(_,n,T,y)})}}),e.__load_patch("EventTarget",(n,a,t)=>{wt(n,t),Pt(n,t);let c=n.XMLHttpRequestEventTarget;c&&c.prototype&&t.patchEventTarget(n,t,[c.prototype])}),e.__load_patch("MutationObserver",(n,a,t)=>{pe("MutationObserver"),pe("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(n,a,t)=>{pe("IntersectionObserver")}),e.__load_patch("FileReader",(n,a,t)=>{pe("FileReader")}),e.__load_patch("on_property",(n,a,t)=>{Rt(t,n)}),e.__load_patch("customElements",(n,a,t)=>{bt(n,t)}),e.__load_patch("XHR",(n,a)=>{C(n);let t=j("xhrTask"),c=j("xhrSync"),l=j("xhrListener"),_=j("xhrScheduled"),E=j("xhrURL"),y=j("xhrErrorBeforeScheduled");function C(T){let M=T.XMLHttpRequest;if(!M)return;let w=M.prototype;function Z(R){return R[t]}let F=w[Ne],H=w[Me];if(!F){let R=T.XMLHttpRequestEventTarget;if(R){let p=R.prototype;F=p[Ne],H=p[Me]}}let ne="readystatechange",W="scheduled";function k(R){let p=R.data,O=p.target;O[_]=!1,O[y]=!1;let K=O[l];F||(F=O[Ne],H=O[Me]),K&&H.call(O,ne,K);let X=O[l]=()=>{if(O.readyState===O.DONE)if(!p.aborted&&O[_]&&R.state===W){let A=O[a.__symbol__("loadfalse")];if(O.status!==0&&A&&A.length>0){let r=R.invoke;R.invoke=function(){let i=O[a.__symbol__("loadfalse")];for(let s=0;s<i.length;s++)i[s]===R&&i.splice(s,1);!p.aborted&&R.state===W&&r.call(R)},A.push(R)}else R.invoke()}else!p.aborted&&O[_]===!1&&(O[y]=!0)};return F.call(O,ne,X),O[t]||(O[t]=R),B.apply(O,p.args),O[_]=!0,R}function d(){}function G(R){let p=R.data;return p.aborted=!0,N.apply(p.target,p.args)}let z=ae(w,"open",()=>function(R,p){return R[c]=p[2]==!1,R[E]=p[1],z.apply(R,p)}),q="XMLHttpRequest.send",V=j("fetchTaskAborting"),g=j("fetchTaskScheduling"),B=ae(w,"send",()=>function(R,p){if(a.current[g]===!0||R[c])return B.apply(R,p);{let O={target:R,url:R[E],isPeriodic:!1,args:p,aborted:!1},K=Ge(q,d,O,k,G);R&&R[y]===!0&&!O.aborted&&K.state===W&&K.invoke()}}),N=ae(w,"abort",()=>function(R,p){let O=Z(R);if(O&&typeof O.type=="string"){if(O.cancelFn==null||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(a.current[V]===!0)return N.apply(R,p)})}}),e.__load_patch("geolocation",n=>{n.navigator&&n.navigator.geolocation&&Et(n.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(n,a)=>{function t(c){return function(l){it(n,c).forEach(E=>{let y=n.PromiseRejectionEvent;if(y){let C=new y(c,{promise:l.promise,reason:l.rejection});E.invoke(C)}})}}n.PromiseRejectionEvent&&(a[j("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),a[j("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(n,a,t)=>{vt(n,t)})}function St(e){e.__load_patch("ZoneAwarePromise",(n,a,t)=>{let c=Object.getOwnPropertyDescriptor,l=Object.defineProperty;function _(f){if(f&&f.toString===Object.prototype.toString){let o=f.constructor&&f.constructor.name;return(o||"")+": "+JSON.stringify(f)}return f?f.toString():Object.prototype.toString.call(f)}let E=t.symbol,y=[],C=n[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,T=E("Promise"),M=E("then"),w="__creationTrace__";t.onUnhandledError=f=>{if(t.showUncaughtError()){let o=f&&f.rejection;o?console.error("Unhandled Promise rejection:",o instanceof Error?o.message:o,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",o,o instanceof Error?o.stack:void 0):console.error(f)}},t.microtaskDrainDone=()=>{for(;y.length;){let f=y.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(o){F(o)}}};let Z=E("unhandledPromiseRejectionHandler");function F(f){t.onUnhandledError(f);try{let o=a[Z];typeof o=="function"&&o.call(this,f)}catch{}}function H(f){return f&&f.then}function ne(f){return f}function W(f){return I.reject(f)}let k=E("state"),d=E("value"),G=E("finally"),z=E("parentPromiseValue"),q=E("parentPromiseState"),V="Promise.then",g=null,B=!0,N=!1,R=0;function p(f,o){return u=>{try{Y(f,o,u)}catch(h){Y(f,!1,h)}}}let O=function(){let f=!1;return function(u){return function(){f||(f=!0,u.apply(null,arguments))}}},K="Promise resolved with itself",X=E("currentTaskTrace");function Y(f,o,u){let h=O();if(f===u)throw new TypeError(K);if(f[k]===g){let b=null;try{(typeof u=="object"||typeof u=="function")&&(b=u&&u.then)}catch(S){return h(()=>{Y(f,!1,S)})(),f}if(o!==N&&u instanceof I&&u.hasOwnProperty(k)&&u.hasOwnProperty(d)&&u[k]!==g)r(u),Y(f,u[k],u[d]);else if(o!==N&&typeof b=="function")try{b.call(u,h(p(f,o)),h(p(f,!1)))}catch(S){h(()=>{Y(f,!1,S)})()}else{f[k]=o;let S=f[d];if(f[d]=u,f[G]===G&&o===B&&(f[k]=f[q],f[d]=f[z]),o===N&&u instanceof Error){let m=a.currentTask&&a.currentTask.data&&a.currentTask.data[w];m&&l(u,X,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<S.length;)i(f,S[m++],S[m++],S[m++],S[m++]);if(S.length==0&&o==N){f[k]=R;let m=u;try{throw new Error("Uncaught (in promise): "+_(u)+(u&&u.stack?`
`+u.stack:""))}catch(P){m=P}C&&(m.throwOriginal=!0),m.rejection=u,m.promise=f,m.zone=a.current,m.task=a.currentTask,y.push(m),t.scheduleMicroTask()}}}return f}let A=E("rejectionHandledHandler");function r(f){if(f[k]===R){try{let o=a[A];o&&typeof o=="function"&&o.call(this,{rejection:f[d],promise:f})}catch{}f[k]=N;for(let o=0;o<y.length;o++)f===y[o].promise&&y.splice(o,1)}}function i(f,o,u,h,b){r(f);let S=f[k],m=S?typeof h=="function"?h:ne:typeof b=="function"?b:W;o.scheduleMicroTask(V,()=>{try{let P=f[d],D=!!u&&G===u[G];D&&(u[z]=P,u[q]=S);let L=o.run(m,void 0,D&&m!==W&&m!==ne?[]:[P]);Y(u,!0,L)}catch(P){Y(u,!1,P)}},u)}let s="function ZoneAwarePromise() { [native code] }",v=function(){},x=n.AggregateError;class I{static toString(){return s}static resolve(o){return o instanceof I?o:Y(new this(null),B,o)}static reject(o){return Y(new this(null),N,o)}static withResolvers(){let o={};return o.promise=new I((u,h)=>{o.resolve=u,o.reject=h}),o}static any(o){if(!o||typeof o[Symbol.iterator]!="function")return Promise.reject(new x([],"All promises were rejected"));let u=[],h=0;try{for(let m of o)h++,u.push(I.resolve(m))}catch{return Promise.reject(new x([],"All promises were rejected"))}if(h===0)return Promise.reject(new x([],"All promises were rejected"));let b=!1,S=[];return new I((m,P)=>{for(let D=0;D<u.length;D++)u[D].then(L=>{b||(b=!0,m(L))},L=>{S.push(L),h--,h===0&&(b=!0,P(new x(S,"All promises were rejected")))})})}static race(o){let u,h,b=new this((P,D)=>{u=P,h=D});function S(P){u(P)}function m(P){h(P)}for(let P of o)H(P)||(P=this.resolve(P)),P.then(S,m);return b}static all(o){return I.allWithCallback(o)}static allSettled(o){return(this&&this.prototype instanceof I?this:I).allWithCallback(o,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(o,u){let h,b,S=new this((L,U)=>{h=L,b=U}),m=2,P=0,D=[];for(let L of o){H(L)||(L=this.resolve(L));let U=P;try{L.then(J=>{D[U]=u?u.thenCallback(J):J,m--,m===0&&h(D)},J=>{u?(D[U]=u.errorCallback(J),m--,m===0&&h(D)):b(J)})}catch(J){b(J)}m++,P++}return m-=2,m===0&&h(D),S}constructor(o){let u=this;if(!(u instanceof I))throw new Error("Must be an instanceof Promise.");u[k]=g,u[d]=[];try{let h=O();o&&o(h(p(u,B)),h(p(u,N)))}catch(h){Y(u,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return I}then(o,u){let h=this.constructor?.[Symbol.species];(!h||typeof h!="function")&&(h=this.constructor||I);let b=new h(v),S=a.current;return this[k]==g?this[d].push(S,b,o,u):i(this,S,b,o,u),b}catch(o){return this.then(null,o)}finally(o){let u=this.constructor?.[Symbol.species];(!u||typeof u!="function")&&(u=I);let h=new u(v);h[G]=G;let b=a.current;return this[k]==g?this[d].push(b,h,o,o):i(this,b,h,o,o),h}}I.resolve=I.resolve,I.reject=I.reject,I.race=I.race,I.all=I.all;let he=n[T]=n.Promise;n.Promise=I;let ge=E("thenPatched");function ue(f){let o=f.prototype,u=c(o,"then");if(u&&(u.writable===!1||!u.configurable))return;let h=o.then;o[M]=h,f.prototype.then=function(b,S){return new I((P,D)=>{h.call(this,P,D)}).then(b,S)},f[ge]=!0}t.patchThen=ue;function be(f){return function(o,u){let h=f.apply(o,u);if(h instanceof I)return h;let b=h.constructor;return b[ge]||ue(b),h}}return he&&(ue(he),ae(n,"fetch",f=>be(f))),Promise[a.__symbol__("uncaughtPromiseErrors")]=y,I})}function Dt(e){e.__load_patch("toString",n=>{let a=Function.prototype.toString,t=j("OriginalDelegate"),c=j("Promise"),l=j("Error"),_=function(){if(typeof this=="function"){let T=this[t];if(T)return typeof T=="function"?a.call(T):Object.prototype.toString.call(T);if(this===Promise){let M=n[c];if(M)return a.call(M)}if(this===Error){let M=n[l];if(M)return a.call(M)}}return a.call(this)};_[t]=a,Function.prototype.toString=_;let E=Object.prototype.toString,y="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?y:E.call(this)}})}function Ot(e,n,a,t,c){let l=Zone.__symbol__(t);if(n[l])return;let _=n[l]=n[t];n[t]=function(E,y,C){return y&&y.prototype&&c.forEach(function(T){let M=`${a}.${t}::`+T,w=y.prototype;try{if(w.hasOwnProperty(T)){let Z=e.ObjectGetOwnPropertyDescriptor(w,T);Z&&Z.value?(Z.value=e.wrapWithCurrentZone(Z.value,M),e._redefineProperty(y.prototype,T,Z)):w[T]&&(w[T]=e.wrapWithCurrentZone(w[T],M))}else w[T]&&(w[T]=e.wrapWithCurrentZone(w[T],M))}catch{}}),_.call(n,E,y,C)},e.attachOriginToPatched(n[t],_)}function Nt(e){e.__load_patch("util",(n,a,t)=>{let c=Le(n);t.patchOnProperties=tt,t.patchMethod=ae,t.bindArguments=Ve,t.patchMacroTask=Tt;let l=a.__symbol__("BLACK_LISTED_EVENTS"),_=a.__symbol__("UNPATCHED_EVENTS");n[_]&&(n[l]=n[_]),n[l]&&(a[l]=a[_]=n[l]),t.patchEventPrototype=kt,t.patchEventTarget=pt,t.isIEOrEdge=yt,t.ObjectDefineProperty=Ze,t.ObjectGetOwnPropertyDescriptor=ke,t.ObjectCreate=ht,t.ArraySlice=dt,t.patchClass=pe,t.wrapWithCurrentZone=xe,t.filterProperties=ct,t.attachOriginToPatched=le,t._redefineProperty=Object.defineProperty,t.patchCallbacks=Ot,t.getGlobalObjects=()=>({globalSources:nt,zoneSymbolEventNames:te,eventNames:c,isBrowser:Be,isMix:et,isNode:Se,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:Ae,REMOVE_EVENT_LISTENER_STR:je})})}function Mt(e){St(e),Dt(e),Nt(e)}var at=ft();Mt(at);Ct(at);(globalThis.$localize??={}).locale="ru";
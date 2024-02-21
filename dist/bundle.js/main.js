(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var o,n,i,a,r,l=(o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],n=function(){function t(o){var n=o.targetModal,i=o.triggers,a=void 0===i?[]:i,r=o.onShow,l=void 0===r?function(){}:r,s=o.onClose,c=void 0===s?function(){}:s,d=o.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=o.closeTrigger,h=void 0===f?"data-micromodal-close":f,m=o.openClass,v=void 0===m?"is-open":m,g=o.disableScroll,b=void 0!==g&&g,y=o.disableFocus,p=void 0!==y&&y,k=o.awaitCloseAnimation,E=void 0!==k&&k,w=o.awaitOpenAnimation,C=void 0!==w&&w,L=o.debugMode,M=void 0!==L&&L;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(n),this.config={debugMode:M,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:v,onShow:l,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:C,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,e(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var n;return(n=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",(function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()}),!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(o);return Array.apply(void 0,e(t))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,n),t}(),i=null,a=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},r=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)a(o);return!0},{init:function(t){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),a=e(document.querySelectorAll("[".concat(o.openTrigger,"]"))),l=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(a,o.openTrigger);if(!0!==o.debugMode||!1!==r(a,l))for(var s in l){var c=l[s];o.targetModal=s,o.triggers=e(c),i=new n(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===a(e)||(i&&i.removeEventListeners(),(i=new n(o)).showModal())},close:function(e){e?i.closeModalById(e):i.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l);const s=l,c=document.getElementById("send-button"),d=document.getElementById("tasks-ul"),u=document.getElementById("task-input");let f=!1;c.addEventListener("click",(function(){event.preventDefault(),""!==u.value&&(localStorage.setItem("Task",u.value),function(){const e=document.createElement("li"),t=document.createElement("span"),o=document.createElement("button"),n=document.createElement("i"),i=document.createElement("i"),a=document.createElement("button"),r=document.createElement("i");o.classList.add("task-button"),n.className="fa-solid fa-check",i.id="edit-i",i.className="fa-solid fa-pencil",a.className="x-button",r.className="fa-regular fa-circle-xmark",t.textContent=localStorage.getItem("Task"),o.appendChild(n),a.appendChild(r),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(a),d.appendChild(e),o.addEventListener("click",(function(){!1===f?(t.classList.add("marked-task"),e.style.backgroundColor="#EE98F0",o.style.backgroundColor="#D9D9D9",f=!0):(t.classList.remove("marked-task"),e.style.backgroundColor="#D9D9D9",o.style.backgroundColor="#EE98F0",f=!1)})),a.addEventListener("click",(function(){d.removeChild(e)})),i.addEventListener("click",(function(){const e=prompt("Write new task");null!==e&&""!==e&&(t.textContent=e)}))}(),u.value="")})),document.addEventListener("DOMContentLoaded",(function(){try{s.init({awaitCloseAnimation:!0,onShow:function(e){},onClose:function(e){}})}catch(e){console.log("micromodal error: ",e)}}))})();
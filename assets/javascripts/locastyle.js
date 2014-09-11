function accessMenu(){$("#header .limit").prepend('<nav class="menuAccess" />'),$("[data-access]").each(function(){var t=$(this).attr("title"),e=$(this).attr("href"),n=$(this).text();$(".menuAccess").append('<a role="menuitem" tabindex="1" href="'+e+'" aria-label="'+t+'" title="'+t+'">'+n+"</a>")})}function subMenuAccess(){$("#menuPrincipal .parent a").focus(function(){$(this).parents(".parent").addClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!0,"aria-hidden":!1})}).blur(function(){$(this).parents(".parent").removeClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!1,"aria-hidden":!0})})}Locastyle=function(){Locastyle.prototype.base={init:function(t){this.toggleTextOnClick(t),this.toggleTextOnHover(t),this.datePickerSetup(t,this.datePickerOptions),this.numbersOnly(t),this.activateCollapseOnShown(t),this.deactivateCollapseOnHide(t),this.htmlForceClass(t),this.disableClass(t),this.classParentLiMenu(t),this.modalAutoFocus(t),this.preventDefaultOnDisabled(t),this.openCollapsesWithError(t),this.autoOpenModal(t),this.pathWayStepCounter(t),this.setListDetailSeparator(),this.advancedSearchValueHandler(t),this.toggleChild(t),this.toggleChildValue(t),this.inputDataValue(t),this.carouselCounter(t),this.initCustomSelect(t),this.collapseSetAnchor(),this.notificationInfoSet(t),this.notificationInfoHandler(t),this.minShortcutsCookieSetter(t),this.minShortcutsCookieHandler(),this.linkPreventDefault(),this.popover(t),this.labelSelectCustom(),this.collapsedRadiosChecked(t),this.collapsedRadios(t),this.closedAllCollapse(t),this.collapseWithTooltip(t),this.collapseNavButtons(t),this.elementChecked(t),this.clickElementChecked(t),this.togglePassword(t),this.classToggle(t),this.boxDinamicArrow(t),this.arrowDinamic(t,"[data-element]:checked")},popover:function(t){$("[rel=popover]",t).popover()},toggleTextOnClick:function(t){var e=this;$('[data-toggle_text="click"]',t).on("click",function(t){t.preventDefault(),e.toggleText(this)})},toggleTextOnHover:function(t){var e=this;$('[data-toggle_text="hover"]',t).on("mouseover",function(t){t.preventDefault(),e.toggleText(this)})},toggleText:function(t){var e,n;e=$(t).html(),n=$(t).data("text"),$(t).text(n).data("text",e).attr("title",n)},datePickerOptions:{showOn:"button",dateFormat:"dd/mm/yy",monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],monthNames:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},datePickerSetup:function(t,e){$(".datepicker",t).datepicker(e),$(".ui-datepicker-trigger",t).addClass("icon-calendar").html("")},numbersOnly:function(t){$(".numbersOnly",t).keyup(function(){this.value=this.value.replace(/[^0-9\.]/g,"")})},activateCollapseOnShown:function(t){$(".collapse",t).on("shown",function(){$(this).parents(".boxCollapse").addClass("active"),$(this).find('[tabindex="0"]').attr("tabindex","3")})},deactivateCollapseOnHide:function(t){$(".collapse",t).on("hide",function(){$(this).parents(".boxCollapse").removeClass("active"),$(this).find('[tabindex="3"]').attr("tabindex","0")})},htmlForceClass:function(t){$("html",t).addClass("forceClass")},disableClass:function(t){$("input[disabled], select[disabled], textarea[disabled], input[readonly], select[readonly], textarea[readonly]",t).addClass("disabled")},classParentLiMenu:function(t){$("#menuPrincipal li",t).has("ul").addClass("parent")},modalAutoFocus:function(t){$(".modal",t).on("shown",function(){$(".autoFocus",this).focus()})},preventDefaultOnDisabled:function(t){$(".btn.disabled",t).click(function(t){t.preventDefault()})},openCollapsesWithError:function(t){$(".collapse .error",t).parents(".collapse").collapse("show")},autoOpenModal:function(t){$(".modalAutoOpen",t).modal("show")},showElement:function(t){$(t).removeClass("dNone")},hideElement:function(t){$(t).addClass("dNone")},pathWayStepCounter:function(){$(".pathWay").each(function(){var t=$(this).find("li").size();$(this).addClass("steps"+t)})},setListDetailSeparator:function(){$(".listDetail dd").each(function(t,e){$(e).after("<hr class='sep'/>")})},advancedSearchValueHandler:function(t){$(".inputAdvancedSearchField",t).each(function(t,e){""!==$(e).val()&&$(this).parents().addClass("in")})},toggleChild:function(t){var e=this;$(".lnkToggle",t).on("click",function(n){n.preventDefault(),$(this).parents(".toggleChild").find(".itemToToggle").toggleClass("dNone"),$(this).parents(".toggleChild").toggleClass($(this).parents(".toggleChild").data("class")),e.toggleChildValue(t),$(this).trigger($.Event("lnkToggleFinish"))})},toggleChildValue:function(t){$(".btn.lnkToggle",t).on("click",function(){var t=$(this).parents(".toggleChild").find("[data-value]");t.each(function(){$(this).val($(this).data("value"))})})},inputDataValue:function(t){$.each($('textarea, input[type="url"], input[type="text"], input[type="password"], input[type="number"], input[type="tel"], input[type="email"]',t),function(){var t=$(this).attr("value");$(this).attr("data-value",t)})},collapseAutoOpen:function(t){$("[data-target="+t+"]").click(),$("[data-target="+t+"]").parent().addClass("active")},collapseSetAnchor:function(){var t=window.location.hash.replace("!/","");this.collapseAnchorHandler(t)},collapseAnchorHandler:function(t){""!=t&&this.collapseAutoOpen(t)},carouselCounter:function(t){$.each($(".carousel",t),function(){var t=$(".carousel-inner",this).children().size();$(".carouselNav i",this).html(t),$(this).on("slid",function(){$(this).find(".carouselNav b").html($(this).find(".active").index()+1)})})},labelSelectCustom:function(){$(".label-for-custom2").on("click",function(){var t=$(this).data("target");$(t).select2("open")})},initCustomSelect:function(t){$("select.customSelect",t).select2()},notificationInfoSet:function(t){$(".lnkNoShow",t).on("click",function(){$.cookie($(this).data("target"),!0),$($(this).data("target")).remove()})},notificationInfoHandler:function(t){$.each($(".lnkNoShow",t),function(){var t=$(this).data("target");"true"===$.cookie(t)&&$(t).remove()})},minShortcutsCookieSetter:function(t){var e=this;$(".minShortcuts",t).on("click",function(){"true"===$.cookie("minShortcuts")?($.cookie("minShortcuts",!1),e.toggleText($(this))):($.cookie("minShortcuts",!0),e.toggleText($(this))),$(this).siblings(".expandBox").toggleClass("microBox")})},minShortcutsCookieHandler:function(){"true"===$.cookie("minShortcuts")&&(self.toggleText($(".minShortcuts")),$(".expandBox").addClass("microBox"))},collapsedRadiosChecked:function(){$(".collapsedRadios [data-toggle='collapse']:checked").each(function(){var t=$(this).data("target");$(this).parents(".collapsedRadios").find(".in").collapse("hide"),$(t).collapse("show")})},collapsedRadios:function(){$(".collapsedRadios [data-toggle='collapse']").on("click",function(){var t=$(this).data("target");return $(t).hasClass("in")?!1:void $(this).parents(".collapsedRadios").find(".in").collapse("hide")})},closedAllCollapse:function(){$(".closeAllCollapse").on("click",function(){$(this).parents(".collapsedRadios").find(".in").collapse("hide")})},collapseWithTooltip:function(t){$(".collapse",t).each(function(t,e){$(e).find('[rel="popover"]')[0]&&$(e).on("shown",function(){$(e).addClass("with-tooltip")}).on("hidden",function(){$(e).removeClass("with-tooltip")})})},collapseNavButtons:function(t){$(".collapseGroup",t).each(function(t,e){var n=!1;$(e).hasClass("step-validate")&&jQuery().validate&&(n=!0),$(e).find("[data-collapse-nav]").on("click",function(t){t.preventDefault();var e=$(this).parents(".collapse");if(n&&!$(":input:visible",e).valid())return!1;var o=$(this).data("collapse-nav");e.collapse("hide"),$(o).collapse("show")})})},collapsesWeirdBehavior:function(t){$("body").on("change.collapse.data-api","[data-toggle=hide]",function(t){t.preventDefault(),$($(this).data("target")).collapse("hide")}),$("body").on("change.collapse.data-api","[data-toggle=show]",function(t){t.preventDefault(),$($(this).data("target")).collapse("show")}),$("[data-toggle=show]",t).filter(":checked").change()},linkPreventDefault:function(){$("a").on("click",function(t){(""===$(this).attr("href")||"#"===$(this).attr("href"))&&t.preventDefault()})},clearForms:function(t){$(".clearFormBt",t).live("click",function(t){t.preventDefault(),$(this).closest(".boxFiltro").find(".clearForm").not(".in").find(":input").each(function(){switch(this.type){case"password":case"select-multiple":case"select-one":case"text":case"textarea":$(this).val("");break;case"checkbox":this.selected=!1;break;case"radio":this.checked=!1}})})},elementChecked:function(t){$("[data-element]",t).each(function(){"checked"==$(this).attr("checked")&&($(this).parents("[data-checked]").siblings().removeClass("active"),$(this).parents("[data-checked]").addClass("active"))})},clickElementChecked:function(t){$("[data-element]",t).on("change",function(){locastyle.base.elementChecked(),locastyle.base.arrowDinamic(t,$(this))})},togglePassword:function(t){$(".togglePass",t).on("click",function(t){t.preventDefault();var e=$(this).data("target");"password"==$(e).attr("type")?$(e).removeAttr("attr").prop("type","text"):$(e).removeAttr("attr").prop("type","password")})},classToggle:function(t){$("[data-classtoggle]",t).on("click",function(t){t.preventDefault();var e=$(this).data("classtoggle").split(",");$(this).toggleClass(e[0]).toggleClass(e[1])})},arrowDinamic:function(t,e){$(".collapsedRadios [data-element]:checked",t).each(function(){var t=$(e),n=t.offset().left-t.parents(".collapsedRadios").offset().left;$(t).parents(".collapsedRadios").find(".arrowTop").css("left",n)})},boxDinamicArrow:function(t){$(".boxDinamicArrow",t).prepend('<span class="arrowTop"/>')}}},$(window).load(function(){window.locastyle=new Locastyle,locastyle.base.init($(document)),locastyle.passwordStrength.init(),locastyle.sumValues.init()}),$(".serviceName a").attr("onclick","_gaq.push(['_trackEvent', 'Logo', 'Clique', 'Nome do Servico']);"),$(".logOut").attr("onclick","_gaq.push(['_trackEvent', 'BT_Sair', 'Clique', 'Sair do Servico']);"),$(".lnkSugestoes").attr("onclick","_gaq.push(['_trackEvent', 'BT_Sugestoes', 'Clique', 'Sugestoes Feedbackr']);"),$(".infoLogin .btn-group").attr("onclick","_gaq.push(['_trackEvent', 'Combo_Administrar', 'Clique', 'Troca de Ambiente']);"),$(".minShortcuts.shortcutExpanded").attr("onclick","_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Minimizar']);"),$(".minShortcuts").attr("onclick","_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Expandir']);"),$(".span12 .carousel-control.left").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"),$(".span12 .carousel-control.right").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"),$(".innerSideBox .carousel-control.left").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"),$(".innerSideBox .carousel-control.right").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"),$(".footerTop .ico-helpDesk").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Helpdesk']);"),$(".footerTop .ico-Chat").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Chat']);"),$(".footerTop .ico-Telefone").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Telefone']);"),$(".footerTop .lnkArrow.lnkArrowWhite").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'VerFormasAtendimento']);"),$.browser.msie?9==parseInt($.browser.version)?$("html").addClass("ie9"):8==parseInt($.browser.version)?$("html").addClass("ie8"):7==parseInt($.browser.version)?$("html").addClass("ie7"):6==parseInt($.browser.version)&&$("html").addClass("ie6"):$.browser.mozilla?$("html").addClass("gecko"):$.browser.webkit&&$("html").addClass("webkit"),/**
 *
 * Copyright 2013 LinkedIn Corp. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){var n,o,i,a,s,r,l,c,u,h,d=window.Sizzle||null,p=t[e],f="undefined",v=!1,g=typeof window.jQuery!==f,m=!1,b=window.document;try{m=typeof window.sessionStorage!==f}catch($){}h={smoothScroll:!0,scrollDuration:1e3,scrollTopMargin:200,showCloseButton:!0,showPrevButton:!1,showNextButton:!0,bubbleWidth:280,bubblePadding:15,arrowWidth:20,skipIfNoElement:!0,cookieName:"hopscotch.tour.state"},p||(Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),u=function(){v&&p.startTour()},r={addClass:function(t,e){var n,o,i,a;if(t.className){for(o=e.split(/\s+/),n=" "+t.className+" ",i=0,a=o.length;a>i;++i)n.indexOf(" "+o[i]+" ")<0&&(n+=o[i]+" ");t.className=n.replace(/^\s+|\s+$/g,"")}else t.className=e},removeClass:function(t,e){var n,o,i,a;for(o=e.split(/\s+/),n=" "+t.className+" ",i=0,a=o.length;a>i;++i)n=n.replace(" "+o[i]+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")},getPixelValue:function(t){var e=typeof t;return"number"===e?t:"string"===e?parseInt(t,10):0},valOrDefault:function(t,e){return typeof t!==f?t:e},invokeCallbackArrayHelper:function(t){var e;return Array.isArray(t)&&(e=c[t[0]],"function"==typeof e)?e.apply(this,t.slice(1)):void 0},invokeCallbackArray:function(t){var e,n;if(Array.isArray(t)){if("string"==typeof t[0])return r.invokeCallbackArrayHelper(t);for(e=0,n=t.length;n>e;++e)r.invokeCallback(t[e])}},invokeCallback:function(t){return"function"==typeof t?t():"string"==typeof t&&c[t]?c[t]():r.invokeCallbackArray(t)},invokeEventCallbacks:function(t,e){var n,o,i=l[t];if(e)return this.invokeCallback(e);for(n=0,o=i.length;o>n;++n)this.invokeCallback(i[n].cb)},getScrollTop:function(){var t;return t=typeof window.pageYOffset!==f?window.pageYOffset:b.documentElement.scrollTop},getScrollLeft:function(){var t;return t=typeof window.pageXOffset!==f?window.pageXOffset:b.documentElement.scrollLeft},getWindowHeight:function(){return window.innerHeight||b.documentElement.clientHeight},getWindowWidth:function(){return window.innerWidth||b.documentElement.clientWidth},addEvtListener:function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},removeEvtListener:function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},documentIsReady:function(){return"complete"===b.readyState||"interactive"===b.readyState},evtPreventDefault:function(t){t.preventDefault?t.preventDefault():event&&(event.returnValue=!1)},extend:function(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},getStepTargetHelper:function(t){var e;return/^[#\.]/.test(t)?b.querySelector?b.querySelector(t):g?(e=jQuery(t),e.length?e[0]:null):d?(e=new d(t),e.length?e[0]:null):/^#[a-zA-Z][\w-_:.]*$/.test(t)?b.getElementById(t.substring(1)):null:b.getElementById(t)},getStepTarget:function(t){var e;if(!t||!t.target)return null;if("string"==typeof t.target)return t.target=r.getStepTargetHelper(t.target),t.target;if(Array.isArray(t.target)){var n,o;for(n=0,o=t.target.length;o>n;n++)if("string"==typeof t.target[n]&&(e=r.getStepTargetHelper(t.target[n])))return t.target=e,e;return null}return t.target},getI18NString:function(t){return s[t]||a[t]},setState:function(t,e,n){var o,i="";m?sessionStorage.setItem(t,e):(n&&(o=new Date,o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toGMTString()),b.cookie=t+"="+e+i+"; path=/")},getState:function(t){var e,n,o,i=t+"=",a=b.cookie.split(";");if(m)o=sessionStorage.getItem(t);else for(e=0;e<a.length;e++){for(n=a[e];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(i)){o=n.substring(i.length,n.length);break}}return o},clearState:function(t){m?sessionStorage.removeItem(t):this.setState(t,"",-1)}},r.addEvtListener(window,"load",u),l={next:[],prev:[],start:[],end:[],show:[],error:[],close:[]},c={},a={stepNums:null,nextBtn:"Next",prevBtn:"Back",doneBtn:"Done",skipBtn:"Skip",closeTooltip:"Close"},s={},o=function(t){this.init(t)},o.prototype={isShowing:!1,currStep:void 0,_createButton:function(t,e){var n=b.createElement("button"),o="hopscotch-nav-button";return n.id=t,e&&(n.innerHTML=e),o+=t.indexOf("prev")>=0?" prev":" next",r.addClass(n,o),n},setPosition:function(t){var e,n,o,i,a,s,l,c=6,u=r.getStepTarget(t),h=this.element,d=this.arrowEl;e=r.getPixelValue(t.width)||this.opt.bubbleWidth,o=r.valOrDefault(t.padding,this.opt.bubblePadding),r.removeClass(h,"fade-in-down fade-in-up fade-in-left fade-in-right"),!t.placement&&t.orientation&&(t.placement=t.orientation),i=u.getBoundingClientRect(),"top"===t.placement?(n=h.offsetHeight,a=i.top-n-this.opt.arrowWidth,s=i.left):"bottom"===t.placement?(a=i.bottom+this.opt.arrowWidth,s=i.left):"left"===t.placement?(a=i.top,s=i.left-e-2*o-2*c-this.opt.arrowWidth):"right"===t.placement&&(a=i.top,s=i.right+this.opt.arrowWidth),l="center"!==t.arrowOffset?r.getPixelValue(t.arrowOffset):t.arrowOffset,l?"top"===t.placement||"bottom"===t.placement?(d.style.top="",d.style.left="center"===l?e/2+o-d.offsetWidth/2+"px":l+"px"):("left"===t.placement||"right"===t.placement)&&(d.style.left="","center"===l?(n=n||h.offsetHeight,d.style.top=n/2+o-d.offsetHeight/2+"px"):d.style.top=l+"px"):(d.style.top="",d.style.left=""),"center"===t.xOffset?s=i.left+u.offsetWidth/2-e/2-o:s+=r.getPixelValue(t.xOffset),"center"===t.yOffset?(n=n||h.offsetHeight,a=i.top+u.offsetHeight/2-n/2-o):a+=r.getPixelValue(t.yOffset),t.fixedElement||(a+=r.getScrollTop(),s+=r.getScrollLeft()),h.style.position=t.fixedElement?"fixed":"absolute",h.style.top=a+"px",h.style.left=s+"px"},_initNavButtons:function(){var t=b.createElement("div");return this.prevBtnEl=this._createButton("hopscotch-prev",r.getI18NString("prevBtn")),this.nextBtnEl=this._createButton("hopscotch-next",r.getI18NString("nextBtn")),this.doneBtnEl=this._createButton("hopscotch-done",r.getI18NString("doneBtn")),this.ctaBtnEl=this._createButton("hopscotch-cta"),r.addClass(this.doneBtnEl,"hide"),t.appendChild(this.prevBtnEl),t.appendChild(this.ctaBtnEl),t.appendChild(this.nextBtnEl),t.appendChild(this.doneBtnEl),r.addEvtListener(this.prevBtnEl,"click",function(){p.prevStep(!0)}),r.addEvtListener(this.nextBtnEl,"click",function(){p.nextStep(!0)}),r.addEvtListener(this.doneBtnEl,"click",function(){p.endTour()}),t.className="hopscotch-actions",this.buttonsEl=t,this.containerEl.appendChild(t),this},_getCloseFn:function(){var t=this;return this.closeFn||(this.closeFn=function(e){t.opt.onClose&&r.invokeCallback(t.opt.onClose),t.opt.id&&!t.opt.isTourBubble?p.getCalloutManager().removeCallout(t.opt.id):t.destroy(),r.evtPreventDefault(e)}),this.closeFn},initCloseButton:function(){var t=b.createElement("a");return t.className="hopscotch-bubble-close",t.href="#",t.title=r.getI18NString("closeTooltip"),t.innerHTML=r.getI18NString("closeTooltip"),this.opt.isTourBubble?r.addEvtListener(t,"click",function(t){var e=p.getCurrStepNum(),n=p.getCurrTour(),o=e===n.steps.length-1;r.invokeEventCallbacks("close"),p.endTour(!0,o),t.preventDefault?t.preventDefault():event&&(event.returnValue=!1)}):r.addEvtListener(t,"click",this._getCloseFn()),r.valOrDefault(this.opt.showCloseButton,!0)||r.addClass(t,"hide"),this.closeBtnEl=t,this.containerEl.appendChild(t),this},_initArrow:function(){var t,e;return this.arrowEl=b.createElement("div"),this.arrowEl.className="hopscotch-bubble-arrow-container",e=b.createElement("div"),e.className="hopscotch-bubble-arrow-border",t=b.createElement("div"),t.className="hopscotch-bubble-arrow",this.arrowEl.appendChild(e),this.arrowEl.appendChild(t),this.element.appendChild(this.arrowEl),this},_setupCTAButton:function(t){var e=this;this._showButton(this.ctaBtnEl,!!t.showCTAButton),t.showCTAButton&&t.ctaLabel&&(this.ctaBtnEl.innerHTML=t.ctaLabel,this._ctaFn=function(){e.opt.isTourBubble||p.getCalloutManager().removeCallout(t.id),t.onCTA&&"function"==typeof t.onCTA&&t.onCTA()},r.addEvtListener(this.ctaBtnEl,"click",this._ctaFn))},_removeCTACallback:function(){this.ctaBtnEl&&this._ctaFn&&(r.removeEvtListener(this.ctaBtnEl,"click",this._ctaFn),this._ctaFn=null)},render:function(t,e,n,o){var i,a,s,l,c=this.element;return t?this.currStep=t:this.currStep&&(t=this.currStep),!t.placement&&t.orientation&&(t.placement=t.orientation),i=r.valOrDefault(t.showNextButton,this.opt.showNextButton),a=r.valOrDefault(t.showPrevButton,this.opt.showPrevButton),this.setTitle(t.title||""),this.setContent(t.content||""),this.opt.isTourBubble&&this.setNum(e),this.placement=t.placement,this.showPrevButton(this.prevBtnEl&&a&&e>0),this.showNextButton(this.nextBtnEl&&i&&!n),this.nextBtnEl.innerHTML=r.getI18NString(t.showSkip?"skipBtn":"nextBtn"),n?r.removeClass(this.doneBtnEl,"hide"):r.addClass(this.doneBtnEl,"hide"),this._setupCTAButton(t),this._setArrow(t.placement),s=r.getPixelValue(t.width)||this.opt.bubbleWidth,l=r.valOrDefault(t.padding,this.opt.bubblePadding),this.containerEl.style.width=s+"px",this.containerEl.style.padding=l+"px",c.style.zIndex=t.zindex||"","top"===t.placement?(c.style.top="-9999px",c.style.left="-9999px",r.removeClass(c,"hide"),this.setPosition(t),r.addClass(c,"hide")):this.setPosition(t),o&&o(!t.fixedElement),this},setTitle:function(t){return t?(this.titleEl.innerHTML=t,r.removeClass(this.titleEl,"hide")):r.addClass(this.titleEl,"hide"),this},setContent:function(t){return t?(this.contentEl.innerHTML=t,r.removeClass(this.contentEl,"hide")):r.addClass(this.contentEl,"hide"),this},setNum:function(t){var e=r.getI18NString("stepNums");e&&t<e.length?t=e[t]:t+=1,this.numberEl.innerHTML=t},_setArrow:function(t){r.removeClass(this.arrowEl,"down up right left"),"top"===t?r.addClass(this.arrowEl,"down"):"bottom"===t?r.addClass(this.arrowEl,"up"):"left"===t?r.addClass(this.arrowEl,"right"):"right"===t&&r.addClass(this.arrowEl,"left")},_getArrowDirection:function(){return"top"===this.placement?"down":"bottom"===this.placement?"up":"left"===this.placement?"right":"right"===this.placement?"left":void 0},show:function(){var t=this,e="fade-in-"+this._getArrowDirection(),n=1e3;return r.removeClass(this.element,"hide"),r.addClass(this.element,e),setTimeout(function(){r.removeClass(t.element,"invisible")},50),setTimeout(function(){r.removeClass(t.element,e)},n),this.isShowing=!0,this},hide:function(t){var e=this.element;return t=r.valOrDefault(t,!0),e.style.top="",e.style.left="",t?(r.addClass(e,"hide"),r.removeClass(e,"invisible")):(r.removeClass(e,"hide"),r.addClass(e,"invisible")),r.removeClass(e,"animate fade-in-up fade-in-down fade-in-right fade-in-left"),this.isShowing=!1,this},_showButton:function(t,e,n){var o="hide";n&&(o="hide-all"),typeof e===f&&(e=!0),e?r.removeClass(t,o):r.addClass(t,o)},showPrevButton:function(t){this._showButton(this.prevBtnEl,t)},showNextButton:function(t){this._showButton(this.nextBtnEl,t)},showCloseButton:function(t){this._showButton(this.closeBtnEl,t)},destroy:function(){var t=this.element;t&&t.parentNode.removeChild(t),this.closeBtnEl&&r.removeEvtListener(this.closeBtnEl,"click",this._getCloseFn()),this.ctaBtnEl&&this.onCTA&&this._removeCTACallback()},updateButtons:function(){this.showPrevButton(this.opt.showPrevButton),this.showNextButton(this.opt.showNextButton),this.showCloseButton(this.opt.showCloseButton),this.prevBtnEl.innerHTML=r.getI18NString("prevBtn"),this.nextBtnEl.innerHTML=r.getI18NString("nextBtn"),this.doneBtnEl.innerHTML=r.getI18NString("doneBtn")},init:function(t){var e,n,o,i=b.createElement("div"),a=b.createElement("div"),s=b.createElement("div"),l=this,c=!1;this.element=i,this.containerEl=a,this.titleEl=b.createElement("h3"),this.contentEl=b.createElement("div"),r.addClass(this.titleEl,"hopscotch-title"),r.addClass(this.contentEl,"hopscotch-content"),o={showPrevButton:h.showPrevButton,showNextButton:h.showNextButton,bubbleWidth:h.bubbleWidth,bubblePadding:h.bubblePadding,arrowWidth:h.arrowWidth,showNumber:!0,isTourBubble:!0},t=typeof t===f?{}:t,r.extend(o,t),this.opt=o,i.className="hopscotch-bubble animated",a.className="hopscotch-bubble-container",o.isTourBubble||(i.className+=" hopscotch-callout"),o.isTourBubble?(this.numberEl=b.createElement("span"),this.numberEl.className="hopscotch-bubble-number",a.appendChild(this.numberEl)):r.addClass(i,"no-number"),s.appendChild(this.titleEl),s.appendChild(this.contentEl),s.className="hopscotch-bubble-content",a.appendChild(s),i.appendChild(a),this._initNavButtons(),this.initCloseButton(),this._initArrow(),e=function(){!c&&l.isShowing&&(c=!0,setTimeout(function(){l.setPosition(l.currStep),c=!1},100))},r.addEvtListener(window,"resize",e),this.hide(),r.documentIsReady()?b.body.appendChild(i):(b.addEventListener?(n=function(){b.removeEventListener("DOMContentLoaded",n),window.removeEventListener("load",n),b.body.appendChild(i)},b.addEventListener("DOMContentLoaded",n,!1)):(n=function(){"complete"===b.readyState&&(b.detachEvent("onreadystatechange",n),window.detachEvent("onload",n),b.body.appendChild(i))},b.attachEvent("onreadystatechange",n)),r.addEvtListener(window,"load",n))}},i=function(){var t={};this.createCallout=function(e){var n;if(!e.id)throw"Must specify a callout id.";if(t[e.id])throw"Callout by that id already exists. Please choose a unique id.";return e.showNextButton=e.showPrevButton=!1,e.isTourBubble=!1,n=new o(e),t[e.id]=n,e.target&&n.render(e,null,null,function(){n.show()}),n},this.getCallout=function(e){return t[e]},this.removeAllCallouts=function(){var e;for(e in t)t.hasOwnProperty(e)&&this.removeCallout(e)},this.removeCallout=function(e){var n=t[e];t[e]=null,n&&n.destroy()}},n=function(t){var e,n,a,u,d,p,m,$,C=this,w=function(t){return e||(e=new o(a)),t&&(r.extend(e.opt,{bubblePadding:k("bubblePadding"),bubbleWidth:k("bubbleWidth"),showNextButton:k("showNextButton"),showPrevButton:k("showPrevButton"),showCloseButton:k("showCloseButton"),arrowWidth:k("arrowWidth")}),e.updateButtons()),e},k=function(t){return"undefined"==typeof a?h[t]:r.valOrDefault(a[t],h[t])},x=function(){var t;return t=0>d||d>=u.steps.length?null:u.steps[d]},E=function(){C.nextStep()},y=function(t){var e,n,o,i,a,s,l=w(),c=l.element,u=r.getPixelValue(c.style.top),h=u+r.getPixelValue(c.offsetHeight),d=r.getStepTarget(x()),p=d.getBoundingClientRect(),v=p.top+r.getScrollTop(),m=p.bottom+r.getScrollTop(),$=v>u?u:v,C=h>m?h:m,E=r.getScrollTop(),y=E+r.getWindowHeight(),S=$-k("scrollTopMargin");$>=E&&($<=E+k("scrollTopMargin")||y>=C)?t&&t():k("smoothScroll")?typeof YAHOO!==f&&typeof YAHOO.env!==f&&typeof YAHOO.env.ua!==f&&typeof YAHOO.util!==f&&typeof YAHOO.util.Scroll!==f?(e=YAHOO.env.ua.webkit?b.body:b.documentElement,o=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:void 0,n=new YAHOO.util.Scroll(e,{scroll:{to:[0,S]}},k("scrollDuration")/1e3,o),n.onComplete.subscribe(t),n.animate()):g?jQuery("body, html").animate({scrollTop:S},k("scrollDuration"),t):(0>S&&(S=0),i=E>$?-1:1,a=Math.abs(E-S)/(k("scrollDuration")/10),(s=function(){var e=r.getScrollTop(),n=e+i*a;return i>0&&n>=S||0>i&&S>=n?(n=S,t&&t(),void window.scrollTo(0,n)):(window.scrollTo(0,n),r.getScrollTop()===e?void(t&&t()):void setTimeout(s,10))})()):(window.scrollTo(0,S),t&&t())},S=function(t,e){var n,o,i;d+t>=0&&d+t<u.steps.length?(d+=t,o=x(),i=function(){n=r.getStepTarget(o),n?e(d):(r.invokeEventCallbacks("error"),S(t,e))},o.delay?setTimeout(i,o.delay):i()):e(-1)},T=function(t,e){var n,o,i,a,s=w(),l=this;if(s.hide()._removeCTACallback(),t=r.valOrDefault(t,!0),n=x(),o=n,i=e>0?o.multipage:d>0&&u.steps[d-1].multipage,a=function(n){var a;return-1===n?this.endTour(!0):(t&&(a=e>0?r.invokeEventCallbacks("next",o.onNext):r.invokeEventCallbacks("prev",o.onPrev)),i?void r.setState(k("cookieName"),u.id+":"+d,1):(a=r.valOrDefault(a,!0),void(a?this.showStep(n):this.endTour(!1))))},!i&&k("skipIfNoElement"))S(e,function(t){a.call(l,t)});else if(d+e>=0&&d+e<u.steps.length){if(d+=e,n=x(),!r.getStepTarget(n)&&!i)return r.invokeEventCallbacks("error"),this.endTour(!0,!1);a.call(this,d)}return this},B=function(t){var e,n,o,i={};for(e in t)t.hasOwnProperty(e)&&"id"!==e&&"steps"!==e&&(i[e]=t[e]);return $.call(this,i,!0),n=r.getState(k("cookieName")),n&&(o=n.split(":"),p=o[0],m=o[1],m=parseInt(m,10)),this},A=function(t,e){var n,o;if(d=t||0,n=x(),o=r.getStepTarget(n))return void e(d);if(!o){if(r.invokeEventCallbacks("error"),k("skipIfNoElement"))return void S(1,e);d=-1,e(d)}},N=function(t){var e,n,o=u.steps[t],i=u.steps,a=i.length,s=u.id+":"+t,l=w(),c=r.getStepTarget(o);n=function(){l.show(),r.invokeEventCallbacks("show",o.onShow)},d=t,l.hide(!1),e=t===a-1,l.render(o,t,e,function(t){t?y(n):n(),o.nextOnTargetClick&&r.addEvtListener(c,"click",E)}),r.setState(k("cookieName"),s,1)},O=function(t){t&&this.configure(t)};this.getCalloutManager=function(){return typeof n===f&&(n=new i),n},this.startTour=function(t,e){var n,o=this;if(u||(u=t,B.call(this,t)),typeof e!==f){if(e>=u.steps.length)throw"Specified step number out of bounds.";d=e}return r.documentIsReady()?(d||u.id!==p||typeof m===f?d||(d=0):d=m,A(d,function(t){var e=-1!==t&&r.getStepTarget(u.steps[t]);return e?(r.invokeEventCallbacks("start"),n=w(),n.hide(!1),o.isActive=!0,void(r.getStepTarget(x())?o.showStep(t):(r.invokeEventCallbacks("error"),k("skipIfNoElement")&&o.nextStep(!1)))):void o.endTour(!1,!1)}),this):(v=!0,this)},this.showStep=function(t){var e=u.steps[t];return e.delay?setTimeout(function(){N(t)},e.delay):N(t),this},this.prevStep=function(t){return T.call(this,t,-1),this},this.nextStep=function(t){var e=x(),n=r.getStepTarget(e);return e.nextOnTargetClick&&r.removeEvtListener(n,"click",E),T.call(this,t,1),this},this.endTour=function(t,e){var n=w();return t=r.valOrDefault(t,!0),e=r.valOrDefault(e,!0),d=0,m=void 0,n.hide(),t&&r.clearState(k("cookieName")),this.isActive&&(this.isActive=!1,u&&e&&r.invokeEventCallbacks("end")),this.removeCallbacks(null,!0),this.resetDefaultOptions(),u=null,this},this.getCurrTour=function(){return u},this.getCurrTarget=function(){return r.getStepTarget(x())},this.getCurrStepNum=function(){return d},this.listen=function(t,e,n){return t&&l[t].push({cb:e,fromTour:n}),this},this.unlisten=function(t,e){var n,o,i=l[t];for(n=0,o=i.length;o>n;++n)i[n]===e&&i.splice(n,1);return this},this.removeCallbacks=function(t,e){var n,o,i,a;for(a in l)if(!t||t===a)if(e)for(n=l[a],o=0,i=n.length;i>o;++o)n[o].fromTour&&(n.splice(o--,1),--i);else l[a]=[];return this},this.registerHelper=function(t,e){"string"==typeof t&&"function"==typeof e&&(c[t]=e)},this.unregisterHelper=function(t){c[t]=null},this.invokeHelper=function(t){var e,n,o=[];for(e=1,n=arguments.length;n>e;++e)o.push(arguments[e]);c[t]&&c[t].call(null,o)},this.setCookieName=function(t){return a.cookieName=t,this},this.resetDefaultOptions=function(){return a={},this},this.resetDefaultI18N=function(){return s={},this},this.getState=function(){return r.getState(k("cookieName"))},$=function(t,e){var n,o,i,l,c=["next","prev","start","end","show","error","close"];for(a||this.resetDefaultOptions(),r.extend(a,t),t&&r.extend(s,t.i18n),i=0,l=c.length;l>i;++i)o="on"+c[i].charAt(0).toUpperCase()+c[i].substring(1),t[o]&&this.listen(c[i],t[o],e);return n=w(!0),this},this.configure=function(t){return $.call(this,t,!1)},O.call(this,t)},p=new n,t[e]=p)}(window,"hopscotch"),Locastyle.prototype.guidedTour=function(){"use strict";function t(t){e(t),s()}function e(t){r=t,$(l.selectors.open).on({click:n}),$(l.selectors.init).on({click:o}),$(l.selectors.close).on({click:i})}function n(){return $(l.selectors.tour).toggleClass("on"),$(l.selectors.init).focus().attr("tabindex","-1"),!1}function o(){hopscotch.endTour(),hopscotch.startTour(r,0),a(),i()}function i(){$(l.selectors.tour).removeClass("on")}function a(){var t=hopscotch.getCurrTour().steps.length;$("body").off("keyup").on("keyup",function(e){var n=e.keyCode;hopscotch.getCurrStepNum()<t&&hopscotch.getState()&&(39===n&&hopscotch.nextStep(),37===n&&hopscotch.prevStep()),27===n&&hopscotch.endTour()})}function s(){"true"!=$.cookie("cookie_tour")&&($(l.selectors.open).click(),$.cookie("cookie_tour","true"))}var r,l={selectors:{open:".lnk-suggestions",init:".btn-tour",close:".btn-close",tour:".guided-tour"}};return{init:t,openWelcomeTour:n,closeWelcomeTour:i}}(),Locastyle.prototype.passwordStrength=function(){"use strict";function t(){e()}function e(){$("input[data-component=password-strength]").each(function(){var t=$(this).data("monitor-id"),e=$("#"+t);t&&n(this,e)})}function n(t,e){o(t,e,$(t).val()),$(t).on("keyup",function(){o(t,e,$(t).val())})}function o(t,e,n){i(e),$(e).addClass(a(n))}function i(t){var e=["empty","weak","medium","good","strong"];$.each(e,function(){$(t).removeClass(this)})}function a(t){return r(t)&&l(t)&&c(t)&&u(t)&&h(t)?"strong":r(t)&&l(t)&&c(t)&&u(t)?"good":r(t)&&l(t)&&c(t)&&h(t)?"good":r(t)&&l(t)&&c(t)?"medium":r(t)?"weak":s(t)?"weak":"empty"}function s(t){return t.length>0}function r(t){return t.length>7}function l(t){var e=new RegExp(/[0-9]/);return t.match(e)}function c(t){var e=new RegExp(/[a-z]/);return t.match(e)}function u(t){var e=new RegExp(/[A-Z]/);return t.match(e)}function h(t){var e=new RegExp(/\W/);return t.match(e)}function d(t){return a(t)}return{init:t,checkIt:d}}(),Locastyle.prototype.stepForm=function(){"use strict";function t(){e()}function e(){jQuery().validate&&$(".accordion").each(function(){$(this).find(".accordion-toggle").on("click",function(t){$(this).parents("form").valid()||t.preventDefault()})})}return{init:t}}(),Locastyle.prototype.sumValues=function(){"use strict";function t(){$(i.selector.container).each(function(t,o){var a=$(this);a=$(o),a.find(i.selector.item).each(function(t,o){var i=$(o);e(i),n(a,i)}),a.find(i.selector.elemTrigger).eq(0).trigger("change")})}function e(t){t.children("span").height(t.height()-20),t.children(".sumValue").css("line-height",t.height()-20+"px")}function n(t,e){e.find(i.selector.elemTrigger).on("change",function(){var e=$(this).parents(i.selector.item),n=$(this);$('[name="'+n.attr("name")+'"]',t).parents(i.selector.item).removeClass(i.itemActiveClass),e.toggleClass(i.itemActiveClass,n.prop("checked")),o(t)})}function o(t){var e=0,n="";t.find(":checked").each(function(t,o){e+=$(o).data("sumvalue"),n+=(t>0?i.textLabelSeparator:"")+$(o).data("sumlabel")});var o=$(i.selector.sumTotal,t),a=o.data("sumpattern");o.text(a.replace(/\{\{val\}\}/,e)),$(i.selector.sumText,t).text(""===n?i.defaultText:n)}var i={selector:{container:".ls-sum-values-container",item:".sumItem",elemTrigger:":radio, :checkbox",sumTotal:".sumResumeTotal",sumText:".sumResumeText"},itemActiveClass:"active",defaultText:"Nenhuma op\xe7\xe3o selecionada",textLabelSeparator:" + "};return{init:t}}(),$(function(){accessMenu(),subMenuAccess(),$("#menuPrincipal li > a").attr("tabindex","2"),$(".btn, .tabs a").attr("tabindex","3"),$("#menuPrincipal").attr("role","navigation"),$("#menuPrincipal li a").attr("role","menuitem"),$("#menuPrincipal li > a").attr("tabindex","2"),$(".pathWays").attr("role","navigation"),$("#footer").attr("role","contentinfo"),$(".alert").attr("role","alert"),$("a.btn, .modal-header .close").attr("role","button"),$(".boxGray").attr("role","region"),$(".boxGray h2").attr("role","presentation"),$("#header").attr("role","banner"),$(".content").attr("role","main"),$(".sidebar").attr("role","complementary"),$("input.required").attr("aria-required","true"),$(".lnkCoverAll").attr("tabindex","3"),$(".lnkCoverAll .btn").attr("tabindex","0"),$(".tabs").attr("role","tablist"),$(".tabs li a").attr({role:"tab","aria-selected":"false",tabindex:3}),$(".tabs li.active a").attr("aria-selected","true"),$(".tabs li.active a").attr("tabindex","3"),$(".boxCollapse header[data-target]").each(function(){var t=$(this).find("h4").text(),e=$(this).data("target");$(this).prepend('<a href="#" role="button" aria-haspopup="true" aria-controls="'+e+'" aria-label="'+t+'" title="'+t+'" class="lnkCollapse" tabindex="3"></a>')}),$(".collapse").find('[tabindex="3"]').attr("tabindex","0"),$(".collapse.in").find('[tabindex="0"]').attr("tabindex","3"),$(".onFocus, .modal").attr("tabindex","-1").focus(),$(".lnkContent").on("click",function(t){t.preventDefault(),$(".titleContent").attr("tabindex","-1").focus().css("outline","none"),$("html, body").animate({scrollTop:$(".titleContent").offset().top},500)}),$(".accessibility a").focus(function(){$(this).parent().addClass("show")}).blur(function(){$(this).parent().removeClass("show")}),$(".dropdown-menu li:last-child a").blur(function(){$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").click(),$(".serviceName a").focus()}),$(".shortcutBox a").focus(function(){$(this).parents("div:first").addClass("active")}).blur(function(){$(".shortcutBox > div").removeClass("active")})});
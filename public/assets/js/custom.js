$(function(){var navbar=$('.header-inner');$(window).scroll(function(){if($(window).scrollTop()<=40){navbar.removeClass('navbar-scroll');}else{navbar.addClass('navbar-scroll');}});});window.addEventListener("resize",function(){"use strict";window.location.reload();});document.addEventListener("DOMContentLoaded",function(){if(window.innerWidth<992){document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){everydropdown.addEventListener('hidden.bs.dropdown',function(){this.querySelectorAll('.submenu').forEach(function(everysubmenu){everysubmenu.style.display='none';});})});document.querySelectorAll('.dropdown-menu a').forEach(function(element){element.addEventListener('click',function(e){let nextEl=this.nextElementSibling;if(nextEl&&nextEl.classList.contains('submenu')){e.preventDefault();if(nextEl.style.display=='block'){nextEl.style.display='none';}else{nextEl.style.display='block';}}});})}});window.addEventListener("resize",function(){"use strict";window.location.reload();});document.addEventListener("DOMContentLoaded",function(){if(window.innerWidth>992){document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){everyitem.addEventListener('mouseover',function(e){let el_link=this.querySelector('a[data-bs-toggle]');if(el_link!=null){let nextEl=el_link.nextElementSibling;el_link.classList.add('show');nextEl.classList.add('show');}});everyitem.addEventListener('mouseleave',function(e){let el_link=this.querySelector('a[data-bs-toggle]');if(el_link!=null){let nextEl=el_link.nextElementSibling;el_link.classList.remove('show');nextEl.classList.remove('show');}})});}});$(document).ready(function(){var fixHeight=function(){$('.navbar-nav').css('max-height',document.documentElement.clientHeight-150);};fixHeight();$(window).resize(function(){fixHeight();});$('.navbar .navbar-toggler').on('click',function(){fixHeight();});$('.navbar-toggler, .overlay').on('click',function(){$('.mobileMenu, .overlay').toggleClass('open');});});$(document).on('click','a.nav-icon-list',function(e){e.preventDefault();$('.lecture-sidebar').toggle();});$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip();});$('.leave_a_comment, .all_comments, .leave_a_reply').on('click',function(){$(this).parents(".post-meta, .comment-meta").siblings(".comment_wrapper").slideToggle("slow");});$('.react-button__share').on('click',function(){$('.popup-wrapper2').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper2').removeClass('active');});$('.add_post').on('click',function(){$('.popup-wrapper1').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper1').removeClass('active');});$('.add_course_popup').on('click',function(){$('.popup-wrapper3').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper3').removeClass('active');});$('.add-section-title').on('click',function(){$('.popup-wrapper4').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper4').removeClass('active');});$('.add_lecture').on('click',function(){$('.popup-wrapper5').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper5').removeClass('active');});$('.add_quiz').on('click',function(){$('.popup-wrapper6').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper6').removeClass('active');});$('.add_assignment').on('click',function(){$('.popup-wrapper7').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper7').removeClass('active');});$('.remove_connection').on('click',function(){$('.popup-wrapper9').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper9').removeClass('active');});$('.notstactn').on('click',function(){$('.popup-wrapper10').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper10').removeClass('active');});$('.addpageactn').on('click',function(){$('.popup-wrapper11').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper11').removeClass('active');});$('.exportbtn').on('click',function(){$('.popup-wrapper12').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper12').removeClass('active');});$('.reportbtn').on('click',function(){$('.popup-wrapper13').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper13').removeClass('active');});$('.deletevbtn').on('click',function(){$('.popup-wrapper14').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper14').removeClass('active');});$('.cnclbtn').on('click',function(){$('.popup-wrapper15').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper15').removeClass('active');});$('.wthdrwbtn').on('click',function(){$('.popup-wrapper16').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper16').removeClass('active');});$('.gowthfdsbtn').on('click',function(){$('.popup-wrapper17').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper17').removeClass('active');});$('.apply_job_btn').on('click',function(){$('.popup-wrapper18').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper18').removeClass('active');});$('.add_item_faq').on('click',function(){$('.popup-wrapper19').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper19').removeClass('active');});$('.view-discount_history').on('click',function(){$('.popup-wrapper20').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper20').removeClass('active');});$('.delete-item-btn').on('click',function(){$('.popup-wrapper21').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper21').removeClass('active');});$('.course-delete-link').on('click',function(){$('.popup-wrapper22').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper22').removeClass('active');});$('.add-rating-popup').on('click',function(){$('.popup-wrapper23').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper23').removeClass('active');});$('.certi_us_citi_btn').on('click',function(){$('.popup-wrapper24').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper24').removeClass('active');});$('.certi_non_us_citi_indi_btn').on('click',function(){$('.popup-wrapper25').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper25').removeClass('active');});$('.certi_non_us_citi_corpo_btn').on('click',function(){$('.popup-wrapper26').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper26').removeClass('active');});$('.send-money-btn').on('click',function(){$('.popup-wrapper27').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper27').removeClass('active');});$('.play-btn').on('click',function(){$('.popup-wrapper28').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper28').removeClass('active');});$('.create_group_chat').on('click',function(){$('.popup-wrapper29').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper29').removeClass('active');});$('.add-gst-btn').on('click',function(){$('.popup-wrapper30').addClass('active');return false;});$('.popup-closed, .cancel').on('click',function(){$('.popup-wrapper30').removeClass('active');});$(document).ready(function(){$('input[type="radio"]').click(function(){var inputValue=$(this).attr("value");var targetBox=$("."+inputValue);$(".share-box").not(targetBox).hide();$(targetBox).show();});});$(document).ready(function(){$('input[type="radio"]').click(function(){var inputValue=$(this).attr("value");var targetBox=$("."+inputValue);$(".video-box").not(targetBox).hide();$(targetBox).show();});});$(document).ready(function(){$('input[type="radio"]').click(function(){var inputValue=$(this).attr("value");var targetBox=$("."+inputValue);$(".quiz-box").not(targetBox).hide();$(targetBox).show();});});$(document).ready(function(){$('input[type="radio"]').click(function(){var inputValue=$(this).attr("value");var targetBox=$("."+inputValue);$(".intro-box").not(targetBox).hide();$(targetBox).show();});});$(document).ready(function(){$('.actve12').click(function(){var inputValue=$(this).attr("value");var targetBox=$("."+inputValue);$(".report-box").not(targetBox).hide();$(targetBox).show();});});$(".tags-container").each(function(){var keywordInput=$(this).find(".tags-input");var keywordsList=$(this).find(".tags-list");function addKeyword(){var $newKeyword=$("<span class='tag'><span class='tag-remove'></span><span class='tag-text'>"+keywordInput.val()+"</span></span>");keywordsList.append($newKeyword).trigger('resizeContainer');keywordInput.val("");}
keywordInput.on('keyup',function(e){if((e.keyCode==13)&&(keywordInput.val()!=="")){addKeyword();}});$('.tags-input-button').on('click',function(){if((keywordInput.val()!=="")){addKeyword();}});$(document).on("click",".tag-remove",function(){$(this).parent().addClass('tag-removed');function removeFromMarkup(){$(".tag-removed").remove();}
setTimeout(removeFromMarkup,500);keywordsList.css({'height':'auto'}).height();});keywordsList.on('resizeContainer',function(){var heightnow=$(this).height();var heightfull=$(this).css({'max-height':'auto','height':'auto'}).height();$(this).css({'height':heightnow}).animate({'height':heightfull},200);});$(window).on('resize',function(){keywordsList.css({'height':'auto'}).height();});$(window).on('load',function(){var keywordCount=$('.tags-list').children("span").length;if(keywordCount>0){keywordsList.css({'height':'auto'}).height();}});});var uploadButton={$button:$('.uploadBtn-input'),$nameField:$('.uploadBtn-file-name')};uploadButton.$button.on('change',function(){_populateFileField($(this));});function _populateFileField($button){var selectedFile=[];for(var i=0;i<$button.get(0).files.length;++i){selectedFile.push($button.get(0).files[i].name+'<br>');}
uploadButton.$nameField.html(selectedFile);}
function Checkbox(elem){this.elem=elem;this.checked=elem.dataset.checked;elem.addEventListener('click',e=>{this.checked=!this.checked;this.render();});}
Checkbox.prototype.render=function(){this.elem.setAttribute('data-checked',this.checked);}
function initCheckboxes(elems){for(let i=0;i<elems.length;i++){new Checkbox(elems[i]);}}
initCheckboxes(document.querySelectorAll('.checkbox'));$('.msgngup').on('click',function(){$('.chat-box').addClass("show");return false;});$('.close-msg').on('click',function(){$('.chat-box').removeClass("show");return false;});$('.moreless-btn').click(function(){$('.moretext').slideToggle();if($('.moreless-btn').text()=="See more"){$(this).text("See less")}else{$(this).text("See more")}});$(".endyrs145").show();$(".exp_check").click(function(){if($(this).is(":checked")){$(".endyrs145").hide();}else{$(".endyrs145").show();}});var headers=$('#accordion .accordion-header');var contentAreas=$('#accordion .ui-accordion-content ').hide().first().show().end();var expandLink=$('.accordion-expand-all');headers.click(function(){contentAreas.slideUp();$(this).next().slideDown();expandLink.text('Expand all').data('isAllOpen',false);return false;});expandLink.click(function(){var isAllOpen=!$(this).data('isAllOpen');console.log({isAllOpen:isAllOpen,contentAreas:contentAreas})
contentAreas[isAllOpen?'slideDown':'slideUp']();expandLink.text(isAllOpen?'Collapse All':'Expand all').data('isAllOpen',isAllOpen);});$(document).ready(function(){$('.rstars li').on('mouseover',function(){var onStar=parseInt($(this).data('value'),10);$(this).parent().children('li.star').each(function(e){if(e<onStar){$(this).addClass('hover');}
else{$(this).removeClass('hover');}});}).on('mouseout',function(){$(this).parent().children('li.star').each(function(e){$(this).removeClass('hover');});});$('.rstars li').on('click',function(){var onStar=parseInt($(this).data('value'),10);var stars=$(this).parent().children('li.star');for(i=0;i<stars.length;i++){$(stars[i]).removeClass('selected');}
for(i=0;i<onStar;i++){$(stars[i]).addClass('selected');}
var ratingValue=parseInt($('.rstars li.selected').last().data('value'),10);var msg="";if(ratingValue>1){msg="Thanks! You rated this "+ratingValue+" stars.";}
else{msg="We will improve ourselves. You rated this "+ratingValue+" stars.";}
responseMessage(msg);});});function responseMessage(msg){$('.success-box').fadeIn(200);$('.success-box div.text-message').html("<span>"+msg+"</span>");}
jQuery(document).ready(function(){jQuery('.custom-period-btn').on('click',function(event){jQuery('.custom-period-content').toggle('show');});});$(document).ready(function(){$("select").change(function(){$(this).find("option:selected").each(function(){var optionValue=$(this).attr("value");if(optionValue){$(".exclusivity-box").not("."+optionValue).hide();$("."+optionValue).show();}else{$(".exclusivity-box").hide();}});}).change();});$(document).ready(function(){$("select").change(function(){$(this).find("option:selected").each(function(){var optionValue=$(this).attr("value");if(optionValue){$(".withdrawal-box").not("."+optionValue).hide();$("."+optionValue).show();}else{$(".withdrawal-box").hide();}});}).change();});jQuery(document).ready(function(){jQuery('.add-money-btn').on('click',function(event){jQuery('.add_money-content').toggle('show');});});$('.learning_slider').owlCarousel({loop:false,margin:30,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.newest_slider').owlCarousel({loop:false,margin:30,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.bestsellers_slider').owlCarousel({loop:false,margin:30,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.ppl_slider').owlCarousel({loop:false,margin:15,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.suggest_slider').owlCarousel({loop:false,margin:15,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.hash_slider').owlCarousel({loop:false,margin:15,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.group_slider').owlCarousel({loop:false,margin:15,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:2},1200:{items:3},1400:{items:3}}})
$('.evtcate_slider').owlCarousel({loop:false,margin:10,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:2},600:{items:2},800:{items:3},1000:{items:4},1200:{items:5},1400:{items:6}}})
$('.related_products_slider').owlCarousel({loop:false,margin:30,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:2},800:{items:2},1000:{items:3},1200:{items:3},1400:{items:4}}})
$('.related_courses_slider').owlCarousel({loop:false,margin:30,nav:true,dots:false,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:1},800:{items:2},1000:{items:3},1200:{items:3},1400:{items:4}}})
window.oncontextmenu=function(){return false;}
$(document).keydown(function(event){if(event.keyCode==123){return false;}
else if((event.ctrlKey&&event.shiftKey&&event.keyCode==73)||(event.ctrlKey&&event.shiftKey&&event.keyCode==74)){return false;}});
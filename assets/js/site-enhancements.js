(function(){
  var phone='06 52 24 66 47';
  function makeButton(){
    var existing=document.getElementById('chat-btn');
    if(existing)return existing;
    var btn=document.createElement('button');
    btn.className='chat-btn';
    btn.id='chat-btn';
    btn.type='button';
    btn.setAttribute('aria-label','Contact rapide');
    btn.setAttribute('data-gtm-event','open_popup');
    btn.setAttribute('data-location','floating_button');
    btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span class="chat-badge">1</span>';
    document.body.appendChild(btn);
    return btn;
  }

  function makePopup(){
    var existing=document.getElementById('lead-popup');
    if(existing)return {overlay:existing,created:false};
    var overlay=document.createElement('div');
    overlay.className='popup-overlay';
    overlay.id='lead-popup';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-labelledby','popup-title');
    overlay.innerHTML='<div class="popup-modal"><div class="popup-chat-head"><span class="popup-chat-avatar"><img src="/assets/images/acdj-logo.png" alt=""></span><div><div class="popup-chat-title" id="popup-title">Une question ?</div><div class="popup-chat-sub">Je vous r&eacute;ponds directement</div></div><button class="popup-close" id="popup-close" aria-label="Fermer" type="button">&times;</button></div><div class="popup-chat-body"><div class="popup-message"><img src="/assets/images/acdj-logo.png" alt=""><p>Votre message arrive sur mon t&eacute;l&eacute;phone. D&eacute;crivez le souci, je vous rappelle d&egrave;s que je suis disponible.</p></div><form class="form popup-chat-form" action="/api/devis" method="post" data-devis-form data-floating-contact-form><div class="hp-field" aria-hidden="true" style="display:none"><input name="website" type="text" tabindex="-1" autocomplete="off"></div><input type="hidden" name="service" value="Rappel popup site"><div class="field"><label class="sr-only" for="floating-nom">Nom</label><input id="floating-nom" name="nom" type="text" autocomplete="name" placeholder="Votre nom" required></div><div class="field"><label class="sr-only" for="floating-tel">T&eacute;l&eacute;phone</label><input id="floating-tel" name="tel" type="tel" autocomplete="tel" placeholder="06 52 24 66 47" required></div><div class="field"><label class="sr-only" for="floating-message">Message</label><textarea id="floating-message" name="message" rows="4" placeholder="Votre message" required></textarea></div><label class="popup-consent"><input name="consentement" type="checkbox" checked required><span>J&apos;accepte d&apos;&ecirc;tre recontact&eacute; par t&eacute;l&eacute;phone ou e-mail pour cette demande.</span></label><button type="submit" class="btn btn-primary" data-gtm-event="submit_popup" data-location="popup globale">Envoyer</button><p class="form-status" data-form-status role="status" aria-live="polite" hidden></p><p class="formnote">Pas d&apos;engagement. Diagnostic gratuit.</p></form></div></div>';
    document.body.appendChild(overlay);
    return {overlay:overlay,created:true};
  }

  function bindPopupForm(form,btn){
    if(!form||form.dataset.floatingBound||!window.fetch||!window.URLSearchParams)return;
    form.dataset.floatingBound='true';
    var status=form.querySelector('[data-form-status]');
    var submit=form.querySelector('button[type="submit"]');
    var defaultSubmitText=submit?submit.textContent:'';
    function setStatus(type,message){
      if(!status)return;
      status.hidden=false;
      status.className='form-status '+type;
      status.textContent=message;
    }
    form.addEventListener('submit',function(event){
      event.preventDefault();
      if(!form.checkValidity()){form.reportValidity();return;}
      var payload=new URLSearchParams();
      var data=new FormData(form);
      data.forEach(function(value,key){payload.append(key,value);});
      if(submit){submit.disabled=true;submit.textContent='Envoi...';}
      if(status){status.hidden=true;status.textContent='';}
      fetch(form.action,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body:payload.toString()})
        .then(function(r){return r.json().catch(function(){return{};}).then(function(b){if(!r.ok)throw new Error(b.message||"Erreur d'envoi.");return b;});})
        .then(function(b){
          form.reset();
          setStatus('success',b.message||'Votre demande a bien ete envoyee.');
          sessionStorage.setItem('chat_submitted','1');
          if(btn){btn.classList.remove('visible');btn.style.pointerEvents='none';}
        })
        .catch(function(e){setStatus('error',e.message||"La demande n'a pas pu etre envoyee. Appelez le "+phone+".");})
        .finally(function(){if(submit){submit.disabled=false;submit.textContent=defaultSubmitText;}});
    });
  }

  function initFloatingContact(){
    if(!document.body)return;
    var btn=makeButton();
    var popup=makePopup();
    var overlay=popup.overlay;
    var closeBtn=overlay.querySelector('.popup-close');
    function openModal(){
      overlay.classList.add('open');
      var first=overlay.querySelector('input[name="nom"]');
      if(first)window.setTimeout(function(){first.focus();},80);
      if(window.dataLayer)window.dataLayer.push({event:'popup_click_open',location:'floating_button'});
    }
    function closeModal(){overlay.classList.remove('open');}
    if(!btn.dataset.floatingBound){
      btn.dataset.floatingBound='true';
      btn.addEventListener('click',openModal);
    }
    if(!overlay.dataset.floatingBound){
      overlay.dataset.floatingBound='true';
      if(closeBtn)closeBtn.addEventListener('click',closeModal);
      overlay.addEventListener('click',function(e){if(e.target===overlay)closeModal();});
      document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
    }
    if(popup.created)bindPopupForm(overlay.querySelector('[data-floating-contact-form]'),btn);
    if(sessionStorage.getItem('chat_submitted'))return;
    function showBtn(source){
      if(btn.classList.contains('visible'))return;
      btn.classList.add('visible');
      btn.removeAttribute('aria-hidden');
      if(window.dataLayer)window.dataLayer.push({event:'popup_btn_appear',location:source||'early_site'});
    }
    function scrolledEnough(){
      var doc=document.documentElement;
      var max=Math.max((doc.scrollHeight||0)-window.innerHeight,1);
      return (window.pageYOffset||doc.scrollTop||0)/max>=.2;
    }
    function checkScroll(){
      if(scrolledEnough()){
        showBtn('scroll_20_percent');
        window.removeEventListener('scroll',checkScroll);
        window.removeEventListener('resize',checkScroll);
      }
    }
    window.addEventListener('scroll',checkScroll,{passive:true});
    window.addEventListener('resize',checkScroll);
    checkScroll();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initFloatingContact);
  else initFloatingContact();
})();

(function(){
  var groups=Array.prototype.slice.call(document.querySelectorAll('.service-points'));
  if(!groups.length)return;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function itemsOf(group){
    return Array.prototype.slice.call(group.querySelectorAll('.service-point'));
  }

  function showAll(group){
    group.classList.add('service-points-ready');
    itemsOf(group).forEach(function(item){item.classList.add('is-active');});
    group.style.setProperty('--sp-fill','100%');
  }

  function updateGroup(group){
    var items=itemsOf(group);
    if(!items.length)return;
    var vh=window.innerHeight||document.documentElement.clientHeight||0;
    var active=0;
    items.forEach(function(item,index){
      var r=item.getBoundingClientRect();
      if(r.top+r.height*.45<vh*.92)active=index+1;
    });
    var gr=group.getBoundingClientRect();
    if(active===0&&gr.top<vh*.84&&gr.bottom>0)active=1;
    items.forEach(function(item,index){
      item.classList.toggle('is-active',index<active);
    });
    var fill=0;
    if(items.length===1)fill=active?100:0;
    else if(active>0)fill=(active-1)/(items.length-1)*100;
    if(active>=items.length)fill=100;
    group.style.setProperty('--sp-fill',Math.round(fill)+'%');
  }

  if(reduce||!('requestAnimationFrame' in window)){
    groups.forEach(showAll);
    return;
  }

  groups.forEach(function(group){group.classList.add('service-points-ready');});
  var ticking=false;
  function update(){
    ticking=false;
    groups.forEach(updateGroup);
  }
  function requestUpdate(){
    if(ticking)return;
    ticking=true;
    window.requestAnimationFrame(update);
  }
  window.addEventListener('scroll',requestUpdate,{passive:true});
  window.addEventListener('resize',requestUpdate);
  update();
})();

(function(){
  var groups=Array.prototype.slice.call(document.querySelectorAll('.quotes'));
  if(!groups.length)return;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function cardsOf(group){
    return Array.prototype.slice.call(group.querySelectorAll('.q'));
  }

  function show(group){
    cardsOf(group).forEach(function(card,index){
      card.style.setProperty('--reveal-delay',(index*130)+'ms');
      card.classList.add('is-visible');
    });
  }

  function hide(group){
    cardsOf(group).forEach(function(card,index){
      card.style.setProperty('--reveal-delay',(index*90)+'ms');
      card.classList.remove('is-visible');
    });
  }

  groups.forEach(function(group){
    group.classList.add('quotes-reveal-ready');
    cardsOf(group).forEach(function(card,index){
      card.style.setProperty('--reveal-delay',(index*130)+'ms');
    });
  });

  if(reduce||!('IntersectionObserver' in window)){
    groups.forEach(show);
    return;
  }

  var lastY=window.pageYOffset||0;
  var direction='down';
  window.addEventListener('scroll',function(){
    var y=window.pageYOffset||0;
    direction=y<lastY?'up':'down';
    lastY=y;
  },{passive:true});

  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        show(entry.target);
      }else if(direction==='up'&&entry.boundingClientRect.top>0){
        hide(entry.target);
      }
    });
  },{threshold:.25,rootMargin:'0px 0px -12% 0px'});

  groups.forEach(function(group){observer.observe(group);});
})();

(function(){
  // Envoi des évènements vers Google Tag Manager (dataLayer).
  // GTM (conteneur GTM-NTXNSDKW) est la source unique de tracking : il charge
  // GA4 et relaie les évènements. On ne charge plus gtag.js/GA4 en direct pour
  // éviter le double chargement des scripts Google.
  window.dataLayer=window.dataLayer||[];

  function pagePath(){
    return window.location.pathname||'/';
  }

  function hrefInfo(element){
    var href=element.getAttribute('href')||'';
    if(!href)return {};
    if(href.indexOf('tel:')===0)return {link_type:'phone'};
    if(href.indexOf('mailto:')===0)return {link_type:'email'};
    try{
      var url=new URL(href,window.location.href);
      if(url.origin===window.location.origin){
        return {link_type:'internal',target_path:url.pathname};
      }
      return {link_type:'external',link_domain:url.hostname};
    }catch(e){
      return {};
    }
  }

  function cleanParams(params){
    var cleaned={};
    Object.keys(params||{}).forEach(function(key){
      var value=params[key];
      if(value===undefined||value===null||value==='')return;
      cleaned[key]=String(value).slice(0,100);
    });
    return cleaned;
  }

  window.acdjTrack=function(eventName,params){
    if(!eventName)return;
    window.dataLayer.push(Object.assign({
      event:eventName,
      page_path:pagePath()
    },cleanParams(params||{})));
  };

  window.acdjTrackLead=function(form,params){
    var service='';
    if(form){
      var serviceField=form.querySelector('[name="service"]');
      if(serviceField)service=serviceField.value||'';
    }
    window.acdjTrack('generate_lead',Object.assign({
      form_name:'devis',
      service:service
    },params||{}));
  };

  document.addEventListener('click',function(event){
    var element=event.target.closest&&event.target.closest('[data-gtm-event]');
    if(!element)return;
    window.acdjTrack(element.getAttribute('data-gtm-event'),Object.assign({
      location:element.getAttribute('data-location')||''
    },hrefInfo(element)));
  });
})();

(function(){
  var GA_ID='G-NXYL9X0H7C';

  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};

  if(!document.querySelector('script[data-acdj-ga4]')){
    var script=document.createElement('script');
    script.async=true;
    script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA_ID);
    script.setAttribute('data-acdj-ga4','true');
    document.head.appendChild(script);
  }

  window.gtag('js',new Date());
  window.gtag('config',GA_ID,{
    send_page_view:true
  });

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
    if(!eventName||!window.gtag)return;
    window.gtag('event',eventName,cleanParams(Object.assign({
      page_path:pagePath()
    },params||{})));
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

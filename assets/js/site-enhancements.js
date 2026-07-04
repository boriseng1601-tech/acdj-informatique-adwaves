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

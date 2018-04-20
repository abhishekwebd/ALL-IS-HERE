<script type="text/javascript">;
  !function(name,path,ctx){
    var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
  }('KeenAsync','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.2.1.min.js',this);

  KeenAsync.ready(function(){
    // Configure a client instance
    // This is your actual Project ID and Write Key
    var client = new KeenAsync({
      projectId: '5ad978edc9e77c0001af1610',
      writeKey: 'FE122A8CE6BE0559FD4F9F3B705F68B53CD6B6646AE99DCDD46C1FCA254CE859B0E2688CE0AC59BC647F3A794232E5283C5AB4E2B04F9294B50D73DBF3A9E7D324AC68B2AC20A8F2AD9999607E0C8495E6DA29F1B710A77D2F4800B2D884E133'
    });

    // Record an event
    client.recordEvent('pageviews', {
      title: document.title
    });
  });
</script>
$(function(){
  var loaded = false;
  if(Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('http://icevision-aig1.ru:8080/streams/cam561.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
    hls.on(Hls.Events.FRAG_LOADED, function(){
      if(!loaded) {
        $('#box').show();
        loaded = true;
      }
    });
  }

  setInterval(function () {
    $('#box').hide();
  }, 2000);
});

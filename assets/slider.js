
(function(){
  function initSlider(slider){
    const track = slider.querySelector('.slider-track');
    const prev = slider.querySelector('.slider-btn.prev');
    const next = slider.querySelector('.slider-btn.next');
    if(!track || !prev || !next) return;

    const page = () => Math.max(280, Math.floor(track.clientWidth * 0.9));

    next.addEventListener('click', ()=> track.scrollBy({left: page(), behavior:'smooth'}));
    prev.addEventListener('click', ()=> track.scrollBy({left:-page(), behavior:'smooth'}));

    // keyboard support
    track.addEventListener('keydown', (e)=>{
      if(e.key==='ArrowRight'){ e.preventDefault(); track.scrollBy({left: page(), behavior:'smooth'}); }
      if(e.key==='ArrowLeft'){ e.preventDefault(); track.scrollBy({left:-page(), behavior:'smooth'}); }
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.slider').forEach(initSlider);
  });
})();

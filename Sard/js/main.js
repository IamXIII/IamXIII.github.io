var tl = anime.timeline({
    easing: 'linear'
  });
  


tl.add({
    targets: '.fill',
    fill: ['rgba(255,255,255,0)', '#ffffff'],
    duration: 1200,
    delay: function(el, i) { return i * 100 },
    direction: 'alternate',
    loop: false
  })
  .add({
    targets: '.path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
    direction: 'alternate',
    loop: false
  })
  .add({
    targets: '.fill2',
    fill: ['rgba(255,255,255,0)', '#ffffff'],
    duration: 6000,
    direction: 'alternate',
    loop: false
  })

  
  ;
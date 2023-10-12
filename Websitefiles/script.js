if (window.innerWidth > 1000) {
  Shery.imageEffect("#back", {
    style: 5,
    config: {
      a: { value: 1.5, range: [0, 30] },
      b: { value: -0.7501875468867217, range: [-1, 1] },
      aspect: { value: 2.211201780716581 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.9, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    debug: true,
    gooey: true,
  });
} else {
  alert("This looks 100 times better on big screens, ngl");
}
var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
// Phone Size Scroll Animation background

// Shery.imageEffect("#back", {
//   style: 5,
//   config: {
//     a: { value: 1.5, range: [0, 30] },
//     b: { value: -0.7501875468867217, range: [-1, 1] },
//     aspect: { value: 2.211201780716581 },
//     gooey: { value: true },
//     infiniteGooey: { value: true },
//     durationOut: { value: 1, range: [0.1, 5] },
//     durationIn: { value: 1.5, range: [0.1, 5] },
//     displaceAmount: { value: 0.5 },
//     masker: { value: false },
//     maskVal: { value: 1, range: [1, 5] },
//     scrollType: { value: 0 },
//     geoVertex: { range: [1, 64], value: 1 },
//     noEffectGooey: { value: true },
//     onMouse: { value: 0 },
//     noise_speed: { value: 0.2, range: [0, 10] },
//     metaball: { value: 0.2, range: [0, 2] },
//     discard_threshold: { value: 0.9, range: [0, 1] },
//     antialias_threshold: { value: 0.002, range: [0, 0.1] },
//     noise_height: { value: 0.5, range: [0, 2] },
//     noise_scale: { value: 10, range: [0, 100] },
//   },
//   debug: false,
//   gooey: false,
// });

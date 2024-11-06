import "./style.scss";
// import 文を使って sub.js ファイルを読み込む。
import "./sub";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", async () => {
  // 演出対象となる要素を取得
  gsap.utils.toArray(".alternating-layout__text").forEach((el) => {
    gsap.from(el, {
      x: 128,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      // スクロールトリガーの設定
      scrollTrigger: {
        trigger: el, // 対象物
      },
    });
  });
});


// カードプロパティを持つ要素がスクロールに合わせて出現
document.querySelectorAll(".card,.tag-list__item").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        ease: "expo",
      },
    }
  );
});


// stagger で出現
gsap.from(".main-visual__title", {
  y: 50,
  autoAlpha: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.1, // 0.1秒で出現
});

// tag-list__itemをホバーで拡大
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tag-list__item").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        scale: 1.2,
        duration: 1,
        overwrite: true,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        scale: 1.0,
        duration: 0.5,
        overwrite: true,
      });
    });
  });
});

//　sectiontitleをタイピング式に出現
function initTypeAnim() {
  ityped.init(document.querySelector(".section-title"),{
    strings: ["OUR MISSIONS"],
    startDelay: 0,
    typespeed: 120,
    loop: false,
    backSpeed: 88,
    backDelay: 150,
    showCursor: true,
    cursorChar: "",
  });
}
ScrollTrigger.create({
  trigger: ".section-title",
  start: "top 90%",
  onEnter: initTypeAnim,
  once: true,
});

//　title文字をだんだん大きく、色が赤に変わるように
window.addEventListener("DOMContentLoaded",() => {
  gsap.to(".main-visual__title", {
    scale: 1.3,
    duration: 3,
    color: "#990000",
  })
})

gsap.utils.toArray(".alternating-layout__image").forEach((el) => {
  gsap.from(el, {
    scale: 0,
    duration: 3,
    ease: "power4.out",
    stagger: {
      each: 0.05,
      from: "center",
      grid: "auto",
    },
    scrollTrigger: {
      trigger: el,
    },
  });
}); 
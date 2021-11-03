$(document).ready(function () {
  let modal = document.querySelector(".modal");
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    stagePadding: 100,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 100,
      },
      991: {
        items: 3,
        stagePadding: 0,
      },
      1200: {
        items: 3,
        stagePadding: 200,
      },
    },
  });

  $("main #slider .owl-carousel .custom-slider-item").mouseenter(function () {
    $(this).addClass("hovered");
  });

  $("main #slider .owl-carousel .custom-slider-item").mouseleave(function () {
    $(this).removeClass("hovered");
  });
  $("main #slider .modal .custom-slider-item").mouseenter(function () {
    $(this).addClass("hovered");
  });

  $("main #slider .modal .custom-slider-item").mouseleave(function () {
    $(this).removeClass("hovered");
  });

  $("main #slider .owl-carousel .custom-slider-item .content").hover(
    function () {
      $(this).parent().addClass("hovered");
    }
  );
  //   $(".custom-slider-item").click((e) => {
  //     let element = document.getElementById(e.target.id);
  //     e.dataTransfer.setData("text", e.target.id);
  //     modal.style.visibility = "visible";
  //     $(".modal .wrapped-modal").append(element);
  //   });
  //   $(".close-btn p").click((e) => {
  //     let data = document.getElementById(e.dataTransfer.getData("text"));
  //     // let element = $(".modal .wrapped-modal")[0].children[0];
  //     modal.style.visibility = "hidden";
  //     $(".modal .wrapped-modal").empty();
  //   });

  let customSliderItem = document.querySelectorAll(".custom-slider-item");
  let modalImage = document.querySelector(
    ".modal .wrapped-modal .custom-slider-item img"
  );
  let modalWrapped = document.querySelector(".modal .wrapped-modal");

  let index = 0;
  for (let i = 0; i < customSliderItem.length; i++) {
    customSliderItem[i].addEventListener("click", (e) => {
      // modal.style.visibility = "visible";
      modal.style.display = "block";
      index = i;
      var html = `
                      <div class="custom-slider-item" id="${customSliderItem[i].id}">
                        <img src="${customSliderItem[i].children[0].src}" alt="" />
                        <div class="content">
                          <i class="fas fa-image"></i>
                          <p>London</p>
                        </div>
                      </div>
                  `;
      modalWrapped.children[0].innerHTML = html;
      // modalImage.src = customSliderItem[i].children[0].src;
    });
  }
  let leftBtn = document.getElementById("left-chevron");
  let rightBtn = document.getElementById("right-chevron");
  let closeP = document.querySelector(".close-btn p");

  closeP.addEventListener("click", (e) => {
    // modal.style.visibility = "hidden";
    modal.style.display = "block";
  });
  leftBtn.addEventListener("click", (e) => {
    if (index > 0) {
      index--;
    } else {
      index = 6;
    }
    var html = `   
                      <div class="custom-slider-item" id="${customSliderItem[index].id}">
                        <img src="${customSliderItem[index].children[0].src}" alt="" />
                        <div class="content">
                          <i class="fas fa-image"></i>
                          <p>London</p>
                        </div>
                      </div>
                  `;
    modalWrapped.children[0].innerHTML = html;
  });
  rightBtn.addEventListener("click", (e) => {
    if (index < 6) {
      index++;
    } else {
      index = 0;
    }
    var html = `   
                      <div class="custom-slider-item" id="${customSliderItem[index].id}">
                        <img src="${customSliderItem[index].children[0].src}" alt="" />
                        <div class="content">
                          <i class="fas fa-image"></i>
                          <p>London</p>
                        </div>
                      </div>
                  `;
    modalWrapped.children[0].innerHTML = html;
  });
  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("custom-slider-item")) {
      // modal.style.visibility = "hidden";
      if (
        e.target.classList.contains("fa-chevron-left") ||
        e.target.classList.contains("fa-chevron-right")
      ) {
        return;
      } else {
        modal.style.display = "none";
      }
    }
  });
  // modalWrapped.addEventListener("click", (e) => {
  //   let x = e.clientX;
  //   console.log(x);
  //   // left < x && x<left+yari
  //   if (yari < x && x < elementWidth) {
  //     console.log("sag");
  //   }
  // });
});

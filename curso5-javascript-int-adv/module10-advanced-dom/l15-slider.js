// Slider
function slider() {
  const slides = document.querySelectorAll(".slide");
  const btn_left = document.querySelector(".slider-btn-left");
  const btn_right = document.querySelector(".slider-btn-right");
  let cur_slide = 0;
  const max_slide = slides.length;
  const dot_container = document.querySelector(".dots");

  function go_to_slide(slide) {
    slides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  }

  // Functions
  // Criando os pontos de navegação do slider
  function create_dots() {
    slides.forEach(function (_, index) {
      dot_container.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${index}"></button>`
      );
    });
  }

  // Função que irá ativar o botão correspondente ao slide selecionado
  function activate_dot(slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot-active"));

    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot-active");
  }
  // Next slide
  function next_slide() {
    if (cur_slide === max_slide - 1) {
      cur_slide = 0;
    } else {
      cur_slide++;
    }

    go_to_slide(cur_slide);
    activate_dot(cur_slide);
  }

  // Previous slide
  function previous_slide() {
    if (cur_slide === 0) {
      cur_slide = max_slide - 1;
    } else {
      cur_slide--;
    }

    go_to_slide(cur_slide);
    activate_dot(cur_slide);
  }

  // Init
  function init() {
    go_to_slide(0);
    create_dots();
    activate_dot(0);
  }

  init();

  // Event Handlers
  // Btns
  btn_right.addEventListener("click", next_slide);
  btn_left.addEventListener("click", previous_slide);

  // Habilitando a possibilidade de controlar os slides com as arrow keys
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      previous_slide();
    }
    if (e.key === "ArrowRight") {
      next_slide();
    }
  });

  // Adicionando a função de ir até o slide certo dependendo do ponto de navegação pressionado
  dot_container.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const slide = e.target.dataset.slide;
      go_to_slide(slide);
      activate_dot(slide);
    }
  });
}

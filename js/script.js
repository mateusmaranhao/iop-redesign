function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
};
initAccordion();

function initParagraphHover() {
  const paragraphs = document.querySelectorAll('.projetos a');
  const activeClass = 'ativo';

  function activeHover() {
    this.classList.add(activeClass);
  }
  function removeHover() {
    this.classList.remove(activeClass);
  }

  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('mouseover', activeHover)
  })
  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('mouseout', removeHover)
  })
}
initParagraphHover();
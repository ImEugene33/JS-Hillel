function Accordion(element) {
  this.element = element;
  this.init = accordionInit;
  this.toggle = toggleItem;
  this.addBlock = addBlock;
  this.index = getOpenIndexes;
  this.open = openAll;

  this._onItemClick = function (event) {
    event.target.parentElement.classList.toggle("show");
  };

  this.element.addEventListener("click", this._onItemClick.bind(this));

  function accordionInit() {
    Array.prototype.forEach.call(element.children, (e) => {
      e.classList.add("accordion-item");

      e.children[0].classList.add("title");
      e.children[1].classList.add("content");
    });
  }

  function toggleItem(index) {
    const element = this.element.children[index];
    if (element) {
      element.classList.toggle("show");
    }
  }

  function getOpenIndexes() {
    const cont = document.querySelector(".container");
    cont.addEventListener("click", function (event) {
      console.log(
        [...document.getElementsByClassName("accordion-item")].indexOf(
          event.target.closest("ul")
        )
      );
    });
  }

  function openAll() {
    const block = document.querySelector(".accordion-item");
    const block2 = [...document.querySelectorAll(".container")];
    const block21 = document.querySelectorAll(".accordion-item");
    const block3 = document.getElementsByClassName("accordion-item");
    const block4 = this.element.children;
    console.log(this.element.children);
    console.log(block21);
    console.log(block2);
    console.log(block3);
    console.log(block4);
    const openBtn = document.querySelector(".open-btn");

    function showHide() {
      block21.forEach((element) => element.classList.toggle("show"));
    }

    //  function animate() {
    //    for (var i = 0; i < block2.length; i++) {
    //      block2[i].classList.toggle("show");
    //    }
    //  }

    openBtn.addEventListener("click", showHide);
  }

  function addBlock(title, description) {
    this.element.insertAdjacentHTML(
      "beforeEnd",
      `<ul class="accordion-item">
		 <li class="title">${title}</li>
		 <p class="content">${description}</p>
	</ul>`
    );
  }
}

const mainAccordion = new Accordion(document.querySelector("div"));
mainAccordion.init();

mainAccordion.toggle();

setTimeout(() => {
  mainAccordion.addBlock("Fifth", "lorem ipsum dolores");
}, 3000);

mainAccordion.index();
mainAccordion.open();

window.onload = (e) => {
  landingCreation(dataNavbar);
  createCarousel();
  translateLeft();
  translateRight();
  addToggle();
};

function landingCreation(a) {
  console.log("preso");
  for (dropodown of a) {
    let dropElmt = document.createElement("li");
    dropElmt.classList.add("nav-item");
    dropElmt.classList.add("dropdown");
    let dropTitleHTML = `
        <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ${dropodown.title}
      </a>`;
    dropElmt.innerHTML = dropTitleHTML;
    let ulElmt = document.createElement("ul");
    ulElmt.classList.add("dropdown-menu");
    let liHTML = "";
    for (li of dropodown.content) {
      liHTML += `
        <li><a class="dropdown-item" href="#">${li}</a></li>`;
    }
    ulElmt.innerHTML = liHTML;
    dropElmt.appendChild(ulElmt);
    document.getElementById("dataNavbarDest").appendChild(dropElmt);
  }
}

function createCarousel() {
  let dests = document.getElementsByClassName("cardsCaruselArea");
  for (dest of dests) {
    let indBox = 0;
    /*
  let nBox = dataCards.length / 4;
  let arrNodes = [];
  for (let i = nBox; i > 0; i - 1) {
    let singleBox = document.createElement("div");
    arrNodes.push(singleBox);
  }
  let fourBox = document.createElement("div");
  fourBox.classList.add("fourBox");
  */
    for (card of dataCards) {
      let node = document.createElement("div");
      node.classList.add("col-lg-3");
      node.classList.add("col-6");
      let cardHTML = createCard(card);
      node.innerHTML = cardHTML;
      dest.appendChild(node);
    }
    indexCarousel++;
  }
}

function createCard(a) {
  let starHTML = "";
  let stars = a.star;
  for (let i = 0; i < 5; i++) {
    if (stars > 0 && stars !== 0.5) {
      starHTML += '<i class="fa-solid fa-star"></i>';
    } else if (stars === 0.5) {
      starHTML += '<i class="fa-regular fa-star-half-stroke"></i>';
    } else {
      starHTML += '<i class="fa-regular fa-star"></i>';
    }
    stars = stars - 1;
  }

  let totalHMTL = `
            <div class="card">
              <img
                src="${a.img}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text fw-bold">
                  ${a.txtCard}
                </p>
                <div class="propertiesCard d-flex align-items-center">
                  <i class="fa-regular fa-clock"></i>
                  <p>${a.time}</p>
                  <i class="bi bi-reception-${a.complex}"></i>
                  <p>${a.complexTx}</p>
                </div>
                <div class="starCard d-flex align-items-center">
                  ${starHTML}
                  <p>${a.star}</p>
                  <p>${a.feedback}</p>
                </div>
                <div class="priceCard d-flex align-items-center">
                  <p>${a.priceFinal}</p>
                  <p>${a.priceOriginal}</p>
                </div>
                <div
                  class="techerProperties border-top d-flex align-items-center justify-content-start"
                >
                  <img src="${a.imgTeacher}" alt="" />
                  <span class="name">${a.nameTeacher}</span>
                  <i class="fa fa-sharp fa-light fa-bookmark unSelected"></i>
                </div>
              </div>
            </div>
  `;
  return totalHMTL;
}

function translateLeft() {
  let buttons = document.getElementsByClassName("rightScorr");
  let a = 0;
  for (button of buttons) {
    button.addEventListener("click", (e) => {
      console.log("preso");
      console.log("cardCarousel" + a);
      let cardInCarousel = document.getElementsByClassName("cardCarousel" + a);
      let card = e.target.parentElement.children[3].children[0];
      //for (card of cardInCarousel) {
      console.log(card.style.left);
      if (window.innerWidth > 992) {
        console.log(window.innerWidth);

        //full screen
        if (card.style.left === "") {
          card.style.left = "-100%";
          if (parseInt(card.style.left) === -100 * (dataCards.length / 4 - 1)) {
            e.target.parentElement.children[1].classList.add("hide");
          }
        } else if (
          parseInt(card.style.left) <=
          -100 * (dataCards.length / 4 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
          if (parseInt(card.style.left) === -100 * (dataCards.length / 4 - 1)) {
            e.target.parentElement.children[1].classList.add("hide");
          }
        }
      } else {
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (
          parseInt(card.style.left) <=
          -100 * (dataCards.length / 2 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
          if (parseInt(card.style.left) === -100 * (dataCards.length / 2 - 1)) {
            e.target.parentElement.children[1].classList.add("hide");
          }
        }
      }
      //}
      e.target.parentElement.children[0].classList.remove("hide");
    });
    a++;
  }
}

function translateRight() {
  let buttons = document.getElementsByClassName("leftScorr");
  let a = 0;
  for (button of buttons) {
    button.addEventListener("click", (e) => {
      console.log("cardCarousel" + a);
      let cardInCarousel = document.getElementsByClassName("cardCarousel" + a);
      let card = e.target.parentElement.children[3].children[0];
      //for (card of cardInCarousel) {
      console.log(card.style.left);
      if (card.style.left === "" || card.style.left === "0%") {
        //card.style.left = "100%";
      } else if (card.style.left === "100%") {
        //card.style.left = parseInt(card.style.left) + 25 + "%";
      } else {
        card.style.left = parseInt(card.style.left) + 100 + "%";
      }
      //}
      if ((e.target.parentElement.children[3].children[0].style.left = "0%")) {
        e.target.classList.add("hide");
      }
      e.target.parentElement.children[1].classList.remove("hide");
    });
    a++;
  }
}
function addToggle() {
  let toToggle = [];
  toToggle.push(document.getElementsByClassName("fa-bookmark "));
  for (g of toToggle) {
    for (button of g) {
      button.addEventListener("click", function (e) {
        let buttClass = e.target.classList;
        if (buttClass.value.match("toggled")) {
          e.target.classList.remove("toggled");
        } else {
          e.target.classList.add("toggled");
        }
      });
    }
  }
}

let indexCarousel = 1;

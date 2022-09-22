import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { createCard, createListBtn } from "./markup";
import { getData } from "./api";
import { listCardRef, listBtnRef } from "./refs";

async function start() {
  try {
    const {
      data: { products },
    } = await getData("/products");
    const markup = createCard(products);
    updatePage(listCardRef, markup);

    const { data } = await getData("/products/categories");
    const markupCat = createListBtn(data);
    updatePage(listBtnRef, markupCat);
  } catch (error) {
    console.log("error :>> ", error);
  }
}
start();

function updatePage(elem, markup = "") {
  elem.innerHTML = markup;
}

getData("/products").then(console.log);

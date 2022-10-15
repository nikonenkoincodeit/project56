import { getMaterials } from "../api";
import { createAllMarkup } from "../markup";
import { refs } from "../refs";
import { addMarkup } from "../views";

refs.btnList.addEventListener("click", onSearchBtnClick);

async function onSearchBtnClick(evt) {
  if (!evt.target.classList.contains("btn-outline-primary")) {
    return;
  }
  const btnData = evt.target.dataset.cat;

  try {
    const { products } = await getMaterials(`/products/category/${btnData}`);
    const markup = createAllMarkup(products);
    addMarkup(refs.listCard, markup);
  } catch (error) {
    console.log(error);
  }
}

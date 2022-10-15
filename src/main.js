import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getMaterials } from "./api";
import { createMarkupBtn, createAllMarkup } from "./markup";
import { refs } from "./refs";
import { addMarkup } from "./views";

async function init() {
  refs.spiner.classList.remove("is-hidden");
  try {
    const categories = await getMaterials("/products/categories");
    const { products } = await getMaterials("/products/");
    const allMarkup = createAllMarkup(products);

    const markupCategories = createMarkupBtn(categories);

    addMarkup(refs.listCard, allMarkup);

    addMarkup(refs.btnList, markupCategories);
  } catch (error) {
    console.log(error);
  } finally {
    refs.spiner.classList.add("is-hidden");
  }
}

init();

import { Alert } from "bootstrap";
import { getMaterials } from "../api";
import { createAllMarkup } from "../markup";
import { refs } from "../refs";
import { addMarkup } from "../views";

refs.searchForm.addEventListener("submit", onSearchSubmit);

async function onSearchSubmit(evt) {
  evt.preventDefault();
  const query = evt.target.search.value.trim();
  if (!query) {
    Alert("sorry chuvak, nema takogo");
    return;
  }
  try {
    const { products } = await getMaterials(`/products/search?q=${query}`);
    const markup = createAllMarkup(products);
    addMarkup(refs.listCard, markup);
  } catch (error) {
    console.log(error);
  }
}

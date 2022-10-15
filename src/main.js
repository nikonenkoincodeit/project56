import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { getMaterials } from './api';
import { createMarkupBtn } from './markup';
import { refs } from './refs';

async function init() {
  try {
    const categories = await getMaterials('/products/categories');
    const markupCategories = createMarkupBtn(categories);
    console.log(markupCategories);
    addMarkup(refs.btnList, markupCategories);
  } catch (error) {
    console.log(error);
  }
}

init();

function addMarkup(element, markup) {
  element.innerHTML = markup;
}

export const createMarkupBtn = (categories = []) => {
  return categories
    .map((item) => {
      return `<li class="item-btn">
            <button type="button" class="btn btn-outline-primary" data-cat="${item}">
              ${item}
            </button>
          </li>`;
    })
    .join('');
};

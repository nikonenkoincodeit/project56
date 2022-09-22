export const createCard = (data = []) => {
  return data
    .map((item) => {
      return `<li class="card" data-id="2">
      <img
        src="${item.thumbnail}"
        class="card-img-top"
        alt="${item.title}"
        height="180"
        width="200"
      />
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
          ${item.description}
        </p>
        <div class="tile__price tile__price_color_red ng-star-inserted">
          <span class="tile__price-value"> ${item.price} </span
          ><span class="tile__price-currency">₴</span>
        </div>
      </div>
    </li>`;
    })
    .join("");
};

export const createListBtn = (data = []) => {
  return data
    .map((item) => {
      return `<li class="item-btn">
        <button
          type="button"
          class="btn btn-outline-primary"
          data-cat="${item}"
        >
          ${item}
        </button>
        </li>`;
    })
    .join("");
};

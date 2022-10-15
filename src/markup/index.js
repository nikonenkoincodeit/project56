export const createMarkupBtn = (categories = []) => {
    return categories
        .map((item) => {
            return `  <li class="item-btn">
            <button type="button" class="btn btn-outline-primary" data-cat="${item}">
              ${item}
            </button>
          </li>`;
        })
        .join('');
};

export const createAllMarkup = (products = []) => {
    return products
        .map(({ id, title, description, thumbnail, price }) => {
            return ` <li class="card" data-id="${id}">
              <img
                src="${thumbnail}"
                class="card-img-top"
                alt="${title}"
                height="180"
                width="200"
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <div class="tile__price tile__price_color_red ng-star-inserted">
                  <span class="tile__price-value">${price}</span
                  ><span class="tile__price-currency">₴</span>
                </div>
              </div>
            </li>`;
        })
        .join('');
};

const productsInCard = JSON.parse(localStorage.getItem("cardProducts"));
console.log(productsInCard);

const cardProductsContainer = document.querySelector("#card-products");
cardProductsContainer.innerHTML = Array.isArray(productsInCard)
  ? productsInCard.map((item) => {
      return `
        <div class='product-element'>
            ${item?.title}
            <button >+</button>
            <button>-</button>
            <div>${item?.count}</div>
            <div> Number of items: ${item?.amount}</div>
        </div>
    `;
    })
  : "<div>No item in card!</div>";

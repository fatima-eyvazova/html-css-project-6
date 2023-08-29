const products = [
    {
        img: '/src/img/cat-13.png',
        title: "Cake & Milk",
        id: 0,
        description: '26 items'
    },
    {
        img: '/src/img/cat-12.png',
        title: "Oganic Kiwi",
        id: 1,
        description: '28 items'
    },
    {
        img: '/src/img/cat-11.png',
        title: "Peach",
        id: 2,
        description: '28 items'
    },
    {
        img: '/src/img/cat-9.png',
        title: "Red Apple",
        id: 3,
        description: '54 items'
    },
    {
        img: '/src/img/cat-3.png',
        title: "Snack",
        id: 4,
        description: '56 items'
    },
    {
        img: '/src/img/cat-1.png',
        title: "Vegetables",
        id: 5,
        description: '72 items'
    },
    {
        img: '/src/img/cat-2.png',
        title: "Strawberry",
        id: 6,
        description: '28 items'
    },
    {
        img: '/src/img/cat-4.png',
        title: "Black plum",
        id: 7,
        description: '124 items'
    },
    {
        img: '/src/img/cat-5.png',
        title: "Custard apple",
        id: 8,
        description: '43 items'
    },
    {
        img: '/src/img/cat-14.png',
        title: "Coffe & Tea",
        id: 9,
        description: '89 items'
    },

]

const product = [...new Set(products.map((item) => { return item }))]
let i = 0

document.getElementById('product-elements').innerHTML = product.map((item) => {
    let { img, title, description } = item
    return (
        `<div class='element'>
         <figure>
          <img class='image'src=${img}></img>
         </figure>
           <h6 class='element-title'>${title}</h6>
           <span class='element-description'>${description}</span>
        
        </div>`
    )
}).join('')


const cards = [
    {
        img: '/src/img/product-1.jpeg',
        category: 'Snack',
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        id: 0,
        badges: 'Hot',
        count: '$ 28.85',
        oldCount: '$ 32.8'

    },
    {
        img: '/src/img/product-13.jpeg',
        category: 'Hodo Foods',
        title: "All Natural Italian-Style Chicken Meatballs",
        id: 2,
        badges: 'Hodo Foods',
        count: '$ 52.855',
        oldCount: '$ 55.8'

    }, {
        img: '/src/img/product-2.jpeg',
        category: 'Snack',
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        id: 3,
        badges: 'Sale',
        count: '$ 28.85',
        oldCount: '$ 32.8'

    }, {
        img: '/src/img/product-3.jpeg',
        category: 'Snack',
        title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        id: 4,
        badges: 'New',
        count: '$ 48.85',
        oldCount: '$ 62.8'

    }, {
        img: '/src/img/product-4.jpeg',
        category: 'Vegetables',
        title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        id: 5,
        badges: 'Hot',
        count: '$ 17.85',
        oldCount: '$ 22.8'

    }, {
        img: '/src/img/product-5.jpeg',
        category: 'Pet Foods',
        title: "Blue Diamond Almonds Lightly Salted Vegetables",
        id: 6,
        badges: 'Hot',
        count: '$ 18.85',
        oldCount: '$ 24.8'

    }, {
        img: '/src/img/product-6.jpeg',
        category: 'Hodo Foods',
        title: "Chobani Complete Vanilla Greek Yogurt",
        id: 7,
        badges: 'Hot',
        count: '$ 54.85',
        oldCount: '$ 62.8'

    }, {
        img: '/src/img/product-7.jpeg',
        category: 'Meats',
        title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
        id: 8,
        badges: 'Sale',
        count: '$ 24.70',
        oldCount: '$ 33.4'

    }, {
        img: '/src/img/product-8.jpeg',
        category: 'Snack',
        title: "Encore Seafoods Stuffed Alaskan Salmon",
        id: 9,
        badges: 'Sale',
        count: '$ 35.85',
        oldCount: '$ 37.8'

    }, {
        img: 'src/img/product-9.jpeg',
        category: 'Coffes',
        title: "Gorton’s Beer Battered Fish Fillets with soft paper",
        id: 10,
        badges: 'Hot',
        count: '$ 23.85',
        oldCount: '$ 25.8'

    },

]

const card = [...new Set(cards.map((item) => { return item }))]
let a = 0

document.getElementById('product-cards').innerHTML = card.map((item) => {
    let { img, category, title, count, oldCount, badges } = item
    return (
        ` <div class='product-element'>
        <figure class= 'img-span'>
            <img class='product-image' src=${img}></img>
            <span class='badges'>${badges}</span>
        </figure>
        <div class='category'>${category}</div>
        <div class='product-t'>
            <a class='product-element-title'>${title}</a>
        </div>
        <p class="brand">By <a class='link-food'href="vendor-details-1.html">NestFood</a></p>
        <div class='price-add'>
            <div class='prices' >
                <span class='product-element-price'>${count}</span>
                <span class='old-price'>${oldCount}</span>
            </div>
            <a class="add" href="shop-cart.html">
                <svg class='product-svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                            stroke="#3BB77E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
                <span>Add</span>
               
            </a>
        </div>
    </div>`
    )
}).join('')
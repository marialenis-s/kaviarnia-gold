// ==========================================
// КАВʼЯРНЯ ҐОЛД
// SCRIPT.JS
// ==========================================


// ==========================================
// 1. МЕНЮ
// ==========================================

const menuItems = [

    // ☕ НАПОЇ

    {
        name: "Еспресо",
        category: "drinks",
        price: 65,
        description: "Насичена кава з ароматною пінкою.",
        image: "images/espresso.jpg"
    },

    {
        name: "Американо",
        category: "drinks",
        price: 70,
        description: "Еспресо з гарячою водою.",
        image: "images/americano.jpg"
    },

    {
        name: "Капучино",
        category: "drinks",
        price: 85,
        description: "Еспресо, молоко та ніжна молочна пінка.",
        image: "images/cappuccino.jpg"
    },

    {
        name: "Лате",
        category: "drinks",
        price: 95,
        description: "Ніжна кава з великою кількістю молока.",
        image: "images/latte.jpg"
    },

    {
        name: "Флет-вайт",
        category: "drinks",
        price: 100,
        description: "Подвійний еспресо з оксамитовим молоком.",
        image: "images/flat_white.jpg"
    },

    {
        name: "Раф",
        category: "drinks",
        price: 110,
        description: "Ніжна вершкова кава з ванільною ноткою.",
        image: "images/raf.jpg"
    },

    {
        name: "Айс-лате",
        category: "drinks",
        price: 105,
        description: "Еспресо, холодне молоко та лід.",
        image: "images/ice_latte.jpg"
    },

    {
        name: "Матча-лате",
        category: "drinks",
        price: 110,
        description: "Японська матча з ніжним молоком.",
        image: "images/matcha_latte.jpg"
    },


    // 🥞 СНІДАНКИ

    {
        name: "Гранола з йогуртом",
        category: "breakfast",
        price: 165,
        description: "Хрустка гранола, йогурт та сезонні ягоди.",
        image: "images/granola.jpg"
    },

    {
        name: "Вівсяна каша",
        category: "breakfast",
        price: 145,
        description: "Ніжна вівсяна каша з бананом.",
        image: "images/oatmeal.jpg"
    },

    {
        name: "Сирники",
        category: "breakfast",
        price: 220,
        description: "Ніжні сирники з ягідним соусом.",
        image: "images/syrniki.jpg"
    },

    {
        name: "Ліниві вареники",
        category: "breakfast",
        price: 180,
        description: "Домашні вареники з ніжним сиром.",
        image: "images/lazy_varenyky.jpg"
    },

    {
        name: "Шакшука",
        category: "breakfast",
        price: 190,
        description: "Яйця, томатний соус, спеції та зелень.",
        image: "images/shakshuka.jpg"
    },

    {
        name: "Бельгійські вафлі",
        category: "breakfast",
        price: 210,
        description: "Хрусткі вафлі з ягодами та кремом.",
        image: "images/belgian_waffles.jpg"
    },

    {
        name: "Англійський сніданок",
        category: "breakfast",
        price: 270,
        description: "Яйця, бекон, сосиска, овочі та тост.",
        image: "images/english_breakfast.jpg"
    },


    // 🥑 ТОСТИ

    {
        name: "Тост з авокадо",
        category: "toast",
        price: 210,
        description: "Авокадо, яйце пашот та свіжий хліб.",
        image: "images/avocado_toast.jpg"
    },

    {
        name: "Тост з лососем",
        category: "toast",
        price: 260,
        description: "Лосось, авокадо та яйце пашот.",
        image: "images/salmon_toast.jpg"
    },

    {
        name: "Тост з ростбіфом",
        category: "toast",
        price: 250,
        description: "Ростбіф, овочі та соус на хрусткому тості.",
        image: "images/roastbeef_toast.jpg"
    },

    {
        name: "Тост з креветками",
        category: "toast",
        price: 270,
        description: "Креветки, авокадо та ніжний крем.",
        image: "images/shrimp_toast.jpg"
    },


    // 🥗 САЛАТИ

    {
        name: "Овочевий салат",
        category: "salads",
        price: 190,
        description: "Свіжі овочі, фета та ароматна зелень.",
        image: "images/veg_salad.jpg"
    },

    {
        name: "Зелений салат",
        category: "salads",
        price: 220,
        description: "Авокадо, зелень та легка заправка.",
        image: "images/green_salad.jpg"
    },

    {
        name: "Цезар з куркою",
        category: "salads",
        price: 230,
        description: "Куряче філе, салат, пармезан та соус.",
        image: "images/caesar_chicken.jpg"
    },

    {
        name: "Цезар з креветками",
        category: "salads",
        price: 270,
        description: "Креветки, салат, пармезан та соус Цезар.",
        image: "images/caesar_shrimp.jpg"
    },

    {
        name: "Салат з лососем",
        category: "salads",
        price: 260,
        description: "Лосось, зелень, овочі та легка заправка.",
        image: "images/salmon_salad.jpg"
    },


    // 🍲 СУПИ

    {
        name: "Крем-суп з броколі",
        category: "soups",
        price: 160,
        description: "Ніжний крем-суп з броколі та вершками.",
        image: "images/broccoli_soup.jpg"
    },

    {
        name: "Гарбузовий крем-суп",
        category: "soups",
        price: 160,
        description: "Ароматний крем-суп з гарбуза.",
        image: "images/pumpkin_soup.jpg"
    },

    {
        name: "Курячий бульйон",
        category: "soups",
        price: 150,
        description: "Легкий домашній бульйон з куркою.",
        image: "images/chicken_broth.jpg"
    },

    {
        name: "Рамен з куркою",
        category: "soups",
        price: 250,
        description: "Ароматний бульйон, локшина та курка.",
        image: "images/ramen_chicken.jpg"
    },

    {
        name: "Том ям",
        category: "soups",
        price: 300,
        description: "Гострий тайський суп з насиченим бульйоном.",
        image: "images/tom_yum.jpg"
    },


    // 🍝 ПАСТА

    {
        name: "Паста з песто",
        category: "pasta",
        price: 220,
        description: "Паста, соус песто та пармезан.",
        image: "images/pasta_pesto.jpg"
    },

    {
        name: "Карбонара",
        category: "pasta",
        price: 230,
        description: "Паста з вершковим соусом, беконом та сиром.",
        image: "images/carbonara.jpg"
    },

    {
        name: "Паста з куркою",
        category: "pasta",
        price: 240,
        description: "Курка, паста та вʼялені томати.",
        image: "images/pasta_chicken.jpg"
    },

    {
        name: "Паста з телятиною",
        category: "pasta",
        price: 290,
        description: "Телятина, гриби та вершковий соус.",
        image: "images/pasta_veal.jpg"
    },

    {
        name: "Паста з морепродуктами",
        category: "pasta",
        price: 320,
        description: "Морепродукти, паста та ароматний соус.",
        image: "images/pasta_seafood.jpg"
    },


    // 🥪 СЕНДВІЧІ

    {
        name: "Сендвіч з беконом",
        category: "sandwiches",
        price: 160,
        description: "Бекон, яйце, салат та соус.",
        image: "images/bacon_sandwich.jpg"
    },

    {
        name: "Сендвіч з ростбіфом",
        category: "sandwiches",
        price: 190,
        description: "Ростбіф, овочі та фірмовий соус.",
        image: "images/roastbeef_sandwich.jpg"
    },

    {
        name: "Сендвіч Цезар",
        category: "sandwiches",
        price: 180,
        description: "Курка, салат, пармезан та соус Цезар.",
        image: "images/caesar_sandwich.jpg"
    },

    {
        name: "Сендвіч з лососем",
        category: "sandwiches",
        price: 200,
        description: "Лосось, крем-сир та свіжі овочі.",
        image: "images/salmon_sandwich.jpg"
    },

    {
        name: "Чізбургер",
        category: "sandwiches",
        price: 250,
        description: "Соковита котлета, сир, овочі та соус.",
        image: "images/cheeseburger.jpg"
    },


    // 🍰 ДЕСЕРТИ

    {
        name: "Круасан класичний",
        category: "desserts",
        price: 75,
        description: "Хрусткий французький круасан.",
        image: "images/croissant.jpg"
    },

    {
        name: "Круасан з шоколадом",
        category: "desserts",
        price: 90,
        description: "Хрусткий круасан з шоколадною начинкою.",
        image: "images/chocolate_croissant.jpg"
    },

    {
        name: "Чізкейк",
        category: "desserts",
        price: 120,
        description: "Ніжний вершковий чізкейк.",
        image: "images/cheesecake.jpg"
    },

    {
        name: "Тірамісу",
        category: "desserts",
        price: 140,
        description: "Класичний італійський десерт з кавовим ароматом.",
        image: "images/tiramisu.jpg"
    },

    {
        name: "Шоколадний фондан",
        category: "desserts",
        price: 155,
        description: "Теплий шоколадний десерт з рідкою серединкою.",
        image: "images/chocolate_fondant.jpg"
    },

    {
        name: "Морквяний торт",
        category: "desserts",
        price: 130,
        description: "Пряний морквяний бісквіт з кремом.",
        image: "images/carrot_cake.jpg"
    }

];


// ==========================================
// 2. КОНТЕЙНЕР МЕНЮ
// ==========================================

const menuGrid = document.querySelector("#menuGrid");


// ==========================================
// 3. СТВОРЕННЯ КАРТКИ
// ==========================================

function createCard(item) {

    const card = document.createElement("div");

    card.className = "menu-card";

    card.dataset.category = item.category;

    card.innerHTML = `

        <div class="menu-card-image">

            <img
                src="${item.image}"
                alt="${item.name}"
            >

        </div>

        <div class="menu-card-content">

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <span>${item.price} ₴</span>

        </div>

    `;

    menuGrid.appendChild(card);
}


// ==========================================
// 4. ВИВОДИМО ВСІ СТРАВИ
// ==========================================

menuItems.forEach(item => {

    createCard(item);

});


// ==========================================
// 5. ФІЛЬТРИ
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const cards =
            document.querySelectorAll(".menu-card");

        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ==========================================
// 6. МОДАЛЬНЕ ВІКНО
// ==========================================

const modal = document.createElement("div");

modal.className = "modal";

modal.innerHTML = `

    <div class="modal-content">

        <button class="modal-close">
            ×
        </button>

        <div class="modal-image">
        </div>

        <div class="modal-info">

            <p class="small-title">
                КАВʼЯРНЯ ҐОЛД
            </p>

            <h2 class="modal-title">
            </h2>

            <p class="modal-description">
            </p>

            <span class="modal-price">
            </span>

        </div>

    </div>

`;

document.body.appendChild(modal);


// ==========================================
// 7. ЕЛЕМЕНТИ МОДАЛЬНОГО ВІКНА
// ==========================================

const modalClose =
    modal.querySelector(".modal-close");

const modalTitle =
    modal.querySelector(".modal-title");

const modalDescription =
    modal.querySelector(".modal-description");

const modalPrice =
    modal.querySelector(".modal-price");

const modalImage =
    modal.querySelector(".modal-image");


// ==========================================
// 8. ВІДКРИТТЯ МОДАЛЬНОГО ВІКНА
// ==========================================

function openModal(item) {

    modalTitle.textContent =
        item.name;

    modalDescription.textContent =
        item.description;

    modalPrice.textContent =
        `${item.price} ₴`;

    modalImage.innerHTML = `

        <img
            src="${item.image}"
            alt="${item.name}"
        >

    `;

    modal.classList.add("show");

}


// ==========================================
// 9. КЛІК ПО КАРТЦІ
// ==========================================

document.addEventListener("click", event => {

    const card =
        event.target.closest(".menu-card");

    if (!card) {

        return;

    }

    const itemName =
        card.querySelector("h3").textContent.trim();

    const item =
        menuItems.find(
            item => item.name === itemName
        );

    if (item) {

        openModal(item);

    }

});


// ==========================================
// 10. ЗАКРИТТЯ МОДАЛЬНОГО ВІКНА
// ==========================================

modalClose.addEventListener("click", () => {

    modal.classList.remove("show");

});


// ==========================================
// 11. ЗАКРИТТЯ ПО ФОНУ
// ==========================================

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


// ==========================================
// 12. ESC — ЗАКРИТИ ВІКНО
// ==========================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


// ==========================================
// 13. КНОПКА "МЕНЮ"
// ==========================================

const menuLink =
    document.querySelector('a[href="#menu"]');

const menu =
    document.querySelector("#menu");

if (menuLink && menu) {

    menuLink.addEventListener("click", event => {

        event.preventDefault();

        menu.classList.add("show");

        menu.scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ==========================================
// 14. КНОПКА "ГОЛОВНА"
// ==========================================

const homeLink =
    document.querySelector('a[href="#"]');

if (homeLink) {

    homeLink.addEventListener("click", event => {

        event.preventDefault();

        if (menu) {

            menu.classList.remove("show");

        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

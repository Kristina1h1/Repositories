/* // Данные об игрушках — замените фото и текст на свои!
const toysData = [
    {
        id: 1,
        name: "Зайка Соня",
        description: "Вязала три вечера. Уши сначала получились разными, но так даже милее.",
        image: "https://via.placeholder.com/400x400?text=Ваша+игрушка",
        type: "bunny"
    },
    {
        id: 2,
        name: "Мишка Кеша",
        description: "Мой первый амигуруми. Косолапый, но очень родной.",
        image: "https://via.placeholder.com/400x400?text=Ваша+игрушка",
        type: "bear"
    },
    {
        id: 3,
        name: "Дракоша Гоша",
        description: "Крылья перевязывала три раза. Зато теперь похож на настоящего.",
        image: "https://via.placeholder.com/400x400?text=Ваша+игрушка",
        type: "other"
    },
    {
        id: 4,
        name: "Зайка Лиза",
        description: "Связана в подарок подруге. Говорит, самая любимая игрушка её дочки.",
        image: "https://via.placeholder.com/400x400?text=Ваша+игрушка",
        type: "bunny"
    },
    {
        id: 5,
        name: "Мишка Тедди",
        description: "В стиле винтаж. Состаренный, с заплатками — очень душевный.",
        image: "https://via.placeholder.com/400x400?text=Ваша+игрушка",
        type: "bear"
    },
    {
        id: 6,
        name: "Лисёнок Огонёк",
        description: "Из пушистой пряжи. Хвост получился просто огонь!",
        image: "https://via.placeholder.com/400x400?text=Ваша+игрушка",
        type: "other"
    }
];

// Функция для отображения карточек
function renderGallery(filterType = "all") {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    
    const filteredToys = filterType === "all" 
        ? toysData 
        : toysData.filter(toy => toy.type === filterType);
    
    if (filteredToys.length === 0) {
        gallery.innerHTML = "<p style='text-align:center; grid-column:1/-1;'>Пока нет игрушек в этой категории 🧶</p>";
        return;
    }
    
    filteredToys.forEach(toy => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.type = toy.type;
        card.dataset.id = toy.id;
        
        card.innerHTML = `
            <img class="card-img" src="${toy.image}" alt="${toy.name}" loading="lazy">
            <div class="card-content">
                <h3>${toy.name}</h3>
                <p>${toy.description}</p>
                <span class="type-tag">${getTypeLabel(toy.type)}</span>
            </div>
        `;
        
        card.addEventListener("click", () => openModal(toy));
        gallery.appendChild(card);
    });
}

function getTypeLabel(type) {
    switch(type) {
        case "bunny": return "🐰 Зайка";
        case "bear": return "🐻 Мишка";
        default: return "✨ Другое";
    }
}

// Модальное окно
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".close");

function openModal(toy) {
    modalImg.src = toy.image;
    modalCaption.textContent = `${toy.name} — ${toy.description}`;
    modal.classList.add("show");
}

closeBtn.onclick = () => modal.classList.remove("show");
modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("show");
};

// Фильтры
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.category;
        renderGallery(category);
    });
});

// Запуск
renderGallery("all"); */
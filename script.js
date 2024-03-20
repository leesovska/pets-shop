const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const template = document.querySelector('#item-template');
const container = document.querySelector('#shop-items');

items.forEach(item => {
  const clone = template.content.cloneNode(true);

  clone.querySelector('h1').textContent = item.title;
  clone.querySelector('p').textContent = item.description;
  clone.querySelector('.price').textContent = item.price;
  clone.querySelector('img').src = item.img;

  const tagsContainer = clone.querySelector('.tags');
    item.tags.forEach(tag => {
      const span = document.createElement('span');
      span.classList.add('tag');
      span.textContent = tag;
      tagsContainer.append(span);
    });

  container.append(clone);
});

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const nothingFound = document.querySelector('#nothing-found');

searchBtn.addEventListener('click', function () {
  const searchLine = searchInput.value.trim().toLowerCase();

  container.innerHTML = '';

  const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchLine));
  if (filteredItems.length === 0) {
    nothingFound.textContent = 'Ничего не найдено';
    return;
  }

  nothingFound.textContent = '';


  filteredItems.forEach(item => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('h1').textContent = item.title;
    clone.querySelector('p').textContent = item.description;
    clone.querySelector('.price').textContent = item.price;
    clone.querySelector('img').src = item.img;
    clone.querySelector('.tags').textContent = item.tags.join(', ');

    container.append(clone);
  });
});
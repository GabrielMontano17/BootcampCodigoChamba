let containerProducts = document.querySelector(".container-cards");
let cartItem = document.querySelector(".cart");
let sidebar = document.querySelector(".sidebar");
let carrito = [];

const showSidebar = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("toggle");
};

const addProduct = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("add")) {
    selectProduct(e);
    fillHtml();
  }
};

const selectProduct = (e) => {
  const obj = {};
  const img = e.target.parentElement.previousElementSibling.src;
  const selector = e.target.previousElementSibling;
  const data = selector.children;
  obj.name = data[0].textContent;
  obj.price = data[1].textContent;
  obj.img = img;
  carrito = [...carrito, obj];
  console.log(img);
};

cartItem.addEventListener("click", showSidebar);

containerProducts.addEventListener("click", addProduct);

const fillHtml = () => {
  clearHtml();
  carrito.forEach((product, i) => {
    const { name, price, img } = product;
    const row = document.createElement("div");
    row.classList.add("item-cart");
    row.innerHTML = `
    <div>
    <p>${i + 1}. ${name}</p>
    <p>${price}</p>
    </div>
    <img class='img-cart' src="${img}" alt="" />
   
    `;

    sidebar.appendChild(row);
  });
};

const clearHtml = () => {
  sidebar.innerHTML = "";
};

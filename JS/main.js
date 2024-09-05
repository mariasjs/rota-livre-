/*Começo do dropdown da barra de navegação de todas as páginas*/


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelectorAll('.selected');

select.addEventListener('click', () =>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option =>{
    option.addEventListener('click', () =>{
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove ('menu-open');
        options.forEach(option =>{
            option.classList.remove('active');
        });

        option.classList.add('active');
      });
    });
  });
/*Fim do dropdown da barra de navegação de todas as páginas*/
/*Começo do do menu lateral */
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const exitIcon = document.getElementById('exitIcon');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
};


/*Fim do do menu lateral */
/*Dashboard*/
function addClickEvent() {
  mobileMenu = document.querySelector(".mobile-menu");
  navList = document.querySelector(".nav-list");

  mobileMenu.addEventListener("click", navList.classList.toggle("active"));
}

function openModal() {
  const modal = document.querySelector(".modal");
  const viagem = document.querySelector(".viagem");
  viagem.addEventListener("click", modal.classList.toggle("open"));
}

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector(".div-dias");

  for (let i = 1; i <= 31; i++) {
    const span = document.createElement("div");
    span.classList.add("dias");
    span.textContent = i;
    mainElement.appendChild(span);
  }

  for (let i = 1; i <= 6; i++) {
    const div = document.createElement("div");
    div.classList.add("dias");
    div.classList.add("apagado");
    div.textContent = i;
    mainElement.appendChild(div);
  }
});

var botao1 = document.getElementById("saiba_mais1");
botao1.addEventListener("click", function(){
  window.location.href = "http://127.0.0.1:5500/servicos-paises.html"
})

var botao2 = document.getElementById("saiba_mais2");
botao2.addEventListener("click", function(){
  window.location.href = "http://127.0.0.1:5500/servicos%20-%20excursoes.html"
})
var botao3 = document.getElementById("saiba_mais3");
botao3.addEventListener("click", function(){
  window.location.href = "http://127.0.0.1:5500/servicos.html"
})





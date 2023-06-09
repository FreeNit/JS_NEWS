import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';

import { filterByChosenCategorie } from './js/fetchData/filters';
import { filterByDateMostViwed } from './js/fetchData/filters';

import createCardsMarkup from './js/createCardsMarkup';
import { refs } from './js/header/refs';
import { onBurgerBtnClick } from './js/header/mobileBurger';
import { onSearchIconClick } from './js/header/searchInput';
import { addActiveClassToCurrentPage } from './js/header/currentPage';

import { darkmode } from './js/header/darkmode';

import { addNewsToLocalStorage } from './js/addNewsToLocalStorage';

import { getArticlesByFormSubmit } from './js/getArticlesByFormSubmit';
import displayWeather from './js/displayWeather';

import flatpickr from './js/calendar.js';

const categoriesEl = document.querySelector('.filter-wrapper');
const cardContainer = document.querySelector('.card-container');
const datePicker = document.querySelector('.date-input');

addActiveClassToCurrentPage();

// *************** Header Functionality ***************
// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
//  -> open search by click on magnifying glass
refs.searchIcon.addEventListener('click', onSearchIconClick);
// -> search input header by submit
refs.headerSearch.addEventListener('submit', getArticlesByFormSubmit);

// *************** Render Categories ******************
createRenderCategoriesMarkup();

// -> Get category value
categoriesEl.addEventListener('click', event => {
  showHideOthersCategories(event);

  let categorySelected = '';
  if (
    event.target.innerText.toLowerCase() !== 'categories' &&
    event.target.innerText.toLowerCase() !== 'others'
  ) {
    categorySelected = event.target.innerText.toLowerCase().trim();
    filterByChosenCategorie(categorySelected);
  }
});

// *************** Render News Cards ******************
createCardsMarkup();
// console.log(cardContainer);

// -> Add to local Storage
cardContainer.addEventListener('click', addNewsToLocalStorage);

// *************** Render Forecast ******************

displayWeather();

// **************** FilterByDate *********************

datePicker.addEventListener('change', filterByDateMostViwed);

//*********************************************************** */

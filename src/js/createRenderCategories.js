const debounce = require('lodash.debounce');

import NewsApiService from './fetchData/fetchCategories';

const newsApi = new NewsApiService();
newsApi.fetchCategories();

const markupSixCategoriesContainer = document.querySelector(
  '.filter-wrapper--categories'
);
let othersCategoriesContainer = document.querySelector('.filters--others');
let categoriesArr = [];

window.addEventListener('resize', debounce(onRender, 50));

function onRender() {
  let windowWidth = window.screen.width;

  // ************************************************************************
  if (windowWidth >= 1280) {
    // -> get first six categories
    const firstSixCategories = categoriesArr.slice(0, 6);
    // -> get the rest categories
    const restCategories = categoriesArr.slice(6);

    firstSixCategories.push('Others');
    // console.log(restCategories);
    // -> create html markup
    const firstSixCategoriesMarkup = firstSixCategories
      .map((el, index) => {
        return `<span class="filters--category news-category category-${index}">${el}</span>`;
      })
      .join('');

    const otherCategoriesMarkup = restCategories
      .map(el => {
        return `<span class="other-category news-category">${el}</span>`;
      })
      .join('');

    // console.log(otherCategoriesMarkup);
    // -> render
    markupSixCategoriesContainer.innerHTML = firstSixCategoriesMarkup;
    othersCategoriesContainer.innerHTML = otherCategoriesMarkup;

    // -> position 'Others' section directly below the 'Others' category
    const lastCategory = document.querySelector('.category-6');
    othersCategoriesContainer.style.left = lastCategory.offsetLeft + 'px';
  }

  // ************************************************************************
  if (windowWidth >= 768 && windowWidth < 1280) {
    // -> get first four categories
    const firstSixCategories = categoriesArr.slice(0, 4);
    // -> get the rest categories
    const restCategories = categoriesArr.slice(4);

    firstSixCategories.push('Others');
    // console.log(restCategories);
    // -> create html markup
    const firstSixCategoriesMarkup = firstSixCategories
      .map((el, index) => {
        return `<span class="filters--category news-category category-${index}">${el}</span>`;
      })
      .join('');

    const otherCategoriesMarkup = restCategories
      .map(el => {
        return `<span class="other-category news-category">${el}</span>`;
      })
      .join('');

    // console.log(otherCategoriesMarkup);
    // -> render
    markupSixCategoriesContainer.innerHTML = firstSixCategoriesMarkup;
    othersCategoriesContainer.innerHTML = otherCategoriesMarkup;

    // -> position 'Others' section directly below the 'Others' category
    const lastCategory = document.querySelector('.category-4');
    othersCategoriesContainer.style.left = lastCategory.offsetLeft + 'px';
  }

  // ************************************************************************
  if (windowWidth < 768) {
    // -> get one category
    const firstElement = ['Categories'];
    console.log(firstElement);
    // -> get the rest categories
    const restCategories = categoriesArr;

    // -> create html markup
    const firstSixCategoriesMarkup = firstElement
      .map((el, index) => {
        return `<span class="filters--category news-category category-${index}">${el}</span>`;
      })
      .join('');

    const otherCategoriesMarkup = restCategories
      .map(el => {
        return `<span class="other-category news-category">${el}</span>`;
      })
      .join('');

    // -> render
    markupSixCategoriesContainer.innerHTML = firstSixCategoriesMarkup;
    othersCategoriesContainer.innerHTML = otherCategoriesMarkup;

    // -> position 'Others' section directly below the 'Others' category
    // console.log(markupSixCategoriesContainer.offsetLeft);
    othersCategoriesContainer.style.left =
      markupSixCategoriesContainer.offsetLeft + 'px';
  }
}

// **************************************************
// ! create and render markup with fetched categories
// **************************************************
async function createRenderCategoriesMarkup() {
  categoriesArr = await newsApi.fetchCategories();
  // console.log(categoriesArr);

  // ************************************************************************
  if (window.screen.width >= 1280) {
    // -> get first six categories
    const firstSixCategories = categoriesArr.slice(0, 6);
    // -> get the rest categories
    const restCategories = categoriesArr.slice(6);

    firstSixCategories.push('Others');
    // console.log(restCategories);
    // -> create html markup
    const firstSixCategoriesMarkup = firstSixCategories
      .map((el, index) => {
        return `<span class="filters--category news-category category-${index}">${el}</span>`;
      })
      .join('');

    const otherCategoriesMarkup = restCategories
      .map(el => {
        return `<span class="other-category news-category">${el}</span>`;
      })
      .join('');

    // console.log(otherCategoriesMarkup);
    // -> render
    markupSixCategoriesContainer.innerHTML = firstSixCategoriesMarkup;
    othersCategoriesContainer.innerHTML = otherCategoriesMarkup;

    // -> position 'Others' section directly below the 'Others' category
    const lastCategory = document.querySelector('.category-6');
    othersCategoriesContainer.style.left = lastCategory.offsetLeft + 'px';
  }

  // ************************************************************************
  if (window.screen.width >= 768 && window.screen.width < 1280) {
    // -> get first four categories
    const firstSixCategories = categoriesArr.slice(0, 4);
    // -> get the rest categories
    const restCategories = categoriesArr.slice(4);

    firstSixCategories.push('Others');
    // console.log(restCategories);
    // -> create html markup
    const firstSixCategoriesMarkup = firstSixCategories
      .map((el, index) => {
        return `<span class="filters--category news-category category-${index}">${el}</span>`;
      })
      .join('');

    const otherCategoriesMarkup = restCategories
      .map(el => {
        return `<span class="other-category news-category">${el}</span>`;
      })
      .join('');

    // console.log(otherCategoriesMarkup);
    // -> render
    markupSixCategoriesContainer.innerHTML = firstSixCategoriesMarkup;
    othersCategoriesContainer.innerHTML = otherCategoriesMarkup;

    // -> position 'Others' section directly below the 'Others' category
    const lastCategory = document.querySelector('.category-4');
    othersCategoriesContainer.style.left = lastCategory.offsetLeft + 'px';
  }

  // ************************************************************************
  if (window.screen.width < 768) {
    // -> get one category
    const firstElement = ['Categories'];
    // -> get the rest categories
    const restCategories = categoriesArr;

    // -> create html markup
    const firstSixCategoriesMarkup = firstElement
      .map((el, index) => {
        return `<span class="filters--category news-category category-${index}">${el}</span>`;
      })
      .join('');

    const otherCategoriesMarkup = restCategories
      .map(el => {
        return `<span class="other-category news-category">${el}</span>`;
      })
      .join('');

    // console.log(otherCategoriesMarkup);
    // -> render
    markupSixCategoriesContainer.innerHTML = firstSixCategoriesMarkup;
    othersCategoriesContainer.innerHTML = otherCategoriesMarkup;

    // -> position 'Others' section directly below the 'Others' category
    othersCategoriesContainer.style.left = firstElement.offsetLeft + 'px';
  }
}

export default createRenderCategoriesMarkup;

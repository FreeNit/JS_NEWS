function showHideOthersCategories(el) {
  const otherCategoriesEl = document.querySelector('.filters--others');

  if (window.screen.width >= 1280) {
    if (el.target.innerText.toLowerCase() === 'others') {
      // console.log(el.target.innerText);
      otherCategoriesEl.classList.toggle('isOpen');
    }
  }
  if (window.screen.width >= 768 && window.screen.width < 1280) {
    if (el.target.innerText.toLowerCase() === 'others') {
      const otherCategoriesEl =
        el.target.parentNode.parentNode.querySelector('.filters--others');
      // console.log(otherCategoriesEl);

      otherCategoriesEl.classList.toggle('isOpen');
    }
  }
  if (window.screen.width < 768) {
    if (el.target.innerText.toLowerCase() === 'categories') {
      otherCategoriesEl.classList.toggle('isOpen');
    }
  }
}

export default showHideOthersCategories;

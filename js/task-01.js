const categoriesList = document.getElementById('categories');

const categories = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li');
  console.log(`\nCategory: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
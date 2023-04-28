// Get the hamburger menu icon and navigation menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('header nav');

// Toggle the navigation menu when the hamburger menu icon is clicked
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Get the form search input and search button
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

// Handle the search form submission
function handleSearch(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the search query from the input field
  const query = searchInput.value;

  // Redirect to the search results page with the query as a parameter
  window.location.href = `search.html?q=${query}`;
}

// Add a click event listener to the search button
searchButton.addEventListener('click', handleSearch);

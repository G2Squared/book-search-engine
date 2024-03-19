// Function to make a search request to the Google Books API
// The query parameter represents the search query entered by the user
// Example usage: searchGoogleBooks('harry potter')
export const searchGoogleBooks = (query) => {
  // Sending a GET request to the Google Books API with the specified query
  // The query parameter is appended to the API URL
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

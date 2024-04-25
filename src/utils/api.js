const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

export const fetchMealByText = async (search) => {
  return fetch(API_URL+search)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json;
      })
      .catch(error => {
        console.error(error);
      });
}
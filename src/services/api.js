const BASE_URL = "https://opentdb.com/api.php";
async function getQuestions(n, category = "", difficulty = "") {
    console.log("test from api")
  try {
    const response = await fetch(
      `${BASE_URL}?amount=${n}&category=${category}&difficulty=${difficulty}`
    );
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export default getQuestions;

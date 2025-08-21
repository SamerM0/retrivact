const BASE_URL = "https://opentdb.com/api.php";
const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};
async function getData(n, category = "", difficulty = "") {
  let retries = 3;
  let time = 3500;
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(
        `${BASE_URL}?amount=${n}&category=${category}&difficulty=${difficulty}`
      );
      if (response.status === 429) {
        if (i < retries - 1) {
          await delay(time);
          continue;
        } else {
          console.error("Failed to load questions");
        }
      }
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error("Failed to load questions ", error);
      return [];
    }
  }
}
export default getData;

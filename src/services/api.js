const BASE_URL = "https://opentdb.com/api.php";
const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
async function getData(n, category = "", difficulty = "") {
  let retries = 3;
  let time = 3500;
  for (let i = 0; i < retries; i++) {
    console.log("IN GET DATA ", i);
    try {
      const response = await fetch(
        `${BASE_URL}?amount=${n}&category=${category}&difficulty=${difficulty}`
      );
      if (response.status !== 200) {
        await delay(time);
        continue;
      } else {
        const json = await response.json();
        return json.results;
      }
    } catch (error) {
      console.error("Failed to load questions ", error);
      return [];
    }
  }
}
export default getData;

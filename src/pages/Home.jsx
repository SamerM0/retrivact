import React from "react";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-primary font-funnel text-6xl tracking-widest mt-25">
        retrivact
      </h1>
      <div className="flex flex-col mt-15 ">
        <h3 className="text-dark-shade text-lg ">Choose Category</h3>
        <select className="dropdown">
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals & Theatres</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Anime & Manga</option>
          <option value="32">Cartoon & Animations</option>
        </select>
        <h3 className="mt-5 text-dark-shade text-lg">Choose Category</h3>
        <select className="dropdown">
			<option value="any">Any Difficulty</option>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>
      </div>
    </div>
  );
}

export default Home;

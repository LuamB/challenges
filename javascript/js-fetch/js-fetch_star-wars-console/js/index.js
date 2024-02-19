console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Bad request ->", response.status);
      return;
    }
    // console.log("respone: ", response);

    // const data = await response.json();
    // console.log("data: ", data);

    // const characters = data.results;
    // let charName = "";
    // let charEyeCol = "";

    // characters.forEach((character) => {
    //   charName = character.name;
    //   charEyeCol = character.eye_color;

    //   console.log(`${charName} has ${charEyeCol} eyes`);
    // });
    // Marcel's solution
    const characters = await response.json();

    characters.results.forEach((character) => {
      console.log("----------------");
      console.log("name -->", character.name);
      console.log("height -->", character.height);
      if (character.name === "R2-D2") {
        console.log(` R2-D2 eye color is: ${character.eye_color}`);
      }
    });
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

fetchData();

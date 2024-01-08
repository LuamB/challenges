console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);

    const characters = data.results;
    let charName = "";
    let charEyeCol = "";

    characters.forEach((character) => {
      charName = character.name;
      charEyeCol = character.eye_color;

      console.log(`${charName} has ${charEyeCol} eyes`);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();

import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const roomNames = [
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Bathroom",
  "Garage",
  "Porch",
  "Garden",
  "Office",
];
const initLights = roomNames.map((name, index) => ({
  id: index + 1,
  isOn: false,
  name: name,
}));

export default function App({ Component, pageProps }) {
  // const [isOn, setIsOn] = useState(false);
  const [lights, setLights] = useState(initLights);

  const lightsOnCount = lights.filter((light) => light.isOn === true).length;

  const isDimmed =
    lights.filter((light) => light.isOn === false).length === lights.length;

  function handleToggle(lightId) {
    const updatedLights = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLights);
  }

  function handleAllOn() {
    const updatedLights = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(updatedLights);
  }

  function handleAllOff() {
    const updatedLights = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(updatedLights);
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        lightsOnCount={lightsOnCount}
        toggleLight={handleToggle}
        handleAllOn={handleAllOn}
        handleAllOff={handleAllOff}
      />
    </Layout>
  );
}

// () => {handleToggle()}

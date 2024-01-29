import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initLights = [
  { id: 1, isOn: false, name: "Living Room" },
  { id: 2, isOn: false, name: "Kitchen" },
  { id: 3, isOn: false, name: "Bedroom" },
  { id: 4, isOn: false, name: "Bathroom" },
  { id: 5, isOn: false, name: "Garage" },
  { id: 6, isOn: false, name: "Porch" },
  { id: 7, isOn: false, name: "Garden" },
  { id: 8, isOn: false, name: "Office" },
];

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

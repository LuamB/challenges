export default function ColoredNumber({ value }) {
  console.log("Received value:", value);
  return (
    <h2 style={{ color: `hsl(${230 - (value / 100) * 230}deg 100% 50%)` }}>
      {value}
    </h2>
  );
}

//hsl(hue, saturation, lightness)
//hue = 230 - (value/100) * 230
//saturation = 100%
//lightness = 50%

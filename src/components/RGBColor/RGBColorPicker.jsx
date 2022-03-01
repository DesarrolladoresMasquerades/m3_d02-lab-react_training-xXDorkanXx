import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });

  const updateColor = (e) => {
    setColor({ ...color, [e.target.name]: e.target.value });
  };

  const divStyle = {
    backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
  };

  return (
    <div>
      <SingleColorPicker name="r" update={updateColor} value={color.r} />
      <SingleColorPicker name="g" update={updateColor} value={color.g} />
      <SingleColorPicker name="b" update={updateColor} value={color.b} />

      <div className="rgb-result">
        <div className="square" style={divStyle}></div>
        <div>
          rgb({color.r},{color.g},{color.b})
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;

import { useState } from "react";

const GradientGenerator = () => {
  const [gradientCode, setGradientCode] = useState(
    "linear-gradient(to right, #ff7e5f, #feb47b)"
  );
  const [startColor, setStartColor] = useState("#ff7e5f");
  const [endColor, setEndColor] = useState("#feb47b");
  const [direction, setDirection] = useState("to right");

  const handleGradientChange = () => {
    const newGradient = `linear-gradient(${direction}, ${startColor}, ${endColor})`;
    setGradientCode(newGradient);
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
    handleGradientChange();
  };

  const handleColorChange = (color, isStartColor) => {
    isStartColor ? setStartColor(color) : setEndColor(color);
    handleGradientChange();
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Gradient Generator
      </h1>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label
            htmlFor="start-color"
            className="block text-gray-700 font-bold mb-2"
          >
            Start Color:
          </label>
          <input
            id="start-color"
            type="color"
            className="rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={startColor}
            onChange={(e) => handleColorChange(e.target.value, true)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="end-color"
            className="block text-gray-700 font-bold mb-2"
          >
            End Color:
          </label>
          <input
            id="end-color"
            type="color"
            className="rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={endColor}
            onChange={(e) => handleColorChange(e.target.value, false)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gradient-direction"
            className="block text-gray-700 font-bold mb-2"
          >
            Gradient Direction:
          </label>
          <select
            id="gradient-direction"
            className="w-full bg-gray-200 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={direction}
            onChange={(e) => handleDirectionChange(e.target.value)}
          >
            <option value="to top">To Top</option>
            <option value="to bottom">To Bottom</option>
            <option value="to left">To Left</option>
            <option value="to right">To Right</option>
            <option value="to top left">To Top Left</option>
            <option value="to top right">To Top Right</option>
            <option value="to bottom left">To Bottom Left</option>
            <option value="to bottom right">To Bottom Right</option>
          </select>
        </div>
        <div
          className="w-full h-32 rounded-md mb-4"
          style={{ background: gradientCode }}
        ></div>
      </div>
    </div>
  );
};

export default GradientGenerator;

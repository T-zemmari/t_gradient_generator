import { useState } from "react";
import { BsArrowUp, BsArrowDown, BsArrowLeft, BsArrowRight } from "react-icons/bs";

const GradientGenerator = () => {
  const [gradientCode, setGradientCode] = useState(
    "linear-gradient(to right, #5C6FFF, #E28136)"
  );
  const [startColor, setStartColor] = useState("#5C6FFF");
  const [endColor, setEndColor] = useState("#E28136");
  const [direction, setDirection] = useState("to right");
  const [gradientType, setGradientType] = useState("linear");

  const handleGradientChange = () => {
    let newGradient;
    if (gradientType === "linear") {
      newGradient = `linear-gradient(${direction}, ${startColor}, ${endColor})`;
    } else {
      newGradient = `radial-gradient(circle, ${startColor}, ${endColor})`;
    }
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

  const DirectionIcon = ({ direction }) => {
    switch (direction) {
      case "to top":
        return <BsArrowUp style={{color:'black',fontSize:'25px'}}/>;
      case "to bottom":
        return <BsArrowDown style={{color:'black',fontSize:'25px'}}/>;
      case "to left":
        return <BsArrowLeft style={{color:'black',fontSize:'25px'}}/>;
      case "to right":
        return <BsArrowRight style={{color:'black',fontSize:'25px'}}/>;
      case "to top left":
        return <BsArrowUp style={{ transform: "rotate(-45deg)",color:'black',fontSize:'25px' }} />;
      case "to top right":
        return <BsArrowUp style={{ transform: "rotate(45deg)",color:'black',fontSize:'25px' }} />;
      case "to bottom left":
        return <BsArrowDown style={{ transform: "rotate(45deg)" ,color:'black',fontSize:'25px'}} />;
      case "to bottom right":
        return <BsArrowDown style={{ transform: "rotate(-45deg)",color:'black',fontSize:'25px' }} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full min-h-screen p-8 bg-gray-100 flex flex-col justify-end items-end`}
      style={{ background: `${gradientCode}` }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4"></h1>
      <div
        className="w-full max-w-lg bg-[#ffffff40] rounded-lg shadow-md p-6"
        id="container_controls"
      >
        <div className="flex flex-row justify-between">
          <div className="mb-4 flex flex-col justify-center items-center">
            <label
              htmlFor="start-color"
              className="block text-[#8b2f2f] font-bold mb-2"
            >
              START
            </label>
            <input
              id="start-color"
              type="color"
              className="rounded-md py-1 px-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={startColor}
              onChange={(e) => handleColorChange(e.target.value, true)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="end-color"
              className="block text-[#8b2f2f] font-bold mb-2"
            >
              END
            </label>
            <input
              id="end-color"
              type="color"
              className="rounded-md py-1 px-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={endColor}
              onChange={(e) => handleColorChange(e.target.value, false)}
            />
          </div>
        </div>
        <div className="mb-4 ">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-1 cursor-pointer flex-col"
              onClick={() => setGradientType("linear")}
            >
              <span>Linear</span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer flex-col"
              onClick={() => setGradientType("radial")}
            >
              <span>Radial</span>
            </div>
          </div>
        </div>
        <div className="mb-4 ">
          <div className="flex items-center justify-between">
            {[
              "to top",
              "to bottom",
              "to left",
              "to right",
              "to top left",
              "to top right",
              "to bottom left",
              "to bottom right",
            ].map((dir) => (
              <div
                key={dir}
                className="flex items-center gap-1 cursor-pointer flex-col"
                onClick={() => handleDirectionChange(dir)}
              >
                <DirectionIcon direction={dir}/>
                {/*<span>{dir}</span>*/}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;

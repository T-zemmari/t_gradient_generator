import { useState } from "react";

const GradientGenerator = () => {
  const [gradientCode, setGradientCode] = useState("linear-gradient(to right, #ff7e5f, #feb47b)");

  const handleGradientChange = (e) => {
    setGradientCode(e.target.value);
  };

  return (
    <div className="w-full h-full p-8 bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Gradient Generator</h1>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="gradient" className="block text-gray-700 font-bold mb-2">
            Gradient Code:
          </label>
          <input
            id="gradient"
            type="text"
            className="w-full bg-gray-200 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter gradient code..."
            value={gradientCode}
            onChange={handleGradientChange}
          />
        </div>
        <div
          className="w-full h-32 rounded-md mb-4"
          style={{ background: gradientCode }}
        ></div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Aplicar
        </button>
      </div>
    </div>
  );
};

export default GradientGenerator;

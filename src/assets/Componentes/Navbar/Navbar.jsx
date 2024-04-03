import logo from "../../logos/logo_1.png";
const Navbar = () => {
  return (
    <nav className="w-full  bg-gray-800 flex justify-center items-center p-4">
      <img className="w-64" src={logo} alt="logo" />
    </nav>
  );
};

export default Navbar;

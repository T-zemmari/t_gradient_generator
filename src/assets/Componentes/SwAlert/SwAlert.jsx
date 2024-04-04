import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SwAlert = (props) => {
  return MySwal.fire({
    html: `<h4>${props}</h4>`,
    icon: "success",
  });
};

export default SwAlert;
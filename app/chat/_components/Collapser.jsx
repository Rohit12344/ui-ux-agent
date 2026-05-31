import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Collapser({ isSideBarOpen }) {
  return <>{isSideBarOpen ? <FaChevronLeft /> : <FaChevronRight />}</>;
}

export default Collapser;

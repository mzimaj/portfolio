import { FaChevronDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span>Explore</span>
      <FaChevronDown />
    </div>
  );
}

export default ScrollIndicator;
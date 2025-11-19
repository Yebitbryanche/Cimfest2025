import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 z-50 
          bg-primary text-white p-3 rounded-full 
          shadow-lg hover:bg-primary/80 
          transition-all duration-300
        "
      >
        <IoIosArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;

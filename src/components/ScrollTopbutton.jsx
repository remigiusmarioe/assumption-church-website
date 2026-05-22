import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { FaCircleChevronUp } from "react-icons/fa6";

const ScrollTopButton = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisible = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    <button
      onClick={scrollToTop}
      className={` scroll-up 
        fixed bottom-6 right-6 z-50
        bg-amber-900 text-white
        text-xs  font-thin
         rounded-full
        shadow-xl
        transition-all duration-300
        hover:scale-110 hover:bg-amber-800
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <FaCircleChevronUp  />
    </button>
  );
};

export default ScrollTopButton;
export const handleScrollGuest = (setIsVisible,divref,top) => {
    if (divref.current) {
      const rect = divref.current.getBoundingClientRect();
      // console.log("rect", rect.top);
      if (rect.top <= 380) {
        setIsVisible(true);
      }
    }
  };


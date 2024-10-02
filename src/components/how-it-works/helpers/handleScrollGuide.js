export const handleScrollGuide = (setIsVisible,divref) => {
    if (divref.current) {
      const rect = divref.current.getBoundingClientRect();
      if (rect.top < 200) {
        setIsVisible(true);
      }
    }
  };
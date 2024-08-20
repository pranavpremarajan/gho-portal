import { useState, useEffect } from 'react';

// Hook to detect scroll position
function useScrolled() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrolled;
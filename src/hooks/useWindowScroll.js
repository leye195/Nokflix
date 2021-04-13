import React, { useEffect, useRef, useState } from 'react';

const useWindowScroll = () => {
  const [scroll,setScroll] = useState({
      scrollX: 0,
      scrollY: 0,
  });
  const isMounted = useRef(false);


  useEffect(() => {
    const handleScroll = () => {
      const {scrollX,scrollY} = window;
      setScroll({scrollX,scrollY});
    }  

    isMounted.current = true;
    window.addEventListener('scroll',handleScroll);
    return () => {
      if(isMounted.current){
        window.removeEventListener('scroll', handleScroll);
      }
      isMounted.current = false;
    }
  },[])
  return scroll;
}

export default useWindowScroll;

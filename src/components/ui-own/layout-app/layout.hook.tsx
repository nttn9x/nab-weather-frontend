import { useEffect, useState } from "react";

function useLayoutHook(history: any) {
  const [isShow, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  return {
    isShow,
  };
}

export default useLayoutHook;

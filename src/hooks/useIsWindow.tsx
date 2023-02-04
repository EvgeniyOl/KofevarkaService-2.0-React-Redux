import { useEffect, useState } from 'react';
const useIsWindow = () => {
  const [isWindow, setWindow] = useState<boolean>(false);

  useEffect(() => {
    setWindow(typeof window !== 'undefined');
  }, []);

  return { isWindow };
};

export default useIsWindow;

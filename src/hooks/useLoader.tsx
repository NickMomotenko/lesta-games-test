import { useEffect, useState } from "react";

export const useLoader = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = `hidden`;
    } else document.body.style.overflow = `auto`;
  }, [active]);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 1500);
  }, []);

  return { active, setActive };
};

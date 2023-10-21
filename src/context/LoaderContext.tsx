import React, { useEffect, useState, createContext } from "react";

interface DataContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoaderProviderProps {
  children: React.ReactNode;
}

export const LoaderContext = createContext<DataContextProps>({
  active: false,
  setActive: () => {},
});

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = `hidden`;
    } else document.body.style.overflow = `auto`;
  }, [active]);

  return (
    <LoaderContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

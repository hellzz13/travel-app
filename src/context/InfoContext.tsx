"use client";
import { createContext, useState } from "react";

interface ITravaData {
  origin: string;
  destiny: string;
  dateOrigin: string;
  dateDestiny: string;
  adult: string;
  kids: string;
}

type InfoProps = {
  dataCheckout: ITravaData | null;
  setDataCheckout: (state: ITravaData) => void;
};

const DEFAULT_VALUE = {
  dataCheckout: null,
  setDataCheckout: () => {},
};

const InfoContext = createContext<InfoProps>(DEFAULT_VALUE);

interface IProvider {
  children: React.ReactNode;
}

const InfoContextProvider: React.FC<IProvider> = ({ children }) => {
  const [dataCheckout, setDataCheckout] = useState<ITravaData | null>(
    DEFAULT_VALUE.dataCheckout
  );

  return (
    <InfoContext.Provider
      value={{
        dataCheckout,
        setDataCheckout,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContextProvider };
export default InfoContext;

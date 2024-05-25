"use client";
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type T_GdprState = any | null;

export type T_GdprContextState = {
  data: T_GdprState;
  setData: Dispatch<SetStateAction<T_GdprState>>;
};

export const GdprContext = createContext<T_GdprContextState | null>(null);

export const GdprContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<T_GdprState>(null);

  return (
    <GdprContext.Provider value={{ data, setData }}>
      {children}
    </GdprContext.Provider>
  );
};

export default GdprContextProvider;

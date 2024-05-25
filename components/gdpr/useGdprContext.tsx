import { useContext } from "react";
import { GdprContext } from "./GdprContext";

export default function useGdprContext() {
  const context = useContext(GdprContext);

  if (!context) {
    throw new Error(
      "useGdprContext must be used within the GdprContextProvider"
    );
  }

  return context;
}

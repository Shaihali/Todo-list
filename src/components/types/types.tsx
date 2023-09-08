import { Theme } from "@mui/material";
import { ReactNode } from "react";

export interface IDb {
  name: string;
  age: number;
  subscription: string;
  employment: string;
};

export type TableContextType = {
  data: IDb[];
  setData: React.Dispatch<React.SetStateAction<IDb[]>>;
  selectedRow: IDb | null;
  setSelectedRow: React.Dispatch<React.SetStateAction<IDb | null>>;
  currentTheme: Theme | null;
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
};
export type TableContextProviderProps = {
  children: ReactNode;
};
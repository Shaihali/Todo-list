import { createContext, useEffect, useState } from 'react';
import { IDb, TableContextProviderProps, TableContextType } from '../types/types';
import { Theme, createTheme } from '@mui/material';

export const TableContexts = createContext<TableContextType | undefined>(undefined);

export const TableContextProvider: React.FC<TableContextProviderProps> = ({ children }) => {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const [data, setData] = useState<IDb[]>([]);
  const [selectedRow, setSelectedRow] = useState<IDb | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(lightTheme);
  
  useEffect(() => {
    const storedData = localStorage.getItem('db');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <TableContexts.Provider value={{ data, setData, selectedRow, setSelectedRow, currentTheme, setCurrentTheme }}>
      {children}
    </TableContexts.Provider>
  );
}
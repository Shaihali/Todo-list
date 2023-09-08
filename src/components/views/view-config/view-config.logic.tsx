import { ChangeEvent, useContext, useState } from "react";
import { TableContexts } from "../../context/context";
import { IDb, TableContextType } from "../../types/types";
import { SelectChangeEvent, createTheme } from "@mui/material";

export const UseViewConfigLogic = () => {
  const { data, setData, selectedRow, currentTheme, setCurrentTheme} = useContext<TableContextType | undefined>(TableContexts) as TableContextType;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [subscribed, setSubscribed] = useState('');
  const [isChecked, setIsChecked] = useState('Unenployed');

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const handleChangeSwitch = () => {
    if (currentTheme) {
      setCurrentTheme(currentTheme.palette.mode === lightTheme.palette.mode ? darkTheme : lightTheme);
    }
  };
  const handleChangeName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event: SelectChangeEvent<number | string>) => {
    setAge(String(event.target.value));
  };
  const handleChangeSubscribe = (event: SelectChangeEvent<string>) => {
    setSubscribed(event.target.value);
  };
  const handleChangeCheckbox = (event: React.SyntheticEvent<Element, Event>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      setIsChecked('Employed');
    } else {
      setIsChecked('Unemployed');
    }
  };
  const reset = () => {
    setName('');
    setAge('');
    setSubscribed('');
    setIsChecked('Unemployed')
  };
  const handleClickInsert = () => {
    const newUserObj: IDb = {
      name: name,
      age: +age,
      subscription: subscribed,
      employment: isChecked,
    }
    if (data) {
      const updatedItems = [...data, newUserObj];
      setData(updatedItems)
      localStorage.setItem('db', JSON.stringify(updatedItems));
    } else {
      const updatedItems = [newUserObj];
      setData(updatedItems)
      localStorage.setItem('db', JSON.stringify(updatedItems));
    }
    reset();
  };
  const handleClickDelete = () => {
    const updateData = data.filter((item) => item !== selectedRow)
    setData(updateData);
    localStorage.setItem('db', JSON.stringify(updateData));
  };
  return {
    name,
    age,
    subscribed,
    isChecked,
    handleChangeName,
    handleChangeAge,
    handleChangeSubscribe,
    handleChangeCheckbox,
    reset,
    handleClickInsert,
    handleClickDelete,
    handleChangeSwitch,
  }
}
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import View from './components/views/view';
import { useContext } from 'react';
import { TableContexts } from './components/context/context';
import { TableContextType } from './components/types/types';

function App() {
  const { currentTheme } = useContext<TableContextType | undefined>(TableContexts) as TableContextType;
  return (
    <div className="App">
      <ThemeProvider theme={currentTheme ? currentTheme : {}}>
        <View />
      </ThemeProvider>
    </div>
  );
}

export default App;

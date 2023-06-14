import { useEffect } from 'react';
import { useAppDispatch } from './app/application/hooks';
import { GlobalStyle } from './styles/globalStyles';
import { Header } from './app/presentation/layout/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './app/presentation/pages/Home';
import { Footer } from './app/presentation/layout/Header/Footer';
import { Box } from '@mui/material';
import { fetchCoffees } from './app/application/coffee/coffee.slice';
import { fetchTeas } from './app/application/tea/tea.slice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeas());
    dispatch(fetchCoffees());
  }, []);

  return (
    <Box sx={{ height: '100vh' }}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

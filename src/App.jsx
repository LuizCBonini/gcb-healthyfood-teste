import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/Routes/routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
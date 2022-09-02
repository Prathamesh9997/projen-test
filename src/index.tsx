import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { MainWrapper } from './globalStyles/MainWrapper';

ReactDOM.render(
  <BrowserRouter>
    <MainWrapper>
      <App />
    </MainWrapper>
  </BrowserRouter>,
  document.getElementById('root'),
);

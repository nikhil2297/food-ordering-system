import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/system';
import theme from "./assets/theme/theme";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from 'react-redux';
import store from "./pages/redux/store"
import AuthReducers from "./pages/redux/reducers/auth/auth-reducers"

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  // Provider Connect React with Redux
  <Provider store={store}>
{/* StyledEnginerProvider help to priotrize the User Written CSS */}
  <StyledEngineProvider injectFirst>
  {/* ThemeProvider connect the React UI componenets with the Materail Theme/Custom Theme */}
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </StyledEngineProvider>
  </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './pages/utils/providers/context';
import ContextTags from './pages/utils/providers/tagsdata';

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <ContextTags.Provider>
        <App />
      </ContextTags.Provider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

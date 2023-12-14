import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';



const root = createRoot(document.getElementById('root'));
root.render(<App />);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();












// import React from 'react';
// import { createRoot } from "react-dom/client";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'tachyons';


// const root = createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// reportWebVitals();



 

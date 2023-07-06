import React from "react";
import ReactDOM from "react-dom/client";
/*React Router Dom------------------------------- */
import { HashRouter} from 'react-router-dom';

/*React Router Components------------------------- */
import App from './App';

/*Global styles--------------------------------------- */
import './Common/css/normalize.css';
import './Common/css/global.scss';
ReactDOM.createRoot(document.getElementById("root")).render(<HashRouter><App/></HashRouter>)


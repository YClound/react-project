import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import todoApp from './store/reducers';
import routers from './router/index';
import './index.scss';


// ReactDOM.render((
//   <BrowserRouter>
//     <RouterIndex />
//   </BrowserRouter>
// ), document.getElementById('root'));

let store = createStore(todoApp);
ReactDOM.render((
  <Provider store={store}>
    {routers}
  </Provider>
), document.getElementById('root'));


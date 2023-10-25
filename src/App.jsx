import { Provider } from 'react-redux';
import './App.css';
import SearchPage from './Components/Searchpage';
import MainContainer from './Components/MainContainer';
import Store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './Components/WatchPage';
import ContentContainer from './Components/ContentContainer';
import   ButtonListContextWrapper  from './Context/ButtonListContext';

const Approute = createBrowserRouter([{
  path: '/',
  element: <MainContainer />,
  children: [
    {
      path: '/',
    element:<ContentContainer/>},
    {
    path:'/watch',
    element:<WatchPage/>
    },
    {
      path: '/results',
      element:<SearchPage />
    }
  ]
}])
function App() {
  return (
    <Provider store={Store}>
      <ButtonListContextWrapper>
      <RouterProvider router={Approute} />
  </ButtonListContextWrapper>
 </Provider>
  );
}

export default App;

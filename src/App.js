import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from './components/Routes/routes';

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;

import {createBrowserRouter} from "react-router-dom";
import NotFound from "./views/NotFound";
import Index from "./views/Index.jsx";
import IndexMultiBusiness from "./views/creadoc";



const router = createBrowserRouter(    [
   {
    path: '/indextest',
    element: <Index/>
  },
   {
    path: '/*',
    element: <IndexMultiBusiness/>
  },


{
  path: '/gaguna',
  element: <NotFound />
},

])

export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export default router
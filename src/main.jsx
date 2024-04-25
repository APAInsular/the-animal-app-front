// IMPORTS REACT
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// IMPORTS
import { ChakraProvider } from "@chakra-ui/react";
// IMPORTS ROUTER
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// PAGINAS
import Page404 from "./pages/404.jsx";
import Principal from "./pages/Principal.jsx";
import EnterPassword from "./pages/EnterPassword.jsx";
import PrincipalAdmin from "./pages/PrincipalAdmin.jsx";
import Voluntarios from "./pages/Voluntarios.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Animales from "./pages/Animales.jsx";
import Tareas from "./pages/Tareas.jsx";

// ENRUTADOR

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/main",
		element: <Principal />,
	},
	{
		path: "/volunteer",
		element: <Voluntarios />,
	},
	{
		path: "/account",
		element: <MyProfile />,
	},
	{
		path: "/animal",
		element: <Animales />,
	},
	{
		path: "/task",
		element: <Tareas />,
	},
	{
		path: "/mainadmin",
		element: <PrincipalAdmin />,
	},
	{
		path: "*",
		element: <Page404 />,
	},
	{
		path: "/newpassword/:username",
		element: <EnterPassword />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);

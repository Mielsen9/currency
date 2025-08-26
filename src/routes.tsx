import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RatesPage from "@/components/pages/RatesPage";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/> ,
			children: [
				{ path: "/", element: <RatesPage/> },
			],
		},
	],
	// {
	// 	basename: "/zvir-petro-v-portfolio", // Шлях до репозиторію на GitHub
	// }
);
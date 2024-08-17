import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appRoutes from "./appRoutes";
import store from "@/redux/store";
import "./i18n";
import "./App.css";
import { useTranslation } from "react-i18next";

const router = createBrowserRouter(appRoutes);

const App = () => {
  const { i18n } = useTranslation();
  i18n.changeLanguage("en");

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

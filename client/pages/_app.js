import "../assets/css/styles.css";
import Navbar from "../components/navbar/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex flex-col antialiased leading-tight">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

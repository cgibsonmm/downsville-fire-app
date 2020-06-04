import "../assets/css/styles.css";
import Navbar from "../components/navbar/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
import wrapper from "../redux/configureStore";

function App({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen flex flex-col antialiased leading-tight">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);

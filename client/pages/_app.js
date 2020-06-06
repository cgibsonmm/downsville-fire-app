// REDUX
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/configureStore";

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLING
import "../assets/css/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex flex-col antialiased leading-tight">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper.withRedux(App);

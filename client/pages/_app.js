import Head from "next/head";

// REDUX
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";

// COMPONENTS
import Navbar from "../components/navbar/Navbar";

// STYLING
import "../assets/css/styles.css";
import regIcons from "../helpers/FaSetup";
regIcons();

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Downsville Fire Dept</title>
      </Head>
      <div className="h-screen w-screen flex flex-col antialiased leading-tight">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

const makeStore = (context) => store;
const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper.withRedux(App);

import App from "next/app";
import "../assets/css/styles.css";
import Navbar from "../components/navbar/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
import { Provider } from "react-redux";
import { wrapper } from "../redux/configureStore";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen w-screen flex flex-col antialiased leading-tight">
        <Navbar />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default wrapper.withRedux(MyApp);

import "../assets/css/styles.css";
import Navbar from "../components/navbar/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen flex flex-col antialiased leading-tight">
      <TopBar />
      <Navbar />
      hello
      <Component {...pageProps} />
    </div>
  );
}

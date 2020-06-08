import House from "../assets/svg/fire-icons/house.svg";
import Events from "../components/Events";

const style = {
  bg: {
    background: `url(${require("./../assets/images/fire.jpg")}) no-repeat center center`,
    backgroundSize: "cover",
  },
};

export default function index() {
  return (
    <div>
      <section>
        <main style={style.bg}>
          <div className="w-screen flex flex-col items-center py-32 bg-gray-900 bg-opacity-75 text-gray-100">
            <img src={House} className="h-12" />
            <h1 className="poppins-mid text-3xl">Serving The Community</h1>
            <h3 className="poppins-light italic text-l">since 1902</h3>
            <button className="mt-2 bg-red-500 font-bold hover:bg-transparent hover:text-red-500 border-2 border-red-500 px-6 py-2 rounded-full text-gray-100 focus:outline-none">
              Join Now
            </button>
          </div>
        </main>
        <section>
          <Events />
        </section>
      </section>
    </div>
  );
}

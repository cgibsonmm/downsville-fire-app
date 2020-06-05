import { connect, useSelector } from "react-redux";
import * as types from "../redux/actions/counter";
import { wrapper, state } from "../redux/configureStore";

const style = {
  bg: {
    background: `url(${require("./../assets/images/bg.jpg")}) no-repeat center center`,
    backgroundSize: "cover",
  },
};

function index({ count, add, sub }) {
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="w-full flex hover:shadow-xl border-b-2">
        <div style={style.bg} className="w-1/3">
          <div className="bg-red-500 opacity-25 w-full h-full"></div>
        </div>
        <div className="px-2 py-10 w-2/3">
          <h3 className="text-xl font-bold">Downsville Fire Department</h3>
          <p>Serving your community since 1901</p>
        </div>
      </div>
      {count}
      <button onClick={() => add()}>ADD</button>
      <button onClick={() => sub()}>Sub</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = {
  add: types.add,
  sub: types.sub,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

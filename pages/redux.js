import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "../redux/reducers";
import { fetchList, setItem, clearItems } from "../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const store = createStore(reducer, compose(applyMiddleware(reduxThunk)));
export default function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
}

function Example() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <>
      <h2>Todo List</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(setItem(value));
        }}
      >
        <input
          placeholder="enter something"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
      </form>
      list of products
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearItems())}>Clear All</button>
    </>
  );
}

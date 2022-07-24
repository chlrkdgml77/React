import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state) => {return state.counter})
  const show = useSelector((state) => {return state.showCounter});

  const increseHandler = () => {
    dispatch({type: "increse"});
  }
  const increseMoreHandler = () => {
    dispatch({type: "increse_more", value: 5});
  }
  const decreseHandler = () => {
    dispatch({type: "decrese"});
  }

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increseHandler}>Increse</button>
        <button onClick={increseMoreHandler}>Increse by 5</button>
        <button onClick={decreseHandler}>Decrese</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

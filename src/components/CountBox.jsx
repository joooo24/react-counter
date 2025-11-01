import counterStore from "../stores/counterStore";
import "./CountBox.css";

const CountBox = () => {
    const { count, increment, decrement, incrementBy, decrementBy, reset } = counterStore();
    return (
        <div className="countBox">
            <span className="count">count: {count}</span>
            <div className="controls">
                <button className="btn btn--primary" onClick={increment}>증가 + 1</button>
                <button className="btn btn--secondary" onClick={decrement}>감소 - 1</button>
                <button className="btn btn--accent" onClick={() => incrementBy(10)}>증가 + 10</button>
                <button className="btn btn--ghost" onClick={() => decrementBy(10)}>감소 - 10</button>
                <button className="btn" onClick={reset}>초기화</button>
            </div>
        </div>
    );
};

export default CountBox;
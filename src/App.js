import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);

  const resetButton = () => setCount(0);
  const doubleButton = () => setCount(count * 2);

  const threeButton = () =>
    setCount((previousCount) =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    );

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={resetButton}>Reset</button>
      </div>
      <div>
        <button onClick={doubleButton}>*2</button>
      </div>
      <div>
        <button onClick={threeButton}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;

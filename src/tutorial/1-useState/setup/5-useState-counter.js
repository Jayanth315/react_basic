import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [resetValue, setResetValue] = useState(0);
  const complexCounter = () => {
    setTimeout(() => {
      // setTimeOut is asynchronus it will add the present value is [value]
      // setValue(value + 1);
      setValue((previouseVal) => {
        return previouseVal + 1;
      });
    }, 2000);
  };
  const startwatch = () => {
    if (resetValue === 0) {
      let resetIdx = setInterval(() => {
        setValue((previouseVal) => {
          return previouseVal + 1;
        });
      }, 1000);
      setResetValue(resetIdx);
    }
  };

  const stopwatch = () => {
    clearInterval(resetValue);
    setValue(0);
    setResetValue(0);
  };

  return (
    <>
      <section style={{ margin: "auto" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexCounter}>
          Complex
        </button>
        <h2>Stopwatch counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={startwatch}>
          Start Watch
        </button>
        <button className="btn" onClick={stopwatch}>
          Stop Watch
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

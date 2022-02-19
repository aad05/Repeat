import React, { useState, memo, useCallback, useMemo, useEffect } from 'react';

const UseCallbac = memo(() => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('text');
  console.log(process.env);
  // const getName = useCallback(() => {
  //   console.log('rendered ./src/Hooks/useCallback.js');
  //   return 'rendered ./src/Hooks/useCallback.js';
  // }, []);
  // const getName = useMemo(() => {
  //   console.log('rendered ./src/Hooks/useCallback.js', count);
  //   return count;
  //   // return './src/Hooks/useCallback.js';
  // }, [count]);
  // const getLog = () => console.log('hi');

  // const name = useCallback(getLog, []);

  // const getF = useCallback(() => {
  //   return getName();
  // }, []);
  // const getF = useMemo(() => getName(), []); // value
  // const getF = () => getName(), []);
  // useEffect(() => {
  //   getName(text);
  // }, [getName, text]);

  return (
    <div>
      <button>Increament {count}</button>
      <br />
      {/* {name('Asadbek')} */}
    </div>
  );
});

export default UseCallbac;

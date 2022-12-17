import React from 'react';
import './App.scss';
import Screen1 from './Layouts/Screen1';
import Screen2 from './Layouts/Screen2';
import { useOperator } from './Contexts/OperatorContext';

const App = (): React.ReactElement => {
  const {state, setState} = useOperator();

  if (state.isShowScreen2) {
    return (
      <Screen2 />
    );
  } else {
    return (
      <Screen1 />
    );
  }
};

export default App;

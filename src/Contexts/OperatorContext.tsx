import React, { Dispatch, SetStateAction, createContext, useState, useContext } from 'react';

export interface IOperatorState {
  firstOperand: string,
  secondOperand: string,
  resultOperator: number,
  isShowScreen2: boolean,
  isShowResult: boolean,
}

const OperatorContext = createContext({
  state: {} as Partial<IOperatorState>,
  setState: {} as Dispatch<SetStateAction<Partial<IOperatorState>>>,
});

const OperatorProvider = ({ children, value = {} as IOperatorState, }: { children: React.ReactNode; value?: Partial<IOperatorState>; }) => {
  const [state, setState] = useState(value)

  return (
    <OperatorContext.Provider value={{ state, setState }}>
      {children}
    </OperatorContext.Provider>
  )
}

const useOperator = () => {
  const context = useContext(OperatorContext);
  if (!context) {
    throw new Error("useOperator must be used within a GlobalStateContext");
  }
  return context;
};

export { OperatorProvider, useOperator };
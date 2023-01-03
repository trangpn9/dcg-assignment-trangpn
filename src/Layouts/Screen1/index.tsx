import React, {FormEvent} from 'react';
import InputField from '../../components/InputField';
import { useOperator } from '../../Contexts/OperatorContext';

const Screen1 = ():React.ReactElement => {
  const {setState} = useOperator();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState(preState => ({...preState, isShowScreen2: true}));
  };

  const handleSetFirstOperand = (value: string) => {
    setState(preState => ({...preState, firstOperand: value}));
  }

  return (
    <div id="App" className="container mt-5 text-center">
    <div className="row justify-content-center mb-5">
      <h1 className="col-6 col-md-3">Expression Evaluator</h1>
    </div>
    <form
      className="row mt-5 justify-content-center needs-validation"
      onSubmit={handleSubmit}
    >
      <div className="col-md-4 col-12 mb-2">
        <InputField
          onHandleChange={handleSetFirstOperand}
          label="Please enter a number"
        ></InputField>
      </div>
      <div className="col-md-4 col-12 d-grid gap-2 mb-2">
        <button type="submit" className="btn btn-primary btn-lg">
          Add Operand
        </button>
      </div>
    </form>
  </div>
  )
}

export default Screen1
import React, { useRef, useState, FormEvent } from "react";
import InputField from "../../components/InputField";
import ModalCustom from "../../components/ModalCustom";
import { useOperator } from "../../Contexts/OperatorContext";

const Screen2 = (): React.ReactElement => {
  const {state, setState} = useOperator();
  const [operator, setOperator] = useState("+");
  const [isShowModal, setIsShowModal] = useState(false);

  const refInputSecondOperand = useRef<HTMLInputElement>(null);

  const handleSelectChange = (e: any) => {
    if (state.isShowResult) {
      setState(preState => ({...preState, isShowResult: false, firstOperand: state.resultOperator?.toString()}))
    }
    setOperator(e.target.value);
  };

  const handleSetSecondOperand = (value: string) => {
    if(state.isShowResult) {
      setState(preState => ({...preState, isShowResult: false, firstOperand: state.resultOperator?.toString()}))
    }
    setState(preState => ({...preState, secondOperand: value}));
  };

  const handleSubmitOperator = (e: FormEvent) => {
    e.preventDefault();
    let result = 0;

    if (state.secondOperand && +state.secondOperand === 0 && operator === "/") {
      setIsShowModal(true);
      if (refInputSecondOperand.current) {
        refInputSecondOperand.current.focus();
      }
    } else {
      switch (operator) {
        case "/":
          result = parseFloat(state.firstOperand as string) / parseFloat(state.secondOperand as string);
          break;
        case "*":
          result = parseFloat(state.firstOperand as string) * parseFloat(state.secondOperand as string);
          break;
        case "-":
          result = parseFloat(state.firstOperand as string) - parseFloat(state.secondOperand as string);
          break;
        default:
          result = parseFloat(state.firstOperand as string) + parseFloat(state.secondOperand as string);
      }

      setState(preState => ({...preState, resultOperator: result, isShowResult: true}));
    }
  };

  return (
    <div id="App" className="container mt-5 text-center">
      <div className="row justify-content-center">
        {state.firstOperand && (
          <p>
            <span className="badge bg-secondary text-dark p-4 m-2 fs-4 box-operand">
              {state.firstOperand}
            </span>
            {state.isShowResult && (
              <span className="badge bg-secondary text-dark p-4 m-2 fs-4 box-operand">
                {state.secondOperand}
              </span>
            )}
            {state.isShowResult && (
              <span className="badge bg-secondary text-dark p-4 m-2 fs-4 box-operand">
                {operator}
              </span>
            )}
          </p>
        )}
        {state.isShowResult && (
          <>
            <p className="icon-equal">=</p>
            <p className="box-result-operator">{state.resultOperator}</p>
          </>
        )}
        {!state.isShowResult && (
          <p className="text-primary" style={{padding: '110px 0'}}>Processing...</p>
        )}
      </div>
      <form
        className="row g-2 justify-content-center"
        onSubmit={handleSubmitOperator}
      >
        <div className="col-md-3 col-6">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              onChange={handleSelectChange}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <label htmlFor="floatingSelectGrid">Operator</label>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <InputField
            onHandleChange={handleSetSecondOperand}
            label="Operand"
            ref={refInputSecondOperand}
          ></InputField>
        </div>
        <div className="col-md-3 col-12 d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-lg">
            Add Operation
          </button>
        </div>
      </form>
      <ModalCustom
        show={isShowModal}
        onHandleClose={setIsShowModal}
        contentModal={"We cannot divide by 0. Please input other Second Operand!"}
      />
    </div>
  );
};

export default Screen2;

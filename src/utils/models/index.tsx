import { Ref } from "react";

export interface IModalCustomProps {
  show: boolean;
  onHandleClose: (value: boolean) => void;
  title?: string;
  contentModal: string;
}

export interface IInputFieldProps {
  onHandleChange: (param: string) => void;
  label: string;
  ref?: Ref<HTMLInputElement>;
}

export type OperatorContextType = {
  firstOperand: string;
}
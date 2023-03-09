import { initialState } from './initialState';
import { initialStateInterface, actionTypes} from './../interfaces/redux';

export default function reducer(prevState: initialStateInterface[] = initialState, action: actionTypes) {
  const { type, payload } = action;
  
  switch(type) {
    default:
      return prevState;
  }
};

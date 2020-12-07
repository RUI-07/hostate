/*
 * @Description: 
 * @Author: hejilun
 * @Date: 2020-11-20 14:22:39
 * @LastEditors: hejilun
 * @LastEditTime: 2020-12-07 10:13:17
 */
// import {createScopeStore} from "hostate";
import {createScopeStore} from "./hostate";

export interface StateType {
  name: string;
  age: number;
  test: {
    a: number;
  };
}

const initialState = {
  name: "Tony",
  age: 23,
  test: {
    a: 123
  }
};

const actionCreators = {
  setInfo(newInfo: Partial<StateType>) {
    return (prevInfo: StateType) => ({ ...prevInfo, ...newInfo });
  },
  resetInfo() {
    return initialState;
  }
};

const infoStore = createScopeStore(initialState, actionCreators);

export const {
  Provider: InfoProvider,
  useActions,
  useStore,
} = infoStore;

export default infoStore;

import { IShell, IShellActionTypes, ShellAction } from "./index";

const shellReducer = (state: IShell, action: ShellAction): IShell => {
  switch (action.type) {
    case IShellActionTypes.GET_USER_INFO:
      return {
        ...state,
        loading: true,
      };

    case IShellActionTypes.USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.data,
      };

    case IShellActionTypes.USER_INFO_FAIL:
      return {
        ...state,
        error: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};

export default shellReducer;

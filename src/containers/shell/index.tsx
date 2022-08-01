import React, { useEffect, useReducer } from "react";

import shellReducer from "./reducer";
import { IShell, IShellActionTypes } from "./types";

import getUserInfo from "../../api/getUserInfo";

const intialState: IShell = {
  userInfo: {
    id: "",
    name: "",
  },
  error: null,
  loading: false,
};

function Shell() {
  const [state, dispatch] = useReducer(shellReducer, intialState);
  const { userInfo } = state;

  useEffect(() => {
    dispatch({ type: IShellActionTypes.GET_USER_INFO });
    getUserInfo();
    if (userInfo) {
      dispatch({
        type: IShellActionTypes.USER_INFO_SUCCESS,
      });
    } else {
      dispatch({ type: IShellActionTypes.USER_INFO_FAIL });
    }
  }, [userInfo]);

  return <div />;
}

export default Shell;

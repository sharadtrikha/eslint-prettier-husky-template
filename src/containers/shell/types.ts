export interface UserInfo {
  id: string;
  name: string;
}

export interface IShell {
  userInfo?: UserInfo;
  loading: boolean;
  error: any;
}

export enum IShellActionTypes {
  GET_USER_INFO = "GET_USER_INFO",
  USER_INFO_SUCCESS = "USER_INFO_SUCCESS",
  USER_INFO_FAIL = "USER_INFO_FAIL",
}

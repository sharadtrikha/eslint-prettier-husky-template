import { IShellActionTypes, UserInfo } from "./types";

export interface ShellAction {
  type: IShellActionTypes;
  data?: UserInfo;
}

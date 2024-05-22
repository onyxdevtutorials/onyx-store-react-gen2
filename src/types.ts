import { AuthUser } from "aws-amplify/auth";

export enum AsyncProcessStatus {
  NONE = "NONE",
  PENDING = "PENDING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export interface AsyncProcessBase {
  status: AsyncProcessStatus;
}

export interface AsyncProcessNone extends AsyncProcessBase {
  status: AsyncProcessStatus.NONE;
}

export interface AsyncProcessPending<T> extends AsyncProcessBase {
  status: AsyncProcessStatus.PENDING;
  value?: T;
}

export interface AsyncProcessError<T, E> extends AsyncProcessBase {
  status: AsyncProcessStatus.ERROR;
  error: E;
  value?: T;
}

export interface AsyncProcessSuccess<T> extends AsyncProcessBase {
  status: AsyncProcessStatus.SUCCESS;
  value: T;
}

export type AsyncProcess<T, E> =
  | AsyncProcessNone
  | AsyncProcessPending<T>
  | AsyncProcessError<T, E>
  | AsyncProcessSuccess<T>;

export interface UserCheckResult {
  user: AuthUser | null;
}

export interface UserCheckError {
  message: string;
}

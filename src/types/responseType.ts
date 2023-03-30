export interface HTTPResponse<T> {
  success: boolean;
  users?: T;
  message?: string;
}

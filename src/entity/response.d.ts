export interface BaseResponseDto<T> {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  data: T;
}

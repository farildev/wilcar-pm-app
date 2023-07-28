interface ApiResponse<T> {
  payload: T | null;
  result: boolean;
  message: string | null;
}

interface ApiResponseObject extends ApiResponse<object> {}
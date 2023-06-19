type Response<TData = any> =
    | {
          data: TData;
          error: null;
      }
    | {
          data: null;
          error: string;
      };
export type ApiResponse<TResData> = Promise<Response<TResData>>;

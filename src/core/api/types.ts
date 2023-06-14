type Response =
    | {
          data: any;
          error: null;
      }
    | {
          data: null;
          error: string;
      };
export type ApiResponse = Promise<Response>;

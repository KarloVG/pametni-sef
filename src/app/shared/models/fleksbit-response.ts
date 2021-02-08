export interface FleksbitReponse<TEntry> {
  readonly error: string[];
  readonly response: {
    code: number;
    data: TEntry;
  };
}

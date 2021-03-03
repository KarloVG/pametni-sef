export interface IFleksbitReponse<TEntry> {
  readonly code: number;
  readonly error?: string[];
  readonly errorMessage?: string;
  readonly response: TEntry;
}

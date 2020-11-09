import {
  ErrorResponse,
  PortfolioItemDocument,
  SuccessResponsePortfolioItemPOST,
  UserDocument,
} from "./types";

export const isError = (
  response:
    | ErrorResponse
    | PortfolioItemDocument[]
    | SuccessResponsePortfolioItemPOST
    | UserDocument
): response is ErrorResponse => (response as ErrorResponse).error !== undefined;

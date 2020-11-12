import {
  CoverImageDocument,
  ErrorResponse,
  PortfolioItemDocument,
  PortfolioItemModifyResponse,
  SuccessResponseCoverImagePOST,
  SuccessResponsePortfolioItemPOST,
  UserDocument,
} from "./types";

export const isError = (
  response:
    | CoverImageDocument
    | ErrorResponse
    | PortfolioItemDocument[]
    | PortfolioItemModifyResponse
    | SuccessResponseCoverImagePOST
    | SuccessResponsePortfolioItemPOST
    | UserDocument
): response is ErrorResponse => (response as ErrorResponse).error !== undefined;

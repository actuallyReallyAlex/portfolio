import { ErrorResponse, PortfolioItemDocument } from "../types";

const getPortfolioItems = async (): Promise<
  PortfolioItemDocument[] | ErrorResponse
> => {
  try {
    const response = await fetch("/portfolioItems", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: ErrorResponse | PortfolioItemDocument[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default getPortfolioItems;

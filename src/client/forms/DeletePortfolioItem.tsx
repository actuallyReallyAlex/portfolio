import * as React from "react";
import { Box, Button, Heading } from "rebass";
import { Label, Select } from "@rebass/forms";

import {
  ErrorResponse,
  Notification,
  PortfolioItemDocument,
  PortfolioItemModifyResponse,
} from "../types";
import { isError } from "../util";

export interface DeletePortfolioItemProps {
  portfolioItems: PortfolioItemDocument[];
  setNotification: (notification: Notification) => void;
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const DeletePortfolioItem: React.FunctionComponent<DeletePortfolioItemProps> = (
  props: DeletePortfolioItemProps
) => {
  const [id, setId] = React.useState("");

  const { portfolioItems, setNotification, setPortfolioItems } = props;

  const handleDeletePortfolioItemSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await fetch("/portfolioItem", {
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });
      const data:
        | ErrorResponse
        | PortfolioItemModifyResponse = await response.json();

      if (isError(data)) {
        return setNotification({
          display: true,
          message: () => <p>{data.error}</p>,
          title: "Error",
          type: "warning",
        });
      } else {
        setNotification({
          display: true,
          message: () => <p>{data.notificationMessage}</p>,
          title: "Success",
          type: "success",
        });
        setPortfolioItems(data.portfolioItems);
      }
    } catch (error) {
      console.error(error);
      return setNotification({
        display: true,
        message: () => (
          <p>An error has occured. Please refresh the page, and try again.</p>
        ),
        title: "Technical Difficulties",
        type: "warning",
      });
    }
  };

  return (
    <Box>
      <Heading as="h2" sx={{ marginBottom: "25px" }}>
        Delete a Portfolio Item
      </Heading>
      <form onSubmit={handleDeletePortfolioItemSubmit}>
        <Label htmlFor="portfolio-item">PortfolioItem</Label>
        <Select
          id="portfolio-item"
          onChange={(e) => setId(e.target.value)}
          required
          value={id}
        >
          <option disabled value="">
            - Select PortfolioItem -
          </option>
          {portfolioItems.map((portfolioItem) => (
            <option key={portfolioItem._id} value={portfolioItem._id}>
              {portfolioItem.title}
            </option>
          ))}
        </Select>

        <Button sx={{ marginBottom: "50px", marginTop: "50px" }} type="submit">
          Delete
        </Button>
      </form>
    </Box>
  );
};

export default DeletePortfolioItem;

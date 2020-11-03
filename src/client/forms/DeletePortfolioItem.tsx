import * as React from "react";
import { Box, Button, Heading } from "rebass";
import { Label, Select } from "@rebass/forms";

import { PortfolioItemDocument } from "../types";

export interface DeletePortfolioItemProps {
  portfolioItems: PortfolioItemDocument[];
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const DeletePortfolioItem: React.FunctionComponent<DeletePortfolioItemProps> = (
  props: DeletePortfolioItemProps
) => {
  const [id, setId] = React.useState("");

  const { portfolioItems, setPortfolioItems } = props;

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
      const data = await response.json();

      if (response.status !== 200) {
        return alert(`Error! - ${JSON.stringify(data, null, 2)}`);
      }
      alert(`PortfolioItem - Deleted successfully!`);
      setPortfolioItems(data.portfolioItems);
    } catch (error) {
      console.error(error);
      alert(`Error! - ${JSON.stringify(error, null, 2)}`);
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

import * as React from "react";

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
    <div>
      <h2>Delete a Portfolio Item</h2>
      <form onSubmit={handleDeletePortfolioItemSubmit}>
        <label htmlFor="portfolio-item">PortfolioItem</label>
        <select
          id="portfolio-item"
          onChange={(e) => setId(e.target.value)}
          required
        >
          {portfolioItems.map((portfolioItem) => (
            <option key={portfolioItem._id} value={portfolioItem._id}>
              {portfolioItem.title}
            </option>
          ))}
        </select>

        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeletePortfolioItem;

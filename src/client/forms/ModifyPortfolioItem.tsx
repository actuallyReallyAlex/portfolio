import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

import { PortfolioItem, PortfolioItemDocument } from "../types";
import PortfolioItemDetails from "../routes/PortfolioItemDetails";

export interface ModifyPortfolioItemProps {
  portfolioItems: PortfolioItemDocument[];
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const ModifyPortfolioItem: React.FunctionComponent<ModifyPortfolioItemProps> = (
  props: ModifyPortfolioItemProps
) => {
  const { portfolioItems, setPortfolioItems } = props;
  const [id, setId] = React.useState("");
  const [selectedPortfolioItem, setSelectedPortfolioItem] = React.useState(
    null
  );

  const [title, setTitle] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [demo, setDemo] = React.useState("");
  const [github, setGithub] = React.useState("");
  const [npm, setNPM] = React.useState("");
  const [coverImage, setCoverImage] = React.useState(null);
  const [newCoverImage, setNewCoverImage] = React.useState(null);
  const [content, setContent] = React.useState("");
  const [updated, setUpdated] = React.useState(false);

  const handleModifyPortfolioItemSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const updatedLinks = {
        demo,
        github,
        npm,
      };
      if (demo === selectedPortfolioItem.demo) {
        delete updatedLinks.demo;
      }
      if (github === selectedPortfolioItem.github) {
        delete updatedLinks.github;
      }
      if (npm === selectedPortfolioItem.npm) {
        delete updatedLinks.npm;
      }
      const bodyData = new FormData();
      bodyData.append("id", id);
      newCoverImage && bodyData.append("file", newCoverImage);
      title &&
        title !== selectedPortfolioItem.title &&
        bodyData.append("title", title);
      tagline &&
        tagline !== selectedPortfolioItem.tagline &&
        bodyData.append("tagline", tagline);
      demo &&
        demo !== selectedPortfolioItem.links.demo &&
        bodyData.append("links", JSON.stringify(updatedLinks));
      content &&
        content !== selectedPortfolioItem.content &&
        bodyData.append("content", content);

      const response = await fetch("/portfolioItem", {
        body: bodyData,
        method: "PATCH",
      });
      const data = await response.json();

      if (response.status === 200) {
        alert("Success!");
        setPortfolioItems(data.portfolioItems);
        resetForm(e);
      } else {
        alert("ERROR!");
      }
    } catch (error) {
      console.error(error);
      alert(`Error! - ${JSON.stringify(error, null, 2)}`);
    }
  };

  const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
    setTitle("");
    setTagline("");
    setDemo("");
    setGithub("");
    setNPM("");
    setNewCoverImage(null);
    setContent("");
    if (e.currentTarget.reset) {
      e.currentTarget.reset();
    }
  };

  React.useEffect(() => {
    if (selectedPortfolioItem) {
      setTitle(selectedPortfolioItem.title);
      setTagline(selectedPortfolioItem.tagline);
      setDemo(selectedPortfolioItem.links.demo);
      setGithub(selectedPortfolioItem.links.github);
      setNPM(selectedPortfolioItem.links.npm);
      setCoverImage(selectedPortfolioItem.coverImage);
      setContent(selectedPortfolioItem.content);
      setUpdated(true);
    }
  }, [selectedPortfolioItem]);

  return (
    <div>
      <h2>Modify an Existing Portfolio Item</h2>
      <form onSubmit={handleModifyPortfolioItemSubmit}>
        <label htmlFor="select-portfolio-item">Select Portfolio Item</label>
        <select
          onChange={(e) => {
            const selection = portfolioItems.find(
              (portfolioItem) => portfolioItem._id === e.target.value
            );
            setSelectedPortfolioItem(selection);
            setId(selection._id);
          }}
          value={selectedPortfolioItem ? selectedPortfolioItem : ""}
        >
          <option disabled value="">
            - Select PortfolioItem -
          </option>
          {portfolioItems.map((portfolioItem) => (
            <option key={portfolioItem._id} value={portfolioItem._id}>
              {portfolioItem.title}
            </option>
          ))}
        </select>

        {selectedPortfolioItem && updated && (
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text"
              value={title}
            />

            <label htmlFor="tagline">Tagline</label>
            <input
              id="tagline"
              onChange={(e) => setTagline(e.target.value)}
              required
              type="text"
              value={tagline}
            />

            <h3>Links</h3>
            <label htmlFor="demo">Demo</label>
            <input
              id="demo"
              onChange={(e) => setDemo(e.target.value)}
              type="text"
              value={demo}
            />
            <label htmlFor="github">Github</label>
            <input
              id="github"
              onChange={(e) => setGithub(e.target.value)}
              type="text"
              value={github}
            />
            <label htmlFor="npm">NPM</label>
            <input
              id="npm"
              onChange={(e) => setNPM(e.target.value)}
              type="text"
              value={npm}
            />

            <h3>Images</h3>

            <label>Current Cover Image</label>
            <img alt="Current cover image" src={coverImage} width="300px" />

            <label htmlFor="new-cover-image">New Cover Image</label>
            <input
              accept="image/png, image/jpeg"
              id="new-cover-image"
              onChange={(e) => setNewCoverImage(e.target.files[0])}
              type="file"
            />

            <label>Content</label>
            <Editor
              apiKey={process.env.TINYMCE_API_KEY}
              initialValue={selectedPortfolioItem.content}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | link image code | removeformat | help",
              }}
              onEditorChange={(content, editor) => {
                setContent(content);
              }}
            />

            <button type="submit">Modify</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ModifyPortfolioItem;

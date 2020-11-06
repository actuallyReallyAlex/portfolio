import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Button, Heading, Image } from "rebass";
import { Input, Label, Select } from "@rebass/forms";

import { Notification, PortfolioItemDocument } from "../types";

export interface ModifyPortfolioItemProps {
  portfolioItems: PortfolioItemDocument[];
  setNotification: (notification: Notification) => void;
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const ModifyPortfolioItem: React.FunctionComponent<ModifyPortfolioItemProps> = (
  props: ModifyPortfolioItemProps
) => {
  const { portfolioItems, setNotification, setPortfolioItems } = props;
  const [id, setId] = React.useState("");
  const [selectedPortfolioItem, setSelectedPortfolioItem] = React.useState(
    null
  );

  const [title, setTitle] = React.useState("");
  const [iconBackground, setIconBackground] = React.useState("");
  const [iconClass, setIconClass] = React.useState("");
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
      iconBackground &&
        iconBackground !== selectedPortfolioItem.iconBackground &&
        bodyData.append("iconBackground", iconBackground);
      iconClass &&
        iconClass !== selectedPortfolioItem.iconClass &&
        bodyData.append("iconClass", iconClass);
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

      if (response.status !== 200) {
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
        resetForm(e);
      }
    } catch (error) {
      console.error(error);
      return setNotification({
        display: true,
        message: () => <p>An error has occured. Please refresh the page, and try again.</p>,
        title: "Technical Difficulties",
        type: "warning",
      });
    }
  };

  const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
    setIconBackground("");
    setIconClass("");
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
      setIconBackground(selectedPortfolioItem.iconBackground);
      setIconClass(selectedPortfolioItem.iconClass);
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
    <Box>
      <Heading as="h2" sx={{ marginBottom: "25px" }}>
        Modify an Existing Portfolio Item
      </Heading>
      <form onSubmit={handleModifyPortfolioItemSubmit}>
        <Label htmlFor="select-portfolio-item">Select Portfolio Item</Label>
        <Select
          onChange={(e) => {
            const selection = portfolioItems.find(
              (portfolioItem) => portfolioItem._id === e.target.value
            );
            setSelectedPortfolioItem(selection);
            setId(selection._id);
          }}
          sx={{ marginBottom: "50px" }}
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
        </Select>

        {selectedPortfolioItem && updated && (
          <Box>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
              sx={{ marginBottom: "10px" }}
              type="text"
              value={title}
            />

            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              onChange={(e) => setTagline(e.target.value)}
              required
              sx={{ marginBottom: "10px" }}
              type="text"
              value={tagline}
            />

            <Label htmlFor="iconClass">Icon Background</Label>
            <Input
              id="iconBackground"
              onChange={(e) => setIconBackground(e.target.value)}
              required
              sx={{ marginBottom: "10px" }}
              type="text"
              value={iconBackground}
            />

            <Label htmlFor="iconClass">Icon Class</Label>
            <Input
              id="iconClass"
              onChange={(e) => setIconClass(e.target.value)}
              required
              sx={{ marginBottom: "25px" }}
              type="text"
              value={iconClass}
            />

            <Heading as="h3" sx={{ marginBottom: "25px" }}>
              Links
            </Heading>

            <Label htmlFor="demo">Demo</Label>
            <Input
              id="demo"
              onChange={(e) => setDemo(e.target.value)}
              sx={{ marginBottom: "10px" }}
              type="text"
              value={demo}
            />

            <Label htmlFor="github">Github</Label>
            <Input
              id="github"
              onChange={(e) => setGithub(e.target.value)}
              sx={{ marginBottom: "10px" }}
              type="text"
              value={github}
            />

            <Label htmlFor="npm">NPM</Label>
            <Input
              id="npm"
              onChange={(e) => setNPM(e.target.value)}
              sx={{ marginBottom: "10px" }}
              type="text"
              value={npm}
            />

            <Label htmlFor="current-cover-image">Current Cover Image</Label>
            <Image
              alt="Current cover image"
              id="current-cover-image"
              src={coverImage}
              sx={{ marginBottom: "10px" }}
              width="300px"
            />

            <Label htmlFor="new-cover-image">New Cover Image</Label>
            <Input
              accept="image/png, image/jpeg"
              id="new-cover-image"
              onChange={(e) => setNewCoverImage(e.target.files[0])}
              sx={{ marginBottom: "10px" }}
              type="file"
            />

            <Heading as="h3" sx={{ marginBottom: "25px" }}>
              Content
            </Heading>
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
              onEditorChange={(content) => setContent(content)}
            />

            <Button
              sx={{ marginBottom: "50px", marginTop: "50px" }}
              type="submit"
              variant="primary"
            >
              Modify
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default ModifyPortfolioItem;

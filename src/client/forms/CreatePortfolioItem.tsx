import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Button, Heading } from "rebass";
import { Input, Label } from "@rebass/forms";

import { Notification, PortfolioItemDocument } from "../types";

interface CreatePortfolioItemProps {
  portfolioItems: PortfolioItemDocument[];
  setNotification: (notification: Notification) => void;
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const CreatePortfolioItem: React.FunctionComponent<CreatePortfolioItemProps> = (
  props: CreatePortfolioItemProps
) => {
  const { setNotification } = props;
  const [title, setTitle] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [iconBackground, setIconBackground] = React.useState("");
  const [iconClass, setIconClass] = React.useState("");
  const [demo, setDemo] = React.useState("");
  const [github, setGithub] = React.useState("");
  const [npm, setNPM] = React.useState("");
  const [cover, setCover] = React.useState(null);
  const [content, setContent] = React.useState("");

  const handleNewPortfolioItemSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const bodyData = new FormData();
      bodyData.append("file", cover);
      bodyData.append("content", content);
      bodyData.append("iconBackground", iconBackground);
      bodyData.append("iconClass", iconClass);
      bodyData.append("links", JSON.stringify({ demo, github, npm }));
      bodyData.append("tagline", tagline);
      bodyData.append("title", title);

      const response = await fetch("/portfolioItem", {
        body: bodyData,
        method: "POST",
      });
      const data = await response.json();

      if (response.status !== 201) {
        return setNotification({
          display: true,
          message: () => <p>{data.error}</p>,
          title: "Error",
          type: "warning",
        });
      }

      setNotification({
        display: true,
        message: () => <p>{title} was created successfully!</p>,
        title: "Success",
        type: "success",
      });
      resetForm(e);
    } catch (error) {
      console.error(error);
      return setNotification({
        display: true,
        message: () => <code>{JSON.stringify(error, null, 2)}</code>,
        title: "Error",
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
    setCover(null);
    setContent("");
    e.currentTarget && e.currentTarget.reset();
  };

  React.useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector(".tox-statusbar__branding");
      element.parentNode.removeChild(element);
    }, 1000);
  }, []);

  return (
    <Box>
      <Heading as="h2" sx={{ marginBottom: "25px" }}>
        Create a New Portfolio Item
      </Heading>
      <form onSubmit={handleNewPortfolioItemSubmit}>
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
          sx={{ marginBottom: "25px" }}
          type="text"
          value={npm}
        />

        <Label htmlFor="cover">Cover Image</Label>
        <Input
          accept="image/png, image/jpeg"
          id="cover"
          onChange={(e) => setCover(e.target.files[0])}
          sx={{ marginBottom: "25px" }}
          type="file"
        />

        <Heading as="h3" sx={{ marginBottom: "25px" }}>
          Content
        </Heading>
        <Editor
          apiKey={process.env.TINYMCE_API_KEY}
          initialValue="<p>This is the initial content of the editor</p>"
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
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreatePortfolioItem;

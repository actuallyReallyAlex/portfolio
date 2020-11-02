import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Button, Heading } from "rebass";
import { Input, Label } from "@rebass/forms";

export interface CreatePortfolioItemProps {}

const CreatePortfolioItem: React.FunctionComponent<CreatePortfolioItemProps> = () => {
  const [title, setTitle] = React.useState("");
  const [tagline, setTagline] = React.useState("");
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
        return alert(`Error! - ${JSON.stringify(data, null, 2)}`);
      }
      alert(`PortfolioItem - ${title} - Added successfully!`);
      resetForm(e);
    } catch (error) {
      console.error(error);
      alert(`Error! - ${JSON.stringify(error, null, 2)}`);
    }
  };

  const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
    setIconClass("");
    setTitle("");
    setTagline("");
    setDemo("");
    setGithub("");
    setNPM("");
    setCover(null);
    setContent("");
    e.currentTarget.reset();
  };

  React.useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector(".tox-statusbar__branding");
      element.parentNode.removeChild(element);
    }, 1000);
  }, []);

  return (
    <Box>
      <Heading as="h2">Create a New Portfolio Item</Heading>
      <form onSubmit={handleNewPortfolioItemSubmit}>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          value={title}
        />

        <Label htmlFor="tagline">Tagline</Label>
        <Input
          id="tagline"
          onChange={(e) => setTagline(e.target.value)}
          required
          type="text"
          value={tagline}
        />

        <Label htmlFor="iconClass">Icon Class</Label>
        <Input
          id="iconClass"
          onChange={(e) => setIconClass(e.target.value)}
          required
          type="text"
          value={iconClass}
        />

        <Heading as="h3">Links</Heading>
        <Label htmlFor="demo">Demo</Label>
        <Input
          id="demo"
          onChange={(e) => setDemo(e.target.value)}
          type="text"
          value={demo}
        />
        <Label htmlFor="github">Github</Label>
        <Input
          id="github"
          onChange={(e) => setGithub(e.target.value)}
          type="text"
          value={github}
        />
        <Label htmlFor="npm">NPM</Label>
        <Input
          id="npm"
          onChange={(e) => setNPM(e.target.value)}
          type="text"
          value={npm}
        />

        <Heading as="h3">Images</Heading>

        <Label htmlFor="cover">Cover</Label>
        <Input
          accept="image/png, image/jpeg"
          id="cover"
          onChange={(e) => setCover(e.target.files[0])}
          type="file"
        />

        <Label>Content</Label>
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
          onEditorChange={(content, editor) => {
            console.log("Content was updated:", content);
            setContent(content);
          }}
        />

        <Button type="submit" variant="primary">
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreatePortfolioItem;

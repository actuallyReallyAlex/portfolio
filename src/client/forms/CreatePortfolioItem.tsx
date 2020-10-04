import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

export interface CreatePortfolioItemProps {}

const CreatePortfolioItem: React.FunctionComponent<CreatePortfolioItemProps> = () => {
  const [title, setTitle] = React.useState("");
  const [tagline, setTagline] = React.useState("");
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
    <div>
      <h2>Create a New Portfolio Item</h2>
      <form onSubmit={handleNewPortfolioItemSubmit}>
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

        <label htmlFor="cover">Cover</label>
        <input
          accept="image/png, image/jpeg"
          id="cover"
          onChange={(e) => setCover(e.target.files[0])}
          type="file"
        />

        <label>Content</label>
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

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePortfolioItem;

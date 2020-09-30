import * as React from "react";

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

        <label htmlFor="content">Content</label>
        <input
          id="content"
          onChange={(e) => setContent(e.target.value)}
          required
          type="textarea"
          value={content}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePortfolioItem;

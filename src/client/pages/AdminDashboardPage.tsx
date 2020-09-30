import * as React from "react";

import { UserDocument } from "../types";

export interface AdminDashboardPageProps {
  user: UserDocument;
}

const AdminDashboardPage: React.FunctionComponent<AdminDashboardPageProps> = (
  props: AdminDashboardPageProps
) => {
  const { user } = props;

  const [content, setContent] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [cover, setCover] = React.useState(null);
  const [demo, setDemo] = React.useState("");
  const [github, setGithub] = React.useState("");
  const [npm, setNPM] = React.useState("");

  const handleNewPortfolioItemSubmit = async (e) => {
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
      console.log({ data });
      alert(`PortfolioItem - ${title} - Added successfully!`);
      resetForm();
    } catch (error) {
      console.error(error);
      alert(`Error! - ${JSON.stringify(error, null, 2)}`);
    }
  };

  const resetForm = () => {
    setContent("");
    setTagline("");
    setTitle("");
    setCover(null);
    setDemo("");
    setGithub("");
    setNPM("");
  };

  return (
    <div>
      <h1>Admin Dashboard Page</h1>
      <p>USER IS AUTHENTICATED!</p>
      {JSON.stringify(user, null, 2)}

      <div>
        <h2>Create a New Portfolio Item</h2>
        <form onSubmit={handleNewPortfolioItemSubmit}>
          <label htmlFor="content">Content</label>
          <input
            id="content"
            onChange={(e) => setContent(e.target.value)}
            required
            type="textarea"
            value={content}
          />

          <h3>Images</h3>

          <label htmlFor="cover">Cover</label>
          <input
            accept="image/png, image/jpeg"
            id="cover"
            onChange={(e) => setCover(e.target.files[0])}
            type="file"
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

          <label htmlFor="tagline">Tagline</label>
          <input
            id="tagline"
            onChange={(e) => setTagline(e.target.value)}
            required
            type="text"
            value={tagline}
          />

          <label htmlFor="title">Title</label>
          <input
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            value={title}
          />

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

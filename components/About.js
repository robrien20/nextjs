import Markdown from "../components/Markdown";

function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <Markdown file="/path/to/markdown/file.md" />
    </div>
  );
}

export default MyPage;

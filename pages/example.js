// /pages/example.js

import Markdown from "../components/Markdown";
import { getMarkdownContent } from "../lib/markdown";
import Layout from "/components/Layout";

export default function Example({ content }) {
  return (
    <Layout>
      <Markdown content={content} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = getMarkdownContent("/content/leetCodeStudy.md");
  return { props: { content } };
}

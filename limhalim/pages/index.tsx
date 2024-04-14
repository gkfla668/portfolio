import Bubble from "@/components/Bubble";
// import Circle from "@/components/Circle";
import Main from "../components/main";
import Footer from "@/components/Layout/Footer";

import RSSParser from "rss-parser";

interface BlogPost {
  title: string;
  link: string;
  contentSnippet?: string;
}

export async function getServerSideProps() {
  const parser = new RSSParser();
  try {
    const feedUrl = "https://v2.velog.io/rss/gkfla668";
    const feed = await parser.parseURL(feedUrl);
    if (!feed.items) {
      console.error("No items found in RSS feed");
      return {
        props: {
          latestPosts: [],
        },
      };
    }
    const latestPosts = feed.items.slice(0, 3);
    return {
      props: {
        latestPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching RSS:", error);
  }
}

export default function Home({ latestPosts }: { latestPosts: BlogPost[] }) {
  return (
    <div>
      <Bubble />
      {/* <Circle /> */}
      {latestPosts && <Main latestPosts={latestPosts} />}
      <Footer />
    </div>
  );
}

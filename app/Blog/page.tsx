import BlogClient from "./BlogClient";

export function generateMetadata() {
  return {
    alternates: {
      canonical: "https://www.rheincs.com/Blog/",
    },
  };
}

export default function BlogPage() {
  return <BlogClient />;
}

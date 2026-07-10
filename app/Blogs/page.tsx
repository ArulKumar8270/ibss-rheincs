import BlogsClient from "./BlogsClient";

export function generateMetadata() {
  return {
    alternates: {
      canonical: "https://www.rheincs.com/blogs/",
    },
  };
}

export default function BlogsPage() {
  return <BlogsClient />;
}

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import EbookLandingClient from "./EbookLandingClient";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const STORAGE_BUCKET = "case-study-images";

function resolveImageUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${value}`;
}

function createStaticClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function generateStaticParams() {
  try {
    const supabase = createStaticClient();
    const { data: pages, error } = await supabase
      .from("ebook_landing_pages")
      .select("slug");

    if (error) {
      console.error("generateStaticParams error:", error.message);
      return [{ slug: "default" }];
    }

    if (pages && pages.length > 0) {
      return pages.map((page) => ({ slug: page.slug }));
    }
  } catch (e) {
    console.error("generateStaticParams exception:", e);
  }
  return [{ slug: "default" }];
}

export default async function EbookLandingPage({
  params,
}: {
  params: { slug: string };
}) {
  let resolvedData = null;
  try {
    const supabase = createStaticClient();
    const { data: pages, error } = await supabase
      .from("ebook_landing_pages")
      .select("*")
      .eq("slug", params.slug);

    if (!error && pages && pages.length > 0) {
      const pageData = pages[0];
      resolvedData = {
        ...pageData,
        logo_image_url: resolveImageUrl(pageData.logo_image_url),
        book_image_url: resolveImageUrl(pageData.book_image_url),
        author_avatar_url: resolveImageUrl(pageData.author_avatar_url),
        pdf_url: resolveImageUrl(pageData.pdf_url),
      };
    }
  } catch (e) {
    console.error("EbookLandingPage fetch error:", e);
  }

  return <EbookLandingClient initialData={resolvedData} />;
}

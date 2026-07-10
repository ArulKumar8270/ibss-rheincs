"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useTranslation } from "../hooks/useTranslation";

const BODY_CLASS = ["secondser", "", "thirdser", "fourthser"];

function stripHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function FeaturedReadMoreIcon() {
  return (
    <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="dot" opacity="0.5" cx="16.0004" cy="4.79995" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="19.1996" cy="8.00002" r="1.6" fill="#535353" />
    </svg>
  );
}

function ExploreMoreIcon() {
  return (
    <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="dot" opacity="0.5" cx="16.0004" cy="4.79995" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6" fill="#535353" />
      <circle className="dot" opacity="0.5" cx="19.1996" cy="8.00002" r="1.6" fill="#535353" />
    </svg>
  );
}

function staticFallbackTiles(t) {
  return [
    {
      kind: "case_study",
      href: "/Casestudy/implementation-of-epicor-10-erp-in-oman-fibre-optic-oman-a-leading-manufacturer-of-world-class-fibre-cable-products/",
      label: t("Case Study"),
      text: t(
        "Implementation of Epicor 10 ERP in Oman Fibre Optic – Oman, A leading Manufacturer of world class fibre cable products"
      ),
    },
    {
      kind: "case_study",
      href: "/Casestudy/standardising-global-operations-across-21-countries-with-a-scalable-two-tier-erp-and-unified-analytics/",
      label: t("Case Study"),
      text: t(
        "Standardising global operations across 21+ countries with a scalable two-tier ERP and unified analytics."
      ),
    },
    {
      kind: "blog",
      href: "/blogs/how-external-forces-are-reshaping-erp-strategy-in-2026/",
      label: t("Blog"),
      text: t("How External Forces Are Reshaping ERP Strategy in 2026"),
    },
    {
      kind: "blog",
      href: "/blogs/10-must-have-features-in-a-modern-erp-system/",
      label: t("Blog"),
      text: t("10 Must-Have Features in a Modern ERP System"),
    },
  ];
}

const FEATURE_CASE_LIMIT = 2;
const FEATURE_BLOG_LIMIT = 2;

/** Newest published case studies for the active site language (2 rows). */
async function fetchTopCaseStudies(supabase, germanUi) {
  let q = supabase
    .from("case_studies")
    .select("title, slug, excerpt, language")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(FEATURE_CASE_LIMIT);

  if (germanUi) q = q.eq("language", "German");
  else q = q.or("language.eq.English,language.is.null");

  const { data, error } = await q;
  if (error) throw error;
  return data || [];
}

/** Newest published blogs for the active site language (2 rows). */
async function fetchTopBlogs(supabase, germanUi) {
  let q = supabase
    .from("blogs")
    .select("title, slug, excerpt, language")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(FEATURE_BLOG_LIMIT);

  if (germanUi) q = q.eq("language", "German");
  else q = q.or("language.eq.English,language.is.null");

  const { data, error } = await q;
  if (error) throw error;
  return data || [];
}

function rowToTile(row, kind) {
  const excerpt = stripHtml(row.excerpt);
  const text = excerpt || row.title || "";
  const href = kind === "case_study" ? `/Casestudy/${row.slug}/` : `/blogs/${row.slug}/`;
  return { kind, href, slug: row.slug, text };
}

export default function HomeFeaturedProjects() {
  const { t, language } = useTranslation();
  const [tiles, setTiles] = useState(() => staticFallbackTiles(t));
  const germanUi = language === "German";

  useEffect(() => {
    setTiles(staticFallbackTiles(t));
    let cancelled = false;
    const supabase = createClient();

    (async () => {
      try {
        const [cases, blogs] = await Promise.all([
          fetchTopCaseStudies(supabase, germanUi),
          fetchTopBlogs(supabase, germanUi),
        ]);
        if (cancelled) return;

        const fallback = staticFallbackTiles(t);
        const next = [];
        for (let i = 0; i < 2; i++) {
          const row = cases[i];
          next.push(row ? rowToTile(row, "case_study") : fallback[i]);
        }
        for (let i = 0; i < 2; i++) {
          const row = blogs[i];
          next.push(row ? rowToTile(row, "blog") : fallback[i + 2]);
        }
        setTiles(next);
      } catch {
        if (!cancelled) setTiles(staticFallbackTiles(t));
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- t() updates with language; avoid unstable deps
  }, [language, germanUi]);

  return (
    <div className={`our-services projects systemview ${germanUi ? "gerprojects" : ""}`}>
      <div className="container">
        <div className="row section-row text-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                {t("Projects that made a difference.")}
              </h2>
              <p>
                {t(
                  "At RheinBrücke, every project is a purposeful collaboration – driven by innovation, and focused on real-world impact. From streamlining automation system to accelerating embedded development, our solutions have helped the businesses overcome complexity , improve efficiency, and scale with confidence.These are the projects that truly made a difference."
                )}
              </p>
              <div className="ser-btn">
                <Link href="/about-us/success-stories" className="animated-svg-link">
                  {t("Explore more")}
                  <span className="svg-container ">
                    <span className=" right">
                      <ExploreMoreIcon />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {tiles.map((item, index) => {
            const extra = BODY_CLASS[index] ? ` ${BODY_CLASS[index]}` : "";
            const label = item.label || (item.kind === "case_study" ? t("Case Study") : t("Blog"));
            return (
              <div className="col-lg-3 col-md-6" key={`${item.kind}-${item.href}-${index}`}>
                <div className={`service-item-body${extra}`}>
                  <h3>
                    <span>{label}</span>
                  </h3>
                  <p>{item.text}</p>
                  <div className="ser-btn1">
                    <Link href={item.href} className="animated-svg-link1 btn-style-3">
                      {t("Read More")}
                      <span className="svg-container ">
                        <span className=" left">
                          <FeaturedReadMoreIcon />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

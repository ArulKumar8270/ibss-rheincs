"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // ✅ FIXED

  const search = useMemo(
    () => searchParams?.toString() ?? "",
    [searchParams]
  );

  useEffect(() => {
    try {
      const current = `${pathname}${search ? `?${search}` : ""}`;
      const last = sessionStorage.getItem("rb_last_path");

      if (last && last !== current) {
        sessionStorage.setItem("rb_prev_path", last);
      }

      sessionStorage.setItem("rb_last_path", current);

      if (!sessionStorage.getItem("rb_entry_path")) {
        sessionStorage.setItem("rb_entry_path", current);
      }
    } catch {
      // ignore
    }
  }, [pathname, search]);

  return null;
}
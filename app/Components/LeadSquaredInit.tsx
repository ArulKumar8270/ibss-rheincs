"use client";

import Script from "next/script";

export default function LeadSquaredInit() {
  const orgCode = process.env.NEXT_PUBLIC_LSQ_ORG_CODE || "17537";
  const defaultLandingPageId =
    process.env.NEXT_PUBLIC_LSQ_LANDING_PAGE_ID ||
    "7efef2b9-19bc-11e7-a02b-22000b10e324";

  return (
    <>
      <Script
        id="leadsquared-tracker"
        src="https://web.mxradon.com/t/Tracker.js"
        strategy="lazyOnload"
        onLoad={() => {
          try {
            (window as any).MXHOrgCode = orgCode;
            if (typeof (window as any).pidTracker === "function") {
              (window as any).pidTracker(orgCode);
            }
          } catch {
            // ignore
          }
        }}
      />
      <Script
        id="leadsquared-formtracker"
        src="https://web.mxradon.com/t/FormTracker.js"
        strategy="lazyOnload"
      />

      <Script id="lsq-custom" strategy="lazyOnload">
        {`
(function () {
  var ORG_CODE = ${JSON.stringify(orgCode)};
  var DEFAULT_LANDING_PAGE_ID = ${JSON.stringify(defaultLandingPageId)};

  function saveleadlan() {
    var form = document.getElementById("form1");
    if (!form) {
      console.warn("LeadSquared: form1 not found");
      return;
    }

    var landingPageId = DEFAULT_LANDING_PAGE_ID;
    try {
      var lpEl = form.querySelector('[name="MXHLandingPageId"]');
      if (lpEl && lpEl.value && String(lpEl.value).trim()) {
        landingPageId = String(lpEl.value).trim();
      }
    } catch (e) {}

    var fieldMapping = {
      MXHOrgCode: ORG_CODE,
      MXHLandingPageId: landingPageId,
      FirstName: "fullName",
      EmailAddress: "email",
      Mobile: "phone",
      Company: "companyName"
    };

    var onSuccess = function (data) {
      console.log("LeadSquared Success", data);
    };

    var onError = function (data) {
      console.log("LeadSquared Error", data);
    };

    if (typeof LSQForm !== "undefined") {
      try {
        new LSQForm().captureLead(fieldMapping, "form1", {
          onSuccess: onSuccess,
          onError: onError
        });
      } catch (e) {
        console.warn("LeadSquared: captureLead failed", e);
      }
    } else {
      console.warn("LeadSquared: LSQForm not loaded");
    }
  }

  window.saveleadlan = saveleadlan;
})();
        `}
      </Script>
    </>
  );
}
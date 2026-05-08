"use client";

import Script from "next/script";

export default function LeadSquaredInit() {
  return (
    <>
      <Script
        id="leadsquared-tracker"
        src="https://web.mxradon.com/t/Tracker.js"
        strategy="afterInteractive"
      />
      <Script
        id="leadsquared-formtracker"
        src="https://web.mxradon.com/t/FormTracker.js"
        strategy="afterInteractive"
      />

      <Script id="leadsquared-saveleadlan" strategy="afterInteractive">
        {`
(function () {
  if (typeof window === "undefined") return;
  if (window.__lsqSaveLeadLanInstalled) return;
  window.__lsqSaveLeadLanInstalled = true;

  function loadScriptOnce(src, flagKey) {
    if (window[flagKey]) return window[flagKey];
    window[flagKey] = new Promise(function (resolve) {
      try {
        var s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = function () { resolve(true); };
        s.onerror = function () { resolve(false); };
        document.head.appendChild(s);
      } catch (e) {
        resolve(false);
      }
    });
    return window[flagKey];
  }

  async function saveleadlan() {
    var form = document.getElementById("form1");
    if (!form) {
      console.warn("LeadSquared: form1 not found");
      return;
    }

    var fieldMapping = {
      // Mandatory (per LeadSquared JS API)
      MXHOrgCode: "17537",

      // Lead fields (values are your form field names)
      FirstName: "fullName",
      EmailAddress: "email",
      Mobile: "phone",
      Company: "companyName",
      JobTitle: "selection",

      // Custom fields used across multiple forms/pages
      // Some LeadSquared accounts use different schema names for this field;
      // we map a few common variants to ensure "Page Name" shows the actual page/form.
      Page_Name: "pageName",
      PageName: "pageName",
      mx_Page_Name: "pageName",

      // Persist the exact page URL for activity context / reporting.
      Page_URL: "Page_URL",
      PageUrl: "Page_URL",
      mx_Page_URL: "Page_URL",
      Notes: "lsqNotes",
    };

    var onSuccess = function (data) {
      console.log("LeadSquared Success", data);
    };

    var onError = function (data) {
      console.log("LeadSquared Error", data);
    };

    function tryCapture() {
      if (typeof window.LSQForm === "undefined") return false;
      try {
        new window.LSQForm().captureLead(fieldMapping, "form1", {
          onSuccess: onSuccess,
          onError: onError,
        });
        return true;
      } catch (e) {
        console.warn("LeadSquared: captureLead failed", e);
        return false;
      }
    }

    if (tryCapture()) return;

    // If scripts were blocked/delayed, try loading FormTracker again and retry once.
    console.warn("LeadSquared: LSQForm not loaded; attempting to load FormTracker.js");
    await loadScriptOnce("https://web.mxradon.com/t/FormTracker.js", "__lsqFormTrackerLoadPromise");
    if (!tryCapture()) {
      console.warn("LeadSquared: LSQForm still not loaded after retry");
    }
  }

  window.saveleadlan = saveleadlan;
})();
        `}
      </Script>
    </>
  );
}

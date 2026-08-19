// Cal.com initialization script
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal;
    let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = api.q || [];
      if(typeof namespace === "string"){
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

function loadCalWidgets() {
  Cal.config = Cal.config || {};
  Cal.config.forwardQueryParams = true;

  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const calTheme = isDark ? "dark" : "light";
  const brandColor = isDark ? "#8FB088" : "#445540";

  Cal("init", "psychoterapia-indywidualna", {origin:"https://app.cal.com"});

  Cal.ns["psychoterapia-indywidualna"]("inline", {
    elementOrSelector:"#my-cal-inline-psychoterapia-indywidualna",
    config: {
      "layout":"month_view",
      "useSlotsViewOnSmallScreen":"true",
      "theme": calTheme
    },
    calLink: "psychoterapia-milena-papp/psychoterapia-indywidualna",
    styles: {
      branding: {
        brandColor: brandColor
      }
    }
  });

  Cal.ns["psychoterapia-indywidualna"]("ui", {
    "theme": calTheme,
    "styles": {
      "branding": {
        "brandColor": brandColor
      }
    },
    "hideEventTypeDetails":false,
    "layout":"month_view"
  });

  Cal("init", "pierwsza-bezpłatna-konsultacja", {origin:"https://app.cal.com"});

  Cal.ns["pierwsza-bezpłatna-konsultacja"]("inline", {
    elementOrSelector:"#my-cal-inline-pierwsza-bezpłatna-konsultacja",
    config: {
      "layout":"month_view",
      "useSlotsViewOnSmallScreen":"true",
      "theme": calTheme
    },
    calLink: "psychoterapia-milena-papp/pierwsza-bezpłatna-konsultacja",
    styles: {
      branding: {
        brandColor: brandColor
      }
    }
  });

  Cal.ns["pierwsza-bezpłatna-konsultacja"]("ui", {
    "theme": calTheme,
    "styles": {
      "branding": {
        "brandColor": brandColor
      }
    },
    "hideEventTypeDetails":false,
    "layout":"month_view"
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const CONSENT_KEY = 'calConsentTimestamp';
  const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30 * 6; // 6 miesięcy

  const consentBlock = document.getElementById('cal-consent');
  const consentBtn = document.getElementById('cal-consent-btn');
  const calContainer = document.getElementById('cal-container');

  function showCalendars() {
    consentBlock.hidden = true;
    calContainer.hidden = false;
    loadCalWidgets();
  }

  function hasValidConsent() {
    const savedAt = Number(localStorage.getItem(CONSENT_KEY));
    return savedAt && (Date.now() - savedAt) < CONSENT_MAX_AGE_MS;
  }

  if (hasValidConsent()) {
    showCalendars();
    return;
  }

  consentBtn.addEventListener('click', function() {
    localStorage.setItem(CONSENT_KEY, String(Date.now()));
    showCalendars();
  }, { once: true });
});

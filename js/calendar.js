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

document.addEventListener('DOMContentLoaded', function() {
  Cal.config = Cal.config || {};
  Cal.config.forwardQueryParams = true;

  Cal("init", "psychoterapia-indywidualna", {origin:"https://app.cal.com"});

  Cal.ns["psychoterapia-indywidualna"]("inline", {
    elementOrSelector:"#my-cal-inline-psychoterapia-indywidualna",
    config: {
      "layout":"month_view",
      "useSlotsViewOnSmallScreen":"true"
    },
    calLink: "psychoterapia-milena-papp/psychoterapia-indywidualna",
    styles: {
      branding: {
        brandColor: "#445540"
      }
    }
  });

  Cal.ns["psychoterapia-indywidualna"]("ui", {
    "styles": {
      "branding": {
        "brandColor":"#445540"
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
      "useSlotsViewOnSmallScreen":"true"
    },
    calLink: "psychoterapia-milena-papp/pierwsza-bezpłatna-konsultacja",
    styles: {
      branding: {
        brandColor: "#445540"
      }
    }
  });

  Cal.ns["pierwsza-bezpłatna-konsultacja"]("ui", {
    "styles": {
      "branding": {
        "brandColor":"#445540"
      }
    },
    "hideEventTypeDetails":false,
    "layout":"month_view"
  });
});

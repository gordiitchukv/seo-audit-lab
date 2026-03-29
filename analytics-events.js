document.addEventListener("DOMContentLoaded", function () {
  // 1. CTA buttons
  document.querySelectorAll(".js-cta-btn").forEach(function (el) {
    el.addEventListener("click", function () {
      gtag("event", "cta_click", {
        button_text: this.dataset.buttonText || this.textContent.trim(),
        section: this.dataset.section || "unknown",
        page_path: window.location.pathname,
      });
    });
  });

  // 2. Service order buttons
  document.querySelectorAll(".js-service-order").forEach(function (el) {
    el.addEventListener("click", function () {
      gtag("event", "service_order_click", {
        service_name: this.dataset.service || this.textContent.trim(),
        page_path: window.location.pathname,
      });
    });
  });

  // 3. Internal blog/article links
  document
    .querySelectorAll(
      'a[href="post1.html"], a[href="post2.html"], a[href="post3.html"]',
    )
    .forEach(function (el) {
      el.addEventListener("click", function () {
        gtag("event", "blog_post_click", {
          article_url: this.getAttribute("href"),
          article_title: this.textContent.trim(),
          source_page: window.location.pathname,
        });
      });
    });

  // 4. FAQ expand
  document.querySelectorAll(".accordion-collapse").forEach(function (el) {
    el.addEventListener("shown.bs.collapse", function () {
      const btn = document.querySelector('[data-bs-target="#' + this.id + '"]');
      gtag("event", "faq_expand", {
        question_text: btn ? btn.textContent.trim() : this.id,
        page_path: window.location.pathname,
      });
    });
  });

  // 5. Case study download
  document.querySelectorAll(".js-case-download").forEach(function (el) {
    el.addEventListener("click", function () {
      gtag("event", "case_study_download", {
        file_name: this.dataset.fileName || "case-study.pdf",
        page_path: window.location.pathname,
      });
    });
  });

  // 6. Contact form submit
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      gtag("event", "form_submit", {
        form_name: "contact_form",
        page_path: window.location.pathname,
      });
    });
  }

  // 7. Social clicks
  document.querySelectorAll(".social-link").forEach(function (el) {
    el.addEventListener("click", function () {
      gtag("event", "social_click", {
        platform: this.dataset.platform || "unknown",
        page_path: window.location.pathname,
      });
    });
  });
});

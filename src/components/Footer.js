import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto py-4">
      <div className="container container-narrow d-flex flex-wrap align-items-center justify-content-between">
        <p className="mb-0 muted">© {year} TextUtils</p>
        <div className="d-flex gap-3">
          <a
            className="text-decoration-none"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-decoration-none"
            href="https://thesaddamsyed.github.io/text-utils"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </footer>
  );
}

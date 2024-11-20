import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      <p>
        &copy; Desenvolvido por{" "}
        <a
          href="https://github.com/g4brielpy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          Gabriel Iuri{" "}
        </a>
        - 2024
      </p>
    </footer>
  );
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import "@unocss/reset/normalize.css";
import "./uno.postcss";
import "virtual:uno.css"
import React from "react";
// import "@unocss/reset"


export const meta: MetaFunction = () => {
  return [
    { title: "Remix SPA and Tauri" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links /><title>Remix-Tauri</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

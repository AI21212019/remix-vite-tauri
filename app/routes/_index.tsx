import { invoke } from "@tauri-apps/api/core";
import { Await } from "@remix-run/react";
import { ReactNode, Suspense } from "react";

export default function Index() {
  const isDark = localStorage && localStorage.getItem("theme") === "dark";
  applyTheme(isDark);

  function applyTheme(isDark: boolean) {
    const html = document.querySelector("html");
    isDark ? html?.classList.add("dark") : html?.classList.remove("dark");
    localStorage && localStorage.setItem("theme", isDark ? "dark" : "");
  }

  const getInvoke = async () => {
    const response = await invoke("say_hello");
    console.log(response);
    return response;
  };

  // const data=useActionData<typeof getInvoke>();
  // console.log(data);
  return (
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <main className="py-16 px-4 max-w-screen-md mx-auto w-full">
      <div className="bg-yellow-800 py-6 text-center dark:bg-primary">
        <h1 className="color-white text-4xl font-sans">
          Welcome to Remix (SPA Mode)
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={getInvoke()}>
            {(value) => value as unknown as ReactNode}
          </Await>
        </Suspense>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/future/spa-mode"
              rel="noreferrer"
            >
              SPA Mode Guide
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

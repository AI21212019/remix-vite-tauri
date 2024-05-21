import { invoke } from "@tauri-apps/api/core";
import { Await } from "@remix-run/react";
import { ReactNode, Suspense } from "react";


// const getInvoke = async () => {
//   const response = await invoke("say_hello");
//   console.log(response);
//   return response;
// };

export default function Index() {
  const isDark = localStorage && localStorage.getItem("theme") === "dark";
  applyTheme(isDark);



  function applyTheme(isDark: boolean) {
    const html = document.querySelector("html");
    isDark ? html?.classList.add("dark") : html?.classList.remove("dark");
    localStorage && localStorage.setItem("theme", isDark ? "dark" : "");
  }

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }


  return (
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <>
  
    <div className="py-16 px-4 max-w-screen-md mx-auto w-full">
      <div className="bg-yellow-800 py-6 text-center dark:bg-primary">
        <h1 className="color-white text-4xl font-sans">
          Welcome to Remix (SPA Mode)
        </h1>
        <Suspense fallback={<Loading />} >
          <Await resolve={invoke("say_hello")}>
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
    </div>
    </>
  );
}

/*
// import {Window} from '@tauri-apps/api/window';


const titlebar = () => {
  const appWindow = new Window("main");
  
  appWindow.once('tauri://created', function (e) {
    e.payload
   // window successfully created
   console.log('window successfully created', e.payload);
  });
  appWindow.once('tauri://error', function (e) {
    e.payload // the error message
   // an error happened creating the window
    console.log('an error happened creating the window', e.payload);
  });
  
  document
    .getElementById('titlebar-minimize')
    ?.addEventListener('click', () => appWindow.minimize());
  document
    .getElementById('titlebar-maximize')
    ?.addEventListener('click', () => appWindow.toggleMaximize());
  document
    .getElementById('titlebar-close')
    ?.addEventListener('click', () => appWindow.close());
  }

    <div data-tauri-drag-region className="titlebar">
  <div className="titlebar-button" id="titlebar-minimize">
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </div>
  <div className="titlebar-button" id="titlebar-maximize">
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </div>
  <div className="titlebar-button" id="titlebar-close">
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </div>
</div>
  */
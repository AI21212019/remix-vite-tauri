import type { MetaFunction} from "@remix-run/node";
import {invoke} from '@tauri-apps/api/core';
// import {json, LoaderFunction} from "@remix-run/node";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};


export default function Index() {


   const isDark = localStorage && localStorage.getItem('theme') === 'dark';
    applyTheme(isDark);


  function applyTheme(isDark: boolean) {
		const html = document.querySelector('html');
		isDark ? html?.classList.add('dark') : html?.classList.remove('dark');
		localStorage && localStorage.setItem('theme', isDark ? 'dark' : '');
	}

   const getInvoke = async () => {
    const response = await invoke('say_hello');
    console.log(response);
  };

  getInvoke();
  return (
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
<div className="bg-red-500 py-6 text-center dark:bg-primary">
      <h1 className="color-white text-4xl font-sans">Welcome to Remix (SPA Mode)</h1>
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
      <p className="text-center">This is a Remix app running in SPA mode and Tauri saying</p>
    </div>

  );
}




// export const loader: LoaderFunction = async () => {
//   return json({ message: "Hello, World!" });
// };


// export const links: LinksFunction = () => {
  
  //   return [
  //     // {
  //     //   rel: 'stylesheet',
  //     //   href: 'uno.css',
  //     // },
  //     {
  //       rel: 'stylesheet',
  //       href: reset,
  //     },
  //   ]
  // }

// import { ClientOnly} from "remix-utils/client-only";
import { useHydrated } from "remix-utils/use-hydrated";

// import { BrokenOnTheServer } from "~/components/broken-on-the-server.client";
import {invoke} from '@tauri-apps/api/core';
// import type { ActionArgs, LinksFunction } from "@remix-run/node";
// import { json } from "@remix-run/node";
import { Await, useActionData } from "@remix-run/react";
import { ReactNode, Suspense } from "react";



// const action = async ({ request }: ActionFunctionArgs) => {
//   const formData = await request.formData();
//   const { left_operand, operator, right_operand } =
//     Object.fromEntries(formData);
//   console.log(Object.fromEntries(formData));
//   switch (operator) {
//     case "+":
//       const result = add(Number(left_operand), Number(right_operand));
//       console.log("result", result);
//       return json({
//         result,
//       });
//     default:
//       // Implement other operators
//       return json({
//         result: "🤷🏾",
//       });
//   }
// };


export default function Index() {

const hydrated = useHydrated();

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
    return response;
  };
  
  // const data=useActionData<typeof getInvoke>();
  // console.log(data);
  return (
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <main className="py-16 px-4 max-w-screen-md mx-auto w-full">
<div className="bg-yellow-800 py-6 text-center dark:bg-primary">
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
      <p className="text-center color-white font-sans">This is a Remix app running in SPA mode and Tauri saying:</p>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={getInvoke}>{(value) => value() as unknown as ReactNode}</Await>
    </Suspense>
      <button
        type="button"
        disabled={!hydrated}
        onClick={() => alert("I has JS loaded!")}
      >
        Try me!
      </button>
    </main>

  );
}

// && data.response as ReactNode


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

  // import {json} from "@remix-run/node";
// import type{ActionFunctionArgs} from "@remix-run/node";
// import {useActionData} from '@remix-run/react';
"use client";

import Link from "next/link";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";

export function Header() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <header>
      <p>Current locale: {currentLocale}</p>
      <hr />
      <button type="button" onClick={() => changeLocale("en")}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale("fr")}>
        FR
      </button>
      <button type="button" onClick={() => changeLocale("cn")}>
        FR
      </button>
      <hr />
      <Link href="/">Go to / (SSR)</Link>
      <Link href="/client">Go to /client (CSR)</Link>
    </header>
  );
}

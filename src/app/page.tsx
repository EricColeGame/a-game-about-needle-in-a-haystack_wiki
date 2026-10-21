import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">A Game About Needle In A Haystack Wiki</Link>…
      </p>
    </main>
  );
}

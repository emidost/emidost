import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="container notfound-inner">
        <img src="/mark.svg" alt="" width={56} height={56} />
        <p className="notfound-code">404</p>
        <h1>This page isn&rsquo;t here</h1>
        <p className="notfound-sub">
          The link may be old or mistyped. Let&rsquo;s get you back to the EMI phone lock.
        </p>
        <a className="btn primary" href="/">Back to emidost</a>
      </div>
    </main>
  );
}

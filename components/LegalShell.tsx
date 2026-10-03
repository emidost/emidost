import { type ReactNode } from 'react';
import Footer from '@/components/landing/Footer';

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="legal-nav">
        <div className="container nav-inner">
          <a className="wordmark" href="/" aria-label="emidost home">
            <img className="mark" src="/mark.svg" alt="" width={34} height={34} />
            emidost
          </a>
          <a className="btn ghost btn-sm" href="/">&larr; Back to site</a>
        </div>
      </header>
      <main className="legal">
        <div className="container legal-inner">
          <h1>{title}</h1>
          {updated && <p className="legal-updated">Last updated: {updated}</p>}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

import { SITE } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-info">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Freedom over chains —
          always.
        </p>
      </div>
    </footer>
  );
}

import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-8">
      <div className="container-page font-mono text-xs text-paper-faint">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}

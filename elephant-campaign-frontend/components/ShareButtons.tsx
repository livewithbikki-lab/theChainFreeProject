'use client';

import { useMemo, useState } from 'react';
import { SITE } from '@/lib/content';

type Props = {
  path?: string;
  title?: string;
  text?: string;
};

export default function ShareButtons({
  path = '/campaign',
  title = SITE.name,
  text = 'Help free working elephants from chains in Sauraha, Chitwan.',
}: Props) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    const base = SITE.url.replace(/\/$/, '');
    const p = path.startsWith('/') ? path : `/${path}`;
    return `${base}${p}`;
  }, [path]);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${text} ${url}`);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodedText}`,
      className: 'share-wa',
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: 'share-fb',
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      className: 'share-x',
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link:', url);
    }
  };

  const nativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        /* user cancelled */
      }
    } else {
      copyLink();
    }
  };

  return (
    <div className="share-box">
      <p className="share-label">Share this campaign</p>
      <div className="share-actions">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`share-btn ${l.className}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label}
          </a>
        ))}
        <button type="button" className="share-btn share-copy" onClick={copyLink}>
          {copied ? 'Copied!' : 'Copy link'}
        </button>
        <button type="button" className="share-btn share-native" onClick={nativeShare}>
          Share…
        </button>
      </div>
    </div>
  );
}

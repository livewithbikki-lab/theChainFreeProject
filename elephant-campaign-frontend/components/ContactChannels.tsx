'use client';

import { useState } from 'react';
import { SITE, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/content';

type Props = {
  /** Compact stack for floating buttons */
  floating?: boolean;
};

export default function ContactChannels({ floating = false }: Props) {
  const [copied, setCopied] = useState(false);
  const wechat = SITE.wechat;

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(wechat);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy WeChat ID:', wechat);
    }
  };

  if (floating) {
    return (
      <div className="contact-float" aria-label="Chat options">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-wa"
          title="WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
        <button
          type="button"
          className="float-btn float-wx"
          title="WeChat — tap to copy ID"
          aria-label="Copy WeChat ID"
          onClick={copyWechat}
        >
          <span className="float-wx-icon" aria-hidden="true">
            微
          </span>
        </button>
        {copied && <span className="float-toast">WeChat ID copied</span>}
      </div>
    );
  }

  return (
    <div className="contact-channels">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="channel-card channel-wa"
      >
        <strong>WhatsApp</strong>
        <span>{WHATSAPP_DISPLAY}</span>
        <span className="channel-hint">Most guests</span>
      </a>

      <button type="button" className="channel-card channel-wx" onClick={copyWechat}>
        <strong>WeChat 微信</strong>
        <span>{wechat}</span>
        <span className="channel-hint">
          {copied ? 'Copied!' : 'Chinese guests — tap to copy ID'}
        </span>
      </button>
    </div>
  );
}

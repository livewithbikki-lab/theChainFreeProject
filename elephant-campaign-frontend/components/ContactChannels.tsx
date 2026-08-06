'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/content';

type Props = {
  floating?: boolean;
};

export default function ContactChannels({ floating = false }: Props) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (floating) {
    return (
      <div className="contact-float" ref={rootRef}>
        {open && (
          <div className="chat-menu" role="menu" aria-label="Chat options">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-option chat-option-wa"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="chat-option-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </span>
              <span className="chat-option-text">
                <strong>WhatsApp</strong>
                <small>{WHATSAPP_DISPLAY}</small>
              </span>
            </a>
            <button
              type="button"
              className="chat-option chat-option-wx"
              role="menuitem"
              onClick={() => {
                copyWechat();
              }}
            >
              <span className="chat-option-icon" aria-hidden="true">
                微
              </span>
              <span className="chat-option-text">
                <strong>WeChat 微信</strong>
                <small>{copied ? 'Copied!' : wechat}</small>
              </span>
            </button>
          </div>
        )}

        <button
          type="button"
          className={`float-btn${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={open ? 'Close chat options' : 'Chat options'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span aria-hidden="true">✕</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
              <circle cx="8" cy="10" r="1.2" />
              <circle cx="12" cy="10" r="1.2" />
              <circle cx="16" cy="10" r="1.2" />
            </svg>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="chat-picker">
      <p className="chat-picker-label">Chat with us</p>
      <div className="chat-picker-options" role="group" aria-label="Chat apps">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-pick chat-pick-wa"
        >
          <span className="chat-pick-name">WhatsApp</span>
          <span className="chat-pick-id">{WHATSAPP_DISPLAY}</span>
          <span className="chat-pick-note">Open chat</span>
        </a>
        <button type="button" className="chat-pick chat-pick-wx" onClick={copyWechat}>
          <span className="chat-pick-name">WeChat 微信</span>
          <span className="chat-pick-id">{wechat}</span>
          <span className="chat-pick-note">
            {copied ? 'ID copied' : 'Tap to copy ID'}
          </span>
        </button>
      </div>
    </div>
  );
}

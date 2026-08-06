'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WhatsAppIcon, WeChatIcon } from '@/components/icons/BrandIcons';
import { WHATSAPP_DISPLAY, WHATSAPP_URL, SITE } from '@/lib/content';
import { openWeChat, openWhatsApp } from '@/lib/chat';

type Props = {
  floating?: boolean;
};

export default function ContactChannels({ floating = false }: Props) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const wechat = SITE.wechat;

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    openWhatsApp();
    setOpen(false);
  };

  const handleWeChat = async () => {
    const result = await openWeChat();
    if (result === 'copied' || result === 'opened') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
    setOpen(false);
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
              className="chat-option chat-option-wa"
              role="menuitem"
              onClick={handleWhatsApp}
            >
              <span className="chat-option-icon" aria-hidden="true">
                <WhatsAppIcon size={20} title="" />
              </span>
              <span className="chat-option-text">
                <strong>WhatsApp</strong>
                <small>Open app · {WHATSAPP_DISPLAY}</small>
              </span>
            </a>
            <button
              type="button"
              className="chat-option chat-option-wx"
              role="menuitem"
              onClick={handleWeChat}
            >
              <span className="chat-option-icon" aria-hidden="true">
                <WeChatIcon size={20} title="" />
              </span>
              <span className="chat-option-text">
                <strong>WeChat 微信</strong>
                <small>{copied ? 'ID copied · opening app…' : `Open app · ${wechat}`}</small>
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
            <X size={26} strokeWidth={2.25} aria-hidden="true" />
          ) : (
            <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
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
          className="chat-pick chat-pick-wa"
          onClick={handleWhatsApp}
        >
          <span className="chat-pick-icon chat-pick-icon-wa" aria-hidden="true">
            <WhatsAppIcon size={22} title="" />
          </span>
          <span className="chat-pick-name">WhatsApp</span>
          <span className="chat-pick-id">{WHATSAPP_DISPLAY}</span>
          <span className="chat-pick-note">Opens WhatsApp to message us</span>
        </a>
        <button type="button" className="chat-pick chat-pick-wx" onClick={handleWeChat}>
          <span className="chat-pick-icon chat-pick-icon-wx" aria-hidden="true">
            <WeChatIcon size={22} title="" />
          </span>
          <span className="chat-pick-name">WeChat 微信</span>
          <span className="chat-pick-id">{wechat}</span>
          <span className="chat-pick-note">
            {copied ? 'ID copied — open WeChat & search' : 'Opens WeChat · copies ID'}
          </span>
        </button>
      </div>
    </div>
  );
}

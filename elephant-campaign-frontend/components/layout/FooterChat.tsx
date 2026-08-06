'use client';

import { openWeChat, openWhatsApp } from '@/lib/chat';

type Props = {
  variant: 'whatsapp' | 'wechat';
  label: string;
  icon: React.ReactNode;
  href?: string;
};

export default function FooterChat({ variant, label, icon, href }: Props) {
  if (variant === 'whatsapp' && href) {
    return (
      <a
        href={href}
        className="footer-chat-link"
        onClick={(e) => {
          e.preventDefault();
          openWhatsApp();
        }}
      >
        <span className="footer-chat-icon" aria-hidden="true">
          {icon}
        </span>
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="footer-chat-link"
      onClick={() => {
        void openWeChat();
      }}
    >
      <span className="footer-chat-icon" aria-hidden="true">
        {icon}
      </span>
      {label}
    </button>
  );
}

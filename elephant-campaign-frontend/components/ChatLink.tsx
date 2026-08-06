'use client';

import { WhatsAppIcon, WeChatIcon } from '@/components/icons/BrandIcons';
import { WHATSAPP_URL } from '@/lib/content';
import { openWeChat, openWhatsApp } from '@/lib/chat';

type Variant = 'whatsapp' | 'wechat';

type Props = {
  variant: Variant;
  className?: string;
  children?: React.ReactNode;
  /** Prefilled WhatsApp message */
  message?: string;
  showIcon?: boolean;
};

export default function ChatLink({
  variant,
  className = 'btn btn-outline-dark',
  children,
  message,
  showIcon = true,
}: Props) {
  if (variant === 'whatsapp') {
    return (
      <a
        href={WHATSAPP_URL}
        className={`chat-link ${className}`}
        onClick={(e) => {
          e.preventDefault();
          openWhatsApp(message);
        }}
      >
        {showIcon && (
          <WhatsAppIcon size={18} className="chat-link-icon" title="" />
        )}
        {children ?? 'WhatsApp'}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`chat-link ${className}`}
      onClick={() => {
        void openWeChat();
      }}
    >
      {showIcon && <WeChatIcon size={18} className="chat-link-icon" title="" />}
      {children ?? 'WeChat'}
    </button>
  );
}

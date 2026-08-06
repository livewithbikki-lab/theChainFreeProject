import { SITE } from '@/lib/content';

const DEFAULT_MESSAGE =
  'Hi, I want to know more about The Chain Free Project.';

/** Digits only — required by WhatsApp deep links */
export const WHATSAPP_PHONE = SITE.whatsapp.replace(/\D/g, '');

export const WHATSAPP_DISPLAY = `+${WHATSAPP_PHONE.replace(
  /^(\d{3})(\d+)$/,
  '$1 $2'
)}`;

export const WECHAT_ID = SITE.wechat.trim();

function encodeMsg(message?: string) {
  return encodeURIComponent(message?.trim() || DEFAULT_MESSAGE);
}

/** Opens WhatsApp app (mobile) or WhatsApp Web — with prefilled text */
export function whatsappUrl(message?: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeMsg(message)}`;
}

/** Native app scheme — preferred on phones when WhatsApp is installed */
export function whatsappAppUrl(message?: string) {
  return `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encodeMsg(message)}`;
}

/**
 * WeChat has no public “start chat” web URL like wa.me.
 * weixin:// opens the WeChat app; user searches the copied ID/phone.
 */
export const WECHAT_APP_URL = 'weixin://';

export function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

/** Open WhatsApp app first on mobile; fall back to wa.me */
export function openWhatsApp(message?: string) {
  const web = whatsappUrl(message);
  if (isMobileDevice()) {
    const app = whatsappAppUrl(message);
    const started = Date.now();
    window.location.href = app;
    window.setTimeout(() => {
      if (document.visibilityState === 'visible' && Date.now() - started < 2200) {
        window.location.href = web;
      }
    }, 1200);
    return;
  }
  window.open(web, '_blank', 'noopener,noreferrer');
}

/** Copy WeChat ID, then try to open the WeChat app */
export async function openWeChat(): Promise<'copied' | 'opened' | 'prompt'> {
  let copied: 'copied' | 'prompt' = 'prompt';
  try {
    await navigator.clipboard.writeText(WECHAT_ID);
    copied = 'copied';
  } catch {
    window.prompt('Copy WeChat ID / phone, then search in WeChat:', WECHAT_ID);
  }

  if (isMobileDevice()) {
    window.location.href = WECHAT_APP_URL;
    return copied === 'copied' ? 'opened' : 'prompt';
  }

  return copied;
}

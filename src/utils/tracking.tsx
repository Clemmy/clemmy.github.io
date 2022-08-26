import mixpanel from 'mixpanel-browser';
import { isDevelopment } from './environment';

export function initTracking() {
  mixpanel.init('f66d19bd37d90f4c9e36341a3e59e458', {
    debug: isDevelopment(),
  });
  mixpanel.track('Page load');
}

export function trackButtonClick({
  text,
  href,
}: {
  text: string;
  href?: string;
}) {
  mixpanel.track('Click button', { text, href });
}

export function trackLinkClick({
  text,
  href,
}: {
  text: string;
  href?: string;
}) {
  mixpanel.track('Click link', { text, href });
}

'use client';

const React = require('react');
const Script = require('next/script').default;

function GoogleAnalytics({ gaId }) {
  if (!gaId) return null;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Script, {
      src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
      strategy: 'afterInteractive',
    }),
    React.createElement(Script, {
      id: 'google-analytics',
      strategy: 'afterInteractive',
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            send_page_view: false,
            page_location: 'https://libra-support.co.uk/',
            page_title: 'Libra Support Services',
            page_referrer: '',
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `,
      },
    }),
  );
}

module.exports = { GoogleAnalytics };

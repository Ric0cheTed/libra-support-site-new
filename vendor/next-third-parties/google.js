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
          gtag('config', '${gaId}');
        `,
      },
    }),
  );
}

module.exports = { GoogleAnalytics };

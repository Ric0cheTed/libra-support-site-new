'use client';

import { useEffect, useRef } from 'react';

const CQC_WIDGET_SRC =
  'https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-11688271981&data-host=https://www.cqc.org.uk&type=location';

export default function CqcWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous widget render (helps with HMR/dev reloads)
    container.innerHTML = '';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = CQC_WIDGET_SRC;

    container.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[120px] flex items-center justify-center"
      aria-label="CQC rating widget"
    />
  );
}

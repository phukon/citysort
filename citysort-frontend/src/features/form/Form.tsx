import React, { useEffect } from 'react';

const Form: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tally.so/widgets/embed.js';
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/nP9QbQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height={427}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Rate your City"
      />
    </>
  );
};

export default Form;

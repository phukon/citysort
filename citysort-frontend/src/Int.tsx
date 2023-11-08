import { useEffect } from 'react'

const Int = () => {
  useEffect(() => {
    const taglineOptions = ['CitySort']
    const tagline =
      taglineOptions[Math.floor(Math.random() * taglineOptions.length)]

    let lineHeight = 32
    if (navigator.userAgent.includes('Firefox')) {
      lineHeight = 14
    }

    const message = {
      text: `%c${tagline}`,
      styles: [
        // Add a background color to the styles using ANSI escape codes
        `color: inherit; font-size: 20px; font-weight: 900; margin-bottom: 12px; line-height: 24px;`,
      ],
      logo: {
        text: '%c📌 %c',
        styles: [
          `font-size: 34px; margin-right: 0px; line-height: ${lineHeight}px;`,
          '',
        ],
      },
      line: {
        text: `%c\n\CitySort is a live index of the best cities to live and work in India, based on crowdsourced data.\n %c`,
        styles: [`color: #87CEEB; font-size: 14px;`, ''],
      },
    };

    let logoStyles
    let textStyles
    message.text = `${message.logo.text}${message.text}${message.line.text}`
    ;(logoStyles = message.styles).unshift.apply(
      logoStyles,
      message.logo.styles
    )
    ;(textStyles = message.styles).push.apply(textStyles, message.line.styles)

    console.log.apply(this, [`\n${message.text}`].concat(message.styles))
  }, [])

  return null // This component doesn't render anything in the DOM
}

export default Int

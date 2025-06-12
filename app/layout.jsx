import "./globals.css"

export const metadata = {
  title: "Syahrul Fajar - FullStack Web Developer",
  description: "Portfolio website of Syahrul Fajar - FullStack Web Developer",
  generator: "Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Syahrul Fajar - FullStack Web Developer</title>
        <link rel="icon" href="/profile-avatar.png" type="image/png" />
        <link rel="apple-touch-icon" href="/profile-avatar.png" />
        <meta name="description" content="Portfolio website of Syahrul Fajar - FullStack Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}

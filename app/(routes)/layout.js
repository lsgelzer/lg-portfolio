import Header from "../sections/header"
export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>
        <Header/>
          {children}</body>
      </html>
    )
  }
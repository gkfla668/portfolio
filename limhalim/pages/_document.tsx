import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Limhalim Portfolio</title>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="임하림의 프론트엔드 웹 포트폴리오, 지금 확인해보세요."
        />

        {/** opengraph 설정 */}
        <meta property="og:title" content="Limhalim Portfolio" />
        <meta
          property="og:url"
          content="https://limhalim-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/TitleImage.png" />
        <meta property="og:description" content="임하림의 웹 포트폴리오" />
      </Head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link
        href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Noto+Sans+KR:wght@500&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

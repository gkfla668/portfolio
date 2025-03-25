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

      <link rel="preload" href="https://fonts.googleapis.com" />
      <link
        rel="preload"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nanum+Gothic:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nanum+Gothic:wght@400;700&display=swap"
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

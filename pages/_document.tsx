import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GlobalStyles } from '../src/identity/globalStyles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/aqg3dpk.css" />
          <link rel="shortcut icon" href="../images/favicon.ico" />
          <script type="text/javascript" src="/scripts/midi.js" key="scripts" />
          <GlobalStyles />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

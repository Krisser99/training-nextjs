import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { AppWrapper } from 'context/post/context';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ReactElement, ReactNode, useEffect } from 'react';
import '../styles/globals.scss';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export type NextPageWidthLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWidthLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    );
}

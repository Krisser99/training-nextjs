import { Footer } from 'components/footer';
import { Header } from 'components/header';
import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    title?: string;
}

const DefaultLayout = ({
    children,
    title = 'Training NextJS',
}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
);

export { DefaultLayout };

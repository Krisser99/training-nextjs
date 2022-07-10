import Link from 'next/link';

interface Props {
    title: string;
    href: string;
}

const Btn = ({ title, href }: Props) => {
    return (
        <Link href={`/${href}`}>
            <a className="header-contact-btn btn btn__primary">{title}</a>
        </Link>
    );
};

export { Btn };

import Link from 'next/link';

interface Props {
    title: string;
}

const Btn = ({ title }: Props) => {
    return (
        <Link href="/contact">
            <a className='header-contact-btn btn btn__primary'>{title}</a>
        </Link>
    );
};

export { Btn };

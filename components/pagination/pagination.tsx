import Image from 'next/image';
import Link from 'next/link';

const Pagination = () => {
    return (
        <div className="pagination">
            <Link href={'/'}>
                <a className="pagination__item pagination__arrow">
                    <Image
                        width={24}
                        height={24}
                        src="/images/left-arrow.svg"
                    ></Image>
                </a>
            </Link>
            <Link href={'/'}>
                <a className="pagination__item pagination__arrow">
                    1
                </a>
            </Link>
            <Link href={'/'}>
                <a className="pagination__item pagination__arrow active">
                    2
                </a>
            </Link>
            <Link href={'/'}>
                <a className="pagination__item pagination__arrow">
                    <Image
                        width={24}
                        height={24}
                        src="/images/right-arrow.svg"
                    ></Image>
                </a>
            </Link>
        </div>
    );
};

export { Pagination };

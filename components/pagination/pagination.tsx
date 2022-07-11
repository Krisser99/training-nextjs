import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
    posts: any[];
    page: number;
}

const Pagination = ({ page, posts }: Props) => {
    const [pages, setPages] = useState<number[]>();

    useEffect(() => {
        const PERPAGE = 12;
        const page = posts.length / PERPAGE;

        page < 1 ? setPages([1]) : setPages([1, 2]);
    }, []);

    return (
        <div className="pagination">
            {pages?.map((numPage: number) => (
                <Link key={numPage} href={`/blog/page/${numPage}`}>
                    <a
                        className={`pagination__item pagination__arrow ${
                            page === numPage && 'active'
                        }`}
                    >
                        {numPage}
                    </a>
                </Link>
            ))}
        </div>
    );
};

export { Pagination };


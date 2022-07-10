import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    categories: any[];
}

const CategoryBlog = ({ categories }: Props) => {
    const router = useRouter();
    return (
        <div className="category-nav">
            <ul className="flex">
                <li>
                    <Link href={`/blog`}>
                        <a
                            className={
                                `/blog` === router.pathname ? 'active' : ''
                            }
                        >
                            Tất cả
                        </a>
                    </Link>
                </li>
                {categories.map((item) => (
                    <li key={item.id}>
                        <Link href={`/cat/${item.slug}`}>
                            <a
                                className={
                                    `/cat/${item.slug}` === router.asPath
                                        ? 'active'
                                        : ''
                                }
                            >
                                {item.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { CategoryBlog };

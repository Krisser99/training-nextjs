import { getPostsSearch } from 'api';
import { usePostContext } from 'context';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const SearchBar = () => {
    const [keyword, setKeyword] = useState<string | undefined>();
    const { setDataSearch } = usePostContext();
    const router = useRouter();
    const path = router.pathname;
    const handSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const posts = await getPostsSearch(keyword);
        setDataSearch(posts);
        router.push({
            pathname: router.pathname,
            query: { ...router.query, search: keyword },
        });
    };

    const handleRemoveText = () => {
        setKeyword('');
    };

    return (
        <form onSubmit={handSearch}>
            <div className="blog-form">
                <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                />
                {keyword && (
                    <span
                        onClick={handleRemoveText}
                        className="blog-form__remove-text"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                )}
                <button className="btn btn__primary blog-form__btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export { SearchBar };

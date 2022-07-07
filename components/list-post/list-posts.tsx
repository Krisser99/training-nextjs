import Image from 'next/image';
import Link from 'next/link';

interface Props {
    posts: any;
}

const ListPosts = ({ posts }: Props) => {
    return (
        <div className="list-blogs mb-14">
            <div className="grid grid-cols-12 gap-x-6 gap-y-14 items-center flex-wrap">
                {posts.map((post: any) => (
                    <div key={post.id} className="col-span-12 md:col-span-6 xl:col-span-4">
                        <div className="card-post">
                            <div className="card-post__img">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    title={post.title.rendered}
                                >
                                    <a>
                                        <img
                                            src={post.acf.avtq}
                                            alt={post.title.rendered}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="card-post__info">
                                <h3 className='xl:text-2xl'>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        title={post.title.rendered}
                                    >
                                        <a>{post.title.rendered}</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { ListPosts };

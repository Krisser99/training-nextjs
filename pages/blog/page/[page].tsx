import { getCategories, getPostsData } from 'api';
import { CategoryBlog, Filter, Pagination } from 'components';
import { BlogList } from 'components/blog';
import { DefaultLayout } from 'components/layout';
import { usePostContext } from 'context';
import { GetServerSideProps } from 'next';

interface Props {
    posts: any[];
    page: string;
    categories: any[];
}

const Blog = ({ posts, page, categories }: Props) => {
    const { dataSearch } = usePostContext();
    
    return (
        <DefaultLayout>
            <div className="main-container">
                <main>
                    <section className="section page-hero">
                        <div className="container-base">
                            <div className="flex justify-between items-center">
                                <div className="text-center lg:text-left lg:basis-1/2 px-3">
                                    <div>
                                        <h2 className="section__heading">
                                            Blog
                                        </h2>
                                        <p>
                                            Chúng tôi muốn chia sẻ cái nhìn sâu
                                            sắc và kinh nghiệm của mình để giúp
                                            bạn tìm hiểu thêm về các chuyển đổi
                                            kỹ thuật số tuyệt vời. Để có thông
                                            tin, ý tưởng và thông điệp mạnh mẽ,
                                            hãy đọc các bài đăng trên blog của
                                            chúng tôi.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="hidden lg:block h-[450px] w-[591px]"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog-content">
                        <div className="container-base">
                            <div className="filter-blogs__pages">
                                <Filter />
                                <CategoryBlog categories={categories} />
                            </div>
                            <BlogList posts={dataSearch || posts} />
                            <Pagination page={+page} posts={posts} />
                        </div>
                    </section>
                </main>
            </div>
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const page = ctx.params?.page || 1;

    const posts = await getPostsData(+page);

    const categories = await getCategories();

    return {
        props: {
            posts,
            page,
            categories,
        },
    };
};

export default Blog;

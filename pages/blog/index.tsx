import { getPostsData } from 'api';
import { Pagination } from 'components';
import { DefaultLayout } from 'components/layout';
import { ListPosts } from 'components/list-post';
import { GetStaticProps } from 'next';

const Blog = ({ posts }: any) => {
    const data = getPostsData();
    console.log(data);
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
                                <h1>filter</h1>
                            </div>
                            <ListPosts posts={posts} />
                            <Pagination />
                        </div>
                    </section>

                </main>
            </div>
        </DefaultLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPostsData();

    return {
        props: {
            posts,
        },
    };
};

export default Blog;

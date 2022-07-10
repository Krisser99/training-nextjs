import { getCategories, getPostsCategory, getPostsData } from 'api';
import { CategoryBlog, Filter, Pagination } from 'components';
import { BlogList } from 'components/blog';
import { DefaultLayout } from 'components/layout';
import { usePostContext } from 'context';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
    posts: any[];
    page: string;
    categories: any[];
    name: string;
}

const Blog = ({ posts, page, categories, name }: Props) => {
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
                                            {name}
                                        </h2>
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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const page = params?.page || 1;

    const categories = await getCategories();

    const categoryId = categories.find(
        (item: any) => item.slug === params.slug
    );

    const posts = await getPostsCategory(categoryId.id);

    return {
        props: {
            posts,
            page,
            categories,
            name: categoryId.name,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await getCategories();

    const paths = categories.map((item: any) => {
        return {
            params: { slug: item.slug },
        };
    });

    return { paths, fallback: 'blocking' };
};

export default Blog;

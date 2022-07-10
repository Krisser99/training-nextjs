import { getPostDetail, getPostsData } from 'api';
import { DefaultLayout } from 'components';
import { BlogDetail } from 'components/blog/blog-detail';
import { GetStaticPaths, GetStaticProps } from 'next';

const Post = ({ post }: any) => {
    return (
        <DefaultLayout>
            <BlogDetail post={post} />
        </DefaultLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const url = `https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=${params.slug}`;
    const data = await getPostDetail(url);

    const [post] = data;

    return {
        props: {
            post,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const page = 1;

    const posts = await getPostsData(page);

    const paths = posts.map((post: any) => {
        return {
            params: { slug: post.slug },
        };
    });

    return { paths, fallback: 'blocking' };
};

export default Post;

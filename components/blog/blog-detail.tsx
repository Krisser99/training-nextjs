interface Props {
    post: any;
}

const BlogDetail = ({ post }: Props) => {
    return (
        <div className="main-container">
            <main>
                <section className="section blog-heading">
                    <div className="container-base lg:!max-w-[766px] grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="section__title flex items-center">
                                <h2>{post.title.rendered}</h2>
                            </div>
                        </div>
                        <div>
                            <span className="opacity-90">Business</span>
                        </div>
                    </div>
                </section>
                <section className="mb-16">
                    <div className="container-base lg:!max-w-[766px] grid grid-cols-12">
                        <article 
                            className="post-content col-span-12 text-justify"
                            dangerouslySetInnerHTML={{
                                __html: post.content.rendered,
                            }}
                        ></article>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { BlogDetail };

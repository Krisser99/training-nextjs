
type Props = {
    posts: any[];
};

const AboutPage = ({ posts }: Props) => {
    console.log(posts)
    return <div>
        <h1>ABOUT</h1>
    </div>;
}

export default AboutPage;

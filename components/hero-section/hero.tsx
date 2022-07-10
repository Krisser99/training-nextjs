import Lottie from 'react-lottie-player';
interface Props {
    title: string;
    content?: string;
    heroImage: any;
}

const HeroSection = ({ title, content, heroImage }: Props) => {
    return (
        <section className="section page-hero">
            <div className="container-base">
                <div className="flex items-center flex-wrap">
                    <div className="text-center lg:text-left lg:basis-1/2 px-3">
                        <div>
                            <h2 className="section__heading">{title}</h2>
                            <p>{content}</p>
                        </div>
                    </div>
                    <div className="lg:basis-1/2">
                        <div>
                            <Lottie
                                loop
                                animationData={heroImage}
                                play
                                style={{ width: '100%'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HeroSection };

import { Btn, HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import Lottie from 'react-lottie-player';
import HeroImg from '../public/images/home-hero.json';
const HomePage = () => (
    <DefaultLayout>
        <section className="section page-hero">
            <div className="container-base">
                <div className="flex items-center flex-wrap">
                    <div className="text-center lg:text-left lg:basis-2/3 px-3">
                        <div>
                            <h2 className="section__heading text">
                                Đối tác chuyển đổi số và đổi mới phần mềm cho
                                doanh nghiệp
                            </h2>
                            <Btn title="Xem thêm" href="about-us" />
                        </div>
                    </div>
                    <div className='lg:basis-1/3'>
                        <div>
                            <Lottie
                                loop
                                animationData={HeroImg}
                                play
                                style={{ width: '100%'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
);

export default HomePage;

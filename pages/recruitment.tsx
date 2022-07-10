import { HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import HeroImg from '../public/images/recruitment-hero.json';
const RecruitmentPage = () => (
    <div>
        <DefaultLayout>
            <HeroSection
                title="Cơ hội việc làm"
                heroImage={HeroImg}
            />
        </DefaultLayout>
    </div>
);

export default RecruitmentPage;

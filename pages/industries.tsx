import { HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import HeroImg from '../public/images/industries-hero.json';
const IndustiesPage = () => (
    <div>
        <DefaultLayout>
            <HeroSection
                title="Phát triển ứng dụng"
                content="Chúng tôi kết hợp giữa kinh nghiệm chuyên môn và công nghệ tiên tiến trong ngành, không ngừng đổi mới, đảm bảo mang lại sản phẩm phần mềm phù hợp với nhu cầu kinh doanh của doanh nghiệp."
                heroImage={HeroImg}
            />
        </DefaultLayout>
    </div>
);

export default IndustiesPage;

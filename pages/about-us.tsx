import { Btn, HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import HeroImg from '../public/images/aboutUs-hero.json';
const AboutUsPage = () => (
    <div>
        <DefaultLayout>
            <HeroSection
                title="Về chúng tôi"
                content="Mục tiêu của chúng tôi là thành công của bạn. Cung cấp các sản phẩm phần mềm tùy chỉnh, sáng tạo, phù hợp với doanh nghiệp của bạn và nhu cầu của khách hàng để thúc đẩy thành công - bất kể thành công đó có ý nghĩa như thể nào đối với bạn."
                heroImage={HeroImg}
            />
        </DefaultLayout>
    </div>
);

export default AboutUsPage;

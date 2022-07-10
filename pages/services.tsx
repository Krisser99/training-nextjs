import { HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import HeroImg from '../public/images/service-hero.json';
const ServicesPage = () => (
    <div>
        <DefaultLayout>
            <HeroSection
                title="Dịch vụ phát triển ứng dụng phần mềm"
                content="GCO Software chuyên cung cấp dịch vụ tư vấn và phát triển ứng dụng phần mềm với sự hợp tác trên toàn cầu, tạo ra các giải pháp số tùy chỉnh phù hợp, thúc đẩy thành công trong kinh doanh."
                heroImage={HeroImg}
            />
        </DefaultLayout>
    </div>
);

export default ServicesPage;

import { HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import HeroImg from '../public/images/contact-hero.json';
const ContactPage = () => (
    <div>
        <DefaultLayout>
            <HeroSection
                title="Đồng hành với những gì tốt nhất"
                content="Hãy nói về cách một giải pháp phần mềm được cung cấp bởi GCO Software có thể giúp doanh nghiệp của bạn chuyển đổi kỹ thuật số thành một công ty mạnh mẽ và thu hút khách hàng."
                heroImage={HeroImg}
            />
        </DefaultLayout>
    </div>
);

export default ContactPage;

import { HeroSection } from 'components';
import { DefaultLayout } from 'components/layout';
import HeroImg from '../public/images/project-hero.json';
const ProjectPage = () => (
    <div>
        <DefaultLayout>
            <HeroSection
                title="Thành tựu"
                content="GCO Software chúng tôi đã giúp nhiều doanh nghiệp tạo dựng được những nền tảng công nghệ tuyệt vời và đạt được những thành công đáng ngạc nhiên. Đây là lý do giúp chúng tôi có được một lượng khách hàng đông đảo như hiện nay. Cùng điểm lại một vài sản phẩm điển hình của chúng tôi."
                heroImage={HeroImg}
            />
        </DefaultLayout>
    </div>
);

export default ProjectPage;

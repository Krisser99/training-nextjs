export interface IMenuChildren {
    id: string;
    href: string;
    title: string;
}

export interface IMenu {
    id: string;
    href: string;
    path: string;
    title: string;
    children?: IMenuChildren[];
}

export const MenuList: IMenu[] = [
    {
        id: 'industries',
        href: '/industries',
        path: '/industries',
        title: 'Ngành',
        children: [
            { id: 'technology', href: '/industries', title: 'Công nghệ' },
            {
                id: 'publishing-advertising',
                href: '/industries',
                title: 'Tiếp thị & Quảng cáo',
            },
            {
                id: 'media-entertainment',
                href: '/industries',
                title: 'Truyền thông & Giải trí',
            },
            {
                id: 'logistica-transportation',
                href: '/industries',
                title: 'Logicstics & Vận tải',
            },
            {
                id: 'education-and-e-learning',
                href: '/industries',
                title: 'Giáo dục & Đào tạo trực tuyến',
            },
            {
                id: 'retail-e-commerce',
                href: '/industries',
                title: 'Bán lẻ & Thương mại điện tử',
            },
            {
                id: 'product-companies',
                href: '/industries',
                title: 'Công ty Product',
            },
            {
                id: 'sme',
                href: '/industries',
                title: 'Doanh nghiệp vừa và nhỏ (SME)',
            },
        ],
    },
    {
        id: 'services',
        href: '/services',
        path: '/services',
        title: 'Dịch vụ',
        children: [
            {
                id: 'maintenance-and-upgrade',
                href: '/services',
                title: 'Bảo trì và nâng cấp',
            },
            {
                id: 'general-consulting',
                href: '/services',
                title: 'Tư vấn & Phát triển phần mềm',
            },
            {
                id: 'mobile-app-development',
                href: '/services',
                title: 'Phát triển ứng dụng di động',
            },
            {
                id: 'software-development-services',
                href: '/services',
                title: 'Tư vấn & Thiết kế website',
            },
            {
                id: 'qa-and-testing',
                href: '/services',
                title: 'Dịch vụ kiểm thử phần mềm',
            },
            {
                id: 'dedicated-development-team',
                href: '/services',
                title: 'Nhóm phát triển có chuyên môn cao',
            },
            {
                id: 'offshore-development',
                href: '/services',
                title: 'Dịch vụ IT Offshore & Out Sourcing',
            },
            {
                id: 'customized-software-solution',
                href: '/services',
                title: 'Phát triển phần mềm tùy chỉnh',
            },
        ],
    },
    {
        id: 'project',
        href: '/project',
        path: '/project',
        title: 'Dự án',
    },
    {
        id: 'about-us',
        href: '/about-us',
        path: '/about-us',
        title: 'Về chúng tôi',
    },
    {
        id: 'blog',
        href: '/blog',
        path: '/blog',
        title: 'Blog',
    },
    {
        id: 'recruitment',
        href: '/recruitment',
        path: '/recruitment',
        title: 'Tuyển dụng',
    },
];

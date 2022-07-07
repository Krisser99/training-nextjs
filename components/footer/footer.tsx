import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
    
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container-base">
                    <div className="footer__logo md:hidden">
                        <Link href="/">
                            <a className="logo-footer__mobile">
                                <img
                                    className="w-[150px] h-auto"
                                    src="https://gcosoftware.vn/images/logo-main.svg"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-12 md:gap-6">
                        <div className="col-span-12 lg:col-span-5 footer__contact">
                            <div className="footer__collapse">
                                <div className="footer__collapse-title md:mb-4">
                                    Địa chỉ
                                </div>
                                <div className="footer__collapse-content">
                                    <ul className="grid grid-cols-12 gap-x-6 footer__link-icon mb-4">
                                        <li className="col-span-6">
                                            <span className="footer__link-item-icon">
                                                <FontAwesomeIcon
                                                    className="h-5 w-5 mt-1"
                                                    icon={faLocationDot}
                                                />
                                            </span>
                                            <div className="footer__link-item-content">
                                                <strong>Hà Nội</strong>
                                                <span>
                                                    Tầng 8 tòa nhà Ford, 311 -
                                                    313 Trường Chinh, quận Thanh
                                                    Xuân, Hà Nội
                                                </span>
                                            </div>
                                        </li>
                                        <li className="col-span-6">
                                            <span className="footer__link-item-icon">
                                                <FontAwesomeIcon
                                                    className="h-5 w-5 mt-1"
                                                    icon={faLocationDot}
                                                />
                                            </span>
                                            <div className="footer__link-item-content">
                                                <strong>Thanh Hóa</strong>
                                                <span>
                                                    Lô số MG 202, Khu đô thị
                                                    Vincom, 27 Trần Phú, Phường
                                                    Điện Biên, TP Thanh Hóa
                                                </span>
                                            </div>
                                        </li>
                                        <li className="col-span-6">
                                            <span className="footer__link-item-icon">
                                                <FontAwesomeIcon
                                                    className="h-5 w-5 mt-1"
                                                    icon={faLocationDot}
                                                />
                                            </span>
                                            <div className="footer__link-item-content">
                                                <strong>Đà Nẵng</strong>
                                                <span>
                                                    Tầng 12, Vĩnh Trung Plaza,
                                                    255 - 257 Hùng Vương, Phường
                                                    Vĩnh Trung, Quận Thanh Khê,
                                                    TP Đà Nẵng
                                                </span>
                                            </div>
                                        </li>
                                        <li className="col-span-6">
                                            <span className="footer__link-item-icon">
                                                <FontAwesomeIcon
                                                    className="h-5 w-5 mt-1"
                                                    icon={faLocationDot}
                                                />
                                            </span>
                                            <div className="footer__link-item-content">
                                                <strong>TP. Hồ Chí Minh</strong>
                                                <span>
                                                    Tầng 7, toà nhà Citilight,
                                                    45 Võ Thị Sáu, Phường Đa
                                                    Kao, Quận 1, TPHCM
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="footer__link">
                                        <ul className="grid grid-cols-12 md:gap-6 footer__link-icon">
                                            <li className="col-span-6">
                                                <span className="footer__link-item-icon">
                                                    <FontAwesomeIcon
                                                        className="h-5 w-5 mt-1"
                                                        icon={faPhone}
                                                    />
                                                </span>
                                                <div className="footer__link-item-content">
                                                    <strong>Điện thoại</strong>
                                                    <span>1900 2013</span>
                                                </div>
                                            </li>
                                            <li className="col-span-6">
                                                <span className="footer__link-item-icon">
                                                    <FontAwesomeIcon
                                                        className="h-5 w-5 mt-1"
                                                        icon={faEnvelope}
                                                    />
                                                </span>
                                                <div className="footer__link-item-content">
                                                    <strong>Email</strong>
                                                    <span>
                                                        info@gcosoftware.vn
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <div className="grid grid-cols-12 md:gap-6">
                                <div className="col-span-12 md:col-span-9">
                                    <div className="grid grid-cols-12 md:gap-6">
                                        <div className="footer__collapse col-span-12 md:col-span-6">
                                            <div className="footer__collapse-title md:mb-4">
                                                Các ngành
                                            </div>
                                            <div className="footer__collapse-content">
                                                <ul className="footer__link">
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>Công nghệ</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Tiếp thị & Quảng
                                                                cáo
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Truyền thông &
                                                                Giải trí
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Logicstics & Vận
                                                                tải
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Giáo dục & Đào
                                                                tạo trực tuyến
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Bán lẻ & Thương
                                                                mại điện tử
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Công ty Product
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/industries">
                                                            <a>
                                                                Doanh nghiệp vừa
                                                                và nhỏ (SME)
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="footer__collapse col-span-12 md:col-span-6">
                                            <div className="footer__collapse-title md:mb-4">
                                                Dịch vụ
                                            </div>
                                            <div className="footer__collapse-content">
                                                <ul className="footer__link">
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Bảo trì và nâng
                                                                cấp
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Tư vấn & Phát
                                                                triển phần mềm
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Phát triển ứng
                                                                dụng di động
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Tư vấn & Thiết
                                                                kế website
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Dịch vụ kiểm thử
                                                                phần mềm
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Nhóm phát triển
                                                                có chuyên môn
                                                                cao
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Dịch vụ IT
                                                                Offshore & Out
                                                                Sourcing
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services">
                                                            <a>
                                                                Phát triển phần
                                                                mềm tùy chỉnh
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer__collapse col-span-12 md:col-span-3">
                                    <div className="footer__collapse-title md:mb-4">
                                        Tài nguyên
                                    </div>
                                    <div className="footer__collapse-content">
                                        <ul className="footer__link md:mb-4">
                                            <li>
                                                <Link href="/">
                                                    <a>Về chúng tôi</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Tuyển dụng</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Quy định chung</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Chính sách bảo mật</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Hình thức thanh toán</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Giao nhận - Cài đặt</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Chính sách bảo trì</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Chính sách hoàn tiền</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer__collapse col-span-12 md:col-start-10 md:col-end-12">
                                    <div className="footer__collapse-title md:mb-4">
                                        Liên kết
                                    </div>
                                    <div className="footer__collapse-content">
                                        <span className="footer__link-item-icon opacity-90 hover:opacity-100">
                                            <a
                                                href="https://www.facebook.com/SoftwareGCO"
                                                target="_blank"
                                            >
                                                <FontAwesomeIcon
                                                    className="h-6 w-6"
                                                    icon={faFacebookSquare}
                                                />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-base">
                    <div className="footer__bottom-inner">
                        <span>
                            © 2021 GCO Software. Số QĐ thành lập: 0109817960 do
                            sở KH & ĐT TP Hà Nội cấp ngày 15/11/2021.
                        </span>
                        <a
                            className="mx-auto md:mx-0"
                            href="https://www.dmca.com/Protection/Status.aspx?ID=21e274ab-cce5-4f8b-8943-51e33336dc37&refurl=https://gcosoftware.vn/vi/blog/"
                        >
                            <img
                                src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=21e274ab-cce5-4f8b-8943-51e33336dc37"
                                alt="DMCA.com Protection Status"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Footer };

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from './nav';

const Header = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
    
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScroll]);

    return (
        <div className={`header ${isScroll && 'scroll-fixed__header'}`}>
            <section className="header-inner">
                <div className="container xl:max-w-[1230px] flex justify-between items-center mx-auto px-3">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img
                                    className="logo"
                                    src="https://gcosoftware.vn/public/image/d381d5.svg"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <Nav />
                </div>
            </section>
        </div>
    );
};

export { Header };

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from './nav';

const Header = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const handleToggle = () => {
        setOpen(!open)
    }

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
                <div className="container-base flex justify-between items-center">
                    <div className={`bg-over-menu ${open && 'show-over'}`} onClick={handleToggle}></div>
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img
                                    src="https://gcosoftware.vn/public/image/d381d5.svg"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <Nav open={open} onHandleToggle={handleToggle} />
                    <div className="button-mobile" onClick={handleToggle}>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik0gMyA3IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAzIDkgTCAyNyA5IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyA3IEwgMyA3IHogTSAzIDE0IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAzIDE2IEwgMjcgMTYgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI3IDE0IEwgMyAxNCB6IE0gMyAyMSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyAyMyBMIDI3IDIzIEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyAyMSBMIDMgMjEgeiIvPjwvc3ZnPg=="
                            alt="menu"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export { Header };

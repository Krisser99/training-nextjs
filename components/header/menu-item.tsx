import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IMenu } from '../../constants';
interface Props {
    menu: IMenu;
}

const MenuItem = ({ menu }: Props) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            setIsMobile(width <= 1023);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderChildren = () => {
        const delayAnimation = -300;
        if (menu.children) {
            return (
                <ul>
                    {menu.children.map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                style={{
                                    animationDelay: `${
                                        delayAnimation + 150 * index++
                                    }ms`,
                                }}
                            >
                                <Link href={item.href}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            );
        }
    };

    return (
        <li className={`${isMobile && open && 'actives-li__mobiles'}`}>
            <Link href={menu.href}>
                <a className={router.pathname === menu.href ? 'active' : ''}>
                    {menu.title}
                </a>
            </Link>
            {menu.children && (
                <i
                    className={`flex justify-center items-center ${
                        isMobile && open && 'active'
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon
                        className="h-3 w-3 lg:ml-2 inline-block cursor-pointer"
                        icon={faChevronDown}
                    />
                </i>
            )}
            {renderChildren()}
        </li>
    );
};

export default MenuItem;

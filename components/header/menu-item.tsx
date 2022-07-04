import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IMenu } from '../../constants';
interface Props {
    menu: IMenu;
}

const MenuItem = ({ menu }: Props) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            setIsMobile(width <= 1023);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(isMobile)
    const renderChildren = () => {
        if (menu.children) {
            return (
                <ul>
                    {menu.children.map((item) => {
                        return (
                            <li key={item.id}>
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
        <li>
            <Link href={menu.href}>
                <a>{menu.title}</a>
            </Link>
            {menu.children && (
                <FontAwesomeIcon
                    className="h-3 w-3 ml-2 inline-block cursor-pointer"
                    icon={faChevronDown}
                />
            )}
            {renderChildren()}
        </li>
    );
};

export default MenuItem;

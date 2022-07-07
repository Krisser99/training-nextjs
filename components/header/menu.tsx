import { Btn } from 'components/btn';
import Link from 'next/link';
import { MenuList } from '../../constants';
import MenuItem from './menu-item';

interface Props {
    open: boolean,
    onHandleToggle: () => void
}

const Menu = ({open, onHandleToggle}: Props) => {
    return (
        <div className={`menu-content menu-desktop menu-mobile ${open && 'active-menu-mobile'}`}>
            <div className="header-menu-mobile">
                <Link href="/">
                    <a className="logo-menu__mobile">
                        <img
                            src="https://gcosoftware.vn/public/image/d381d5.svg"
                            alt="logo"
                        />
                    </a>
                </Link>
                <div className="header-menu-mobile__close" onClick={onHandleToggle}>
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0gNC45OTAyMzQ0IDMuOTkwMjM0NCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNC4yOTI5Njg4IDUuNzA3MDMxMiBMIDEwLjU4NTkzOCAxMiBMIDQuMjkyOTY4OCAxOC4yOTI5NjkgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDUuNzA3MDMxMiAxOS43MDcwMzEgTCAxMiAxMy40MTQwNjIgTCAxOC4yOTI5NjkgMTkuNzA3MDMxIEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAxOS43MDcwMzEgMTguMjkyOTY5IEwgMTMuNDE0MDYyIDEyIEwgMTkuNzA3MDMxIDUuNzA3MDMxMiBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMTguOTgwNDY5IDMuOTkwMjM0NCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMTguMjkyOTY5IDQuMjkyOTY4OCBMIDEyIDEwLjU4NTkzOCBMIDUuNzA3MDMxMiA0LjI5Mjk2ODggQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDQuOTkwMjM0NCAzLjk5MDIzNDQgeiIvPjwvc3ZnPg=="
                        alt="close"
                    />
                </div>
            </div>
            <ul>
                {MenuList.map((menu) => (
                    <MenuItem key={menu.id} menu={menu} />
                ))}
            </ul>
            <Btn title="Liên hệ" />
        </div>
    );
};

export default Menu;

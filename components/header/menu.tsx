import { Btn } from 'components/btn';
import Link from 'next/link';
import { MenuList } from '../../constants';
import MenuItem from './menu-item';

const Menu = () => {
    return (
        <div className='menu-content menu-desktop menu-mobile'>
            <ul>
                {MenuList.map((menu) => (
                    <MenuItem key={menu.id} menu={menu} />
                ))}
            </ul>
            <Btn title='Liên hệ' />
        </div>
    );
};

export default Menu;

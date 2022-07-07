import Menu from './menu';

interface Props {
    open: boolean;
    onHandleToggle: () => void;
}

const Nav = ({ open, onHandleToggle }: Props) => {
    return (
        <div className="menu">
            <Menu open={open} onHandleToggle={onHandleToggle} />
        </div>
    );
};

export default Nav;

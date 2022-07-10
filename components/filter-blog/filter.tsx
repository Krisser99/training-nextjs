import { CategoryBlog } from '../category-nav/category-nav';
import { SearchBar } from './search';
import { RegisterForm } from './send';

const Filter = () => {
    return (
        <div className="blog-filter">
            <div className="grid grid-cols-12 gap-x-6 items-center">
                <div className="col-span-12 mb-6 md:col-span-8 md:mb-0">
                    <SearchBar />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export { Filter };

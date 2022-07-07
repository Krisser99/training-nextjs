import axios from 'axios';

export const getPostsData = async () => {
    try {
        const response = await axios.get(
            'https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=12&page=2'
        );
        return response.data
    } catch (error) {
        console.error(error);
    }
};

export const getCategoryData = async () => {
    try {
        const response = await axios.get(
            'https://api.gcosoftware.vn/wp-json/wp/v2/posts?lang=vi&per_page=12&page=1&categories=36'
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

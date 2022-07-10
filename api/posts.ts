import axios from 'axios';

export const getPostsData = async (page: number) => {
    try {
        const response = await axios.get(
            `https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=12&page=${page}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(
            'https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi'
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPostDetail = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPostsCategory = async (id: number) => {
    try {
        const response = await axios.get(
            `https://api.gcosoftware.vn/wp-json/wp/v2/posts?lang=vi&per_page=12&page=1&categories=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const getPostsSearch = async (key: string | undefined) => {
    try {
        const response = await axios.get(
            `https://api.gcosoftware.vn/wp-json/wp/v2/posts?lang=vi&per_page=12&page=1&search=${key}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

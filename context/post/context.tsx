import { createContext, ReactNode, useContext, useState } from 'react';

interface Props {
    children: ReactNode;
}

const PostContext = createContext<any>({});

export function AppWrapper({ children }: Props) {
    const [dataSearch, setDataSearch] = useState<any[] | undefined>();

    const sharedState = {
        dataSearch,
        setDataSearch,
    };

    return (
        <PostContext.Provider value={sharedState}>
            {children}
        </PostContext.Provider>
    );
}

export function usePostContext() {
    return useContext(PostContext);
}

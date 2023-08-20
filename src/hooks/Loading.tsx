import { useState } from 'react';

export const LoadingScroll = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return { isLoading, setIsLoading };
};

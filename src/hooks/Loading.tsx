import { useState } from 'react';

export const LoadingScroll = () => {
    const [isLoading, setIsLoading] = useState(false);

    return { isLoading, setIsLoading };
};

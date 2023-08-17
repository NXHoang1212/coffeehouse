
import { useState } from 'react';

export function ActiveTab(initialTab: string) {
    const [activeTab, setActiveTab] = useState<string>(initialTab);

    const handleActiveTab = (tabname: string) => {
        setActiveTab(tabname);
    };

    return { activeTab, handleActiveTab };
}

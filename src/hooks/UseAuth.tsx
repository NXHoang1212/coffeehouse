//use auth hook là quản lý trạng thái đăng nhập của người dùng

import { useState } from 'react';

//đây là một custom hook nên phải bắt đầu bằng từ use và phải được viết trong một function component
export const useAuth = () => {
    const [LoggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    //trả về một object chứa các giá trị và hàm cần thiết
    return { LoggedIn, login, logout };
};

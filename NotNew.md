<!-- 
  dùng let để gán lại giá trị cho biến được khai báo trước đó
  còn nếu dùng const thì không thể gán lại giá trị cho biến được khai báo trước đó 
 -->


<!-- 
 //text là giá trị của field ví dụ là name, holder, email, ...

//fieldName là tên của field ví dụ là name, holder, email, ...

//đây là một object chứa các setter của các field có thể thay đổi ví dụ là {name: setName, holder: setHolder, ...}
//Record là một kiểu dữ liệu của Typescript, nó có thể hiểu là một object với key là string và value là React.Dispatch<React.SetStateAction<string>>
//React.Dispatch<React.SetStateAction<string>> là một kiểu dữ liệu của React, nó có thể hiểu là một hàm có thể thay đổi giá trị của state
//ví dụ như setName là một hàm có thể thay đổi giá trị của state name
//vì vậy fieldSetters là một object chứa các hàm có thể thay đổi giá trị của các state

//setIsAnyFieldEmpty là một hàm có thể thay đổi giá trị của state isAnyFieldEmpty (được định nghĩa ở trên là useState<boolean>(true))
//tại sao lại có hàm này? vì khi một field thay đổi giá trị thì chúng ta cần phải kiểm tra xem có field nào đang rỗng hay không
//ví dụ như khi field name thay đổi giá trị thì chúng ta cần phải kiểm tra xem field holder có rỗng hay không
//vì vậy chúng ta cần phải thay đổi giá trị của state isAnyFieldEmpty
//tại sao lại dùng react dispatch? vì khi chúng ta thay đổi giá trị của state thì chúng ta cần phải gọi hàm setIsAnyFieldEmpty(true)
//nhưng hàm setIsAnyFieldEmpty lại không có sẵn trong MonitorChangeInput, nó chỉ có sẵn trong component Information
//vì vậy chúng ta cần phải truyền hàm setIsAnyFieldEmpty vào MonitorChangeInput thông qua props
//nhưng khi chúng ta truyền hàm setIsAnyFieldEmpty vào MonitorChangeInput thông qua props thì chúng ta cần phải truyền nó từ component Information
//vì vậy chúng ta cần phải truyền nó từ component Information thông qua props

import React from 'react';

interface MonitorInputProps {
    text: string;

    fieldName: string;
    fieldSetters: Record<string, React.Dispatch<React.SetStateAction<string>>>;
    setIsAnyFieldEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MonitorChangeInput = (Props: MonitorInputProps) => {
    const { text, fieldName, fieldSetters, setIsAnyFieldEmpty } = Props;
    const fieldSetter = fieldSetters[fieldName];
    if (fieldSetter) {
        fieldSetter(text);
    }
    setIsAnyFieldEmpty(true);
};
 -->

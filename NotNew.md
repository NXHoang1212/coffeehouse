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



<!-- 
Ở trong Redux Tolkit RTK Query là một dạng mới của Thằng Redux được dùng để clear code và dễ dàng      trong việc viết code
    Ở trong Redux Tolkit RTK Query có 3 loại query là Query, Mutation và QueryCache
    Query là một loại query được dùng để lấy dữ liệu từ server
    Mutation là một loại query được dùng để thay đổi dữ liệu trên server
    QueryCache là một loại query được dùng để lưu trữ dữ liệu lấy được từ server
    Ở trong Redux Tolkit RTK Query có 3 loại query là Query, Mutation và QueryCache
    Query là một loại query được dùng để lấy dữ liệu từ server
    Mutation là một loại query được dùng để thay đổi dữ liệu trên server
    QueryCache là một loại query được dùng để lưu trữ dữ liệu lấy được từ server
-->

<!--
 Ở trong RTK Query Có kiểu dữ liệu Omit là một kiểu dữ liệu được dùng để bỏ đi một số key trong một   object
    Ví dụ như Omit<{name: string, age: number}, 'name'> là một kiểu dữ liệu được dùng để bỏ đi key name trong object {name: string, age: number}
    Còn nếu dùng Omit<{name: string, age: number}, 'age'> thì sẽ bỏ đi key age trong object {name: string, age: number}
    Và nếu dùng Omit<{name: string, age: number}, 'name' | 'age'> thì sẽ bỏ đi key name và key age trong object {name: string, age: number}
    Còn dùng Partial thì sẽ bỏ đi tất cả các key trong object {name: string, age: number}
    ví dụ như Partial<{name: string, age: number}> sẽ bỏ đi tất cả các key trong object {name: string, age: number}
    Và Partial<{name: string, age: number}> sẽ trả về một kiểu dữ liệu là {name?: string, age?: number}
    Dùng Pick thì sẽ lấy ra một số key trong object {name: string, age: number}
    Ví dụ như Pick<{name: string, age: number}, 'name'> sẽ lấy ra key name trong object {name: string, age: number}
    Và Pick<{name: string, age: number}, 'age'> sẽ lấy ra key age trong object {name: string, age: number}
-->

<!-- 
Còn providesTags trong RTK Query được dùng để callback mỗi khi một query được gọi và mong muốn là chạy
sẽ trả về return  một mảng chứa các tag và phải thêm as const để báo rằng cho type này là nó sẽ readonly, không thể mutate được 
Còn invalidateTags trong RTK Query được dùng để callback mỗi khi một query được gọi và mong muốn là chạy lại query đó sẽ dựa vào các tag được truyền vào và thực thi lại query đó
 -->
/*"react-native-vnpay-merchant": "file:react-native-vnpay-merchant",/*


<!-- onPress={() => {
                                        // mở sdk
                                        eventEmitter.addListener('PaymentBack', (e) => {
                                            console.log('Sdk back!')
                                            if (e) {
                                                console.log("e.resultCode = " + e.resultCode);
                                                switch (e.resultCode) {
                                                    case "00":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "01":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "02":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "03":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "04":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "05":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "06":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "07":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);
                                                        break;
                                                    case "08":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);

                                                        break;
                                                    case "09":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);

                                                        break;
                                                    case "10":
                                                        console.log("e.resultCode = " + e.resultCode);
                                                        console.log("e.data = " + e.data);
                                                        console.log("e.message = " + e.message);

                                                }
                                                // khi tắt sdk
                                                eventEmitter.removeAllListeners('PaymentBack')
                                            }
                                        })

                                        // VnpayMerchant.show({
                                        //   iconBackName: 'ic_back',
                                        //   paymentUrl: 'https://sandbox.vnpayment.vn/testsdk',
                                        //   scheme: 'sampleapp',
                                        //   tmn_code: 'FAHASA03',
                                        // })
                                        // VnpayMerchant.show({
                                        //   iconBackName: 'ic_back',
                                        //   paymentUrl: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=15000000&vnp_Command=pay&vnp_CreateDate=20210225130220&vnp_CurrCode=VND&vnp_Locale=vn&vnp_OrderInfo=TEST%20BAEMIN%20ORDER&vnp_TmnCode=BAEMIN01&vnp_TxnRef=130220&vnp_Version=2.0.0&vnp_SecureHashType=SHA256&vnp_SecureHash=c7d9dedc25b304c961bd9a5c6ae21cb604700193ecb6b67ed871c1d084a462f4',
                                        //   scheme: 'swing',
                                        //   tmn_code: 'BAEMIN01',
                                        //   title: 'payment'
                                        // })
                                        // VnpayMerchant.show({
                                        //   iconBackName: 'ic_back',
                                        //   // paymentUrl: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=15000000&vnp_BankCode=MBAPP&vnp_Command=pay&vnp_CreateDate=20210225130220&vnp_CurrCode=VND&vnp_Locale=vn&vnp_OrderInfo=TEST%20BAEMIN%20ORDER&vnp_TmnCode=BAEMIN01&vnp_TxnRef=130220&vnp_Version=2.0.0&vnp_SecureHashType=SHA256&vnp_SecureHash=129664d02f0852765c8ade75b3fcca644bd0bfb26ceeb64b576e672c17f2cba1',
                                        //   paymentUrl: 'https://sandbox.vnpayment.vn/testsdk/',
                                        //   scheme: 'swing',
                                        //   tmn_code: 'BAEMIN01',
                                        //   title: 'tittlelelelel',
                                        //   beginColor: '#ffffff',
                                        //   endColor: '#ffffff', //6 ký tự.
                                        //   titleColor: '#000000'
                                        // })

                                        // VnpayMerchant.show({
                                        //   isSandbox: true,
                                        //   paymentUrl: 'https://sandbox.vnpayment.vn/testsdk',
                                        //   tmn_code: 'FAHASA03',
                                        //   backAlert: 'Bạn có chắc chắn trở lại ko?',
                                        //   title: 'VNPAY',
                                        //   iconBackName: 'ic_close',
                                        //   beginColor: 'ffffff',
                                        //   endColor: 'ffffff',
                                        //   titleColor: '000000',
                                        //   scheme: 'swing'
                                        // });

                                        VnpayMerchant.show({
                                            "isSandbox": true,
                                            "scheme": "vn.abahaglobal",
                                            "title": "Thanh toán VNPAY",
                                            "titleColor": "#333333",
                                            "beginColor": "#ffffff",
                                            "endColor": "#ffffff",
                                            "iconBackName": "close",
                                            "tmn_code": "GOGREEN1",
                                            "paymentUrl": "http://testproduct2851.abaha.click/payment/order/916?token=eyJhcHBfa2V5IjoicGF5bWVudHNlcnZpY2VrZXkiLCJkZWxpdmVyeV91bml0Ijoidm5wYXkiLCJ0eG5faWQiOiI5MTYifQ=="
                                          })
                                          setText('Sdk opened')
                                    }} -->
import { createContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';

interface PropsApplyPromoContext {
  promo: string;
  setPromo: (promo: string) => void;
}

export const ApplyPromoContext = createContext<PropsApplyPromoContext>({
  promo: '',
  setPromo: () => { },
});

//React.ReactNode là một kiểu dữ liệu đặc biệt trong React,
// nó có thể nhận bất kỳ giá trị nào trong React như: một component, một element, một string, một number, một array, một object, một boolean, một null hoặc một undefined.
type ApplyPromoContextProviderProps = {
  children: ReactNode;
};

export const ApplyPromoContextProvider = ({
  children,
}: ApplyPromoContextProviderProps) => {
  const [promo, setPromo] = useState<string>('');

  return (
    <ApplyPromoContext.Provider value={{ promo, setPromo }}>
      {children}
    </ApplyPromoContext.Provider>
  );
};

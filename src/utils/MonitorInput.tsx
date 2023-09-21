

export const MonitorChangeInput = (
    fieldName: string,
    newValue: string,
    setName: (value: string) => void,
    setHolder: (value: string) => void,
    setEmail: (value: string) => void,
    setGender: (value: string) => void,
    setIsAnyFieldChanged: (value: boolean) => void,
) => {
    switch (fieldName) {
        case 'name':
            setName(newValue);
            break;
        case 'holder':
            setHolder(newValue);
            break;
        case 'email':
            setEmail(newValue);
            break;
        case 'gender':
            setGender(newValue);
            break;
        default:
            break;
    }
    setIsAnyFieldChanged(false);
};



export const MonitorAddressInput = (
    fieldName: string,
    newValue: string,
    setName: (value: string) => void,
    address: string,
    setOther: (value: string) => void,
    setGate: (value: string) => void,
    setNote: (value: string) => void,
    setUsername: (value: string) => void,
    setPhone: (value: string) => void,
    setIsAnyFieldChanged: (value: boolean) => void,
) => {
    switch (fieldName) {
        case 'name':
            setName(newValue);
            break;
        case 'address':
            address = newValue;
            break;
        case 'other':
            setOther(newValue);
            break;
        case 'gate':
            setGate(newValue);
            break;
        case 'note':
            setNote(newValue);
            break;
        case 'username':
            setUsername(newValue);
            break;
        case 'phone':
            setPhone(newValue);
            break;
        default:
            break;
    }
    setIsAnyFieldChanged(false);
};
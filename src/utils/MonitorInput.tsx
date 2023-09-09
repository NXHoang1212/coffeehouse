

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
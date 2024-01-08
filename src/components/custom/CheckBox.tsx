import { View, TouchableOpacity, Text, ImageSourcePropType } from 'react-native';
import { Image } from 'react-native';
import { COLOR } from '../../constant/Color';

interface CustomCheckboxProps {
    checked: boolean;
    onPress: () => void;
    title?: string;
    disabled?: boolean;
}

const CheckBox: React.FC<CustomCheckboxProps> = ({ checked, onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style=
                {{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 20,
                    marginBottom: 10,
                    top: 5
                }}
            >
                {checked && <Image
                    source={require('../../assets/images/checks.png')}
                    style={{ width: 20, height: 20, tintColor: COLOR.ORANGE }}
                />}
            </View>
        </TouchableOpacity>
    );
};

export default CheckBox


const CheckBoxBorder: React.FC<CustomCheckboxProps> = ({ checked, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style=
                {{
                    width: 25,
                    height: 25,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 13,
                    marginBottom: 10,
                }}
            >
                {checked && <View
                    style={{ width: 15, height: 15, borderRadius: 15, backgroundColor: COLOR.ORANGEBOLD }}
                />}
            </View>
        </TouchableOpacity>
    );
};

export { CheckBoxBorder }

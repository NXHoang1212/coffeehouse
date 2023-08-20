import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { useGoBack } from '../../utils/GoBack';
import StylePlayMusic from '../../styles/code/StylePlayMusic';
import { Icon } from '../../constant/Icon';

const PlayMusic = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  return (
    <View style={StylePlayMusic.container}>
      <View style={StylePlayMusic.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StylePlayMusic.iconBack} />
        </TouchableOpacity>
        <Text style={StylePlayMusic.textHeader}>Nhạc đang nghe</Text>
      </View>
    </View>
  )
}

export default PlayMusic
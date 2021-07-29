import React, { ReactChild } from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

type Props = {
    header: string;
    title: string | ReactChild;
}

export function InfoRow({header, title}: Props){
  return (
    <View style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
}
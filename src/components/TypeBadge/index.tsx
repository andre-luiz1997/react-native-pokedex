import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
    key: number,
    title: string
}

export default function TypeBadge({key, title}: Props) {
    return (
        <View key={key}>
            <Text style={styles.badge}>{title}</Text>
        </View>
    )
}

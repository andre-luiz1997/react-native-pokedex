import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
    title: string
}

export default function TypeBadge({title}: Props) {
    return (
        <View>
            <Text style={styles.badge}>{title}</Text>
        </View>
    )
}

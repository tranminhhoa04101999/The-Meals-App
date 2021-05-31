import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGrid = (props) => {
    let Touchcoms = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchcoms = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <Touchcoms style={{flex:1}} onPress={props.onSelected}  >
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
                </View>
            </Touchcoms>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: 'hidden',
        borderRadius: 15,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    container: {
        flex: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 15,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        textAlign: 'center',
    }
});

export default CategoryGrid;
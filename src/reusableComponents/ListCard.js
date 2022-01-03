import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class ListCard extends Component {
    render() {
        const { imageStyle, cardStyle,textViewStyle } = styles;
        return(
            <View style={cardStyle}>
                <Image style={imageStyle} source={require('../../base.png')}/>
                <View style={textViewStyle}>
                    <Text>  some text</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    imageStyle:{
        height: 300,
        width: '90%',
    },
    cardStyle:{
        backgroundColor: '#d3d3d3',
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textViewStyle: {
        heigth: 50,
        justifyContent: 'center',
    },
});
export default ListCard;

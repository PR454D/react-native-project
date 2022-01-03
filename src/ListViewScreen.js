import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ListViewScreen extends Component {
    render() {
        const { view,header } = styles;
        return (
            <View style={view}>
                <View style={header}>
                    <Text style={{fontSize: '20', fontWeight: 'bold'}}>Image Gallery</Text> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor: 'white',
        fontSize: '6em',
    },
    header:{
        backgroundColor: '#d3d3d3',
        height: 72,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ListViewScreen;

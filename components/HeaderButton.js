import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../constants/Colors';

const customHeaderButton = props => {
    return (<HeaderButton {...props} IconComponent={Icon} iconSize={20}  color={'red'}/>);
};

export default customHeaderButton;

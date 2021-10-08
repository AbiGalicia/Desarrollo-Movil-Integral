import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SafeAreaViewBase, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StoreInfo } from '../componentStore/StoreInfo';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const BarSearch = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const StoreList = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[4]};
`;

export default function StorePantalla() {
    return (
        <SafeArea>
      <BarSearch>
        <Searchbar/>
      </BarSearch>
      <StoreList>
        <StoreInfo/>
      </StoreList>
    </SafeArea>
    )
}

const styles = StyleSheet.create({
});

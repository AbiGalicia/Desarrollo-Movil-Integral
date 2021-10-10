import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SafeAreaViewBase, StatusBar, FlatList } from 'react-native';
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


export default function StorePantalla() {
    return (
        <SafeArea>
      <BarSearch>
        <Searchbar/>
      </BarSearch>
      <FlatList
        data={[{ name: 1}, {name: 2}, {name: 3}]}
        renderItem={() => <StoreInfo/>}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{paddingTop: 8, paddingLeft: 16, paddingRight: 16, paddingBottom: 16}}
      />
    </SafeArea>
    )
}

const styles = StyleSheet.create({
});

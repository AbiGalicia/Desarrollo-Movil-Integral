import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const StoreCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StoreCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[4]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.text.primary}
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]}
`;

export const StoreInfo = ({ store = {} }) => {
    const {
        name = "Starbucks",
        icon,
        photos = ["https://www.logoworks.com/wp-content/uploads/2017/06/xUntitled-2-640x360-1.png.pagespeed.ic.hTlIPzbhv7.webp"],
        address = "Calz. Adolfo López Mateos No. 3800",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarity,
    } = store;
    return (
        <StoreCard elevation={5}>
            <StoreCardCover
                key={name}
                source={{ uri: photos[0] }}
            />
            <Info>
            <Title>{name}</Title>
            <Address>{address}</Address>
            </Info>
        </StoreCard>
    )
}

const styles = StyleSheet.create({
});
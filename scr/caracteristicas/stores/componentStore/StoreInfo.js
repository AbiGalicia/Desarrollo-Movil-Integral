import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import estrella from '../../../../assets/estrella';
import closed from '../../../../assets/closed';

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
    padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const Sectionn = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Icon = styled(Image)`
    width: 25px;
    height: 25px;
    margin-left: ${(props) => props.theme.space[3]};
`;

const TemporarilyClosed = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.text.error};
    padding-right: ${(props) => props.theme.space[6]};
`;



export const StoreInfo = ({ store = {} }) => {
    const {
        name = "Starbucks",
        icon = "https://img.icons8.com/material-two-tone/384/000000/espresso-cup--v2.png",
        photos = ["https://www.logoworks.com/wp-content/uploads/2017/06/xUntitled-2-640x360-1.png.pagespeed.ic.hTlIPzbhv7.webp"],
        address = "Calz. Adolfo López Mateos No. 3800",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarity = true,
    } = store;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    console.log(ratingArray);
    return (
        <StoreCard elevation={5}>
            <StoreCardCover
                key={name}
                source={{ uri: photos[0] }}
            />
            <Info>
                <Title>{name}</Title>
                <Sectionn> 
                {/* componente estilizado */}
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={estrella} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarity && //ocupe esa condicion para los svgs
                            <TemporarilyClosed>
                                Temporaly closed
                            </TemporarilyClosed>
                        }
                        {isOpenNow && <SvgXml xml={closed} width={30} height={30} />}
                        {/* {isOpenNow && <Icon source={{uri: icon}}/>} */}
                        
                    </SectionEnd>
                </Sectionn>
                <Address>{address}</Address>
            </Info>
        </StoreCard>
    )
}

// const styles = StyleSheet.create({
// });
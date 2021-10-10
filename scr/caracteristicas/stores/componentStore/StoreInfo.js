import React from 'react'
import { StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg';
import estrella from '../../../../assets/estrella';
import closed from '../../../../assets/closed';
import {StoreCard,
        StoreCardCover,
        Title,
        Address,
        Info,
        Rating,
        Sectionn,
        SectionEnd,
        Icon,
        TemporarilyClosed}from "./StoreInfoStyles";


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
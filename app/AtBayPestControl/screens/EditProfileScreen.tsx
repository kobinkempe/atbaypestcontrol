import * as React from 'react';
import {Card, Icon} from 'react-native-elements';
import {
    ScrollView,
    useColorScheme,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text,
    View, Pressable
} from 'react-native';
import {getStyle} from '../assets/Stylesheets/Styles'
import Email from '../components/RenderEmail'
import Payment from '../components/RenderPayment'
import ShippingLocations from '../components/RenderShippingLocations';
import Separator from '../components/Separator'
import {PLAN} from "../assets/Data/Data";
import { useNavigation } from '@react-navigation/native';
import PlanTabScreen from "./PlanTabScreen";
import LoginScreen from "./LoginScreen";
import {getUser, gimmekey} from "../assets/Data/Data";
import {deleteProfile, submit} from "../assets/text/text";
import {changePlan, LOG_OUT, logOut} from "../redux/action";
import {useDispatch} from "react-redux";
import images from "../assets/images";
import {useState} from "react";
import Editable from "../components/Editable";

export default function EditProfileScreen() {
    const scheme = useColorScheme();
    let styles = getStyle(scheme);
    const navigation = useNavigation();

    const user = getUser();
    let keyGiver = 0;


    let name = <Editable
        type={"Username"}
        textIn={user.getUserName()}
        editText={user.changeUserName}
    />;
    let pword = <Editable textIn={user.getPassword()} editText={user.changePassword} type={"Password"}/>;
    let AddyArray = user.getAddresses().map(function (addy, index) {
        return (
            <View style={{justifyContent: 'center'}}>
                <Editable key={gimmekey()} textIn={addy.address} editText={addy.updateAddress} type={"Address (Line 1)"}/>
                <Editable key={gimmekey()} textIn={addy.address2} editText={addy.updateAddressLine2} type={"Address (Line 2)"}/>
                <Editable key={gimmekey()} textIn={addy.city} editText={addy.updateCity} type={"City"}/>
                <Editable key={gimmekey()} textIn={addy.state} editText={addy.updateState} type={"State"}/>
                <Editable key={gimmekey()} textIn={addy.zip} editText={addy.updateZip} type={"Zip"}/>
            </View>
        )
    });
    let EmailArray = user.getEmails().map(function (email, index) {
        return <Editable
            key={gimmekey()}
            type={"Email"}
            textIn={email.getEmail()}
            editText={email.updateEmail}
        />
    });
    let endButton = <View style={styles.deleteProfile}>
        <Pressable onPress={() => {navigation.navigate("ProfileTabScreen",
            {changed: true}
            )}}>
            <Text style ={[styles.Text, {color: 'blue', fontWeight:"bold"}]}>
                {submit()}
            </Text>
        </Pressable>
    </View>


    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Card containerStyle={[styles.cardContainer]}>
                    {name}
                    {pword}
                    {AddyArray}
                    {EmailArray}
                    {endButton}
                </Card>
            </View>
        </ScrollView>

    )
};

import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Styles } from '../Constants/Styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

export default function Chat({navigation}) {
    const [prompt,setPrompt] = useState("")
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.rowView}>
          <View>
          <Image source={require("../assets/images/icon.png")} style={Styles.iconImage}/>
          </View>
          <View style={Styles.rowButtons}>
            <TouchableOpacity style={Styles.iconButton} onPress={() =>{
              navigation.navigate("History")
            }}>
              <MaterialIcons name="history" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconButton}  onPress={() =>{
              navigation.navigate("Settings")
            }}>
              <MaterialIcons name="settings" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.chatArea}></View>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.promptInput} 
           multiline={true} 
           textAlignVertical='top'
           placeholder='Say something...'
           value={prompt} 
           onChangeText={setPrompt}
          />
          <TouchableOpacity style={[Styles.iconButton,{borderWidth:0}]}>
            <MaterialIcons name='send' size={28}/>
          </TouchableOpacity>
        </View>
        <StatusBar style='auto'/>
      </View>
    );
}
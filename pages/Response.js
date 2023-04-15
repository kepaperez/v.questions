import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Response = ({ question,setQIndex ,setScore}) => {
 
    
    return (
        <View style={styles.questionCtn}>
            <Text style={styles.questionText}>{question.question}</Text>
            <Text style={styles.answersBtn}>{question.correctAnswer}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    correct:{
        backgroundColor:'green'
    },
    wrong:{
        backgroundColor:'red'
    },
    answersBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        fontSize:16,
        color:'white',
    },
    mainCtn: {
        padding: 15,
        backgroundColor: '#303030'
    },
    questionCtn: {
        marginVertical: 15,
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',

    },
});
export default Response
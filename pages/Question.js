import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Question = ({ question,setQIndex ,setScore}) => {
 
    const onPress = (a,index)=>{
      if(question.correctAnswer === a){
        setScore(prevCount => prevCount + 1)
      }
      setQIndex(prevCount => prevCount + 1)
    }
    
    return (
        <View style={styles.questionCtn}>
            <Text style={styles.questionText}>{question.question}</Text>
            {
                question.answers.map((a,index) => (
                    <TouchableOpacity key={a} style={[
                        styles.answersBtn,
                     
                      
                    ]} 
                    onPress={() =>onPress(a,index)}
                    >
                        <Text style={styles.answerText}>{a}</Text>
                    </TouchableOpacity>

                ))
            }
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
        backgroundColor: '#007af5',
        marginVertical: 10,
        borderRadius: 10,
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
        marginBottom: 20,
        color: 'white',

    },

    selectedAnswerButton: {
        backgroundColor: '#1E90FF',
    },
    answerText: {
        fontSize: 16,
        color: 'white',
    },
});
export default Question
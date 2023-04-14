import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Question = ({ question }) => {
    
    return (
        <View style={styles.questionCtn}>
            <Text style={styles.questionText}>{question.question}</Text>
            {
                question.answers.map((a) => (
                    <TouchableOpacity style={[
                        styles.answersBtn,
                      question ? styles.correct : styles.wrong
                      
                    ]} >
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
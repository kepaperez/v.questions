import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useState, useEffect } from "react";


const Home = () => {
    const [questions, setQuestions] = useState([]);

    function decodeHtmlEntities(text) {
        const entities = [
            ['amp', '&'],
            ['apos', '\''],
            ['lt', '<'],
            ['gt', '>'],
            ['quot', '"'],
            ['#039', '\''],
        ];

        return text.replace(/&([^&;]+);/g, (match, entity) => {
            const found = entities.find(([name]) => name === entity);
            return found ? found[1] : match;
        });
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then((response) => response.json())
            .then((data) => {
                const triviaQuestions = data.results.map((triviaQuestion) => ({
                    question: decodeHtmlEntities(triviaQuestion.question),
                    answers: [
                        ...triviaQuestion.incorrect_answers,
                        triviaQuestion.correct_answer,
                    ].sort(),
                    correctAnswer: triviaQuestion.correct_answer,
                }));
                setQuestions(triviaQuestions);
            });
    }, []);






    return (
        <View style={styles.mainCtn}>
            <ScrollView>
                {questions.map((q) => (
                    <View style={styles.questionCtn}>
                        <Text style={styles.questionText}>{q.question}</Text>
                        {
                            q.answers.map((a) => (
                                <TouchableOpacity style={styles.answersBtn}>
                                    <Text style={styles.answerText}>{a}</Text>
                                </TouchableOpacity>

                            ))
                        }
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
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
export default Home

import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useState, useEffect } from "react";
import Question from "./Question";
import Response from "./Response";
const Home = () => {
    const [questions, setQuestions] = useState([]);
    const [qIndex, setQIndex] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [score, setScore] = useState(0)

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
    const restart = () => {
        setScore(0)
        setQIndex(0)
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=18')
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
                console.log(triviaQuestions)
            });
    }, []);






    return (

        <View style={styles.mainCtn}>

            {qIndex < questions.length ?
                <>
                    <View style={styles.dataCtn}>
                        <Text style={styles.indexText}>
                            QUESTION: {
                                qIndex != 5 ? qIndex + 1 : qIndex}/5
                        </Text>

                    </View>
                    <Question question={questions[qIndex]} setQIndex={setQIndex} setSelectedAnswer={setSelectedAnswer} setScore={setScore} />
                </>

                :
                <View>
                    <Text style={styles.indexText}>
                        YOUR SCORE:{score}/5
                    </Text>
                    <ScrollView style={styles.scroll}>
                        {questions.map((q, index) => (
                            <Response key={index} selectedAnswer={selectedAnswer[index]} question={q} />
                        ))
                        }
                    </ScrollView>

                  
                    <TouchableOpacity style={styles.rsBtn} onPress={restart} >
                        <Text style={styles.rsText}>RESTART</Text>
                    </TouchableOpacity>
                </View>


            }


            {/* {questions.map((q, index) => (
                    <Question question={q} />
                ))
                }*/}
        </View >

    );
}
const styles = StyleSheet.create({
    scroll:{
        marginBottom:100,
    },
    answersBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#007af5',
        marginVertical: 10,
        borderRadius: 10,
    },
    mainCtn: {
        height: '100%',
        padding: 15,
        backgroundColor: '#303030',
        textAlign: 'center',
    },
    questionCtn: {
        marginVertical: 15,
    },

    indexText: {
        padding: 10,
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
    dataCtn: {
        paddingVertical: 25,
    },
    rsBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#007af5',
        marginVertical: 10,
        borderRadius: 10,

    },
    rsText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});
export default Home

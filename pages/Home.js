import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useState, useEffect } from "react";
import Question from "./Question";

const Home = () => {
    const [questions, setQuestions] = useState([{ "answers": [" Yun-Fat Chow", "Bruce Lee", "Jackie Chan", "Jet Li"], "correctAnswer": "Bruce Lee", "question": "Who starred in the film 1973 movie \"Enter The Dragon\"?" }, { "answers": ["Bashbug", "Heartbleed", "Shellshock", "Stagefright"], "correctAnswer": "Shellshock", "question": "What was the name of the security vulnerability found in Bash in 2014?" }, { "answers": ["American", "British", "German", "Polish"], "correctAnswer": "German", "question": "The creator of the Enigma Cypher and Machine was of what nationality?" }, { "answers": ["Leni", "Lincoln", "Luan", "Luna"], "correctAnswer": "Leni", "question": "Who is the \"dumb blonde\" character in Nickelodeon's \"The Loud House\"?" }, { "answers": ["England", "France", "Portugal", "Spain"], "correctAnswer": "Spain", "question": "Against which country did the Dutch Republic fight the Eighty Years' War?" }]);


    const [selectedAnswer, setSelectedAnswer] = useState([]);

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

    /* useEffect(() => {
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
                 console.log(triviaQuestions)
             });
     }, []);*/


    const pressButton = (question, answers, index) => {
        if (question.correctAnswer === answers) {
            console.log("CORRECT")
            setSelectedAnswer([...selectedAnswer, { index: index, response: "correct" }])
        } else {
            setSelectedAnswer([...selectedAnswer, { index: index, response: "wrong" }])
        }
    }



    return (
        <ScrollView>
            <View style={styles.mainCtn}>
                <View><Text style={styles.answerText}>
                    {JSON.stringify(selectedAnswer)}
                </Text></View>

                {questions.map((q, index) => (
                    <Question question={q} />
                ))
                }
            </View >
        </ScrollView >
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

import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useState, useEffect } from "react";
import Question from "./Question";
import Response from "./Response";
const Home = () => {
    const [questions, setQuestions] = useState([{ "answers": [" Yun-Fat Chow", "Bruce Lee", "Jackie Chan", "Jet Li"], "correctAnswer": "Bruce Lee", "question": "Who starred in the film 1973 movie \"Enter The Dragon\"?" }, { "answers": ["Bashbug", "Heartbleed", "Shellshock", "Stagefright"], "correctAnswer": "Shellshock", "question": "What was the name of the security vulnerability found in Bash in 2014?" }, { "answers": ["American", "British", "German", "Polish"], "correctAnswer": "German", "question": "The creator of the Enigma Cypher and Machine was of what nationality?" }, { "answers": ["Leni", "Lincoln", "Luan", "Luna"], "correctAnswer": "Leni", "question": "Who is the \"dumb blonde\" character in Nickelodeon's \"The Loud House\"?" }, { "answers": ["England", "France", "Portugal", "Spain"], "correctAnswer": "Spain", "question": "Against which country did the Dutch Republic fight the Eighty Years' War?" }]);
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

        <View style={styles.mainCtn}>

            {qIndex < questions.length ?
                <>
                    <View style={styles.dataCtn}>
                        <Text style={styles.indexText}>
                            QUESTION: {
                                qIndex != 5 ? qIndex + 1 : qIndex}/5
                        </Text>

                    </View>
                    <Question question={questions[qIndex]} setQIndex={setQIndex} setScore={setScore} />
                </>

                :
                <View>
                    <Text style={styles.indexText}>
                        YOUR SCORE:{score}/5
                    </Text>
                    {questions.map((q, index) => (
                        <Response key={index} question={q}  />
                    ))
                    }
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
    }
});
export default Home

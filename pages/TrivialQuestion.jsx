import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const TriviaQuestion = ({ question, answers, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  return (
    <View>
      <Text style={styles.questionText}>{question}</Text>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.answerButton,
            selectedAnswer === answer && styles.selectedAnswerButton,
          ]}
          onPress={() => handleAnswerPress(answer)}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  selectedAnswerButton: {
    backgroundColor: '#1E90FF',
  },
  answerText: {
    fontSize: 16,
  },
});

export default TriviaQuestion;

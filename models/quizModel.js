import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    answer: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(answerValue) {
        //         // Ensure the answer is one of the options
        //         return this.options.includes(answerValue);
        //     },
        //     message: props => `${props.value} is not a valid option for the answer!`
        // }
    }
});

export const Quiz = mongoose.model("Quiz", quizSchema);

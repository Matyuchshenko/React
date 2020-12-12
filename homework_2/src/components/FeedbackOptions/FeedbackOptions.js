import PropTypes from 'prop-types';

const FeedbackButton = ({feedback, onLiveFeedback}) => {
    return (
    <button
        type='button'
        data-feedback={feedback}
        onClick={onLiveFeedback}
    >
        {feedback}
        </button>
    )
}

const FeedbackOptions = ({ options, onLiveFeedback }) => {
    return options.map((option) => <FeedbackButton feedback={option} onLiveFeedback={onLiveFeedback/>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLiveFeedback: PropTypes.func.isRequired
}

extends default FeedbackOptions
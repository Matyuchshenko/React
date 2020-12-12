import s from "./App.module.css";

import Section from "./components/section/section/section";
import { FEEDBACK_OPTIONS } from "../data/constans";
import FeedbackOptions from "./components";

class App extends Component() {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelFeedback = ({ target }) => {
    const { feedback } = target.dataset
    this.setState(prevState => ({ [feedback]: prevState[feedback]+1}))
  };

  render() {
    return <div className={s.App}>
      <Section title='Please leave feedback'>
        <FeedbackOptions options = {FEEDBACK_OPTIONS} onLiveFeedback></FeedbackOptions>
      </Section>
    </div>;
  }
}

extends default App
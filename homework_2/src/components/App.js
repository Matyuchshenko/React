import s from "./App.module.css";

import Section from "./components/section/section/section";
// import FeedbackOptions from "./components";

class App extends Component() {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return <div className={s.App}>
      <Section title='Please leave feedback'>
        <FeedbackOptions></FeedbackOptions>
      </Section>
    </div>;
  }
}

extends default App
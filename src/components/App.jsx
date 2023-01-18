import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

import { Title } from "components/Title/Title"


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onAddClick = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
  }


  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good
  }

  countPositiveFeedbackPercentage = () => {
    const sum = Number(this.state.bad) + Number(this.state.neutral) + Number(this.state.good)
    return Math.trunc(Number(this.state.good) * 100 / sum)
  }

  isCount = () => {
    if (this.state.bad + this.state.neutral + this.state.good === 0) return false
      else return true
  }

 
  render() {
    return (
      <div>
        <Title title="Please leave feedback" />
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onAddClick} />
        <Title title="Statisticks" />
        {this.isCount() && <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        }
        {!this.isCount() && <Notification message="There is no feedback"/>}
        
      </div>
    )
  }
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

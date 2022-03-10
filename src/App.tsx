import { useState } from "react";
import { Tweet } from "./Components/Tweet"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button>Adicionar tweet</button>
    </div>
  );
}

export default App

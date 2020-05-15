import React from "react"
import Layout from "../components/layout"
import TextBeingTyped from "../components/textBeingTyped"
import scrollTo from "gatsby-plugin-smoothscroll"

const Text = () => {
  const thingsAboutMe = [
    {
      string:
        "Mountains AND Beaches. \n Delhi AND Mumbai. \n Federer AND Nadal. \n Rafi sahib AND Kishor da. \n I refuse to pick one, see if you can put me at gunpoint!",
      emoji: "🔪",
    },
    { string: "I watch at least one film a day. No kidding.", emoji: "🎥" },
    {
      string:
        "I went to a boarding school at the age of seven and have been independent ever since.",
      emoji: "💪",
    },
    {
      string:
        "I love the winter sun, and sunrise, and sunsets, and stargazing. You get the idea.",
      emoji: "🌌🌅",
    },
    { string: "Books over kindle.", emoji: "📚" },
    {
      string:
        "I coined the term ‘Unphotogenic’. I haven’t used it much ever since I got a beard though.",
      emoji: "✨🧔🏾✨",
    },
    {
      string: "I believe RCB is going to lift the trophy someday.",
      emoji: "🏆",
    },
    { string: "I am not a gym freak.", emoji: "🏸🏏" },
    { string: "Texting Sucks.", emoji: "📴" },
    {
      string: "I have been told that I am ridiculously good at cuddling.",
      emoji: "🤗",
    },
    { string: "Favorite human quality: Warmth", emoji: "😊" },
    { string: "I was the lyricist at my college band.", emoji: "🖋" },
    { string: "House parties > Clubbing.", emoji: "🎉" },
    { string: "I DO NOT skip Ads.", emoji: "💸" },
    {
      string: "I am probably going to use your money to travel.",
      emoji: "✈️🗺",
    },
  ]
  const handleClick = () => {
    scrollTo("#deepest-secrets-list")
  }
  return (
    <Layout>
      <div className="container">
        <div id="deepest-secrets-show">
          <TextBeingTyped texts={thingsAboutMe} />
          <div className="scroll-down-element">
            <button onClick={handleClick}>
              <i className="fas fa-caret-down fa-3x"></i>{" "}
            </button>
          </div>
        </div>
        <div id="deepest-secrets-list">
          {thingsAboutMe.map((secret, index) => (
            <p key={`secret-${index}`}>
              {secret.string} {secret.emoji}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Text

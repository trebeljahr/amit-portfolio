import React, { useState } from "react"
import Layout from "../components/layout"

const Text = () => {
  const thingsAboutMe = [
    `I watch at least one film a day. No kidding.`,
    `I went to a boarding school at the age of seven and have been independent ever since.`,
    `Books over kindle.`,
    `I love the winter sun, and sunrise, and sunsets, and stargazing. You get the idea.`,
    `I coined the term ‘Unphotogenic’. I haven’t used it much ever since I got a beard though.`,
    `Mountains AND Beaches.
        Delhi AND Mumbai.
        Federer AND Nadal.
        Rafi sahib AND Kishor da.`,
    `I refuse to pick one, see if you can put me at gunpoint.`,
    `I believe RCB is going to lift the trophy someday.`,
    `I am not a gym freak. `,
    `Texting Sucks.`,
    `I have been told that I am ridiculously good at cuddling.`,
    `Favorite human quality : Warmth`,
    `I was the lyricist at my college band. `,
    `House parties > Clubbing`,
    `I DO NOT skip Ads.`,
    `I am probably going to use your money to travel 🙃`,
  ]
  return (
    <Layout>
      <div className="container">
        <h1>KNOW YOUR NEXT COPYWRITER </h1>
        <h2>Jack of all, master of Copywriting.</h2>
        <ol>
          {thingsAboutMe.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default Text

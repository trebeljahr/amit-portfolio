import React, { useEffect, useState, useRef } from "react"

interface TextBeingTypedProps {
  texts: { string: string; emoji: string }[]
  speed?: number
  waiting?: number
}

const TextBeingTyped = ({
  texts,
  speed = 100,
  waiting = 2000,
}: TextBeingTypedProps) => {
  const [timer, setTimer] = useState(0)
  const [wait, setWait] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(
    Math.floor(Math.random() * texts.length)
  )
  const [index, setIndex] = useState(0)

  const count = () => {
    setCharacterIndex(old => old + (old === texts[index].string.length ? 2 : 1))
  }

  const changeToNextText = () => {
    setIndex(old => (old + 1 >= texts.length ? 0 : old + 1))
    setCharacterIndex(0)
    setTimer(() => {
      clearInterval(timer)
      return setInterval(count, speed)
    })
  }

  useEffect(() => {
    if (characterIndex >= texts[index].string.length) {
      clearInterval(timer)
      setWait(() => {
        clearTimeout(wait)
        return setTimeout(changeToNextText, waiting)
      })
    }
  }, [characterIndex])

  useEffect(() => {
    setTimer(() => setInterval(count, speed))
    setIndex(0)
    setCharacterIndex(0)
    return () => {
      clearInterval(timer)
      clearTimeout(wait)
    }
  }, [])

  const word = texts[index].string.slice(0, characterIndex)
  return (
    <>
      <h1 className="typing-text">
        {word} {word.length === texts[index].string.length}
        <span className="blinking-dash">|</span>
      </h1>
    </>
  )
}

export default TextBeingTyped

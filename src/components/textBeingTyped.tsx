import React, { useEffect, useState, useRef } from "react"
import typingSounds from "../assets/audio/typing.mp3"

interface TextBeingTypedProps {
  texts: string[]
  speed?: number
}

const TextBeingTyped = ({ texts, speed = 100 }: TextBeingTypedProps) => {
  const [timer, setTimer] = useState<any>(null)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [index, setIndex] = useState(0)

  const count = () => {
    setCharacterIndex(old => old + 1)
  }

  const changeToNextText = () => {
    setIndex(old => (old + 1 >= texts.length ? 0 : old + 1))
    setCharacterIndex(0)
    clearInterval(timer)
    setTimer(setInterval(count, speed))
  }

  useEffect(() => {
    if (characterIndex >= texts[index].length) {
      changeToNextText()
    }
  }, [characterIndex])

  useEffect(() => {
    setTimer(setInterval(count, speed))
    setIndex(0)
    setCharacterIndex(0)
    return () => {
      timer && clearInterval(timer)
    }
  }, [])

  const audioRef = useRef()
  return (
    <>
      <audio ref={audioRef} src={typingSounds} controls autoPlay />
      <p className="typing-text">
        {texts[index].slice(0, characterIndex)}{" "}
        <span className="blinking-dash" />
      </p>
    </>
  )
}

export default TextBeingTyped

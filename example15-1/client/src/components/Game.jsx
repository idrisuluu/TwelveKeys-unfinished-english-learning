import React from 'react'
import { useParams } from 'react-router-dom'
import { postRequest } from '../utils/requests'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Game = () => {

    const { id } = useParams();
    console.log(id);

    const [keywords, setKeywords] = useState()
    const [word, setWord] = useState(null);
    const [numOfKey, setNumOfKey] = useState(-1);
    const [buttonText, setButtonText] = useState("Start")
    const [userInput, setUserInput] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [buttonTextKey, setButtonTextKey] = useState("Give Key");
    const Navigate = useNavigate();


    useEffect(() => {
        const takeWords = async () => {
            console.log('sa', word)
            console.log(id)
            const response = await postRequest('http://localhost:3000/user/getuser', { userId: id })
            console.log(response);

            const { newWords } = await postRequest('http://localhost:3000/user/getkeywords', { keywords: response.user.keywords, userId: response.user._id })
            setKeywords(newWords);
            console.log('words', keywords)
        }
        takeWords();
    }, [])

    useEffect(() => {
        if (keywords) {
            setWord(keywords[numOfKey])
        }
    }, [numOfKey])

    const startGame = async () => {

        if (buttonText == "Start") {
            setButtonText("Next")
            setNumOfKey(numOfKey + 1);

        }
        if (buttonText == "Next") {
            if (userInput == word.turkish) {
                if (numOfKey < 11) {
                    setNumOfKey(numOfKey + 1);
                    setUserInput("");
                    setShowHint(false);
                    setButtonTextKey("Give Key")
                    const response = await postRequest('http://localhost:3000/user/update', { userId: id, keywords: word._id })
                }
                else setButtonText("Finish")
            }
        } else if (buttonText == "Finish") {
            Navigate(`/profile/${id}`);
        }
    }

    const inputHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <div className='w-screen h-screen bg-gray-100 flex items-center justify-center flex-col'>
            {
                keywords &&
                <>
                    <div>
                        {
                            buttonText === "Next" &&
                            <>
                                <div className='w-screen h-screen/3 py-12 px-12 flex items-center justify-center flex-col gap-12 text-center'>
                                    <div className='flex items-center justify-center gap-4'>
                                        <h1 className=' font-semibold text-4xl'>{word?.english} = </h1>
                                        <input type='text' name='userKeyword' id="userinput" onChange={inputHandler} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold text-2xl'> <span className='text-orange-500'> Definition  = </span> {word?.definition}</h1>


                                        {
                                            showHint && <h1>hint = {word?.example}</h1>
                                        }
                                        <button
                                            className='text-xl font-semibold underline text-red-500'
                                            onClick={() => {
                                                setShowHint(true);
                                            }}
                                        >
                                            Hint</button>

                                    </div>
                                </div>
                                {word?.english}
                                {word?.turkish}
                                {word?.definition}
                                {word?.example}
                                {word?._id}
                            </>
                        }
                    </div>
                    <div className='flex gap-12 items-center justify-center'>
                        <button onClick={startGame}
                            className='py-4 px-12 bg-orange-500 text-xl rounded-xl'
                        >
                            {buttonText}</button>
                        {
                            buttonText === "Start" ||buttonText == "Finish" ? (
                                <div></div>) : (

                                <button onClick={e => {
                                    setButtonTextKey(word.turkish)
                                    setUserInput(word.turkish)
                                }}
                                    className='py-4 px-12 bg-orange-500 text-xl rounded-xl'
                                >
                                    {buttonTextKey}</button>
                            )
                        }

                    </div>

                </>
            }
        </div>
    )
}

export default Game

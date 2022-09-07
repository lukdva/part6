import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseVote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const AnecdotesList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(initializeAnecdotes())
      }, [dispatch])

    const vote = (anecdote) => {
        dispatch(increaseVote(anecdote))
        dispatch(setNotification(`Anecdote '${anecdote.content}' was liked`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <>
            {anecdotes
                .filter( a => a.content.toLowerCase().includes(filter.toLowerCase()))
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
            )}
        </>
    )
}

export default AnecdotesList
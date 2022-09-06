import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(increaseVote(anecdote.id))
        dispatch(setNotification(`Anecdote '${anecdote.content}' was liked`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <>
            {anecdotes.map(anecdote =>
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
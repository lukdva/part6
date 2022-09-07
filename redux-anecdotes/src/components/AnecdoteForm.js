import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotesService'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        const result = await anecdotesService.createNew(content)
        dispatch(newAnecdote(result))
        dispatch(setNotification(`New anecdote was added '${content}'`))
        setTimeout(() => {dispatch(removeNotification())}, 5000)
      }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm
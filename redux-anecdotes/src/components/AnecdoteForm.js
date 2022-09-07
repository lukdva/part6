import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setExpiringNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, setExpiringNotification }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        createAnecdote(content)
        setExpiringNotification(`New anecdote was added '${content}'`, 5)
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
const mapDispatchToProps = {
    createAnecdote,
    setExpiringNotification
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
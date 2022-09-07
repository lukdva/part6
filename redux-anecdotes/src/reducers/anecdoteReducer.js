const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
      return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote).sort( ( a, b ) => b.votes - a.votes )
    case 'NEW_ANECDOTE':
      return [ ...state, action.data]
    case 'SET_ANECDOTES':
      return action.data
    default:
      return state
  }
    
}
export const increaseVote = id => {
  return {
    type: 'VOTE',
    data: { id }
  }
}
export const newAnecdote = anecdote => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}
export const setAnecdotes = anecdotes => {
  return {
    type: 'SET_ANECDOTES',
    data: anecdotes
  }
}
export default reducer
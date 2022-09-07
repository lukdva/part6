import anecdotesService from "../services/anecdotesService"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'VOTE':
    //   const id = action.data.id
    //   const anecdoteToChange = state.find(anecdote => anecdote.id === id)
    //   const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
    //   return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote).sort((a, b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'SET_ANECDOTES':
      return action.data
    case 'UPDATE_ANECDOTE':
      const updatedAnecdote = action.data
      return state.map(anecdote => anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote).sort((a, b) => b.votes - a.votes)
    default:
      return state
  }

}
// export const vote = id => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }
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
export const updateAnecdote = anecdote => {
  return {
    type: 'UPDATE_ANECDOTE',
    data: anecdote
  }
}
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = content => {
  return async (dispatch) => {
    const anecdote = await anecdotesService.createNew(content)
    dispatch(newAnecdote(anecdote))
  }
}
export const increaseVote = anecdote => {
  const changedAnecdote = { ...anecdote, votes: anecdote.votes+1 }
  return async (dispatch) => {
    const result = await anecdotesService.updateAnecdote(changedAnecdote)
    dispatch(updateAnecdote(result))
  }
}
export default reducer
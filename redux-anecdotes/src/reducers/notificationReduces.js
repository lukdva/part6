import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name:'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            const content = action.payload
            state = content
        }
    }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer
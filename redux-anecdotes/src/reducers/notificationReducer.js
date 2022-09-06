import { createSlice } from '@reduxjs/toolkit'

const initialState = {message:'', visible: false}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            const content = action.payload
            state.message = content
            state.visible = true
        },
        removeNotification() {
            return initialState
        }
    }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {message:'', visible: false, previousNotificationId: 0}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            clearTimeout(state.previousNotificationId)
            const content = action.payload
            state.message = content
            state.visible = true
        },
        removeNotification() {
            return initialState
        },
        setPreviousNotificationId(state, action) {
            state.previousNotificationId = action.payload
        }
    }
})

export const setExpiringNotification = (text, timeInSecs) => {
    return (dispatch) => {
        dispatch(setNotification(text))
        const id = setTimeout(() => {
            dispatch(removeNotification())
        }, timeInSecs*1000)
        dispatch(setPreviousNotificationId(id))
    }
}

export const { setNotification, removeNotification, setPreviousNotificationId } = notificationSlice.actions
export default notificationSlice.reducer
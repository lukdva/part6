import React from "react"
import { connect } from "react-redux"

const Notification = (props) => {
  console.log(props)
  const {notification} = props
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification.visible? '' : 'none'
  }
  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
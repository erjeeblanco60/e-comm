  import React from 'react'
import { Alert } from 'react-bootstrap'

                //variant is color //child is the text
    const Message = ({ variant, children }) => {
    return <Alert variant={variant}>{children}</Alert>
 }


 Message.defaultProps = {
    variant: 'info',
  }

  export default Message

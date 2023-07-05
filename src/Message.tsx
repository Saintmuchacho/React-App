import React, { useEffect } from 'react'

const Message = () => {
  useEffect(()=>{
    document.title='message';
  });
  return (
    <div>shoot for perfections</div>
  )
}

export default Message
import React from 'react'

export default function Button({buttontext, disabled}) {
	// const {buttontext, disabled} = props
	console.log(buttontext)
  return (
	<button disabled={disabled}>{buttontext}</button>
  )
}


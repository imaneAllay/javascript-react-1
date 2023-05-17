import React from 'react'
import './Main.css'
import { Tweet } from './Tweet'

export const Main = () => {
  return (
    <div>
        <div className="Main">
        <Tweet message="It's payday!!!" color="green"/>
    <Tweet message="I just bought a new car!" color="yellow" />
    <Tweet message="I just smashed my new car." color="red" />
</div>
    </div>
  )
}

export default Main;
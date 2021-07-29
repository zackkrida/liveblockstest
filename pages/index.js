import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [room, setRoom] = useState('')


  function handleSubmit(event) {
    event.preventDefault()
    if(!room) return
    router.push(`/rooms/${room}`)
  }

  return <div>
    <h1>Home page!</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={event => { setRoom(event.target.value) }} value={room} />
      <button type="submit">Join room</button>
    </form>
  </div>
}
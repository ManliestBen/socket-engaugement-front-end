import styles from './Landing.module.css'

const Landing = ({ user, socket, numActive }) => {

  const sendEmitTest = () => {
    socket.emit('declare-confusion', {
      user: user.profile
    })
  }

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h3>Number of connections: {numActive}</h3>
      <button onClick={sendEmitTest}>Emit Test</button>
    </main>
  )
}

export default Landing

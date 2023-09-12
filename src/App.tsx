import './index.css'

function App() {

  return (
    <>
      <main className='bg-zinc-50 @container-normal h-screen sm:flex-row flex-col flex items-center justify-center w-full'>
        <div className='@container-normal w-1/2 bg-red-400'>
          <input type="email" name="email" id="email" className='rounded-md' />
        </div>
        <div className='@container-normal w-1/2 bg-blue-400'>
          <p>teste</p>
        </div>
      </main>
    </>
  )
}

export default App

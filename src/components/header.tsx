
export default function Header () {

  return (
    <header className='w-full h-[10%] py-5 border-b flex justify-between items-center'>
        <h1 className='text-center text-3xl uppercase '>Frontend Developer Test</h1>
        <input 
          className='w-1/6 p-2 border rounded' 
          placeholder='Search by value'
          />
    </header>
  )
}
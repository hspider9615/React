import './App.css';
import Card from './components/Card';
function App() {
  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>
        Tailwind Test
      </h1>
      <Card channel='Codex||Spider' />
      <Card />

      {/* <div className='relative h-[400px] w-[300px] rounded-md'>
        <img
          src='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
          alt='AirMax Pro'
          className='z-0 h-full w-full rounded-md object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10'></div>
        <div className='absolute bottom-4 left-4 text-left z-20'>
          <h1 className='text-lg font-semibold text-white'>Delba</h1>
          <p className='mt-2 text-sm text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700 py-1 px-3 rounded'>
            View Profile →
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;

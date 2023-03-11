
import Header from "./components/header";


function App() {
  
  return (
    <div className='container mx-auto h-[100vh]'>
      <Header />
      <section className=" h-[80%] border-b overflow-y-auto py-5">
        <h1 className="text-2xl tracking-widest uppercase text-center">Books</h1> 
        <table className="table-bg-current mt-5 border table-border-collapse table-fixed w-full">
          <thead className="bg-bg-dark-900">
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className="w-full h-[10%] flex items-center justify-center">
        <p className="text-2xl text-center uppercase">Created by superghost0621@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

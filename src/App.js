import './App.css';
import svg from './images/svg.png';

function App() {
  return (
  /*  <div>
    <h1>Erica is in love!</h1>
   <div>
    <p>Potential concubinus </p>
    <li>Nameless crush(Guy with glasses)</li>
   </div>

   </div> */

   <div>
    <section>
      <div>
      <h1><span className='always'>Always</span> Judge a Book by its Cover</h1>
      <p>Some books win awards, some win our heart, and others... only serve to confuse.</p>
      </div>
      <div>
        <ul>
          <li>Recommend a book</li>
          <span>~</span>
          <li>Get a Book</li>
          <span>~</span>
          <li>RSS</li>
        </ul>
      </div>
      
    </section>

    <img src ={svg} />
   </div>
  );
}

export default App;

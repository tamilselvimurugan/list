import logo from './logo.svg';
import './App.css';
import List from './list';

function App() {

  const depart=[
    {
      name:"Biology"
    },
    {
      name:"Economics"
    },{
      name:"commerce"
    },{
      name:"computer science"
    }
  ]

  return (
    <div className="list">
      <List departName={depart}/>
    </div>
  );
}

export default App;
     
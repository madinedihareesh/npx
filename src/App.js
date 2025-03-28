
import './App.css';
import Apple from './Apple';





function App() {
  const Products=[
    {
      title:"product1",
      discription:"hello",

    },
    {
      title:"product1",
      discription:"hello",
    },
    {title:"product1",
      discription:"hello",
    }
  ]
  
  return (
    <div className="App">
    
{
  Products.map((item)=>{
   return <Apple title={item.title} dec= {item.discription} />
})
}
    </div>


  );
}

export default App;

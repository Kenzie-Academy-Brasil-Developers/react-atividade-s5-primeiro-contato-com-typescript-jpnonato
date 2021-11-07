import {Card} from './components/Card'
import {Input} from './components/Input'
import {useState} from 'react';
import './App.css';

interface Person {
  name: string
  age: string
  hobby: string
}



function App() {

  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [hobby,setHobby] = useState('')
  const [list,setList] = useState<Person[]>([])   

  const handleClick = () => {
    const newPerson: Person = { name: name, age: age, hobby: hobby }

    setList([...list, newPerson])
    
  }

  return (
    <div className='App'>
      <header className='App-header'>
    
        <Input   label={'Nome'} placeholder={'seu nome'} onChange={(e) => setName(e.target.value)}/>
        <Input   label={'Idade'} placeholder={'sua idade'} onChange={(e) => setAge(e.target.value)}/>
        <Input   label={'Hobby'} placeholder={'seu hobby'} onChange={(e) => setHobby(e.target.value)}/>
        <button onClick={handleClick }> Registrar </button> 
      
        {console.log(list)}
      <section className='card_list'>
          {
            list.map((elt) => <Card key={elt.name} item={elt}/>)
          }
      </section>
      </header>
    </div>
  );
}

export default App;

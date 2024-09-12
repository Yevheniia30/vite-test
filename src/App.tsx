import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import data from '../public/data.yaml'
// import {parse, stringify} from 'yaml'
import yaml from 'js-yaml'
import axios from 'axios'

export const baseUrl = '/vite-test';

function App() {
  const [count, setCount] = useState(0)

    useEffect(()=>{
        (async () => {
            try {
                // const result = await axios.get('/vite-test/data.yaml');
                const result = await axios.get('/vite-test/data/js/StringMethods.yaml');
                console.log('result', result.data)
                return yaml.load(result.data);
                // const yamlData = await yaml.load('/vite-test/data.yaml');
                // console.log(yamlData);
            } catch (error) {
                console.error('Ошибка при загрузке YAML данных:', error);
            }
        })();

    }, [])

    // console.log('data', JSON.parse( data))

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

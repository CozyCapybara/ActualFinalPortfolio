import { Header } from '../components/Header';
import {Projects } from '../components/Projects';
import '../App.css';

export function Home(){
  return (
    <div id='root'>
      <Header />
      <Projects />
    </div>
  )
}
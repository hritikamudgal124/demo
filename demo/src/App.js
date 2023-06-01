
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';


function App() {
  return (
  <>
<Navbar title="TextUtils" home="HomePage" about="AboutUs"/>
{/* <Navbar/> */}
<div className="container">
<TextForm heading= "Enter a text to analyze"/>
<About/>
</div>
<p/>
  </>
  );
}












//creating and nesting components
//  function MyBotton(){    
//   return (
//      <button classNameName="avatar">i am a button</button>
//     );
//  }
//  export default function MyApp(){
//  return(
//    <div>
//      <h1>
//        welcome to my app
//      </h1>
//      <MyBotton/>
//    </div>
//  )
//  }

export default App;

//more complex expression inside jsx like string concatenation
// const user={
//   name:'ms dhoni',
//   imageUrl:'assests/Untitled.jpeg',
//   imageSize:90
// }
// export default function Profile(){
//   return(
//     <>
//     <h1>{user.name}</h1>
//     <img classNameName="avatar" 
//     src={user.imageUrl} 
//     alt={'photo of' + user.name}
//     style={{
//       width:user.imageSize,
//       heigth:user.imageSize
//     }} />
//     </>
//   )
// }

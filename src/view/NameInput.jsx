import { useState, useEffect, useRef } from "react";

export default function Name_input() {
  const [name, setName] = useState("???");
  const [flag, setFlag] = useState(false);

  const myInput = useRef(null);
  let mispar = useRef(8);


  // function onChange(event){
    // const txt = event.target.value
  function onChange(){
    console.log(myInput)
    if(!myInput.current) return;
    const txt = myInput.current.value;
    // setName(txt);
    if(txt.length % 3 === 0){
      setFlag(!flag);
    }
    mispar.current++;
  }

  useEffect(()=> {
    // console.log('something happened one time on mount');
    return ()=> console.log('cleanup code...')
  },[])

  useEffect(()=> {
    // console.log('on update of state var or prop');
  },[flag])
  

  return (
    <div className="vbox mt20">
      <div className="hbox space-between">
        <h1 className="paragraph">What is your name?</h1>
        <input
          ref={myInput}
          type="text"
          className="input cap"
          placeholder="Your name here..."
          onChange={onChange }
        />
      </div>
      <br />
      <h2>{mispar.current}</h2>
      <h3 className="paragraph text-left white-text cap">
        Your answer: {name}
      </h3>
    </div>
  );
}

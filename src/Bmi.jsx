import { useState, useEffect} from "react";

export default function Bmical(){
    
    let [ht, setht]= useState('');
    let [wt, setwt]= useState('');
    let [lvl, setlvl]= useState('Check your BMI');
    let [bmi, setbmi]= useState('0');
    let [col, setcol]= useState({color:"rgb(55 65 81)"});

    
    const hthandler =(event)=>{
        setht(event.target.value);
    }
    const wthandler =(event)=>{
        setwt(event.target.value);
    }
    let colr;
    useEffect(() => {
        const calculateBmi = () => {
          if (ht && wt) { // Ensure both values are available
            const htm = ht * 0.3048;
            const htsq = htm * htm;
            const Bmi =(wt / htsq).toFixed(2);
            setbmi(Bmi);
            let lv;
           
            if (Bmi < 18.5) {
              lv = "Underweight 😥";
              colr={color:"rgb(37 99 235)"};
            } else if (Bmi >= 18.5 && Bmi <= 25) {
              lv = "Normal 😎";
              colr={color:"rgb(132 204 22)"};
            } else {
              lv = "Overweight 😣";
              colr={color:"rgb(239 68 68)"};
            }
            setlvl(lv);
            setcol(colr)
          }
        };
    
        calculateBmi();
      }, [ht, wt]);
    

    
    return(<>
    <div className="flex flex-col items-center justify-center w-full h-auto p-10 gap-2">

        <label htmlFor="">HEIGHT in feets</label>
        <input onChange={hthandler} value={ht} className=" border-slate-500 border-2 p-1 rounded-md text-center " type="number" name="height" id="hgt" />
        <label htmlFor="">WEIGHT in kgs</label>
        <input onChange={wthandler} value={wt} className=" border-slate-500 border-2 p-1 rounded-md text-center" type="number" name="height" id="hgt" />
        {/* <button className=" m-5 bg-slate-500 hover:bg-slate-600 p-2 text-white border-white border-2 focus:border-slate-700 rounded-lg">CALCULATE</button> */}
        <span className=" m-5"><h1 className=" font-bold text-6xl text-slate-900">{bmi}</h1></span>
        <span className=" m-5"><h1 className=" font-semibold text-6xl" style={col}>{lvl}</h1></span>

    </div>
    </>);
}
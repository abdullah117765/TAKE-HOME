import React,{useState,useEffect} from 'react'
import SelectInput from '../../components/selectinput/SelectInput';
import TextAreaInput from '../../components/textareainput/TextAreaInput';
import TextInput from '../../components/textinput/TextInput';
import FileInput from '../../components/fileinput/FileInput';
const JoinForm = ()=>{

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [img, setImg] = useState('');
    const [agentLicense, setAgentLicense] = useState('');
    const [address, setAddress] = useState('');
    const [practiceAreas, setPracticeAreas] = useState('');
    const [aboutMe, setAboutMe] = useState('');


    // useEffect(() => {
    //     const storedArray = localStorage.getItem('myArray');
    //     if (storedArray) {
    //       setDataArray(JSON.parse(storedArray));
    //     }
    //   }, []);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      

        // const newObject = { id: id, title: title, description:description, image:pimg, Category:Category }; // Example new object
        // const updatedArray = [...dataArray, newObject];
        // setDataArray(updatedArray);
        // localStorage.setItem('myArray', JSON.stringify(updatedArray));
        // alert('Object added!');
    }

    return(
        <>

<div className='mt-10'>

<form onSubmit={handleSubmit} className="max-w-lg mx-auto">

<TextInput label="FirstName" value={fname} onChange={(e) => setFname(e.target.value)} />
<TextInput label="LastName" value={lname} onChange={(e) => setLname(e.target.value)} />
<FileInput label="Photograph" onChange={(e) => setImg(e.target.value)} />
<TextInput label="AgentLicense" value={agentLicense} onChange={(e) => setAgentLicense(e.target.value)} />
<TextAreaInput label="Address" value={address} onChange={(e) => setAddress(e.target.value)} height='40' />
<TextAreaInput label="Practice Areas" value={practiceAreas} onChange={(e) => setPracticeAreas(e.target.value)} height='40' />
<TextAreaInput label="AboutMe" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} height='40' />


<button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
          >
            Submit
          </button>
</form>

        </div>

        </>
        
    )
}

export default JoinForm;
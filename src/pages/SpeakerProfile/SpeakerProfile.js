import React, { useEffect, useState }  from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Navbar/Header'
import SpeakerAbout from './SpeakerAbout';
import SpeakerHero from './SpeakerHero';
import './SpeakerProfile.css';
import { doc, getDoc } from "firebase/firestore";
import { storage, db } from '../../firebase/firebase';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useNavigation } from 'react-router-dom';
import toast from 'react-hot-toast';


function SpeakerProfile() {

  const [ data, setData ] = useState( {} );
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  // console.log(currentUser)

  if ( !currentUser ) {
    navigate( '/login' );
  }

  useEffect( () => {
    const fetchData = async () => {
      const docRef = await doc( db, "speakers", currentUser.uid );
      const docSnap = await getDoc( docRef );
       
      if ( docSnap.exists() ) {
         
        setData( docSnap.data() );
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
        setData( undefined );
      }
      // console.log(docSnap)
    };
    fetchData();
  }, [ currentUser.uid ] );

  useEffect( () => {
    if ( !data || data.length < 0) {
      toast.success('Please Complete your profile to continue!!!',  {
        duration: 4000,
        position: 'top-center',
      
        // Styling
        style: {fontSize: '13px'},
        className: '',
      })
      navigate( '/create-profile' );
    }
  }, [data])

 



  return (
    <div className='speakAboutContainer'>
        <Header/>
      <SpeakerHero data={data} />
        <SpeakerAbout data={data}/>
        <Footer className='speakFooter'/>
    </div>
  )
}

export default SpeakerProfile
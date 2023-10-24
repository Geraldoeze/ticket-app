import { useNavigate } from "react-router-dom";
import Avatar from "../../../../components/Avatar";
import { ButtonEvent, ButtonEventGroup } from "../../../../components/button";
import { DetailItem } from "../../components/detailComponents";
import { getDetailBoxes } from "../../constants/studentData";
import { ROUTES_CONFIG } from "../../../../layout/config";




export default function StudentPersonalInfo() {
  const navigate = useNavigate();

  const data = {
    first_name: 'James',
    middleName: 'Hardin',
    lastName: 'Smith',
    gender: 'Male',
    photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=',
    email: 'james@gmail.com',
    phoneNumber: '08090700709',
    dateOfBirth: '23/1/2015',
    grade: '2',
    religion: 'Christianity',
    country: 'Nigeria',
    stateOfOrigin: 'Lagos',
    stateOfResidence: 'Lagos',
    city: 'Ikeja',
    ethnicity: 'Igbo',
    councilOfOrigin: 'Ifelodun lga',
    councilOfResidence: 'Ifelodun',
    address: 'Plot 303 avenue way',
    nameOfParent: 'Williams Hardin',
    genderOfParent: 'Male',
    occupationOfParent: 'Engineer',
    typeOfRelationship: 'Father',
    emailOfParent: 'williamshardin@gmail.com',
    phoneNumberOfParent: '07065432135',
    stateOfParent: 'Anambra',
    cityOfParent: 'Anambra south',
    addressOfParent: 'Anambra south 201',
    // primaryContact: true,
  }
  const handleEditStudent = () => navigate(`${ROUTES_CONFIG.admin.entities.editStudent}/123`)

const detailBoxes = getDetailBoxes(data)
    return (
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between">
            <Avatar size={12} src={data.photo}/>
            <div className="">
              <ButtonEventGroup>
                <ButtonEvent variant="edit" onClick={handleEditStudent}>Edit</ButtonEvent>
              </ButtonEventGroup>
              </div>
           </div>
            <div className="p-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3"> 
            {detailBoxes.map((detail, index) => (
             <DetailItem
             key={index} 
             header={detail.label}
             height={40}
             text={detail.value}
            /> 
            ))}
           
        
            </div>
         
        </div>
    )
}
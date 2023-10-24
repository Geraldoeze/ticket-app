import { useNavigate } from "react-router-dom";
import Avatar from "../../../../components/Avatar";
import { ButtonEvent, ButtonEventGroup } from "../../../../components/button";
import { DetailItem } from "../../components/detailComponents";
import { ROUTES_CONFIG } from "../../../../layout/config";
import { getEmployeeDetailBoxes } from "../../constants/employeeData";




export default function EmployeePersonalInfo() {
  const navigate = useNavigate();

  const data = {
    accountType: 'Teacher',
    firstName: 'James',
    middleName: 'Hardin',
    lastName: 'Smith',
    gender: 'Male',
    photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=',
    email: 'james@gmail.com',
    phoneNumber: '08090700709',
    dateOfBirth: '23/1/2015',
    religion: 'Christianity',
    country: 'Nigeria',
    stateOfOrigin: 'Lagos',
    stateOfResidence: 'Lagos',
    city: 'Ikeja',
    ethnicity: 'Igbo',
    councilOfOrigin: 'Ifelodun lga',
    councilOfResidence: 'Ifelodun',
    address: 'Plot 303 avenue way',
    
  }
  const handleEditEmployee = () => navigate(`${ROUTES_CONFIG.admin.entities.editEmployee}/123`)


const detailBoxes = getEmployeeDetailBoxes(data)
    return (
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between">
            <Avatar size={12} src={data.photo}/>
            <div className="">
              <ButtonEventGroup>
                <ButtonEvent variant="edit" onClick={handleEditEmployee}>Edit</ButtonEvent>
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
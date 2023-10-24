import { useNavigate } from "react-router-dom";
import { ButtonEvent, ButtonEventGroup } from "../../../../components/button";
import { DetailItem } from "../../components/detailComponents";
import { getParentDetailBoxes } from "../../constants/studentData";
import { ROUTES_CONFIG } from "../../../../layout/config";




export default function StudentParentInfo() {
  const navigate = useNavigate();

  const data = {
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

const detailBoxes = getParentDetailBoxes(data)
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between mb-6 px-4">
            <h2 className="text-xl">Parent Information</h2>
            <ButtonEvent variant="edit" onClick={handleEditStudent}>Edit</ButtonEvent>
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
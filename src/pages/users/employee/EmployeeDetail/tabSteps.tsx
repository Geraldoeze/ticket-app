import EmployeePersonalInfo from './EmployeePersonalInfo';

interface StepComponentProps {
    step?: string;
  }

const EmployeeStepComponent = ({ step }: StepComponentProps) => {
  switch (step) {
    case 'Personal':
      return <EmployeePersonalInfo />;
    case 'Academics':
      return < >Academics</>;
    case 'Learn':
      return <>Learn</>;
    case 'Payments':
      return <>Payments</>;
    default:
      return null;
  }
};

export default EmployeeStepComponent;
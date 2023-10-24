type DetailBoxItem = {
    label: string;
    value: string;
  };
  
  export const getEmployeeDetailBoxes = (employeeData: {
    [key: string]: string | undefined;
  }): DetailBoxItem[] => [
    {
      label: "Employee's Role",
      value: employeeData?.accountType || "",
    },
    {
      label: "First Name",
      value: employeeData?.firstName || "",
    },
    {
      label: "Middle Name",
      value: employeeData.middleName || "",
    },
    {
      label: "Last Name",
      value: employeeData.lastName || "",
    },
    {
      label: "Gender",
      value: employeeData.gender || "",
    },
      {
        label: "Date of Birth",
        value: employeeData.dateOfBirth || "",
      },
      {
        label: "Country",
        value: employeeData.country || "",
      },
      {
        label: "State Of Origin",
        value: employeeData.stateOfOrigin || "",
      },
      {
        label: "LGA of Origin",
        value: employeeData.councilOfOrigin || "",
      },
      {
        label: "State Of Residence",
        value: employeeData.stateOfResidence || "",
      },
      {
        label: "City",
        value: employeeData.city || "",
      },
      {
        label: "LGA of Residence",
        value: employeeData.councilOfResidence || "",
      },
      
      
      {
        label: "Religion",
        value: employeeData.religion || "",
      },
      
      {
        label: "Ethnicity",
        value: employeeData.ethnicity || "",
      },
      {
        label: "Email",
        value: employeeData.email || "",
      },
      {
        label: "Phone Number",
        value: employeeData.phoneNumber || "",
      },
     
      {
        label: "Address",
        value: employeeData.address || "",
      },
    // Rest of the items
  ];
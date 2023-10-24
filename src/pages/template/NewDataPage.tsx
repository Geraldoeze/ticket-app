import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import BreadCrumb from '../../components/BreadCrumb';
import { FormGroup, TextArea, Password, Button, InputField } from '../../components/form';
import { Container, Header, Section } from '../../components/container';
import SelectField, { SelectFieldOption } from '../../components/SelectField';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import { ButtonGroup } from '../../components/form/FormGroup';


export default function NewDataTemplate() {
  const [calendar, setCalendar] = React.useState<any>(new Date());
  const [date, setDate] = React.useState<any>(new Date());
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [togglePassword, setTogglePassword] = React.useState<boolean>(false)
  const [profile, setProfile] = React.useState<any>({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    stateOfOrigin: '',
    councilOfOrigin: '',
    role: '',
    lga: '',
    password: '',
    email: '',
    phone: '',
    gender: '',
    city: '',
    address: '',
  })

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000)
  }

  return (
    <DefaultLayout>
      <BreadCrumb
        pageName='Create Template Data'
        homeRoute='/app/templates/ListPage'
        homeRouteName='Template List Table'
      />
      <Container>
        <Section>
          <Header variant='h2'>Personal Informtion</Header>
          <FormGroup>
            <InputField
              error="This is a sample error message!"
              label="First Name"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={profile?.firstName}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, firstName: val }))}
            />
            <InputField
              description='This is a sample description'
              label="Last Name"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={profile?.lastName}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, lastName: val }))}
            />
          </FormGroup>
          <FormGroup>
            <InputField
              label="Middle Name"
              id="middleName"
              name="middleName"
              placeholder="Middle Name"
              value={profile?.middleName}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, middleName: val }))}
            />
            <SelectField
              id="gender"
              name="name"
              value={profile?.gender}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, gender: val }))}
              label="Gender">
              <SelectFieldOption isDefault value="male">Male</SelectFieldOption>
              <SelectFieldOption value="female">Female</SelectFieldOption>
              <SelectFieldOption value="other">Other</SelectFieldOption>
            </SelectField>
          </FormGroup>
          <FormGroup>
            <InputField
              label="Email"
              id="email"
              name="email"
              placeholder="Email"
              value={profile?.email}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, email: val }))}
            />
            <InputField
              label="Phone Number"
              id="phone"
              name="phone"
              placeholder="+23480123456789"
              value={profile?.phone}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, lastName: val }))}
            />
          </FormGroup>
          <FormGroup>
            <SelectField
              id="councilOfOrigin"
              name="councilOfOrigin"
              value={profile?.councilOfOrigin}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, councilOfOrigin: val }))}
              label="LGA of Origin">
              <SelectFieldOption isDefault value="Abaji">Abaji</SelectFieldOption>
              <SelectFieldOption value="AMAC">AMAC</SelectFieldOption>
              <SelectFieldOption value="Oti-Osa">Oti-Osa</SelectFieldOption>
            </SelectField>
            <SelectField
              id="state"
              name="state"
              value={profile?.stateOfOrigin}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, stateOfOrigin: val }))}
              label="State of Origin">
              <SelectFieldOption isDefault value="fct">FCT</SelectFieldOption>
              <SelectFieldOption value="abia">Abia</SelectFieldOption>
              <SelectFieldOption value="Adamawa">Adamawa</SelectFieldOption>
            </SelectField>
          </FormGroup>
          <FormGroup>
            <InputField
              label="City"
              id="city"
              name="city"
              placeholder="city"
              value={profile?.city}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, city: val }))}
            />
            <SelectField
              id="councilOfResidence"
              name="councilOfResidence"
              value={profile?.councilOfResidence}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, councilOfResidence: val }))}
              label="LGA of Residence">
              <SelectFieldOption isDefault value="fct">FCT</SelectFieldOption>
              <SelectFieldOption value="abia">Abia</SelectFieldOption>
              <SelectFieldOption value="Adamawa">Adamawa</SelectFieldOption>
            </SelectField>
          </FormGroup>
          <TextArea
            label="Address"
            id="address"
            name="address"
            placeholder="address"
            value={profile?.address}
            onChange={(val: string) => setProfile((s: any) => ({ ...s, address: val }))}
          />
        </Section>

        <Section>
          <Header variant='h2'>Account Settings</Header>
          <FormGroup>
            <InputField
              label="Username"
              id="username"
              name="username"
              placeholder="Username"
              value={profile?.username}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, username: val }))}
            />
            <SelectField
              id="role"
              name="role"
              value={profile?.role}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, role: val }))}
              label="Role">
              <SelectFieldOption isDefault value="teacher">Teacher</SelectFieldOption>
              <SelectFieldOption value="burser">Buser(Accountant)</SelectFieldOption>
              <SelectFieldOption value="lab technician">Lab Technician</SelectFieldOption>
              <SelectFieldOption value="driver">Driver</SelectFieldOption>
              <SelectFieldOption value="cleaner">Cleaner</SelectFieldOption>
            </SelectField>
          </FormGroup>
          <FormGroup>
            <Password
              minLength={8}
              maxLength={16}
              disabled={false}
              isRequired={true}
              togglePassword={togglePassword}
              onTogglePassword={setTogglePassword}
              placeholder="*********"
              label="Password"
              id="password"
              name="password"
              value={profile?.password}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, password: val }))}
            />
            <Password
              placeholder="*********"
              minLength={8}
              maxLength={16}
              disabled={false}
              isRequired={true}
              togglePassword={togglePassword}
              onTogglePassword={setTogglePassword}
              label="Confirm Password"
              id="cpassword"
              name="cpassword"
              value={profile?.cpassword}
              onChange={(val: string) => setProfile((s: any) => ({ ...s, cpassword: val }))}
            />
          </FormGroup>
        </Section>

        <Section>
          <Header variant='h2'>Calendar Samples</Header>
          <FormGroup>
            <Calendar onChange={(dt) => setCalendar(dt)} />
            <DatePicker
              selected={date}
              onSelect={(dt) => setDate(dt)} //when day is clicked
              onChange={(dt) => setDate(dt)} //only when value has changed
            />
          </FormGroup>
        </Section>

        <Section>
        <ButtonGroup position='right'>
          <Button
            type='button'
            classNames='w-25' 
            variant='secondary' 
            onClick={() => {}}
            isLoadingText='Saving...'>
            Cancel
          </Button>
          <Button
            type='button'
            classNames='w-25' 
            variant='primary' 
            onClick={handleSave}
            disabled={isLoading}
            isLoading={isLoading}
            isLoadingText='Saving...'>
            Save
          </Button>
        </ButtonGroup>
        </Section>
      </Container>
    </DefaultLayout>
  )
}
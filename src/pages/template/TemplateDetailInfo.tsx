import { Header } from '../../components/container';
import TextView from '../../components/textview';
import TextViewGroup from '../../components/textview/TextViewGroup';
import { ButtonEvent, ButtonEventGroup } from '../../components/button';
import { Container, Section } from '../../components/container';

export default function TemplateDetailInfo({ data, show }: { data: any; show: boolean }) {
    return show ? (
        <Container>
            <Section>
                <ButtonEventGroup>
                    <ButtonEvent variant="edit" onClick={() => { }}>Edit</ButtonEvent>
                </ButtonEventGroup>
                <Header variant='h2'>Personal Informtion</Header>
                <TextViewGroup>
                    <TextView title='First Name'>Ezenna</TextView>
                    <TextView title='Last Name'>Farouk</TextView>
                </TextViewGroup>
                <TextViewGroup>
                    <TextView title='Middle Name'>Ademola</TextView>
                    <TextView title='Other Name'>Manbassa</TextView>
                </TextViewGroup>
                <TextViewGroup>
                    <TextView title='Gender'>Male</TextView>
                    <TextView title='Date of Birth'>June 21, 1990</TextView>
                </TextViewGroup>
                <TextViewGroup>
                    <TextView title='Email'>ezenna.farouk@uweuruschool.com</TextView>
                    <TextView title='Phone Number'>+23480123456789</TextView>
                </TextViewGroup>
                <TextViewGroup>
                    <TextView title='State of Origin'>Lagos</TextView>
                    <TextView title='LGA'>Eti-Osa</TextView>
                </TextViewGroup>
                <TextViewGroup>
                    <TextView title='State of Residence'>Ogun</TextView>
                    <TextView title='City'>Sango Ota</TextView>
                </TextViewGroup>
                <TextViewGroup>
                    {/* Options for value & text color - danger, warning, success and primary */}
                    <TextView valueColor='warning' title='Verification Status'>Disabled</TextView>
                    <TextView title='LGA'>Eti-Osa</TextView>
                </TextViewGroup>
                <TextView title='Address'>123 Old Mush House, Off Lagos Express Way, Ota</TextView>
                <TextView title='Remarks'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</TextView>
            </Section>
        </Container>
    ) : null;
}
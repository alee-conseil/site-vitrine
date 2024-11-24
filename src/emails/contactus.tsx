import { namifySlug } from '@/utils/functions';
import { ContactUsPayload } from '@/utils/interfaces';
import { logoOnGithub } from '@/utils/constants';
import {
    Body,
    Column,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';

export const ContactUsEmail = ({
    nom,
    prenom,
    telephone,
    email,
    message
}: ContactUsPayload) => {
    const fullname = namifySlug(nom) + " " + namifySlug(prenom);
    return (
        <Html>
            <Head />
            <Preview>JumpIT - Reçu de Devis</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={logo}>
                        <Img width={114} src={logoOnGithub} />
                    </Section>
                    <Section style={sectionsBorders}>
                        <Row>
                            <Column style={sectionBorder} />
                            <Column style={sectionCenter} />
                            <Column style={sectionBorder} />
                        </Row>
                    </Section>
                    <Section style={content}>
                        <Text style={paragraph}>Bonjour Admin,</Text>
                        <Text style={paragraph}>
                            Vous avez reçu un message  d&apos;après <b>{fullname}</b>.
                        </Text>
                        <Text style={paragraph}>
                            L&apos;utilisateur <b>{fullname}</b> a laissé un message :
                            <Section style={messageSection}>
                                <b>{message}</b>
                            </Section>
                        </Text>
                        <Text style={paragraph}>
                            Plus d&apos;informations sur l&apos;utilisateur <b>{fullname}</b>:
                        </Text>
                        <Text style={indentparagraph}>
                            - Adresse Email : <b>{email}</b>
                        </Text>
                        {telephone && <Text style={indentparagraph}>
                            - Téléphone : <b>{telephone}</b>
                        </Text>}
                    </Section>
                </Container>

                <Section style={footer}>
                    <Row>
                        <Column align="center" style={{ width: '50%', paddingLeft: '8px' }}>
                            <Img width={114} src={logoOnGithub} />
                        </Column>
                    </Row>
                    <Text style={{ textAlign: 'center', color: '#706a7b' }}>
                        © 2023 JumpIT, Tout droit réservé <br />
                        350 Bush Street, 2nd Floor, San Francisco, CA, 94104 - USA
                    </Text>
                </Section>
            </Body>
        </Html>
    );
};

export default ContactUsEmail;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
    backgroundColor: '#efeef1',
    fontFamily,
};

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
};

const indentparagraph = {
    lineHeight: 1.5,
    fontSize: 14,
    marginLeft: 15
};

const container = {
    width: '580px',
    margin: '30px auto',
    backgroundColor: '#ffffff',
};

const footer = {
    width: '580px',
    margin: '0 auto',
};

const content = {
    padding: '5px 50px 10px 60px',
};

const logo = {
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    padding: 30
};

const sectionsBorders = {
    width: '100%',
    display: 'flex',
};

const sectionBorder = {
    borderBottom: '2px solid rgb(238,238,238)',
    width: '249px',
};

const sectionCenter = {
    borderBottom: '2px solid #b400ff',
    width: '102px',
};

const messageSection = {
    border: '1px solid black',
    borderRadius: "8px",
    padding: "10px",
    marginVertical: "10px",
    backgroundColor: "#dddddd"
}

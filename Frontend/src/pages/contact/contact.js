import { h, Component } from 'preact'

import Card from '@components/card~'
import Space from '@components/space~'
import Link from '@components/link~'
import MainBlock from '@components/mainBlock~'

import EmailIcon from '@icons/email.svg'
import PhoneIcon from '@icons/phone.svg'
import CodeIcon from '@icons/code.svg'

import styles from './contacts.sass'

const data = [{
    icon: <EmailIcon />,
    value: "seva.trofimov2@gmail.com"
}, {
    icon: <PhoneIcon />,
    value: "+7 906 242-77-33"
}, {
    icon: <CodeIcon />,
    value: "VsevolodTrofimov",
    link: "https://github.com/VsevolodTrofimov"
}]

const ContactItem = props => {
    return (
        <Space top='m'>
            <MainBlock class={styles.contactItem}> 
                {props.icon}
                {props.link ? <Link url={props.link}>{props.value}</Link> : props.value} 
            </MainBlock>
        </Space>
    )
}

export default function Contact () {
    return (
        <Card>
            <h1> Контакты </h1>
            {data.map(ContactItem)}
        </Card>
    )
}
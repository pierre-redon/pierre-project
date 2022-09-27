import Link from "next/link";

const Menu = () => {

    const allLiens = [
        {link: '/', text: 'Accueil'},
        {link: '/about', text: 'A propos'},
    ]

    return (
        <ul>
            {allLiens.map((entry) => {
                return <Lien entry={entry} />
            })}
        </ul>
    )
}

const Lien = ({entry}) => {
    return (
        <li><Link href={entry.link}>{entry.text}</Link></li>
    )
}

export default Menu;
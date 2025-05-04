import arrow from '../../assets/images/icons/arrow.png'
import logo from '../../assets/images/logo.png'
import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'

export default function Header() {
    return (
        <>
            <Banner text='Admission is Open, Grab your seat now' icon={arrow} />
            <Navbar text="Little Learners" logo={logo} listItems={['Home', 'About Us', 'Academics', 'Admissions', 'Student Life', 'Contact']} />
        </>
    )
}

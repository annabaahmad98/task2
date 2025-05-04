import Filters from "../../components/Filters/Filters";
import SectionHeader from "../../components/SectionHeader/SectionHeader";


export default function RoomGallery() {
    return (
        <section>
            <SectionHeader headerText="Our Rooms Gallery" badgeText="Our Gallery" descriptionText="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school." />
            <Filters />
        </section>
    )
}

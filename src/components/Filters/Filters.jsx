import FilterItem from "../FilterItem/FilterItem";
import styles from './Filters.module.css'

const filterData = [
    "All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"
]
export default function Filters() {
    return (
        <div className={styles.filtersContainer}>
            {filterData.map((filter, index) =>
                <FilterItem key={index} title={filter} />
            )}
        </div>
    )
}

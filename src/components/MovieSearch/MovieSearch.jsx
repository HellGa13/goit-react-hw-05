import { useSearchParams } from "react-router-dom";
import css from "./MovieSearch.module.css";


export default function MovieSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = e => {
        e.preventDefault();
        const query = e.target.elements.query.value.trim();
        if (query) {
            setSearchParams({ query });
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" className="input" />
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    );
}
import { Link } from "react-router-dom";
const Result = () => {
    return(
        <div>
        <h1>result</h1>
        <Link to="/"><button>홈</button></Link>
        <Link to="/admin"><button>관리자</button></Link>
        </div>
    );
};
export default Result;
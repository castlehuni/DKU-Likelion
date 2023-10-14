import { Link } from "react-router-dom";
//import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    return(
        <div>
        <h1>home</h1>
        <Link to="/Result"><button>결과</button></Link>
        <Link to="/Admin"><button>관리자</button></Link>
        {/*<button onClick={() => navigate("/navigate")}>Navigate</button>*/}
        </div>
    );
};
export default Home;
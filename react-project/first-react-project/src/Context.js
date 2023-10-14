import { useContext } from "react";
import { LionContext } from "./LionContext";

const Context = () => {
    const {data} = useContext(LionContext);
    console.log(data);
    return(
        <div>
            <h1>useContext 실습</h1>
            {data.map((member) => (
                <div key={member.id}>
                <h2>{member.name}</h2>
                <p>{member.text}</p>
                <p>{member.age}</p>
                </div>
            ))}
        </div>
    );
}
export default Context;
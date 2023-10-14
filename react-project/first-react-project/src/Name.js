const Name = (props) => {
    return(
    <div>
        <h1>{props.name}</h1>
        <h1>{props.children}</h1>
    </div>
    );
};

Name.defaultProps={
    name:"기본 값",
};

export default Name;
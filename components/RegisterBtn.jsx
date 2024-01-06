const RegisterBtn = (props) => {

    const {body, isAdd, isSub, setIndex, index} = props;

    return ( 
        <button onClick={isAdd ? setIndex(index + 100) }>
            {body}
        </button>
     );
}
 
export default RegisterBtn;
import './Productname.css';

function Productname(props){
    const name= props.name;
    return(
        <div className='Productname'>{name}</div>
    )
}

export default Productname;
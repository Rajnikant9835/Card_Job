import './Productdate.css';

function Productdate(props){
    const day = props.day;
    const month = props.month;
    const year = props.year;
    
    return (
        <div className='Productdate'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
}

export default Productdate;
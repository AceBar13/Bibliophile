import './ProfileCards.css';

const ProfileCards = (props)=>{
  
    console.log('heelo')
    console.log(props);

    return (<div className="prof-card-cont">

        <div className="prof-card-img">
              <img src={props.imageUrl}></img>
        </div>

        <div className="prof-details-cont">
            <div className='details-cont'>
            <h1>{props.books.bookName}</h1>
            
            <p> {props.books.bookDesc}</p>
            <h3>Price = {props.books.bookPrice}</h3>
            <h4>InStock = {props.books.stock}</h4>
            </div>
            <div>
                <button type="button">Delete</button>
                <button type="button">Edit</button>
            </div>
        </div>

    </div>)

}

export default ProfileCards;
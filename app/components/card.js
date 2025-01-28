export default  function Card({ title, description, image, flavor, weight, price }) {
  return (
    <>
        <div className="card glass w-96">
          <figure>
            <img src={image} alt={title}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>Favor : {flavor}</p>
            <p>{weight} g.</p>
            <div className="card-actions justify-between items-baseline">
              <p>{price} $</p>
              <button 
              className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
    </>
  );
}

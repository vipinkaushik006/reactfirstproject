function Card() {
    let title = "Vipin"
    let count = 2
    let items = [{title:"Vipin",paraa:"hello is your class name"},{title:"chintu",para:"chintu is your name"}]
  return (
    
    <>
    {items.map((items,index)=>(
    
        
      <div className="card" style={{ width: "18rem" }}>
  <img
    src="https://cdn-icons-png.flaticon.com/128/16743/16743094.png"
    className="card-img-top"
    alt="..."
  />
  <div className="card-body">
    <h5 className="card-title">{items.title}</h5>
    <p className="card-text">
      my name is vipin Kaushik
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
    ))}
    </>
  );
}
export default Card;

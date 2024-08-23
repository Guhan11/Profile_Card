
const Header = () => {
  let commonCss="kfcFunction";
  const isLoggedIn=false;
  const greeting = isLoggedIn ?<p> Welcome To KFC </p>:<p>Please LogIn Again!</p>
  const items=['item1','item2','item3','item4'];
  return (
    <>
    <div>
      <h1 className='kfcTitle'>KFC</h1>
        <p className='kfcSlogan'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <p className={commonCss} style={{fontSize:'20px',fontStyle:'italic'}} > Available Chicken Buckets : {10+70}</p>
        {greeting}
        {items.map((item,index)=>(<li key={index}>{item}</li>) )}
    </div>
    </>
  )
}

export default Header

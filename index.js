const element = (
    <div className='bg-container'>
      <h1 className='heading'>Congratulations</h1>
      <div className='card-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          className='image'
        />
        <h1 className='name'>Kiran V</h1>
        <p className='description'>
          Vishnu Institute of computer Education and Technology, Visakhapatnam
        </p>
        <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
          className='image'
        />
      </div>
    </div>
  )
  
  ReactDOM.render(element, document.getElementById('root'))
  
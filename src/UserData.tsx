const UserData = ({quotes}) => {
  return (
    <div className="mb-6">
    	  // access object keys with the dot operator
          <p>Name: {quotes.name}</p>
          <p>Number: {quotes.title}</p>
          <p>Country: {quotes.bio}</p>
          <p>Square of Number: {quotes.sqNum}</p>
        </div>
  )
}
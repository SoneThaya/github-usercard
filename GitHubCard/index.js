/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:


<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cardEntryPoint = document.querySelector('.cards')

function myProfile({ cardPic, userName, myName, locationData, githubLink, followersCount, followingsCount }) {
  const card = document.createElement('div')
  const cardImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardH3 = document.createElement('h3')
  const usernameP = document.createElement('p')
  const locationP = document.createElement('p')
  const profileP = document.createElement('p')
  const profileAnchor = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

  card.appendChild(cardImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardH3)
  cardInfo.appendChild(usernameP)
  cardInfo.appendChild(locationP)
  cardInfo.appendChild(profileP)
  profileP.appendChild(profileAnchor)
  cardInfo.appendChild(followersP)
  cardInfo.appendChild(followingP)
  cardInfo.appendChild(bioP)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardH3.classList.add('name')
  usernameP.classList.add('username')

  cardImage.src = cardPic
  cardH3.textContent = userName
  usernameP.textContent = myName
  locationP.textContent = locationData
  profileAnchor.textContent = 'My Page'
  // profileAnchor.href = githubLink
  
  profileP.innerHTML = `Profile: <a href="${githubLink}">My Page</a>`
  followersP.textContent = `Followers: ${followersCount}`
  followingP.textContent = `Following: ${followingsCount}`
  // console.log(card)
  return card
  
}

axios.get('https://api.github.com/users/sonethaya')
  .then(response => {
    
    const cardPic = response.data.avatar_url
    const userName = response.data.login
    const myName = response.data.name

    const locationData = response.data.location
    const followersCount = response.data.followers
    const followingsCount = response.data.following
    const githubLink = response.data.html_url

    const profileCard = myProfile({ cardPic, userName, myName, locationData, githubLink, followersCount, followingsCount })
    
    cardEntryPoint.appendChild(profileCard)
  })
  .catch(error => {

  })

  const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
  ];
  

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(
      response => {
        console.log(response)
        const cardPic = response.data.avatar_url
        const userName = response.data.login
        const myName = response.data.name

        const locationData = response.data.location
        const followersCount = response.data.followers
        const followingsCount = response.data.following
        const githubLink = response.data.html_url

        const profileCard = myProfile({ cardPic, userName, myName, locationData, githubLink, followersCount, followingsCount })
        
        cardEntryPoint.appendChild(profileCard)
      }
    )
})
  // .catch(
  //   error => {
  //     console.log("error")
  //   }
  // )

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

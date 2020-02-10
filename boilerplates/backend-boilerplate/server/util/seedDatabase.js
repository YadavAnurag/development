const 
  User = require('../api/user/userModel'),
  Category = require('../api/category/categoryModel')


// const prevData = { 
//   names: ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Steve", "Thomas", "Tim","Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ]
// }

const userData = { 
  usernames: ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward"],
  state: [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Pondicherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttaranchal',
    'Uttar Pradesh',
    'West Bengal' 
  ],
  city: ['Agartala', 'Agra', 'Agumbe', 'Ahmedabad', 'Aizawl', 'Ajmer', 'Alappuzha Beach', 'Allahabad', 'Alleppey', 'Almora', 'Amarnath', 'Amritsar', 'Anantagir', 'Andaman and Nicobar Islands', 'Araku valley', 'Aurangabad', 'Ayodhya', 'Badrinath', 'Bangalore', 'Baroda', 'Bastar', 'Bhagalpur', 'Bhilai', 'Bhimtal', 'Bhopal', 'Bhubaneswar', 'Bhuj', 'Bidar', 'Bilaspur', 'Bodh Gaya', 'Calicut', 'Chail', 'Chamba', 'Chandigarh', 'Chennai', 'Chennai Beaches', 'Cherai', 'Cherrapunji', 'Chidambaram', 'Chikhaldara Hills', 'Chopta', 'Coimbatore', 'Coonoor', 'Coorg', 'Corbett National Park', 'Cotigao Wild Life Sanctuary', 'Cuttack', 'Dadra and Nagar Haveli', 'Dalhousie', 'Daman and Diu', 'Darjeeling', 'Dehradun', 'Delhi', 'Devikulam', 'Dhanaulti', 'Dharamashala', 'Dindigul', 'Dudhwa National Park', 'Dwaraka', 'Faridabad', 'Gandhinagar', 'Gangotri', 'Gangtok', 'Gir Wildlife Sanctuary', 'Goa', 'Great Himalayan National Park', 'Gulmarg', 'Gurgaon', 'Guruvayoor', 'Guwahati', 'Gwalior', 'Hampi', 'Haridwar', 'Hogenakkal', 'Horsley Hills', 'Hyderabad', 'Idukki', 'Imphal', 'Indore', 'Itangar', 'Jabalpur', 'Jaipur', 'Jaisalmer', 'Jalandhar', 'Jammu', 'Jamshedpur', 'Jodhpur', 'Kanchipuram', 'Kanha National Park', 'Kanpur', 'Kanyakumari', 'Kargil', 'Karwar', 'Kausani', 'Kedarnath', 'Keoladeoghana National Park', 'Khajuraho', 'Kochi', 'Kodaikanal', 'Kolkata', 'Kollam', 'Konark', 'Kotagiri', 'Kottakkal and Ayurveda', 'Kovalam', 'Kovalam and Ayurveda', 'Kudremukh', 'Kullu', 'Kumaon', 'Kumarakom', 'Kumarakom and Ayurveda', 'Kumarakom Bird Sanctuary', 'Kurukshetra', 'Lakshadweep', 'Lucknow', 'Ludhiana', 'Madurai', 'Mahabalipuram', 'Malpe Beach', 'Manas National Park', 'Mangalore', 'Maravanthe Beach', 'Margoa', 'Mount Abu', 'Mumbai', 'Munnar', 'Mussoorie', 'Mysore', 'Nahsik', 'Nalanda', 'Nanda Devi National Park', 'Nandi Hills', 'Netravali Wild Life Sanctuary', 'Ooty', 'Orchha', 'Pahalgam', 'Palakkad', 'Panchgani', 'Patna', 'Patnitop', 'Pattadakkal', 'Periyar Wildlife Sanctuary', 'Pithoragarh', 'Pondicherry', 'Pune', 'Puri', 'Pushkar', 'Raipur', 'Rajaji National Park', 'Rajgir', 'Rameshwaram', 'Ranchi', 'Ranganthittu Bird Sanctuary', 'Ranikhet', 'Ranthambore', 'Rishikesh', 'Rourkela', 'Sanchi', 'Saputara', 'Sariska Wildlife Sanctuary', 'Shillong', 'Shimla', 'Sohna_Hills', 'Srinagar', 'Sunderbans', 'Surat', 'Tezpur', 'Thanjavur', 'Thiruvananthapuram', 'Thrissur', 'Tirunelveli', 'Tirupati', 'Trichy', 'Udaipur', 'Ujjain', 'Vaishali', 'Valley of Flowers', 'Varanasi', 'Varkala and Ayurveda', 'Vijayawada', 'Vishakhapatnam', 'Vrindhavan', 'Warangal', 'Wayanad', 'Wayanad Wildlife Sanctuary', 'Yercaud', 'Zanskar'],
  addressText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quia tempora soluta nisi, provident.',
  streetAddress: 'This is my streetAddress',
}

const categoryData = {
  categories: [
    {name: 'Men', key: 'MEN'},
    {name: 'Women', key: 'WMN'},
    {name: 'Electronics', key: 'ELE'},
    {name: 'TVs & Appliances', key: 'TVA'},
    {name: 'Home & Furniture', key: 'HFN'},
    {name: 'Sports, Books & More', key: 'SPB'}
  ],
  categoryDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
}

const 
  users = [],  
  categories = []

userData.usernames.map((username) =>{
  const user = {}

  user.name = username.trim() 
  user.email = username.toLocaleLowerCase()+'@gmail.com'
  let num = ''
  while(num.length!=10){
    num += Math.floor(10*Math.random())
  }
  user.contactNumber = num
  user.password =  username.trim()

  userAddress = {}
  let index = Math.floor(Math.random()*(userData.state.length))
  userAddress.state = userData.state[index]

  index = Math.floor(Math.random()*(userData.city.length))
  userAddress.city = userData.city[index]

  let zip = ''
  while(zip.length!=6){
    zip += Math.floor(10*Math.random())
  }
  userAddress.zipCode = zip
  userAddress.addressText = userData.addressText
  userAddress.streetAddress = userData.streetAddress
  user.address = userAddress
  users.push(user)
})

generateDate = ()=>{
  tempDate = new Date(+(new Date()) - Math.ceil(Math.random()*60*60*24*10000000))
  while(!(tempDate instanceof Date && !isNaN(tempDate))){
    tempDate = new Date(+(new Date()) - Math.ceil(Math.random()*60*60*24*10000000))
    console.log('wrong')
  }
  return tempDate
}

categoryData.categories.map((category)=>{
  categoryObj = {
    images: [], 
    categoryStatus: {
      productCount: 0, 
      createdAt: new Date(),
      lastModifiedAt: new Date()
    }
  }
  categoryObj.name = category.name.trim()
  categoryObj.key = category.key.trim()
  categoryObj.description = categoryData.categoryDescription.trim()
  categoryObj.images.push('https://picsum.photos/400/200')
  categoryObj.categoryStatus.productCount = Math.ceil(Math.random()*100)
  categoryObj.categoryStatus.createdAt = generateDate()
  categoryObj.categoryStatus.lastModifiedAt = generateDate()
  categories.push(categoryObj)
})


const createDoc = (model, doc)=>{
  return new Promise((resolve, reject)=>{
    new model(doc).save((err, saved)=>{
      return err? reject(err): resolve(saved)
    })
  })
}
const cleanDB = ()=>{
  process.stdout.write('Cleaning database...')
  let cleanPromises = [User, Category]
    .map((model)=>{
      return model.deleteMany({}).exec()
    })
  
  console.log('...done')
  return Promise.all(cleanPromises)
}

const createUsers = (users)=>{
  process.stdout.write('Seeding users...')
  let promises = users.map((user)=>{
    return createDoc(User, user)
  })
  return Promise.all(promises)
    .then(
      console.log(`...${users.length} users seeded`)
    )
}

const createCategories = (categories)=>{
  process.stdout.write('Seeding categories...')
  let promises = categories.map((category)=>{
    return createDoc(Category, category)
  })
  return Promise.all(promises)
    .then(
      console.log(`...${categories.length} category seeded`)
    )
}

cleanDB()
  .then(createUsers(users))
  .then(createCategories(categories))
  
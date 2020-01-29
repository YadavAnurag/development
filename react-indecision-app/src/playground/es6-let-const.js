const obj = {
  options : []
}

const onFormSubmit = (e)=>{
  e.preventDefault()
  let value = e.target.elements.option.value
  
  if(value){
    obj.options.push(value)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const onMakeDecision = ()=>{
  const randomNum = Math.floor(Math.random() * obj.options.length)
  const option = obj.options[randomNum]
  alert(option)
}

const removeAll = ()=>{
  obj.options = []
  renderApp()
}

const renderApp = ()=>{
  const template = (
    <div>
      <h2>Anurag</h2>
      <p>Put your life in hands of a computer</p>
      <p>{obj.options.length>0 ? 'Here is your options' : 'No options'}</p>
      <button disabled={obj.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          obj.options.map((option)=>{
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name='option' />
        <button>Add Option</button>
      </form>
    </div>
  )

  const appRoot = document.getElementById('app')
  ReactDOM.render(template, appRoot)
}
renderApp()

let visibility = false
let visibilityText = 'Here goes your details...'
const onVisibilityClick = ()=> {
  visibility = !visibility
  renderAppTwo()
}

const renderAppTwo = ()=>{
  const templateTwo = (
    <div>
      <h2>Visibility Toggle</h2>
      <button onClick={onVisibilityClick} >{visibility ? 'Show Details' : 'Hide Details'}</button>
      <p>{!visibility ? 'Here goes your details' : ''}</p>
    </div>
  )
  
  const appRootTwo = document.getElementById('appTwo')
  ReactDOM.render(templateTwo, appRootTwo)  
}
renderAppTwo()

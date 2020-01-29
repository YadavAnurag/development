const onVisibilityClick = (e)=> {
  const target = e.target.elements.button.value
  console.log(target)
  renderAppTwo()
}

const renderAppTwo = ()=>{
  const templateTwo = ()=> {
    <div>
      <h2>Visibility Toggle</h2>
      <button onClick={onVisibilityClick}>{}</button>
    </div>
  }
  
  const appRootTwo = document.getElementById('appTwo')
  ReactDOM.render(templateTwo, appRootTwo)  
}

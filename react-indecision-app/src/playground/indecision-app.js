
const app = {
  title: 'MMMUT',
  subTitle: 'Tagore Bhawan'
}
let template = (<div>
  <h1>{app.title}</h1>
  <p>{app.subTitle}</p>
  <ul>
    <li>First Info</li>
    <li>Second Info</li>
  </ul>
</div>)

let templateTwo = (
  <div>
    <h1>Anurag</h1>
    <p>Age: 22</p>
    <p>Location: Gorakhpur</p>
  </div>
)

let appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)


let appRootTwo = document.getElementById('appTwo')
ReactDOM.render(templateTwo, appTwo)

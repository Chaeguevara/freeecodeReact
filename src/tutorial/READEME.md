# Topics in each tutorial

## [useState](./1-useState)

### ```useState```[file](./1-useState/setup/2-useState-basics.js)

```javascript
const [varName, setVarName] = useState("default value");
```

위의 패턴을 사용한다

### ```useStateArray```[file](./1-useState/setup/3-useState-array.js). Map 및 filter를 이용해서 array를 parse하거나 filtering 함

  ```javascript
{people.map((person) => {
    const {id, name} = person; // person -> id,name
    return(
        <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={ () => removeItem(id)}>remove</button>
        </div>  
        );
    })}
```

```javascript
const removeItem = (id) =>{
  let newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople); //functional approach로 바꾸면>..?

}
```

### [useStateObject](./1-useState/setup/4-useState-object.js)

> object를 state에 이용하는 방법

Object `useState` 이용해서 정의

```javascript
const [person, setPerson]= useState({
  name: "peter",
  age: 24,
  message: "random message"
});
```

Object `setState`로 변경

```javascript
setPerson({...person, message:"hello world"});
```

### [useStateCounter](./1-useState/setup/5-useState-counter.js)

> 바로 이전 state를 받아 update

```javascript
const complexIncrease = () => {
  setTimeout(function,time);
};


const complexIncrease = () => {
  setTimeout(() => {
      setValue((prevState) => {
          return prevState + 1;
          });
      },2000);
};
```

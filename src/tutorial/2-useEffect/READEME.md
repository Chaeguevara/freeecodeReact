# useEffect basic

## 작동방식

> 모든 변경사항에 대해 작동하거나 특정 값이 변경될때(dependency) 작동

### 모든 값에 대해서 변경될떄

```javascript
const [value, setValue] = useState(0);

useEffect(() => {
      document.title = `New Message(${value})`
    })
```

### 특정값(dependency)에 따라 변경되는 경우

> dependency안에 여러 값을 넣을 수 있는듯

```javascript
const [value, setValue] = useState(0);

useEffect(() => {
    if (value > 0 ){
      document.title = `New Message(${value})`
      }
    },[value])
  
```

## useEffectCleanup

> useEffect로 특정 API 사용시, mount가 계속 쌓이는 것을 방지

***대표 패턴***

```javascript
useEffect(()=>{
    API.subscribe()
    return function clenaup(){
      API.unsubscribe()
    }
})
```

```javascript
useEffect(()=>{
    API.subscribe()
    return () =>{ 
      API.unsubscribe()
    }
})
```

## useEffectFecthData

> Infinite loop 방지 방법

 `useEffect` 안에서 `setState`를 사용하면 다시 `render`를 작동시킴. `render`를 하면 다시 `useEffect`
 ... 반복됨. 여기선 `empty dependency` 를 이용해 방지함. 즉 최초에 한번만 작동하도록 함

```javascript

// empty array로 초기화
const [users, setUsers] = useState([]);

const getUsers = async () => {
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users);
};

useEffect(() => {
   getUsers();
    },[])
```

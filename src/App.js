import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Javascript 2', body: 'Description'},
        {id:3, title: 'Javascript 3', body: 'Description'},
    ]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const bodyInputRef = useRef(); для неуправляемого компонента

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }

        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
        // console.log(bodyInputRef.current.value); для неуправляемого компонента
    }

    return (
      <div className="App">
          <form>
              {/*Управляемый компонент*/}
              <MyInput
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  type="text"
                  placeholder={"Название поста"}
              />

              <MyInput
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  type="text"
                  placeholder={"Описание поста"}
              />

              {/*Неуперавляемый\Неконтролируемый компонент*/
                  // <MyInput
                  //     ref={bodyInputRef}
                  //     type="text"
                  //     placeholder={"Описание поста"}
                  // />
              }
              <MyButton onClick={addNewPost}>Создать пост</MyButton>
          </form>
        <PostList posts={posts} title={"Список постов 1"}/>
      </div>
    );
}

export default App;

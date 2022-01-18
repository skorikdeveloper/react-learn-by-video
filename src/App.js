import './styles/App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Javascript 2', body: 'Description'},
        {id:3, title: 'Javascript 3', body: 'Description'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
      <div className="App">
        <PostForm create={createPost}/>
        <div>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                defaultValue={'Сортировка по'}
            />
            <select>
                <option value="value1">По названию</option>
                <option value="value1">По описанию</option>
            </select>
        </div>
        {posts.length !== 0
          ?
          <PostList posts={posts} title={"Список постов 1"} remove={removePost}/>
          :
          <h1 style={{textAlign: 'center'}}>
              Посты не найдены
          </h1>
        }
      </div>
    );
}

export default App;

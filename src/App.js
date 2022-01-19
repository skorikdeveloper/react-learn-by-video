import './styles/App.css';
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostItem from "./components/PostItem";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Azbuka', body: 'Vasyya'},
        {id:3, title: 'Phyton', body: 'Zetindex'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})

    // useMemo кеширует данные пока состояние-зависимости не изменятся
    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }

        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        if(filter.query) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
        }
        return sortedPosts
    }, [filter.query, sortedPosts])

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
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {sortedAndSearchedPosts.length !== 0
          ?
          <PostList posts={sortedAndSearchedPosts} title={"Список постов 1"} remove={removePost}/>
          :
          <h1 style={{textAlign: 'center'}}>
              Посты не найдены
          </h1>
        }
      </div>
    );
}

export default App;

import {useEffect, useRef, useState} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()
    const observer = useRef()
    // console.log(lastElement);
    console.log(observer);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        var callback = function(entries, observer) {
            console.log(entries);
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
                <h1>Произошла ошибка: ${postError}</h1>
            }

            <PostList posts={sortedAndSearchedPosts} title={"Список постов 1"} remove={removePost}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>

            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            }

            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />

        </div>
    );
}

export default Posts;

import Gallery from "./component/Gallery";
import { Profile } from "./component/Profile";
import TodoList from "./component/TodoList";
import Avatar from "./component/Avatar";

export default function App() {
  return (
    <>
      <section>
        <h1>Profile</h1>
        <Profile />
      </section>
      <section>
        <h1>Gallery</h1>
        <Gallery />
      </section>
      <section>
        <h1>TodoList</h1>
        <TodoList />
      </section>
      <section>
        <h1>Avatar</h1>
        <Avatar />
      </section>
    </>
  );
}

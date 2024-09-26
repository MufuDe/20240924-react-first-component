import { getImageUrl } from "../js/utils.js";
import { people } from "../js/data.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "化学家");
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}因{person.accomplishment}而闻名世界
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

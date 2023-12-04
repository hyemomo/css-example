import React, { useReducer, useState } from "react";
import personReducer from './reducer/person-reducer';
export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch]= useReducer(personReducer, initialPerson)
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     //  if(mentor.name === prev)  {mentor.name = current}
    //     if (mentor.name === prev) return { ...mentor, name:  current  };
    //     return mentor

    //   }),
    //  }));
    //아래는 다시 연습한 코드
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     if (mentor.name === prev) {
    //       return { ...mentor, name: current };
    //     } else {
    //       return mentor;
    //     }
    //   }),
    // }));
    dispatch({type:'updated',prev, current})
  };
  const handleAdd = () => {
    const name = prompt(`새로운 멘토의 이름은 무엇인가요?`);
    const title = prompt(`새로운 멘토의 타이틀은 무엇인가요?`);
    if (name !== "" && title !== "") {
      // const a = person.mentors;
      // a.push({ name: newName, title: newTitle });

      // setPerson((person) => ({
      //   ...person,
      //   mentors: [...person.mentors, { name, title }],
      // }));
      dispatch({type:'added', name, title})
    }
  };
  const handleDelete = () => {
    const name = prompt("어떤 멘토를 삭제하고 싶나요?");

    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.filter((mentor) => mentor.name !== name),
    // }));
    dispatch({type:'deleted', name})
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>새로운 멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}
const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

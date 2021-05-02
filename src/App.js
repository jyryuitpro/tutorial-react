import React,{useRef} from 'react';
import UserList from "./UserList";

function App() {
    const users = [
        {
            id: 1,
            username: 'jyryuitpro',
            email: 'jy.ryu.itpro@gmail.com',
        },
        {
            id: 2,
            username: 'test01',
            email: 'test01@gmail.com',
        },
        {
            id: 3,
            username: 'test02',
            email: 'test02@gmail.com',
        },
    ];

    const nextId = useRef(4);

    const onCreate = () => {
        console.log(nextId.current);
        nextId.current += 1;
    };

    return (
        <UserList users={users}/>
    );
}

export default App;

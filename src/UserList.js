import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
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

    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id}/>))
            }
        </div>
    );
}

export default UserList;
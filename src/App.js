import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import data from './users.json'

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = React.useState(data.data)
  const [invites, setInvites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  // const [isLoading, setLoading] = React.useState(true)
  const [success, setSucces] = React.useState(false)


  const onClickSendInvite = () => {
    setSucces(true)
  }

  const onCLickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="App">
      {
        success ? (
          <Success count={invites.length} />
        ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users}
            invites={invites}
            onCLickInvite={onCLickInvite}
            onClickSendInvite={onClickSendInvite}
          />
        )
      }

    </div>
  );
}

export default App;

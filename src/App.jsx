import userData from "./components/Profile/userData.json"
import Profile from "./components/Profile/Profile"
import friends from "./components/FriendList/friends.json"
import FriendList from "./components/FriendList/FriendList"
import transactions from "./components/TransactionHistory/transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

export default function App (){
    return (
        <>
         <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends ={friends} />
      <TransactionHistory items={transactions} />
        </>

        
        
    )
}
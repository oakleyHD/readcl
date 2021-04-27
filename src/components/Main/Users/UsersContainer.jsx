import { connect } from "react-redux"
import { setUsers } from "../../../redux/usersReducer"
import Userspg from "./Userspg"

const mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users
    }
}


const usersContainer = connect(mapStateToProps, {setUsers})(Userspg);

export default usersContainer;
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Profile from "./Profile"
import { setUserProfileAC } from "../../../redux/profileReducer"
import { useEffect } from "react"
import axios from "axios"


const ProfileContainer = (props)=>{
    useEffect(()=>{
        // console.log(props);
        let userId = props.match.params.userId;
        if(!userId) userId = 1; 
        axios.get(`https://jsonplaceholder.typicode.com/photos/${userId}`)
        .then(
            (response)=>{
                props.setUserProfileAC(response.data);
                
            }

        )

        
    },[])
    return(
        <Profile profile={props.profile}/>

    )
}

let mapStateToProps = (state)=>{
    return{
        profile: state.profilePage.profile,
    }
}

let withURL = withRouter(ProfileContainer);

export default connect(mapStateToProps,  { setUserProfileAC } )(withURL)
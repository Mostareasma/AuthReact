import {OutlineLogoutIcon} from "../../icons";

export default function Logout (){
    const  logout=(e) => {
        localStorage.removeItem("AccessToken");
        window.location.reload();

    }
    return (
        <div  className='text-danger'  onClick={logout}>
            Logout
        </div>
    );
}

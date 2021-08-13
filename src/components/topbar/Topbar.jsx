import './topbar.scss'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import Avatar from '../../assets/img/moi.jpg'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__left">
                    <span className="logo">DashGui</span>
                </div>
                <div className="topbar__right">
                    <div className="topbar__iconsContainer">
                        <NotificationsNone/>
                        <span className="badge">2</span>
                    </div>
                    <div className="topbar__iconsContainer">
                        <Language/>
                        <span className="badge">2</span>
                    </div>
                    <div className="topbar__iconsContainer">
                        <Settings/>
                    </div>
                    <img className="avatar" src={Avatar} alt="avatar"></img>
                </div>
            </div>
        </div>
    )
}

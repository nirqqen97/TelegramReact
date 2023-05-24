import './Header.css';
import { Button } from "../Button/Button";
import { useTelegram } from '../../hooks/useTelegram';



export const Header = ( ) => {
    const {onClose, user, onToggleButton} = useTelegram()

    return ( 
        <div className="header">
             <Button onClick = {onToggleButton}> toggle</Button>
            <Button onClick = {onClose}> Закрыть</Button>
            <span className="username">{user?.username}</span>
        </div> 
    )

}

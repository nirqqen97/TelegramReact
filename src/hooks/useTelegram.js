const tg = window.Telegram.WebApp

export const useTelegram = ( ) => {
    const onClose = () => {
        tg.close()
    }

    // const onToggleButton = () => {
    //     if (tg.mainButton.isVisible) {
    //         tg.mainButton.hide()
            
    //     }
    //     else{
    //         tg.mainButton.show()

    //     }
    // }
    const onToggleButton = () => {
        tg.mainButton.text('Button')
        tg.mainButton.show();
    }
    return {
        onToggleButton,
        onClose,
        tg,
        user: tg.initDataUnsafe?.user

    }

}
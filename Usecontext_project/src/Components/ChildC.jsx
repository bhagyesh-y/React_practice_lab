import React, { useContext } from 'react'
import { Themecontext, UserContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
    const { theme, setTheme } = useContext(Themecontext);
    function handleClick() {
        if (theme == 'light')
            setTheme("dark")
        else
            setTheme('light')

    }

    return (
        <>

            {user ? <h1> {user} </h1> : <h1> No User found</h1>}
            <div>

                <button onClick={handleClick}>
                    change theme
                </button>
            </div>
        </>
    )
}

export default ChildC
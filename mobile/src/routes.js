import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Maps from './pages/Maps'

const Routes = createAppContainer(

    createSwitchNavigator({
        Home,
        Restaurant,
        Maps,
    })
)

export default Routes
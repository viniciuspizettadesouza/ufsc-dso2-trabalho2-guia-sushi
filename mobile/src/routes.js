import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Routes = createAppContainer(

    createSwitchNavigator({
        Home,
        Restaurant,
    })
)

export default Routes
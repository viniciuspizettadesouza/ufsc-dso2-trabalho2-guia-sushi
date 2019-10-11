import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import List from './pages/List'
import Restaurant from './pages/Restaurant'

const Routes = createAppContainer(

    createSwitchNavigator({
        List,
        Restaurant
    })
)

export default Routes
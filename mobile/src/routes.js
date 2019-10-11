import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import List from './pages/List'

const Routes = createAppContainer(

    createSwitchNavigator({
        List
    })
)

export default Routes
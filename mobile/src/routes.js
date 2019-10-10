import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Book from './pages/Book'
import List from './pages/List'

const Routes = createAppContainer(

    createSwitchNavigator({
        List,
        Book
    })
)

export default Routes
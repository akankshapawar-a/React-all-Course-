import { configureStore } from '@reduxjs/toolkit'
import incdecReducer from './reducers/index'

export default configureStore({// reduex method
    reducer:{
        number:incdecReducer   //reducer passes
    }
//} , window._REDEX_DEVTOOLS_EXTENSION_ && window._REDEX_DEVTOOLS_EXTENSION_)
})
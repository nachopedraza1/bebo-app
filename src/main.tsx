import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { AppTheme } from './theme/AppTheme'
import { App } from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <BrowserRouter>
      <Provider store={store}>
        <AppTheme>
          <App />
        </AppTheme>
      </Provider>
    </BrowserRouter>

)

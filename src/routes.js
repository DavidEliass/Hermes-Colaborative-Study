import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './Pages/App'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={App} />
        </BrowserRouter>
    )
}

export default Routes;
/* TODO:
    1. Components - Presentational. App.js wrapping the containers.
    2. Containers - Smart. Wrap presentational counterpart components with logic.
    3. Tests.
    4. React-router
        4a. Reset function.
        4b. Automate function.
        4c. Read Lore function.
    5. Process user input (through react-redux UI) to "Post".
    6. Result page.
    7. Integrate completed background SCSS.
    8. Integration tests.
    9. Build.

    Focus: Main Section.
    Off-focus: Header.

    Component is React.
    Container is Redux-attached React. Like oxidised React.
*/
/*
import React from 'react'

const App = () => (
    <div id='app-body'>
        Header
        MainSection
        Footer
        <p>1. Add Header element with heading and routing.</p>
        <p>2. Add 'container' for the main-container. Make it decide to make
        next planet selection flex visible when previous flex is complete(vehicle).
        Do it total 4 times. Consecutive smart decisions regarding vehicles'
        range viability to planet distance deciding their visibility. i.e. 
        if range &lt distance to planet.</p>
    </div>
)

export default App
*/

import React from 'react'
import MainSection from './MainSection'

const App = () => (
    <div>
        <MainSection />
    </div>
)

export default App
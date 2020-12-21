/* TODO:
    4. React-router
        4a. Reset function.
        4b. Automate function.
        4c. Read Lore function.
    6. Result page.
    7. Integrate completed background SCSS.
    8. Integration tests.
    9. Build.

    Focus: Main Section.
    Off-focus: Header.

    Component is React.
    Container is Redux-attached React. Like oxidised React.

    Recycle Bin:
    <header>
      <h1>FINDING FALCONE</h1>
      <div id="navigation">
        <ul id="nav-list">
          <li class="nav-link">Reset</li>
          <li class="nav-link">Randomize</li>
          <li class="nav-link">Read Lore</li>
        </ul>
      </div>
    </header>
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import MainSection from './pages/MainSection';
import ReadLore from './pages/ReadLore';
import Result from './pages/Result';
import {
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
} from "react-router-dom";
import { resetPlanetList } from '../actions/selectPlanets.js';
import { resetVehicleList } from '../actions/selectVehicles.js';
import './style.scss';

const App = () => {
    
    let dispatch = useDispatch();
    let location = useLocation();

    const handleReset = (event) => {
        if(location.pathname === '/') {
            dispatch(resetPlanetList());
            dispatch(resetVehicleList());
        }
    }

    return(
        <div className='app-container'>
            <header>
                <h1>FINDING FALCONE</h1>
                <nav id='navigation'>
                    <ul id='nav-list'>
                        <li className='nav-link'>
                            <Link to='/reset' onClick={handleReset}>Reset</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/read'>Read Lore</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="prologue-container">
                <p>This is a game of randomness</p>
                <div id='fractal-container'>
                    <img src="/images/background/fractal.png" alt="Black Hole" id='blackhole' />
                </div>
            </div>
            <div id='main-container'>
                <Switch>
                    <Route exact path='/'>
                        <MainSection />
                    </Route>
                    <Route path='/reset'>
                        <Redirect to='/' />
                    </Route>
                    <Route path='/read'>
                        <ReadLore />
                    </Route>
                    <Route path='/result' component={Result} />
                </Switch>
            </div>
            <footer id='footer'>
                Copyright © Geektrust 2020. Original Fractal Image by <a href="https://pixabay.com/users/insspirito-1851261/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1280110">Garik Barseghyan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1280110">Pixabay</a>.
            </footer>
        </div>
    );
}

export default App
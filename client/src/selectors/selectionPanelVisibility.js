import { createSelector } from 'reselect';

const planets = state => state.planetList.planetArray

const selectionPanelVisibility = createSelector(
    [planets],
    (planetArray) => {
        var selectedPlanets = planetArray.reduce((count, planet) => {
            if(planet.selected) {
                count++;
            }
            return count;
        }, 0);

        var selection = {};

        switch(selectedPlanets) {
            case 0:
                selection = {
                    second: "none",
                    third: "none",
                    fourth: "none",
                    submitButton: true
                }
                break;
            case 1:
                selection = {
                    second: "flex",
                    third: "none",
                    fourth: "none",
                    submitButton: true
                }
                break;
            case 2:
                selection = {
                    second: "flex",
                    third: "flex",
                    fourth: "none",
                    submitButton: true
                }
                break;
            case 3:
                selection = {
                    second: "flex",
                    third: "flex",
                    fourth: "flex",
                    submitButton: true
                }
                break;
            case 4:
                selection = {
                    second: "flex",
                    third: "flex",
                    fourth: "flex",
                    submitButton: false
                }
                break;
            default:
                selection = {
                    second: "none",
                    third: "none",
                    fourth: "none",
                    submitButton: true
                }
                break;
        }

        return selection;
    }
);

export default selectionPanelVisibility;
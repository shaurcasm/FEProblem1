/*
import selector from './selectionPanelVisibility';

var state = {
    planetList: {
        planetArray: [
            { name: 'Mercury', selected: false },
            { name: 'Venus', selected: false },
            { name: 'Earth', selected: false },
            { name: 'Mars', selected: false },
            { name: 'Jupiter', selected: false }
        ]
    }
};

const selectForMe = (howMany, tempState) => {
    for(let i = 0; i < howMany; i++) {
        tempState.planetList.planetArray[i].selected = true;
    }

    console.log(JSON.stringify(tempState));

    return tempState;
} 

 describe('Panel Visibility Selector', () => {

    test('When No Planet is Selected', () => {

        var expectedVisibility = {
            second: 'none',
            third: 'none',
            fourth: 'none',
            submitButton: true
        };
        expect(selector(state)).toEqual(expectedVisibility);
    });

    test('When One Planet is Selected', () => {

        var expectedVisibility = {
            second: 'flex',
            third: 'none',
            fourth: 'none',
            submitButton: true
        };

        state.planetList.planetArray[0].selected = true;
        
        expect(selector(state)).toEqual(expectedVisibility);
    });

    test('When Two Planets are Selected', () => {

        var expectedVisibility = {
            second: 'flex',
            third: 'flex',
            fourth: 'none',
            submitButton: true
        };
        
        expect(selector(selectForMe(2, testState))).toEqual(expectedVisibility);
    });

    test('When Three Planets are Selected', () => {

        var expectedVisibility = {
            second: 'flex',
            third: 'flex',
            fourth: 'flex',
            submitButton: true
        };
        
        expect(selector(selectForMe(3, testState))).toEqual(expectedVisibility);
    });

    test('When Four Planets are Selected', () => {

        var expectedVisibility = {
            second: 'flex',
            third: 'flex',
            fourth: 'flex',
            submitButton: false
        };
        
        expect(selector(selectForMe(4, testState))).toEqual(expectedVisibility);
    });

    test('When Five Planets are Selected', () => {

        var expectedVisibility = {
            second: 'none',
            third: 'none',
            fourth: 'none',
            submitButton: true
        };
        
        expect(selector(selectForMe(5, testState))).toEqual(expectedVisibility);
    });
 })
 */
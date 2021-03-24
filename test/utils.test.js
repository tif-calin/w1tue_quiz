// IMPORT MODULES under test here:
import { isYes } from '../utils.js';

const test = QUnit.test;

test('isYes: yes values', (expect) => {
    // Set up your arguments and expectations
    const expected = true;
    
    // Call the function you're testing and set the result to a const
    const actual1 = isYes('yes');
    const actual2 = isYes('Yeah!');
    const actual3 = isYes('   yes');

    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});

// test no values
test('isYes: testing no values', (expect) => {
    // Set up your arguments and expectations
    const expected = false;
    
    // Call the function you're testing and set the result to a const
    const actual1 = isYes('no');
    const actual2 = isYes('Nah');
    const actual3 = isYes('   nu-uh!');

    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});

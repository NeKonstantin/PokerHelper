module.exports = {
    firstCombination: {
        "hand": [
            {
                "weight": "14",
                "suit": "a"
            },
            {
                "weight": "1",
                "suit": "b"
            }
        ],
        "table": [
            {
                "weight": "12",
                "suit": "a"
            },
            {
                "weight": "11",
                "suit": "a"
            },
            {
                "weight": "13",
                "suit": "a"
            },
            {
                "weight": "11",
                "suit": "d"
            },
            {
                "weight": "10",
                "suit": "a"
            }
        ]
    },

    secondCombination: {
        hand:
        [{ "weight": "1", "suit": "c" },
        { "weight": "5", "suit": "b" }],
        table:
        [{ "weight": "3", "suit": "d" },
        { "weight": "6", "suit": "d" },
        { "weight": "8", "suit": "d" },
        { "weight": "1", "suit": "c" },
        { "weight": "1", "suit": "d" }],
    },

    thirdCombination: {
        hand: 
        [{ "weight": "1", "suit": "d" },
        { "weight": "4", "suit": "d" }],
        table:
        [{ "weight": "4", "suit": "c" },
        { "weight": "4", "suit": "a" },
        { "weight": "3", "suit": "d" },
        { "weight": "1", "suit": "d" }]
    },
    fourthCombination: {
        hand: 
        [{ "weight": "5", "suit": "a" },
        { "weight": "2", "suit": "a" }],
        table:
        [{ "weight": "1", "suit": "a" },
        { "weight": "5", "suit": "b" },
        { "weight": "1", "suit": "b" }]
    },
    fifthCombination: {
        hand: 
        [{ "weight": "4", "suit": "d" },
        { "weight": "6", "suit": "d" }],
        table:
        [{ "weight": "6", "suit": "c" },
        { "weight": "1", "suit": "c" },
        { "weight": "1", "suit": "a" },
        { "weight": "6", "suit": "b" },
        { "weight": "6", "suit": "a" }]
    },
    // SO: Code Review #11:

    // You have to name all your combinations in terms of test cases which will be tested with it.
    // as I did - non sixth combination but straight
    
    // please, change all your test combinations.
    
    // also, you can split this file by combinations and use these like:

    /*
        const fullHouse = require('./fullHoude.testData.js');
        -//-
        -//-

        const testData = {
            fullHouse,
            pair,
            straight,
            ...
            ...
        };

        module.exports = testData;

    */

    straight: {
        hand: [
            {
                weight: "1",
                suit: "a",
            },
            {
                weight: "2",
                suit: "b",
            },
        ],
        table: [
            {
                weight: "3",
                suit: "a",
            },
            {
                weight: "4",
                suit: "b",
            },
            {
                weight: "5",
                suit: "a",
            },
            {
                weight: "11",
                suit: "b",
            },
            {
                weight: "12",
                suit: "a",
            },
        ],
    },
};
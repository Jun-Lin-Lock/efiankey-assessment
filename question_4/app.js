// Define item tier rarity and VIP ranks
const itemTierRarity = [1, 2, 3, 4, 5]; // 1 = common, 5 = legend
const vipRanks = ['vip1', 'vip2', 'vip3', 'vip4', 'vip5']; // v1 = lowest rank

// Function to generate a random item based on VIP rank
function rollItem(vipRank) {
    let roll = Math.random(); // Generate a random number between 0 and 1
    let maxTierIndex = vipRanks.indexOf(vipRank) + 1; // Determine the maximum tier index based on VIP rank
    let tierProbabilities = itemTierRarity.slice(0, maxTierIndex); // Get the tier probabilities based on VIP rank
    let cumulativeProbability = 0;

    // Calculate cumulative probability for each tier
    for (let i = 0; i < tierProbabilities.length; i++) {
        cumulativeProbability += tierProbabilities[i] / tierProbabilities.reduce((a, b) => a + b, 0); // Normalize probabilities
        if (roll < cumulativeProbability) {
            return i + 1; // Return the tier index (1-indexed)
        }
    }

    // If the roll is greater than all cumulative probabilities, return the highest tier
    return tierProbabilities.length;
}

// Function to simulate item distribution for each VIP rank
function simulateDistribution() {
    let distribution = {};

    // Initialize distribution object
    vipRanks.forEach(rank => {
        distribution[rank] = {};
        itemTierRarity.forEach(tier => {
            distribution[rank][tier] = 0;
        });
    });

    // Roll items for each VIP rank 100 times
    for (let i = 0; i < 100; i++) {
        vipRanks.forEach(rank => {
            let tier = rollItem(rank);
            distribution[rank][tier]++;
        });
    }

    return distribution;
}

// Function to print the item distribution result
function printDistributionResult(distribution) {
    console.log("Array(");
    vipRanks.forEach(rank => {
        console.log(`\t[${rank}] => {`);
        Object.keys(distribution[rank]).forEach(tier => {
            console.log(`\t\t[${tier}] => ${distribution[rank][tier]},`);
        });
        console.log("\t},");
    });
    console.log(")");
}

// Simulate item distribution and print the result
let result = simulateDistribution();
printDistributionResult(result);
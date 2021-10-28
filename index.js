// let backpackItem1 = "stapler";
// let backpackItem2 = "mug";
// let backpackItem3 = "pencil";
// let backpackItem4 = "extra hat";
// let backpackItem5 = "mouse plushie";

// const backpackItems = []
const backpackItems =
[
    "stapler",
    "mug",
    "pencil",
    "extra hat",
    "mouse plushie"
];

if (backpackItems.length === 0)
{
    backpackItems.unshift("stick");
}

console.log(backpackItems, backpackItems.length);
console.log(backpackItems.length + 10);

//array methods

// backpackItems.push("pillow");
// backpackItems.push("saw");

backpackItems.push("pillow", "saw");

backpackItems.splice(2, 1);
// const removedItem = backpackItems.splice(3, 1, "hamster plushie");
// console.log(`I have removed ` + removedItem + `!`);

console.log(`I have removed ` + backpackItems.splice(3, 1, "hamster plushie") + `!`);

backpackItems.pop();

backpackItems.splice(backpackItems.length - 2, 2);

backpackItems.shift();

backpackItems.push("shoes", "shirt", "eggplant");
console.log(backpackItems, backpackItems.length);

const buddyBackpack = backpackItems.slice(1, 3);
console.log(buddyBackpack, buddyBackpack.length);

//for loops and arrays
const randomItem = backpackItems[1];
//console.log(randomItem);

console.log(backpackItems);

for (let i = 0; i < backpackItems.length; i++)
{
    // console.log(typeof i, i);
    //console.log(backpackItems[i]);
    if (backpackItems[i].startsWith('e'))
    {
        console.log(backpackItems[i]);
        backpackItems.splice(i, 1);
    }
}

console.log(backpackItems);
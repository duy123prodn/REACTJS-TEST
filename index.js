// JS.
// a.Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mostFrequent = 1 ;
let most = 0;
let item;
for (let i = 0 ; i < arr1.length; i++)
{
    for(let j = i; j< arr1.length; j++)
    {
        if (arr1[i] == arr1[j])
        {
            most++;
        }
        if(mostFrequent < most)
        {
            mostFrequent = most;
            item = arr1[i];
        }
    }
    most = 0;
}
console.log(`${item} (${mostFrequent} times)`)
// JS.
// b.Write a JavaScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the following books.

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
    ];

var newLibrary = library.map(function(library){
    return 
    {
        author: library.author,
        title : library.title,
        readingStatus : library.readingStatus
    }
});
console.log(newLibrary);




REACT IMMUTABLE


Resources

+ Immutable Object concept --- https://intranet.alxswe.com/rltoken/C34VL1Db887N_zzjmpOU_w

+ Immutable.js Documentation --- https://intranet.alxswe.com/rltoken/oDyg_FOCdEEcLfpNnSMWmg


+ Immutable.js GitHub --- https://intranet.alxswe.com/rltoken/Za6PJtr1M59G7ktu5D_X3g


Learning Objectives

+ At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

+ Immutable objects. Who, what, when, where, and why?

+ How to use the Immutable.js library to bring immutability to Javascript.

+ The differences between List and Map.

+ How to use Merge, Concat, and Deep Merging.

+ What a lazy Seq is.


Requirements

+ Allowed editors: vi, vim, emacs, Visual Studio Code

+ A README.md file, at the root of the folder of the project, is mandatory

+ All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x

+ All of your files should end with a new line.

+ All of your functions must be exported.


Setup

+ Install NodeJS 12.11.x

+ Install npm 6.11.x


Provided files

+ babel.config.js

+ jsconfig.json

+ package.json


Tasks

Below were the files created for this project and their respective functions;

0-fromjs.js --- Copy the necessary config files specified in the description to the root directory of the project and execute npm install.

In a file named 0-fromjs.js, create a function getImmutableObject that accepts object as a parameter and converts it into an immutable Map using fromJS of the Immutable.js library.


1-map.js --- In 1-map.js, modify the function getImmutableObject using Map from Immutable.js.


2-nested.js --- Given the function below, edit it to return the value of the object at the defined path

export default function accessImmutableObject(object, array) {
}

The first argument is a plain object.

The second one is an array containing a list of a path to some key in the object.

The function should return the value of the object at the defined path.


3-list.js --- In file 3-list.js, create these 2 functions:

export function getListObject(array) {
}
export function addElementToList(list, element) {
}


4-mutations.js --- Create & export a constant named map. It should create an Immutable Map with the following object:

 {
     1: 'Liam',
     2: 'Noah',
     3: 'Elijah',
     4: 'Oliver',
     5: 'Jacob',
     6: 'Lucas',
}

Export a second constant named map2. It should use the first map and modify the following values:

Modify the value for the index 2, to Benjamin

Modify the value for the index 4, to Oliver


5-merge.js --- Create a function named concatElements

It accepts two arguments page1 and page2. Both are arrays.

It should return a List containing the values of the two pages.

Create a function named mergeElements.

It accepts two arguments page1 and page2. Both are objects.

It should return a List containing the values of the two pages.

If two values are the same, page2 values should be used.

Requirements:

Use list and map from the Immutable.js library


6-deeply.js --- Create a function named mergeDeeplyElements

It should accept two arguments, page1 and page2. Both are objects.

It should return a List containing the values of the two pages.

If two values are the same, they should combine each other.

Requirements

use Map from immutable.js


7-equality.js --- Create a function named areMapsEqual

It accepts two arguments map1 and map2. Both are Immutable.js Maps.

It should return true if the Maps are equal.

Should return true.

Requirements:

Use is from the immutable.js library


8-seq.js --- Create a function named printBestStudents:

It accepts one object as argument. The object is formed with the following structure:
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};

Calling the function should filter any student with a score < 70 and print to the console the first name and the last name with the first letter capitalized:

{
    "1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
}

Requirements:

Uses seq from immutable.js


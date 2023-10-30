import users from "./users.json" assert {type: 'json'}

// consider this array of names
const names = ["Mohamed amine", "Haroun", "Amira", "faten", "farah"]

// TODO: declare a variable "name" and store in it the str "Amira" from the names array above
// so when i do console.log(name) this will shows "Amira" in the console



// consider the users above,(you can open the file "./users.json" to see what that users has)
// what is the type of users?
// TODO: declare a variable called "len" and store in it how many users are in the users variable

// so when i do console.log(len) i should see a number (how many users are there)





// TODO: from the users variable, i want you to store the ids of the users in a variable called "ids"
// so i want to have an array with ids like this >>> [3, 4, 5, 6, 7, 17, 18, ....] and so on




// TODO: declare a variable called "kevinclark" and store in it the user that has a login property "kevinclark"
// so i should get this when i do console.log(kevinclark) >>>  
/* 
{
    "login": "kevinclark",
    "id": 20,
    "node_id": "MDQ6VXNlcjIw",
    "avatar_url": "https://avatars.githubusercontent.com/u/20?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kevinclark",
    "html_url": "https://github.com/kevinclark",
    "followers_url": "https://api.github.com/users/kevinclark/followers",
    "following_url": "https://api.github.com/users/kevinclark/following{/other_user}",
    "gists_url": "https://api.github.com/users/kevinclark/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kevinclark/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kevinclark/subscriptions",
    "organizations_url": "https://api.github.com/users/kevinclark/orgs",
    "repos_url": "https://api.github.com/users/kevinclark/repos",
    "events_url": "https://api.github.com/users/kevinclark/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kevinclark/received_events",
    "type": "User",
    "site_admin": false
    } 

*/


// TODO: declare a variable called "photos" and store in it the users "avatar_url" only, so when i do console.log(photos) i get this >>>
/* 

[
    "https://avatars.githubusercontent.com/u/3?v=4",
    "https://avatars.githubusercontent.com/u/4?v=4",
    "https://avatars.githubusercontent.com/u/5?v=4",
    .
    .
    .
    .
    .
    .
    .
]


*/

// TODO: declare a variable called "minUsers" store in it all users but with these properties only (id, avatar_url, login)
// So when i do console.log(minUsers) this will shows >>>

/* 

[
    {
    "login": "pjhyett",
    "id": 3,
    "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
    },

    {
    "login": "wycats",
    "id": 4,
    "avatar_url": "https://avatars.githubusercontent.com/u/4?v=4",
    },

    .
    .
    .
    .
    .
    .
]


*/
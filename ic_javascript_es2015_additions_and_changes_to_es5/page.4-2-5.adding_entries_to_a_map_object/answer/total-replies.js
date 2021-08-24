let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let totalReplies = new Map();
totalReplies.set( author1, 42 );
totalReplies.set( author2, 15 );

console.log( `Total Replies: ${totalReplies.get(author1)}` );
console.log( `Total Replies: ${totalReplies.get(author2)}` );

let recentPosts = new Map();

recentPosts.set( "Sam", "ES2015" );
recentPosts.set( "Tyler", "CoffeeScript" );
recentPosts.set( "Brook",  "TypeScript" );

for(let [user, postTitle] of recentPosts){
  console.log(`${user} = ${postTitle}`);
}

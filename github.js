 class Github{
   constructor(){
     this.client_id = 'a98013edeaafaeebbbbe';
     this.client_secret = '4936f4df0ab77c618fa9e286f1a10487909e2e0b ';  
     this.repos_count = 5;
     this.repos_sort = 'created: asc';
   }
   async userProfile(userName){
     const profileApi = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}& client_secret=${this.client_secret} `);
     const repoApi = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}& client_secret=${this.client_secret} `);
     const profile = await profileApi.json();
     const repo = await repoApi.json();
     return { profile, repo};
   } 
 }
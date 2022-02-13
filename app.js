const github  = new Github;
const ui = new UI;

const searchSpace = document.querySelector('#searchUser ');
searchSpace.addEventListener('keyup', callFunction );
function callFunction(e){
  const searchValue = e.target.value; 
  if(searchValue!==''){  
    github.userProfile(searchValue)
      .then(data => {  
        if(data.profile.message==='Not Found'){
          ui.showAlert('user not found.....', 'alert alert-danger' ); 
          ui.clearProfile();
        }else{ 
          ui.showProfile(data.profile);
          ui.showRepos(data.repo);
        }
      });
  }  else{ 
    ui.clearProfile();
  }
  

  }
 
async function getGoogleInfo() {
    try{ 
     let res = await fetch("https:/api.github.com/users/google");
//   console.log(res);
  let data = await res.json()
  console.log(data);
//   console.log(data.name);
}
  catch(error){
    console.log("something went wrong :", error);
  }
}
getGoogleInfo()

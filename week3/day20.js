async function getTwoUSers() {
  try {
    const [google, microsoft] = await Promise.all([
      fetch("https://api.github.com/users/google").then((res) => res.json()),
      fetch("https://api.github.com/users/microsoft").then((res) => res.json()),
    ]);
    console.log(google.name);
    console.log(microsoft.name);
  } catch (error){
    console.log("failed" , error);
    
  }
}
getTwoUSers()
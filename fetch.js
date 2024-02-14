function fetchAPICallout(){
    //return  fetch("https://reqres.in/api/users", { });
    const response = fetch("https://api.thecatapi.com/v1/images/search",{})
    console.log(" fetch response : ",response);
  }
  
  async function asyncApiCallout(){
      try{
        const response =  await fetch("https://api.thecatapi.com/v1/images/search",{});
      //const { page, per_page, total, total_pages,  data } = await response.json()
      const jsonResponse  = await response.json();
      console.log("jsonResponse : ",jsonResponse[0].url);
      let imageTag = document.querySelector(".catImageClass");
      imageTag.src = jsonResponse[0].url;
      //let jsonData = response.json();
    
  
  }catch(error){
      console.log("error : ",error);
      }
  }
  function callAscyncFunction(){
      
   setTimeout(() => {
  asyncApiCallout()
   },1000)
  }
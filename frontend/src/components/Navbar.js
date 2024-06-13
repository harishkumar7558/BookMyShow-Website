import "./Nav.css"
export default function Navbar(){

    return(
        <>
        
<nav className="navbar navbar-expand-sm navbar-light bg-light w-100">
  <div class="container-fluid">
    <img className="imagg" src="./images/images.png" alt="" width={"8%"}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
          <form className="d-flex fm">
        <input class="form-control me-2 ms-2 search" type="text" placeholder="Search for Movies,Event,Plays,Sports and Activities"/>
        <select class="form-select select" aria-label="Default select example">
        <option selected>Select City</option>
        <option value="1">Coimbatore</option>
        <option value="2">Madurai</option>
        <option value="3">Chennai</option>
        <option value="4">Erode</option>
        <option value="5">Villupuram</option>
      </select>
        <button class="btn btn-danger ms-3 smbtn" type="button">Search</button>
      </form>
      {/* <div className="selbar">
      <form class="d-flex">
      <select class="form-select select" aria-label="Default select example">
        <option selected>Select City</option>
        <option value="1">Coimbatore</option>
        <option value="2">Madurai</option>
        <option value="3">Chennai</option>
        <option value="4">Erode</option>
        <option value="5">Villupuram</option>
      </select>
        <button class="btn btn-danger ms-3" type="button">Search</button>
      </form>
      </div> */}


    </div>
  </div>
</nav>
        </>
    )
}
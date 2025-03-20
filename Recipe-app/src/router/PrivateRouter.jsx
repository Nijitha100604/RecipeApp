import {Outlet, Navigate} from 'react-router-dom';
const PrivateRouter = () => {

  const user = localStorage.getItem("user");
  console.log("USER", user);

  return (
    <>
      <div>
        {user ? <Outlet /> : <Navigate to="/login"/>}
      </div>
    </>
  )
}

export default PrivateRouter;
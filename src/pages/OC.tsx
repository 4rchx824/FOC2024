import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function OC() {
  const navigate = useNavigate();

  const { auth, isLoading } = useAuth();
  useEffect(() => {
    console.log(auth);
    if (!auth && !isLoading) {
      navigate("/login");
    }
  }, [auth, isLoading]);

  return <div>OC</div>;
}

export default OC;

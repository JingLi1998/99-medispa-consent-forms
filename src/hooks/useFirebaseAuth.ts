import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

export const useFirebaseAuth = (
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsLoggedIn(true);
        history.push("/");
      } else {
        history.push("/login");
      }
      setIsLoading(false);
    });
  }, [history, setIsLoading, setIsLoggedIn]);
};

import { useEffect } from "react";

export default function Message() {
  useEffect(() => {
    console.log("User is logged in");
    return () => {
      console.log("Bye!");
    };
  }, []);

  return <h1>User is logged in</h1>;
}

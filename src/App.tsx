
import { SpaceX } from "./components/SpaceX";




function App() {


  // useEffect(()=>{
  //   getSpaceInfo()
  // },[])
  return (
    <>
    <div className="text-center">
      <h1>SpaceX</h1>
    </div>
    <SpaceX />
    </>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotatiion = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotatiion];
  };

  const [islandScale, islandPosition, islandRotatiion] =
    adjustIslandForScreenSize();
  return (
    <section className=" h-screen w-full relative">
      <Canvas
        className=" w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            rotatiion={islandRotatiion}
            scale={islandScale}
            position={islandPosition}
          />
        </Suspense>
      </Canvas>
      {/* <div className=" absolute flex justify-center items-center top-28 left-0 right-0 z-10">
        {" "}
        POPUP
      </div> */}
    </section>
  );
};

export default Home;

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Home = () => {
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

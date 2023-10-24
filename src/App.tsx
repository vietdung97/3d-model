import "./index.css";
import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
type Gender = 'male' | 'female';

const heads = {
  x: {
    start: -1.5,
    end: 1.5,
  },
  y: {
    start: 18,
    end: 25,
  },
  z: {
    start: -1.5,
    end: 1.5,
  },
};

const Scene = ({ gender}: {gender: Gender}) => {
  const ref = useRef<any>();
  const obj = useLoader(OBJLoader, "FinalBaseMesh.obj");
  const obj2 = useLoader(FBXLoader, "FemaleBodyModal.fbx");

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => (ref.current.rotation.y += 0.001));

  // Here, we can access the camera via the useThree hook
  useThree(
    ({ camera }) => {
      const positionY = gender === 'male' ? 18 : 120;
      camera.position.y = positionY;
      camera.lookAt(0, 0, 0);
    },
    () => {
      return false;
    }
  );

  const object = gender === 'male' ? obj : obj2;
  const position = gender === 'male' ?  [0, -10, 0] : [0, -60, 0];

  return (
    <primitive
      ref={ref}
      object={object}
      scale={1}
      position={position}
      onClick={(e) => {
        console.log(e.point);
        if (
          e.point.x > heads.x.start &&
          e.point.x < heads.x.end &&
          e.point.y > heads.y.start &&
          e.point.y < heads.y.end &&
          e.point.z > heads.z.start &&
          e.point.z < heads.z.end
        ) {
          console.log("head");
        }
      }}
    />
  );
};


function App() {
  const [gender, setGender] = useState<Gender>('male');
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search)
    console.log("📢[App.tsx:73]: qs: ", qs.get('gender'));
    if(qs && qs.get('gender')) {
      setGender(qs.get('gender') as Gender )
    }
  }, []);

  return (
    <div className="App">
      <Canvas className="canvas3d">
        <Suspense fallback={null}>
          <Scene gender={gender} />

          <OrbitControls
            minPolarAngle={1.5}
            maxPolarAngle={1.5}
            minZoom={0}
            maxZoom={0}
            enablePan={false}
            enableZoom={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

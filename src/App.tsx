import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import "./App.css";
import { Gender, NAME_PART } from "./constants/boundaries";
import touchBodyPart from "./constants/touchBodyPart";
import "./index.css";

const Scene = ({
  gender,
  autoRotation,
}: {
  gender: Gender;
  autoRotation: boolean;
}) => {
  const ref = useRef<any>();
  const obj = useLoader(GLTFLoader, "male.glb");
  const obj2 = useLoader(GLTFLoader, "female.glb");
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (!autoRotation) return;
    ref.current.rotation.y += 0.002;
  });

  // Here, we can access the camera via the useThree hook
  useThree(
    ({ camera }) => {
      const positionY = gender === "male" ? 18 : 120;
      camera.position.y = positionY;
      camera.lookAt(0, 0, 0);
    },
    () => {
      return false;
    }
  );
  const object = gender === "male" ? obj : obj2;
  const position = gender === "male" ? [0, -10, 0] : [0, -60, 0];

  // useLayoutEffect(() => {
  //   object.traverse((child: any) => {
  //     if (child.isMesh) child.material.color.set("#FFE6DE");
  //   });
  // }, [object]);

  return (
    <primitive
      ref={ref}
      object={object.scene}
      scale={gender === "male" ? 1 : 6}
      position={position}
      dispose={null}
      onClick={(e: any) => {
        const part = touchBodyPart(e.point, gender);
        console.log(e.point.x + " " + e.point.y + " " + e.point.z, " " + part);
        if (!part) return;
        if ((window as any).ReactNativeWebView) {
          (window as any).ReactNativeWebView?.postMessage(
            JSON.stringify({ part })
          );
        } else {
          alert(`Touches the body part: ${NAME_PART[part]}`);
        }
      }}
    />
  );
};

function App() {
  const orbitRef = useRef<any>();
  const [gender, setGender] = useState<Gender>("male");
  const [autoRotation, setAutoRotation] = useState(false);
  const timeout = useRef<any>();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        orbitRef?.current?.reset();
      }, 100);
    });
    setTimeout(() => {
      orbitRef?.current?.reset();
    }, 100);
    const qs = new URLSearchParams(window.location.search);
    if (
      qs &&
      qs.get("gender") &&
      (qs.get("gender") === "male" || qs.get("gender") === "female")
    ) {
      setGender(qs.get("gender") as Gender);
    }
    setAutoRotation(qs.get("autoRotation") === "true");
  }, []);

  return (
    <div className="App">
      <Canvas className="canvas3d" gl={{ useLegacyLights: true }}>
        <Suspense fallback={null}>
          <ambientLight castShadow intensity={1} />
          <directionalLight castShadow position={[0, 20, 8]} intensity={3} />
          <Scene gender={gender} autoRotation={autoRotation} />
          <OrbitControls
            ref={orbitRef}
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

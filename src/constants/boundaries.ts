export type Gender = "male" | "female";
export type BodyPart =
  | "neck"
  | "back"
  | "leftShoulder"
  | "rightShoulder"
  | "leftFoot"
  | "rightFoot"
  | "leftWrist"
  | "rightWrist"
  | "leftHip"
  | "rightHip"
  | "leftKnee"
  | "rightKnee";
type BodyPartValue = { x: Coordinate; y: Coordinate; z: Coordinate };
type Coordinate = { start: number; end: number };

type BodyBoundaries = {
  [key: string]: {
    [bodyPart: string]: BodyPartValue;
  };
};

export const NAME_PART: { [key in BodyPart]: string } = {
  neck: "Neck",
  back: "Back",
  leftShoulder: "Shoulders",
  rightShoulder: "Shoulders",
  leftFoot: "Feet",
  rightFoot: "Feet",
  leftWrist: "Wrists",
  rightWrist: "Wrists",
  leftHip: "Hips",
  rightHip: "Hips",
  leftKnee: "Knees",
  rightKnee: "Knees",
};

export const BODY_BOUNDARIES: BodyBoundaries = {
  male: {
    neck: {
      x: {
        start: -0.8,
        end: 0.8,
      },
      y: {
        start: 7,
        end: 8.5,
      },
      z: {
        start: -1,
        end: 1.2,
      },
    },
    back: {
      x: {
        start: -1.9,
        end: 1.9,
      },
      y: {
        start: 2.4,
        end: 5.8,
      },
      z: {
        start: -1.9,
        end: -0.7,
      },
    },
    rightShoulder: {
      x: {
        start: -3,
        end: 3,
      },
      y: {
        start: 5.8,
        end: 7,
      },
      z: {
        start: -1.9,
        end: 1,
      },
    },
    leftShoulder: {
      x: {
        start: -3,
        end: 3,
      },
      y: {
        start: 5.8,
        end: 7,
      },
      z: {
        start: -1.9,
        end: 1,
      },
    },
    rightFoot: {
      x: {
        start: -2.6,
        end: -1.3,
      },
      y: {
        start: -10,
        end: -8.5,
      },
      z: {
        start: -1.5,
        end: 2,
      },
    },
    leftFoot: {
      x: {
        start: 1.3,
        end: 2.6,
      },
      y: {
        start: -10,
        end: -8.5,
      },
      z: {
        start: -1.5,
        end: 2,
      },
    },
    rightWrist: {
      x: {
        start: -5.5,
        end: -4,
      },
      y: {
        start: 1.3,
        end: 2.5,
      },
      z: {
        start: -1.15,
        end: -0.2,
      },
    },
    leftWrist: {
      x: {
        start: 4,
        end: 5.5,
      },
      y: {
        start: 1.3,
        end: 2.5,
      },
      z: {
        start: -1.15,
        end: -0.2,
      },
    },
    rightHip: {
      x: {
        start: -2,
        end: 0,
      },
      y: {
        start: 0.3,
        end: 2.4,
      },
      z: {
        start: -1.6,
        end: 1.4,
      },
    },
    leftHip: {
      x: {
        start: 0,
        end: 2,
      },
      y: {
        start: 0.3,
        end: 2.4,
      },
      z: {
        start: -1.6,
        end: 1.4,
      },
    },
    rightKnee: {
      x: {
        start: -2.3,
        end: -0.8,
      },
      y: {
        start: -5.2,
        end: -2.7,
      },
      z: {
        start: -1.2,
        end: 0.75,
      },
    },
    leftKnee: {
      x: {
        start: 0.8,
        end: 2.3,
      },
      y: {
        start: -5.2,
        end: -2.7,
      },
      z: {
        start: -1.2,
        end: 0.75,
      },
    },
  },
  female: {
    neck: {
      x: {
        start: -3,
        end: 3,
      },
      y: {
        start: 37,
        end: 45,
      },
      z: {
        start: -6.2,
        end: 1.4,
      },
    },
    back: {
      x: {
        start: -8,
        end: 8,
      },
      y: {
        start: 14.5,
        end: 32,
      },
      z: {
        start: -8,
        end: -2.9,
      },
    },
    rightShoulder: {
      x: {
        start: -13.8,
        end: 13.8,
      },
      y: {
        start: 32,
        end: 40.6,
      },
      z: {
        start: -8.3,
        end: 5,
      },
    },
    leftShoulder: {
      x: {
        start: -13.8,
        end: 13.8,
      },
      y: {
        start: 32,
        end: 40.6,
      },
      z: {
        start: -8.3,
        end: 5,
      },
    },
    rightFoot: {
      x: {
        start: -19,
        end: -11,
      },
      y: {
        start: -60,
        end: -53,
      },
      z: {
        start: -8,
        end: 9,
      },
    },
    leftFoot: {
      x: {
        start: 11,
        end: 19,
      },
      y: {
        start: -60,
        end: -53,
      },
      z: {
        start: -8,
        end: 9,
      },
    },
    rightWrist: {
      x: {
        start: -35,
        end: -30,
      },
      y: {
        start: 11,
        end: 14.5,
      },
      z: {
        start: -2,
        end: 3.5,
      },
    },
    leftWrist: {
      x: {
        start: 30,
        end: 35,
      },
      y: {
        start: 11,
        end: 14.5,
      },
      z: {
        start: -2,
        end: 3.5,
      },
    },
    rightHip: {
      x: {
        start: -13,
        end: 0,
      },
      y: {
        start: 1,
        end: 15,
      },
      z: {
        start: -8,
        end: 8,
      },
    },
    leftHip: {
      x: {
        start: 0,
        end: 13,
      },
      y: {
        start: 1,
        end: 15,
      },
      z: {
        start: -8,
        end: 8,
      },
    },
    rightKnee: {
      x: {
        start: -13,
        end: -5,
      },
      y: {
        start: -30,
        end: -21,
      },
      z: {
        start: -6,
        end: 4,
      },
    },
    leftKnee: {
      x: {
        start: 5,
        end: 13,
      },
      y: {
        start: -30,
        end: -21,
      },
      z: {
        start: -6,
        end: 4,
      },
    },
  },
};

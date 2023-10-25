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
    | "rightKnee"
    ;
type BodyPartValue = { x: Coordinate; y: Coordinate; z: Coordinate };
type Coordinate = { start: number; end: number };

type BodyBoundaries = {
    [key: string]: {
        [bodyPart: string]: BodyPartValue;
    };
};

export const NAME_PART: {[key in BodyPart]: string} = {
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
                start: -1.8,
                end: 1.8,
            },
            y: {
                start: 1.7,
                end: 6.7,
            },
            z: {
                start: -2,
                end: -0.4,
            },
        },
        rightShoulder: {
            x: {
                start: -3.1,
                end: -1.6,
            },
            y: {
                start: 5.3,
                end: 6.8,
            },
            z: {
                start: -1.7,
                end: 0.4,
            },
        },
        leftShoulder: {
            x: {
                start: 1.6,
                end: 3.1,
            },
            y: {
                start: 5.3,
                end: 6.8,
            },
            z: {
                start: -1.7,
                end: 0.4,
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
                end: -0.74,
            },
            y: {
                start: 0.6,
                end: 2.9,
            },
            z: {
                start: -1,
                end: 1.1,
            },
        },
        leftHip: {
            x: {
                start: 0.74,
                end: 2,
            },
            y: {
                start: 0.6,
                end: 2.9,
            },
            z: {
                start: -1,
                end: 1.1,
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
};

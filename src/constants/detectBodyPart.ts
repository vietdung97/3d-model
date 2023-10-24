import { BODY_BOUNDARIES, BodyPart, Gender } from "./boundaries";

export default function(currentPoint: any,gender: Gender, bodyPart: BodyPart) {
    if (
        currentPoint.x > BODY_BOUNDARIES[gender][bodyPart].x.start &&
        currentPoint.x < BODY_BOUNDARIES[gender][bodyPart].x.end &&
        currentPoint.y > BODY_BOUNDARIES[gender][bodyPart].y.start &&
        currentPoint.y < BODY_BOUNDARIES[gender][bodyPart].y.end &&
        currentPoint.z > BODY_BOUNDARIES[gender][bodyPart].z.start &&
        currentPoint.z < BODY_BOUNDARIES[gender][bodyPart].z.end
      ) {
        return bodyPart;
      }
}
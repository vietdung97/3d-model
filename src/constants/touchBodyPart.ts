import { Gender } from "./boundaries";
import detectBodyPart from "./detectBodyPart";

export default function(currentPoint: any, gender: Gender) {
    const isNeck = detectBodyPart(currentPoint, gender, 'neck');
    const isBack = detectBodyPart(currentPoint, gender, 'back');
    const isShoulder = detectBodyPart(currentPoint, gender, 'leftShoulder') || detectBodyPart(currentPoint, gender, 'rightShoulder');
    const isFeet = detectBodyPart(currentPoint, gender, 'leftFoot') || detectBodyPart(currentPoint, gender, 'rightFoot');
    const isWrist = detectBodyPart(currentPoint, gender, 'leftWrist') || detectBodyPart(currentPoint, gender, 'rightWrist');
    const isKnee = detectBodyPart(currentPoint, gender, 'leftKnee') || detectBodyPart(currentPoint, gender, 'rightKnee');
    const isHip = detectBodyPart(currentPoint, gender, 'leftHip') || detectBodyPart(currentPoint, gender, 'rightHip');
  
    return isNeck || isBack || isShoulder || isFeet || isWrist || isKnee || isHip;
}
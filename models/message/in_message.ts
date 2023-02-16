import { firestore } from 'firebase-admin';

export interface MessageBase {
  id: string;
  /** 사용자가 남긴 질문 */
  message: string;
  /** 댓글 */
  reply?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
}
export interface InMessage extends MessageBase {
  createAt: string;
  replayAt?: string;
}

export interface InMessageServer {
  createAt: firestore.Timestamp;
  replayAt?: firestore.Timestamp;
}

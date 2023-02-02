import FirebaseAdmin from '../firebase_admin';
import { InAuthUser } from '../in_auth_info';

const MEMBER_COL = 'members';
const SCR_NAME_COL = 'screen_names';

async function add({
  uid,
  email,
  displayName,
  photoURL,
}: InAuthUser): Promise<{ result: true; id: string } | { result: false; message: string }> {
  try {
    const screenName = (email ?? '').replace('@gmail.com', '');
    const addResult = await FirebaseAdmin.getInstance().Firebase.runTransaction(async (transaction) => {
      const memberRef = FirebaseAdmin.getInstance().Firebase.collection(MEMBER_COL).doc(uid);
      const screenNameRef = FirebaseAdmin.getInstance().Firebase.collection(SCR_NAME_COL).doc(screenName);
      const memberDoc = await transaction.get(memberRef);
      if (memberDoc.exists) {
        return false;
      }
      const addData = {
        uid,
        email: email ?? '',
        displayName: displayName ?? '',
        photoURL: photoURL ?? '',
      };
      await transaction.set(memberRef, addData);
      await transaction.set(screenNameRef, addData);
      return true;
    });
    if (addResult === false) {
      return { result: true, id: uid };
    }
    return { result: true, id: uid };
  } catch (err) {
    console.error(err);
    return { result: false, message: '서버 에러' };
  }
}

async function findByScreenName(screenName: string): Promise<InAuthUser | null> {
  const memberRef = FirebaseAdmin.getInstance().Firebase.collection(SCR_NAME_COL).doc(screenName);
  const memberDoc = await memberRef.get();
  if (memberDoc.exists === false) {
    return null;
  }
  const data = memberDoc.data() as InAuthUser;
  return data;
}

const MemberModel = {
  add,
  findByScreenName,
};

export default MemberModel;

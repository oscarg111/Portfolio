import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { Post as IPost } from "./main";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { number } from "yup";

interface Props {
  post: IPost;
}

interface Like {
  userId: string;
  likeId: string;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  const [likes, setLikes] = useState<Like[] | null>(null);

  // ref to collection
  const likesRef = collection(db, "likes"); // specify db and collection

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user?.uid, likeId: newDoc.id }]
            : [{ userId: user?.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToDeleteDate = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteDate.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);
      deleteDoc(likeToDelete);
      await addDoc(likesRef, { userId: user?.uid, postId: post.id });
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  // loop through array and only find things satisfied w find func
  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      {" "}
      <div className="title">
        <h1>{post.title}</h1>
      </div>{" "}
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="image">
        <img src="" />
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={hasUserLiked ? removeLike : addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}{" "}
        </button>
        {likes && <p> Likes: {likes?.length}</p>}{" "}
      </div>
    </div>
  );
};

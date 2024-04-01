import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  // user authentication and navigation variables
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // this describes the shape of the post object
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup
      .string()
      .required("You must add a description")
      .min(10, "The minimum for a post is 10 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  // ref to collection
  const postsRef = collection(db, "posts"); // specify db and collection

  // here is where we add to the database
  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data, // contain all fields in data
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}> {errors.title?.message}</p>
      <textarea placeholder="Description" {...register("description")} />
      <p style={{ color: "red" }}> {errors.description?.message}</p>
      <input type="submit" className="submitForm" />
    </form>
  );
};

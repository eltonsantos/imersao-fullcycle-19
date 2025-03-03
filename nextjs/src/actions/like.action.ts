"use server";

export async function likeAction(formData: FormData) {
  const videoId = formData.get("videoId");
  await fetch(`http://localhost:8000/api/videos/${videoId}/like`, {
    method: "POST",
  });
}

export async function unlikeAction(formData: FormData) {
  const videoId = formData.get("videoId");
  await fetch(`http://localhost:8000/api/videos/${videoId}/unlike`, {
    method: "POST",
  });
}
